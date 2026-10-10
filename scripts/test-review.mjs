/** Regression tests use a disposable data directory; never change the live atlas. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { matchModel, assess, factKey, matchesVersion, groupQueue } from './review-policy.mjs';
import { acknowledged } from './version-review-policy.mjs';
const a = JSON.parse(readFileSync(new URL('../data/atlas.json', import.meta.url)));
const m = { id: 'veo', family: 'Veo', org: 'google', version: '3.1' };
const f = { source: 'official', model_hint: 'Veo 3.1', kind: 'capability', capability: 'v2v', confidence: 'explicit', claim: 'Veo 3.1 edits video', quote: 'Veo 3.1 supports video editing.' };
const source = { id: 'official', tier: 'S' };
const cell = { m: 'veo', c: 'v2v', state: 'unknown' };

test('family routing picks a specific model, never a reverse substring or tied match', () => {
  assert.equal(matchModel(a, 'qwen3.5-omni')?.id, 'qwen-omni');
  assert.equal(matchModel(a, 'Gemini Robotics ER 2')?.id, 'gemini-robotics-er');
  assert.equal(matchModel({ models: [{ id: 'anima', family: 'Anima' }] }, 'animation'), null);
  assert.equal(matchModel({ models: [{ id: 'one', aliases: ['Shared'] }, { id: 'two', aliases: ['Shared'] }] }, 'Shared'), null);
});

test('full variant and quote are required; Lite, inferred text and headings cannot fill', () => {
  assert.ok(matchesVersion(m, 'Veo 3.1'));
  assert.ok(!matchesVersion(m, 'Veo 3.1 Lite'));
  assert.ok(!matchesVersion(m, 'Veo'));
  assert.ok(assess(f, m, cell, source, f.quote).landable);
  for (const change of [{ model_hint: 'Veo 3.1 Lite' }, { kind: 'deprecation' }, { confidence: 'inferred' }, { quote: 'video-to-video' }, { quote: 'Prompt Caching' }, { claim: 'Veo 3.1 is deprecated' }, { claim: 'Veo 3.1 does not support video editing' }]) {
    const item = { ...f, ...change };
    assert.ok(!assess(item, m, cell, source, item.quote).landable, JSON.stringify(change));
  }
  assert.ok(!assess(f, m, cell, source, 'different document').landable);
  assert.ok(!assess(f, m, cell, { ...source, resells: true, own_org: 'other' }, f.quote).landable);
  assert.ok(!assess({ ...f, capability: 'i-4k', quote: 'up to 4MP output' }, m, cell, source, 'up to 4MP output').landable);
});

test('fact identity deduplicates exact evidence across days, retaining sources, conditions and versions', () => {
  assert.equal(factKey({ ...f, day: '2026-09-01' }), factKey({ ...f, day: '2026-10-01' }));
  for (const change of [{ source: 'other' }, { model_hint: 'Veo 3.1 Lite' }, { quote: 'Veo 3.1 supports video editing except Lite.' }, { claim: 'Veo 3.1 does not edit video' }])
    assert.notEqual(factKey(f), factKey({ ...f, ...change }));
  assert.equal(groupQueue([{ action: 'identity', model_hint: 'First' }, { action: 'identity', model_hint: 'Second' }]).length, 2);
});

test('preview acknowledgements leave future stable releases visible', () => {
  const rows = [{ m: 'minimax-text', found: 'M3.1', suffix: '-Flash-Preview' }];
  assert.ok(acknowledged(rows, 'minimax-text', 'M3.1', '-Flash-Preview is available'));
  assert.ok(!acknowledged(rows, 'minimax-text', 'M3.1', ' is generally available'));
  assert.ok(!acknowledged(rows, 'minimax-text', 'M3.2', '-Flash-Preview'));
  const old = [{ m: 'grok', found: 'grok-4.20' }];
  assert.ok(acknowledged(old, 'grok', 'Grok 4.20'));
  assert.ok(!acknowledged(old, 'grok', 'Grok 4.7'));
});

test('queue and decisions preserve mixed sources, colliding claim prefixes, repeat ids and pending tasks', async () => {
  const root = mkdtempSync(join(tmpdir(), 'atlas-review-test-'));
  const previous = process.env.ATLAS_REVIEW_ROOT;
  const write = (name, value) => writeFileSync(join(root, name), JSON.stringify(value));
  const read = name => JSON.parse(readFileSync(join(root, name)));
  try {
    mkdirSync(join(root, 'data/inbox'), { recursive: true });
    mkdirSync(join(root, 'data/snapshots'));
    write('data/atlas.json', { models: [m], capabilities: [{ id: 'v2v', since_note: 'Video editing' }], support: [cell] });
    write('data/sources.json', { sources: [source, { ...source, id: 'other', tier: 'B' }] });
    write('data/snapshots/official.json', { text: f.quote });
    write('data/snapshots/other.json', { text: f.quote });
    const prefix = 'same prefix with twenty four characters';
    write('data/inbox/2026-09-01.json', { results: [
      { source: 'official', findings: [f, { ...f, claim: prefix + ' A' }, { ...f, claim: prefix + ' B' }] },
      { source: 'other', findings: [f] },
    ] });
    write('data/inbox/2026-09-02.json', { results: [{ source: 'official', findings: [f] }] });
    process.env.ATLAS_REVIEW_ROOT = root;
    const r = await import(`./review.mjs?fixture=${root}`);
    let q = r.queue();
    assert.equal(q.length, 4);
    assert.equal(new Set(q.map(x => x.id)).size, 4);
    assert.equal(q.find(x => x.source === 'other').tier, 'B');
    const item = q.find(x => x.source === 'official' && x.claim === f.claim);
    assert.equal(item.related_ids.length, 2);
    assert.equal(item.capability_definition, 'Video editing');
    assert.throws(() => r.decide({ id: item.id, verdict: 'pass' }), /判断依据/);
    r.beginBatch();
    const result = r.decide({ id: item.id, verdict: 'pass', why: 'Checked model-specific official paragraph', who: 'test', actor: 'agent' });
    assert.equal(result.kind, 'wrote');
    const written = read('data/atlas.json').support[0];
    assert.equal(written.state, 'yes');
    assert.equal(written.verified_for, '3.1');
    assert.equal(written.by, 'agent');
    assert.equal(read('data/review-log.json').rows.length, 2);
    assert.equal(r.queue().length, 3);
    const other = r.queue().find(x => x.source === 'other');
    r.decide({ id: other.id, verdict: 'defer', why: 'Need an official primary source', who: 'test' });
    assert.equal(r.pendingQueue()[0].verdict, 'defer');
    assert.equal(r.pendingQueue()[0].status, 'open');
    const before = readFileSync(join(root, 'data/atlas.json'), 'utf8');
    r.resolvePending({ id: other.id, why: 'Resolved as a third-party duplicate; no new capability claim', who: 'test' });
    assert.equal(r.pendingQueue().length, 0);
    assert.equal(readFileSync(join(root, 'data/atlas.json'), 'utf8'), before);
    // A failed validation must roll back the entire batch, including newly created ledgers.
    assert.throws(() => r.endBatch('test invalid batch'), /校验没过/);
    assert.equal(read('data/atlas.json').support[0].state, 'unknown');
    assert.equal(r.queue().length, 4);
    assert.equal(r.pendingQueue().length, 0);
  } finally {
    if (previous === undefined) delete process.env.ATLAS_REVIEW_ROOT; else process.env.ATLAS_REVIEW_ROOT = previous;
    rmSync(root, { recursive: true, force: true });
  }
});

test('triage is read-only on live data', () => {
  const files = ['atlas', 'review-log', 'review-pending', 'review-rejected', 'triage-state'];
  const before = files.map(x => readFileSync(new URL(`../data/${x}.json`, import.meta.url), 'utf8'));
  execFileSync(process.execPath, [new URL('./triage.mjs', import.meta.url).pathname], { stdio: 'pipe' });
  files.forEach((x, i) => assert.equal(readFileSync(new URL(`../data/${x}.json`, import.meta.url), 'utf8'), before[i]));
});


test('sentry does not let an acknowledged higher number hide the actual new version', () => {
  const root = mkdtempSync(join(tmpdir(), 'atlas-sentry-test-'));
  const write = (name, value) => writeFileSync(join(root, name), JSON.stringify(value));
  try {
    mkdirSync(join(root, 'data/snapshots'), { recursive: true });
    write('data/atlas.json', { models: [{ id: 'grok', family: 'Grok', version: '4.6', version_src: 'xai' }] });
    write('data/sources.json', { sources: [{ id: 'xai', vendor: 'grok', good_for: ['version'] }] });
    write('data/version-sentry-ack.json', { rows: [{ m: 'grok', found: 'grok-4.20' }] });
    write('data/snapshots/xai.json', { text: 'Grok 4.6. Models grok-4.20 and newer. Meet Grok 4.7 now available.', fetched_at: '2026-10-10' });
    const run = spawnSync(process.execPath, [new URL('./version-sentry.mjs', import.meta.url).pathname, '--json'], { env: { ...process.env, ATLAS_REVIEW_ROOT: root }, encoding: 'utf8' });
    assert.equal(run.status, 1, run.stderr);
    const report = JSON.parse(readFileSync(join(root, 'data/version-sentry.json')));
    assert.equal(report.rows[0].found_num, '4.7');
    assert.equal(report.n, 1);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('a successful review commits only its own files and keeps unrelated staged work', async () => {
  const root = mkdtempSync(join(tmpdir(), 'atlas-review-git-test-'));
  const previous = process.env.ATLAS_REVIEW_ROOT;
  const write = (name, value) => writeFileSync(join(root, name), JSON.stringify(value));
  const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  try {
    mkdirSync(join(root, 'data/inbox'), { recursive: true });
    mkdirSync(join(root, 'data/snapshots'));
    mkdirSync(join(root, 'scripts'));
    write('data/atlas.json', { models: [m], capabilities: [{ id: 'v2v' }], support: [cell] });
    write('data/sources.json', { sources: [source] });
    write('data/snapshots/official.json', { text: f.quote });
    write('data/inbox/2026-10-01.json', { results: [{ source: 'official', findings: [f] }] });
    writeFileSync(join(root, 'scripts/validate.mjs'), 'process.exit(0);');
    git('init', '-q');
    git('add', '.');
    git('-c', 'user.name=test', '-c', 'user.email=test@example.invalid', 'commit', '-qm', 'fixture');
    writeFileSync(join(root, 'unrelated.txt'), 'User-owned staged work');
    git('add', 'unrelated.txt');
    process.env.ATLAS_REVIEW_ROOT = root;
    const r = await import(`./review.mjs?fixture=${root}`);
    r.decide({ id: r.queue()[0].id, verdict: 'pass', why: 'Verified primary source for this version', who: 'test' });
    const committed = git('show', '--format=', '--name-only', 'HEAD').trim().split('\n').sort();
    assert.deepEqual(committed, ['data/atlas.json', 'data/review-log.json']);
    assert.equal(git('diff', '--cached', '--name-only').trim(), 'unrelated.txt');
    assert.equal(r.queue().length, 0);
  } finally {
    if (previous === undefined) delete process.env.ATLAS_REVIEW_ROOT; else process.env.ATLAS_REVIEW_ROOT = previous;
    rmSync(root, { recursive: true, force: true });
  }
});

/**
 * 人审的**处理流程** —— 不只是看，是「通过之后发生什么、不通过之后发生什么」。
 *
 * 负责人 2026-08-11：「不能只是通知、查看，得有处理的流程。
 * 如果人工审阅通过了怎么办、未通过怎么办这是一条路。」
 *
 * ## 三种去向，不是两种
 *
 * 「通过」不等于「自动写库」。红色那批之所以是红色，正是因为**收件箱里的信息
 * 不够建一个实体** —— 一条 claim 只有「模型名 + 能力 + 原文」，
 * 而新建一条产品线还要公司、轨、层级、架构依据。
 * 半填的实体比没有更糟：它会挂到关系图和演化树上，错得很自信。
 *
 * 所以「通过」按能不能落到具体格子分两路：
 *
 *   ✅ 通过 · 已落格   → 直接写进 atlas.json（只补 ⬜，不覆盖已有结论），
 *                      记 `by: "human"` 和审阅人。这一条马上生效。
 *   📋 通过 · 待补全   → 认了这件事是真的，但缺字段建不了实体。
 *                      写进 `data/review-pending.json`，**带上还缺什么**，
 *                      不进 atlas.json —— 它是一张明确的采集单，不是半成品数据。
 *   ❌ 不通过         → 写进 `data/review-rejected.json`，带理由。
 *                      **是记下来不是删掉**：同一条再被抓到时能认出「看过、否了」，
 *                      也才说得清为什么没收它。
 *
 * 三种都追加进 `data/review-log.json`（只增不改）并提交 —— §59.4.c
 * 用 git 当数据库：commit 是 Revision，作者区分人和 bot，diff 就是 ChangeEvent。
 *
 *   node scripts/review.mjs                       # 列队列
 *   node scripts/review.mjs --id X --pass  --who 名字
 *   node scripts/review.mjs --id X --reject --why "理由" --who 名字
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const P = (f) => join(ROOT, f);
const readJSON = (f, d) => (existsSync(P(f)) ? JSON.parse(readFileSync(P(f), "utf8")) : d);
const writeJSON = (f, v) => writeFileSync(P(f), `${JSON.stringify(v, null, 2)}\n`);
const NOW = () => new Date().toISOString().slice(0, 19).replace("T", " ");

/** 稳定 id：同一条 claim 无论跑几遍都是同一个 id，否则「否决过」就记不住。 */
const idOf = (f, day) =>
  /**
   * ⚠️ 用 `||` 不是 `??`。**空能力是 `""` 不是 `null`**，`??` 不会兜底，
   * 于是同一个模型下所有「没落到能力上」的 finding 都塌成同一个 id ——
   * 端到端一测：处理一条，队列少了两条。**又一次「没有值和取不到值混在一起」。**
   * 加 kind 与 claim 前缀，同源同模型的多条也分得开。
   */
  `${day}::${f.source}::${(f.model_hint || "").toLowerCase()}::${f.capability || f.kind}::${(f.claim || "").slice(0, 24)}`;

export function queue() {
  const rejected = new Set((readJSON("data/review-rejected.json", { rows: [] }).rows ?? []).map((r) => r.id));
  const pending = new Set((readJSON("data/review-pending.json", { rows: [] }).rows ?? []).map((r) => r.id));
  const done = new Set((readJSON("data/review-log.json", { rows: [] }).rows ?? []).map((r) => r.id));
  const atlas = readJSON("data/atlas.json", {});
  const reg = readJSON("data/sources.json", { sources: [] });
  const tierOf = (id) => reg.sources.find((s) => s.id === id)?.tier ?? "?";
  const capIds = new Set((atlas.capabilities ?? []).map((c) => c.id));

  const out = [];
  for (const day of readdirSync(P("data/inbox")).filter((f) => f.endsWith(".json")).sort()) {
    const box = readJSON(`data/inbox/${day}`, {});
    /**
     * 收件箱是**两层**：`results`（每个源一条）里再套 `findings`。
     * 第一版我按 `box.facts` 读，跑出来「待审 0 条」—— 而 triage 明明有 17 条。
     * **零很像结论，实际是字段名猜错了** —— 又一次「静默出错值」。
     * 源信息（source / tier / url）在外层，抽取出来的事实在内层，两边都要带上。
     */
    for (const r of box.results ?? []) {
      for (const raw of r.findings ?? []) {
      const f = { ...raw, source: r.source, url: r.url };
      const id = idOf(f, day.replace(".json", ""));
      if (rejected.has(id) || pending.has(id) || done.has(id)) continue;
      // 能不能落到一个具体格子 —— 这决定「通过」之后走哪一路
      const m = (atlas.models ?? []).find(
        (x) =>
          (f.model_hint ?? "").toLowerCase().includes(x.family.toLowerCase()) ||
          (f.model_hint ?? "").toLowerCase().includes(x.id),
      );
      const landable = !!m && !!f.capability && capIds.has(f.capability);
      out.push({
        id, day: day.replace(".json", ""), source: f.source, tier: tierOf(f.source),
        kind: f.kind, model_hint: f.model_hint, model: m?.id ?? null,
        capability: f.capability ?? null, claim: f.claim, quote: f.quote,
        confidence: f.confidence, landable,
        missing: landable ? [] : [
          !m && "库里没有这条产品线（要先建实体：公司 / 轨 / 层级 / 架构依据）",
          m && !f.capability && "没落到具体能力上",
          m && f.capability && !capIds.has(f.capability) && `能力 id 「${f.capability}」不在本体里`,
        ].filter(Boolean),
      });
      }
    }
  }
  return out;
}

function log(row) {
  const l = readJSON("data/review-log.json", {
    $note: "人审流水，**只增不改**。git commit 是 Revision，diff 是 ChangeEvent（§59.4.c）。",
    rows: [],
  });
  l.rows.push(row);
  writeJSON("data/review-log.json", l);
}

function commit(msg, files) {
  try {
    execFileSync("node", [P("scripts/validate.mjs")], { stdio: "pipe" });
  } catch (e) {
    throw new Error(`校验没过，不提交：${String(e.stdout ?? e).slice(-400)}`);
  }
  /**
   * **先 add 再 commit。** `git commit <路径>` 对**尚未被跟踪的新文件**会直接失败
   * （pathspec did not match any file known to git）—— 而这几本账第一次写的时候
   * 正好都是新文件。端到端一测才发现：数据写了、提交没成，
   * **而「git 当数据库」正是这套的根基**，不提交等于这条决定没发生过。
   */
  execFileSync("git", ["add", ...files], { cwd: ROOT });
  execFileSync("git", ["-c", "user.name=atlas-review", "-c", "user.email=review@xiamimate.local",
    "commit", "-q", "-m", msg], { cwd: ROOT });
}

export function decide({ id, verdict, why = "", who = "unknown" }) {
  const item = queue().find((x) => x.id === id);
  if (!item) throw new Error(`队列里没有这一条：${id}`);
  const at = NOW();

  if (verdict === "reject") {
    const r = readJSON("data/review-rejected.json", {
      $note: "人审否决的 claim。**是记下来不是删掉** —— 同一条再被抓到时要能认出「看过、否了」。",
      rows: [],
    });
    r.rows.push({ id, at, who, why, claim: item.claim, source: item.source });
    writeJSON("data/review-rejected.json", r);
    log({ id, at, who, verdict: "reject", why, claim: item.claim });
    commit(`review: 否决 1 条（${who}）\n\n${item.claim}\n理由：${why || "（未填）"}`,
      ["data/review-rejected.json", "data/review-log.json"]);
    return { ok: true, kind: "reject" };
  }

  if (!item.landable) {
    // 认了这件事是真的，但缺字段建不了实体 —— 出一张采集单，不写半成品进库
    const p = readJSON("data/review-pending.json", {
      $note: "人审认可、但**信息不够落库**的条目。它是采集单，不是数据 —— 不要读进前端。",
      rows: [],
    });
    p.rows.push({ id, at, who, claim: item.claim, quote: item.quote, source: item.source, missing: item.missing });
    writeJSON("data/review-pending.json", p);
    log({ id, at, who, verdict: "pass-pending", why, claim: item.claim, missing: item.missing });
    commit(`review: 通过但待补全 1 条（${who}）\n\n${item.claim}\n还缺：${item.missing.join("；")}`,
      ["data/review-pending.json", "data/review-log.json"]);
    return { ok: true, kind: "pending", missing: item.missing };
  }

  // 能落格：写进 atlas.json。**只补 ⬜，不覆盖已有结论** —— 覆盖是另一件事，得单独讨论。
  const atlas = readJSON("data/atlas.json", {});
  const cell = atlas.support.find((s) => s.m === item.model && s.c === item.capability);
  if (!cell) throw new Error("找不到这一格（模型 × 能力）");
  if (cell.state !== "unknown") {
    return { ok: false, kind: "occupied", msg: `这一格已经是「${cell.state}」，不覆盖 —— 要改得单独走一次讨论` };
  }
  cell.state = "yes";
  cell.src = item.source;
  cell.note = `${item.claim}｜原文：「${item.quote}」`;
  cell.by = "human";
  cell.reviewed_by = who;
  cell.reviewed_at = at;
  writeJSON("data/atlas.json", atlas);
  log({ id, at, who, verdict: "pass", why, claim: item.claim, wrote: `${item.model}×${item.capability}` });
  commit(`review: 人审通过并写入 ${item.model} × ${item.capability}（${who}）\n\n` +
    `${item.claim}\n原文：「${item.quote}」\n来源：${item.source}（${item.tier} 级）\n\n` +
    `**只补 ⬜，没有覆盖已有结论。**`,
    ["data/atlas.json", "data/review-log.json"]);
  return { ok: true, kind: "wrote", cell: `${item.model}×${item.capability}` };
}

// ── CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  const arg = (k) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : undefined; };
  const id = arg("--id");
  if (!id) {
    const q = queue();
    console.log(`待审 ${q.length} 条（能直接落格的 ${q.filter((x) => x.landable).length} 条）\n`);
    for (const x of q.slice(0, 30))
      console.log(`${x.landable ? "▣" : "▢"} ${x.id}\n   ${x.claim}\n   ${x.landable ? `→ ${x.model} × ${x.capability}` : `缺：${x.missing.join("；")}`}\n`);
  } else {
    const verdict = process.argv.includes("--reject") ? "reject" : "pass";
    console.log(JSON.stringify(decide({ id, verdict, why: arg("--why") ?? "", who: arg("--who") ?? "cli" }), null, 1));
  }
}

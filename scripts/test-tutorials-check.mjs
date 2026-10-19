import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';

test('bounded link checker preserves dead, drift, rate limit and network classifications',()=>{
  const root=mkdtempSync(join(tmpdir(),'atlas-links-'));
  try {
    mkdirSync(join(root,'data'));mkdirSync(join(root,'bin'));
    const urls=['https://example.test/ok','https://example.test/drift','https://example.test/rate','https://example.test/forbidden','https://example.test/dead','https://example.test/network','https://github.com/example/repository'];
    writeFileSync(join(root,'data/atlas.json'),JSON.stringify({topics:[{projects:[{zh:'Fixture',tutorials:urls.map(url=>({url,title:url,page_title:'Expected'}))}]}]}));
    writeFileSync(join(root,'bin/curl'),`#!${process.execPath}\nconst url=process.argv.at(-1);if(url.endsWith('/network'))process.exit(28);const code=url.endsWith('/forbidden')?'403':url.endsWith('/rate')?'429':url.endsWith('/dead')||url.includes('github.com')?'404':'200';console.log('<title>'+ (url.endsWith('/drift')?'Changed':'Expected')+'</title>\\n__STATUS__'+code);`,{mode:0o755});
    writeFileSync(join(root,'bin/gh'),`#!${process.execPath}\nconsole.log('{}');`,{mode:0o755});
    const result=spawnSync(process.execPath,[new URL('./tutorials-check.mjs',import.meta.url).pathname],{cwd:root,env:{...process.env,PATH:join(root,'bin')+':'+process.env.PATH},encoding:'utf8',timeout:15000});
    assert.equal(result.status,1,result.stderr);
    assert.match(result.stdout,/7 条：通过 1 · 打不开 1 · 标题变了 1 · 限流或够不着 4/);
    assert.match(result.stdout,/gh api 说它活着/);
    writeFileSync(join(root,'data/atlas.json'),JSON.stringify({topics:[{projects:[{zh:'Blocked host',tutorials:Array.from({length:10},(_,i)=>({url:`https://blocked.example/${i}/network`,title:String(i)}))}]}]}));
    const blocked=spawnSync(process.execPath,[new URL('./tutorials-check.mjs',import.meta.url).pathname],{cwd:root,env:{...process.env,PATH:join(root,'bin')+':'+process.env.PATH},encoding:'utf8',timeout:15000});
    assert.equal(blocked.status,0,blocked.stderr);
    assert.match(blocked.stdout,/10 条：通过 0 · 打不开 0 · 标题变了 0 · 限流或够不着 10/);
    assert.match(blocked.stdout,/本条暂缓，未核实/);
  } finally {rmSync(root,{recursive:true,force:true});}
});

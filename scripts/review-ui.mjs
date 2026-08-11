/**
 * 本机审阅台 —— 和采集 agent 配套的那一半。
 *
 * ## 为什么是本机、为什么单独一个
 *
 * 一度想放进运营台，负责人 2026-08-11 叫停：「这个审阅这么复杂的话，就不要放运营台了」。
 * 症结不是界面难做，是**架构错配**：atlas 的数据在 git 仓库里，前端是静态导出的
 * （`lib/atlas.ts` 直接 import `data/atlas.json`，数据即构建产物）——
 * 线上运营台点「通过」写不到任何地方，硬接就要先改部署。
 * **为一个只能在本机闭环的流程去改线上，不划算。**
 *
 * 所以它跟着采集 agent 走：agent 在哪台机器上跑，审阅台就在那台机器上开。
 *
 * ## 一个文件，零依赖，零构建
 *
 * 页面和 API 都在这里。判断与写入全部转发给 `review.mjs` ——
 * **口径不能有第二份**：命令行和界面必须走同一条路径，否则两边迟早给出不同结果。
 *
 *   node scripts/review-ui.mjs      →  http://127.0.0.1:8230
 */
import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { queue, decide } from "./review.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.env.ATLAS_REVIEW_PORT ?? 8230);
/** **只听 127.0.0.1。** 这支能写 atlas.json 并提交 git —— 绑到 0.0.0.0 等于把写库权限挂到局域网上。 */
const HOST = "127.0.0.1";

const json = (res, code, body) => {
  res.writeHead(code, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
};

const PAGE = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>虾米看AI · 本机审阅台</title>
<style>
 :root{--ink:#16212c;--muted:#647587;--rule:#e2e6ec;--brand:#0c9488;--brand-ink:#097067;--no:#c0392b;--card:#fff;--paper:#fff}
 *{box-sizing:border-box}
 body{margin:0;background:var(--paper);color:var(--ink);
   font:15px/1.6 -apple-system,"PingFang SC","Microsoft YaHei",system-ui,sans-serif}
 header{border-bottom:2.5px solid var(--ink);padding:18px 24px 12px;position:sticky;top:0;background:var(--paper);z-index:2}
 h1{font-size:24px;margin:0 0 4px;letter-spacing:-.01em}
 .sub{color:var(--muted);font-size:13px}
 main{padding:16px 24px 60px;max-width:1080px}
 .todo{border:1px solid var(--rule);border-radius:12px;padding:12px 14px;margin:14px 0;font-size:13.5px;color:var(--muted)}
 .todo b{color:var(--ink)}
 .item{border:1px solid var(--rule);border-radius:12px;padding:14px;margin:10px 0;background:var(--card)}
 .row{display:flex;gap:10px;align-items:baseline;flex-wrap:wrap}
 .tag{font-size:11px;padding:2px 7px;border-radius:6px}
 .land{background:rgba(12,148,136,.1);color:var(--brand-ink)}
 .miss{background:rgba(192,57,43,.08);color:var(--no)}
 .claim{font-size:15.5px;font-weight:600;margin:8px 0 4px}
 .quote{color:var(--muted);font-size:13px;border-left:2px solid var(--rule);padding-left:10px;margin:6px 0}
 .meta{color:var(--muted);font-size:12.5px}
 .acts{display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;align-items:center}
 button{font:inherit;font-size:13.5px;border:1px solid var(--rule);background:#fff;color:var(--ink);
   border-radius:8px;padding:6px 13px;cursor:pointer}
 button.pass{border-color:var(--brand);color:var(--brand-ink);font-weight:600}
 button.rej{border-color:var(--no);color:var(--no)}
 button:disabled{opacity:.45;cursor:default}
 input{font:inherit;font-size:13.5px;border:1px solid var(--rule);border-radius:8px;padding:6px 10px;flex:1;min-width:200px}
 .done{color:var(--brand-ink);font-size:13px}
 .empty{color:var(--muted);padding:30px 0}
</style></head><body>
<header>
  <h1>虾米看AI · 本机审阅台</h1>
  <div class="sub" id="sub">读取中…</div>
</header>
<main>
  <div class="todo" id="todo"></div>
  <div id="list"></div>
</main>
<script>
const $=s=>document.querySelector(s);
let who=localStorage.getItem('atlas-who')||'';
if(!who){who=prompt('你是谁？（会记进人审流水，用于日后追溯）')||'unknown';localStorage.setItem('atlas-who',who);}

function esc(s){return String(s??'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));}

async function load(){
  const r=await fetch('/api/queue').then(r=>r.json());
  $('#sub').textContent=\`待审 \${r.total} 条 · 能直接落格 \${r.landable} 条 · 审阅人 \${who}\`;
  $('#todo').innerHTML=r.todo
    ? '<b>另外还有：</b>'+esc(r.todo)
    : '';
  if(!r.items.length){$('#list').innerHTML='<div class="empty">没有待审的。注意这和「今天没跑」不是一回事。</div>';return;}
  $('#list').innerHTML=r.items.map(it=>\`
    <div class="item" id="i-\${btoa(unescape(encodeURIComponent(it.id))).replace(/=/g,'')}">
      <div class="row">
        \${it.landable
          ? '<span class="tag land">能直接落格 → '+esc(it.model)+' × '+esc(it.capability)+'</span>'
          : '<span class="tag miss">缺：'+esc(it.missing.join('；'))+'</span>'}
        <span class="meta">\${esc(it.source)}（\${esc(it.tier)} 级）· \${esc(it.day)} · \${esc(it.kind)}</span>
      </div>
      <div class="claim">\${esc(it.claim)}</div>
      <div class="quote">原文：\${esc(it.quote)}</div>
      <div class="acts">
        <button class="pass" data-id="\${esc(it.id)}" data-v="pass">\${it.landable?'通过':'通过 · 记成采集单'}</button>
        <button class="rej"  data-id="\${esc(it.id)}" data-v="reject">不通过</button>
        <input placeholder="不通过必须写理由" data-why="\${esc(it.id)}">
      </div>
    </div>\`).join('');
}

document.addEventListener('click',async e=>{
  const b=e.target.closest('button[data-v]'); if(!b)return;
  const id=b.dataset.id, verdict=b.dataset.v;
  const why=document.querySelector(\`input[data-why="\${CSS.escape(id)}"]\`)?.value||'';
  if(verdict==='reject'&&!why.trim()){alert('不通过必须写理由 —— 一条没有理由的否决等于没记');return;}
  b.closest('.acts').querySelectorAll('button').forEach(x=>x.disabled=true);
  const r=await fetch('/api/decide',{method:'POST',headers:{'content-type':'application/json'},
    body:JSON.stringify({id,verdict,why,who})}).then(r=>r.json());
  const box=b.closest('.item');
  if(r.error||r.ok===false){
    box.querySelector('.acts').insertAdjacentHTML('beforeend','<span class="meta">'+esc(r.error||r.msg)+'</span>');
    b.closest('.acts').querySelectorAll('button').forEach(x=>x.disabled=false);
    return;
  }
  const said={
    wrote:'已写入 '+r.cell+'，并提交',
    pending:'已记成采集单：还缺 '+(r.missing||[]).join('；'),
    reject:'已记进否决账',
    duplicate:'库里已有同样结论（'+r.cell+'）—— 记为重复，没动数据',
    conflict:'⚠ 与已有结论相反（库里是「'+r.existing+'」）—— 进冲突台账，等人裁决',
  }[r.kind]||'已处理';
  box.querySelector('.acts').outerHTML='<div class="done">✓ '+esc(said)+'</div>';
});

load();
</script></body></html>`;

createServer(async (req, res) => {
  const path = req.url.split("?")[0];

  if (path === "/" || path === "/index.html") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    return res.end(PAGE);
  }

  if (path === "/api/queue") {
    try {
      const q = queue();
      // 顺带把另外三摞待办的一句话摘要带上 —— 审阅台就是本机唯一的入口
      const todoFile = join(ROOT, "data/TODO.md");
      const todo = existsSync(todoFile)
        ? readFileSync(todoFile, "utf8").split("\n").filter((l) => l.startsWith("## ") && !l.includes("收件箱"))
            .map((l) => l.replace(/^##\s*/, "")).join("；")
        : "";
      return json(res, 200, { total: q.length, landable: q.filter((x) => x.landable).length, items: q, todo });
    } catch (e) { return json(res, 500, { error: String(e.message) }); }
  }

  if (path === "/api/decide" && req.method === "POST") {
    let raw = "";
    for await (const c of req) raw += c;
    try {
      const { id, verdict, why, who } = JSON.parse(raw || "{}");
      if (!id || !["pass", "reject"].includes(verdict))
        return json(res, 400, { error: "要有 id，verdict 只能是 pass 或 reject" });
      // 否决必须写理由 —— **一条没有理由的否决，等于没记**
      if (verdict === "reject" && !String(why ?? "").trim())
        return json(res, 400, { error: "否决必须写理由" });
      return json(res, 200, decide({ id, verdict, why: why ?? "", who: who ?? "local" }));
    } catch (e) { return json(res, 500, { error: String(e.message) }); }
  }

  json(res, 404, { error: "没有这个接口" });
}).listen(PORT, HOST, () => {
  console.log(`本机审阅台：http://${HOST}:${PORT}`);
  console.log("只听 127.0.0.1 —— 它能写 atlas.json 并提交 git。");
});

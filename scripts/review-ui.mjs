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
import { queue, decide, requoteQueue, requoteDecide } from "./review.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.env.ATLAS_REVIEW_PORT ?? 8230);
/** **只听 127.0.0.1。** 这支能写 atlas.json 并提交 git —— 绑到 0.0.0.0 等于把写库权限挂到局域网上。 */
const HOST = "127.0.0.1";

const json = (res, code, body) => {
  res.writeHead(code, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(body));
};

/**
 * ⚠️ **页面脚本里不要拼 onclick 字符串。**
 *
 * 2026-08-15 加引文回查标签页时，第一版把 `rqDo('id','action')` 拼进 onclick 属性，
 * 而 id 形如 `vidu-up|vidu-q × flf` —— 嵌套引号一层套一层，浏览器直接
 * `missing ) after argument list`，**整段脚本没跑起来**：卡片数显示 0、连标签切换都失效。
 * **「0 条」看起来很像「没数据」** —— 又一次静默出错值。改成 data 属性 + 事件委托。
 *
 * ⚠️ 而且这一段是写在模板字符串 `PAGE` 里的：**注释里带反引号会把模板提前结束**，
 * 我紧接着又栽了一次（`node --check` 一跑就现形）。**改完这个文件必过 `node --check`。**
 */
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
  <div id="tabs" style="display:flex;gap:8px;margin-bottom:16px">
    <button id="tab-inbox" class="pass">收件箱</button>
    <button id="tab-rq">引文回查 <span id="rq-n"></span></button>
  </div>
  <div id="pane-inbox">
    <div class="todo" id="todo"></div>
    <div id="list"></div>
  </div>
  <div id="pane-rq" hidden></div>
</main>
<script>
const $=s=>document.querySelector(s);
let who=localStorage.getItem('atlas-who')||'';
if(!who){who=prompt('你是谁？（会记进人审流水，用于日后追溯）')||'unknown';localStorage.setItem('atlas-who',who);}

function esc(s){return String(s??'').replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));}

/* ── 引文回查那一摞 ────────────────────────────────────────────
 * 和收件箱**不共用一套按钮**：那边是「这条事实对不对」二选一，
 * 这边是「这句引文该归到哪」三选一，而且落点在三个不同文件上。
 * 每条都把**锚**印出来 —— 多数「找不到」其实是锚提取误伤
 * （我们自己写的参数罗列被当成了厂商原句），一眼就能认出来。
 */
const RQ_KIND_HELP={
 '本页没有·别处有':'这句话在别的快照里找得到。<b>两种成因要分</b>：真署错了页 / 这一页的快照是残的（抓回来的是导航不是正文）。',
 '找不到':'全站快照都没这句。<b>先看锚像不像厂商原句</b> —— 如果是我们自己写的参数罗列（带斜杠那种），那不是错，选「认了」。',
 '快照无正文':'这个源盯的是元数据接口（只有 items 没正文），引文来自模型卡/README。<b>该换抓法</b>，不是改署名。',
};
let RQ=[];
async function loadRq(){
  RQ=await fetch('/api/requote').then(r=>r.json());
  $('#rq-n').textContent=RQ.total?'('+RQ.total+')':'';
  const byKind={};for(const it of RQ.items)(byKind[it.kind]??=[]).push(it);
  $('#pane-rq').innerHTML = !RQ.total
    ? '<div class="empty"><b>回查没有待判的。</b>这一摞由 <code>requote.mjs</code> 每天随 tick 重算。</div>'
    : Object.entries(byKind).map(([k,v])=>
        '<h2 style="font-size:15px;margin:18px 0 6px">'+esc(k)+' <span style="color:#888;font-weight:400">'+v.length+' 条</span></h2>'
        +'<div class="todo" style="margin-bottom:10px">'+RQ_KIND_HELP[k]+'</div>'
        +v.map(rqCard).join('')
      ).join('');
}
function rqCard(it){
  const alt=it.elsewhere.map(e=>
    '<button data-act="repoint" data-to="'+esc(e)+'">改署名到 '+esc(e)+'</button>').join(' ');
  return '<article data-rq="'+esc(it.id)+'">'
    +'<div style="font-size:12px;color:#888">'+esc(it.src)+'</div>'
    +'<div style="font-weight:600;margin:2px 0 6px">'+esc(it.at)+'</div>'
    +(it.anchor?'<div class="anchor" style="font-size:12.5px;color:#555;background:#f6f7f8;padding:6px 9px;border-radius:6px;margin-bottom:8px">锚：'+esc(it.anchor)+'</div>':'')
    +'<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">'
    + alt
    +'<button data-act="refetch">换这个源的抓法…</button>'
    +'<button data-act="accept">认了：不是逐字原文</button>'
    +'</div><div class="done" hidden></div></article>';
}
$('#pane-rq').addEventListener('click',async e=>{
  const btn=e.target.closest('button[data-act]'); if(!btn) return;
  const card=btn.closest('[data-rq]'), id=card.dataset.rq, action=btn.dataset.act;
  let to=btn.dataset.to||'';
  if(action==='refetch'){ to=prompt('新的抓取地址（要能抓到我们引的那句话）')||''; if(!to) return; }
  const why=prompt('为什么这么判？（会记进人审流水）')??'';
  card.querySelectorAll('button').forEach(b=>b.disabled=true);
  const r=await fetch('/api/requote/decide',{method:'POST',headers:{'content-type':'application/json'},
    body:JSON.stringify({id,action,to,why,who})}).then(r=>r.json());
  const d=card.querySelector('.done'); d.hidden=false;
  d.textContent=r.ok?'已处理并提交':'失败：'+(r.error||'');
  if(!r.ok) card.querySelectorAll('button').forEach(b=>b.disabled=false);
  else setTimeout(loadRq,600);
});

$('#tab-inbox').onclick=()=>{$('#pane-inbox').hidden=false;$('#pane-rq').hidden=true;
  $('#tab-inbox').className='pass';$('#tab-rq').className='';};
$('#tab-rq').onclick=()=>{$('#pane-inbox').hidden=true;$('#pane-rq').hidden=false;
  $('#tab-rq').className='pass';$('#tab-inbox').className='';loadRq();};

async function load(){
  const r=await fetch('/api/queue').then(r=>r.json());
  $('#sub').textContent=\`待审 \${r.total} 条 · 能直接落格 \${r.landable} 条 · 审阅人 \${who}\`;
  $('#todo').innerHTML=(r.others&&r.others.length)
    ? '<b>下面这几摞不在这里审</b>（审阅台只管收件箱那一摞），各自的下一步：<ul style="margin:.5em 0 0;padding-left:1.2em">'
      + r.others.map(o=>'<li style="margin:.3em 0">'+esc(o.title)+(o.how?'<br><code style="font-size:.9em;color:#555">'+esc(o.how)+'</code>':'')+'</li>').join('')
      + '</ul>'
    : '';
  if(!r.items.length){
    $('#list').innerHTML='<div class="empty">'
      +'<b>收件箱里没有待审的。</b>注意这和「今天没跑」不是一回事。<br>'
      +((r.others&&r.others.length)
        ? '通知里说的那几十条<b>不是这一摞</b> —— 它们在上面列着，各有各的去处。'
        : '')
      +'</div>';
    return;
  }
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

load();loadRq();
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
      /**
       * 另外几摞待办也带上。**但光带标题不够 —— 那正是这一版要修的。**
       *
       * 负责人 2026-08-13 收到通知说「46 条待办 …… 必须人工」，
       * 打开审阅台看到的是空的：那 46 条是谱系候选与收录候选，
       * **审阅台压根不管这两摞**（它只读 `data/inbox`）。
       * 页面上原来只印了一行标题、没说去哪儿办 ——
       * 于是人到了一个空页面，只能怀疑是不是站坏了。
       *
       * 这个文件顶上写着「审阅台就是本机唯一的入口」，**那是它自己许下却没兑现的承诺**。
       * 现在把 TODO.md 里每一摞的「→ 下一步该跑什么」一起读出来，成对给前端。
       */
      const todoFile = join(ROOT, "data/TODO.md");
      const others = [];
      if (existsSync(todoFile)) {
        const lines = readFileSync(todoFile, "utf8").split("\n");
        for (let i = 0; i < lines.length; i++) {
          if (!lines[i].startsWith("## ") || lines[i].includes("收件箱")) continue;
          const title = lines[i].replace(/^##\s*/, "");
          // 下一步就在这一节里以 `→ ` 打头的那一行
          let how = "";
          for (let j = i + 1; j < lines.length && !lines[j].startsWith("## "); j++)
            if (lines[j].startsWith("→ ")) { how = lines[j].slice(2).trim(); break; }
          others.push({ title, how });
        }
      }
      return json(res, 200, {
        total: q.length, landable: q.filter((x) => x.landable).length, items: q,
        todo: others.map((o) => o.title).join("；"),   // 兼容旧字段
        others,
      });
    } catch (e) { return json(res, 500, { error: String(e.message) }); }
  }

  if (path === "/api/requote") {
    const items = requoteQueue();
    return json(res, 200, { total: items.length, items });
  }

  if (path === "/api/requote/decide" && req.method === "POST") {
    let body = "";
    req.on("data", (c) => (body += c));
    req.on("end", () => {
      try { json(res, 200, requoteDecide(JSON.parse(body))); }
      catch (e) { json(res, 200, { ok: false, error: String(e.message) }); }
    });
    return;
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

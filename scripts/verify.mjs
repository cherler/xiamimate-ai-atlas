/**
 * 出站前的回归验证。
 *
 * ## 为什么要有这支
 *
 * 这个项目在「验证」这一步栽过两次，两次都是**量错了东西却以为量对了**：
 *
 * 1. 本地服务器没配 `{path}.html`，于是每个详情页都返回 200 —— 但渲染的是首页。
 *    「200 就算通过」量的是 HTTP，不是页面。
 * 2. 用 `locator('svg').count()` 判断移动端有没有画图，但 `hidden md:block` 的元素
 *    **仍然在 DOM 里**。数 DOM 量的是标签，不是「用户看不看得见」。
 *
 * 所以这里的规矩：**每一条都量到用户能感知的那一层为止。**
 *   - 页面对不对：查该页独有的字符串，不查状态码
 *   - 看不看得见：查 `getClientRects()` 有没有面积，不查元素在不在
 *
 * 静态服务器也必须和 Caddy 一样解析 `{path}.html`，否则测的就不是将来跑的东西。
 *
 *   node scripts/verify.mjs      # 需要先 npx next build
 */
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = `${dirname(fileURLToPath(import.meta.url))}/..`;
const OUT = join(ROOT, "out");
const PORT = 4319;
const BASE = "/atlas";

if (!existsSync(OUT)) {
  console.error("out/ 不存在 —— 先跑 npx next build");
  process.exit(1);
}

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp", ".ico": "image/x-icon", ".txt": "text/plain" };

/** 和 deploy/caddy-snippet.conf 的 try_files 同一套顺序 —— 测的必须是将来跑的东西。 */
const server = createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  // 尾斜杠 308 —— 和 caddy-snippet.conf 的 @atlasTrail 同一条规则。
  // 少了它，/atlas/model/wan/ 会被兜底成首页：**200 但内容是错的**。
  const m = p.match(new RegExp(`^${BASE}/(.+)/$`));
  if (m) { res.writeHead(308, { location: `${BASE}/${m[1]}` }); return res.end(); }
  if (p.startsWith(BASE)) p = p.slice(BASE.length) || "/"; // handle_path 会剥掉前缀
  for (const cand of [p, `${p}/index.html`, `${p}.html`, "/index.html"]) {
    const f = join(OUT, cand);
    if (!f.startsWith(OUT) || !existsSync(f) || !extname(f)) continue;
    res.writeHead(200, { "content-type": MIME[extname(f)] ?? "application/octet-stream" });
    return res.end(await readFile(f));
  }
  res.writeHead(404).end("nope");
});
await new Promise((r) => server.listen(PORT, r));

const { chromium } = await import("playwright");
const browser = await chromium.launch();
const fails = [];
const ok = (cond, msg) => { console.log(`  ${cond ? "✓" : "✗"} ${msg}`); if (!cond) fails.push(msg); };

/** 真·可见：有面积、没被 display:none、没被 visibility:hidden。数 DOM 是数不出来的。 */
const VISIBLE = (sel) => `(() => {
  const els = [...document.querySelectorAll(${JSON.stringify(sel)})];
  return els.filter((e) => {
    const s = getComputedStyle(e);
    if (s.display === "none" || s.visibility === "hidden" || +s.opacity === 0) return false;
    return [...e.getClientRects()].some((r) => r.width > 0 && r.height > 0);
  }).length;
})()`;

for (const [name, w, h] of [["桌面", 1440, 900], ["手机", 390, 844]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  console.log(`\n── ${name} ${w}×${h} ──`);
  await page.goto(`http://127.0.0.1:${PORT}${BASE}/`, { waitUntil: "networkidle" });

  ok(await page.evaluate(VISIBLE("h2")) > 0, "首页有可见标题");
  ok((await page.content()).includes("说不说底下用的是谁的模型"), "透明度版块在页面上");
  const tSeen = await page.evaluate(`(() => {
    const h = [...document.querySelectorAll("h2")].find((e) => e.textContent.includes("说不说底下用的是谁的模型"));
    if (!h) return 0;
    const sec = h.closest("section");
    return [...sec.getClientRects()].some((r) => r.width > 0 && r.height > 0) ? sec.querySelectorAll("a[target=_blank]").length : 0;
  })()`);
  ok(tSeen >= 9, `透明度版块**看得见**且列出了 ${tSeen} 个平台链接（应 ≥9）`);

  // 二部图是桌面独有；手机上必须是叙事版顶上，而不是留一片空白
  const svg = await page.evaluate(VISIBLE("svg"));
  if (name === "桌面") ok(svg > 0, `二部图可见（${svg} 个 svg）`);
  else {
    ok(svg === 0, `手机上不画二部图（可见 svg=${svg}，DOM 里其实还有，所以不能数 DOM）`);
    ok((await page.evaluate(VISIBLE("details"))) > 0, "手机上叙事版的折叠列表看得见");
  }
  ok(await page.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 1"), "页面不横向滚动");
  await page.close();
}

// 详情页：查该页独有的内容，**不查状态码** —— 状态码骗过我们一次了
console.log("\n── 详情页（查独有内容，不查状态码）──");
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
for (const [url, must] of [
  [`${BASE}/model/wan/`, "阿里巴巴"],
  [`${BASE}/model/lucy/`, "Decart"],
  [`${BASE}/capability/flf/`, "首尾帧"],
  [`${BASE}/changes/`, "变"],
]) {
  await page.goto(`http://127.0.0.1:${PORT}${url}`, { waitUntil: "domcontentloaded" });
  const body = await page.textContent("body");
  const isHome = body.includes("说不说底下用的是谁的模型"); // 首页独有 —— 落到这儿说明路由回退了
  ok(body.includes(must) && !isHome, `${url} 渲染的是自己（含「${must}」，没回退到首页）`);
}
await page.close();
await browser.close();
server.close();

console.log(fails.length ? `\n${fails.length} 项没过。` : "\n全部通过。");
process.exit(fails.length ? 1 : 0);

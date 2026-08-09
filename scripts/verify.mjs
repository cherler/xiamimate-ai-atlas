/**
 * 出站前的回归验证。
 *
 * ## 规矩一：量到用户能感知的那一层为止
 *
 * 这个项目在「验证」上栽过三次，**每次都是量错了东西却以为量对了**：
 *
 * 1. 本地服务器没配 `{path}.html`，每个详情页都返回 200 —— 但渲染的是首页。
 *    「200 就算通过」量的是 HTTP，不是页面。
 * 2. 用 `locator('svg').count()` 判断移动端有没有画图，但 `hidden md:block`
 *    的元素**仍然在 DOM 里**。数 DOM 量的是标签，不是「用户看不看得见」。
 * 3. 页面看着完全正常、内容全对，却每次打开都在报 hydration 错误 ——
 *    查内容查不出来，只有听控制台才听得见。
 *
 * 所以：查页面独有字符串而不是状态码；查 `getClientRects` 有没有面积而不是元素在不在；
 * 收控制台报错。
 *
 * ## 规矩二：全绿只是入场券，不是通过
 *
 * 每个批次收尾要走一遍对抗性复查（见 docs/任务与验收标准.md 开头五问）。
 * 最要紧的一问：**这条检查能不能在功能坏掉的情况下照样通过？**
 * 能，就说明它量的不是那件事。
 *
 *   node scripts/verify.mjs            # 查构建产物 out/（默认，测的是将来跑的东西）
 *   node scripts/verify.mjs --dev      # 查 dev server（改代码时快速回归）
 */
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { extname, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = `${dirname(fileURLToPath(import.meta.url))}/..`;
const OUT = join(ROOT, "out");
const PORT = 4319;
const BASE = "/atlas";
const DEV = process.argv.includes("--dev");
const ORIGIN = DEV ? "http://127.0.0.1:3400" : `http://127.0.0.1:${PORT}`;

/**
 * 路由表。`must` 是**这一页独有**的字符串 —— 用它判断「渲染的是不是自己」，
 * 不用状态码（状态码骗过我们一次）。
 *
 * `zh` 是这一页允许的中文字符上限：**把「前端不放旁白」变成一个能自动查的数**，
 * 否则它只是口号，下次又会悄悄涨回去。/method 是口径收容所，它本来就该长。
 */
const ROUTES = [
  { path: "/", must: "AI 视频", zh: 500, built: true },
  { path: "/method", must: "这些数据是怎么来的", zh: 4000, built: true },
  // 列表页量**每条的字数**，不量总字数 —— 变更日志天生随事件累积变长，
  // 对它用「不许涨」是错的度量：那样一来，多记一条真实变更反而算退步。
  { path: "/changes", must: "变", zh: 130, per: "article, section > div", built: true },
  { path: "/model/wan", must: "阿里巴巴", zh: 1200, built: true },
  { path: "/capability/flf", must: "首尾帧", zh: 1200, built: true },
  { path: "/tree", must: "长出了什么", zh: 800, built: true },
  { path: "/where", must: "我在哪能用上", zh: 1600, built: true },
  { path: "/caveats", must: "你未必用得上", zh: 90, per: "section > div", built: true },
  { path: "/compare/kling-vs-seedance", must: "还是", zh: 800, built: true },
  { path: "/skill/motion", must: "动作复刻", zh: 1400, built: true },
  { path: "/toolkit", must: "该去哪个站", zh: 300, per: "main > div > section", built: true },
  { path: "/map", must: "谁是谁家的", zh: 2400, built: true },
  { path: "/models", must: "全部模型", zh: 1200, built: true },
];

const FLOWS = existsSync(join(ROOT, "data/flows.json"))
  ? JSON.parse(readFileSync(join(ROOT, "data/flows.json"), "utf8"))
  : null;

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json",
  ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp", ".ico": "image/x-icon", ".txt": "text/plain" };

let server = null;
if (!DEV) {
  if (!existsSync(OUT)) { console.error("out/ 不存在 —— 先跑 npx next build"); process.exit(1); }
  /** 和 deploy/caddy-snippet.conf 同一套顺序 —— **测的必须是将来跑的东西**。 */
  server = createServer(async (req, res) => {
    let p = decodeURIComponent(req.url.split("?")[0]);
    // 尾斜杠 308，与 @atlasTrail 同规则。少了它 /model/wan/ 会被兜底成首页：200 但内容是错的。
    const m = p.match(new RegExp(`^${BASE}/(.+)/$`));
    if (m) { res.writeHead(308, { location: `${BASE}/${m[1]}` }); return res.end(); }
    if (p.startsWith(BASE)) p = p.slice(BASE.length) || "/";
    for (const cand of [p, `${p}/index.html`, `${p}.html`, "/index.html"]) {
      const f = join(OUT, cand);
      if (!f.startsWith(OUT) || !existsSync(f) || !extname(f)) continue;
      res.writeHead(200, { "content-type": MIME[extname(f)] ?? "application/octet-stream" });
      return res.end(await readFile(f));
    }
    res.writeHead(404).end("nope");
  });
  await new Promise((r) => server.listen(PORT, r));
}

const { chromium } = await import("playwright");
const browser = await chromium.launch();
const fails = [];
const todo = new Set();
const ok = (c, msg) => { console.log(`  ${c ? "✓" : "✗"} ${msg}`); if (!c) fails.push(msg); };

/** 真·可见：有面积、没被 display:none / visibility:hidden / opacity:0。数 DOM 是数不出来的。 */
const VISIBLE = (sel) => `(() => [...document.querySelectorAll(${JSON.stringify(sel)})].filter((e) => {
  const s = getComputedStyle(e);
  if (s.display === "none" || s.visibility === "hidden" || +s.opacity === 0) return false;
  return [...e.getClientRects()].some((r) => r.width > 0 && r.height > 0);
}).length)()`;

/** 站内链接图，用来算动线可达性。只取**可见**的链接 —— 藏起来的链接点不到。 */
const LINKS = `(() => [...document.querySelectorAll("a[href]")].filter((a) => {
  const s = getComputedStyle(a);
  if (s.display === "none" || s.visibility === "hidden") return false;
  return [...a.getClientRects()].some((r) => r.width > 0 && r.height > 0);
}).map((a) => new URL(a.getAttribute("href"), location.href).pathname))()`;

/** 中文字数基线：只许降不许升。写在 data/ 里，跟着 git 走，回退看得见。 */
const BASE_PATH = join(ROOT, "data/verify-baseline.json");
const BASE_ZH = existsSync(BASE_PATH) ? JSON.parse(readFileSync(BASE_PATH, "utf8")).zh ?? {} : {};
const NEW_ZH = {};

const graph = new Map();


for (const [vp, w, h] of [["桌面", 1440, 900], ["手机", 390, 844]]) {
  console.log(`\n══════ ${vp} ${w}×${h} ══════`);
  for (const r of ROUTES) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    const errs = [];
    page.on("pageerror", (e) => errs.push(String(e).split("\n")[0].slice(0, 90)));
    page.on("console", (m) => { if (m.type() === "error") errs.push(m.text().split("\n")[0].slice(0, 90)); });

    let body = "";
    let mainText = "";
    let quoted = "";
    let fellBack = false;
    try {
      await page.goto(`${ORIGIN}${BASE}${r.path === "/" ? "" : r.path}`,
        { waitUntil: DEV ? "domcontentloaded" : "networkidle", timeout: 45000 });
      await page.waitForTimeout(DEV ? 2500 : 900);
      // ⚠️ 用 innerText 不用 textContent。
      // textContent **把隐藏元素的文字也算进来** —— 移动端叙事版在桌面上是 hidden，
      // 文字却照样计入，首页因此虚高一倍多。**这正是「量错了东西」的又一例**。
      body = await page.evaluate("document.body.innerText");
      // 中文字数只量 <main> —— **导航和页脚是 chrome，不是「我们的解释说明」**。
      // 量 body 的后果：加一个导航项，十二个页面的预算同时被扣，
      // 而那和「前端放不放旁白」毫无关系。度量要对准它想管的那件事。
      mainText = await page.evaluate('document.querySelector("main")?.innerText ?? document.body.innerText');
      // 引用不算我们的旁白。**这条预算量的是「我们自己说了多少话」**，
      // 而脚注里那 57 条是厂商官方文档的原文 —— 它越多越好，不该被扣分。
      // 首页因此从 230 涨到 2116 而报红，红的是尺子不是页面：**量对了再谈调参。**
      // ⚠️ 只减**可见**的引用块。`display:none` 的元素上 innerText 会退化成 textContent，
      // 手机端真值表整块隐藏，它里面的 59 条脚注照样被当成引用减掉，
      // 结果首页中文字符被减成负数、夹到 0 —— **和当初 textContent 那个坑是同一类**。
      quoted = await page.evaluate(
        '[...document.querySelectorAll("main [data-quote]")]' +
        '.filter(e=>e.getClientRects().length>0).map(e=>e.innerText).join("")');
      // 兜底判断靠 data-page="home" 这个**稳定记号**，不靠首页的文案 ——
      // 文案一改判断就失效（刚才就失效了）。
      fellBack = r.path !== "/" && (await page.evaluate('!!document.querySelector(\'[data-page="home"]\')'));
    } catch { body = ""; }

    const self = body.includes(r.must) && !fellBack;
    // 还没建的页单独列成待办，不混进失败 —— 整片红看不出真问题
    if (!r.built && !self) { todo.add(r.path); await page.close(); continue; }

    console.log(`\n── ${r.path}`);
    ok(self, `渲染的是自己（含「${r.must}」，没回退到首页）`);
    ok((await page.evaluate(VISIBLE("h1, h2"))) > 0, "有可见标题");
    ok(errs.length === 0, `控制台没有报错${errs.length ? `：${errs[0]}` : ""}`);
    ok(await page.evaluate("document.documentElement.scrollWidth <= window.innerWidth + 1"), "不横向滚动");

    /**
     * **中文字符数：棘轮，不是一刀切。**
     *
     * `zh` 是目标值，但有些页要等后面的批次重做才能到（首页要等 A4）。
     * 让检查永远飘红，它就失去闸门作用了；直接把阈值调松，又正是
     * 「悄悄涨回去」那件事本身。
     *
     * 所以：**只许降不许升** —— 超过上次记录的基线就失败，
     * 同时把「离目标还差多少」打出来，让欠账一直可见。
     */
    // 列表页按条均摊 —— 见路由表里的 `per`
    const items = r.per
      ? await page.evaluate(`document.querySelectorAll(${JSON.stringify(r.per)}).length`)
      : 1;
    const zhOf = (t) => (t.match(/[一-龥]/g) ?? []).length;
    const zhAll = Math.max(0, zhOf(mainText) - zhOf(quoted));
    const zh = r.per ? Math.round(zhAll / Math.max(1, items)) : zhAll;
    const key = `${r.path}|${vp}`;
    const base = BASE_ZH[key] ?? Infinity;
    const pass = zh <= Math.max(r.zh, base);
    ok(pass, `中文字符 ${zh}${r.per ? `/条（共 ${items} 条 ${zhAll} 字）` : ""}（基线 ${base === Infinity ? "首次" : base} · 目标 ${r.zh}）` +
      (zh > r.zh ? ` —— 还差 ${zh - r.zh} 字` : ""));
    if (pass) NEW_ZH[key] = Math.min(zh, base === Infinity ? zh : base);

    // 查 [data-nav=global]，**不查通用的 <nav>** —— 详情页的面包屑也是 <nav>，
    // 用通用标签查会在全站导航被拆掉时照样通过（对抗性复查抓到的假阳性）。
    ok((await page.evaluate(VISIBLE("[data-nav=global]"))) > 0, "全站导航可见");

    if (vp === "桌面") graph.set(r.path, [...new Set(await page.evaluate(LINKS))]);
    await page.close();
  }
}

// ── 动线可达性：从任意页出发，≤2 次点击能到三条动线的起点 ─────────────
if (FLOWS) {
  console.log("\n══════ 动线可达性 ══════");
  const norm = (p) => (p.startsWith(BASE) ? p.slice(BASE.length) || "/" : p);
  const starts = FLOWS.flows.map((f) => f.steps[0].page);
  for (const from of [...graph.keys()]) {
    const seen = new Set([from]);
    let frontier = [from];
    for (let d = 0; d < 2; d++) {
      const next = [];
      for (const p of frontier) for (const l of graph.get(p) ?? []) {
        const n = norm(l);
        if (!seen.has(n)) { seen.add(n); next.push(n); }
      }
      frontier = next;
    }
    const miss = starts.filter((s) => !seen.has(s));
    ok(miss.length === 0, `${from} 两步内可达三条动线起点${miss.length ? `（差 ${miss.join("、")}）` : ""}`);
  }
} else {
  console.log("\n（还没有 data/flows.json，动线可达性没查 —— A1 会补上）");
}

await browser.close();
server?.close();

// 基线只在全绿时更新 —— 失败的那一轮不该把坏数字写成新基线
if (!fails.length) {
  const merged = { ...BASE_ZH, ...NEW_ZH };
  writeFileSync(BASE_PATH, JSON.stringify({ note: "中文字符数基线，只许降不许升。verify 全绿时自动更新。", zh: merged }, null, 2) + "\n");
}

if (todo.size) console.log(`\n待建（不算失败）：${[...todo].join("  ")}`);
console.log(fails.length ? `\n${fails.length} 项没过。` : "\n全部通过。");
process.exit(fails.length ? 1 : 0);

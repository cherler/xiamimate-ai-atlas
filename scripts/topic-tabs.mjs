/**
 * 专项页分类 tab 的常驻检查。
 *
 * ## 为什么单独一个脚本
 *
 * `verify.mjs` 量的是「这一页渲染的是不是它自己」和「字数有没有涨回去」——
 * 那是静态的。分 tab 是**交互**：点一下换一屏、深链落到对的那一类、
 * tab 上写的数和底下的卡数对得上。这三件事都得点了才知道。
 *
 * ## 这里的每条检查都要能失败
 *
 * 计数那条最容易写成永远通过：如果只数「有没有卡」，
 * 那么某一类的卡全丢了它照样过。所以量的是 **tab 上写的数字 vs 实际卡数** ——
 * 数据加了项目而没归类，或者归到了不存在的类型，这条会红。
 *
 * 「同时只有一个面板可见」也不是多余的：七类全部渲染进 DOM（为了不给
 * 搜索引擎和不跑 JS 的读者一页残页），一旦 `hidden` 的开关写错，
 * 页面会变成七类叠在一起 —— 而那看起来只是「有点长」，不像出错。
 *
 * ## 遍历所有专项，不写死某一个
 *
 * 第一版把路径写成 `topic/video`。**加第二个专项那天，它照样全绿** ——
 * 因为它压根没去看新那一页。测试只测它认识的东西，等于给新东西开了后门。
 * 现在专项清单从数据里读，加一个专项就自动多测一轮。
 *
 * 用法：npm run topic:tabs   （要先 npm run build）
 */
import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = `${dirname(fileURLToPath(import.meta.url))}/..`;
const OUT = join(ROOT, "out");
const BASE = "/atlas";
const PORT = 4321;
const ORIGIN = `http://127.0.0.1:${PORT}`;
if (!existsSync(OUT)) { console.error("没有 out/，先跑 npm run build"); process.exit(1); }

const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
  ".webp": "image/webp", ".ico": "image/x-icon", ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2", ".xml": "application/xml",
};

/** 静态导出的产物是 `xxx.html`。**兜底成首页会让每个 404 都变成 200** —— 栽过一次，不再兜。 */
const server = createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === BASE || p === `${BASE}/`) p = "/index.html";
  else if (p.startsWith(`${BASE}/`)) p = p.slice(BASE.length);
  else if (p !== "/") return res.writeHead(404).end("out of base");
  const cands = [join(OUT, p), join(OUT, `${p}.html`), join(OUT, p, "index.html")];
  for (const f of cands) {
    if (f.startsWith(OUT) && existsSync(f) && !f.endsWith("/")) {
      const s = await readFile(f).catch(() => null);
      if (s) { res.writeHead(200, { "content-type": MIME[extname(f)] ?? "application/octet-stream" }); return res.end(s); }
    }
  }
  res.writeHead(404).end("not found");
});
await new Promise((r) => server.listen(PORT, "127.0.0.1", r));

const bad = [];
const ok = (c, m) => { console.log(`${c ? "  ✓" : "  ✗"} ${m}`); if (!c) bad.push(m); };

const { topics } = JSON.parse(await readFile(join(ROOT, "data/atlas.json"), "utf8"));

const br = await chromium.launch();
for (const T of topics) for (const [w, h, name] of [[1280, 900, "桌面"], [390, 844, "手机"]]) {
  const p = await br.newPage({ viewport: { width: w, height: h } });
  const errs = [];
  p.on("pageerror", (e) => errs.push(String(e)));
  await p.goto(`${ORIGIN}${BASE}/topic/${T.id}`, { waitUntil: "networkidle" });
  console.log(`\n── ${T.zh} · ${name} ${w}×${h} ──`);

  const tabs = p.locator('[role="tab"]');
  const n = await tabs.count();
  ok(n > 0, `有分类 tab（${n} 个）`);

  for (let i = 0; i < n; i++) {
    await tabs.nth(i).click();
    const txt = (await tabs.nth(i).innerText()).replace(/\s+/g, " ");
    const want = Number(txt.match(/(\d+)$/)?.[1]);
    /**
     * **数「一条」，不数标签名。** 项目和作品的一条是一张卡（article），
     * 常识的一条是清单里的一行（li）—— 按 article 数，常识那一栏永远是 0，
     * 而页面看上去完全正常。所以三种卡都打 `data-count-item`。
     */
    const got = await p.locator('[role="tabpanel"]:not([hidden]) [data-count-item]').count();
    const vis = await p.locator('[role="tabpanel"]:not([hidden])').count();
    ok(got === want && vis === 1, `${txt} → ${got} 张卡，可见面板 ${vis}`);

    /**
     * **条数多的 tab 必须有快捷导航。**
     *
     * 负责人为这件事说过两次。第一次修完只给「有小节」的 tab 发了锚点条，
     * 一站式与 Agent 那两个平铺的 tab 一个都没拿到 —— 于是同一天又被指出来。
     * **判据是条数，不是有没有小节。** 这条检查按条数判，平铺的也算。
     *
     * 锚点还必须真的指得到东西：`#c-xxx` 落空时页面照样正常，只是点了不动。
     */
    if (got >= 6) {
      const jumps = await p.$$eval('[role="tabpanel"]:not([hidden]) nav a[href^="#"]',
        (as) => as.map((x) => x.getAttribute("href").slice(1)));
      const missing = await p.evaluate((ids) => ids.filter((i) => !document.getElementById(i)), jumps);
      ok(jumps.length > 0 && missing.length === 0,
        `${txt} 有快捷导航（${jumps.length} 个锚点，落空 ${missing.length}）`);
    }
  }

  const over = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  ok(over <= 1, `无横向溢出（多出 ${over}px）`);

  /** 分类条粘住之后被导航条盖住，等于滚下去就换不了类 —— 那正是加 tab 要解决的事。 */
  await p.evaluate(() => scrollBy(0, 900));
  await p.waitForTimeout(200);
  const geo = await p.evaluate(() => {
    const nav = document.querySelector('[data-nav="global"]')?.getBoundingClientRect();
    const bar = document.querySelector('[role="tablist"]').getBoundingClientRect();
    return { navBottom: nav?.bottom ?? 0, barTop: bar.top, vis: bar.top >= 0 && bar.bottom <= innerHeight };
  });
  ok(geo.vis && geo.barTop >= geo.navBottom - 1,
    `分类条粘在导航条下方（导航底 ${geo.navBottom.toFixed(0)} · 分类条顶 ${geo.barTop.toFixed(0)}）`);

  ok(errs.length === 0, `无控制台报错${errs.length ? `：${errs[0].slice(0, 120)}` : ""}`);
  await p.close();
}

/** 深链：分享某一类得分享得出去。每个专项都试它最后一个 tab。 */
console.log("\n── 深链 ──");
for (const t of topics) {
  const g = t.groups[t.groups.length - 1];
  const p = await br.newPage({ viewport: { width: 1280, height: 900 } });
  await p.goto(`${ORIGIN}${BASE}/topic/${t.id}#g-${g.id}`, { waitUntil: "networkidle" });
  await p.waitForTimeout(300);
  const h = await p.locator('[role="tabpanel"]:not([hidden]) h2').innerText();
  ok(h === g.zh, `${t.zh} 深链 #g-${g.id} 落到「${h}」`);
  await p.close();
}

/** 卡上给的每条路都得走得通 —— 这一页存在的理由就是把人送进那些页。 */
for (const t of topics) {
  const p = await br.newPage({ viewport: { width: 1280, height: 900 } });
  await p.goto(`${ORIGIN}${BASE}/topic/${t.id}`, { waitUntil: "networkidle" });
  const hrefs = await p.$$eval("article a[href]", (as) => [...new Set(as.map((a) => a.getAttribute("href")))]);
  const local = hrefs.filter((x) => x.startsWith(BASE));
  console.log(`\n── ${t.zh} 卡上的站内链接 ${local.length} 条 ──`);
  let dead = 0, noAnchor = 0;
  for (const href of local) {
    const [path, frag] = href.split("#");
    const r = await fetch(`${ORIGIN}${path}`);
    if (!r.ok) { dead++; console.log(`  ✗ ${r.status} ${href}`); continue; }
    // 锚点也要真的存在：`#hands` 指不到东西时页面照样 200，只是滚不过去
    if (frag && !(await r.text()).includes(`id="${frag}"`)) { noAnchor++; console.log(`  ✗ 锚点不存在 ${href}`); }
  }
  ok(dead === 0, `${t.zh} 站内链接全部可达（死链 ${dead}）`);
  ok(noAnchor === 0, `${t.zh} 锚点全部存在（落空 ${noAnchor}）`);
  await p.close();
}

await br.close();
server.close();
console.log(bad.length ? `\n❌ ${bad.length} 项没过：\n  ${bad.join("\n  ")}` : "\n✅ 全部通过");
process.exit(bad.length ? 1 : 0);

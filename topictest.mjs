/** 专项页验收：**页面上的数字必须等于真值表现算的数字**，不是「看着差不多」。 */
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
const a = JSON.parse(readFileSync("data/atlas.json", "utf8"));
// 口径必须和页面一致：**核心模型**（tier core）里的成片类。
// 第一版我拿全部 21 个成片模型算，页面用的是 10 个核心模型 —— 八条全部对不上。
const clip = a.models.filter((m) => (m.domain ?? "video") === "video" && m.class === "clip" && m.tier === "core");
const S = {}; for (const s of a.support) S[s.m + "|" + s.c] = s;
const truth = (cap) => {
  let y = 0, n = 0, u = 0;
  for (const m of clip) { const s = S[m.id + "|" + cap]?.state; if (s === "yes") y++; else if (s === "no") n++; else u++; }
  return { y, n, u };
};
const br = await chromium.launch({ args: ["--proxy-server=direct://", "--proxy-bypass-list=*"] });
let bad = 0;
for (const scheme of ["light", "dark"]) {
  const ctx = await br.newContext({ colorScheme: scheme, viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const errs = []; page.on("pageerror", (e) => errs.push(String(e)));
  await page.goto("http://127.0.0.1:3400/atlas/topic/video", { waitUntil: "load", timeout: 60000 });
  await page.waitForTimeout(800);
  const got = await page.evaluate(() => {
    const rows = [];
    for (const tr of document.querySelectorAll("tbody tr")) {
      const name = tr.children[0].innerText.split("\n")[0].trim();
      const cov = tr.children[3].innerText.replace(/\s+/g, " ").trim();
      rows.push({ name, cov, bodyBg: getComputedStyle(document.body).backgroundColor });
    }
    return { rows, forks: document.querySelectorAll("section h2").length,
             guide: !!document.querySelector("details"), report: !!document.querySelector("button") };
  });
  if (scheme === "light") {
    console.log(`岔口 ${got.forks} 个 · 路 ${got.rows.length} 条 · 上手指南折叠 ${got.guide ? "✓" : "✗"} · 报错入口 ${got.report ? "✓" : "✗"}`);
    // 逐条比对页面数字 vs 真值表
    const CAPS = { 文生视频: "t2v", 图生视频: "i2v", 角色参考: "charref", 多参考: "multiref",
                   首尾帧: "flf", 模型原生音频: "audio", "配音 + 口型替换": "lipsync", 本地开源权重: "openweights" };
    for (const r of got.rows) {
      const cap = CAPS[r.name]; if (!cap) continue;
      const t = truth(cap);
      const want = `${t.y}/${t.y + t.n + t.u} 家支持`;
      const okY = r.cov.includes(want);
      const okN = t.n === 0 ? !r.cov.includes("明确不支持") : r.cov.includes(`${t.n} 家明确不支持`);
      const okU = r.cov.includes(`${t.u} 家没说`);
      console.log(`  ${r.name.padEnd(14)} 页面「${r.cov}」 vs 真值表 ${t.y}/${t.n}/${t.u}  ${okY && okN && okU ? "✓" : "✗ 对不上"}`);
      if (!(okY && okN && okU)) bad++;
    }
    const noCap = got.rows.filter((r) => r.cov.includes("不是一项能力")).length;
    console.log(`  「不是一项能力」的路 ${noCap} 条（应为 8）${noCap === 8 ? " ✓" : " ✗"}`);
    if (noCap !== 8) bad++;
  } else {
    const bg = got.rows[0]?.bodyBg;
    console.log(`深色下 body=${bg} ${bg === "rgb(16, 21, 26)" ? "✓" : "✗"}`);
    if (bg !== "rgb(16, 21, 26)") bad++;
  }
  if (errs.length) { console.log("  控制台报错:", errs.slice(0, 2)); bad++; }
  await ctx.close();
}
await br.close();
console.log(bad ? `\n有 ${bad} 处不对` : "\n全部通过。");
process.exit(bad ? 1 : 0);

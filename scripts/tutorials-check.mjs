/**
 * 教程链接回查。**一条 404 的教程比没有教程更伤** —— 它把读者送出去撞墙，
 * 而页面上看起来一切正常。所以这条得定期跑，不能只在录入那天验一次。
 *
 * 判据比「状态码 200」严一点：还要看**页面标题有没有变**。
 * 链接活着、内容换了，是教程数据最常见的腐坏方式，状态码看不出来。
 * `page_title` 存的就是录入当天页面自己报的标题。
 *
 * ⚠️ 用 curl 不用 fetch：本机 node 的 fetch 连 GitHub 会 `fetch failed`，
 * 同一条 curl 拿得到 200 —— **那是我们的网络，不是链接死了**，
 * 用 fetch 会把好链接误杀掉。
 *
 *   npm run tutorials:check
 */
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const a = JSON.parse(readFileSync("data/atlas.json", "utf8"));
const rows = [];
for (const t of a.topics ?? []) {
  for (const p of t.projects ?? [])
    for (const tu of p.tutorials ?? []) rows.push({ project: p.zh, ...tu });
  /** 视频常识那一栏烂起来和教程一模一样，所以一起查 —— 分两个脚本迟早只跑一个。 */
  for (const b of t.basics ?? [])
    for (const it of b.items ?? []) {
      rows.push({ project: `知识 · ${b.zh}`, ...it });
      /** 代表作的百科条目一样会烂 —— **它才是「看一眼就懂」那一步的落点**，更不能死。 */
      if (it.example?.url) rows.push({ project: `代表作 · ${b.zh}`, title: it.example.zh, ...it.example });
    }
}

if (!rows.length) { console.log("没有教程可查。"); process.exit(0); }
console.log(`回查 ${rows.length} 条外链（教程 + 视频常识）\n`);

const dead = [], drift = [];
for (const r of rows) {
  let out = "";
  try {
    out = execFileSync("curl", [
      "-sL", "--max-time", "25", "-w", "\n__STATUS__%{http_code}",
      "-A", "Mozilla/5.0 (compatible; xiamimate-ai-atlas)", r.url,
    ], { encoding: "utf8", maxBuffer: 32 * 1024 * 1024 });
  } catch { dead.push({ ...r, why: "curl 起不来 / 超时" }); console.log(`  ✗ ${r.project} · ${r.title}`); continue; }

  const code = out.match(/__STATUS__(\d+)\s*$/)?.[1] ?? "?";
  const title = (out.match(/<title[^>]*>([\s\S]{0,200}?)<\/title>/i)?.[1] ?? "").replace(/\s+/g, " ").trim();
  if (code !== "200") { dead.push({ ...r, why: `HTTP ${code}` }); console.log(`  ✗ ${code} ${r.project} · ${r.title}`); continue; }
  /** 标题拿不到多半是前端渲染的页面（飞书这类），不算变 —— 只在两边都有标题时才比。 */
  if (r.page_title && title && title !== r.page_title) {
    drift.push({ ...r, now: title });
    console.log(`  ⚠ 标题变了 ${r.project} · ${r.title}\n      录入：${r.page_title}\n      现在：${title}`);
    continue;
  }
  console.log(`  ✓ ${r.project} · ${r.title}`);
}

console.log(`\n${rows.length} 条：通过 ${rows.length - dead.length - drift.length} · 打不开 ${dead.length} · 标题变了 ${drift.length}`);
if (dead.length) console.log("打不开的要么换链接、要么删掉，别留着：\n  " + dead.map((d) => `${d.why} ${d.url}`).join("\n  "));
if (drift.length) console.log("标题变了的要人看一眼内容还对不对，对就更新 page_title 与 verified_at。");
process.exit(dead.length ? 1 : 0);

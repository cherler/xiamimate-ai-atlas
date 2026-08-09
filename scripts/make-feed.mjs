/**
 * 生成 RSS（订阅 · 批次 E5）。
 *
 * ## 为什么是 RSS，不是邮件订阅
 *
 * 站是静态导出的，**没有后端**。做邮件订阅要起一个服务、一个数据库、
 * 一套退订和反垃圾 —— 换来的是一个要长期守着的东西，
 * 而它解决的问题一个静态 XML 文件就够了。
 *
 * RSS 还有一个更要紧的好处：**读者不用把邮箱交给我们**。
 * 一个刚上线、连读者都没有的站，先收集邮箱是本末倒置。
 *
 * ## 一个源，用分类区分
 *
 * 「只订阅某个模型」用 `<category>` 标出来，阅读器自己能过滤。
 * 给每个模型各生成一个 feed 是 18 个文件、18 份要同步的东西 ——
 * **多出来的维护量换不来相应的价值**。
 *
 *   node scripts/make-feed.mjs   →  public/changes.xml
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const a = JSON.parse(readFileSync(join(ROOT, "data/atlas.json"), "utf8"));
const ch = JSON.parse(readFileSync(join(ROOT, "data/changes.json"), "utf8"));
const SITE = "https://xiamimate.com/atlas";

const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const rfc = (d) => new Date(`${d}T08:00:00+08:00`).toUTCString();

const items = [...ch.events]
  .sort((x, y) => y.date.localeCompare(x.date))
  .slice(0, 50)
  .map((e) => {
    const src = e.src ? a.sources[e.src] : null;
    // Change + So What 三段都进摘要 —— **只有 after 的那是新闻，不是变更事件**
    const body = [
      `<p><b>${esc(e.subject)}</b> · ${esc(e.kind)}${e.side === "ours" ? "（这一条是我们记错了）" : ""}</p>`,
      `<p>此前：${esc(e.before)}</p>`,
      `<p>现在：${esc(e.after)}</p>`,
      `<p><b>为什么重要：</b>${esc(e.why)}</p>`,
      e.impact?.length ? `<p>影响：${e.impact.map(esc).join("；")}</p>` : "",
      src ? `<p>来源：<a href="${esc(src.url)}">${esc(src.name)}</a></p>` : "",
    ].join("");
    return `    <item>
      <title>${esc(`${e.subject}：${e.after}`)}</title>
      <link>${SITE}/changes#${esc(e.id)}</link>
      <guid isPermaLink="false">${esc(e.id)}</guid>
      <pubDate>${rfc(e.date)}</pubDate>
${(e.models ?? []).map((m) => `      <category>${esc(m)}</category>`).join("\n")}
      <description>${esc(body)}</description>
    </item>`;
  });

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>虾米看AI · 变了什么</title>
    <link>${SITE}/changes</link>
    <atom:link href="${SITE}/changes.xml" rel="self" type="application/rss+xml"/>
    <description>AI 视频模型的版本、停服、价格与能力变化。每条带 Before / After / 为什么重要，以及厂商官方来源。</description>
    <language>zh-CN</language>
    <lastBuildDate>${rfc(a.generated_at)}</lastBuildDate>
${items.join("\n")}
  </channel>
</rss>
`;
mkdirSync(join(ROOT, "public"), { recursive: true });
writeFileSync(join(ROOT, "public/changes.xml"), xml);
console.log(`RSS 写好：public/changes.xml（${items.length} 条）`);

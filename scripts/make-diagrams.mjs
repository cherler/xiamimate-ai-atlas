/**
 * 把 `topics[].projects[].diagrams[].mermaid` 渲染成内联 SVG。
 *
 * ## 为什么在构建时渲染，而不是运行时加载 mermaid
 *
 * 这是个静态导出站。运行时加载 mermaid 意味着每个读者都下载一份图形库，
 * 只为画一张不会变的图 —— 而图的内容在构建那一刻就定死了。
 *
 * ## 颜色：哨兵色 → 令牌
 *
 * mermaid 不接受 `var(--color-x)` 当主题色（它要解析颜色去算派生色，
 * 直接报 `Unsupported color format`）。所以先用一组不会撞的假色渲染，
 * 再把它们替换回令牌 —— **一张图同时服务深浅两种外观，不用出两份**。
 * 连 mermaid 自己派生的箭头填充与连线标签底也一并映射，产物里不留写死的颜色。
 *
 * 用法：node scripts/make-diagrams.mjs   → public/diagrams/<id>.svg
 */
import { chromium } from "playwright";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const atlas = JSON.parse(readFileSync("data/atlas.json", "utf8"));
const jobs = [];
for (const t of atlas.topics ?? [])
  for (const p of t.projects ?? [])
    for (const d of p.diagrams ?? []) jobs.push({ ...d, project: p.zh });

if (!jobs.length) { console.log("没有要渲染的图"); process.exit(0); }
mkdirSync("public/diagrams", { recursive: true });

/** 哨兵 → 令牌。前七个是我们指定的主题色，后四个是 mermaid 自己派生出来的。 */
const MAP = {
  "#010101": "--color-paper", "#020202": "--color-card", "#030303": "--color-ink",
  "#040404": "--color-rule", "#050505": "--color-muted", "#060606": "--color-card",
  "#070707": "--color-paper",
  "#000000": "--color-ink", "#000": "--color-ink",
  "#fefefe": "--color-paper", "#f8f8f8": "--color-card",
};

const mermaidJs = readFileSync("node_modules/mermaid/dist/mermaid.min.js", "utf8");
const br = await chromium.launch();
const page = await br.newPage();
await page.setContent("<!doctype html><body><div id=o></div>");
await page.addScriptTag({ content: mermaidJs });

for (const j of jobs) {
  const svg = await page.evaluate(async ([code, id]) => {
    // @ts-ignore
    mermaid.initialize({
      startOnLoad: false, theme: "base", securityLevel: "loose", flowchart: { htmlLabels: true, curve: "basis" },
      themeVariables: {
        background: "#010101", primaryColor: "#020202", primaryTextColor: "#030303",
        primaryBorderColor: "#040404", lineColor: "#050505",
        secondaryColor: "#060606", tertiaryColor: "#070707",
        fontFamily: '"PingFang SC","Microsoft YaHei",system-ui,sans-serif', fontSize: "13px",
      },
    });
    // @ts-ignore
    const { svg } = await mermaid.render("m_" + id.replace(/[^a-z0-9]/gi, ""), code);
    return svg;
  }, [j.mermaid, j.id]);

  let out = svg;
  for (const [hex, tok] of Object.entries(MAP)) out = out.split(hex).join(`var(${tok})`);
  const left = [...new Set(out.match(/#[0-9a-fA-F]{3,6}\b/g) || [])];
  if (left.length) console.warn(`  ⚠️ ${j.id} 还留着写死的颜色：${left.join(" ")}`);
  writeFileSync(`public/diagrams/${j.id}.svg`, out);
  console.log(`  ${j.project} · ${j.title} → public/diagrams/${j.id}.svg（${out.length} 字节）`);
}
await br.close();
console.log(`共 ${jobs.length} 张`);

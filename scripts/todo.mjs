/**
 * 人要看的那一摞 —— **汇成一个文件，并且主动叫人**。
 *
 * ## 为什么需要它
 *
 * 管线本来就会攒待办：`triage.mjs` 分出黄/红、`watch.mjs` 记下「抓不到 / 没内容」、
 * `candidates.mjs` 捞出新面孔、`hf-lineage.mjs` 列出没收的谱系。
 * 但这些散在四个文件里，而且**没有任何东西会告诉人「该看了」** ——
 * 结果收件箱里 17 条待办从 2026-08-07 躺到 08-11，四天没人知道。
 *
 * 负责人问「每周都要人审吗？怎么通知？在哪儿审？」——
 * 前两个问题当时的答案是「会攒，但不会叫」。这支补上那一半。
 *
 * ## 两条纪律
 *
 * 1. **只汇总，不判断。** 每条待办指向它原本所在的文件与命令，
 *    人在那里做决定。这里多写一句结论，就是第二份口径。
 * 2. **零条时也要写。** 「今天没有待办」和「今天没跑」必须分得开 ——
 *    文件里带时间戳，看一眼就知道是哪一种。
 *
 *   node scripts/todo.mjs           # 写 data/TODO.md
 *   node scripts/todo.mjs --notify  # 有待办时顺手发一条系统通知
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => (existsSync(join(ROOT, p)) ? readFileSync(join(ROOT, p), "utf8") : "");
const TODAY = new Date().toISOString().slice(0, 10);

const groups = [];

/** ① 收件箱里等人定的（黄 + 红）。跑 triage 拿分级，不自己重算一遍规则。 */
try {
  const out = execFileSync("node", [join(ROOT, "scripts/triage.mjs")], { encoding: "utf8" });
  const y = Number(out.match(/🟡 黄 · [^（]*（(\d+)）/)?.[1] ?? 0);
  const r = Number(out.match(/🔴 红 · [^（]*（(\d+)）/)?.[1] ?? 0);
  if (y + r > 0)
    groups.push({
      n: y + r,
      t: `收件箱里等你定的 ${y + r} 条（黄 ${y} · 红 ${r}）`,
      how: "`node scripts/triage.mjs` 看分级理由；`--apply` 只写绿色通道，黄红要人改 data/atlas.json",
      why: "红的共同点是**错了会污染整张图且难回滚**：新实体、要推理才得出的结论、摘不出原文的。",
    });
} catch {
  groups.push({ n: 1, t: "triage 跑不起来", how: "`node scripts/triage.mjs` 看报错", why: "分级这一步断了，后面全堵着。" });
}

/** ② 抓不到 / 抓到了没内容 —— 后者更危险，它不会喊。 */
const rep = read("data/watch-report.md");
const sec = (title) => rep.split(`## ${title}`)[1]?.split("\n## ")[0] ?? "";
for (const [title, why] of [
  ["抓不到（要处理）", "长期抓不到本身是信息：那家没有可 diff 的公开入口，也解释了它名下的格子为什么最差。"],
  ["抓到了但没内容（比抓不到更危险 —— 它不会喊）", "**它不报错**。SPA 站点最常见 —— 拿到的是导航壳，比对永远「无变化」。"],
]) {
  const body = sec(title);
  const items = body.split("\n").filter((l) => l.startsWith("- ") || l.startsWith("| "));
  if (items.length && !body.includes("（无）"))
    groups.push({ n: items.length, t: `${title.split("（")[0]}：${items.length} 个源`, how: "见 data/watch-report.md 对应小节", why });
}

/** ③ 谱系候选里我们还没收的。只报数，清单在候选文件里。 */
try {
  const cand = JSON.parse(read("data/lineage-candidates.json") || "{}").rows ?? [];
  const atlas = JSON.parse(read("data/atlas.json") || "{}");
  const known = new Set();
  for (const v of atlas.versions ?? []) {
    known.add(v.version.toLowerCase());
    for (const m of `${v.quote ?? ""} ${v.note ?? ""}`.matchAll(/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+/g))
      known.add(m[0].toLowerCase());
  }
  /**
   * **减掉「看过并否决」的。** 没有这一步，被否掉的候选会永远留在待办里，
   * 这张表从第一天起就不会收敛 —— 而收敛正是 §59.3 负反馈想要的。
   * 否决记在 data/lineage-rejected.json，**是记下来不是删掉**：
   * 它改名或升级时还要能重新认出来。
   */
  const rejected = new Set(
    (JSON.parse(read("data/lineage-rejected.json") || "{}").rows ?? []).map((r) => r.repo.toLowerCase()),
  );
  const miss = cand.filter(
    (r) =>
      !known.has(r.repo.toLowerCase()) &&
      !known.has(r.repo.split("/").pop().toLowerCase()) &&
      !rejected.has(r.repo.toLowerCase()),
  );
  const by = {};
  for (const r of miss) by[r.domain ?? "?"] = (by[r.domain ?? "?"] ?? 0) + 1;
  if (miss.length)
    groups.push({
      n: miss.length,
      t: `谱系候选没收的 ${miss.length} 条（${Object.entries(by).map(([k, v]) => `${k} ${v}`).join(" · ")}）`,
      how: "`node scripts/hf-lineage.mjs --json` 重扫；清单在 data/lineage-candidates.json",
      why: "**先问「它是不是这一代的发布本体」** —— 端口、量化档、配件、以及挂错产品线的，都不算。",
    });
} catch { /* 候选文件坏了不该拖垮整张待办表 */ }

/** ④ 收录候选（新面孔）。 */
const cm = read("data/candidates.md");
const newFaces = (cm.match(/^\| /gm) ?? []).length;
if (newFaces) groups.push({
  n: newFaces,
  t: `收录候选 ${newFaces} 行（AA 榜新面孔 + HF 新组织）`,
  how: "`node scripts/candidates.mjs` 重算；清单在 data/candidates.md",
  why: "两路都只是**发现**，不是收录。收不收按 ontology 规则一与规则四人工定。",
});

const total = groups.reduce((s, g) => s + g.n, 0);
const md = [
  `# 该你看了 · ${TODAY}`,
  ``,
  total
    ? `**${total} 条待办**，分 ${groups.length} 摞。每摞都指向它原本在的文件 —— **这里只汇总，不下判断**。`
    : `**没有待办。** 注意这和「今天没跑」不是一回事 —— 这份文件是 ${TODAY} 生成的。`,
  ``,
  ...groups.flatMap((g) => [
    `## ${g.t}`,
    ``,
    g.why,
    ``,
    `→ ${g.how}`,
    ``,
  ]),
  `---`,
  ``,
  `> 超过 20 条时 \`triage.mjs\` 会自动放宽一类规则（§59.3 的负反馈：**人每周看的必须 ≤20**）。`,
  `> 红色永远不放宽 —— 那批错了会污染整张图。`,
].join("\n");

writeFileSync(join(ROOT, "data/TODO.md"), `${md}\n`);
console.log(`${total} 条待办 → data/TODO.md`);

if (process.argv.includes("--notify") && total) {
  // 本机通知：零成本、可逆、不需要任何凭据。要邮件/微信是另一件事，得先定渠道。
  const msg = groups.map((g) => `${g.n} ${g.t.split("（")[0].replace(/\s*\d+\s*条?$/, "")}`).join("；");
  try {
    execFileSync("osascript", [
      "-e",
      `display notification ${JSON.stringify(msg.slice(0, 180))} with title "虾米看AI · ${total} 条待办" subtitle "data/TODO.md"`,
    ]);
  } catch { console.log("（系统通知发不出去，不影响 TODO.md）"); }
}

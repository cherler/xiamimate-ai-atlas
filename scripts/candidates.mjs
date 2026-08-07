/**
 * 候选名单：**从抓到的数据里筛该收谁，而不是我拍脑袋。**
 *
 * 现在 clip 轨那 9 个 Family 是我从交接文档里抄的。抄来的名单有两个毛病：
 * ① 它是某个时点的快照，会过期（Sora 已停服还在里面）；
 * ② 它反映的是写文档那个人的视野，不是世界的实际分布 ——
 *    AA 榜第 5、第 6 的 HappyHorse 我压根没听说过。
 *
 * 两路证据，对应两种「重要」：
 *   · Artificial Analysis 榜 —— 有人真的在用、且质量排得上号（闭源侧的信号）
 *   · Hugging Face 下载量   —— 开源侧的实际采用度（闭源模型在这里是隐形的）
 *
 * 两路都只是**发现**，不是收录。收不收按 ontology 规则一（是不是模型）
 * 与规则四（Core 每轨 ≤10，加第 11 个前先踢一个）人工定。
 *
 *   node scripts/candidates.mjs   →  data/candidates.md
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = `${dirname(fileURLToPath(import.meta.url))}/..`;
const atlas = JSON.parse(readFileSync(`${ROOT}/data/atlas.json`, "utf8"));
const snap = (id) =>
  existsSync(`${ROOT}/data/snapshots/${id}.json`)
    ? JSON.parse(readFileSync(`${ROOT}/data/snapshots/${id}.json`, "utf8"))
    : null;

/**
 * 已收录的 Family 名，用来判断候选是不是新面孔。
 *
 * **只放模型名，不放厂商名。** 第一版把厂商也放进来了，结果 AA 榜第 5 的
 * HappyHorse 被判成「已收录」—— 因为它的厂商 Alibaba-ATH 含「Alibaba」，
 * 而 Wan 的厂商字段里有「阿里 Alibaba」。
 * **同一家公司完全可以有互不相关的 Family**（Google 有 Veo 和 Gemini Omni，
 * 阿里有 Wan 和 HappyHorse）—— 按厂商去重会把整条产品线漏掉。
 */
const known = new Set();
for (const m of atlas.models) {
  known.add(m.family.toLowerCase());
  known.add(m.version.toLowerCase());
  for (const w of `${m.family} ${m.zh}`.toLowerCase().split(/[\s（）()·]+/)) if (w.length > 2) known.add(w);
}
const isNew = (s) => {
  const low = s.toLowerCase();
  return ![...known].some((k) => low.includes(k) || k.includes(low));
};

// ── 一路：AA 榜。行格式是「名次 区间 厂商 模型名 Elo …… 发布月 价格/min」
const rows = [];
for (const id of ["aa-t2v", "aa-i2v"]) {
  const t = snap(id)?.text ?? "";
  // 抓「厂商 模型名 …… 四位 Elo」这一段；Elo 是唯一稳定的锚点
  for (const m of t.matchAll(/([A-Z][\w.\- ]{2,28}?)\s+([A-Z][\w.\- ]{2,34}?)\s+(1,\d{3})\s/g)) {
    rows.push({ vendor: m[1].trim(), model: m[2].trim(), elo: Number(m[3].replace(",", "")), board: id });
  }
}
const byModel = new Map();
for (const r of rows) {
  const k = r.model.toLowerCase();
  if (!byModel.has(k) || byModel.get(k).elo < r.elo) byModel.set(k, r);
}
const aaNew = [...byModel.values()].filter((r) => isNew(r.model)).sort((a, b) => b.elo - a.elo);

// ── 另一路：HF 下载量。组织名就是厂商，仓库数是它在开源侧的投入
const orgs = new Map();
for (const id of ["hf-t2v", "hf-i2v", "hf-v2v"]) {
  for (const it of snap(id)?.items ?? []) {
    const repo = it.split("\t")[0];
    if (!repo.includes("/")) continue;
    const org = repo.split("/")[0];
    if (!orgs.has(org)) orgs.set(org, new Set());
    orgs.get(org).add(repo);
  }
}
// 个人搬运/量化号会刷屏。**按仓库数过滤治标不治本** —— 真正的判据是
// 「这个组织自己训模型，还是在搬别人的」，那要人看一眼，脚本只能给线索。
const hfNew = [...orgs.entries()]
  .map(([org, repos]) => ({ org, n: repos.size, sample: [...repos][0] }))
  .filter((x) => x.n >= 2 && isNew(x.org))
  .sort((a, b) => b.n - a.n);

const md = [
  `# 收录候选 · ${atlas.generated_at}`,
  ``,
  `> **这份名单是筛出来的，不是抄来的。** 现在 clip 轨那 9 个 Family 来自交接文档，`,
  `> 而 AA 榜第 5、第 6 的 HappyHorse 我压根没听说过 —— 抄来的名单反映的是`,
  `> 写文档那个人的视野，不是世界的实际分布。`,
  ``,
  `> 两路都只是**发现**。收不收按 ontology 规则一（是不是模型，不是模板/工具）`,
  `> 与规则四（Core 每轨 ≤10，**加第 11 个之前先踢掉一个**）人工定。`,
  ``,
  `## 一、Artificial Analysis 榜上、我们没收的（闭源侧的「有人真在用」）`,
  ``,
  aaNew.length ? `| 厂商 | 模型 | Elo |\n|---|---|---:|` : "（无）",
  ...aaNew.slice(0, 20).map((r) => `| ${r.vendor} | ${r.model} | ${r.elo} |`),
  ``,
  `## 二、Hugging Face 下载量前列、我们没收的组织（开源侧的实际采用度）`,
  ``,
  hfNew.length ? `| 组织 | 仓库数 | 示例 |\n|---|---:|---|` : "（无）",
  ...hfNew.slice(0, 20).map((x) => `| ${x.org} | ${x.n} | \`${x.sample}\` |`),
  ``,
  `> ⚠️ HF 这一路混着个人搬运号与量化号（QuantStack、city96、calcuis 之类）。`,
  `> **脚本分不出「自己训模型」和「搬别人的」** —— 那要人看一眼组织主页。`,
  `> 不要照单全收，也不要因为混了噪音就整路丢掉：Lightricks、nvidia、zai-org`,
  `> 都是这一路捞出来的，而它们在闭源榜上完全隐形。`,
  ``,
  `## 当前 Core（clip 轨 ${atlas.models.filter((m) => m.class === "clip").length}/10，realtime 轨 ${atlas.models.filter((m) => m.class === "realtime").length}/10）`,
  ``,
  ...atlas.models.map((m) => `- \`${m.class}\` ${m.family} ${m.version}（${m.version_as_of}）${m.status && m.status !== "active" ? ` — **${m.status}**` : ""}`),
  ``,
  `> clip 轨只剩 1 个空位。按规则四，再进新的就必须先踢一个 ——`,
  `> 最该出去的是 **Sora 2**（已公告停服）。但**停服的模型不该从库里删**：`,
  `> 「它没了」本身是有用的信息，应降到 Extended 层，而不是消失。`,
].join("\n");

writeFileSync(`${ROOT}/data/candidates.md`, md);
console.log(`AA 榜新面孔 ${aaNew.length} 个，HF 新组织 ${hfNew.length} 个 → data/candidates.md`);
for (const r of aaNew.slice(0, 8)) console.log(`  [AA ${r.elo}] ${r.vendor} · ${r.model}`);

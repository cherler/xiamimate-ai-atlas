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
  /**
   * 数用 `review.mjs` 的队列，**不用 triage 的黄红计数** ——
   * 后者不知道哪些已经被人处理过，两个数摆在一起会互相打架。
   * 审阅台、命令行、这张待办表，三处必须是同一个口径。
   */
  const { queue } = await import("./review.mjs");
  const q = queue();
  const land = q.filter((x) => x.landable).length;
  if (q.length > 0)
    groups.push({
      n: q.length,
      t: `收件箱里等你定的 ${q.length} 条（能直接落格 ${land} 条）`,
      how: "**开审阅台**：`node scripts/review-ui.mjs` → http://127.0.0.1:8230 ；" +
        "命令行版 `node scripts/review.mjs`。分级理由看 `node scripts/triage.mjs`",
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
    /**
     * **`repos` 是精确的那一份，扫引文只是兜底。**
     *
     * 原来只靠「repo 名有没有出现在 quote/note 里」猜，于是 Kimi-K3、Qwen3.6-27B
     * 这种树上早就有、却是从别的源录进来的，**永远显示成待办** ——
     * 一摞永远不收敛的待办，人看两次就不看了，等于没有待办。
     * 现在每个谱系节点显式记下它覆盖了哪些仓库（同一代的不同尺寸档算同一个节点）。
     */
    for (const r of v.repos ?? []) known.add(r.toLowerCase());
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

/**
 * ④ 待重核：版本升了，格子还是上一版的证据。
 *
 * **这一摞存在的意义，是让 `recheck` 不能当静音键用。**
 * 标了 recheck 校验就放行 —— 如果到此为止，它和「悄悄改 verified_for」没区别，
 * 只是换了个地方烂。所以它必须每天出现在待办里，直到有人去重核。
 */
try {
  const atlas = JSON.parse(read("data/atlas.json") || "{}");
  const stale = (atlas.support ?? []).filter((s) => s.recheck && s.verified_for !== s.recheck);
  const by = {};
  for (const s of stale) by[s.m] = (by[s.m] ?? 0) + 1;
  if (stale.length)
    groups.push({
      n: stale.length,
      t: `待重核 ${stale.length} 格（${Object.entries(by).map(([k, v]) => `${k} ${v}`).join(" · ")}）`,
      how: "去厂商能力页看新版是否已列入；列了就把 verified_for 改成新版并去掉 recheck，没列就留着",
      why: "**厂商的能力页常常落后于它自己的模型清单。** 这些格子的证据是真的，只是核的是上一版 —— " +
        "改 verified_for 是编，退回 ⬜ 是把真证据扔了，所以照实标着，但必须一直算作待办。",
    });
} catch { /* atlas 坏了会被 validate 拦，这里不重复报 */ }

/**
 * ④之二 谱系节点没判能力（R71）。
 *
 * 树上那排「谁先谁后」的按钮是从 `cap` 现算的 —— 一个方向一条都没挂，
 * **整排按钮就不出现**，而页面不会说它为什么不见了。这一摞让那件事有个数。
 */
try {
  const atlas = JSON.parse(read("data/atlas.json") || "{}");
  const bare = (atlas.versions ?? []).filter((v) => !v.cap && !v.cap_skip);
  const by = {};
  for (const v of bare) by[atlas.models.find((m) => m.id === v.m)?.domain ?? "video"] =
    (by[atlas.models.find((m) => m.id === v.m)?.domain ?? "video"] ?? 0) + 1;
  if (bare.length)
    groups.push({
      n: bare.length,
      t: `谱系节点没判能力 ${bare.length} 条（${Object.entries(by).map(([k, v]) => `${k} ${v}`).join(" · ")}）`,
      how: "读节点的 `added`：声明了「这一代新增了 X」就挂 `cap`，没有就写 `cap_skip` 说明理由",
      why: "**挂错比不挂更糟。** 树上的「谁先谁后」取每条产品线最早带该 cap 的节点 —— " +
        "拿「这一代的 API 发布」硬凑一个，整条线的位次就排错了，而它看起来像个结论。",
    });
} catch { /* atlas 坏了会被 validate 拦 */ }

/** ⑤ 收录候选（新面孔）。 */
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

/**
 * 飞书群机器人。**协议照抄线上那支监控**
 * （`xiamimate-tools-backend/scripts/ecs_runtime_monitor.py` 的 `_send_feishu`）——
 * 同一个 `msg_type: "post"` 版式、同一条判成败的规矩（飞书恒回 200，看 body 里的 code）。
 * 不另起一套：两套格式迟早有一套没人维护。
 *
 * webhook 从环境变量读，`tick.sh` 会 source 仓库根的 `.env`（已在 .gitignore 里）。
 * 没配就静默跳过 —— **本机通知照发，不能因为没配群就整条哑掉**。
 *
 * ⚠️ 失败只记类型，**绝不把 webhook 打进日志** —— 那串东西本身就是密钥。
 */
async function feishu(title, lines) {
  const url = (process.env.ATLAS_FEISHU_WEBHOOK_URL || process.env.ECS_MONITOR_FEISHU_WEBHOOK_URL || "").trim();
  if (!url) return "没配 webhook，跳过";
  const payload = {
    msg_type: "post",
    content: { post: { zh_cn: { title, content: lines.map((t) => [{ tag: "text", text: t }]) } } },
  };
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });
    const body = (await r.text()).replace(/\s/g, "");
    return body.includes('"code":0') || body.includes('"errcode":0')
      ? "飞书已送达"
      : `飞书可能未送达：${body.slice(0, 80)}`;
  } catch (e) {
    return `飞书发送失败：${e.name}`;   // 只记类型
  }
}

if (process.argv.includes("--notify") && total) {
  const brief = groups.map((g) => `${g.n} ${g.t.split("（")[0].replace(/\s*\d+\s*条?$/, "")}`).join("；");
  // 本机通知：零成本、不需要凭据。和飞书**两条都发** —— 一条断了另一条还在。
  try {
    execFileSync("osascript", [
      "-e",
      `display notification ${JSON.stringify(brief.slice(0, 180))} with title "虾米看AI · ${total} 条待办" subtitle "data/TODO.md"`,
    ]);
  } catch { console.log("（系统通知发不出去，不影响 TODO.md）"); }

  console.log(
    await feishu(`虾米看AI · ${total} 条待办`, [
      ...groups.map((g) => `· ${g.t}`),
      "",
      "清单：data/TODO.md（每摞都写了下一步该跑什么）",
      "红色那批错了会污染整张图，必须人工。",
    ]),
  );
}

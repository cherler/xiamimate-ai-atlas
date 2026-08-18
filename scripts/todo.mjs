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

  /**
   * ③b 魔搭那一路捞到、**HF 那一路没看到**的。
   *
   * 只报 `only_ms === true` 的那些 —— 其余要么两边都有（HF 那摞已经在报了），
   * 要么来自 HF 侧没扫过的组织（`only_ms` 是 `null`，**判不了不等于是新的**）。
   * 加这个源换来的就是这一小摞，把它单独拎出来才看得见价值。
   */
  const ms = JSON.parse(read("data/modelscope-candidates.json") || "{}").rows ?? [];
  const msMiss = ms.filter(
    (r) =>
      r.only_ms === true &&
      !known.has(r.repo.toLowerCase()) &&
      !known.has(r.repo.split("/").pop().toLowerCase()) &&
      !rejected.has(r.repo.toLowerCase()),
  );
  if (msMiss.length) {
    const byd = {};
    for (const r of msMiss) byd[r.domain ?? "?"] = (byd[r.domain ?? "?"] ?? 0) + 1;
    groups.push({
      n: msMiss.length,
      t: `魔搭独有、我们还没收的 ${msMiss.length} 条（${Object.entries(byd).map(([k, v]) => `${k} ${v}`).join(" · ")}）`,
      how: "`node scripts/modelscope.mjs --json` 重扫；清单在 data/modelscope-candidates.json（🔵 那些）",
      why: "**「HF 那边没有」有两种**：真的只发了魔搭，或者两边名字不一样 —— 人工看一眼才算数。",
    });
  }
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
  // 每家取一条最能说明「为什么还没重核成」的备注（就是格子里写的那句 ⚠️）
  const blockers = Object.keys(by).map((m) => {
    const one = stale.find((x) => x.m === m);
    const fam = (atlas.models ?? []).find((x) => x.id === m)?.family ?? m;
    const why = String(one?.note ?? "").split("⚠️").pop().replace(/\*\*/g, "").trim();
    return `${fam} —— ${why.slice(0, 46)}`;
  }).join("；");
  if (stale.length)
    groups.push({
      n: stale.length,
      t: `待重核 ${stale.length} 格（${Object.entries(by).map(([k, v]) => `${k} ${v}`).join(" · ")}）`,
      /**
       * ⚠️ **别只说「去厂商能力页看」。** 2026-08-14 卡住的这三家，
       * 恰恰是**看不到**：LTX 2.5 的模型卡受限访问、混元 3.1 的产品站在登录墙后面、
       * TRELLIS.2 的仓库页只有版本没有能力说明。
       * 一条让人去做「已经做过、且做不成」的事的指引，会让人开始无视整张待办表 ——
       * 所以把「卡在哪」直接印出来。
       */
      how: `去厂商能力页看新版是否已列入；列了就把 verified_for 改成新版并去掉 recheck，没列就留着。**当前卡点**：${blockers}`,
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

/**
 * ⑥ 引文回查失败的源。**只收「同一个源上挂了 ≥3 条」的**。
 *
 * 2026-08-15 加。全站有 57 个源存在回查失败，**但那 57 不能直接进这里**：
 * §59.3 那条「人每周看的 ≤20」是负反馈闸门，超了会自动放宽采集规则 ——
 * 让一份报告的口径去松动采集纪律，是拿尾巴摇狗。
 *
 * 阈值取 3 也不是拍的：单条失败多半是那一格引文写得不够逐字（人写的，难免）；
 * **同一个源连挂三条，问题就在源不在格** —— 十有八九是抓法不对
 * （抓回来的是侧边导航不是正文），改一次 URL 能一次性解决一片。
 */
const rq = read("data/requote-report.md");
const hotN = (rq.match(/^## 失败 ≥3 条的源（(\d+) 个）/m) ?? [])[1];
if (hotN && Number(hotN) > 0) groups.push({
  n: Number(hotN),
  t: `引文回查：${hotN} 个源上的原句对不上了`,
  how: "`node scripts/requote.mjs --report` 重算；清单在 data/requote-report.md",
  why: "**失败不等于引文错。** 三种成因要分开：真署错了页 / 这一页的快照是残的（抓回来的是导航不是正文）/ 当初记的就不是逐字原文。**脚本不猜，人来分。**",
});

/**
 * ⑦ 保鲜巡检：页面上写的**还成不成立**。
 *
 * 三支脚本（仓库数字 / README 漂移 / 外链）原来只打到标准输出、用退出码表态，
 * 其中两支**根本没有调度**。现在由 `fresh.mjs` 统一跑、落 `data/fresh.json`，
 * 这里只读结果 —— **不重新解析那篇人话报告**，一个口径解析两遍迟早两边不一样。
 */
try {
  const fresh = JSON.parse(read("data/fresh.json") || "{}");
  for (const j of fresh.jobs ?? []) {
    /** 自己坏了要单独报。**「没解析出来」和「没有待办」在表上长得一模一样。** */
    const bad = j.跑不起来 || j.数没对上;
    if (bad) {
      groups.push({ n: 1, t: `保鲜巡检「${j.zh}」这一支自己有问题`, how: `\`node scripts/fresh.mjs ${j.id}\` 看输出`, why: bad });
      continue;
    }
    if (j.n > 0)
      groups.push({
        n: j.n,
        t: `${j.zh}：${j.hits.map((h) => `${h.label} ${h.n}`).join(" · ")}`,
        how: `${j.how} 明细在 data/fresh-report.md`,
        why: j.why,
      });
  }
  /**
   * 跑过没有**本身就是信息**，而且是最容易漏的那一类：
   * 没有报告时上面那个循环一声不吭，待办表上「保鲜这一摞是 0 条」
   * 和「保鲜这一路根本没跑」长得一模一样 —— 而后者才是真出事了。
   *
   * **按支算日子，不看整份报告的日子。** 三支跑的频率可以不一样
   * （外链那支慢，未必天天跑），拿整份的日子一刀切，
   * 会让一支停了半个月的巡检被另外两支的新鲜日子盖住。
   */
  const 一周前 = new Date(Date.now() - 8 * 864e5).toISOString().slice(0, 10);
  if (!fresh.jobs?.length)
    groups.push({
      n: 1, t: "保鲜巡检还没跑过一次",
      how: "审阅台「待办」页点「重跑保鲜巡检」；命令行 `npm run fresh`",
      why: "**没有报告不等于没有问题。** 仓库数字、README 口径、外链这三样是否还成立，目前一个都没查过。",
    });
  else
    for (const j of fresh.jobs.filter((x) => (x.day ?? "0000") < 一周前))
      groups.push({
        n: 1, t: `保鲜巡检「${j.zh}」上次跑是 ${j.day ?? "不详"}，超过一周了`,
        how: `审阅台「待办」页点对应那个按钮；命令行 \`node scripts/fresh.mjs ${j.id}\``,
        why: "**报告旧了，不等于页面没问题** —— 只说明没人在看。",
      });
} catch { /* 报告没有或坏了不该拖垮整张待办表 */ }

const total = groups.reduce((s, g) => s + g.n, 0);
/**
 * 待办表和审阅台是**同一摞东西的两个面**：这份是能进 git、能回溯的存档，
 * 审阅台是能动手的地方。所以每一份都要指向对方 ——
 * 负责人 2026-08-18 定的规矩：**所有操作只从审阅台一个地方走**。
 */
const STATION = `http://127.0.0.1:${process.env.ATLAS_REVIEW_PORT ?? 8230}`;

const md = [
  `# 该你看了 · ${TODAY}`,
  ``,
  total
    ? `**${total} 条待办**，分 ${groups.length} 摞。每摞都指向它原本在的文件 —— **这里只汇总，不下判断**。`
    : `**没有待办。** 注意这和「今天没跑」不是一回事 —— 这份文件是 ${TODAY} 生成的。`,
  ``,
  `> **动手在审阅台：${STATION}**（\`npm run station\` 开）。`,
  `> 这份文件是存档，看的是同一摞东西；判断、重跑、写回都在那边点，不要在两处各做一半。`,
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

/**
 * 审阅台走 `--json` 拿这几摞 —— **不另写一遍分摞逻辑**。
 * 文件开头那条「审阅台、命令行、这张待办表三处必须是同一个口径」，
 * 只有共用同一段代码才做得到；各写各的迟早给出不同的数。
 *
 * 为什么是另起进程而不是 `import`：ES 模块**只会执行一次**，
 * 审阅台上刚跑完一支巡检、再点刷新，import 回来的还是开服那一刻的旧数。
 * 「刷新了但数没变」比不刷新更能骗人。
 */
if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ at: TODAY, total, station: STATION, groups }));
} else {
  console.log(`${total} 条待办 → data/TODO.md`);
}

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
  /**
   * 本机通知：零成本、不需要凭据。和飞书**两条都发** —— 一条断了另一条还在。
   *
   * ⚠️ **不要直接用 `osascript -e "display notification"`。**
   * 那样发出的通知**归属于「脚本编辑器」**，点一下只会启动脚本编辑器，
   * 然后弹出它的「打开文件」对话框 —— 负责人 2026-08-14 截图问「这是什么意思」，
   * 就是这个。**一条点了会打开无关程序的通知，比没有通知更糟**：
   * 它让人以为是自己点错了，或者站坏了。
   *
   * macOS 上通知的归属只能是**发出它的那个 app**，所以发送方做成一个 app 包
   * （`ops/虾米待办.app`，由 `osacompile` 生成、跟着仓库走）：
   * 带参数运行 = 发通知；不带参数运行（也就是用户点了通知）= **把审阅台拉起来并打开**。
   *
   * ⚠️ 2026-08-18 之前，点下去那一路**根本没跑通**：applet 被 LaunchServices
   * 启动时不传 `argv`，脚本第一句 `count of argv` 当场抛错，一秒内退出 ——
   * 没有报错、没有日志，看起来只是「点了没反应」。修在
   * `ops/虾米待办.applescript`，那里也记了为什么必须用 `open` 实测而不是 `osascript`。
   *
   * 那个 app 不在时退回旧写法 —— **通知发不出去不该拖垮 TODO.md 的生成**。
   */
  const notifier = join(ROOT, "ops/虾米待办.app");
  try {
    if (existsSync(notifier)) {
      execFileSync("open", ["-a", notifier, "--args", `虾米看AI · ${total} 条待办`, brief.slice(0, 180)]);
    } else {
      execFileSync("osascript", [
        "-e",
        `display notification ${JSON.stringify(brief.slice(0, 180))} with title "虾米看AI · ${total} 条待办" subtitle ${JSON.stringify(STATION)}`,
      ]);
    }
  } catch { console.log("（系统通知发不出去，不影响 TODO.md）"); }

  /**
   * **通知里不许出现不存在的东西。**
   *
   * 负责人 2026-08-13 收到「46 条待办 …… 红色那批错了会污染整张图，必须人工」，
   * 照着打开审阅台 —— **空的**。因为那句话是**无条件拼上去的**，
   * 而当天收件箱队列是 0：根本没有「红色那批」。
   *
   * 更糟的是它把人引错了地方：那 46 条是谱系候选与收录候选，
   * **审阅台压根不管这两摞**（它只读 `data/inbox`）。
   * 通知说「必须人工」是对的，但没说去哪儿办 —— 于是人到了一个空页面，
   * 只能怀疑是不是站坏了。
   *
   * 现在：红色那句只在真有收件箱队列时才发；每一摞后面直接跟上它自己的下一步。
   */
  /**
   * ⚠️ 2026-08-18 改：**地址无条件带上，而且只带这一个地址。**
   *
   * 原来这里分两支：有收件箱队列才给审阅台地址，否则说「上面这几摞不在那里办，
   * 各自的下一步见每条后面那行」。那句话当时是对的 —— 审阅台确实只读 `data/inbox`。
   * 但它把人推回了「一摞一个命令」的老路：通知里列七摞、七个不同的下一步，
   * 于是每天要开七次终端，人就不开了。
   *
   * 负责人这次定死：**所有操作只从审阅台一个地方处理。** 审阅台已经收全了
   * （待办总览 + 收件箱 + 引文回查，能看能跑能写回），所以通知的落点只有一个。
   * 每摞后面那行「下一步」留着，但它现在是**说明**，不是要人去敲的命令。
   */
  const hasQueue = groups.some((g) => /收件箱/.test(g.t));
  console.log(
    await feishu(`虾米看AI · ${total} 条待办`, [
      ...groups.flatMap((g) => [`· ${g.t}`, `   → ${String(g.how).replace(/[`*]/g, "")}`]),
      "",
      `全部在审阅台处理：${STATION}`,
      "没开的话：cd ~/projects/xiamimate/xiamimate-ai-atlas && npm run station",
      "（只听 127.0.0.1，要在那台机器上开；存档在 data/TODO.md）",
      ...(hasQueue
        ? ["收件箱那批红色的错了会污染整张图，必须人工判 —— 审阅台「收件箱」页。"]
        : []),
    ]),
  );
}

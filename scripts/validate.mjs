/**
 * 数据校验。**「git 当数据库」能撑住的前提**（§59.4.c）：
 * 手写 JSON 坏掉时要有人喊一声，否则前台只会静默地少画一条边。
 *
 * 两条核心规则：
 *   R4 —— `yes` 必须有来源。没有来源的「支持」就是猜的（§26）。
 *   R9 —— 格子记的 `verified_for` 必须等于该模型当前 `version`。
 *          这条拦的是**最阴的一种腐烂**：版本升了，旧结论被悄悄挂到新版本名下。
 *          见 data/ontology.md 规则三之一。
 *          例外只有一种：能力本来就长在同门另一支型号上（Kimi 的视觉在 K2.6、
 *          Qwen 的 FIM 在 coder 那支）。那不是腐烂，是产品线的形状 ——
 *          填 `sibling` 明说是哪一支，R9c/d/e 接手，前台把型号名印出来。
 */
import { readFileSync, existsSync } from "node:fs";

const a = JSON.parse(readFileSync(new URL("../data/atlas.json", import.meta.url), "utf8"));
const watchRegistry = JSON.parse(readFileSync(new URL("../data/sources.json", import.meta.url), "utf8"));
const errs = [];
const warns = [];

const caps = new Map(a.capabilities.map((c) => [c.id, c]));
const models = new Map(a.models.map((m) => [m.id, m]));
const srcIds = new Set(Object.keys(a.sources));
const watchSources = new Map((watchRegistry.sources ?? []).map((s) => [s.id, s]));
const seen = new Set();

/** 某个模型该不该有某项能力的格子 —— 分轨之后不再是全笛卡尔积（ontology 规则二）。 */
const applies = (m, c) =>
  (c.domain ?? "video") === (m.domain ?? "video") && (c.class === "both" || c.class === m.class);

/**
 * **只有 core 要求填满。**
 * Extended 是「库里有、不进主要视觉」（规则四）—— 它只保证「这东西存在」，
 * 不保证逐格核过。硬要求它填满，只会逼出一堆假的 ⬜。
 */
const isCore = (m) => (m.tier ?? "core") === "core";

for (const s of a.support) {
  const at = `${s.m} × ${s.c}`;
  const m = models.get(s.m);
  const c = caps.get(s.c);
  if (!m) { errs.push(`R1 未知模型：${s.m}`); continue; }
  if (!c) { errs.push(`R2 未知能力：${s.c}`); continue; }
  if (seen.has(`${s.m}::${s.c}`)) errs.push(`R3 重复格子：${at}`);
  seen.add(`${s.m}::${s.c}`);
  if (!["yes", "no", "unknown"].includes(s.state)) errs.push(`R0 非法状态 ${s.state}：${at}`);
  if (s.state === "yes" && !s.src) errs.push(`R4 「支持」但没有来源 —— 不许猜：${at}`);
  if (s.src && !srcIds.has(s.src)) errs.push(`R5 来源 id 不存在：${s.src}（${at}）`);
  if (s.state === "no" && !s.src && !s.note) warns.push(`R6 「不支持」既无来源也无说明：${at}`);
  if (m.tier && !["core", "extended"].includes(m.tier)) errs.push(`R12 非法 tier：${m.tier}（${m.id}）`);
  if ((c.domain ?? "video") !== (m.domain ?? "video"))
    errs.push(`R26 跨方向格子：${m.domain} 的模型不该有 ${c.domain} 的能力（${at}）—— 方向之间不共用能力轴`);
  else if (!applies(m, c)) errs.push(`R8 跨轨格子：${m.class} 的模型不该有 ${c.class} 的能力（${at}）`);
  if (!s.verified_for) errs.push(`R9a 缺 verified_for：${at}`);
  else if (s.sibling) {
    // 同门别支：**放行，但要求说清楚**。见 lib/atlas.ts 的 Cell.sibling 注释。
    if (s.verified_for !== s.sibling)
      errs.push(`R9c sibling 与 verified_for 对不上：${at} 说核在 ${s.sibling}，verified_for 却写 ${s.verified_for}`);
    if (s.sibling === m.version)
      errs.push(`R9d ${at} 的 sibling 填的就是当前版本 ${m.version} —— 那它不是别支，去掉这个字段`);
    if (!s.note) errs.push(`R9e 挂在同门别支却没写明白：${at} —— ✅ 不加说明会被当成旗舰就能做`);
  } else if (s.verified_for !== m.version)
    errs.push(`R9 版本对不上：${at} 记的是 ${s.verified_for}，但 ${m.family} 当前是 ${m.version}。` +
      `升级后必须重新核验或退回 unknown，不许沿用旧版结论。` +
      `（若这条能力本来就长在同门另一支型号上，那不是腐烂 —— 填 sibling 字段）`);
}

/**
 * R67 —— 数据集日期不能早于任何一格的核验日。
 * 页脚印的「数据截至 X」是给读者的新鲜度承诺；有格子比它还新，那句话就是错的。
 */
{
  const dated = a.support.filter((s) => s.as_of);
  const newest = dated.map((s) => s.as_of).sort().at(-1);
  if (newest && newest > a.generated_at)
    errs.push(`R67 数据集日期 ${a.generated_at} 早于最新核验的格子 ${newest} —— 页脚那句「数据截至」会是错的`);
  for (const s of dated)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(s.as_of)) errs.push(`R67a as_of 不是日期：${s.m} × ${s.c} = ${s.as_of}`);
}

// 缺格会被前台静默当成 unknown，那是**沉默的错**。
for (const m of a.models)
  for (const c of a.capabilities)
    if (isCore(m) && applies(m, c) && !seen.has(`${m.id}::${c.id}`)) errs.push(`R7 缺格：${m.id} × ${c.id}`);

// ── 平台可用性（E5）。规矩和能力格一样：**没有原文就不算证据**。
const pids = new Set((a.platforms ?? []).map((p) => p.id));
const mids = new Set(a.models.map((m) => m.id));
for (const v of a.availability ?? []) {
  const at = `${v.p} × ${v.m}`;
  if (!pids.has(v.p)) errs.push(`R13 未知平台：${v.p}`);
  if (!mids.has(v.m)) errs.push(`R14 未知模型：${v.m}（${at}）`);
  if (!srcIds.has(v.src)) errs.push(`R15 来源 id 不存在：${v.src}（${at}）`);
  if (!v.quote) errs.push(`R16 可用性没有原文引用 —— 不算证据：${at}`);
  if (!["available", "coming-soon", "gone"].includes(v.status)) errs.push(`R17 非法状态 ${v.status}：${at}`);
  if (!["same", "older", "newer", "unknown"].includes(v.match)) errs.push(`R18 非法 match：${at}`);
  // 上架的是旧版本，却没写清楚 —— 那正是这张表最该说的话
  if (!["api", "web", "both", "unknown"].includes(v.access_type)) errs.push(`R53 非法 access_type：${at}`);
  if (!["free", "paid", "trial", "unknown"].includes(v.plan)) errs.push(`R53 非法 plan：${at}`);
  // 有效期过了却还标着 available —— 那是过期的断言
  if (v.valid_to && v.valid_to !== "unknown" && v.valid_to < a.generated_at && v.status !== "gone")
    errs.push(`R54 有效期已过（${v.valid_to}）却不是 gone：${at}`);
  if (v.match === "older" && !v.note) warns.push(`R19 上架版本比当前主力旧，却没写说明：${at}`);
}

// ── 公司实体层。**产业链图全挂在这层上，这层烂了上面全烂。**
const orgIds = new Set((a.orgs ?? []).map((o) => o.id));
if (orgIds.size !== (a.orgs ?? []).length) errs.push("R20a orgs 里有重复 id");
for (const o of a.orgs ?? []) {
  if (o.parent && !orgIds.has(o.parent) && o.parent !== "alphabet") errs.push(`R22 parent 指向不存在的公司：${o.id} → ${o.parent}`);
  /**
   * **「不知道它在哪」和「填了但填不全」是两回事。**
   *
   * 新收的几家小厂（HiDream / Boogu / NewBie / Circlestone）公开渠道查不到可靠总部 ——
   * HiDream 的报道里合肥与北京都出现过。**与其钉一个可能错的城市，不如承认不知道**，
   * 和 ⬜「官方没说」同一条纪律。所以整块 `hq` 缺失只警告，地球上先不画它；
   * 填了却缺经纬度仍是错误，那是数据自己不自洽。
   */
  if (!o.hq) warns.push(`R23 总部未知，地球上先不画：${o.zh}`);
  else if (!o.hq.lat || !o.hq.lon) errs.push(`R23 填了总部却缺经纬度，地球上画不出来：${o.id}`);
  // **不许因为「大家都知道」就当成核过了** —— 那正是我们批评别人的那件事。
  if (!o.hq_src) warns.push(`R21 总部没有来源，只是常识：${o.zh}`);
  // 有来源不等于证到位：ICP 备案只证到省，招聘页可能同时列两个城市。
  // **不许把 province 当 exact 用** —— 我们批评厂商「说了半句」时，自己不能也说半句。
  else if (o.hq_precision && o.hq_precision !== "exact")
    warns.push(`R21b 总部有来源但只证到 ${o.hq_precision}，城市这一级仍是常识：${o.zh}`);
  if (o.hq_src && !srcIds.has(o.hq_src)) errs.push(`R21c 总部来源 id 不存在：${o.hq_src}（${o.zh}）`);
}
for (const m of a.models) if (!orgIds.has(m.org)) errs.push(`R20 模型挂到不存在的公司：${m.id} → ${m.org}`);

/**
 * 架构族（R59~R62）—— 演化树能不能从**一个根**长出来，全靠这一栏。
 *
 * 那张 LLM 演化树的根不是「谁用了谁的权重」（BERT 和 GPT 没有权重关系），
 * 是 **Transformer 架构**；三条主干是架构族。**架构闭源也公开**，写在技术报告里。
 * 所以这一栏对闭源模型同样可采 —— 采不到就留 null，不猜。
 *
 * 规矩和能力格完全一致：**填了架构就必须给得出官方原文和来源**。
 */
const ARCH = Object.keys(a.$arch ?? {});
/**
 * R66：**核心模型的版本号必须有来源。**
 *
 * 2026-08-11 负责人指出 AI 文本那一卷「GPT-5.6 了，你才找到 GPT-5.2」——
 * 一查全线落后：GLM 记 4.5 实际 5.2、DeepSeek 记 V3 实际 V4、Kimi 记 K2 实际 K3。
 * 根因不是采集难，是**我按记忆填了版本号**，而按记忆填 = 编。
 * 这个产品唯一的本钱是「对得上」，所以这条不能靠自觉，得是一条过不去的规则。
 *
 * 只卡 core：extended 是「收了但没逐格核」，版本号可以先空着。
 * `version_quote` 也要有 —— 只给一个来源 id 而摘不出原文，和没有来源一样。
 */
for (const m of a.models) {
  if ((m.tier ?? "core") !== "core") continue;
  const at = `${m.family}（${m.id}）`;
  if (!m.version_src) errs.push(`R66 核心模型的版本号没有来源：${at} = ${m.version} —— **按记忆填版本号就是编**`);
  else if (!srcIds.has(m.version_src)) errs.push(`R66 版本来源 id 不存在：${m.version_src}（${at}）`);
  if (m.version_src && !m.version_quote) errs.push(`R66 有来源却摘不出原文：${at}`);
}

for (const m of a.models) {
  if (m.arch == null) { warns.push(`R59 架构未采：${m.id}（树上只能挂在「未标注」）`); continue; }
  if (!ARCH.includes(m.arch)) errs.push(`R60 非法架构族 ${m.arch}：${m.id} —— 只能是 ${ARCH.join("/")}`);
  // **依据必须标明**：official = 有厂商技术报告原文；common = 领域常识判断，没有厂商确证。
  // 负责人 2026-08-09 拍板：架构族是领域常识（Sora 之后基本全转 DiT），不必逐条考据，
  // 但**站上不能假称厂商确认过** —— 所以用 basis 分档，和总部定位「精确/省市级/未定」一个做法。
  if (!["official", "common"].includes(m.arch_basis ?? ""))
    errs.push(`R61 架构没标依据（official / common）：${m.id}`);
  if (m.arch_basis === "official") {
    if (!m.arch_quote) errs.push(`R62 标了 official 却没有原文 —— 和能力格一个规矩：${m.id}`);
    if (!m.arch_src) errs.push(`R62 标了 official 却没有来源 id：${m.id}`);
    else if (!srcIds.has(m.arch_src)) errs.push(`R62 架构来源 id 不存在：${m.arch_src}（${m.id}）`);
  }
}
for (const v of a.investments ?? []) {
  if (!orgIds.has(v.to)) errs.push(`R24 投资的接收方不是库里的公司：${v.to}`);
  if (!v.src || !v.quote) errs.push(`R25 投资关系没有来源或原文 —— 和能力格一个规矩：${v.from} → ${v.to}`);
}

// ── 平台透明度（G3 · §59.4.e）。**🔴 的门槛是「读过」** ——
// 没读到页面只能记 blocked，那是我们的缺口，不是对方的问题。
const DISC = ["yes", "partial", "no", "blocked", "n/a"];
for (const pf of a.platforms ?? []) {
  if (!DISC.includes(pf.discloses)) { errs.push(`R27 非法透明度取值 ${pf.discloses}：${pf.id}`); continue; }
  if (["yes", "partial"].includes(pf.discloses)) {
    if (!pf.discloses_quote) errs.push(`R28 说人家公示了，却没有原文 —— 不算证据：${pf.id}`);
    if (!srcIds.has(pf.discloses_src)) errs.push(`R29 透明度来源 id 不存在：${pf.discloses_src}（${pf.id}）`);
  }
  // 「只字不提」是对人家的负面判断，必须先证明我们真的读过整页。
  if (pf.discloses === "no" && !srcIds.has(pf.discloses_src))
    errs.push(`R30 判 ${pf.id}「只字不提」却拿不出读过的证据 —— 没读到只能记 blocked`);
  if (!pf.discloses_why) warns.push(`R31 透明度没写理由：${pf.id}`);
}

// ── 价格（G5）。**unit 是一等字段** —— 七家七种计价方式，
// 把它们并成一列数字，那一列一定是编的。
const seenPrice = new Set();
const UNITS = ["per-second", "points", "subscription", "credits", "unavailable"];
for (const q of a.pricing ?? []) {
  const at = `价格 ${q.p} × ${q.m}`;
  if (!mids.has(q.m)) errs.push(`R32 未知模型：${at}`);
  // **主键是 (平台, 模型)** —— 同一个模型在不同平台不是一个价，
  // 不写平台的价等于没写：万相在百炼 ¥0.6/秒，在 Replicate $0.25/秒。
  if (!pids.has(q.p)) errs.push(`R39 未知平台：${at}`);
  if (seenPrice.has(`${q.p}::${q.m}`)) errs.push(`R40 重复的价格条目：${at}`);
  seenPrice.add(`${q.p}::${q.m}`);
  if (!UNITS.includes(q.unit)) errs.push(`R33 非法计价单位 ${q.unit}：${at}`);
  if (!srcIds.has(q.src)) errs.push(`R34 来源 id 不存在：${q.src}（${at}）`);
  if (!q.quote) errs.push(`R35 价格没有原文 —— 和能力格一个规矩：${at}`);
  if (q.unit === "per-second" && !q.currency) errs.push(`R36 按秒计价却没写币种 —— 那就没法比：${at}`);
  // 有价必须有维度：同一个模型 720P 和 4K 能差 5 倍，记成一个标量必然是错的
  if (q.unit !== "unavailable" && !(q.tiers ?? []).length) errs.push(`R37 有价但没写档位（分辨率/时长/有无声）：${at}`);
  if (!q.as_of) errs.push(`R38 价格没写核验日期 —— 价格比能力更容易过期：${at}`);
}

// ── 版本谱系（B1）。树的边错了，整张演化图就是错的。
const vids = new Set((a.versions ?? []).map((v) => v.id));
for (const v of a.versions ?? []) {
  const at = `版本 ${v.id}`;
  if (!mids.has(v.m)) errs.push(`R55a 版本挂到不存在的模型：${at} → ${v.m}`);
  if (!v.added) errs.push(`R55b 版本没写「这一代新增了什么」—— 只有版本号的节点没有价值：${at}`);
  if (v.parent) {
    if (!vids.has(v.parent)) errs.push(`R56a parent 指向不存在的节点：${at} → ${v.parent}`);
    else {
      const p = a.versions.find((x) => x.id === v.parent);
      // **时间倒流的血缘是错的** —— 父节点不可能晚于子节点发布
      if (p.date > v.date) errs.push(`R56 血缘时间倒流：${at}（${v.date}）的父节点 ${p.id} 是 ${p.date}`);
    }
  }
}
// 环：顺着 parent 往上走，走不到根就是有环
for (const v of a.versions ?? []) {
  const seen = new Set([v.id]);
  let cur = v;
  while (cur?.parent) {
    if (seen.has(cur.parent)) { errs.push(`R57 血缘成环：${v.id}`); break; }
    seen.add(cur.parent);
    cur = a.versions.find((x) => x.id === cur.parent);
  }
}

/**
 * R58：**核心模型少于 3 个谱系节点，必须写明为什么。**
 *
 * 少于 3 个的模型在演化树上是孤点。孤点有两种成因：
 * 「我们没采到」和「它本来就没有历史」—— **这两件事对读者完全不同**，
 * 不许都画成一样的孤点然后不解释。写不出理由，就说明是前一种，那就去采。
 */
for (const m of a.models) {
  if (m.class !== "clip" || (m.tier ?? "core") !== "core") continue;
  const n = (a.versions ?? []).filter((v) => v.m === m.id).length;
  if (n < 3 && !m.lineage_note)
    errs.push(`R58 ${m.family} 只有 ${n} 个谱系节点却没写原因 —— 「没采到」和「本来就没有」是两回事`);
}

// ── 新实体（A2）。**结构先立、校验先行**：结构定错了，填进去的数据全要返工。
// 五个都可以是空数组 —— 不能因为还没填数据就报错。
const skillIds = new Set((a.skills ?? []).map((k) => k.id));
for (const k of a.skills ?? []) {
  const at = `Skill ${k.id}`;
  if (k.cap && !caps.has(k.cap)) errs.push(`R43 Skill 的 cap 不在能力轴内：${at} → ${k.cap}`);
  for (const m of k.native ?? []) if (!models.has(m)) errs.push(`R43 Skill 的原生实现指向不存在的模型：${at} → ${m}`);
  for (const o of [...(k.opensource ?? []), ...(k.platform_feature ?? [])])
    if (!o.src || !o.quote) errs.push(`R44 Skill 的实现条目缺来源或原文：${at} → ${o.name ?? o.p}`);
  // **一个没有「已知限制」的 Skill 页是在卖广告，不是在帮人。**
  if (!(k.limits ?? []).length) warns.push(`R45 Skill 没写已知限制：${at}`);
  if (!k.verified_at) errs.push(`R45a Skill 没写核验日期：${at}`);
}

for (const app of a.applications ?? []) {
  const at = `应用 ${app.id}`;
  for (const skillId of app.skills ?? [])
    if (!skillIds.has(skillId)) errs.push(`R43 应用关联了不存在的 Skill：${at} → ${skillId}`);
  for (const r of app.resources ?? []) {
    if (!["project", "skill", "course", "docs"].includes(r.kind))
      errs.push(`R43 应用资源类型不合法：${at} → ${r.name}`);
    if (!r.url || !r.src || !r.quote)
      errs.push(`R44 应用公开资源缺链接、来源或原文：${at} → ${r.name}`);
    if (r.src && !watchSources.has(r.src))
      errs.push(`R63 应用资源来源没有进入自动监视清单：${at} → ${r.src}`);
  }
}

// 应用会从关联 Skill 自动汇总项目 / Workflow；这些来源也必须有刷新周期，
// 否则页面看起来在更新，真正的开源内容却永远不会进入 watch --due。
//
// **查全部 Skill，不只查被应用引用到的那些。** 原来按应用往下遍历，
// 一个还没进任何应用的 Skill（比如「开源自部署」被从应用层拿掉之后）
// 就悄悄脱离监视 —— 而它的资源照样显示在 /skill 页上。
for (const skill of a.skills ?? []) {
  for (const item of [...(skill.opensource ?? []), ...(skill.workflow ?? [])]) {
    if (item.src && !watchSources.has(item.src))
      errs.push(`R63 Skill 资源来源没有进入自动监视清单：${skill.id} → ${item.src}`);
  }
}

const CHANGES = existsSync(new URL("../data/changes.json", import.meta.url))
  ? JSON.parse(readFileSync(new URL("../data/changes.json", import.meta.url), "utf8")).events
  : [];
for (const e of CHANGES) {
  const at = `变化 ${e.date} ${e.subject ?? e.entity}`;
  // **只有 after 的那是新闻，不是 ChangeEvent。**
  for (const f of ["before", "after", "why"])
    if (!e[f]) errs.push(`R46 变化事件缺 ${f} —— 只有 after 的是新闻不是 ChangeEvent：${at}`);
  for (const x of e.impact ?? []) {
    if (!x.includes(":")) continue;   // 影响可以是一句自然语言，不强求是 id
    const [kind, id] = x.includes(":") ? x.split(":") : ["model", x];
    const okRef = kind === "skill" ? skillIds.has(id) : kind === "capability" ? caps.has(id) : models.has(id);
    if (!okRef) errs.push(`R47 变化事件的影响对象解析不到：${at} → ${x}`);
  }
  // changes.json 里「我们记错了」那一侧不必有外部来源 —— 来源就是我们自己的提交
  if (!e.src && e.side !== "ours") errs.push(`R48 变化事件缺来源：${at}`);
}

for (const t of a.toolkit ?? []) {
  // **只有链接没有判断的就是 hao123**（§16 原话：不要做一排 Logo 的 hao123）。
  if (!t.verdict) errs.push(`R49 工具箱条目没有我们的判断：${t.site}`);
  if (!t.caveat) errs.push(`R49 工具箱条目没有负面结论 —— 那正是这一页的价值：${t.site}`);
  if (!t.url || !t.checked_at) errs.push(`R49a 工具箱条目缺链接或核验日期：${t.site}`);
}

for (const e of a.effect ?? []) {
  const at = `效果 ${e.m}`;
  if (!mids.has(e.m)) errs.push(`R50a 未知模型：${at}`);
  // **我们不打分，只转述并标明是谁说的。**
  if (!e.who) errs.push(`R50 效果没写是谁说的 —— 我们不打分，只转述：${at}`);
  if (!["third-party", "vendor-claim"].includes(e.kind)) errs.push(`R50b 非法 kind：${at}`);
  if (e.kind === "third-party" && !e.url) errs.push(`R51 第三方效果没有回源链接：${at}`);
  if (!e.quote || !e.as_of) errs.push(`R51a 效果缺原文或核验日期：${at}`);
}

for (const d of a.discount ?? []) {
  if (!pids.has(d.p) || !mids.has(d.m)) errs.push(`R52a 折扣挂到不存在的平台或模型：${d.p} × ${d.m}`);
  if (!d.src || !d.quote) errs.push(`R52 折扣缺来源或原文：${d.p} × ${d.m}`);
}

// ── 动线（A1）。**没有动线，拆页只是把一堆页面摆开。**
const flows = existsSync(new URL("../data/flows.json", import.meta.url))
  ? JSON.parse(readFileSync(new URL("../data/flows.json", import.meta.url), "utf8")).flows
  : null;
if (flows) {
  /**
   * 路由表：全局页 + 方向页 + 动态段样板。
   *
   * **方向页要按 domains 展开。** 路由方向化之后（/atlas/video/tree），
   * 这张表还写着旧的 /tree，于是动线一改就报「引用了不存在的页」——
   * 而真正不存在的恰恰是表里那几个旧路径。**校验表要跟着路由一起改。**
   */
  const GLOBAL = ["/", "/caveats", "/toolkit", "/changes", "/method"];
  const DOMAIN_PAGES = ["", "/tree", "/map", "/scenario", "/models"];
  const ROUTES = [
    ...GLOBAL,
    ...(a.domains ?? []).flatMap((d) => DOMAIN_PAGES.map((seg) => `/${d.id}${seg}`)),
  ];
  const DYN = ["/model/", "/capability/", "/skill/", "/compare/"];
  const known = (p) => ROUTES.includes(p) || DYN.some((d) => p.startsWith(d));
  for (const f of flows) {
    if (!f.steps?.length) errs.push(`R41a 动线没有步骤：${f.id}`);
    f.steps.forEach((s, i) => {
      if (!known(s.page)) errs.push(`R41 动线引用了不存在的页：${f.id} → ${s.page}`);
      for (const e of s.exits ?? []) if (!known(e)) errs.push(`R41 动线出口指向不存在的页：${f.id} → ${e}`);
      // 除末步外必须有出口 —— **没有出口的中间步就是死路**
      if (i < f.steps.length - 1 && !(s.exits ?? []).length)
        errs.push(`R42 动线中间步没有出口（死路）：${f.id} 第 ${i + 1} 步 ${s.page}`);
      if (!s.q) errs.push(`R42a 动线步骤没写它回答的问题：${f.id} → ${s.page}`);
    });
  }
}

/**
 * 方向与轨（H5 扩方向的地基）。
 *
 * **轨是方向的属性，不是全局枚举。** AI 视频分两轨（离线出片 / 实时交互）是它
 * 自己的事；AI 图像只有一轨，AI 编程更没有这个分法。所以：
 *   - 每个方向自己声明 tracks；
 *   - model.class 必须是**它所属方向**声明过的轨；
 *   - skills / applications 也要有 domain —— 少了这一栏，扩方向时它们会
 *     **同时出现在每个方向下**，而且没有任何一处会报错。
 */
const domainIds = new Set((a.domains ?? []).map((d) => d.id));
if (!domainIds.size) errs.push("R64 一个方向都没有 —— domains 是空的");
for (const d of a.domains ?? []) {
  if (!(d.tracks ?? []).length) warns.push(`R64 方向没声明 tracks：${d.id}（前端只能拿 id 当名字显示）`);
  const seenTrack = new Set();
  for (const t of d.tracks ?? []) {
    if (!t.id || !t.zh || !t.short) errs.push(`R65 轨缺 id/zh/short：${d.id} → ${JSON.stringify(t)}`);
    if (seenTrack.has(t.id)) errs.push(`R65 同一方向里轨 id 重复：${d.id} → ${t.id}`);
    seenTrack.add(t.id);
  }
}
const tracksOfDomain = (dom) =>
  new Set(((a.domains ?? []).find((d) => d.id === dom)?.tracks ?? []).map((t) => t.id));
for (const m of a.models) {
  const dom = m.domain ?? "video";
  if (!domainIds.has(dom)) errs.push(`R64 模型挂到不存在的方向：${m.id} → ${dom}`);
  else if (!tracksOfDomain(dom).has(m.class))
    errs.push(`R65 模型的轨没在它的方向里登记：${m.id} 是 ${m.class}，但方向 ${dom} 只有 ${[...tracksOfDomain(dom)].join("/") || "（无）"}`);
}
for (const k of ["capabilities", "skills", "applications"]) {
  for (const x of a[k] ?? []) {
    const dom = x.domain ?? "video";
    if (!domainIds.has(dom)) errs.push(`R64 ${k} 挂到不存在的方向：${x.id} → ${dom}`);
    if (!x.domain) warns.push(`R64 ${k} 没写 domain，按 video 兜底：${x.id} —— 扩方向前必须补齐`);
  }
}

const used = new Set([
  ...a.support.map((s) => s.src),
  ...(a.availability ?? []).map((v) => v.src),
  ...(a.platforms ?? []).map((p) => p.discloses_src), // 透明度也是引用，漏了会误报 R10
  ...(a.investments ?? []).map((v) => v.src),         // 投资关系也是引用
  ...(a.skills ?? []).flatMap((k) => (k.workflow ?? []).map((w) => w.src)),   // workflow 来源
  ...(a.skills ?? []).flatMap((k) => (k.opensource ?? []).map((o) => o.src)), // 开源实现的来源，漏了会误报 R10
  ...(a.skills ?? []).flatMap((k) => (k.platform_feature ?? []).map((f) => f.src)),
  ...(a.applications ?? []).flatMap((app) => (app.resources ?? []).map((r) => r.src)), // 应用的课程与文档来源
  ...a.models.map((m) => m.arch_src),                 // 架构标注也是引用
  ...a.models.map((m) => m.version_src),              // 版本号的出处（闭源图像几家只有这一栏能挂）
  ...(a.pricing ?? []).map((q) => q.src),
].filter(Boolean));
for (const id of srcIds) if (!used.has(id)) warns.push(`R10 来源登记了但没被引用：${id}`);

// Core 每轨 ≤10（ontology 规则四）。加第 11 个之前必须先踢掉一个。
for (const cls of ["clip", "realtime"]) {
  const n = a.models.filter((m) => m.class === cls && isCore(m)).length;
  if (n > 10) errs.push(`R11 ${cls} 轨 Core 收了 ${n} 个 Family，超过上限 10 —— 加第 11 个之前必须先踢掉一个`);
}

const by = { yes: 0, no: 0, unknown: 0 };
const perClass = {};
for (const s of a.support) {
  const mm = models.get(s.m);
  if (mm && !isCore(mm)) continue; // extended 不进对外统计
  by[s.state] += 1;
  const cls = mm?.class ?? "?";
  perClass[cls] ??= { yes: 0, no: 0, unknown: 0 };
  perClass[cls][s.state] += 1;
}

console.log(`Core 格子 ${by.yes + by.no + by.unknown}（库内共 ${a.support.length}） · ✅${by.yes} ❌${by.no} ⬜${by.unknown}（⬜ 占 ${Math.round((by.unknown / (by.yes + by.no + by.unknown)) * 100)}%）`);
for (const [cls, t] of Object.entries(perClass))
  console.log(`  ${cls}：✅${t.yes} ❌${t.no} ⬜${t.unknown}`);
const older = (a.availability ?? []).filter((v) => v.match === "older").length;
console.log(`平台 ${(a.platforms ?? []).length} 个 · 可用性 ${(a.availability ?? []).length} 条（其中 ${older} 条上架的不是当前主力版本）`);
const geo = {};
for (const m of a.models) { const o = (a.orgs ?? []).find((x) => x.id === m.org); if (o?.hq) geo[o.hq.country] = (geo[o.hq.country] ?? 0) + 1; }   // hq 可缺 —— 缺就不进地理统计，别崩
const d = {};
for (const pf of a.platforms ?? []) d[pf.discloses] = (d[pf.discloses] ?? 0) + 1;
console.log(`平台透明度：🟢公示 ${d.yes ?? 0} · 🟡部分 ${d.partial ?? 0} · 🔴不提 ${d.no ?? 0} · ⬜我们没看到 ${d.blocked ?? 0} · 不适用 ${d["n/a"] ?? 0}`);
const pu = {};
for (const q of a.pricing ?? []) pu[q.unit] = (pu[q.unit] ?? 0) + 1;
console.log(`价格 ${(a.pricing ?? []).length} 条 · 计价单位：${Object.entries(pu).map(([k, v]) => `${k} ${v}`).join(" / ")}` +
  `（**能横向比的只有 per-second 那几条**）`);
console.log(`公司 ${(a.orgs ?? []).length} 家 · 模型按总部：${Object.entries(geo).map(([k, v]) => `${k} ${v}`).join(" / ")} · 投资关系 ${(a.investments ?? []).length} 条`);
if (flows) console.log(`动线 ${flows.length} 条，共 ${flows.reduce((n, f) => n + f.steps.length, 0)} 步`);
console.log(`来源 ${srcIds.size} 条，官方 ${Object.values(a.sources).filter((s) => s.tier === "official").length} 条`);
for (const w of warns) console.log(`  警告 ${w}`);
if (errs.length) {
  for (const e of errs) console.error(`  错误 ${e}`);
  console.error(`\n${errs.length} 个错误。`);
  process.exit(1);
}
console.log("校验通过。");

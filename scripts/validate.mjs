/**
 * 数据校验。**「git 当数据库」能撑住的前提**（§59.4.c）：
 * 手写 JSON 坏掉时要有人喊一声，否则前台只会静默地少画一条边。
 *
 * 两条核心规则：
 *   R4 —— `yes` 必须有来源。没有来源的「支持」就是猜的（§26）。
 *   R9 —— 格子记的 `verified_for` 必须等于该模型当前 `version`。
 *          这条拦的是**最阴的一种腐烂**：版本升了，旧结论被悄悄挂到新版本名下。
 *          见 data/ontology.md 规则三之一。
 */
import { readFileSync } from "node:fs";

const a = JSON.parse(readFileSync(new URL("../data/atlas.json", import.meta.url), "utf8"));
const errs = [];
const warns = [];

const caps = new Map(a.capabilities.map((c) => [c.id, c]));
const models = new Map(a.models.map((m) => [m.id, m]));
const srcIds = new Set(Object.keys(a.sources));
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
  else if (s.verified_for !== m.version)
    errs.push(`R9 版本对不上：${at} 记的是 ${s.verified_for}，但 ${m.family} 当前是 ${m.version}。` +
      `升级后必须重新核验或退回 unknown，不许沿用旧版结论`);
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
  if (v.match === "older" && !v.note) warns.push(`R19 上架版本比当前主力旧，却没写说明：${at}`);
}

// ── 公司实体层。**产业链图全挂在这层上，这层烂了上面全烂。**
const orgIds = new Set((a.orgs ?? []).map((o) => o.id));
if (orgIds.size !== (a.orgs ?? []).length) errs.push("R20a orgs 里有重复 id");
for (const o of a.orgs ?? []) {
  if (o.parent && !orgIds.has(o.parent) && o.parent !== "alphabet") errs.push(`R22 parent 指向不存在的公司：${o.id} → ${o.parent}`);
  if (!o.hq?.lat || !o.hq?.lon) errs.push(`R23 缺经纬度，地球上画不出来：${o.id}`);
  // **不许因为「大家都知道」就当成核过了** —— 那正是我们批评别人的那件事。
  if (!o.hq_src) warns.push(`R21 总部没有来源，只是常识：${o.zh}`);
}
for (const m of a.models) if (!orgIds.has(m.org)) errs.push(`R20 模型挂到不存在的公司：${m.id} → ${m.org}`);
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

const used = new Set([
  ...a.support.map((s) => s.src),
  ...(a.availability ?? []).map((v) => v.src),
  ...(a.platforms ?? []).map((p) => p.discloses_src), // 透明度也是引用，漏了会误报 R10
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
for (const m of a.models) { const o = (a.orgs ?? []).find((x) => x.id === m.org); if (o) geo[o.hq.country] = (geo[o.hq.country] ?? 0) + 1; }
const d = {};
for (const pf of a.platforms ?? []) d[pf.discloses] = (d[pf.discloses] ?? 0) + 1;
console.log(`平台透明度：🟢公示 ${d.yes ?? 0} · 🟡部分 ${d.partial ?? 0} · 🔴不提 ${d.no ?? 0} · ⬜我们没看到 ${d.blocked ?? 0} · 不适用 ${d["n/a"] ?? 0}`);
console.log(`公司 ${(a.orgs ?? []).length} 家 · 模型按总部：${Object.entries(geo).map(([k, v]) => `${k} ${v}`).join(" / ")} · 投资关系 ${(a.investments ?? []).length} 条`);
console.log(`来源 ${srcIds.size} 条，官方 ${Object.values(a.sources).filter((s) => s.tier === "official").length} 条`);
for (const w of warns) console.log(`  警告 ${w}`);
if (errs.length) {
  for (const e of errs) console.error(`  错误 ${e}`);
  console.error(`\n${errs.length} 个错误。`);
  process.exit(1);
}
console.log("校验通过。");

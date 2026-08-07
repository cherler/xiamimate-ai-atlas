/**
 * 数据校验。**「git 当数据库」能撑住的前提**（§59.4.c）：
 * 手写 JSON 坏掉时要有人喊一声，否则前台只会静默地少画一条边。
 *
 * 最重要的一条规则是 R4：**`yes` 必须有来源。**
 * 没有来源的「支持」就是猜的，而这个项目唯一交易不掉的东西就是「不猜」（§26）。
 */
import { readFileSync } from "node:fs";

const a = JSON.parse(readFileSync(new URL("../data/atlas.json", import.meta.url), "utf8"));
const errs = [];
const warns = [];

const capIds = new Set(a.capabilities.map((c) => c.id));
const modelIds = new Set(a.models.map((m) => m.id));
const srcIds = new Set(Object.keys(a.sources));
const seen = new Set();

for (const s of a.support) {
  const at = `${s.m} × ${s.c}`;
  if (!modelIds.has(s.m)) errs.push(`R1 未知模型：${s.m}`);
  if (!capIds.has(s.c)) errs.push(`R2 未知能力：${s.c}`);
  if (seen.has(`${s.m}::${s.c}`)) errs.push(`R3 重复格子：${at}`);
  seen.add(`${s.m}::${s.c}`);
  if (!["yes", "no", "unknown"].includes(s.state)) errs.push(`R0 非法状态 ${s.state}：${at}`);
  if (s.state === "yes" && !s.src) errs.push(`R4 「支持」但没有来源 —— 不许猜：${at}`);
  if (s.src && !srcIds.has(s.src)) errs.push(`R5 来源 id 不存在：${s.src}（${at}）`);
  if (s.state === "no" && !s.src && !s.note) warns.push(`R6 「不支持」既无来源也无说明：${at}`);
}

// 每一格都要有人表过态。漏掉的格子会被前台当成 unknown，那是**沉默的错**。
for (const m of a.models)
  for (const c of a.capabilities)
    if (!seen.has(`${m.id}::${c.id}`)) errs.push(`R7 缺格：${m.id} × ${c.id}`);

const used = new Set(a.support.map((s) => s.src).filter(Boolean));
for (const id of srcIds) if (!used.has(id)) warns.push(`R8 来源登记了但没被引用：${id}`);

const n = a.models.length * a.capabilities.length;
const by = { yes: 0, no: 0, unknown: 0 };
for (const s of a.support) by[s.state] += 1;

console.log(`格子 ${a.support.length}/${n} · ✅${by.yes} ❌${by.no} ⬜${by.unknown}`);
console.log(`来源 ${srcIds.size} 条，官方 ${Object.values(a.sources).filter((s) => s.tier === "official").length} 条`);
for (const w of warns) console.log(`  警告 ${w}`);
if (errs.length) {
  for (const e of errs) console.error(`  错误 ${e}`);
  console.error(`\n${errs.length} 个错误。`);
  process.exit(1);
}
console.log("校验通过。");

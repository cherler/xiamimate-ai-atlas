import { atlas, avail, capsOf, cell, label, modelsOf, vendorName, type Klass } from "./atlas";
import glossary from "@/data/glossary.json";
import { capHref, modelHref } from "./slug";

/**
 * 本地检索 + Answer View（方案 §13、§41 第一阶段）。
 *
 * §13 的要求不是「搜 Kling 跳 Kling 页」，而是**能搜自然问题**：
 * 「哪个视频模型支持动作控制」「Seedance 在哪用」「哪些有开源实现」。
 *
 * 按 §41，第一阶段就用本地全文 —— 全部数据一共一百多条，
 * 上 Meilisearch 是给一个查得动的东西加一个要运维的东西。
 * 而且**静态站没有后端**，检索必须在浏览器里跑完。
 *
 * ## 为什么不做成模糊匹配就完事
 *
 * 「哪些模型支持动作复刻」这种问题，正确答案不是**一串链接**，是**一个清单**。
 * 所以这里先识别意图（问的是能力？平台？开源？），命中了就直接给答案，
 * 给不出答案时才退回普通检索 —— 那正是 §13 说的 Visual Answer。
 */

export type Answer =
  | { kind: "capability"; capId: string; models: string[] }
  | { kind: "where"; modelId: string }
  | { kind: "openweights"; models: string[] }
  | null;

/**
 * ⚠️ **索引的是「站上有的东西」，不是只有模型。**
 *
 * 负责人 2026-08-13 截图：在搜索框里打「AI短剧」，**什么都没有** ——
 * 而「AI短剧」是场景页上实实在在的一个应用。第一版只索引了模型 / 能力 / 平台
 * 三类共 175 条，而站上还有 34 个应用、25 个 Skill、35 条工具箱、
 * 10 条术语、21 份教程、5 个方向页 —— **一条都没进索引**。
 * 搜「AI视频」（一整卷的名字）同样是空的。
 *
 * **搜索的范围如果和站的内容对不上，用户会以为站上没有这东西。**
 * 这比搜不准更糟：它给出的是一个错误的否定结论。
 */
export type HitKind =
  | "model" | "capability" | "platform"
  | "domain" | "application" | "skill" | "toolkit" | "term" | "tutorial";

export type Hit = { kind: HitKind; id: string; title: string; sub: string; score: number; href: string };

/**
 * ⚠️ **必须容忍空值。** 2026-08-13 全站搜索一上线就白屏：
 * `m.zh` 在 22 个模型上是空的（声音卷 15 个、AI 3D 7 个），
 * `undefined.toLowerCase()` 直接把整棵 React 树炸掉 —— 页面连 `<main>` 都没了。
 *
 * **这不是 3D 才有的问题**：声音卷 2026-08-12 上线时就埋下了，
 * 只是当时搜索只挂在方向首页的中下部，没人在那儿打过字。
 * **一个可选字段，配一个不检查的调用点，等于一颗定时炸弹。**
 */
const norm = (s?: string | null) => (s ?? "").toLowerCase().replace(/[\s·・\-_/（）()「」【】,，。？?！!]/g, "");

/** 能力的整组别名都要能命中 —— 这正是规则六换来的东西，用户和我们一样会用别家的叫法搜。 */
function matchCapability(q: string) {
  const n = norm(q);
  let best: { id: string; len: number } | null = null;
  for (const c of atlas.capabilities) {
    for (const w of [c.zh, c.name, ...(c.aliases ?? [])]) {
      const k = norm(w);
      if (k.length >= 2 && n.includes(k) && (!best || k.length > best.len)) best = { id: c.id, len: k.length };
    }
  }
  return best?.id ?? null;
}

function matchModel(q: string) {
  const n = norm(q);
  let best: { id: string; len: number } | null = null;
  for (const m of atlas.models) {
    for (const w of [m.family, m.zh, label(m), m.version].filter(Boolean)) {
      const k = norm(w);
      if (k.length >= 2 && n.includes(k) && (!best || k.length > best.len)) best = { id: m.id, len: k.length };
    }
  }
  return best?.id ?? null;
}

const WHERE = /在哪|哪里用|去哪|哪家|哪个平台|where|平台/i;
const OPEN = /开源|权重|open.?weight|自部署|本地跑/i;

export function answer(q: string): Answer {
  if (!q.trim()) return null;
  if (OPEN.test(q) && !matchModel(q)) {
    const models = atlas.models.filter((m) => cell(m.id, "openweights").state === "yes").map((m) => m.id);
    return { kind: "openweights", models };
  }
  const mid = matchModel(q);
  if (mid && WHERE.test(q)) return { kind: "where", modelId: mid };
  const cid = matchCapability(q);
  if (cid) {
    const models = atlas.models.filter((m) => cell(m.id, cid).state === "yes").map((m) => m.id);
    return { kind: "capability", capId: cid, models };
  }
  return null;
}

export function search(q: string): Hit[] {
  const n = norm(q);
  if (n.length < 1) return [];
  const hits: Hit[] = [];
  const push = (kind: HitKind, id: string, title: string, sub: string, hay: string[], href: string) => {
    let score = 0;
    for (const h of hay) {
      const k = norm(h);
      if (!k) continue;
      if (k === n) score += 100;
      else if (k.includes(n)) score += 40;
      else if (n.includes(k) && k.length >= 2) score += 25;
    }
    if (score) hits.push({ kind, id, title, sub, score, href });
  };
  for (const m of atlas.models)
    push("model", m.id, label(m), `${vendorName(m)} · ${m.version_as_of}`,
      [m.family, m.zh, vendorName(m), label(m), m.version], modelHref(m));
  for (const c of atlas.capabilities)
    push("capability", c.id, c.zh, [c.name, ...(c.aliases ?? []).slice(0, 4)].join(" · "),
      [c.zh, c.name, ...(c.aliases ?? [])], capHref(c));
  for (const p of atlas.platforms)
    push("platform", p.id, p.name, `${p.kind} · ${p.region}`, [p.name, p.kind], "/where");

  /** 方向本身要能搜到 —— 「AI视频」是这一站最常被打进去的四个字。 */
  for (const d of atlas.domains.filter((x) => x.state === "live"))
    push("domain", d.id, d.name, `${(d.tracks ?? []).map((t) => t.zh).join(" · ")} · ${d.volume ?? ""}`.trim(),
      [d.name, d.id, ...(d.tracks ?? []).map((t) => t.zh)], d.href ?? `/${d.id}`);

  /** 应用（场景页上的那些交付物）。**「AI短剧」就是在这一类里。** */
  for (const x of atlas.applications) {
    const dom = x.domain ?? "video";
    push("application", x.id, x.zh, `${x.en ?? ""} · ${x.output ?? ""}`.trim(),
      [x.zh, x.en, ...(x.aliases ?? []), x.output], `/${dom}/scenario#app-${x.id}`);
  }

  for (const k of atlas.skills)
    push("skill", k.id, k.zh, `${k.en ?? ""} · 怎么做到`.trim(), [k.zh, k.en], `/skill/${k.id}`);

  /** 工具箱：搜的是「我该去哪个站」，命中的是任务描述与站名。 */
  for (const t of atlas.toolkit)
    push("toolkit", t.site, t.site, t.task, [t.site, t.task], "/toolkit");

  for (const t of glossary.terms)
    push("term", t.id, t.term, "术语速查", [t.term, ...(t.aliases ?? [])], `/basics#reading`);
  for (const g of glossary.tutorials)
    for (const it of g.items)
      push("tutorial", it.name, it.name, `${g.group} · 公开教程`, [it.name, it.repo ?? ""], "/basics#tutorials");

  return hits.sort((a, b) => b.score - a.score).slice(0, 14);
}

/** 给 Answer 配一句可复核的口径，而不是只甩一串名字。 */
export function answerNote(a: Answer): string {
  if (!a) return "";
  if (a.kind === "openweights")
    return "注意：「开源权重」不等于标准开源协议 —— 这两个用的都是自定义社区许可，商用前要自己读条款。";
  if (a.kind === "capability")
    return "只列有明确来源的。标 ⬜ 的没算进来 —— 那是「官方没说」，不是「不支持」。";
  return "上架的版本可能不是当前主力版本，逐条看下面的说明。";
}

export const trackOf = (id: string): Klass => atlas.models.find((m) => m.id === id)?.class ?? "clip";
export const capsFor = capsOf;
export const modelsFor = modelsOf;
export const availOf = avail;

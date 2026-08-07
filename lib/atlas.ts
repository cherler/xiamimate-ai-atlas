import raw from "@/data/atlas.json";

/**
 * 三态。**`unknown` 不是缺口，是一条事实**：我们查了，公开渠道没说。
 * 见 §59.4.e —— 把「不透明」做成一等数据，而不是留白。
 */
export type State = "yes" | "no" | "unknown";

/**
 * 品类。**两轨不共用一张表**（data/ontology.md 规则二）：
 * 对实时模型「视频延长」没有意义（它没有终点），对离线模型「延迟」没有意义。
 * 硬并成一张表，既没信息量，又会让人以为它们在同一条赛道上分了胜负。
 */
export type Klass = "clip" | "realtime";

export type Capability = {
  id: string;
  class: Klass | "both";
  name: string;
  zh: string;
  group: string;
  /** 已普及的能力默认折叠：它连向所有模型，画出来只是噪音（§59.1 的超级节点问题） */
  ubiquity: "前沿" | "主流" | "已普及";
  /** 我们手上的日志能证明的最早时间（不是业界首次出现）。见 atlas.json 的 $since。 */
  since?: string;
  since_src?: string;
  since_quote?: string;
  since_note?: string;
  aliases?: string[];
};

/** 一等实体是 Family，version 是会过期的挂件（ontology 规则三）。 */
/** 生命周期（ontology 规则五）。**能力对不代表能用** —— Sora 每一格都对，整张表却把人带沟里。 */
export type Status = "active" | "superseded" | "discontinued";

export type Model = {
  id: string;
  class: Klass;
  family: string;
  zh: string;
  vendor: string;
  version: string;
  version_as_of: string;
  status?: Status;
  status_note?: string;
  /** core 进主图与主表（每轨 ≤10）；extended 只在库里 —— 停服的降到这里而不是删掉。 */
  tier?: "core" | "extended";
};

export type Source = { url: string; tier: "official" | "third-party"; name: string };

/**
 * 怎么个能法（ontology 规则七）。对「能不能做」两者都是能；
 * 对**「是不是一步做完」**差很多 —— separate-task 要再调一次接口、再计一次费，
 * 而且通常只能作用于**已经生成出来的**视频。
 */
export type Via = "native" | "separate-task";

export type Cell = {
  m: string;
  c: string;
  state: State;
  via?: Via;
  /** 这条结论核验的是哪个版本。与模型当前 version 不符时校验脚本报错（规则三之一）。 */
  verified_for?: string;
  /** 指向 sources 表。**没有 src 的 yes 是不允许的**，校验脚本会拦。 */
  src?: string;
  note?: string;
};

/**
 * 方向。**现在只有 AI 视频一个。**
 *
 * 留这个结构是为了「加一个方向 = 改数据，不是改代码」。
 * 但**界面上不做占位 tab 假装有别的** —— 那是骗人，而这个产品的全部本钱就是不骗人。
 */
export type Domain = { id: string; name: string; state: "live" | "planned"; note?: string };

/** 被明确排除的东西。「为什么不收」和「它没了」一样，是有用的信息。 */
export type Excluded = {
  name: string;
  vendor: string;
  kind: string;
  date: string;
  why: string;
  same_bucket?: string[];
  revisit?: string;
};

/** 平台（去哪用）。**厂商与平台是两个身份** —— Runway 两样都是。 */
export type Platform = { id: string; name: string; kind: string; region: string; url: string; note?: string };

/**
 * 可用性。§9.3 明确要求「✓ 不能只是布尔值」。
 * **最有用的一列是 match** —— 平台上架的常常不是当前主力版本，
 * 只答「有没有」会让人以为能用上当前版本的能力。
 */
export type Availability = {
  p: string;
  m: string;
  listed: string;
  status: "available" | "coming-soon" | "gone";
  match: "same" | "older" | "newer" | "unknown";
  src: string;
  quote: string;
  note?: string;
};

export const atlas = raw as unknown as {
  platforms: Platform[];
  availability: Availability[];
  domains: Domain[];
  excluded: Excluded[];
  version: string;
  generated_at: string;
  note: string;
  changelog: string[];
  states: Record<State, string>;
  tiers: Record<string, string>;
  capabilities: Capability[];
  models: Model[];
  sources: Record<string, Source>;
  support: Cell[];
};

const index = new Map(atlas.support.map((s) => [`${s.m}::${s.c}`, s]));

export function cell(modelId: string, capId: string): Cell {
  return index.get(`${modelId}::${capId}`) ?? { m: modelId, c: capId, state: "unknown" };
}

export const isYes = (m: string, c: string) => cell(m, c).state === "yes";

/**
 * 模型显示名 = Family + 当前版本。版本会变，Family 不会。
 *
 * 有些 Family 名的末词本身就是版本号的前缀（Vidu **Q** / Q2、Runway **Gen** / Gen-4.5、
 * Decart **Lucy** / Lucy 2），直接拼会拼出「Vidu Q Q2」。这里把重复的末词吃掉。
 * 「MiniMax Hailuo」+「H3」不受影响 —— H3 不以 Hailuo 开头，两个词都得留。
 */
export function label(m: Model) {
  const last = m.family.split(" ").pop() ?? "";
  if (last && m.version.startsWith(last)) return `${m.family.slice(0, -last.length).trim()} ${m.version}`.trim();
  return `${m.family} ${m.version}`;
}

const isCore = (m: Model) => (m.tier ?? "core") === "core";

/** 主图与主表只吃 core。extended 单独一节列，不混进统计（否则会污染对外的 ⬜ 占比）。 */
export const modelsOf = (k: Klass) => atlas.models.filter((m) => m.class === k && isCore(m));
export const extendedOf = (k: Klass) => atlas.models.filter((m) => m.class === k && !isCore(m));
export const capsOf = (k: Klass) => atlas.capabilities.filter((c) => c.class === k || c.class === "both");

/** 实现了某能力的模型 —— 点一个能力节点时高亮的就是这批（= 「这个能力去哪用」） */
export const modelsWith = (capId: string) =>
  atlas.models.filter((m) => isYes(m.id, capId)).map((m) => m.id);

/**
 * 两个模型的能力对比。§59.1 的红利：选中两个模型就是 Compare，
 * **不需要单独做一个 Compare 页面**。只在同轨内有意义。
 */
export function compare(a: string, b: string) {
  const ma = atlas.models.find((m) => m.id === a)!;
  const both: string[] = [];
  const onlyA: string[] = [];
  const onlyB: string[] = [];
  for (const c of capsOf(ma.class)) {
    const x = isYes(a, c.id);
    const y = isYes(b, c.id);
    if (x && y) both.push(c.id);
    else if (x) onlyA.push(c.id);
    else if (y) onlyB.push(c.id);
  }
  return { both, onlyA, onlyB };
}

/**
 * 透明度 = ⬜ 的多少。
 *
 * **不用我们主观打分**（§59.4.e 原来设想的是人工评 🟢🟡🔴）——
 * 九家都用官方文档逐格核过之后，剩下的 ⬜ 就是这家厂商没公开说的部分，
 * 是从公开事实算出来的、可复核的数。
 *
 * 而且它**必须按家看，不能报总数**：35 格里 Wan 一家占 10 格、
 * 前三家占 60%，报总数会让人以为厂商普遍不透明。
 */
export function transparency(k: Klass = "clip") {
  const caps = capsOf(k).length;
  return modelsOf(k)
    .map((m) => {
      const unknown = capsOf(k).filter((c) => cell(m.id, c.id).state === "unknown").length;
      return { model: m, unknown, caps, rate: unknown / caps };
    })
    .sort((a, b) => b.unknown - a.unknown);
}

export const avail = (p: string, m: string) => atlas.availability.find((v) => v.p === p && v.m === m);

export function tally(k?: Klass) {
  const ms = k ? modelsOf(k) : atlas.models;
  const ids = new Set(ms.map((m) => m.id));
  const t = { yes: 0, no: 0, unknown: 0, total: 0 };
  for (const s of atlas.support)
    if (ids.has(s.m)) {
      t[s.state] += 1;
      t.total += 1;
    }
  return t;
}

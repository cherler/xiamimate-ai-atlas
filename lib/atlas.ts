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
  /** 指向 orgs 的实体 id。**不再是自由字符串** —— 那让阿里在库里成了两家。 */
  org: string;
  /** 公司内部团队（Seed / 通义 / ATH / Skywork）。合并公司时信息不能丢在合并里。 */
  team?: string;
  version: string;
  version_as_of: string;
  status?: Status;
  status_note?: string;
  /** core 进主图与主表（每轨 ≤10）；extended 只在库里 —— 停服的降到这里而不是删掉。 */
  tier?: "core" | "extended";
  /**
   * 大陆网络**不走代理**直连厂商官方站/文档的实测结果（不是 API 端点 —— 两件事不能混）。
   * 地理这条线真正有用的不是「公司在哪」，是**「你在哪，能不能用上」**。
   */
  reach_cn?: "ok" | "blocked" | "unknown";
  reach_note?: string;
};

export type Source = { url: string; tier: "official" | "third-party"; name: string };

/**
 * 公司 —— **一等实体**（此前只是模型上的一个字符串，结果同一家公司出现两次）。
 *
 * 产业链地图、地球分布、投资关系全都挂在这一层。现在只有 11 家，
 * 拆开是十分钟的活；等五个方向两百个模型再拆就是一次迁移。
 *
 * ## hq 现在没有来源
 *
 * 都是公开常识，但我们自己的规矩是**「没有来源的结论就是猜的」**。
 * 所以 `hq_src` 缺失时校验 R21 会一直警告、前台必须标出来 ——
 * **不许因为「大家都知道」就当成核过了**，那正是我们批评别人的那件事。
 */
export type Org = {
  id: string;
  zh: string;
  name: string;
  kind: "bigtech" | "startup" | "lab";
  parent?: string;
  hq: { city: string; country: string; iso: string; lat: number; lon: number };
  /** 有来源才算核过。没有就是「按常识填的」。 */
  hq_src?: string;
  note?: string;
};

/**
 * 价格（G5）。**unit 是一等字段，不是备注。**
 *
 * 七家七种计价方式：按秒标美元 / 按秒标人民币 / 按点数扣 / 只卖订阅 / 官方页上查不到。
 * 把它们并成一列「每秒多少钱」，**那一列一定是编的**。
 *
 * `tiers` 是数组不是标量：同一个模型 720P 和 4K 能差 5 倍（Kling ¥0.6 vs ¥3.0），
 * 有声无声再差 50%。**记成一个数字必然是错的。**
 */
export type Price = {
  /** 平台。**主键是 (p, m)** —— 不指定平台，「多少钱」就没有答案。 */
  p: string;
  m: string;
  unit: "per-second" | "points" | "subscription" | "credits" | "unavailable";
  currency?: "USD" | "CNY" | null;
  listed_as?: string;
  tiers?: { label: string; v: number }[];
  src: string;
  quote: string;
  /** 价格比能力过期得快得多，所以核验日期是必填。 */
  as_of: string;
  note?: string;
};

/**
 * 版本谱系（演进图的数据）。**演进的主体是模型，不是能力。**
 *
 * `added` 是必填且是这条数据的全部价值所在：**只有版本号没有 added 的节点没有意义**——
 * 「Kling 出了 3.0」不涨知识，「Kling 3.0 加了动作复刻」才涨。
 */
export type Version = {
  /** 树节点 id。 */
  id: string;
  /** 父节点。**没有父节点的就当根，不许为了让树好看硬接一条边** —— Aleph 不是 Gen 的后代。 */
  parent?: string;
  m: string;
  version: string;
  date: string;
  added: string;
  /** 挂到能力轴上，「点一项能力看谁先谁后」靠它。**对不上就留空**，硬凑会把那一刀切错。 */
  cap?: string;
  cap_skip?: string;
  src: string;
  quote: string;
  note?: string;
};

/** 上游投资关系。结构先建好 —— 但**可得性上限只有 B/C 级**，见 atlas.json 的 $investments。 */
export type Investment = { from: string; to: string; round?: string; date?: string; src: string; quote: string };

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
export type Platform = {
  id: string;
  name: string;
  kind: string;
  /** 三类：厂商自有 / API 市场 / 第三方产品。第三方那类的关键问题是**公不公示底层模型**。 */
  kind2?: "vendor-own" | "api" | "third-party";
  /**
   * 公不公示底层模型（§59.4.e）。**四档不是三档** ——
   * `no`（读完了确实没提）和 `blocked`（我们没读到）是两件事，混在一起就是我们在编。
   * `no` 的门槛是「读过」：校验 R30 要求它必须拿得出 `discloses_src`。
   */
  discloses: "yes" | "partial" | "no" | "blocked" | "n/a";
  discloses_src?: string;
  discloses_quote?: string;
  discloses_why?: string;
  region: string;
  url: string;
  note?: string;
};

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
  orgs: Org[];
  pricing: Price[];
  versions: Version[];
  investments: Investment[];
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


/** 公司实体查找。前台一律走这个，不要再直接读模型上的字符串。 */
export const orgOf = (m: Model | string): Org | undefined => {
  const id = typeof m === "string" ? atlas.models.find((x) => x.id === m)?.org : m.org;
  return atlas.orgs.find((o) => o.id === id);
};

/** 显示用的厂商名：公司 + 团队（「字节跳动 · Seed」）—— 团队是真实信息，不该被合并吞掉。 */
export const vendorName = (m: Model): string => {
  const o = orgOf(m);
  if (!o) return "?";
  return m.team ? `${o.zh} · ${m.team}` : o.zh;
};

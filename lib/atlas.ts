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
  /** 给用户看的一句话：什么时候停。**status_note 里混着我们的工作过程，不上前端。** */
  status_short?: string;
  status_until?: string;
  status_note?: string;
  /** core 进主图与主表（每轨 ≤10）；extended 只在库里 —— 停服的降到这里而不是删掉。 */
  tier?: "core" | "extended";
  /**
   * 大陆网络**不走代理**直连厂商官方站/文档的实测结果（不是 API 端点 —— 两件事不能混）。
   * 地理这条线真正有用的不是「公司在哪」，是**「你在哪，能不能用上」**。
   */
  reach_cn?: "ok" | "blocked" | "unknown";
  reach_note?: string;
  /** 谱系节点少于 3 个时必须写明为什么（R58）。**「没采到」和「本来就没有」是两回事。** */
  lineage_note?: string;
  /**
   * 产品线级别的开闭源归属，用来分演化树的两条主干。
   * **`mixed` 不是含糊，是真实情况**：万相 2.1/2.2 有权重、2.5 之后没有；
   * 海螺反过来只有最新的 H3 放了权重。**同一条线前半开后半闭，硬分哪边都是错的。**
   */
  weights?: "open" | "closed" | "mixed";
  weights_note?: string;
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
  /** 定位精度：exact / province / ambiguous / null。10 家仍未定到城市级（待办 H2）。 */
  hq_precision?: string;
  /**
   * 投资方录全了没：full = 官方披露里点名的都录了；partial = 还有没点名/没录的。
   * **partial 必须在图上画出来**（⋯ 节点）—— 只画已知的那几条，
   * 读者会以为「就这几个投资方」，那比不画更误导。和 ⬜「官方没说」同一条纪律。
   */
  investors_coverage?: "full" | "partial";
  investors_note?: string;
  ir_url?: string;
  ir_src?: string;
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

/**
 * Skill / Workflow。方案 §10 原话：**「Skill 必须是第一等公民。」**
 * Skill 回答「这件事怎么做」，能力格回答「谁能做」—— 两个问题。
 * `limits` 为空要报警告（R45）：**没有「已知限制」的 Skill 页是在卖广告。**
 */
export type Skill = {
  id: string; zh: string; en: string; cap?: string;
  io?: { in: string[]; out: string };
  native?: string[];
  opensource?: { name: string; url?: string; src: string; quote: string }[];
  /** 能直接跑起来的 workflow / 官方插件。**方案 §10 要的「拿什么做」就是这一栏。** */
  workflow?: { name: string; url: string; kind: "official" | "community"; src: string; quote: string }[];
  platform_feature?: { p: string; name: string; src: string; quote: string; discloses?: string }[];
  limits?: string[]; cases?: string[];
  src?: string; quote?: string; verified_at: string;
};

/**
 * 应用资源不是另一套散乱的导航页，而是从「我想做什么」往下接的公开路线。
 * 项目 / Skill / 课程 / 文档四种标签故意分开：能下载、能运行、能学习、能查证是四件不同的事。
 */
export type ApplicationResourceKind = "project" | "skill" | "course" | "docs";

/**
 * 一条证据 = 哪个 Skill 因为什么原文把这个资源认下来。
 *
 * **同一个 URL 会被多个 Skill 认领**：MiniMaxAI/MiniMax-H3 一个链接同时挂在
 * 角色一致（Ref2VA）、首尾帧（FL2VA）、口播对口型（官方案例）、动作复刻（V2V）四处，
 * 四条原文各不相同。按 URL 去重是对的（同一个仓库不该在一页里出现四次），
 * 但**只留第一条就是在静默丢证据** —— 口播剧原来显示的是「角色一致」的
 * Omni-reference 原文，而它最需要的那条「让画面里的人说指定台词」被丢了。
 * 所以去重保留卡片，证据整组留下。
 */
export type ApplicationResourceEvidence = { skill_id: string; skill_zh: string; quote: string };

export type ApplicationResource = {
  kind: ApplicationResourceKind;
  name: string;
  url: string;
  src: string;
  quote: string;
  note?: string;
  /**
   * 许可证。**三态，不是两态** —— 这是本项目栽过的同一个坑：
   *
   *   `"MIT"` 等字符串 = 查过，就是这个许可（自定义社区许可按原名写，不写「开源」）
   *   `null`           = **查过，作者确实没放 LICENSE**
   *   字段缺失          = **我们还没采**
   *
   * 后两者长得像，含义完全相反。混成一个「有没有」的布尔，
   * 界面就会把 HunyuanVideo、Wan 这些明明有许可证的仓库标成「未授权使用」——
   * 那不是谨慎，是造谣。和 ⬜「官方没说」/ ❌「官方说了不支持」的区分同一条纪律。
   */
  license?: string | null;
  /** 认领它的每一个 Skill 及其原文。应用自己填的课程/文档没有 Skill，这里是空数组。 */
  evidence: ApplicationResourceEvidence[];
};

export type Application = {
  id: string;
  zh: string;
  en: string;
  /**
   * 同一件事在行业里的别名。**这一栏是给搜的人用的** ——
   * 我们叫「数字人口播」，别人可能搜「AI口播」「口播视频」；叫「AI漫剧」的
   * 也有人叫「动画微短剧」「网文漫改」。和 capabilities.aliases 一个道理：
   * 按自己的词去搜会搜不到。
   */
  aliases?: string[];
  intro: string;
  inputs: string[];
  output: string;
  skills: string[];
  resources?: ApplicationResource[];
};

/** Change + So What（§15）。**只有 after 的那是新闻，不是 ChangeEvent。** */
export type ChangeEvent = {
  date: string; entity: string; kind?: string;
  before: string; after: string; why: string;
  affects?: string[]; src: string; quote: string;
};

/** 资源导航（§16）。**只有链接没有判断的就是 hao123** —— `caveat` 是负面结论，必填。 */
export type Toolkit = { task: string; site: string; url: string; verdict: string; caveat: string; checked_at: string };

/** 效果。**我们不打分，只转述并标明是谁说的。** */
export type Effect = {
  m: string; kind: "third-party" | "vendor-claim";
  who: string; value: string; url?: string; quote: string; as_of: string;
};

/** 折扣。此前埋在 pricing.note 里，结构化出来才能在对比表里并排看。 */
export type Discount = { p: string; m: string; rule: string; off: string; src: string; quote: string };

/** 上游投资关系。结构先建好 —— 但**可得性上限只有 B/C 级**，见 atlas.json 的 $investments。 */
export type Investment = { from: string; to: string; round?: string; date?: string; src: string; quote: string };

/**
 * 怎么个能法（ontology 规则七）。对「能不能做」两者都是能；
 * 对**「用的是原生模型还是它的变体」**差很多。**别把它概括成一句通用解释** ——
 * 动作复刻的变体照样直接收驱动视频，口播对口型的变体才是「只能作用于已生成的视频」，
 * 两者都在 separate-task 里，一句话套过去必有一头是编的。看每一格的 note。
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
  /** §9.3 要求的五个字段。**推不出来的一律 unknown，不许猜。** */
  access_type?: "api" | "web" | "both" | "unknown";
  region?: string;
  plan?: "free" | "paid" | "trial" | "unknown";
  valid_from?: string;
  valid_to?: string;
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
  skills: Skill[];
  applications: Application[];
  toolkit: Toolkit[];
  effect: Effect[];
  discount: Discount[];
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
 * 一个 Skill 能用哪些模型做 —— 并且**分成两堆**。
 *
 * `support[].via` 早就记着这件事了：`native` 是**原生模型**就能做，
 * `separate-task` 是得用**它的变体** —— Kling 官方 API 清单里
 * Kling 3.0 与 Kling 3.0 Motion Control 是并列的两个模型，不是同一个模型的一个开关。
 * 那个变体具体叫什么，看那一格的 note。
 * 以前这个事实只以一句散文躺在 limits 里（「这几家是另一个接口…」），
 * 于是六个 Skill 页看上去都是一模一样的一排模型名。现在它是结构。
 */
export function skillModels(skill: { cap?: string; native?: string[] }) {
  const ids = skill.native ?? [];
  const ms = ids.map((id) => atlas.models.find((m) => m.id === id)).filter(Boolean) as Model[];
  const viaOf = (m: Model) => (skill.cap ? cell(m.id, skill.cap).via : undefined);
  return {
    direct: ms.filter((m) => viaOf(m) !== "separate-task"),
    separate: ms.filter((m) => viaOf(m) === "separate-task"),
  };
}

const resourceKindForWorkflow = (url: string): ApplicationResourceKind =>
  url.includes("docs.comfy.org") ? "docs" : "skill";

/**
 * 场景页资源排序（docs/应用开源资源治理.md）。
 *
 * 先把「能不能继续做」排在「去哪里学」前面，再看来源层级；不把 Star
 * 或一条主观推荐语压成可信度分数。最后用名称和 URL 做稳定兜底，避免
 * 上游抓取顺序变化导致页面每次刷新都跳动。
 */
const RESOURCE_KIND_ORDER: Record<ApplicationResourceKind, number> = {
  project: 0,
  skill: 1,
  docs: 2,
  course: 3,
};

const resourceSourceOrder = (resource: ApplicationResource) =>
  atlas.sources[resource.src]?.tier === "official" ? 0 : 1;

const compareApplicationResources = (a: ApplicationResource, b: ApplicationResource) =>
  RESOURCE_KIND_ORDER[a.kind] - RESOURCE_KIND_ORDER[b.kind]
  || resourceSourceOrder(a) - resourceSourceOrder(b)
  || a.name.localeCompare(b.name, "zh-Hans")
  || a.url.localeCompare(b.url);

/**
 * 应用页的资源由两部分组成：应用额外推荐的课程/文档 + 关联 Skill 已核过的公开项目/工作流。
 * 这样资源只维护一次，动作复刻的仓库不会在「短剧」「漫剧」「特效」三处各抄一份。
 */
export function applicationResources(app: Application): ApplicationResource[] {
  const byUrl = new Map<string, ApplicationResource>();
  for (const r of app.resources ?? []) byUrl.set(r.url, { ...r, evidence: r.evidence ?? [] });

  /** 已有同 URL 的卡就只追加证据，不再丢弃 —— 见 ApplicationResourceEvidence 的注释。 */
  const take = (url: string, make: () => ApplicationResource, ev: ApplicationResourceEvidence) => {
    const hit = byUrl.get(url);
    if (hit) {
      if (!hit.evidence.some((e) => e.skill_id === ev.skill_id && e.quote === ev.quote)) hit.evidence.push(ev);
      return;
    }
    byUrl.set(url, { ...make(), evidence: [ev] });
  };

  for (const skillId of app.skills) {
    const s = atlas.skills.find((x) => x.id === skillId);
    if (!s) continue;
    for (const o of s.opensource ?? []) {
      if (!o.url) continue;
      take(o.url,
        () => ({ kind: "project", name: o.name, url: o.url!, src: o.src, quote: o.quote, evidence: [] }),
        { skill_id: s.id, skill_zh: s.zh, quote: o.quote });
    }
    for (const w of s.workflow ?? []) {
      take(w.url,
        () => ({
          kind: resourceKindForWorkflow(w.url),
          name: w.name,
          url: w.url,
          src: w.src,
          quote: w.quote,
          note: w.kind === "community" ? "社区维护；先看依赖和显存要求" : "官方公开教程或工作流",
          evidence: [],
        }),
        { skill_id: s.id, skill_zh: s.zh, quote: w.quote });
    }
  }

  return [...byUrl.values()].sort(compareApplicationResources);
}

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

/**
 * 生命周期标签的展示口径。**只此一份。**
 * 刚才 `Sel` 在两个文件里各写了一份，类型立刻对不上 —— 同一个口径不许有第二份。
 */
export const STATUS: Record<string, { tag: string; cls: string }> = {
  discontinued: { tag: "已停服", cls: "text-no line-through" },
  superseded: { tag: "非主力", cls: "text-muted" },
};

/** 出现在 availability 表里的模型：core 全收 + extended 里真有上架记录的。 */
export const availModels = () => [
  ...modelsOf("clip"),
  ...atlas.models.filter((m) => (m.tier ?? "core") !== "core" && atlas.availability.some((v) => v.m === m.id)),
];

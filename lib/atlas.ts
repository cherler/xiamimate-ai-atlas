import raw from "@/data/atlas.json";

/**
 * 三态。**`unknown` 不是缺口，是一条事实**：我们查了，公开渠道没说。
 * 见 §59.4.e —— 把「不透明」做成一等数据，而不是留白。
 */
export type State = "yes" | "no" | "unknown";

export type Capability = {
  id: string;
  name: string;
  zh: string;
  group: string;
  /** 已普及的能力默认折叠：它连向所有模型，画出来只是噪音（§59.1 的超级节点问题） */
  ubiquity: "前沿" | "主流" | "已普及";
};

export type Model = { id: string; name: string; zh: string; vendor: string; released: string };

export type Source = { url: string; tier: "official" | "third-party"; name: string };

export type Cell = {
  m: string;
  c: string;
  state: State;
  /** 指向 sources 表。**没有 src 的 yes 是不允许的**，校验脚本会拦（scripts/validate.mjs） */
  src?: string;
  note?: string;
};

export const atlas = raw as unknown as {
  version: string;
  generated_at: string;
  note: string;
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

/** 实现了某能力的模型 —— 点一个能力节点时高亮的就是这批（= 「这个能力去哪用」） */
export const modelsWith = (capId: string) => atlas.models.filter((m) => isYes(m.id, capId)).map((m) => m.id);

/**
 * 两个模型的能力对比。§59.1 的红利：选中两个模型就是 Compare，
 * **不需要单独做一个 Compare 页面**。
 */
export function compare(a: string, b: string) {
  const both: string[] = [];
  const onlyA: string[] = [];
  const onlyB: string[] = [];
  for (const c of atlas.capabilities) {
    const x = isYes(a, c.id);
    const y = isYes(b, c.id);
    if (x && y) both.push(c.id);
    else if (x) onlyA.push(c.id);
    else if (y) onlyB.push(c.id);
  }
  return { both, onlyA, onlyB };
}

export function tally() {
  let yes = 0;
  let no = 0;
  let unknown = 0;
  for (const m of atlas.models)
    for (const c of atlas.capabilities) {
      const s = cell(m.id, c.id).state;
      if (s === "yes") yes += 1;
      else if (s === "no") no += 1;
      else unknown += 1;
    }
  return { yes, no, unknown, total: atlas.models.length * atlas.capabilities.length };
}

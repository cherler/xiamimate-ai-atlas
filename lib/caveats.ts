import { atlas, label, type Model } from "./atlas";

/**
 * 「能力对了 ≠ 你用得上」—— **这个产品最值钱、别处最难拼的一类事实。**
 *
 * 它值钱有两个原因：**反直觉**，而且**能防止真金白银的损失**。
 * 一个人查完能力表以为可以了，下单才发现平台上架的是旧版本、
 * 或者上游已经公告停服、或者他在大陆根本连不上。
 *
 * ## 全部算出来，一条都不手写
 *
 * 手写的清单必然过期：数据一改，清单还停在旧事实上。
 * 这里的每一条都是从 `availability` / `models` / `pricing` 现算的 ——
 * **数据变了，清单跟着变；某天不再成立，它就自己消失。**
 */
export type Caveat = {
  kind: "stale-version" | "upstream-gone" | "coming-soon" | "price-varies" | "blocked" | "discount-trap";
  /** 一句话说清楚坑在哪。 */
  what: string;
  /** 具体是哪个模型/平台，让读者能点过去。 */
  m?: string;
  p?: string;
  src?: string;
  quote?: string;
};

const pf = (id: string) => atlas.platforms.find((x) => x.id === id)?.name ?? id;
const md = (id: string) => atlas.models.find((x) => x.id === id);
const nm = (id: string) => { const m = md(id); return m ? label(m) : id; };

export function caveats(): Caveat[] {
  const out: Caveat[] = [];

  // ① 上架的不是当前主力版本 —— 能力表说「支持」，你买到的却是上一代
  for (const v of atlas.availability.filter((x) => x.match === "older"))
    out.push({
      kind: "stale-version", m: v.m, p: v.p, src: v.src, quote: v.quote,
      what: `${pf(v.p)} 上架的是「${v.listed}」，不是当前的 ${nm(v.m)}`,
    });

  // ② 上游已经停服，平台还在卖 —— 这一条最能造成实际损失
  for (const v of atlas.availability) {
    const m = md(v.m);
    if (m?.status === "discontinued" && v.status !== "gone")
      out.push({
        kind: "upstream-gone", m: v.m, p: v.p, src: v.src, quote: v.quote,
        what: `${nm(v.m)} 上游已公告停服，${pf(v.p)} 还挂着${m.status_note ? `（${m.status_note}）` : ""}`,
      });
  }

  // ③ 标着 coming soon，还不能用
  for (const v of atlas.availability.filter((x) => x.status === "coming-soon"))
    out.push({
      kind: "coming-soon", m: v.m, p: v.p, src: v.src, quote: v.quote,
      what: `${pf(v.p)} 的 ${nm(v.m)} 标着 coming soon，现在还调不了`,
    });

  // ④ 同一个模型，不同平台不是一个价 —— 不指定平台，「多少钱」就没有答案
  const byModel = new Map<string, typeof atlas.pricing>();
  for (const q of atlas.pricing.filter((x) => x.unit === "per-second"))
    byModel.set(q.m, [...(byModel.get(q.m) ?? []), q]);
  for (const [m, qs] of byModel)
    if (qs.length > 1)
      out.push({
        kind: "price-varies", m,
        what: `${nm(m)} 在 ${qs.map((q) => pf(q.p)).join(" / ")} 上不是一个价`,
        src: qs[0].src, quote: qs.map((q) => `${pf(q.p)}：${q.tiers?.[0]?.label} ${q.currency === "CNY" ? "¥" : "$"}${q.tiers?.[0]?.v}/秒`).join("；"),
      });

  // ⑤ 大陆直连不通 —— 对国内读者，这一条排在能力之前
  for (const m of atlas.models.filter((x) => x.reach_cn === "blocked" && (x.tier ?? "core") === "core"))
    out.push({
      kind: "blocked", m: m.id,
      what: `${label(m)} 的官方站在大陆不走代理连不上`,
      quote: m.reach_note,
    });

  // ⑥ 折扣陷阱：有折扣，但不覆盖它自己的主力
  for (const d of atlas.discount)
    if (/不支持|暂不/.test(d.off + d.rule))
      out.push({
        kind: "discount-trap", m: d.m, p: d.p, src: d.src, quote: d.quote,
        what: `${pf(d.p)} 的优惠不覆盖 ${nm(d.m)}`,
      });

  return out;
}

export const CAVEAT_ZH: Record<Caveat["kind"], string> = {
  "stale-version": "上架的不是当前版本",
  "upstream-gone": "上游停服了，平台还在卖",
  "coming-soon": "标着有，其实还不能用",
  "price-varies": "同一个模型，各平台不同价",
  blocked: "大陆直连不通",
  "discount-trap": "优惠不覆盖主力型号",
};

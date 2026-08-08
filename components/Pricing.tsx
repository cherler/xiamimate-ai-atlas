import { atlas, label, orgOf } from "@/lib/atlas";
import Link from "next/link";
import { Rich } from "./Fact";

/**
 * 价格（任务 G5）。**只取厂商官方价格页，Artificial Analysis 只做交叉校验。**
 *
 * AA 量的是质量与速度，价格是它顺带记的，而且它没有公开条款（terms 页 404）——
 * 拿别人的顺带产物当自己的一等数据，是这个项目最不该做的事。
 *
 * ## 这一栏最重要的结论是「价格根本没法比」
 *
 * 七家、七种计价方式。做这一栏之前我以为难点是把价抓全，
 * 抓完才发现难点是**它们压根不在同一个刻度上**：
 *
 *   Veo / Vidu   按秒标美元
 *   Kling / 万相  按秒标人民币
 *   海螺          记「视频点数」，点数换钱要看你买的哪个包
 *   Runway       只卖订阅，不卖秒
 *   Seedance     视频价放在飞书多维表里，文档站上没有
 *
 * **把它们并成一列「每秒多少钱」，那一列一定是编的。**
 * 所以这里不做那一列 —— 分单位摆出来，让读者自己看见这件事。
 *
 * 人民币和美元也**不换算**：汇率是我们加的假设，不是厂商说的。
 */
const UNIT = {
  "per-second": { zh: "按秒计价", ord: 0 },
  points: { zh: "按点数扣减", ord: 1 },
  credits: { zh: "按积分扣减", ord: 2 },
  subscription: { zh: "只卖订阅", ord: 3 },
  unavailable: { zh: "官方页上查不到", ord: 4 },
} as const;

const SYM: Record<string, string> = { USD: "$", CNY: "¥" };

export default function Pricing() {
  const rows = [...atlas.pricing].sort(
    (a, b) => UNIT[a.unit].ord - UNIT[b.unit].ord || (a.m < b.m ? -1 : 1),
  );
  const cmp = rows.filter((r) => r.unit === "per-second");
  // 同一个模型出现在多个平台 —— 那正是这一栏要说的事
  const multi = new Set(rows.filter((r, _, all) => all.filter((x) => x.m === r.m).length > 1).map((r) => r.m));

  return (
    <section>
      <h2 className="text-[22px] font-semibold mb-1">多少钱一秒</h2>
      <p className="text-muted text-[14px] mb-4 max-w-[880px] leading-relaxed">
        全部取自<b className="text-ink">厂商自己的价格页</b>，每条带原文。
        第三方评测站也记价格，但那是它顺带做的事 —— 这里只做交叉校验，不当来源。
      </p>

      {/* 和透明度那一栏一样：先把最要紧的那句话摆在前面 */}
      <div className="border border-rule rounded-lg bg-card p-4 mb-4 max-w-[880px]">
        <p className="text-[14px] leading-relaxed">
          <b className="text-ink">
            「多少钱一秒」这个问题，不指定平台就没有答案。
          </b>
          <br />
          同一个万相，<b className="text-ink">百炼上 720P 是 ¥0.6/秒，Replicate 上 720P 是 $0.25/秒</b>
          {" "}—— 而且 Replicate 卖的还是 2.1，不是当前的 3.0。所以这里每一条都写清楚是<b className="text-ink">哪个平台</b>的价。
          <br />
          <br />
          <b className="text-ink">第二件事：它们根本不在同一个刻度上。</b>
          <br />
          {/* 数的是**条**不是家 —— 同一个模型在两个平台就是两条。写成「家」会把读者数糊涂。 */}
          {rows.length} 条价格记录、{new Set(rows.map((r) => r.m)).size} 个模型，用了{" "}
          {new Set(rows.map((r) => r.unit)).size} 种计价方式。
          <b className="text-ink">
            能横着比的只有按秒计价的那 {cmp.length} 条 —— 而且人民币和美元我们不换算
          </b>
          ，汇率是我们加的假设，不是厂商说的。
        </p>
      </div>

      <div className="flex flex-col gap-2 max-w-[880px]">
        {/*
          `unavailable` 的行只占一行。它讲的是**我们没拿到**，不是价格本身 ——
          详细原因归 /method 的「我们自己没做到的」。
          把四条「查不到」的长说明摊在价格表里，会把这一页撑成一篇检讨。
        */}
        {rows.filter((q) => q.unit === "unavailable").length > 0 && (
          <p className="text-muted text-[13px]">
            官方页上查不到价格的：
            {rows.filter((q) => q.unit === "unavailable").map((q, i) => (
              <span key={q.m}>
                {i > 0 && "、"}
                {label(atlas.models.find((x) => x.id === q.m)!)}
              </span>
            ))}
            <Link href="/method#gaps" className="underline ml-2 hover:text-ink">为什么 →</Link>
          </p>
        )}
        {rows.filter((q) => q.unit !== "unavailable").map((q) => {
          const m = atlas.models.find((x) => x.id === q.m);
          const src = atlas.sources[q.src];
          if (!m) return null;
          return (
            <div key={`${q.p}-${q.m}`} className="border border-rule rounded-lg bg-card p-3 flex flex-col gap-2">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="font-semibold text-[16px]">{label(m)}</span>
                {/* 平台名和模型名一样醒目 —— 不指定平台，「多少钱」就没有答案 */}
                <span className="text-[13px] text-yes">
                  在 {atlas.platforms.find((x) => x.id === q.p)?.name ?? q.p}
                </span>
                {multi.has(q.m) && (
                  <span className="text-unknown text-[12px]">· 这个模型在多个平台价不一样，往下看</span>
                )}
                <span className="text-muted text-[12px]">{orgOf(m)?.zh}</span>
                <span className="text-[12px] px-1.5 py-0.5 rounded border border-rule text-muted">
                  {UNIT[q.unit].zh}
                </span>
                {q.listed_as && q.listed_as !== label(m) && (
                  <span className="text-unknown text-[12px]">价格页上写的是「{q.listed_as}」</span>
                )}
              </div>

              {/* 档位必须全摆出来：同一个模型 720P 和 4K 能差 5 倍，记成一个数字就是错的 */}
              {!!q.tiers?.length && (
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-[14px]">
                  {q.tiers.map((t) => (
                    <span key={t.label}>
                      <span className="text-muted">{t.label}</span>
                      <b className="ml-1.5 tabular-nums">
                        {q.currency ? `${SYM[q.currency] ?? ""}${t.v}` : t.v}
                        {q.unit === "per-second" && " /秒"}
                        {q.unit === "points" && " 点"}
                      </b>
                    </span>
                  ))}
                </div>
              )}

              {q.note && <Rich text={q.note} className="text-[13px] leading-relaxed" />}
              <p className="text-muted text-[12px] leading-relaxed">
                原文：「{q.quote}」
                <a href={src?.url} target="_blank" rel="noreferrer" className="underline ml-2 hover:text-yes">
                  {src?.name}
                </a>
                <span className="ml-2">· 核验于 {q.as_of}</span>
              </p>
            </div>
          );
        })}
      </div>


    </section>
  );
}

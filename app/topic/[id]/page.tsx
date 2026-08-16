import type { Metadata } from "next";
import { Rich } from "@/components/Fact";
import { atlas, forkCoverage, routeResource } from "@/lib/atlas";
import { capHref } from "@/lib/slug";
import BackLink from "@/components/BackLink";
import ReportIssue from "@/components/ReportIssue";

/**
 * 专项页：横着切的上手评估。
 *
 * ## 这一页为什么长这样
 *
 * 第一版是「从零开始的六步」，负责人一句话否掉：
 * **「就像『把大象关进冰箱需要几步』一样，正确却是废话。」**
 *
 * 他是对的，而且根因不在文笔：**教程的骨架是顺序，而顺序人人都知道**，
 * 所以再怎么写也只能写成那样。改成岔口之后废话就没地方待了 ——
 * **岔口的骨架是取舍，取舍必须有依据**，依据就是我们攒了三个月的真值表。
 *
 * 「上手指南」还留着，但**折叠成一行，并且明说它不是重点**：
 * 想抄一条路直接走的人不该被拦住，但这一页真正值钱的是下面那五张表。
 *
 * ## 覆盖度是现算的
 *
 * 每条路后面的「几家支持 / 几家明确不支持 / 几家没说」由 `forkCoverage()`
 * 从 `support[]` 现算，**不落库** —— 落库就会和真值表漂开，
 * 而这一页卖的就是「和真值表对得上」。
 *
 * ## 判断栏必须看得出是判断
 *
 * `good` / `bad` 是**我们的判断**，不是厂商说过的话 —— 全站第一次开这个口子。
 * 所以它们和「覆盖度」那一列在视觉上分开，并且整页挂着可报错入口。
 * 事实那一列点得进能力页去核，判断那两列只能靠读者自己判断。
 */
export function generateStaticParams() {
  return atlas.topics.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const t = atlas.topics.find((x) => x.id === id);
  return t ? { title: t.zh, description: t.intro.replace(/\*\*/g, "").slice(0, 110) } : {};
}

/** 覆盖度条：和真值表同一套语言（实心=支持、红=明确不支持、斜纹=官方没说）。 */
function Coverage({ cap }: { cap: string }) {
  const c = forkCoverage(cap);
  const pct = (n: number) => `${(n / c.total) * 100}%`;
  return (
    <div>
      <div className="flex h-[7px] rounded-[3px] overflow-hidden border border-rule mb-1">
        <i style={{ width: pct(c.yes) }} className="bg-yes" />
        <i style={{ width: pct(c.no) }} className="bg-no" />
        <i style={{ width: pct(c.unknown) }} className="hatch" />
      </div>
      <div className="text-[11.5px] text-muted leading-snug tnum">
        <b className="text-ink">{c.yes}/{c.total} 家支持</b>
        {c.no > 0 && <> · <b className="text-no">{c.no} 家明确不支持</b></>}
        {" "}· {c.unknown} 家没说
      </div>
    </div>
  );
}

export default async function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = atlas.topics.find((x) => x.id === id);
  if (!t) return null;

  return (
    <main className="max-w-[1140px] mx-auto px-5 py-8">
      <BackLink />

      <p className="text-[11.5px] tracking-[0.18em] text-yes-ink font-bold mb-2">专项 · 评估</p>
      <h1 className="text-[29px] leading-tight tracking-tight mb-2.5">{t.zh}</h1>
      <p className="text-muted max-w-[60ch] leading-relaxed mb-5"><Rich text={t.intro} /></p>

      {/* 上手指南折叠起来，并且明说不是重点 —— 见文件头的说明 */}
      <details className="border border-rule rounded-lg bg-card px-3.5 py-2.5 mb-8">
        <summary className="cursor-pointer text-[13px] text-muted list-none">
          ▸ <b className="text-ink">只想要一条能走的路？</b>点开，一句话说完 —— 但这不是这一页的重点
        </summary>
        <p className="mt-2 text-[13px] text-muted leading-relaxed"><Rich text={t.guide} /></p>
      </details>

      {t.forks.map((f, i) => (
        <section key={f.zh} className="mb-9">
          <h2 className="text-[17px] tracking-tight mb-1">
            <span className="text-hatch font-bold mr-2 tnum">{String(i + 1).padStart(2, "0")}</span>
            {f.zh}
          </h2>
          <p className="text-muted text-[13px] max-w-[74ch] mb-3"><Rich text={f.why} /></p>

          <div className="overflow-x-auto border border-rule rounded-lg">
            <table className="w-full text-[13px] min-w-[820px]">
              <thead>
                <tr className="bg-card">
                  {["路线", "好在哪", "坏在哪", "官方说法覆盖度"].map((h) => (
                    <th key={h} className="text-left px-3 py-2.5 text-[11.5px] tracking-wider text-muted font-bold whitespace-nowrap border-b border-rule">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {f.routes.map((r) => {
                  const res = routeResource(r);
                  return (
                    <tr key={r.zh} className="border-b border-rule last:border-0 align-top">
                      <td className="px-3 py-2.5 min-w-[140px] font-semibold">
                        {res?.url ? (
                          <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-yes-ink hover:underline">{r.zh}</a>
                        ) : r.zh}
                        {r.sub && <span className="block font-normal text-[12px] text-muted mt-0.5">{r.sub}</span>}
                        {res?.license && <span className="block font-normal text-[11.5px] text-muted mt-1">许可证：{res.license}</span>}
                      </td>
                      <td className="px-3 py-2.5 text-[12.5px] text-muted min-w-[190px] leading-relaxed"><Rich text={r.good} /></td>
                      <td className="px-3 py-2.5 text-[12.5px] text-muted min-w-[190px] leading-relaxed"><Rich text={r.bad} /></td>
                      <td className="px-3 py-2.5 min-w-[160px]">
                        {r.cap ? (
                          <a href={capHref(r.cap)} className="block hover:opacity-80"><Coverage cap={r.cap} /></a>
                        ) : (
                          <span className="text-[12px] text-muted leading-snug block">
                            <b className="text-ink">不是一项能力</b><br />真值表里没有这一格
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <div className="border-t border-rule pt-4 mt-2 text-[12.5px] text-muted leading-relaxed max-w-[76ch]">
        <p className="mb-2">
          <b className="text-ink">「覆盖度」是事实，「好在哪 / 坏在哪」是判断。</b>
          前者从真值表现算，点进去能看到每一格的官方原话与核验日期；
          后者是<b className="text-ink">我们的判断</b> —— 全站只有这一页有判断栏，
          所以它单独标出来，也照样可以报错。
        </p>
        <ReportIssue />
      </div>
    </main>
  );
}

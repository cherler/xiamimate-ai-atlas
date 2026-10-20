"use client";

import { useState, type ReactNode } from "react";

/**
 * 公共页共用方向筛选，计数随筛选变化；再点当前方向可取消。
 * 工具站默认按方向分组。时间线关闭二次分组，保留传入的日期顺序，
 * 并可隐藏筛选后没有记录的日期。卡片由服务端渲染，不将 atlas 打包到客户端。
 */
export type DomainItem = { domain: string; node: ReactNode };
export type Section = { key: string; title: ReactNode; intro?: ReactNode; items: DomainItem[] };

export default function DomainFilter({
  domains, sections, label = "按方向筛选", groupByDomain = true, hideEmptySections = false,
}: {
  domains: { id: string; name: string }[];
  sections: Section[];
  /** Timelines preserve the caller's chronological order instead of regrouping by direction. */
  groupByDomain?: boolean;
  hideEmptySections?: boolean;
  /** 屏幕阅读器听到的名字。**别写死** —— 这个组件同时给 /changes 与 /toolkit 用，
   *  写死成「按方向筛选变化」，在 /toolkit 上就是错的。 */
  label?: string;
}) {
  const [on, setOn] = useState<string | null>(null);
  const all = sections.flatMap((s) => s.items);
  const countOf = (id: string) => all.filter((x) => x.domain === id).length;
  const visibleSections = sections
    .map((s) => ({ ...s, shown: on ? s.items.filter((x) => x.domain === on) : s.items }))
    .filter((s) => !hideEmptySections || s.shown.length > 0);

  const chip = (active: boolean, dead = false) =>
    `text-[12.5px] border px-2.5 py-1 transition-colors ${
      dead
        ? "border-rule/60 text-muted/45 cursor-not-allowed"
        : active
          ? "border-yes text-yes-ink bg-yes/8"
          : "border-rule text-muted hover:border-yes hover:text-ink"
    }`;

  return (
    <>
      <div className="flex flex-wrap gap-1.5" role="group" aria-label={label}>
        <button type="button" onClick={() => setOn(null)} aria-pressed={!on} className={chip(!on)}>
          全部 <b className={on ? "text-ink" : "text-yes-ink"}>{all.length}</b>
        </button>
        {domains.map((d) => {
          const n = countOf(d.id);
          return (
            <button
              key={d.id}
              type="button"
              disabled={n === 0}
              aria-pressed={on === d.id}
              onClick={() => setOn((v) => (v === d.id ? null : d.id))}
              className={chip(on === d.id, n === 0)}
            >
              {d.name} <b className={n === 0 ? "" : on === d.id ? "text-yes-ink" : "text-ink"}>{n}</b>
            </button>
          );
        })}
      </div>

      {visibleSections.map((s, si) => {
        const { shown } = s;
        return (
          <section key={s.key} className={si === 0 ? "pt-1" : "border-t-[2.5px] border-ink pt-4"}>
            <h2 className="text-[23px] font-bold leading-tight flex items-baseline gap-3">
              {s.title}
              <span className="text-muted text-[14px] font-normal tabular-nums">{shown.length} 条</span>
            </h2>
            {s.intro}
            {shown.length ? (
              // 工具站按方向分组；时间线和单方向筛选保持原顺序。
              <div className="mt-2 flex flex-col gap-5">
                {on || !groupByDomain
                  ? shown.map((x, i) => <div key={i} className="contents">{x.node}</div>)
                  : domains
                      .map((d) => ({ d, list: shown.filter((x) => x.domain === d.id) }))
                      .filter((g) => g.list.length)
                      .map((g) => (
                        <div key={g.d.id}>
                          <p className="text-[13px] text-muted flex items-baseline gap-2 border-b border-rule pb-1.5">
                            <b className="text-ink text-[14px]">{g.d.name}</b>
                            <span className="tabular-nums">{g.list.length} 条</span>
                          </p>
                          {g.list.map((x, i) => <div key={i} className="contents">{x.node}</div>)}
                        </div>
                      ))}
              </div>
            ) : (
              /* **空状态要说清是筛掉的，不是没有。** 否则读者会以为这一节坏了。 */
              <p className="mt-3 text-[13.5px] text-muted">
                这一节里没有该方向的记录 —— 点上面的「全部」看其余的。
              </p>
            )}
          </section>
        );
      })}
    </>
  );
}

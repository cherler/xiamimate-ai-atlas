import { sitePath } from "@/site.config.mjs";
import type { Metadata } from "next";
import Link from "next/link";
import { Rich } from "@/components/Fact";
import { atlas, label } from "@/lib/atlas";
import { modelHref } from "@/lib/slug";
import changes from "@/data/changes.json";
import BackLink from "@/components/BackLink";
import DomainFilter from "@/components/DomainFilter";

/**
 * One chronological timeline for vendor updates and our corrections.
 * Direction and event type are labels/filters, never a second sorting layer.
 */
type Ev = {
  id: string; date: string; side: "world" | "ours"; kind: string;
  subject: string; before: string; after: string; why: string;
  impact: string[]; src: string | null; models: string[]; domain?: string;
};
const KIND: Record<string, string> = {
  version: "版本更迭", status: "生命周期", capability: "能力面",
  availability: "去哪用", scope: "收录范围",
};

export const metadata: Metadata = {
  title: "最近有什么变化 —— 各方向的版本、停服与能力变动",
  description: "不只列发生了什么，还说明它意味着什么。同时公开我们自己记错又改正的地方。",
};

export default function ChangesPage() {
  const evs = (changes.events as Ev[]).slice().sort((a, b) => b.date.localeCompare(a.date));
  const dates = [...new Set(evs.map((e) => e.date))];
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Shanghai" });
  const latestDate = dates.find((date) => date <= today);
  const domainNames = new Map(atlas.domains.map((d) => [d.id, d.name]));

  const Card = ({ e }: { e: Ev }) => (
    <article id={e.id} data-change-date={e.date} className="border-t border-rule py-4 scroll-mt-20">
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="text-[18px] font-semibold">{e.subject}</h3>
          <span className="text-muted text-[12px]">{domainNames.get(e.domain ?? "video")}</span>
          <span className="text-yes-ink text-[12px]">{e.side === "world" ? "厂商更新" : "本站补核与更正"}</span>
          <span className="px-1.5 py-px bg-rule/60 text-muted text-[11px]">{KIND[e.kind] ?? e.kind}</span>
        </div>
        {/* 之前 → 之后：用一条箭头把对比串起来，比两个并列 div 更像「变化」 */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-x-4 gap-y-1 items-start text-[14px] bg-paper/60 border border-rule p-3">
          <div>
            <span className="text-muted text-[11px] block mb-0.5">之前</span>
            <Rich text={e.before} className="text-muted leading-relaxed block" />
          </div>
          <span className="hidden md:block text-muted text-[18px] self-center">→</span>
          <div>
            <span className="text-yes-ink text-[11px] block mb-0.5">之后</span>
            <Rich text={e.after} className="text-ink leading-relaxed block" />
          </div>
        </div>
        <div className="text-[15px]">
          <span className="text-no text-[12px] font-medium mr-1.5">为什么重要</span>
          <Rich text={e.why} className="leading-relaxed" />
        </div>
        <p className="text-[13px] flex flex-wrap gap-x-3 gap-y-1 items-center text-muted">
          {e.models.map((id) => {
            const m = atlas.models.find((x) => x.id === id);
            return m ? (
              <Link key={id} href={modelHref(m)} className="underline hover:text-ink">{label(m)}</Link>
            ) : null;
          })}
          {e.src && atlas.sources[e.src] ? (
            <a href={atlas.sources[e.src].url} target="_blank" rel="noreferrer" className="underline hover:text-ink">
              来源：{atlas.sources[e.src].name}
            </a>
          ) : (
            <span className="italic">无外部来源 —— 这条是我们自己的更正</span>
          )}
        </p>
      </div>
    </article>
  );

  return (
    <main className="max-w-[980px] mx-auto px-5 sm:px-8 pt-5 pb-10 flex flex-col gap-8">
      <BackLink />

      <header className="flex flex-col gap-3 border-b-[2.5px] border-ink pb-4">
        <h1 className="text-[38px] leading-tight font-bold tracking-[-.01em]">最近有什么变化</h1>
        <p className="text-muted text-[15px] leading-relaxed max-w-[880px]">
          <b className="text-ink">按日期从新到旧排列。</b>
          厂商更新与本站补核、更正一起展示；未来生效事项会标注为计划。
        </p>
        <p className="text-muted text-[13px]">
          <a href={sitePath("/changes.xml")} className="underline hover:text-ink">用 RSS 订阅这一页 →</a>
          <span className="ml-2">阅读器里可以按模型过滤</span>
        </p>
      </header>

      <DomainFilter
        label="按方向筛选变化"
        domains={atlas.domains.map((d) => ({ id: d.id, name: d.name }))}
        groupByDomain={false}
        hideEmptySections
        sections={dates.map((date) => ({
          key: date,
          title: (
            <>
              <time dateTime={date} className="tabular-nums">{date}</time>
              {date > today
                ? <span className="text-[12px] font-medium text-unknown">计划生效</span>
                : date === latestDate && <span className="text-[12px] font-medium text-yes-ink">最近更新</span>}
            </>
          ),
          items: evs.filter((e) => e.date === date).map((e) => ({
            domain: e.domain ?? "video",
            node: <Card key={e.id} e={e} />,
          })),
        }))}
      />

      <footer className="border-t border-rule pt-5 text-[13px] text-muted leading-relaxed">
        数据版本 {atlas.version} · 数据截至 {atlas.generated_at} ·
        <b className="text-unknown"> 全部为机器录入</b>
      </footer>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Rich } from "@/components/Fact";
import { atlas, label } from "@/lib/atlas";
import { modelHref } from "@/lib/slug";
import changes from "@/data/changes.json";

/**
 * What Changed（方案 §15）。
 *
 * §15 的要求是 **Change + So What** —— 不只说发生了什么，还要说明它意味着什么。
 * 一个只列「某某发布了某某」的页面，和厂商的 changelog 没有区别，
 * 而厂商的 changelog 谁都能看。
 *
 * 这里比 §15 多做一件事：**把「我们记错了」和「世界变了」并排放。**
 * 一个只报别人变化、从不报自己出错的变更页，是营销稿不是变更记录。
 * 而这个产品唯一的本钱就是可信 —— 承认错误比列举别人的新版本更能换来它。
 */
type Ev = {
  id: string; date: string; side: "world" | "ours"; kind: string;
  subject: string; before: string; after: string; why: string;
  impact: string[]; src: string | null; models: string[];
};
const KIND: Record<string, string> = {
  version: "版本更迭", status: "生命周期", capability: "能力面",
  availability: "去哪用", scope: "收录范围",
};

export const metadata: Metadata = {
  title: "变了什么 —— AI 视频模型的版本、停服与能力变化",
  description: "不只列发生了什么，还说明它意味着什么。同时公开我们自己记错又改正的地方。",
};

export default function ChangesPage() {
  const evs = (changes.events as Ev[]).slice().sort((a, b) => b.date.localeCompare(a.date));
  const world = evs.filter((e) => e.side === "world");
  const ours = evs.filter((e) => e.side === "ours");

  const Card = ({ e }: { e: Ev }) => (
    <article className="border-t border-rule pt-4 pb-2 flex flex-col gap-2">
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="text-muted text-[13px] tabular-nums">{e.date}</span>
        <span className="px-1.5 py-px rounded bg-rule/60 text-muted text-[11px]">{KIND[e.kind] ?? e.kind}</span>
        <h3 className="text-[19px] font-semibold">{e.subject}</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-x-6 gap-y-1 text-[14px]">
        <div>
          <span className="text-muted text-[12px] block">之前</span>
          <Rich text={e.before} className="text-muted leading-relaxed block" />
        </div>
        <div>
          <span className="text-muted text-[12px] block">之后</span>
          <Rich text={e.after} className="text-ink leading-relaxed block" />
        </div>
      </div>
      <div className="text-[15px]">
        <span className="text-muted text-[12px] block">为什么重要</span>
        <Rich text={e.why} className="leading-relaxed block" />
      </div>
      {e.impact.length > 0 && (
        <ul className="text-muted text-[13px] list-disc pl-5">
          {e.impact.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      )}
      <p className="text-[13px] flex flex-wrap gap-x-3 gap-y-1 items-center">
        {e.models.map((id) => {
          const m = atlas.models.find((x) => x.id === id);
          return m ? (
            <Link key={id} href={modelHref(m)} className="text-muted underline hover:text-ink">
              {label(m)}
            </Link>
          ) : null;
        })}
        {e.src && atlas.sources[e.src] ? (
          <a
            href={atlas.sources[e.src].url}
            target="_blank"
            rel="noreferrer"
            className="text-muted underline hover:text-ink"
          >
            来源：{atlas.sources[e.src].name}
          </a>
        ) : (
          <span className="text-muted italic">无外部来源 —— 这条是我们自己的更正</span>
        )}
      </p>
    </article>
  );

  return (
    <main className="max-w-[980px] mx-auto px-8 py-10 flex flex-col gap-8">
      <nav className="text-[13px] text-muted">
        <Link href="/" className="underline hover:text-ink">
          AI 视频能力地图
        </Link>
        <span className="mx-2">/</span>
        <span>变了什么</span>
      </nav>

      <header className="flex flex-col gap-3">
        <h1 className="text-[40px] leading-tight font-semibold">变了什么</h1>
        <p className="text-muted text-[16px] leading-relaxed max-w-[880px]">
          <b className="text-ink">不只列发生了什么，还说明它意味着什么</b> ——
          只列「某某发布了某某」的话，和厂商自己的 changelog 没有区别，而那个谁都能看。
        </p>
      </header>

      <section>
        <h2 className="text-[22px] font-semibold mb-1">世界变了</h2>
        <p className="text-muted text-[14px] mb-2">{world.length} 条</p>
        {world.map((e) => (
          <Card key={e.id} e={e} />
        ))}
      </section>

      <section>
        <h2 className="text-[22px] font-semibold mb-1">我们记错了，又改了</h2>
        <p className="text-muted text-[14px] mb-2 max-w-[880px] leading-relaxed">
          {ours.length} 条。
          <b className="text-ink">一个只报别人变化、从不报自己出错的变更页，是营销稿不是变更记录。</b>
          这个产品唯一的本钱是可信，而承认错误比列举别人的新版本更能换来它。
        </p>
        {ours.map((e) => (
          <Card key={e.id} e={e} />
        ))}
      </section>

      <footer className="border-t border-rule pt-5 text-[13px] text-muted leading-relaxed">
        数据版本 {atlas.version} · 核验于 {atlas.generated_at} ·
        <b className="text-unknown"> 全部为机器录入，未经人工核验</b>
      </footer>
    </main>
  );
}

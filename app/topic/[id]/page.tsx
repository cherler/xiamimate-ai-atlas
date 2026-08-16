import type { Metadata } from "next";
import { Rich } from "@/components/Fact";
import { atlas, forkCoverage, topicAppName, type Decision, type TopicProject } from "@/lib/atlas";
import { capHref } from "@/lib/slug";
import BackLink from "@/components/BackLink";
import ReportIssue from "@/components/ReportIssue";

/**
 * 专项页：图优先。
 *
 * 一根公共骨架（九个决定）+ 五篇。片型篇是入口；自建 / 平台 / 整包是一条
 * **自持程度由高到低**的轴；作品篇是证据层，不排在轴上。
 *
 * ## 三条来自负责人的硬约束
 *
 * 1. **教程的骨架是顺序，而顺序人人都知道。** 第一版写成「从零六步」被否，
 *    原话是「就像『把大象关进冰箱需要几步』一样，正确却是废话」。
 * 2. **解释性句子不写。**「我们为什么这么做」是给同事看的，不是给读者的 ——
 *    所以那些话都在这个注释里，不在页面上。
 * 3. **图说话。** 文字压到标签与数字，判断压到三条以内。
 *
 * ## 事实与判断必须分得开
 *
 * 覆盖度、星数、许可证、门槛来自仓库原文，点得进能力页去核；
 * `good` / `bad` / `unfit` 与片型矩阵的权重是**判断** —— 全站只有这一页有判断栏，
 * 所以换一种竖线颜色标出来，并挂可报错入口。
 */
export function generateStaticParams() {
  return atlas.topics.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const t = atlas.topics.find((x) => x.id === id);
  return t ? { title: t.zh, description: t.intro.replace(/\*\*/g, "").slice(0, 110) } : {};
}

const OWNER = {
  user: { zh: "用户", cls: "text-yes-ink border-yes" },
  partial: { zh: "部分", cls: "text-chip-warm-ink border-chip-warm-ink" },
  platform: { zh: "平台", cls: "text-no border-no" },
} as const;

/** 覆盖度条：与真值表同一套语言 —— 实心支持 · 红明确不支持 · 斜纹官方没说。 */
function Cov({ cap }: { cap: string }) {
  const c = forkCoverage(cap);
  const w = (n: number) => `${(n / c.total) * 100}%`;
  return (
    <a href={capHref(cap)} className="block group" title={`${c.yes} 支持 / ${c.no} 明确不支持 / ${c.unknown} 没说`}>
      <span className="flex h-[11px] border border-rule group-hover:border-yes">
        <i style={{ width: w(c.yes) }} className="bg-yes" />
        <i style={{ width: w(c.no) }} className="bg-no" />
        <i style={{ width: w(c.unknown) }} className="hatch" />
      </span>
      <span className="text-[10.5px] text-muted tnum">
        {c.yes}/{c.total}
        {c.no > 0 && <> · <b className="text-no">{c.no} 拒绝</b></>}
      </span>
    </a>
  );
}

function Skeleton({ decisions }: { decisions: Decision[] }) {
  return (
    <div className="border border-rule rounded-lg overflow-hidden">
      {decisions.map((d, i) => (
        <div key={d.id}
          className={`grid grid-cols-[minmax(92px,1.1fr)_54px_minmax(92px,1.3fr)_minmax(80px,1fr)] gap-3 items-center px-3 py-2 text-[12.5px] ${
            i ? "border-t border-rule" : ""}`}>
          <span className={d.id === "camera" || d.id === "repro" ? "font-semibold" : ""}>{d.zh}</span>
          <span className={`text-[10.5px] text-center border rounded px-1.5 py-px ${OWNER[d.owner].cls}`}>
            {OWNER[d.owner].zh}
          </span>
          <span className="text-muted text-[11.5px] leading-snug">{d.handle}</span>
          {d.cap
            ? <Cov cap={d.cap} />
            : <span className="text-[10.5px] text-muted border border-rule px-1.5 hatch">—</span>}
        </div>
      ))}
    </div>
  );
}

/** 片型 × 决定：格子越实＝越关键。片型直接用视频卷的应用层，不另立一套分类。 */
function Matrix({ m, decisions }: { m: Record<string, Record<string, number>>; decisions: Decision[] }) {
  const cols = decisions.filter((d) => d.id !== "topic");
  const shade = ["opacity-0", "opacity-25", "opacity-60", "opacity-100"];
  const label = ["不适用", "次要", "重要", "命门"];
  return (
    <div className="overflow-x-auto border border-rule rounded-lg">
      <table className="w-full text-[12px] min-w-[620px]">
        <thead>
          <tr className="bg-card">
            <th className="text-left px-3 py-2 font-bold text-muted text-[11px]">片型</th>
            {cols.map((d) => (
              <th key={d.id} className="px-1.5 py-2 font-bold text-muted text-[11px] whitespace-nowrap">{d.zh}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(m).map(([app, row], i) => (
            <tr key={app} className={i ? "border-t border-rule" : ""}>
              <td className="px-3 py-1.5 whitespace-nowrap">{topicAppName(app)}</td>
              {cols.map((d) => {
                const v = row[d.id] ?? 0;
                return (
                  <td key={d.id} className="px-1.5 py-1.5" title={`${d.zh}：${label[v]}`}>
                    <span className={`block w-full h-[13px] rounded-sm bg-yes ${shade[v]}`} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const LIC = {
  permissive: "border-yes text-yes-ink",
  copyleft: "border-chip-warm-ink text-chip-warm-ink",
  noncommercial: "border-no text-no",
} as const;

function Project({ p, decisions }: { p: TopicProject; decisions: Decision[] }) {
  const dz = p.decisions.map((id) => decisions.find((d) => d.id === id)?.zh ?? id);
  return (
    <article className="border border-rule rounded-lg overflow-hidden">
      <header className="bg-card border-b border-rule px-3.5 py-2.5 flex items-baseline gap-2 flex-wrap">
        <h3 className="text-[15.5px] font-semibold">
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-yes-ink hover:underline">{p.zh}</a>
        </h3>
        <span className="text-[11px] text-muted tnum ml-auto">★ {(p.stars / 1000).toFixed(1)}k</span>
      </header>
      <div className="p-3.5 text-[12.5px]">
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          <span className={`text-[10.5px] border rounded-full px-2 ${LIC[p.license_class]}`}>{p.license}</span>
          {dz.map((z) => (
            <span key={z} className="text-[10.5px] border border-rule rounded-full px-2 text-muted">{z}</span>
          ))}
        </div>
        <p className="text-muted leading-relaxed mb-2">{p.scope}</p>
        <p className="text-[11.5px] text-muted border-l-2 border-rule pl-2.5 mb-2">
          <b className="text-ink">门槛　</b>{p.hw}
        </p>
        {p.arch && (
          <p className="text-[11.5px] text-muted border-l-2 border-rule pl-2.5 mb-2.5">
            <b className="text-ink">架构　</b>{p.arch}
          </p>
        )}
        <div className="grid sm:grid-cols-2 gap-2.5 border-l-2 border-chip-warm-ink pl-2.5">
          <ul className="text-[11.5px] text-muted list-disc pl-4 space-y-0.5">
            {p.good.map((g) => <li key={g}><Rich text={g} /></li>)}
          </ul>
          <ul className="text-[11.5px] text-muted list-disc pl-4 space-y-0.5">
            {p.bad.map((b) => <li key={b}><Rich text={b} /></li>)}
          </ul>
        </div>
        <p className="text-[11.5px] text-muted border-l-2 border-chip-warm-ink pl-2.5 mt-2">
          <b className="text-ink">不适用　</b>{p.unfit}
        </p>
        <p className="text-[10.5px] text-muted mt-2">{p.src} · 核验 {p.verified_at}</p>
      </div>
    </article>
  );
}

export default async function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = atlas.topics.find((x) => x.id === id);
  if (!t) return null;
  const axis = t.chapters.filter((c) => c.kind === "axis").sort((a, b) => (a.axis_pos ?? 0) - (b.axis_pos ?? 0));

  return (
    <main className="max-w-[1080px] mx-auto px-5 py-8">
      <BackLink />
      <p className="text-[11px] tracking-[0.18em] text-yes-ink font-bold mb-2">专项</p>
      <h1 className="text-[27px] leading-tight tracking-tight mb-2">{t.zh}</h1>
      <p className="text-muted max-w-[54ch] leading-relaxed mb-7 text-[13px]"><Rich text={t.intro} /></p>

      <h2 className="text-[11.5px] tracking-[0.15em] text-muted font-bold mb-3 pb-1.5 border-b border-rule">决定权分布</h2>
      <Skeleton decisions={t.decisions} />

      <h2 className="text-[11.5px] tracking-[0.15em] text-muted font-bold mt-9 mb-3 pb-1.5 border-b border-rule">自持程度</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {axis.map((c) => (
          <div key={c.id} className={`border rounded-lg px-3 py-2.5 ${c.state === "live" ? "border-yes bg-card" : "border-rule"}`}>
            <b className="text-[14px]">{c.zh}</b>
            <span className="block text-[11px] text-muted mt-1 leading-snug"><Rich text={c.intro} /></span>
            {c.state !== "live" && (
              <span className="inline-block mt-1.5 text-[10.5px] text-muted border border-rule rounded px-1.5">在建</span>
            )}
          </div>
        ))}
      </div>

      {t.chapters.filter((c) => c.state === "live").map((c) => (
        <section key={c.id} className="mt-9">
          <h2 className="text-[11.5px] tracking-[0.15em] text-muted font-bold mb-2 pb-1.5 border-b border-rule">{c.zh}</h2>
          <p className="text-[12.5px] text-muted max-w-[62ch] mb-3"><Rich text={c.intro} /></p>
          {c.matrix && (
            <>
              <Matrix m={c.matrix} decisions={t.decisions} />
              <p className="text-[11px] text-muted mt-1.5 border-l-2 border-chip-warm-ink pl-2.5">
                格子越实＝这个决定对该片型越关键（命门 / 重要 / 次要 / 不适用）。<b className="text-ink">这一栏是判断。</b>
              </p>
            </>
          )}
          {c.id === "selfhost" && (
            <div className="grid md:grid-cols-2 gap-3 mt-1">
              {t.projects.map((p) => <Project key={p.id} p={p} decisions={t.decisions} />)}
            </div>
          )}
        </section>
      ))}

      <div className="border-t border-rule pt-4 mt-9 text-[12px] text-muted max-w-[70ch]">
        <p className="mb-2">
          覆盖度、星数、许可证、门槛来自仓库原文，可点开核对；
          <b className="text-ink">优势 / 局限 / 不适用 / 片型权重是判断</b>，用另一种竖线标出。
        </p>
        <ReportIssue />
      </div>
    </main>
  );
}

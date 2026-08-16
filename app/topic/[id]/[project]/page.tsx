import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import Link from "next/link";
import { Rich } from "@/components/Fact";
import { atlas, forkCoverage, type TopicProject } from "@/lib/atlas";
import { capHref, topicProjectHref } from "@/lib/slug";
import ReportIssue from "@/components/ReportIssue";

/**
 * 项目页。**项目是主角，一个项目一页。**
 *
 * ## 为什么从卡片改成独立页
 *
 * 上一版把项目做成专项页里的折叠卡：许可证、显存、几条优劣、一张架构图。
 * 负责人：「开源项目的拆解跟我想象中不太一样。」
 *
 * 诊断下来是**我把重心做成了索引** —— 那张卡回答的是「这几个里选哪个」，
 * 而定下来的重心是「它是怎么工作的、凭什么能把控制权还给我、我能改哪里」。
 * 后者是一份要读十几分钟的东西，塞不进一张卡，也不该被片型筛掉。
 *
 * ## 三层，缺一层就写缺
 *
 * 读懂层（架构 / 数据流 / 关键机制）→ 动手层（装它过哪几关 · 改哪个文件 ·
 * 坑在代码哪一处）→ 判断层（优势 / 局限 / 不适用）。
 * 前两层每条都要能指回文档或源码，第三层是我们的判断、可报错。
 *
 * ## 项目之间靠专项结网
 *
 * 每页顶上写它管哪几个决定、底下给同管这些决定的其它项目 ——
 * **单独看是一份解析，连起来是一张网**。
 */
export function generateStaticParams() {
  return atlas.topics.flatMap((t) => t.projects.map((p) => ({ id: t.id, project: p.id })));
}

export async function generateMetadata(
  { params }: { params: Promise<{ id: string; project: string }> },
): Promise<Metadata> {
  const { id, project } = await params;
  const p = atlas.topics.find((x) => x.id === id)?.projects.find((x) => x.id === project);
  return p ? { title: `${p.zh}｜开源项目解析`, description: p.scope.slice(0, 110) } : {};
}

const AUT_W = { local: { zh: "可下载到本地", ok: true }, api: { zh: "只能调接口", ok: false }, na: { zh: "不涉及模型权重", ok: null } };
const AUT_S = { yes: { zh: "可填", ok: true }, partial: { zh: "部分路径可填", ok: null }, no: { zh: "不可填", ok: false }, na: { zh: "不涉及", ok: null } };
const AUT_C = { "1": { zh: "一处", ok: true }, few: { zh: "几处", ok: null }, many: { zh: "牵一发动全身", ok: false } };

function AutonomyBox({ p }: { p: TopicProject }) {
  const a = p.autonomy;
  if (!a) return null;
  const rows = [
    { q: "权重在不在本地", ...AUT_W[a.weights] },
    { q: "种子能不能填", ...AUT_S[a.seed] },
    { q: "换掉它要动几处", ...AUT_C[a.swap] },
  ];
  return (
    <div className="border border-rule rounded-lg divide-y divide-rule">
      {rows.map((r) => (
        <div key={r.q} className="flex items-baseline gap-3 px-4 py-2.5">
          <span className="text-[12.5px] text-muted w-[9.5em] shrink-0">{r.q}</span>
          <b className={`text-[13px] ${r.ok === true ? "text-yes-ink" : r.ok === false ? "text-no" : "text-ink"}`}>
            {r.zh}
          </b>
        </div>
      ))}
      <p className="px-4 py-2 text-[12px] text-muted">{a.note}</p>
    </div>
  );
}

/** 四层取材，做到哪几层就亮哪几个 —— 没做到的画成斜纹，与真值表的 ⬜ 同一条语言。 */
const LAYERS = [
  { k: "docs", zh: "文档", note: "README 与官方文档" },
  { k: "wiki", zh: "代码结构", note: "DeepWiki 全部章节，由源码生成" },
  { k: "issue", zh: "踩过的坑", note: "高频 issue 与维护者回复" },
  { k: "bench", zh: "实测", note: "自己真跑过" },
] as const;

function LayerBadges({ layers }: { layers: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mb-5">
      {LAYERS.map((l) => {
        const on = layers.includes(l.k);
        return (
          <span key={l.k} title={l.note}
            className={`text-[11px] rounded-full px-2.5 py-0.5 border ${
              on ? "border-yes text-yes-ink" : "border-rule text-muted hatch"}`}>
            {l.zh}{on ? "" : " 未做"}
          </span>
        );
      })}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-10 border-t border-rule">
      <h2 className="text-[19px] tracking-tight mb-5">{title}</h2>
      {children}
    </section>
  );
}

const LIC = {
  permissive: { zh: "可商用", cls: "border-yes text-yes-ink" },
  copyleft: { zh: "传染性许可", cls: "border-chip-warm-ink text-chip-warm-ink" },
  noncommercial: { zh: "不可商用", cls: "border-no text-no" },
} as const;

export default async function ProjectPage({ params }: { params: Promise<{ id: string; project: string }> }) {
  const { id, project } = await params;
  const t = atlas.topics.find((x) => x.id === id);
  const p = t?.projects.find((x) => x.id === project);
  if (!t || !p) return null;

  const svgs: Record<string, string> = {};
  for (const d of p.diagrams ?? []) {
    try { svgs[d.id] = readFileSync(`public/diagrams/${d.id}.svg`, "utf8"); } catch { /* 少一张图，不挂页 */ }
  }
  const mine = p.decisions.map((did) => t.decisions.find((d) => d.id === did)).filter(Boolean);
  /** 结网：同样管这些决定的其它项目。 */
  const siblings = t.projects.filter((x) => x.id !== p.id && x.decisions.some((d) => p.decisions.includes(d)));

  return (
    <main className="max-w-[820px] mx-auto px-5 pb-16">
      <nav className="pt-5 text-[12.5px] text-muted">
        <Link href={`/topic/${t.id}`} className="hover:text-ink underline">← {t.zh}</Link>
      </nav>

      <header className="pt-8 pb-9">
        <p className="text-[11px] tracking-[0.2em] text-yes-ink font-bold mb-3">开源项目解析</p>
        <h1 className="text-[32px] leading-tight tracking-tight mb-3">{p.zh}</h1>
        <p className="text-[14.5px] text-muted leading-relaxed max-w-[46ch] mb-5">{p.scope}</p>
        <div className="flex flex-wrap gap-2 items-center text-[11.5px]">
          <span className={`border rounded-full px-2.5 py-0.5 ${LIC[p.license_class].cls}`}>
            {p.license}　{LIC[p.license_class].zh}
          </span>
          <span className="border border-rule rounded-full px-2.5 py-0.5 text-muted tnum">★ {(p.stars / 1000).toFixed(1)}k</span>
          <a href={p.url} target="_blank" rel="noopener noreferrer"
            className="border border-rule rounded-full px-2.5 py-0.5 text-yes-ink hover:border-yes">仓库 ↗</a>
        </div>
      </header>

      <Section title="它管哪几个决定">
        <div className="border border-rule rounded-lg divide-y divide-rule">
          {mine.map((d) => {
            const c = d!.cap ? forkCoverage(d!.cap) : null;
            return (
              <div key={d!.id} className="grid grid-cols-[1fr_auto] gap-4 items-center px-4 py-2.5">
                <div>
                  <b className="text-[13.5px]">{d!.zh}</b>
                  <span className="block text-[12px] text-muted mt-0.5">{d!.handle}</span>
                </div>
                {c && (
                  <a href={capHref(d!.cap!)} className="text-right group">
                    <span className="flex h-2.5 w-[110px] border border-rule group-hover:border-yes">
                      <i style={{ width: `${(c.yes / c.total) * 100}%` }} className="bg-yes" />
                      <i style={{ width: `${(c.no / c.total) * 100}%` }} className="bg-no" />
                      <i style={{ width: `${(c.unknown / c.total) * 100}%` }} className="hatch" />
                    </span>
                    <span className="text-[10.5px] text-muted tnum">{c.yes}/{c.total} 家有官方说法</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="自持能力">
        <AutonomyBox p={p} />
      </Section>

      {(p.diagrams?.length || p.arch) && (
        <Section title="读懂层">
          {p.arch && <p className="text-[13px] text-muted leading-relaxed mb-4 max-w-[62ch]">{p.arch}</p>}
          {p.diagrams?.map((d) => svgs[d.id] && (
            <figure key={d.id} className="mb-5">
              <figcaption className="text-[11px] tracking-wider text-muted font-bold mb-1.5">{d.title}</figcaption>
              <div className="border border-rule rounded-lg p-3 overflow-x-auto [&_svg]:max-w-full [&_svg]:h-auto"
                dangerouslySetInnerHTML={{ __html: svgs[d.id] }} />
              <p className="text-[10.5px] text-muted mt-1 border-l-2 border-rule pl-2">{d.src} · 核验 {d.verified_at}</p>
            </figure>
          ))}
        </Section>
      )}

      {p.hands ? (
        <Section title="动手层">
          {/* 做到了哪几层必须明写 —— 否则只读 README 的看起来和真跑过的一样。 */}
          <LayerBadges layers={p.hands.layers} />
          <h3 className="text-[12px] tracking-wider text-muted font-bold mb-2">装它要过哪几关</h3>
          <ol className="border border-rule rounded-lg divide-y divide-rule mb-7">
            {p.hands.install.map((s, i) => (
              <li key={s.step} className="px-4 py-2.5">
                <b className="text-[13px]"><span className="text-hatch tnum mr-2">{i + 1}</span>{s.step}</b>
                <span className="block text-[12px] text-muted mt-1 leading-relaxed pl-5"><Rich text={s.gate} /></span>
              </li>
            ))}
          </ol>

          <h3 className="text-[12px] tracking-wider text-muted font-bold mb-2">改哪个文件能改什么</h3>
          <div className="border border-rule rounded-lg divide-y divide-rule mb-7">
            {p.hands.modify.map((m) => (
              <div key={m.path} className="px-4 py-2.5">
                <code className="text-[12px] bg-card border border-rule rounded px-1.5 py-0.5">{m.path}</code>
                <span className="block text-[12px] text-muted mt-1 leading-relaxed">{m.effect}</span>
              </div>
            ))}
          </div>

          <h3 className="text-[12px] tracking-wider text-muted font-bold mb-2">坑在哪一处</h3>
          {p.hands.issue_src && (
            <p className="text-[11px] text-muted mb-2">带 issue 编号的来自：{p.hands.issue_src}</p>
          )}
          <div className="border border-no/40 rounded-lg divide-y divide-rule">
            {p.hands.pitfalls.map((f) => (
              <div key={f.where} className="px-4 py-2.5">
                <b className="text-[13px] text-no">{f.where}</b>
                <span className="block text-[12px] text-muted mt-1 leading-relaxed"><Rich text={f.note} /></span>
              </div>
            ))}
          </div>
        </Section>
      ) : (
        <Section title="动手层">
          <p className="text-[13px] text-muted border border-rule rounded-lg px-4 py-3 hatch">
            还没做。装它要过哪几关、改哪个文件能改什么、坑在代码哪一处 —— 这三项要读源码，尚未完成。
          </p>
        </Section>
      )}

      <Section title="判断">
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 border-l-2 border-chip-warm-ink pl-4">
          <div>
            <h3 className="text-[11px] tracking-wider text-yes-ink font-bold mb-2">优势</h3>
            <ul className="text-[12.5px] text-muted list-disc pl-4 space-y-1.5">
              {p.good.map((g) => <li key={g}><Rich text={g} /></li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] tracking-wider text-no font-bold mb-2">局限</h3>
            <ul className="text-[12.5px] text-muted list-disc pl-4 space-y-1.5">
              {p.bad.map((b) => <li key={b}><Rich text={b} /></li>)}
            </ul>
          </div>
          <div className="sm:col-span-2">
            <h3 className="text-[11px] tracking-wider text-muted font-bold mb-1.5">不适用</h3>
            <p className="text-[12.5px] text-muted">{p.unfit}</p>
          </div>
        </div>
      </Section>

      {siblings.length > 0 && (
        <Section title="同管这些决定的其它项目">
          <div className="grid sm:grid-cols-2 gap-2">
            {siblings.map((s) => (
              <Link key={s.id} href={topicProjectHref(t.id, s.id)}
                className="border border-rule rounded-lg px-3.5 py-2.5 hover:border-yes block">
                <b className="text-[13.5px]">{s.zh}</b>
                <span className="block text-[11.5px] text-muted mt-1 leading-snug">{s.scope.slice(0, 42)}…</span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <div className="border-t border-rule pt-5 mt-2 text-[11.5px] text-muted">
        <p className="mb-2">{p.src} · 核验 {p.verified_at}　|　判断栏可报错。</p>
        <ReportIssue />
      </div>
    </main>
  );
}

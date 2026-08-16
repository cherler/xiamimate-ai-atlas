"use client";

import { useState } from "react";
import { Rich } from "./Fact";
import { forkCoverage, topicAppName, type Decision, type Topic, type TopicProject } from "@/lib/atlas";
import { capHref } from "@/lib/slug";

/**
 * 专项页的交互层。
 *
 * ## 为什么要重做
 *
 * 上一版把九个决定、九个片型、八个项目**同时铺开**，负责人一句话说穿：
 * 「内容太多、布局太挤，第一眼没有看下去的欲望。」
 *
 * 根因不是文案长，是**把所有信息摆给所有人**：八张项目卡里，
 * 对任何一个具体读者有用的最多三张 —— 剩下五张是噪音，而噪音没有层次。
 *
 * 所以改成**按选择逐层展开**：先看一个事实 → 选片型 → 只出这个片型的命门决定
 * → 每个决定只挂对应的项目。同屏信息量降到三分之一，层次自己就出来了。
 *
 * ## 一屏一件事
 *
 * 每段之间留 `py-20` 以上。上一版是 `mt-9`，九段挤在两屏里 ——
 * **留白不是装饰，它是「这里换了个话题」的唯一信号。**
 */
const OWNER = {
  user: { zh: "归你", cls: "text-yes-ink" },
  partial: { zh: "一半", cls: "text-chip-warm-ink" },
  platform: { zh: "归平台", cls: "text-no" },
} as const;

/** 九格条：整页的记号。大号当主视觉，小号当片型卡的缩略。 */
function Strip({ decisions, size = "lg", only }: { decisions: Decision[]; size?: "lg" | "sm"; only?: string[] }) {
  const h = size === "lg" ? "h-16 sm:h-24" : "h-2";
  return (
    <div className={`flex gap-1 ${size === "lg" ? "gap-1.5" : ""}`}>
      {decisions.map((d) => {
        const on = !only || only.includes(d.id);
        const bg = d.owner === "user" ? "bg-yes" : d.owner === "partial" ? "bg-chip-warm-ink" : "bg-no";
        return <span key={d.id} className={`flex-1 rounded-sm ${h} ${bg} ${on ? "opacity-90" : "opacity-15"}`} />;
      })}
    </div>
  );
}

function Cov({ cap }: { cap: string }) {
  const c = forkCoverage(cap);
  const w = (n: number) => `${(n / c.total) * 100}%`;
  return (
    <a href={capHref(cap)} className="block group">
      <span className="flex h-2.5 border border-rule group-hover:border-yes">
        <i style={{ width: w(c.yes) }} className="bg-yes" />
        <i style={{ width: w(c.no) }} className="bg-no" />
        <i style={{ width: w(c.unknown) }} className="hatch" />
      </span>
      <span className="text-[11px] text-muted tnum mt-1 block">
        {c.yes}/{c.total} 家给了官方说法
        {c.no > 0 && <> · <b className="text-no">{c.no} 家明确拒绝</b></>}
      </span>
    </a>
  );
}

const LIC = {
  permissive: { zh: "可商用", cls: "border-yes text-yes-ink" },
  copyleft: { zh: "传染性许可", cls: "border-chip-warm-ink text-chip-warm-ink" },
  noncommercial: { zh: "不可商用", cls: "border-no text-no" },
} as const;

/** 项目默认只有一行；细节点开才来 —— 上一版八张卡全展开是「挤」的直接来源。 */
function Project({ p }: { p: TopicProject }) {
  return (
    <details className="border border-rule rounded-lg group">
      <summary className="cursor-pointer list-none px-4 py-3 flex items-center gap-3 flex-wrap">
        <b className="text-[15px]">{p.zh}</b>
        <span className={`text-[11px] border rounded-full px-2 ${LIC[p.license_class].cls}`}>
          {LIC[p.license_class].zh}
        </span>
        <span className="text-[11.5px] text-muted">{p.hw.split("；")[0]}</span>
        <span className="text-[11px] text-muted tnum ml-auto">★ {(p.stars / 1000).toFixed(1)}k</span>
        <span className="text-hatch text-[13px] group-open:hidden">＋</span>
        <span className="text-hatch text-[13px] hidden group-open:inline">－</span>
      </summary>
      <div className="px-4 pb-4 pt-1 border-t border-rule">
        <p className="text-[13px] text-muted leading-relaxed mt-3 mb-4">{p.scope}</p>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-[12.5px]">
          <div>
            <h4 className="text-[11px] tracking-wider text-yes-ink font-bold mb-1.5">优势</h4>
            <ul className="text-muted list-disc pl-4 space-y-1">{p.good.map((g) => <li key={g}><Rich text={g} /></li>)}</ul>
          </div>
          <div>
            <h4 className="text-[11px] tracking-wider text-no font-bold mb-1.5">局限</h4>
            <ul className="text-muted list-disc pl-4 space-y-1">{p.bad.map((b) => <li key={b}><Rich text={b} /></li>)}</ul>
          </div>
        </div>
        <p className="text-[12.5px] text-muted mt-4 pt-3 border-t border-rule">
          <b className="text-ink">不适用　</b>{p.unfit}
        </p>
        {p.arch && <p className="text-[11.5px] text-muted mt-3 leading-relaxed"><b className="text-ink">架构　</b>{p.arch}</p>}
        <p className="text-[11px] text-muted mt-3">
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-yes-ink hover:underline">仓库 →</a>
          {"　"}{p.src} · 核验 {p.verified_at}
        </p>
      </div>
    </details>
  );
}

export default function TopicView({ t }: { t: Topic }) {
  const [pick, setPick] = useState<string | null>(null);
  const matrix = t.chapters.find((c) => c.matrix)?.matrix;
  const axis = t.chapters.filter((c) => c.kind === "axis").sort((a, b) => (a.axis_pos ?? 0) - (b.axis_pos ?? 0));
  const platform = t.decisions.filter((d) => d.owner === "platform").length;
  /** 覆盖度最低的那条决定 —— 不写死，数据变了它自己会换人。 */
  const worst = t.decisions
    .filter((d) => d.cap)
    .sort((a, b) => forkCoverage(a.cap!).yes - forkCoverage(b.cap!).yes)[0];
  const worstCov = worst ? forkCoverage(worst.cap!) : { yes: 0, total: 0 };
  const best = t.decisions.filter((d) => d.cap).sort((a, b) => forkCoverage(b.cap!).yes - forkCoverage(a.cap!).yes)[0];
  const bestCov = best ? forkCoverage(best.cap!) : { yes: 0, total: 0 };

  /**
   * 选了片型之后**只留命门**（权重 3）。
   *
   * ⚠️ 第一版取的是「≥2 重要及以上」，AI短剧筛出来 8 条 —— **等于没筛**，
   * 那句「先夺回这几个」就成了空话。筛选的价值在于**它必须筛掉大部分**。
   * 同时去掉本来就归用户的那条：告诉人「选题归你」不构成信息。
   */
  const key = pick && matrix
    ? t.decisions.filter((d) => (matrix[pick]?.[d.id] ?? 0) >= 3 && d.owner !== "user")
    : [];
  /** 底座不挂在决定下面 —— ComfyUI 横跨四个决定，逐条重复四次就成了噪音。 */
  const bases = t.projects.filter((p) => p.role === "base");
  const projectsFor = (dId: string) =>
    t.projects.filter((p) => p.role !== "base" && p.decisions.includes(dId));

  return (
    <>
      {/*
        * ── 第一屏 ──
        *
        * 标题用正式的名词短语，**张力交给紧跟其后的数据扛**。
        * 中间稿用过「不满意，只能重摇。」当大标题 —— 钩子是有了，但负责人否掉：
        * **「不要用这种口语化标题，就正经的标题。」**
        *
        * 这条否得对，而且和早先那条「解释性句子全去掉」是同一个道理：
        * **页面不替读者产生情绪，只把事实摆到位。** 九格条里六格是红的，
        * 那个红本身就够扎人，不需要标题再喊一遍。
        */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-16">
        <p className="text-[11px] tracking-[0.2em] text-yes-ink font-bold mb-4">专项</p>
        <h1 className="text-[30px] sm:text-[40px] leading-[1.15] tracking-tight mb-4 max-w-[18ch]">
          {t.zh}
        </h1>
        <p className="text-[15px] text-muted leading-relaxed max-w-[34ch] mb-10">
          <Rich text={t.intro} />
        </p>

        <Strip decisions={t.decisions} />
        <div className="grid grid-cols-3 sm:grid-cols-9 gap-1.5 mt-2">
          {t.decisions.map((d) => (
            <span key={d.id} className="text-[10.5px] text-muted leading-tight text-center">{d.zh}</span>
          ))}
        </div>
        <p className="mt-7 text-[17px] sm:text-[19px] leading-relaxed max-w-[28ch]">
          其中 <b className="text-no tnum text-[26px]">{platform}</b> 个不归你 ——
          <b className="text-ink">而且不能单独改</b>。
        </p>
        <div className="flex gap-5 mt-4 text-[12px] text-muted">
          <span className="flex items-center gap-1.5"><i className="w-3 h-3 bg-yes rounded-sm inline-block" />归你</span>
          <span className="flex items-center gap-1.5"><i className="w-3 h-3 bg-chip-warm-ink rounded-sm inline-block" />一半</span>
          <span className="flex itemsecenter gap-1.5"><i className="w-3 h-3 bg-no rounded-sm inline-block" />归平台</span>
        </div>
      </section>

      {/*
        * ── 覆盖度最低的那一项 ──
        *
        * 上一节的「N 个不归你」还只是结构；这一节把它落到一个具体数字上。
        * **哪一项最低不写死，现算** —— 数据变了它自己换人。
        * 旁边并排给出覆盖最广的那一项，读者才有标尺；只报一个数字不构成对比。
        */}
      {worst && (
        <section className="py-14 border-t border-rule">
          <h2 className="text-[22px] tracking-tight mb-6">覆盖度最低的一项</h2>
          <p className="text-[30px] sm:text-[38px] leading-tight tracking-tight max-w-[18ch]">
            {worst.zh}：<span className="tnum text-no">{worstCov.yes}</span>
            <span className="text-muted tnum"> / {worstCov.total}</span>
          </p>
          <p className="mt-5 text-[15px] text-muted leading-relaxed max-w-[30ch]">
            {worstCov.total} 个核心模型里，只有 <b className="text-ink tnum">{worstCov.yes}</b> 家
            在官方文档里承诺过你能控制它。
          </p>
          <p className="mt-3 text-[15px] leading-relaxed max-w-[30ch]">
            与之相比，覆盖最广的一项有 <b className="text-ink tnum">{bestCov.yes}</b> 家。
          </p>
        </section>
      )}

      {/* ── 选片型 ── */}
      <section className="py-14 border-t border-rule">
        <h2 className="text-[22px] tracking-tight mb-1.5">片型</h2>
        <p className="text-[13px] text-muted mb-7">不同片型的命门决定不同。</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {matrix && Object.keys(matrix).map((app) => {
            const on = pick === app;
            const hot = t.decisions.filter((d) => (matrix[app]?.[d.id] ?? 0) >= 3).map((d) => d.id);
            return (
              <button key={app} onClick={() => setPick(on ? null : app)}
                className={`text-left border rounded-xl px-4 py-3.5 ${on ? "border-yes bg-card" : "border-rule hover:border-yes"}`}>
                <b className="text-[14.5px] block mb-2.5">{topicAppName(app)}</b>
                <Strip decisions={t.decisions} size="sm" only={hot} />
              </button>
            );
          })}
        </div>
      </section>

      {/* ── 选了才展开 ── */}
      {pick && (
        <section className="py-14 border-t border-rule">
          <h2 className="text-[22px] tracking-tight mb-1.5">
            {topicAppName(pick)} · 优先夺回的 <span className="tnum">{key.length}</span> 项
          </h2>
          <p className="text-[13px] text-muted mb-7">其余可先交给平台。</p>
          {bases.length > 0 && (
            <div className="mb-9">
              <p className="text-[11px] tracking-wider text-muted font-bold mb-2">底座</p>
              <div className="space-y-2">{bases.map((p) => <Project key={p.id} p={p} />)}</div>
            </div>
          )}
          <div className="space-y-10">
            {key.map((d) => {
              const ps = projectsFor(d.id);
              return (
                <div key={d.id}>
                  <div className="flex items-baseline gap-3 flex-wrap mb-1">
                    <h3 className="text-[18px]">{d.zh}</h3>
                    <span className={`text-[12px] ${OWNER[d.owner].cls}`}>现在{OWNER[d.owner].zh}</span>
                  </div>
                  <p className="text-[13px] text-muted mb-3">{d.handle}</p>
                  {d.cap && <div className="max-w-[360px] mb-5"><Cov cap={d.cap} /></div>}
                  {ps.length > 0 && <div className="space-y-2">{ps.map((p) => <Project key={p.id} p={p} />)}</div>}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ── 自持程度 ── */}
      <section className="py-14 border-t border-rule">
        <h2 className="text-[22px] tracking-tight mb-1.5">自持程度</h2>
        <p className="text-[13px] text-muted mb-7">由低到高：先出片 → 要控制 → 沉淀方法。</p>
        <div className="grid sm:grid-cols-3 gap-2.5">
          {axis.map((c) => (
            <div key={c.id} className={`border rounded-xl px-4 py-4 ${c.state === "live" ? "border-yes bg-card" : "border-rule"}`}>
              <b className="text-[15px]">{c.zh}</b>
              <p className="text-[12.5px] text-muted mt-2 leading-relaxed"><Rich text={c.intro} /></p>
              {c.state !== "live" && (
                <span className="inline-block mt-3 text-[11px] text-muted border border-rule rounded px-2">在建</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

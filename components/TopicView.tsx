"use client";

import { useState } from "react";
import Link from "next/link";
import { Rich } from "./Fact";
import { forkCoverage, topicAppName, type Decision, type Topic, type TopicProject } from "@/lib/atlas";
import { capHref, topicProjectHref } from "@/lib/slug";
import { CoverageChart, HardwareChart, LicenseChart, MatrixChart, ProjectCharts, ProjectDiagrams } from "./TopicCharts";

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
 * 每段之间留足留白。上一版各段之间只有 `mt-9`，九段挤在两屏里 ——
 * **留白不是装饰，它是「这里换了个话题」的唯一信号。**
 *
 * ## 不做钩子
 *
 * 中间稿试过两种引子：「不满意，只能重摇。」和「其中 6 个不归你」。
 * 两次都被否，第二次说得最清楚：
 * **「不要做这种挑衅。我不需要这种钩子来吸引人看下去，
 * 能被这种钩子勾住的也不是我的用户。」**
 *
 * 所以这一页就是一份说明文档：标题是正式名词，导语说清这一页有什么，
 * 数据摆到位，**不替读者下结论、不制造反差**。
 * 九格条是数据可视化，不是修辞 —— 保留；它下面那句「其中 N 个不归你」是修辞，删掉。
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

/**
 * 专项页里的项目 = **网上的一个节点**，点进去是它自己的解析页。
 *
 * 上一版是折叠卡，细节点开就地展开 —— 负责人否掉：
 * 「开源项目的拆解跟我想象中不太一样」。诊断是**我把重心做成了索引**：
 * 那张卡回答「这几个里选哪个」，而重心是「它怎么工作、我能改哪里」，
 * 那份东西塞不进一张卡。现在卡只做导航，内容全在项目页。
 */
function ProjectLink({ p, topic }: { p: TopicProject; topic: string }) {
  const a = p.autonomy;
  return (
    <Link href={topicProjectHref(topic, p.id)}
      className="border border-rule rounded-lg px-4 py-3 flex items-center gap-3 flex-wrap hover:border-yes">
      <b className="text-[14.5px]">{p.zh}</b>
      <span className={`text-[11px] border rounded-full px-2 ${LIC[p.license_class].cls}`}>
        {LIC[p.license_class].zh}
      </span>
      {a?.weights === "local" && (
        <span className="text-[11px] border border-rule rounded-full px-2 text-muted">权重可下载</span>
      )}
      {p.hands && <span className="text-[11px] border border-rule rounded-full px-2 text-muted">含动手层</span>}
      <span className="text-[11px] text-muted tnum ml-auto">★ {(p.stars / 1000).toFixed(1)}k</span>
      <span className="text-hatch">→</span>
    </Link>
  );
}

export default function TopicView({ t }: { t: Topic }) {
  const [pick, setPick] = useState<string | null>(null);
  const matrix = t.chapters.find((c) => c.matrix)?.matrix;
  const axis = t.chapters.filter((c) => c.kind === "axis").sort((a, b) => (a.axis_pos ?? 0) - (b.axis_pos ?? 0));
  const platform = t.decisions.filter((d) => d.owner === "platform").length;

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
        * **页面不替读者产生情绪，只把事实摆到位。**
        *
        * ⚠️ 标题里也不放数量。负责人后来又纠了一次：
        * **「不是教程，是研究。标题里写『九个决定』，感觉是在教人。」**
        * ——「教」的口气是「记住这几条」，「研究」的口气是「我们查到了什么」。
        * 所以标题只说研究的对象（控制权归属），数量留在正文里当结果。
        */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-16">
        <p className="text-[11px] tracking-[0.2em] text-yes-ink font-bold mb-4">专项研究</p>
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
        <div className="flex gap-5 mt-5 text-[12px] text-muted">
          <span className="flex items-center gap-1.5"><i className="w-3 h-3 bg-yes rounded-sm inline-block" />归你</span>
          <span className="flex items-center gap-1.5"><i className="w-3 h-3 bg-chip-warm-ink rounded-sm inline-block" />一半</span>
          <span className="flex items-center gap-1.5"><i className="w-3 h-3 bg-no rounded-sm inline-block" />归平台</span>
        </div>
      </section>

      <section className="py-12 border-t border-rule">
        <h2 className="text-[22px] tracking-tight mb-1.5">官方说法覆盖度</h2>
        <p className="text-[13px] text-muted mb-5">10 个核心模型里，各项能力有几家写进了官方文档。</p>
        <CoverageChart decisions={t.decisions} />
      </section>

      <section className="py-12 border-t border-rule">
        <h2 className="text-[22px] tracking-tight mb-1.5">许可证</h2>
        <p className="text-[13px] text-muted mb-5">按能不能拿去接商单分档，不按许可证名字分。</p>
        <LicenseChart projects={t.projects} />
      </section>

      <section className="py-12 border-t border-rule">
        <h2 className="text-[22px] tracking-tight mb-1.5">硬件门槛</h2>
        <p className="text-[13px] text-muted mb-5">数值取自各仓库自述。</p>
        <HardwareChart projects={t.projects} />
      </section>

      {/* ── 片型 × 决定 热力矩阵。点行选片型。 ── */}
      <section className="py-12 border-t border-rule">
        <h2 className="text-[22px] tracking-tight mb-1.5">片型 × 决定</h2>
        <p className="text-[13px] text-muted mb-5">格子越实＝该决定对这一片型越关键。点一行展开。</p>
        {matrix && <MatrixChart matrix={matrix} decisions={t.decisions} pick={pick} onPick={(id) => setPick(id === pick ? null : id)} />}
        <p className="text-[11px] text-muted mt-1.5 border-l-2 border-chip-warm-ink pl-2.5">权重是判断，不是厂商说法。</p>
      </section>

      {/* ── 选了才展开 ── */}
      {pick && (
        <section className="py-14 border-t border-rule">
          <h2 className="text-[22px] tracking-tight mb-1.5">
            {topicAppName(pick)} · 关键决定 <span className="tnum">{key.length}</span> 项
          </h2>
          <p className="text-[13px] text-muted mb-7">其余各项对该片型不构成瓶颈。</p>
          {bases.length > 0 && (
            <div className="mb-9">
              <p className="text-[11px] tracking-wider text-muted font-bold mb-2">底座</p>
              <div className="space-y-2">{bases.map((p) => <ProjectLink key={p.id} p={p} topic={t.id} />)}</div>
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
                  {ps.length > 0 && <div className="space-y-2">{ps.map((p) => <ProjectLink key={p.id} p={p} topic={t.id} />)}</div>}
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

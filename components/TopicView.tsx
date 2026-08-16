"use client";

import { useState } from "react";
import Link from "next/link";
import { Rich } from "./Fact";
import { topicAppName, type Decision, type Topic, type TopicProject } from "@/lib/atlas";
import { capHref, topicProjectHref } from "@/lib/slug";
import {
  ActivityChart, AllInOneChart, CoverageChart, HardwareChart, LicenseChart,
  MatrixChart, PlatformBreakdown, StepLadder,
} from "./TopicCharts";

/**
 * 专项页的交互层。
 *
 * ## 主线：做一条视频的九步
 *
 * 这一页被否过三次，第三次说到了根子上（负责人 2026-08-16）：
 *
 * > 「感觉乱乱的，就是没有把握住专项研究的主线。现在像我说的，
 * > 按做视频的几个步骤，分别对比项目下自持、平台的适应性。」
 *
 * 前两版的骨架是**「这一步归谁」**（归你 / 一半 / 归平台），首屏就是一根三色条。
 * 那个分法本身没什么用 ——
 *
 * > 「自持 vs 官网各有优点，主要是物美价廉四个字，
 * > 而且看适用场景而不是简单区分自持、平台。」
 *
 * 所以现在：**顺序是主线，两侧对比是内容，适用场景是结论**。
 * 九个决定本来就是做视频的九道工序，以前只是没按这个顺序摆。
 *
 * ## 排版的逻辑性来自「同一件事只讲一遍」
 *
 * 上一版把覆盖度、许可证、活跃度、硬件做成四张并列图表摊在中段 ——
 * 那是**项目集合的属性**，不是工序。读者得自己在脑子里按步骤重拼一遍，
 * 这就是「排版不够有逻辑性」的来源。现在它们降为附录，
 * 每一步需要的那两个数直接长在那一步里。
 *
 * ## 可点与不可点必须一眼分得出
 *
 * > 「跳转链接有的可点有的不可点很奇怪。」
 *
 * 定死一条规矩：**可点的一律有 `→`，并且 hover 变边框色；没有 `→` 的一律不可点。**
 * 图表本身永远不可点 —— 要跳转就在图下面放一条明写的链接。
 */

/** 可点的东西只有这一种长相。加 `→`、hover 变色，此外一律不可点。 */
function Go({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  const cls = `inline-flex items-center gap-1.5 hover:text-yes-ink ${className}`;
  const inner = <>{children}<span className="text-hatch shrink-0">→</span></>;
  return href.startsWith("http")
    ? <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
    : <Link href={href} className={cls}>{inner}</Link>;
}

const LIC = {
  permissive: { zh: "可商用", cls: "border-yes text-yes-ink" },
  copyleft: { zh: "传染性许可", cls: "border-chip-warm-ink text-chip-warm-ink" },
  noncommercial: { zh: "不可商用", cls: "border-no text-no" },
} as const;

/**
 * 专项页里的项目 = **网上的一个节点**，点进去是它自己的解析页。
 * 卡只做导航，内容全在项目页 —— 那份东西塞不进一张卡。
 */
function ProjectLink({ p, topic }: { p: TopicProject; topic: string }) {
  const stale = (p.stale_months ?? 0) >= 12;
  return (
    <Link href={topicProjectHref(topic, p.id)}
      className="border border-rule rounded-lg px-3.5 py-2.5 flex items-center gap-2.5 flex-wrap hover:border-yes">
      <b className="text-[14px]">{p.zh}</b>
      <span className={`text-[11px] border rounded-full px-2 ${LIC[p.license_class].cls}`}>
        {LIC[p.license_class].zh}
      </span>
      {stale && (
        <span className="text-[11px] border border-no rounded-full px-2 text-no">停更 {p.stale_months} 个月</span>
      )}
      <span className="text-[11px] text-muted tnum ml-auto">{p.diagrams?.length ?? 0} 张图</span>
      <span className="text-hatch">→</span>
    </Link>
  );
}

/**
 * 开源侧拆解里的一行。**和上面的项目卡不是同一件东西**：
 * 卡是导航（点进去看那个项目），行是拆解（它靠什么做到这一步、门槛多少）。
 * `control` 正是「它怎么做到的」这一栏 —— 项目页里那份长解析的一句话摘要。
 */
function ProjectRow({ p, topic }: { p: TopicProject; topic: string }) {
  const stale = (p.stale_months ?? 0) >= 12;
  return (
    <div className="px-3.5 py-3">
      <div className="flex items-baseline gap-2 flex-wrap mb-1">
        <b className="text-[13px]">{p.zh}</b>
        <span className={`text-[10.5px] border rounded-full px-1.5 ${LIC[p.license_class].cls}`}>
          {LIC[p.license_class].zh}
        </span>
        {stale && (
          <span className="text-[10.5px] border border-no rounded-full px-1.5 text-no">停更 {p.stale_months} 个月</span>
        )}
        <span className="ml-auto text-[11.5px]">
          <Go href={topicProjectHref(topic, p.id)} className="text-muted">拆解</Go>
        </span>
      </div>
      {p.control && (
        <p className="text-[12px] text-muted leading-relaxed"><Rich text={p.control} /></p>
      )}
      {p.hw && <p className="text-[11.5px] text-hatch mt-1">门槛：<Rich text={p.hw} /></p>}
    </div>
  );
}

/**
 * 左侧目录。**目录项与小节从同一份清单渲染** —— 各写一份迟早漂开，
 * 而漂开的症状是「点了跳错地方」，没人会报错。
 */
const SEC = {
  types:    { id: "types",    zh: "片型 × 步骤" },
  steps:    { id: "steps",    zh: "九步逐步比" },
  allinone: { id: "allinone", zh: "整包篇" },
  props:    { id: "props",    zh: "附录 · 项目属性" },
  axis:     { id: "axis",     zh: "自持程度三篇" },
} as const;

function Toc({ items }: { items: { id: string; zh: string }[] }) {
  return (
    <nav className="hidden lg:block sticky top-16 self-start w-[150px] shrink-0 pt-14">
      <p className="text-[10.5px] tracking-[0.16em] text-muted font-bold mb-2.5">目录</p>
      <ul className="space-y-1.5 border-l border-rule">
        {items.map((i) => (
          <li key={i.id}>
            <a href={`#${i.id}`}
              className="block text-[12.5px] text-muted hover:text-ink border-l-2 border-transparent hover:border-yes -ml-px pl-3 py-0.5">
              {i.zh}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Sec({ id, zh, sub, children }: { id: string; zh: string; sub?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="py-12 border-t border-rule scroll-mt-16">
      <h2 className="text-[22px] tracking-tight mb-1.5">{zh}</h2>
      {sub && <div className="text-[13px] text-muted mb-6 max-w-[54ch]">{sub}</div>}
      {children}
    </section>
  );
}

/**
 * 一道工序。**主体是能力拆解**，不是「自持 vs 平台」的两栏比较。
 *
 * 顺序是刻意的：先给场景答案（读者最想要的那一句），再摊开拆解（真材实料）。
 * 中间那句结论标着「判断」—— 拆解是事实，结论是我们的话，两者必须分得开。
 */
function Step({
  d, i, projects, topic, dim,
}: { d: Decision; i: number; projects: TopicProject[]; topic: string; dim: boolean }) {
  return (
    <section id={`step-${d.id}`} className={`scroll-mt-16 transition-opacity ${dim ? "opacity-40" : ""}`}>
      <div className="flex items-baseline gap-3 flex-wrap">
        <b className="text-[13px] tnum text-hatch">{String(i + 1).padStart(2, "0")}</b>
        <h3 className="text-[19px] tracking-tight">{d.zh}</h3>
      </div>
      {d.handle && d.handle !== "—" && (
        <p className="text-[13px] text-muted mt-1 max-w-[56ch]">{d.handle}</p>
      )}

      {/* ── 场景答案：读者最想要的那一句，摆在拆解之前 ── */}
      {d.scenarios && d.scenarios.length > 0 && (
        <dl className="mt-5 border border-rule rounded-lg divide-y divide-rule">
          {d.scenarios.map((s) => (
            <div key={s.when} className="px-4 py-3 sm:grid sm:grid-cols-[minmax(150px,190px)_1fr] sm:gap-5">
              <dt className="text-[12.5px] text-muted">{s.when}</dt>
              <dd className="text-[13px] text-ink leading-relaxed mt-1 sm:mt-0">{s.use}</dd>
            </div>
          ))}
        </dl>
      )}

      {/* ── 重心：能力拆解 ── */}
      <div className="mt-7">
        <h4 className="text-[13px] font-bold mb-1">能力拆解</h4>

        <p className="text-[11px] tracking-wider text-muted font-bold mt-4 mb-1.5">
          平台侧 · 十家逐一
        </p>
        {d.cap ? (
          <>
            <PlatformBreakdown cap={d.cap} />
            <p className="text-[11.5px] mt-2">
              <Go href={capHref(d.cap)} className="text-muted">这项能力的完整核对页</Go>
            </p>
          </>
        ) : (
          <p className="text-[12.5px] text-muted border border-rule rounded-lg px-4 py-3 hatch">
            这一步没有对应的能力格，平台侧还没有逐家核对过。
          </p>
        )}

        <p className="text-[11px] tracking-wider text-muted font-bold mt-7 mb-1.5">
          开源侧 · 逐个
        </p>
        {projects.length > 0 ? (
          <div className="border border-rule rounded-lg divide-y divide-rule">
            {projects.map((p) => <ProjectRow key={p.id} p={p} topic={topic} />)}
          </div>
        ) : (
          <p className="text-[12.5px] text-muted border border-rule rounded-lg px-4 py-3 hatch">
            没有开源项目接这一步。
          </p>
        )}
      </div>

      {d.fit && (
        <div className="mt-6 border-l-2 border-chip-warm-ink pl-3 max-w-[58ch]">
          <p className="text-[13px] text-ink leading-relaxed">{d.fit}</p>
          <p className="text-[10.5px] text-muted mt-1.5">这一句是判断，不是厂商说法。</p>
        </div>
      )}
    </section>
  );
}

export default function TopicView({ t }: { t: Topic }) {
  const [pick, setPick] = useState<string | null>(null);
  const matrix = t.chapters.find((c) => c.matrix)?.matrix;
  const axis = t.chapters.filter((c) => c.kind === "axis").sort((a, b) => (a.axis_pos ?? 0) - (b.axis_pos ?? 0));

  const allinone = t.projects.filter((p) => p.role === "allinone");
  /** 底座横跨多步（ComfyUI 一个人管四步），挂在每一步下面会重复四次，所以单列。 */
  const bases = t.projects.filter((p) => p.role === "base");
  /** 那一步下面**逐个列出来**的项目：只列工具，底座在上面单列过了。 */
  const projectsFor = (dId: string) =>
    t.projects.filter((p) => p.role === "tool" && p.decisions.includes(dId));
  /**
   * 自持侧那根条**要数底座**。
   *
   * 第一版只数了工具，于是「分镜」那一步写着「共 2 个」——
   * 而 ComfyUI 明明也做分镜，只是因为它被单列成底座就没算进去。
   * **条是在回答「自持这一步有没有东西可用」，不是在回答「这一节列了几张卡」。**
   * 一站式不算：它替你做掉这一步，是另一条路，自成一篇。
   */
  const countFor = (dId: string) =>
    t.projects.filter((p) => p.role !== "allinone" && p.decisions.includes(dId));

  /** 选了片型就把非命门的步骤压暗 —— **过滤不是换一屏内容，是同一条主线上做减法**。 */
  const isKey = (d: Decision) => !pick || !matrix || (matrix[pick]?.[d.id] ?? 0) >= 3;

  const toc = [...(matrix ? [SEC.types] : []), SEC.steps,
    ...(allinone.length ? [SEC.allinone] : []), SEC.props, SEC.axis];

  return (
    <div className="lg:flex lg:gap-10">
      <Toc items={toc} />
      <div className="min-w-0 flex-1">

      {/* ── 第一屏：主线就是顺序 ── */}
      <section className="pt-12 pb-12 sm:pt-16">
        <p className="text-[11px] tracking-[0.2em] text-yes-ink font-bold mb-4">专项研究</p>
        <h1 className="text-[30px] sm:text-[40px] leading-[1.15] tracking-tight mb-4 max-w-[18ch]">{t.zh}</h1>
        <p className="text-[15px] text-muted leading-relaxed max-w-[36ch] mb-9">
          <Rich text={t.intro} />
        </p>
        <p className="text-[11px] tracking-wider text-muted font-bold mb-2.5">做一条视频要过的九步</p>
        <StepLadder decisions={t.decisions} />
      </section>

      {/* ── 片型是过滤器，不是另一屏内容 ── */}
      {matrix && (
        <Sec {...SEC.types} sub="格子越实＝这一步对该片型越关键。点一行，下面九步里非命门的会压暗。">
          <MatrixChart matrix={matrix} decisions={t.decisions} pick={pick}
            onPick={(id) => setPick(id === pick ? null : id)} />
          <p className="text-[11px] text-muted mt-2 border-l-2 border-chip-warm-ink pl-2.5">
            权重是判断，不是厂商说法。
          </p>
          {pick && (
            <p className="text-[12.5px] mt-4">
              正在按 <b className="text-ink">{topicAppName(pick)}</b> 过滤 ——
              九步里 <b className="tnum text-ink">{t.decisions.filter(isKey).length}</b> 步是命门。
              <button onClick={() => setPick(null)}
                className="ml-2 border border-rule rounded px-2 py-0.5 text-[11.5px] text-muted hover:border-yes">
                取消过滤
              </button>
            </p>
          )}
        </Sec>
      )}

      {/* ── 主体：九步 ── */}
      <Sec {...SEC.steps}
        sub={<>每一步都问同两个问题：<b className="text-ink">平台侧做不做得到</b>、
          <b className="text-ink">自持侧有没有还活着的项目</b>。结论是「什么时候用哪边」，不是谁更高级。</>}>
        {bases.length > 0 && (
          <div className="mb-10 border border-rule rounded-lg px-4 py-3.5">
            <p className="text-[11px] tracking-wider text-muted font-bold mb-2">底座 · 横跨多步</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {bases.map((p) => <ProjectLink key={p.id} p={p} topic={t.id} />)}
            </div>
          </div>
        )}
        <div className="space-y-14">
          {t.decisions.map((d, i) => (
            <Step key={d.id} d={d} i={i} topic={t.id} projects={countFor(d.id)} dim={!isKey(d)} />
          ))}
        </div>
      </Sec>

      {/* ── 整包篇 ── */}
      {allinone.length > 0 && (
        <Sec {...SEC.allinone}
          sub={<Rich text={t.chapters.find((c) => c.id === "allinone")?.intro ?? ""} />}>
          <AllInOneChart projects={allinone} decisions={t.decisions} />
          <div className="grid sm:grid-cols-2 gap-2 mt-3">
            {allinone.map((p) => <ProjectLink key={p.id} p={p} topic={t.id} />)}
          </div>
        </Sec>
      )}

      {/*
        * ── 附录 ──
        * 这四张图是**项目集合的属性**，不是工序。摆在中段会打断主线，
        * 但它们本身是查过的事实，删掉可惜 —— 所以降到附录，谁想比谁来翻。
        */}
      <Sec {...SEC.props} sub="下面四张是项目集合的整体属性，和九步的顺序无关，放在最后备查。">
        <div className="space-y-10">
          <div>
            <h3 className="text-[15px] mb-1">官方说法覆盖度</h3>
            <p className="text-[12px] text-muted mb-3">10 个核心模型里，各项能力有几家写进了官方文档。</p>
            <CoverageChart decisions={t.decisions} />
          </div>
          <div>
            <h3 className="text-[15px] mb-1">许可证</h3>
            <p className="text-[12px] text-muted mb-3">按能不能拿去接商单分档，不按许可证名字分。</p>
            <LicenseChart projects={t.projects} />
          </div>
          <div>
            <h3 className="text-[15px] mb-1">活跃度</h3>
            <p className="text-[12px] text-muted mb-3">
              星数绝对值在新领域里是年龄的函数。这里按增速排，并单列最后一次提交距今多久 —— 两个轴谁也别单独用。
            </p>
            <ActivityChart projects={t.projects} />
          </div>
          <div>
            <h3 className="text-[15px] mb-1">硬件门槛</h3>
            <p className="text-[12px] text-muted mb-3">数值取自各仓库自述。</p>
            <HardwareChart projects={t.projects} />
          </div>
        </div>
      </Sec>

      <Sec {...SEC.axis} sub="由低到高：先出片 → 要控制 → 沉淀方法。">
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
      </Sec>
      </div>
    </div>
  );
}

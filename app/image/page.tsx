import type { Metadata } from "next";
import Link from "next/link";
import TruthTable, { Legend } from "@/components/TruthTable";
import MobileStack from "@/components/MobileStack";
import BackLink from "@/components/BackLink";
import { atlas, capsOf, domainModels, tracksOf } from "@/lib/atlas";

/**
 * 第二个方向：AI 图像。
 *
 * ## 这一页存在的意义是**检验架子**
 *
 * 它用的是**和 AI 视频首页完全同一个 `TruthTable` 组件、同一个 `Legend`**，
 * 一行组件代码都没改 —— 换的只有轨（`still` 而不是 `clip`）。
 * 如果这里能正确渲染出图像的能力表，就说明「轨是方向的属性、不是全局枚举」
 * 那次改造是真的成立；如果不能，说明架子里还藏着视频特有的假设。
 *
 * **所以这一页不做任何图像专属的特殊处理。** 一旦开始为它写特例，
 * 就等于承认「换方向要改前端」，那这次重构就白做了。
 *
 * ## 为什么是独立一页而不是切换器
 *
 * 本仓是静态导出（`output: "export"`），没有运行时可以按用户选择换数据源。
 * 方向只能落在路由上。先用最直白的一条 `/atlas/image` 把它跑通并验证，
 * 至于最终是 `/atlas/[domain]/...` 还是别的形态，等两个方向都成型再定 ——
 * 现在就抽象，抽的是想象中的第三个方向。
 */
const DOM = atlas.domains.find((d) => d.id === "image")!;

export const metadata: Metadata = {
  title: `${DOM.name} · 能力核验规格书`,
  description: "AI 图像模型能做什么：文生图、指令编辑、蒙版重绘、扩图、多图参考、文字渲染…每一格都带厂商官方原文。",
};

export default function ImagePage() {
  const [track] = tracksOf(DOM);
  const models = domainModels("image");
  const core = models.filter((m) => (m.tier ?? "core") === "core");
  const caps = capsOf(track.id);
  const cells = atlas.support.filter((s) => core.some((m) => m.id === s.m));
  const yes = cells.filter((s) => s.state === "yes").length;

  return (
    <main className="max-w-[1400px] mx-auto px-6 py-8">
      <BackLink />

      <header className="flex items-end gap-4 border-b-[2.5px] border-ink pb-2.5 mt-3">
        <h1 className="text-[38px] leading-[1.05] font-bold tracking-[-.01em]">
          {DOM.name} · 能力核验规格书
          <span className="block text-[15px] leading-[1.3] font-normal text-muted mt-2">
            {track.zh} —— {track.note}
          </span>
        </h1>
        <div className="ml-auto text-right text-[12px] leading-[1.7] text-muted whitespace-nowrap">
          核验于 {atlas.generated_at}
          <br />
          产品线 {models.length} 条 · 进表 {core.length} 条
          <br />
          能力 {caps.length} 项 · 已核 {yes} 格
        </div>
      </header>

      {/* **这一行是重点**：和首页第一卷用的是同一个组件，只换了轨 */}
      <div className="mt-4">
        <TruthTable k={track.id} />
      </div>
      <div className="mt-3">
        <Legend />
      </div>

      {/* 手机端：桌面那张表是 hidden md:block，这里得有兜底，否则手机上整页没有表 */}
      <div className="mt-6">
        <MobileStack k={track.id} />
      </div>

      {/*
        这个方向还没做完，页面上就得说清楚 —— **半成品最忌讳装成成品**。
        ⬜ 在这里比在视频那边多得多，原因不是厂商不透明，是我们还没读完那些文档。
      */}
      <section className="mt-8 border border-unknown/40 bg-unknown/6 p-4 text-[13.5px] leading-relaxed">
        <b>这个方向还在建。</b>
        {DOM.state !== "live" && <span className="ml-1">当前状态：{DOM.state}。</span>}
        库里共 {models.length} 条产品线，其中 {core.length} 条已经逐格核过、进上表；
        其余 {models.length - core.length} 条只证明了「它存在」，还没有逐格核验 ——
        在 <Link href="/models" className="underline hover:text-yes-ink">全部模型</Link> 里能看到。
        <br />
        <b className="text-ink">⬜ 比视频那边多得多，原因是我们还没读完那些官方文档，不是厂商不透明。</b>
        口径见 <Link href="/method#states" className="underline hover:text-yes-ink">方法</Link>。
      </section>
    </main>
  );
}

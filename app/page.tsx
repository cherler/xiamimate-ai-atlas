import type { Metadata } from "next";
import Link from "next/link";
import { atlas, domainModels, tracksOf } from "@/lib/atlas";
import Share from "@/components/Share";

/**
 * `/atlas` 根路径 = **方向选择页**。
 *
 * 每个方向都带自己的前缀（`/atlas/video`、`/atlas/image`），包括第一个 ——
 * 负责人 2026-08-11 定。**不让第一个方向霸占根路径**：那会让它看起来是「主体」、
 * 后来的都是附属品，加第三个方向时这个不对称立刻变成负担（根到底属于谁？）。
 *
 * 静态导出没有服务端重定向，所以这里不是跳转，是一页真正的入口 ——
 * 它顺带回答了一个之前没地方回答的问题：**这个站到底covers 几个方向、各自做到哪一步了。**
 */
export const metadata: Metadata = {
  title: "AI 能力核验 —— 谁能做什么，每一格都带官方原文",
  description: "按方向分卷：AI 视频、AI 图像。能力矩阵、演化谱系、公司关系、应用路线，每条事实都带厂商官方来源与核验日期。",
};

export default function Pick() {
  return (
    <main data-page="home" className="max-w-[1000px] mx-auto px-6 py-12">
      <header className="flex items-end gap-4 border-b-[2.5px] border-ink pb-3">
        <h1 className="text-[38px] leading-[1.05] font-bold tracking-[-.01em]">
          先选一个方向
          <span className="block text-[15px] leading-[1.3] font-normal text-muted mt-2">
            每个方向一套独立的能力轴 —— 硬并成一张表会把两边都讲错
          </span>
        </h1>
        {/* 右上角，和其余各页同一个位置 —— 一个每页都在别处的按钮，等于每页都要重新找 */}
        <div className="ml-auto whitespace-nowrap">
          <Share og="/atlas/og/index-16x9.png" title="虾米看AI · AI 能力核验" />
        </div>
      </header>

      <div className="mt-8 flex flex-col gap-4">
        {atlas.domains.map((d) => {
          const ms = domainModels(d.id);
          const core = ms.filter((m) => (m.tier ?? "core") === "core").length;
          const cells = atlas.support.filter((s) => ms.some((m) => m.id === s.m));
          const yes = cells.filter((s) => s.state === "yes").length;
          return (
            <Link key={d.id} data-domain-card href={`/${d.id}`}
              className="border border-rule rounded-xl bg-card px-5 py-5 hover:border-yes hover:bg-yes/5 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="text-[26px] font-bold">{d.name}</span>
              {d.state !== "live" && (
                <span className="text-[11px] px-1.5 py-0.5 bg-unknown/20 text-unknown">建设中</span>
              )}
              <span className="text-[13px] text-muted">
                {tracksOf(d).map((t) => t.zh).join(" · ")}
              </span>
              <span className="ml-auto text-[12px] text-muted tabular-nums whitespace-nowrap">
                产品线 {ms.length} 条 · 进表 {core} 条 · 已核 {yes} 格
              </span>
            </Link>
          );
        })}
      </div>

      <p className="mt-8 text-[12.5px] text-muted leading-relaxed">
        <b className="text-ink">「已核」只数带官方原文的那些。</b>
        ⬜ 不是缺口，是一条事实：我们查了、公开渠道没说。各卷 ⬜ 密度不同，
        密的那卷是我们还没读完文档 —— 方向页里写着。
        <Link href="/method" className="underline ml-1 hover:text-ink">口径 →</Link>
      </p>

      {/**
        * 公共页入口。**和四个方向首页那一排完全一样、顺序也一样** ——
        * 负责人 2026-08-12 提：这几条应该在首页也能看到。
        *
        * 为什么值得在这里再放一遍：这一页是**进站第一屏**，而它原来只有四个方向卡片，
        * 一个还没决定看哪个方向的人，从这里出不去别的地方。
        * 顺序不变（/basics 打头）：连 FP8 是什么都不知道的人，后面三条对他都用不上。
        */}
      <nav className="mt-10 border-t-[.5px] border-rule pt-3 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted">
        {[
          ["/basics", "看不懂那些词？先看这里"],
          ["/changes", "最近有什么变化"],
          ["/caveats", "能力对了，未必用得上"],
          ["/toolkit", "想查一件事，去哪个站"],
        ].map(([href, zh]) => (
          <Link key={href} href={href} className="hover:text-ink underline">{zh} →</Link>
        ))}
      </nav>
    </main>
  );
}

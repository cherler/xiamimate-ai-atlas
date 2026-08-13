import type { Metadata } from "next";
import BackLink from "@/components/BackLink";
import Share from "@/components/Share";
import Search from "@/components/Search";
import { atlas } from "@/lib/atlas";

/**
 * 全站搜索页。**负责人 2026-08-13：「整个 ai-atlas 居然是没有搜索框的。这是个大缺陷」。**
 *
 * ## 事实比这句话还糟一点
 *
 * 搜索**早就做了**（方案 §13 的 Answer View），但它只挂在方向首页
 * `/[domain]` 的中下部「自己上手查」那一节里 —— 其余 500 多个页面一个入口都没有。
 * **做了但找不到，和没做是一回事**；负责人用了这个站十几天没发现它，就是证据。
 *
 * 所以这一页只干一件事：给搜索一个**自己的地址**，再由导航条挂到每一页上。
 *
 * ## 为什么单独一页，而不是把搜索框塞进导航条
 *
 * 搜索框要好用就得给结果留地方（Answer View 会直接列出「17 个模型支持动作复刻」
 * 这样的清单）。塞进那条 48px 高的导航里，结果只能挤成一个下拉小窗。
 * 更实际的一条：**导航在每一页都渲染**，把整个搜索组件塞进去，
 * 它依赖的那份数据就会跟着进每一页的包 —— 而「前端包里带着 619KB 图谱数据」
 * 这件事负责人已经明确说过「先不动」。一个链接不带任何数据。
 */
export const metadata: Metadata = {
  // ⚠️ **别在 title 里再拼一次站名** —— 根 layout 的模板已经在后面加了「｜虾米看AI」，
  // 自己再拼一遍就成了「搜一个问题 · 虾米看AI｜虾米看AI」（验收会抓）
  title: "搜一个问题",
  description:
    "搜模型名、能力名，或者直接问「哪些模型支持动作复刻」「哪些有开源权重」——" +
    "命中意图就直接给清单，给不出清单才退回普通检索。全站五卷一起搜。",
  openGraph: { images: [{ url: "/atlas/og/index-16x9.png", width: 1200, height: 675 }] },
};

export default function SearchPage() {
  const live = atlas.domains.filter((d) => d.state === "live");
  const models = atlas.models.length;
  const caps = atlas.capabilities.length;

  return (
    /**
      * ⚠️ **外层必须是 `<main>`，不是 `<div>`。**
      * 验收脚本量中文字数、扫跨方向混入，取的都是 `document.querySelector("main")` ——
      * 没有 main 的页面会被**静默量成 0 字**，看起来「通过」，其实根本没量。
      * 第一版就是 div，是在浏览器里 `locator("main")` 超时才发现的。
      */
    <main className="mx-auto max-w-[900px] px-8 pt-5 pb-16 flex flex-col gap-6">
      <div className="flex items-baseline justify-between gap-3">
        <BackLink />
        <Share og="/atlas/og/index-16x9.png" title="搜一个问题" />
      </div>

      <header className="flex flex-col gap-3 border-b border-rule pb-5">
        <h1 className="text-[40px] leading-tight font-semibold">搜一个问题</h1>
        <p className="text-[15px] leading-relaxed text-muted">
          <b className="text-ink">五卷一起搜</b>（{live.map((d) => d.name).join(" · ")}）——
          {models} 条产品线、{caps} 项能力都在里面。
          问「哪些模型支持动作复刻」这类问题，<b className="text-ink">直接给清单，不是给一串链接</b>；
          问不出清单的才退回普通检索。
        </p>
      </header>

      {/* 进这一页的人是来打字的，光标直接落进去 */}
      {/* 全站页才敢放各卷的具体名字：它本来就是跨方向的，不受方向隔离约束 */}
      <Search autoFocus examples={["哪些模型支持动作复刻", "AI短剧", "骨骼绑定", "哪些有开源权重", "Seedance 在哪用", "FP8"]} />

      <p className="text-[13px] leading-relaxed text-muted border-t border-rule pt-4">
        <b className="text-ink">搜不到不代表没有。</b>
        这里搜的是<b className="text-ink">我们已经录进库并逐格核过的东西</b> —— 一个型号没出现，
        可能是它还在候选里没收，也可能是它压根不属于这五卷。
        口径见 <a href="/atlas/method" className="underline hover:text-ink">方法</a>。
      </p>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Tree from "@/components/Tree";
import { atlas } from "@/lib/atlas";

/** 演化树。**这一页是分发引擎** —— 分享图带来的人落在这里，所以它必须有出口。 */
export const metadata: Metadata = {
  title: "AI 视频模型演化树 —— 谁在什么时候长出了什么",
  description: "每个节点是一次发布，写明这一代新增了什么。开源实心、闭源空心，日期取自厂商官方发布记录。",
  openGraph: {
    title: "AI 视频模型演化树 —— 67 次发布，14 条产品线",
    description: "时间做纵轴，开源与闭源两条主干。每个节点写明这一代新增了什么，日期取自厂商官方发布记录。",
    images: [{ url: "/atlas/og/tree-16x9.png", width: 1200, height: 675 }],
  },
  twitter: { card: "summary_large_image", images: ["/atlas/og/tree-16x9.png"] },
};

export default function TreePage() {
  const lines = new Set(atlas.versions.map((v) => v.m)).size;
  const since = atlas.versions.map((v) => v.date).sort()[0];

  return (
    /**
     * 页眉与「现在 / 关系 / 场景」同一套：1400 宽、38px 粗标题压 2.5px 黑线、
     * 右侧靠边放核验日期与计数。**四个主页面是一组，长得不一样就是没做完。**
     * 实心/空心的图例归 Tree 自己（它下面已经有一份），这里不再重复一遍。
     */
    <main className="max-w-[1400px] mx-auto px-6 py-8">
      <header className="flex items-end gap-4 border-b-[2.5px] border-ink pb-2.5">
        <h1 className="text-[38px] leading-[1.05] font-bold tracking-[-.01em]">
          谁在什么时候，长出了什么
          <span className="block text-[15px] leading-[1.3] font-normal text-muted mt-2">
            {lines} 条产品线的每一次发布 —— 点上写的是这一代新增了什么，不是版本号
          </span>
        </h1>
        <div className="ml-auto text-right text-[12px] leading-[1.7] text-muted whitespace-nowrap">
          核验于 {atlas.generated_at}
          <br />
          发布记录 {atlas.versions.length} 次
          <br />
          最早 {since}
        </div>
      </header>

      <div className="mt-6 bg-card border border-rule p-4">
        <Tree />
      </div>

      <p className="mt-6 text-[12px] text-muted">
        每个点＝厂商官方发布记录里的一次发布，日期与「新增了什么」都取自官方原文。
        <Link href="/method#genealogy" className="underline ml-1 hover:text-ink">
          口径 →
        </Link>
      </p>
    </main>
  );
}

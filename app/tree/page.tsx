import type { Metadata } from "next";
import Tree from "@/components/Tree";
import { atlas } from "@/lib/atlas";

/** 演化树。**这一页是分发引擎** —— 分享图带来的人落在这里，所以它必须有出口。 */
export const metadata: Metadata = {
  title: "AI 视频模型演化树 —— 谁在什么时候长出了什么",
  description: "每个节点是一次发布，写明这一代新增了什么。开源实心、闭源空心，日期取自厂商官方发布记录。",
};

export default function TreePage() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 flex flex-col gap-4">
      <h1 className="text-[28px] font-semibold leading-tight">谁在什么时候，长出了什么</h1>
      <p className="text-muted text-[15px] max-w-[860px]">
        {atlas.versions.length} 次发布，{new Set(atlas.versions.map((v) => v.m)).size} 条产品线，
        从 {atlas.versions.map((v) => v.date).sort()[0]} 到今天。左开源、右闭源。
      </p>
      <div className="bg-card border border-rule rounded-xl p-4">
        <Tree />
      </div>
    </main>
  );
}

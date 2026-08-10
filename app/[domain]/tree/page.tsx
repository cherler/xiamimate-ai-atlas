import type { Metadata } from "next";
import Link from "next/link";
import Tree from "@/components/Tree";
import { atlas, domainModels } from "@/lib/atlas";
import { domainOf } from "../dom";

/** 演化树。**这一页是分发引擎** —— 分享图带来的人落在这里，所以它必须有出口。 */
export async function generateMetadata(
  { params }: { params: Promise<{ domain: string }> },
): Promise<Metadata> {
  const d = domainOf((await params).domain);
  return {
    title: `${d.name} · 谁在什么时候，长出了什么`,
    description: "每个节点是一次发布，写明这一代新增了什么。日期取自厂商官方发布记录。",
  };
}

export default async function TreePage({ params }: { params: Promise<{ domain: string }> }) {
  const d = domainOf((await params).domain);
  const mine = new Set(domainModels(d.id).map((m) => m.id));
  const vs = atlas.versions.filter((v) => mine.has(v.m));
  const lines = new Set(vs.map((v) => v.m)).size;
  const since = vs.map((v) => v.date).sort()[0];

  return (
    /**
     * 页眉与「现在 / 关系 / 场景」同一套：1400 宽、38px 粗标题压 2.5px 黑线、
     * 右侧靠边放核验日期与计数。**四个主页面是一组，长得不一样就是没做完。**
     * 实心/空心的图例归 Tree 自己（它下面已经有一份），这里不再重复一遍。
     */
    <main className="max-w-[1400px] mx-auto px-6 py-8">
      <header className="flex items-end gap-4 border-b-[2.5px] border-ink pb-2.5">
        <h1 className="text-[38px] leading-[1.05] font-bold tracking-[-.01em]">
          {d.name} · 谁在什么时候，长出了什么
          <span className="block text-[15px] leading-[1.3] font-normal text-muted mt-2">
            {lines} 条产品线的每一次发布 —— 点上写的是这一代新增了什么，不是版本号
          </span>
        </h1>
        <div className="ml-auto text-right text-[12px] leading-[1.7] text-muted whitespace-nowrap">
          核验于 {atlas.generated_at}
          <br />
          发布记录 {vs.length} 次
          <br />
          最早 {since}
        </div>
      </header>

      {vs.length ? (
        <div className="mt-6 bg-card border border-rule p-4">
          <Tree />
        </div>
      ) : (
        /* **没有数据就说没有，不画一棵空树。** 空图比没有图更让人以为「这个方向没东西长出来」。 */
        <div className="mt-6 border border-unknown/40 bg-unknown/6 p-5 text-[14px] leading-relaxed">
          <b>这个方向还没采谱系。</b>
          {" "}演化树的每个点都要一条**厂商官方发布记录**（日期 + 这一代新增了什么），
          {d.name}这边我们一条都还没采 —— <b className="text-ink">所以这里是空的，不是它没有历史。</b>
        </div>
      )}

      <p className="mt-6 text-[12px] text-muted">
        每个点＝厂商官方发布记录里的一次发布，日期与「新增了什么」都取自官方原文。
        <Link href="/method#genealogy" className="underline ml-1 hover:text-ink">
          口径 →
        </Link>
      </p>
    </main>
  );
}

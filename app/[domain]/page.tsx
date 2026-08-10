import type { Metadata } from "next";
import Link from "next/link";
import TruthTable, { Legend } from "@/components/TruthTable";
import MobileStack from "@/components/MobileStack";
import Explorer from "@/components/Explorer";
import TaskPicker from "@/components/TaskPicker";
import Search from "@/components/Search";
import { atlas, domainModels, tracksOf } from "@/lib/atlas";
import { domainOf } from "./dom";

/**
 * 方向首页 = 那个方向的能力核验规格书。
 *
 * **一份代码渲染所有方向。** 视频有两轨（离线出片 / 实时交互），图像只有一轨；
 * 这里按 `domains[].tracks` 循环，卷名、轨名、说明全从数据取 ——
 * 没有任何 `k === "clip" ? … : …` 这种写法。加第三个方向不改这个文件。
 */
export async function generateMetadata(
  { params }: { params: Promise<{ domain: string }> },
): Promise<Metadata> {
  const d = domainOf((await params).domain);
  return {
    title: `${d.name} · 能力核验规格书`,
    description: `${d.name}：谁能做什么、什么时候长出来的、拿什么跑。每一格都带厂商官方原文与核验日期。`,
  };
}

export default async function DomainHome({ params }: { params: Promise<{ domain: string }> }) {
  const d = domainOf((await params).domain);
  const tracks = tracksOf(d);
  const models = domainModels(d.id);
  /** 第三卷那套交互目前只服务视频（Explorer / TaskPicker 的能力轴钉在 clip 上）。 */
  const hasExplorer = d.id === "video";

  /**
   * **不要带 `data-page="home"`。** 那个记号是出站验证判断
   * 「这一页是不是兜底成了根页」的唯一稳定锚点（不能用文案，文案会改）。
   * 方向首页也带上的话，`/video` 会被判成「回退到根页」而报红 ——
   * 第一次改路由就撞上了。记号只属于根路径那一页。
   */
  return (
    <main data-page="domain" className="max-w-[1400px] mx-auto px-6 py-8">
      {tracks.map((t, i) => (
        <section key={t.id} className={i ? "mt-14" : ""}>
          <header className="flex items-end gap-4 border-b-[2.5px] border-ink pb-2.5">
            <h1 className="text-[38px] leading-[1.05] font-bold tracking-[-.01em]">
              {i === 0 ? `${d.name} · 能力核验规格书` : `${t.volume ?? ""} · ${t.zh}`}
              <span className="block text-[15px] leading-[1.3] font-normal text-muted mt-2">
                {i === 0 ? [t.volume, t.zh].filter(Boolean).join(" · ") : ""}
                {i === 0 && t.note ? ` —— ${t.note}` : ""}
                {i > 0 ? t.note : ""}
              </span>
            </h1>
            {i === 0 && (
              <div className="ml-auto text-right text-[12px] leading-[1.7] text-muted whitespace-nowrap">
                核验于 {atlas.generated_at}
                <br />
                产品线 {models.length} 条
                <br />
                引用官方来源 {Object.keys(atlas.sources).length} 处
              </div>
            )}
          </header>
          <div className="mt-4">
            <TruthTable k={t.id} />
          </div>
          {i === 0 && (
            <>
              <Legend />
              <MobileStack k={t.id} />
            </>
          )}
        </section>
      ))}

      <p className="mt-5 text-[13px] text-muted">
        代表性视图，不是完整列表 ——
        <Link href={`/${d.id}/models`} className="underline ml-1 hover:text-ink">
          查看全部 {models.length} 个模型 →
        </Link>
      </p>

      {hasExplorer && (
        <section className="mt-14">
          <header className="border-b-[2.5px] border-ink pb-2.5">
            <h2 className="text-[38px] leading-[1.05] font-bold tracking-[-.01em]">
              自己上手查
              <span className="block text-[15px] leading-[1.3] font-normal text-muted mt-2">
                点右边一项能力看谁实现了它，点左边两个模型比一比 —— 或者直接搜一个问题
              </span>
            </h2>
          </header>
          <div className="mt-4"><Explorer /></div>
          <div className="mt-4"><TaskPicker /></div>
          <div className="mt-5"><Search /></div>
        </section>
      )}

      {/* **这个方向缺什么就说什么。** 半成品最忌讳装成成品。 */}
      {d.state !== "live" && (
        <section className="mt-10 border border-unknown/40 bg-unknown/6 p-4 text-[13.5px] leading-relaxed">
          <b>这个方向还在建。</b>
          {" "}库里 {models.length} 条产品线，{models.filter((m) => (m.tier ?? "core") === "core").length} 条已逐格核过、进上表。
          <b className="text-ink"> ⬜ 比 AI 视频那边多得多，原因是我们还没读完那些官方文档，不是厂商不透明。</b>
          {!hasExplorer && " 「自己上手查」那一节还没接到这个方向。"}
        </section>
      )}

      <nav className="mt-12 border-t-[.5px] border-rule pt-3 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted">
        {[
          ["/changes", "最近有什么变化"],
          ["/caveats", "能力对了，未必用得上"],
          ["/toolkit", "想查一件事，去哪个站"],
          [`/${d.id}/models`, `全部 ${models.length} 个模型`],
        ].map(([href, zh]) => (
          <Link key={href} href={href} className="hover:text-ink underline">{zh} →</Link>
        ))}
      </nav>

      <footer className="mt-6 border-t-[.5px] border-rule pt-3 text-[12px] leading-[1.6] text-muted">
        数据 {atlas.version} · 核验于 {atlas.generated_at} ·{" "}
        <Link href="/method#agent" className="underline hover:text-ink">机器录入</Link>
      </footer>
    </main>
  );
}

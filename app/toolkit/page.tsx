import type { Metadata } from "next";
import Link from "next/link";
import { Rich } from "@/components/Fact";
import { atlas } from "@/lib/atlas";

/**
 * 资源导航（方案 §16）。原话：**「不要做一排 Logo 的 hao123」，要「导航 + 判断」。**
 *
 * 所以每一条的主体是**我们的判断**，链接只是附带。
 * 而 `caveat`（负面结论）是校验强制必填的那一栏 ——
 * **「Epoch AI 不收视频模型」这种我们真查过才知道的话，才是这一页的价值。**
 * 一个只有链接和好话的导航页，别处到处都是。
 */
export const metadata: Metadata = {
  title: "想查一件事，该去哪个站 —— 附我们踩过的坑",
  description: "按任务导航，每条带我们自己的判断和负面结论：Epoch AI 不收视频模型；AA 量的是画质不是能力；HF 的「权重公开」不等于开源协议。",
  openGraph: { images: [{ url: "/atlas/og/index-16x9.png", width: 1200, height: 675 }] },
};

export default function ToolkitPage() {
  return (
    <main className="max-w-[900px] mx-auto px-5 py-8 flex flex-col gap-6">
      <header className="flex flex-col gap-2 border-b-[2.5px] border-ink pb-4">
        <h1 className="text-[38px] font-bold leading-tight tracking-[-.01em]">想查一件事，该去哪个站</h1>
        <p className="text-muted text-[15px]">
          {atlas.toolkit.length} 条 · 每条带我们自己的判断，<b className="text-ink">包括「别去」的那部分</b>
        </p>
      </header>

      <div className="flex flex-col">
        {atlas.toolkit.map((t, i) => (
          <section key={t.site + t.task} className="border-t border-rule py-4 flex gap-4">
            <span className="text-[15px] text-muted tabular-nums shrink-0 w-7 pt-1">{String(i + 1).padStart(2, "0")}</span>
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <p className="text-[13px] text-muted">{t.task}</p>
              <p className="text-[18px] font-semibold">
                <a href={t.url} target="_blank" rel="noreferrer" className="underline hover:text-yes-ink">{t.site} →</a>
              </p>
              <Rich text={t.verdict} className="text-[15px] leading-relaxed" />
              {/* 负面结论单独描出来 —— 它是这一页真正值钱的部分 */}
              <div className="border-l-2 border-no pl-3 mt-1">
                <Rich text={t.caveat} className="text-[14px] leading-relaxed text-muted" />
              </div>
              <p className="text-muted text-[12px]">核验于 {t.checked_at}</p>
            </div>
          </section>
        ))}
      </div>

      <p className="text-muted text-[13px]">
        我们自己的口径在
        <Link href="/method" className="underline mx-1 hover:text-ink">方法</Link>
        那一页。
      </p>
    </main>
  );
}

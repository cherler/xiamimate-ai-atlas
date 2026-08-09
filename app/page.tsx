import Link from "next/link";
import TruthTable, { Legend } from "@/components/TruthTable";
import Explorer from "@/components/Explorer";
import MobileStack from "@/components/MobileStack";
import TaskPicker from "@/components/TaskPicker";
import Search from "@/components/Search";
import { atlas, capsOf, cell, modelsOf } from "@/lib/atlas";

/**
 * 首页 = 规格书第一页（docs/视觉方案_V1.md）。
 *
 * 顺序按「读者要投入多少」排，越往下要求越多：
 *   真值表   零操作，扫一眼就懂         ← 首屏全部装下，不用滚
 *   脚注     想追一句原文才往下看
 *   实时轨   知道还有另一套坐标系
 *   任务入口 已经知道自己要干嘛了
 * 反过来排，第一屏就把人劝退了 —— 上一版就是这么劝退的。
 *
 * 这一页不解释自己。口径全在 <Legend/> 那一行和 /method。
 */
export default function Home() {
  const ms = modelsOf("clip");
  const cs = capsOf("clip");
  // data-page="home" 是给检查器认「有没有兜底到首页」的记号。**别拿会变的文案当锚点。**
  return (
    <main data-page="home" className="max-w-[1400px] mx-auto px-6 py-8">
      <header className="flex items-end gap-4 border-b-[2.5px] border-ink pb-2.5">
        <h1 className="text-[38px] leading-[1.05] font-bold tracking-[-.01em]">
          AI 视频 · 能力核验规格书
          <span className="block text-[15px] leading-[1.3] font-normal text-muted mt-2">
            第一卷 · 离线出片轨 —— 给定条件，渲染一段固定长度的成片
          </span>
        </h1>
        <div className="ml-auto text-right text-[12px] leading-[1.7] text-muted whitespace-nowrap">
          核验于 {atlas.generated_at}
          <br />
          发布记录 {atlas.versions.length} 次
          <br />
          引用官方来源 {Object.keys(atlas.sources).length} 处
        </div>
      </header>

      <div className="mt-4">
        <TruthTable k="clip" />
      </div>
      <Legend />
      <MobileStack />

      <p className="mt-5 text-[13px] text-muted">
        代表性视图，不是完整列表 ——
        <Link href="/models" className="underline ml-1 hover:text-ink">
          查看全部 {atlas.models.length} 个模型 →
        </Link>
      </p>

      {/*
        实时交互轨拉回首页（负责人 2026-08-09）。它们不并进上表 ——
        Vidu S1、Lucy 这些在离线轨 10 项能力上 10/10 全「没说」，因为它们根本不做
        首尾帧、视频延长这类事。硬塞进上表就是两列整列斜线，让人以为「它俩啥都不行」，
        其实是用错了尺子。所以另起一张同语言的表，能力轴是它们自己的。
      */}
      {/* 标题格式对齐第一卷的 h1（大标题 + 副标题一行）；描述压到一行，不换行。 */}
      <section className="mt-14">
        <header className="border-b-[2.5px] border-ink pb-2.5">
          <h2 className="text-[38px] leading-[1.05] font-bold tracking-[-.01em]">
            第二卷 · 实时交互轨
            <span className="block text-[15px] leading-[1.3] font-normal text-muted mt-2">
              边生成边看、中途可干预、时长不预先确定 —— 它们和上表不共用坐标系，硬并成一张表会把两边都讲错
            </span>
          </h2>
        </header>
        <div className="mt-4">
          <TruthTable k="realtime" />
        </div>
      </section>

      <section className="mt-14">
        <header className="border-b-[2.5px] border-ink pb-2.5">
          <h2 className="text-[38px] leading-[1.05] font-bold tracking-[-.01em]">
            你想做什么
            <span className="block text-[15px] leading-[1.3] font-normal text-muted mt-2">
              点右边一项能力看谁实现了它，点左边两个模型比一比 —— 或者直接搜一个问题
            </span>
          </h2>
        </header>
        <div className="mt-4">
          <Explorer />
        </div>
        <div className="mt-4">
          <TaskPicker />
        </div>
        <div className="mt-5">
          <Search />
        </div>
      </section>

      {/*
        次级入口。三张图（现在/演变/关系）在顶部导航；这些是复访与长尾层 ——
        不占主导航（北极星），但也不能变成孤岛，从这里进得去。
        文案写「问题」不写页面名 —— 读者关心自己的下一个问题，不是我们的信息架构。
      */}
      <nav className="mt-12 border-t-[.5px] border-rule pt-3 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted">
        {[
          ["/changes", "最近变了什么"],
          ["/skill", "这几件事怎么做"],
          ["/caveats", "能力对了，未必用得上"],
          ["/toolkit", "想查一件事，去哪个站"],
          ["/models", `全部 ${atlas.models.length} 个模型`],
        ].map(([href, zh]) => (
          <Link key={href} href={href} className="hover:text-ink underline">
            {zh} →
          </Link>
        ))}
      </nav>

      <footer className="mt-6 border-t-[.5px] border-rule pt-3 text-[12px] leading-[1.6] text-muted">
        数据 {atlas.version} · 核验于 {atlas.generated_at} ·{" "}
        <Link href="/method#agent" className="underline hover:text-ink">
          机器录入，未经人工核验
        </Link>
      </footer>
    </main>
  );
}

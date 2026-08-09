import Link from "next/link";
import TruthTable, { Legend } from "@/components/TruthTable";
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
  const t = { yes: 0, no: 0, unknown: 0 };
  for (const m of ms) for (const c of cs) t[cell(m.id, c.id).state] += 1;
  const cells = ms.length * cs.length;

  const SPEC: [string, number, string][] = [
    ["模型", ms.length, ""],
    ["能力项", cs.length, ""],
    ["格子", cells, ""],
    ["有出处", t.yes, "text-yes-ink"],
    ["明确不支持", t.no, ""],
    ["厂商没说", t.unknown, "opacity-30"],
  ];

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

      <div className="grid grid-cols-3 md:grid-cols-6 border-b-[2.5px] border-ink">
        {SPEC.map(([k, v, cls]) => (
          <div key={k} className="py-3 border-r-[.5px] border-rule last:border-r-0">
            <div className="text-[12px] tracking-[.08em] text-muted">{k}</div>
            <div className={`text-[33px] leading-none mt-1.5 tabular-nums ${cls}`}>{v}</div>
          </div>
        ))}
      </div>

      <TruthTable k="clip" />
      <Legend />
      <MobileStack />

      <p className="mt-5 text-[13px] text-muted">
        代表性视图，不是完整列表 ——
        <Link href="/models" className="underline ml-1 hover:text-ink">
          查看全部 {atlas.models.length} 个模型 →
        </Link>
      </p>

      <p className="mt-3 text-[13px] text-muted">
        另有 {modelsOf("realtime").length} 个<b className="text-ink font-normal">实时交互</b>模型 ——
        边生成边看、中途可干预、时长不预先确定，它们走的是另一套能力轴，不和上表混算。
        <Link href="/models#realtime" className="underline ml-1 hover:text-ink">看那一轨 →</Link>
      </p>

      <section className="mt-12">
        <h2 className="text-[13px] tracking-[.2em] text-muted border-b-[2.5px] border-ink pb-2">
          你想做什么
        </h2>
        <div className="mt-3">
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

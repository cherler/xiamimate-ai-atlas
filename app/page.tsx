import Link from "next/link";
import CapabilityBars from "@/components/CapabilityBars";
import TaskPicker from "@/components/TaskPicker";
import Search from "@/components/Search";
import { atlas, capsOf, modelsOf, tally } from "@/lib/atlas";

/**
 * 首页（方案 §8）。
 *
 * 结构由动线决定，不由数据结构决定（§17：**不要让数据库结构直接决定页面**）：
 *   第一屏  这个领域走到哪一步了 —— 能力横条图
 *   第二屏  你想做什么 —— 任务入口，动线 A 的起点
 *   第三屏  看全局 —— 演化树 / 关系图的入口，不在这里展开
 *
 * §8.2 是硬要求：标明「代表性视图，不是完整列表」并给出「查看全部」。
 * 口径一律去 /method，这一页不解释自己。
 */
export default function Home() {
  const t = tally("clip");
  const n = modelsOf("clip").length;

  // data-page="home" 是给检查器认「有没有兜底到首页」的记号。
  // 原来靠首页那句 h1 判断，我一改文案判断就失效了 —— **别拿会变的文案当锚点。**
  return (
    <main data-page="home" className="max-w-[1240px] mx-auto px-5 py-8 flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <h1 className="text-[34px] md:text-[42px] font-semibold leading-[1.15] tracking-tight">
          AI 视频走到了哪一步
        </h1>
        <p className="text-[16px] text-muted max-w-[720px]">
          {n} 个模型 × {capsOf("clip").length} 项能力，逐格用厂商官方文档核过。
          <b className="text-yes"> ✅{t.yes}</b>
          <b className="text-no"> ❌{t.no}</b>
          <b className="text-unknown"> ⬜{t.unknown}</b>
          <Link href="/method#states" className="underline ml-2 hover:text-ink">这三个符号什么意思 →</Link>
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <CapabilityBars />
        <p className="text-muted text-[13px]">
          代表性视图，不是完整列表 ——
          <Link href="/models" className="underline ml-1 hover:text-ink">查看全部 {atlas.models.length} 个模型 →</Link>
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-[22px] font-semibold">你想做什么</h2>
        <TaskPicker />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-[22px] font-semibold">或者搜一个问题</h2>
        <Search />
      </section>

      <section className="grid md:grid-cols-3 gap-3">
        {[
          { href: "/tree", t: "谁在什么时候长出了什么", d: `${atlas.versions.length} 次发布，带厂商原文` },
          { href: "/map", t: "谁是谁家的，谁能做什么", d: "模型通过能力互相连接" },
          { href: "/where", t: "去哪用，多少钱", d: `${atlas.availability.length} 条上架记录，${atlas.pricing.length} 条价格` },
        ].map((c) => (
          <Link key={c.href} href={c.href}
            className="border border-rule rounded-xl bg-card p-4 hover:border-yes flex flex-col gap-1">
            <span className="text-[17px] font-semibold">{c.t} →</span>
            <span className="text-muted text-[13px]">{c.d}</span>
          </Link>
        ))}
      </section>

      <footer className="border-t border-rule pt-5 text-[13px] text-muted">
        数据 {atlas.version} · 能力格核验于 {atlas.generated_at} ·
        <Link href="/method#agent" className="text-unknown underline hover:text-ink"> 机器录入，未经人工核验</Link>
      </footer>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Fact } from "@/components/Fact";
import { atlas, cell, label, modelsOf, vendorName, type Klass } from "@/lib/atlas";
import { modelHref } from "@/lib/slug";

/**
 * 能力页。回答 §1.4 里最常被问的那类问题：「我想做人物动作复刻，有哪些模型？」
 *
 * 这一页比模型页多两样东西，而它们正是这个项目吃过亏换来的：
 *  · **各家叫法（aliases）** —— Kling 管角色参考叫 Element、LTX 叫 Ingredients。
 *    不列出来，别人和我一样会因为搜不到而以为「没有」。
 *  · **最早可证时间与那句原文** —— 而不是一个没出处的年份。
 */
export function generateStaticParams() {
  return atlas.capabilities.map((c) => ({ id: c.id }));
}

// Next 15 起 params 是 Promise，必须 await —— 直接当对象用会在 build 时类型报错
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const c = atlas.capabilities.find((x) => x.id === id);
  if (!c) return {};
  const n = atlas.models.filter((m) => cell(m.id, c.id).state === "yes").length;
  return {
    title: `${c.zh}（${c.name}）—— 哪些 AI 视频模型支持`,
    description:
      `${n} 个模型支持${c.zh}。${c.aliases?.length ? `各家叫法：${c.aliases.slice(0, 5).join("、")}。` : ""}` +
      `每一格都带厂商官方来源与核验日期。`,
  };
}

export default async function CapabilityPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const c = atlas.capabilities.find((x) => x.id === id);
  if (!c) return null;
  const tracks: Klass[] = c.class === "both" ? ["clip", "realtime"] : [c.class as Klass];
  const src = c.since_src ? atlas.sources[c.since_src] : null;

  return (
    <main className="max-w-[980px] mx-auto px-8 py-10 flex flex-col gap-8">
      <nav className="text-[13px] text-muted">
        <Link href="/" className="underline hover:text-ink">
          AI 视频能力地图
        </Link>
        <span className="mx-2">/</span>
        <span>{c.zh}</span>
      </nav>

      <header className="flex flex-col gap-3">
        <h1 className="text-[40px] leading-tight font-semibold">
          {c.zh}
          <span className="text-muted text-[20px] font-normal ml-3">{c.name}</span>
        </h1>
        <p className="text-muted text-[15px]">
          {c.group} · {c.ubiquity}
        </p>

        {c.since ? (
          <p className="text-[15px] leading-relaxed">
            <b className="text-ink">最早可证 {c.since}</b>
            <span className="text-muted">
              {" "}—— 「{c.since_quote}」
              {src && (
                <>
                  {" "}
                  <a href={src.url} target="_blank" rel="noreferrer" className="underline hover:text-ink">
                    {src.name}
                  </a>
                </>
              )}
            </span>
            <span className="block text-muted text-[13px] mt-1">
              这是<b className="text-ink">我们手上的日志能证明的最早时间</b>，不是业界首次出现 ——
              可追溯窗口起于 2024-01。
            </span>
          </p>
        ) : (
          c.since_note && <p className="text-muted text-[15px]">{c.since_note}</p>
        )}

        {c.aliases?.length ? (
          <div className="text-[15px] leading-relaxed">
            <b className="text-ink">各家叫法</b>
            <span className="text-muted">：{c.aliases.join(" · ")}</span>
            <span className="block text-muted text-[13px] mt-1">
              同一件事，各家名字不同。<b className="text-ink">我们自己就因为按字面去搜而误判过</b> ——
              Kling 管角色参考叫 Element、LTX 叫 Ingredients，按 Character Reference 去找会一无所获，
              然后把「没找到」写成「官方没说」。
            </span>
          </div>
        ) : null}
      </header>

      {tracks.map((k) => (
        <section key={k}>
          <h2 className="text-[22px] font-semibold mb-3">
            {k === "clip" ? "离线出片轨" : "实时交互轨"}：谁实现了
          </h2>
          {modelsOf(k).map((m) => (
            <div key={m.id}>
              <Link href={modelHref(m)} className="text-[13px] text-muted underline hover:text-ink">
                {vendorName(m)}
              </Link>
              <Fact m={m.id} c={c.id} label={label(m)} />
            </div>
          ))}
        </section>
      ))}

      <footer className="border-t border-rule pt-5 text-[13px] text-muted leading-relaxed">
        数据版本 {atlas.version} · 核验于 {atlas.generated_at} ·
        <b className="text-unknown"> 全部为机器录入，未经人工核验</b>
      </footer>
    </main>
  );
}

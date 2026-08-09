import type { Metadata } from "next";
import Link from "next/link";
import { Rich } from "@/components/Fact";
import { atlas, cell, label } from "@/lib/atlas";
import { capHref, modelHref } from "@/lib/slug";

/**
 * Skill 页（方案 §10）。原话：**「Skill 必须是第一等公民。」**
 *
 * Skill 回答的是「**这件事怎么做**」，能力格回答的是「谁能做」—— 两个问题。
 * 所以这一页的骨架是 §10 给的那个：输入 → 输出，然后
 * 原生实现 / 开源实现 / 平台功能 / 已知限制 / 典型用例。
 *
 * **「已知限制」是必填的**（校验 R45）：一个没有限制的 Skill 页是在卖广告，不是在帮人。
 * 而且它恰恰是别处最难找的部分 —— 厂商不会写自己做不好什么。
 */
export function generateStaticParams() {
  return atlas.skills.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const s = atlas.skills.find((x) => x.id === id);
  if (!s) return {};
  return {
    title: `${s.zh}怎么做 —— 谁能做、拿什么做、有什么坑`,
    description: `${s.zh}（${s.en}）：${s.native?.length ?? 0} 个模型原生支持，开源侧有对应实现。含已知限制与官方来源。`,
    openGraph: { images: [{ url: `/atlas/og/capability-${s.cap ?? "t2v"}-16x9.png`, width: 1200, height: 675 }] },
  };
}

const Box = ({ t, children }: { t: string; children: React.ReactNode }) => (
  <section className="flex flex-col gap-1.5">
    <h2 className="text-[15px] font-semibold text-muted">{t}</h2>
    <div className="text-[15px] leading-relaxed">{children}</div>
  </section>
);

export default async function SkillPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const s = atlas.skills.find((x) => x.id === id);
  if (!s) return <main className="p-10">没有这个 Skill。</main>;
  const cap = s.cap ? atlas.capabilities.find((c) => c.id === s.cap) : null;

  return (
    <main className="max-w-[880px] mx-auto px-5 py-8 flex flex-col gap-7">
      <header className="flex flex-col gap-1">
        <h1 className="text-[30px] font-semibold leading-tight">{s.zh}</h1>
        <p className="text-muted text-[15px]">
          {s.en}
          {cap?.aliases?.length ? ` · 各家还叫它：${cap.aliases.slice(0, 5).join(" / ")}` : ""}
        </p>
      </header>

      {/* §10 的首屏就是输入 → 输出。**先让人看懂这件事长什么样**，再谈谁能做。 */}
      {s.io && (
        <div className="border border-rule rounded-xl bg-card p-5 flex flex-wrap items-center justify-center gap-4 text-[15px]">
          {s.io.in.map((x, i) => (
            <span key={x} className="flex items-center gap-4">
              {i > 0 && <span className="text-muted">+</span>}
              <span className="border border-rule rounded-lg px-4 py-3 bg-paper">{x}</span>
            </span>
          ))}
          <span className="text-muted text-[20px]">→</span>
          <span className="border border-yes rounded-lg px-4 py-3 text-yes font-medium">{s.io.out}</span>
        </div>
      )}

      <Box t="原生实现（一步做完）">
        {s.native?.length ? (
          <p className="flex flex-wrap gap-x-3 gap-y-1">
            {s.native.map((m) => {
              const md = atlas.models.find((x) => x.id === m)!;
              return <Link key={m} href={modelHref(md)} className="text-yes underline hover:text-ink">{label(md)}</Link>;
            })}
          </p>
        ) : <p className="text-unknown">还没有模型有明确的官方依据</p>}
      </Box>

      {!!s.opensource?.length && (
        <Box t="开源实现（可自部署）">
          <div className="flex flex-col gap-1">
            {s.opensource.map((o) => (
              <p key={o.name}>
                <a href={o.url} target="_blank" rel="noreferrer" className="underline hover:text-yes">{o.name}</a>
                <span className="text-muted text-[12px] ml-2">
                  {o.quote} · {atlas.sources[o.src]?.name}
                </span>
              </p>
            ))}
          </div>
        </Box>
      )}

      {!!s.platform_feature?.length && (
        <Box t="平台上的成品功能">
          {s.platform_feature.map((f) => (
            <p key={f.p}>
              {atlas.platforms.find((x) => x.id === f.p)?.name} · {f.name}
              <span className="text-muted text-[12px] ml-2">原文：「{f.quote}」</span>
            </p>
          ))}
        </Box>
      )}

      {/* **这一栏是这一页最值钱的部分。** 厂商不会写自己做不好什么。 */}
      <section className="border border-unknown/40 bg-unknown/6 rounded-lg p-4 flex flex-col gap-1.5">
        <h2 className="text-[15px] font-semibold">已知限制</h2>
        {s.limits?.map((l, i) => (
          <Rich key={i} text={`· ${l}`} className="text-[15px] leading-relaxed" />
        ))}
      </section>

      {!!s.cases?.length && (
        <Box t="典型用例">
          <p className="text-muted">{s.cases.join(" · ")}</p>
        </Box>
      )}

      <footer className="border-t border-rule pt-4 flex flex-wrap gap-3 text-[14px]">
        {cap && <Link href={capHref(cap)} className="underline hover:text-yes">这一项谁支持 →</Link>}
        <Link href="/where" className="underline hover:text-yes">去哪用、多少钱 →</Link>
        <Link href="/caveats" className="underline hover:text-yes">下单前先看这几条 →</Link>
        <span className="text-muted ml-auto">核验于 {s.verified_at}</span>
      </footer>
    </main>
  );
}

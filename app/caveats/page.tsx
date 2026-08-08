import type { Metadata } from "next";
import Link from "next/link";
import { atlas, label } from "@/lib/atlas";
import { caveats, CAVEAT_ZH, type Caveat } from "@/lib/caveats";
import { modelHref } from "@/lib/slug";

/**
 * 「能力对了 ≠ 你用得上」。**这一页是三条动线的交汇点，也是这个产品最值钱的内容。**
 *
 * 每一条都是现算的（见 lib/caveats.ts）—— 数据变了清单跟着变，
 * 某天某条不再成立，它自己就消失了。**不手写一条。**
 */
export const metadata: Metadata = {
  title: "能力对了，你未必用得上 —— 下单前先看这几条",
  description: "上架的常常不是当前版本；上游停服了平台还在卖；同一个模型各平台不同价；大陆直连不通。每条带厂商官方原文。",
};

export default function CaveatsPage() {
  const all = caveats();
  const byKind = new Map<Caveat["kind"], Caveat[]>();
  for (const c of all) byKind.set(c.kind, [...(byKind.get(c.kind) ?? []), c]);
  const order: Caveat["kind"][] = ["upstream-gone", "stale-version", "coming-soon", "discount-trap", "price-varies", "blocked"];

  return (
    <main className="max-w-[900px] mx-auto px-5 py-8 flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-[30px] font-semibold leading-tight">能力对了，你未必用得上</h1>
        <p className="text-muted text-[15px]">
          {all.length} 条，全部从数据现算 · 每条带厂商官方原文
          <Link href="/method#states" className="underline ml-2 hover:text-ink">口径 →</Link>
        </p>
      </header>

      {order.filter((k) => byKind.get(k)?.length).map((k) => (
        <section key={k} className="flex flex-col gap-2">
          <h2 className="text-[20px] font-semibold">
            {CAVEAT_ZH[k]}
            <span className="text-muted text-[14px] font-normal ml-2">{byKind.get(k)!.length} 条</span>
          </h2>
          {byKind.get(k)!.map((c, i) => {
            const src = c.src ? atlas.sources[c.src] : null;
            return (
              <div key={i} className="border border-rule rounded-lg bg-card p-3 flex flex-col gap-1">
                <p className="text-[15px]">
                  {c.m ? (
                    <Link href={modelHref(c.m)} className="underline hover:text-yes">{c.what}</Link>
                  ) : c.what}
                </p>
                {c.quote && (
                  <p className="text-muted text-[12px] leading-relaxed">
                    原文：「{c.quote}」
                    {src && (
                      <a href={src.url} target="_blank" rel="noreferrer" className="underline ml-1.5 hover:text-yes">
                        {src.name}
                      </a>
                    )}
                  </p>
                )}
              </div>
            );
          })}
        </section>
      ))}
    </main>
  );
}

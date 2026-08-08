import type { Metadata } from "next";
import Link from "next/link";
import Pricing from "@/components/Pricing";
import Transparency from "@/components/Transparency";
import { Rich } from "@/components/Fact";
import { atlas, avail, label, modelsOf, STATUS, availModels } from "@/lib/atlas";
import { modelHref } from "@/lib/slug";

/**
 * 去哪用 —— **三条动线的交汇点**。
 * 「能力对 ≠ 你用得上」是这个产品最值钱、别处最难拼的一类事实。
 */
export const metadata: Metadata = {
  title: "去哪用：平台 × 模型 —— 以及多少钱",
  description: "上架的常常不是当前主力版本。平台价格、折扣、大陆可达性、平台公不公示底层模型，都在这一页。",
};

export default function WherePage() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 flex flex-col gap-10">
      <h1 className="text-[28px] font-semibold leading-tight">我在哪能用上，多少钱</h1>
      <section className="hidden md:block">
        <h2 className="text-[22px] font-semibold mb-1">去哪用：平台 × 模型</h2>
        <p className="text-muted text-[14px] mb-3 max-w-[920px]">
          <b className="text-ink">看的不是「有没有」，是「上的是哪一版」。</b>
          Replicate 上是 Hailuo 2.3（不是 H3）、初代 ltx-video（不是 2.3）；APIYI 上是 Seedance 2.0（不是 2.5）。
        </p>
        <p className="text-muted text-[13px] mb-3 flex flex-wrap gap-x-5 gap-y-1">
          <span><b className="text-yes">✅</b> 上架的就是当前主力版本</span>
          <span><b className="text-unknown">⚠️</b> 上架的是旧版本</span>
          <span><b className="text-muted">🕐</b> 标着 coming soon，还不能用</span>
          <span>空白 = 我们没找到证据，不代表没有</span>
        </p>
        <div className="overflow-x-auto border border-rule rounded-xl bg-card mb-3">
          <table className="w-full text-[14px] border-collapse">
            <thead>
              <tr className="border-b border-rule">
                <th className="text-left font-semibold p-3 sticky left-0 bg-card">平台</th>
                {availModels().map((m) => {
                  const st = m.status && m.status !== "active" ? STATUS[m.status] : null;
                  return (
                    <th key={m.id} className="p-3 font-semibold text-[12px] whitespace-nowrap align-bottom">
                      <span className={st?.cls ?? ""}>{label(m)}</span>
                      {st && <span className="block text-[11px] font-medium text-no">{st.tag}</span>}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {atlas.platforms.filter((pf) => atlas.availability.some((v) => v.p === pf.id) || pf.note).map((pf) => (
                <tr key={pf.id} className="border-b border-rule/60 last:border-0">
                  <td className="p-3 sticky left-0 bg-card whitespace-nowrap">
                    <a href={pf.url} target="_blank" rel="noreferrer" className="font-medium underline hover:text-yes">
                      {pf.name}
                    </a>
                    <span className="block text-muted text-[11px]">
                      {pf.kind} · {pf.region}
                      {pf.discloses === "yes" && <b className="text-yes"> · 公示底层模型</b>}
                    </span>
                  </td>
                  {availModels().map((m) => {
                    const v = avail(pf.id, m.id);
                    const mark = !v ? "" : v.status === "coming-soon" ? "🕐" : v.match === "older" ? "⚠️" : "✅";
                    return (
                      <td key={m.id} className="p-3 text-center" title={v ? `${v.listed}｜${v.quote}` : ""}>
                        <span className={v?.match === "older" ? "text-unknown" : "text-yes"}>{mark}</span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col gap-2 text-[14px]">
          {atlas.availability
            .filter((v) => v.note)
            .map((v) => {
              const pf = atlas.platforms.find((x) => x.id === v.p)!;
              const md = atlas.models.find((x) => x.id === v.m)!;
              return (
                <div key={`${v.p}-${v.m}`} className="border-t border-rule pt-2">
                  <span className="font-semibold">
                    {pf.name} · {label(md)}
                  </span>
                  <span className="text-muted text-[13px] ml-2">上架为「{v.listed}」</span>
                  <Rich text={v.note!} className="block text-muted text-[13px] mt-1 leading-relaxed" />
                  <a
                    href={atlas.sources[v.src].url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted text-[12px] underline hover:text-ink"
                  >
                    原文：「{v.quote}」
                  </a>
                </div>
              );
            })}
          {atlas.platforms
            .filter((pf) => pf.note && !atlas.availability.some((v) => v.p === pf.id))
            .map((pf) => (
              <div key={pf.id} className="border-t border-rule pt-2">
                <span className="font-semibold">{pf.name}</span>
                <Rich text={pf.note!} className="block text-muted text-[13px] mt-1 leading-relaxed" />
              </div>
            ))}
        </div>
      </section>

      <section className="hidden md:block">
        <h2 className="text-[22px] font-semibold mb-1">你在大陆，能不能用上</h2>
        <p className="text-muted text-[14px] mb-4 max-w-[920px]">
          2026-08-08 从大陆<b className="text-ink">不走代理</b>直连各厂商官方站 / 文档页的实测。
          <Link href="/method#gaps" className="underline ml-2 hover:text-ink">口径 →</Link>
        </p>
        <div className="flex flex-col gap-2">
          {atlas.models
            .filter((m) => m.reach_cn && m.reach_cn !== "unknown")
            .sort((a, b) => (a.reach_cn === "blocked" ? -1 : 1) - (b.reach_cn === "blocked" ? -1 : 1))
            .map((m) => (
              <div key={m.id} className="flex items-baseline gap-3 text-[15px] border-t border-rule pt-2">
                <span className={`w-[26px] shrink-0 ${m.reach_cn === "ok" ? "text-yes" : "text-no"}`}>
                  {m.reach_cn === "ok" ? "✅" : "⛔"}
                </span>
                <Link href={modelHref(m)} className="w-[190px] shrink-0 underline hover:text-yes">
                  {label(m)}
                </Link>
                <Rich text={m.reach_note ?? ""} className="text-muted text-[13px] leading-relaxed" />
              </div>
            ))}
        </div>
      </section>

      <Pricing />

      <Transparency />
    </main>
  );
}

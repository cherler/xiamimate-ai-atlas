"use client";

import { useState } from "react";
import Bipartite, { type Sel } from "@/components/Bipartite";
import { atlas, capsOf, cell, compare, label, modelsOf, tally, type Klass, type State } from "@/lib/atlas";

const MARK: Record<State, string> = { yes: "✅", no: "❌", unknown: "⬜" };
const TONE: Record<State, string> = { yes: "text-yes", no: "text-no", unknown: "text-unknown" };

/**
 * 每条事实旁边都必须看得见：来源、核验日期、核验的是哪个版本、以及**是谁录的**。
 *
 * 这不是加分项，是必需品（§59.3）。既然主动交易掉了精准度换维护成本，
 * 可信度就只能靠透明顶上 —— 读者没有同意接受不精准，只有我们同意了。
 */
function Fact({ m, c }: { m: string; c: string }) {
  const f = cell(m, c);
  const src = f.src ? atlas.sources[f.src] : null;
  const cap = atlas.capabilities.find((x) => x.id === c)!;
  return (
    <div className="border-t border-rule py-3 flex gap-4 text-[15px]">
      <span className={`${TONE[f.state]} font-semibold shrink-0 w-[132px]`}>
        {MARK[f.state]} {cap.zh}
      </span>
      <div className="min-w-0 flex-1">
        {f.note && <p className="text-ink leading-relaxed">{f.note}</p>}
        <p className="text-muted text-[13px] mt-1 flex flex-wrap gap-x-3 gap-y-1 items-center">
          {src ? (
            <>
              <a href={src.url} target="_blank" rel="noreferrer" className="underline hover:text-ink">
                {src.name}
              </a>
              <span
                className={`px-1.5 py-px rounded text-[11px] ${
                  src.tier === "official" ? "bg-yes/12 text-yes" : "bg-unknown/15 text-unknown"
                }`}
              >
                {src.tier === "official" ? "官方来源" : "第三方来源"}
              </span>
            </>
          ) : (
            <span className="italic">无来源 —— 这一格是「查了没找到」，不是「我们没查」</span>
          )}
          {f.verified_for && <span>核验版本 {f.verified_for}</span>}
          <span>核验于 {atlas.generated_at}</span>
          <span className="px-1.5 py-px rounded bg-unknown/15 text-unknown text-[11px]">机器录入 · 未经人工核验</span>
        </p>
      </div>
    </div>
  );
}

function Matrix({ k, title, blurb }: { k: Klass; title: string; blurb: string }) {
  const ms = modelsOf(k);
  const cs = capsOf(k);
  return (
    <section>
      <h2 className="text-[22px] font-semibold mb-1">{title}</h2>
      <p className="text-muted text-[14px] mb-3 max-w-[860px] leading-relaxed">{blurb}</p>
      <div className="overflow-x-auto border border-rule rounded-xl bg-card">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr className="border-b border-rule">
              <th className="text-left font-semibold p-3 sticky left-0 bg-card">能力</th>
              {ms.map((m) => (
                <th key={m.id} className="p-3 font-semibold text-[13px] whitespace-nowrap">
                  {label(m)}
                  <span className="block font-normal text-muted text-[11px]">{m.version_as_of}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cs.map((c) => (
              <tr key={c.id} className="border-b border-rule/60 last:border-0">
                <td className="p-3 sticky left-0 bg-card whitespace-nowrap">
                  <span className="font-medium">{c.zh}</span>
                  <span className="text-muted text-[12px] ml-2">{c.ubiquity}</span>
                </td>
                {ms.map((m) => {
                  const f = cell(m.id, c.id);
                  return (
                    <td key={m.id} className="p-3 text-center" title={f.note ?? ""}>
                      <span className={TONE[f.state]}>{MARK[f.state]}</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function Page() {
  const [sel, setSel] = useState<Sel>({ kind: "none" });
  const t = tally("clip");
  const picked = sel.kind === "models" ? sel.ids : [];
  const cmp = picked.length === 2 ? compare(picked[0], picked[1]) : null;
  const nameOf = (id: string) => label(atlas.models.find((m) => m.id === id)!);
  const clipCaps = capsOf("clip");

  return (
    <main className="max-w-[1240px] mx-auto px-8 py-10 flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        <p className="text-[13px] tracking-[0.16em] text-muted">AI 视频能力地图 · MVP</p>
        <h1 className="text-[40px] leading-tight font-semibold">
          模型之间不靠出身相连，<span className="text-yes">靠能做什么相连</span>
        </h1>
        <p className="text-muted text-[16px] leading-relaxed max-w-[880px]">
          离线出片轨 {modelsOf("clip").length} 个模型 × {clipCaps.length} 项能力 = {t.total} 格。
          其中 <b className="text-yes">{t.yes} 格有明确来源</b>、<b className="text-no">{t.no} 格明确不支持</b>、
          <b className="text-unknown">{t.unknown} 格官方没说</b>。
          <br />
          <b className="text-unknown">⬜ 不是我们没查，是查了公开渠道找不到。</b>
          这一列本身就是这张表最值得看的部分。
        </p>
      </header>

      <section className="bg-card border border-rule rounded-xl p-4">
        <Bipartite sel={sel} onSel={setSel} />
      </section>

      <section className="min-h-[120px]">
        {sel.kind === "none" && (
          <p className="text-muted text-[15px]">
            点右边一个<b className="text-ink">能力</b>，看谁实现了它（这就是「这个能力去哪用」）；
            点左边<b className="text-ink">两个模型</b>，看它们的共有与独有（这就是 Compare）。
            <br />
            <span className="text-[13px]">虚线 = 官方没说。它和「不支持」不是一回事。</span>
          </p>
        )}

        {sel.kind === "cap" && (
          <div>
            <h2 className="text-[24px] font-semibold mb-1">
              {atlas.capabilities.find((c) => c.id === sel.id)!.zh}
              <span className="text-muted text-[16px] font-normal ml-3">
                {atlas.capabilities.find((c) => c.id === sel.id)!.name}
              </span>
            </h2>
            <p className="text-muted text-[14px] mb-2">按模型逐条列出，每条都带来源。</p>
            {modelsOf("clip").map((m) => (
              <div key={m.id} className="border-t border-rule pt-3 pb-1">
                <p className="font-semibold text-[16px]">
                  {label(m)} <span className="text-muted font-normal text-[13px]">{m.vendor}</span>
                </p>
                <Fact m={m.id} c={sel.id} />
              </div>
            ))}
          </div>
        )}

        {sel.kind === "models" && picked.length === 1 && (
          <div>
            <h2 className="text-[24px] font-semibold mb-1">{nameOf(picked[0])}</h2>
            <p className="text-muted text-[14px] mb-2">
              再点一个模型即可对比。以下是它的 {clipCaps.length} 项能力逐条。
            </p>
            {clipCaps.map((c) => (
              <Fact key={c.id} m={picked[0]} c={c.id} />
            ))}
          </div>
        )}

        {cmp && (
          <div>
            <h2 className="text-[24px] font-semibold mb-3">
              {nameOf(picked[0])} <span className="text-muted font-normal">vs</span> {nameOf(picked[1])}
            </h2>
            <div className="grid grid-cols-3 gap-5 text-[15px]">
              <div>
                <p className="text-yes font-semibold mb-2">共有 {cmp.both.length} 项</p>
                <ul className="text-muted leading-relaxed">
                  {cmp.both.map((c) => (
                    <li key={c}>{atlas.capabilities.find((x) => x.id === c)!.zh}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-[#1f4d8f]">只有 {nameOf(picked[0])}</p>
                <ul className="text-muted leading-relaxed">
                  {cmp.onlyA.length ? (
                    cmp.onlyA.map((c) => <li key={c}>{atlas.capabilities.find((x) => x.id === c)!.zh}</li>)
                  ) : (
                    <li>—</li>
                  )}
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-[#1f4d8f]">只有 {nameOf(picked[1])}</p>
                <ul className="text-muted leading-relaxed">
                  {cmp.onlyB.length ? (
                    cmp.onlyB.map((c) => <li key={c}>{atlas.capabilities.find((x) => x.id === c)!.zh}</li>)
                  ) : (
                    <li>—</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>

      <Matrix
        k="clip"
        title="离线出片轨 · 全表"
        blurb="给定条件 → 渲染一段固定长度的成片，生成完才能看。列头是 Family 与当前主力版本；换版本后没有重新核验的能力一律退回 ⬜，不沿用旧版结论。"
      />

      <Matrix
        k="realtime"
        title="实时交互轨 · 另一套坐标系"
        blurb="边生成边看，生成过程中可以干预，时长不预先确定。它们和上面那张表不共用能力轴 —— 对它们来说「视频延长」没有意义（本来就没有终点），对上面那些模型「延迟」也没有意义。硬并成一张表会把两边都讲错。"
      />

      <footer className="border-t border-rule pt-5 text-[13px] text-muted leading-relaxed">
        数据版本 {atlas.version} · 核验于 {atlas.generated_at} ·
        <b className="text-unknown"> 全部为机器录入，未经人工核验</b> · xiamimate.com/atlas
        <br />
        {atlas.note}
        <ul className="mt-2 list-disc pl-5">
          {atlas.changelog.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </footer>
    </main>
  );
}

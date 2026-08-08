"use client";

import { useState } from "react";
import Link from "next/link";
import Bipartite, { type Sel } from "@/components/Bipartite";
import { Fact, MARK, TONE } from "@/components/Fact";
import { atlas, avail, capsOf, cell, compare, label, modelsOf, modelsWith, transparency, vendorName, orgOf, STATUS, type Klass } from "@/lib/atlas";
import { capHref, modelHref } from "@/lib/slug";

// Sel 从 Bipartite 导出，**不在这里另写一份** —— 两份定义迟早对不上（刚才就对不上了）。

/** 关系图：模型通过能力互相连接。**这是负责人锁死的锚点**（立项三条之一）。 */
function Matrix({ k, title, blurb }: { k: Klass; title: string; blurb: string }) {
  const ms = modelsOf(k);
  const cs = capsOf(k);
  return (
    <section className="hidden md:block">
      <h2 className="text-[22px] font-semibold mb-1">{title}</h2>
      <p className="text-muted text-[14px] mb-3 max-w-[860px] leading-relaxed">{blurb}</p>
      <p className="text-muted text-[13px] mb-2">
        <b className="text-unknown">*</b> = 另一个接口，不是生成时的一步
        <Link href="/method#states" className="underline ml-2 hover:text-ink">口径 →</Link>
      </p>
      <div className="overflow-x-auto border border-rule rounded-xl bg-card">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr className="border-b border-rule">
              <th className="text-left font-semibold p-3 sticky left-0 bg-card">能力</th>
              {ms.map((m) => {
                const st = m.status && m.status !== "active" ? STATUS[m.status] : null;
                return (
                  <th key={m.id} className="p-3 font-semibold text-[13px] whitespace-nowrap align-bottom">
                    <Link href={modelHref(m)} className={`${st?.cls ?? ""} underline hover:text-yes`} title={m.status_note ?? ""}>
                      {label(m)}
                    </Link>
                    <span className="block font-normal text-muted text-[11px]">{m.version_as_of}</span>
                    {st && <span className={`block text-[11px] font-medium ${st.cls.replace("line-through", "")}`}>{st.tag}</span>}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {cs.map((c) => (
              <tr key={c.id} className="border-b border-rule/60 last:border-0">
                <td className="p-3 sticky left-0 bg-card whitespace-nowrap">
                  <Link href={capHref(c)} className="font-medium underline hover:text-yes">
                    {c.zh}
                  </Link>
                  <span className="text-muted text-[12px] ml-2">{c.ubiquity}</span>
                </td>
                {ms.map((m) => {
                  const f = cell(m.id, c.id);
                  return (
                    <td key={m.id} className="p-3 text-center" title={f.note ?? ""}>
                      <span className={TONE[f.state]}>{MARK[f.state]}</span>
                      {f.via === "separate-task" && (
                        <span className="text-unknown text-[11px] align-super" title="平台的另一个接口，不是生成时的一步">
                          *
                        </span>
                      )}
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

export default function MapPage() {
  const [sel, setSel] = useState<Sel>({ kind: "none" });
  const nameOf = (id: string) => label(atlas.models.find((m) => m.id === id)!);
  const picked = sel.kind === "models" ? sel.ids : [];
  const cmp = picked.length === 2 ? compare(picked[0], picked[1]) : null;
  const clipCaps = capsOf("clip");

  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 flex flex-col gap-6">
      <h1 className="text-[28px] font-semibold leading-tight">谁是谁家的，谁能做什么</h1>
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
      <section className="bg-card border border-rule rounded-xl p-4 hidden md:block">
        <Bipartite sel={sel} onSel={setSel} />
      </section>



      <section className="min-h-[120px] hidden md:block">
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
            {(() => {
              const c = atlas.capabilities.find((x) => x.id === sel.id)!;
              return c.since ? (
                <p className="text-[14px] mb-2 leading-relaxed">
                  <b className="text-ink">最早可证 {c.since}</b>
                  <span className="text-muted">
                    {" "}—— 「{c.since_quote}」
                    {c.since_src && atlas.sources[c.since_src] ? (
                      <>
                        {" "}
                        <a
                          href={atlas.sources[c.since_src].url}
                          target="_blank"
                          rel="noreferrer"
                          className="underline hover:text-ink"
                        >
                          {atlas.sources[c.since_src].name}
                        </a>
                      </>
                    ) : null}
                  </span>
                </p>
              ) : (
                <p className="text-muted text-[14px] mb-2">{c.since_note ?? ""}</p>
              );
            })()}
            {(() => {
              const c = atlas.capabilities.find((x) => x.id === sel.id)!;
              return c.aliases?.length ? (
                <p className="text-muted text-[13px] mb-2">各家叫法：{c.aliases.join(" · ")}</p>
              ) : null;
            })()}
            <p className="text-muted text-[14px] mb-2">
              按模型逐条列出，每条都带来源。
              <Link href={capHref(sel.id)} className="underline hover:text-ink ml-2">
                打开这一项的独立页面 →
              </Link>
            </p>
            {modelsOf("clip").map((m) => (
              <div key={m.id} className="border-t border-rule pt-3 pb-1">
                <p className="font-semibold text-[16px]">
                  {label(m)} <span className="text-muted font-normal text-[13px]">{vendorName(m)}</span>
                </p>
                <Fact m={m.id} c={sel.id} label={atlas.capabilities.find((x) => x.id === sel.id)!.zh} />
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
              <Fact key={c.id} m={picked[0]} c={c.id} label={c.zh} />
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
    </main>
  );
}

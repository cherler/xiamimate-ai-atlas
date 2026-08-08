"use client";

import { useState } from "react";
import Bipartite, { type Sel } from "@/components/Bipartite";
import Genealogy from "@/components/Genealogy";
import Search from "@/components/Search";
import MobileStack from "@/components/MobileStack";
import Link from "next/link";
import { Fact, MARK, Rich, TONE } from "@/components/Fact";
import Pricing from "@/components/Pricing";
import Transparency from "@/components/Transparency";
import { atlas, avail, capsOf, cell, compare, extendedOf, label, modelsOf, tally, transparency, vendorName, STATUS, availModels, type Klass } from "@/lib/atlas";
import { capHref, modelHref } from "@/lib/slug";

/** 生命周期标记。停服/非主力必须一眼看得见 —— 能力对不代表能用。 */


export default function Page() {
  const [sel, setSel] = useState<Sel>({ kind: "none" });
  const t = tally("clip");
  const picked = sel.kind === "models" ? sel.ids : [];
  const cmp = picked.length === 2 ? compare(picked[0], picked[1]) : null;
  const nameOf = (id: string) => label(atlas.models.find((m) => m.id === id)!);
  const clipCaps = capsOf("clip");
  /**
   * 「去哪用」这张表的列 = core + **有可用性证据的 extended**。
   * Sora 已停服却还在 Replicate 与 APIYI 的货架上 ——
   * **停服模型最该出现的地方就是这里**，不列出来等于放任别人去买一个 48 天后关掉的 API。
   */


  return (
    <main className="max-w-[1240px] mx-auto px-8 py-10 flex flex-col gap-8">
      <header className="flex flex-col gap-3">
        {/*
          方向切换的口子。从 atlas.domains 渲染 —— 加一个方向是改数据不是改代码。
          **只显示真的有的那些。** 不做「AI 图片（敬请期待）」这种占位 tab：
          这个产品的全部本钱就是不骗人，界面上先骗一下也是骗。
        */}
        <div className="flex items-center gap-2 text-[13px]">
          {atlas.domains.map((d) => (
            <span
              key={d.id}
              className={
                d.state === "live"
                  ? "px-2.5 py-1 rounded bg-ink text-paper font-medium"
                  : "px-2.5 py-1 rounded border border-rule text-muted"
              }
              title={d.note ?? ""}
            >
              {d.name}
            </span>
          ))}
          <span className="text-muted tracking-[0.16em] ml-1">能力地图 · MVP</span>
          <span className="flex-1" />
          <Link href="/changes" className="underline text-muted hover:text-ink">
            变了什么 →
          </Link>
        </div>
        <h1 className="text-[40px] leading-tight font-semibold">
          模型之间不靠出身相连，<span className="text-yes">靠能做什么相连</span>
        </h1>
        <p className="text-muted text-[16px] leading-relaxed max-w-[880px]">
          离线出片轨 {modelsOf("clip").length} 个模型 × {clipCaps.length} 项能力 = {t.total} 格。
          其中 <b className="text-yes">{t.yes} 格有明确来源</b>、<b className="text-no">{t.no} 格明确不支持</b>、
          <b className="text-unknown">{t.unknown} 格官方没说</b>。
          <br />
          九家已全部用<b className="text-ink">厂商官方文档</b>逐格核过，{Math.round((85 / t.total) * 100)}% 的格子挂官方来源。
          <b className="text-unknown"> ⬜ 高度集中在少数几家</b> —— 别看总数，看
          <a href="#transparency" className="underline hover:text-ink">下面的分布</a>。
        </p>
      </header>

      <section>
        <Search />
      </section>

      {/* §12：移动端不是桌面端缩小。二部图缩到 390 宽只剩一团毛，
          而且它靠「点一个节点看它连去哪」—— 手指点不准 20px 的圆点。 */}
      <MobileStack />


      <section className="hidden md:block">
        {/*
          §18 EditorialInsight：**一个判断 + 一张图 + 证据**，不是一个题目 + 一张图。
          这个判断是从谱系数据本身读出来的，不是先有观点再找数据 ——
          写之前先核过一版「Runway 正在从模型厂商变成平台」，
          结果 104 条日志里只有 6 条讲别家模型，**论点不成立，扔了。**
        */}
        <h2 className="text-[22px] font-semibold mb-1">开源在「一个能力一个模型」，闭源在「一个模型全都有」</h2>
        <p className="text-muted text-[14px] mb-4 max-w-[920px] leading-relaxed">
          万相的首尾帧、统一编辑、语音驱动、动作复刻，是四个单独发布的模型；
          可灵是同一条产品线逐版本往上加。
        </p>
        <div className="bg-card border border-rule rounded-xl p-4">
          <Genealogy />
        </div>
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










      <footer className="border-t border-rule pt-5 text-[13px] text-muted leading-relaxed">
        数据版本 {atlas.version} · 核验于 {atlas.generated_at} ·
        <Link href="/method#agent" className="text-unknown underline hover:text-ink"> 全部为机器录入，未经人工核验</Link> · xiamimate.com/atlas
        <br />
        {atlas.note}
        <ul className="mt-2 list-disc pl-5">
          {atlas.changelog.map((l) => (
            <li key={l}>
              <Rich text={l} />
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}

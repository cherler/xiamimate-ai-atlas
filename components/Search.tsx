"use client";

import { useState } from "react";
import Link from "next/link";
import { atlas, cell, label } from "@/lib/atlas";
import { answer, answerNote, search } from "@/lib/search";
import { capHref, modelHref } from "@/lib/slug";

/**
 * 搜索框 + Answer View（方案 §13）。
 *
 * 「哪些模型支持动作复刻」的正确答案不是一串链接，是**一个清单**。
 * 所以命中意图就直接给答案；给不出答案时才退回普通检索。
 *
 * 全部在浏览器里跑 —— 静态站没有后端，数据也就一百多条。
 */
const EXAMPLES = ["哪些模型支持动作复刻", "Seedance 在哪用", "哪些有开源权重", "Element", "首尾帧"];

export default function Search() {
  const [q, setQ] = useState("");
  const a = answer(q);
  const hits = q.trim() ? search(q) : [];
  const cap = a?.kind === "capability" ? atlas.capabilities.find((c) => c.id === a.capId) : null;

  return (
    <div className="flex flex-col gap-3">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="搜一个问题：哪些模型支持动作复刻 / Seedance 在哪用 / 哪些有开源权重"
        className="w-full px-4 py-3 rounded-lg border border-rule bg-card text-[16px] outline-none focus:border-yes"
      />

      {!q.trim() && (
        <p className="text-muted text-[13px] flex flex-wrap gap-2 items-center">
          试试：
          {EXAMPLES.map((e) => (
            <button
              key={e}
              onClick={() => setQ(e)}
              className="px-2 py-1 rounded border border-rule hover:border-yes hover:text-ink"
            >
              {e}
            </button>
          ))}
        </p>
      )}

      {a && (
        <div className="border border-yes/40 bg-yes/6 rounded-lg p-4 flex flex-col gap-2">
          {a.kind === "capability" && cap && (
            <>
              <p className="text-[16px]">
                <b className="text-ink">{a.models.length} 个模型</b>支持
                <Link href={capHref(cap)} className="underline hover:text-yes mx-1">
                  {cap.zh}
                </Link>
                <span className="text-muted text-[14px]">（{cap.name}）</span>
              </p>
              <p className="flex flex-wrap gap-x-3 gap-y-1 text-[15px]">
                {a.models.map((id) => {
                  const m = atlas.models.find((x) => x.id === id)!;
                  const f = cell(id, cap.id);
                  return (
                    <Link key={id} href={modelHref(m)} className="underline hover:text-yes">
                      {label(m)}
                      {f.via === "separate-task" && <span className="text-unknown text-[11px] align-super">*</span>}
                    </Link>
                  );
                })}
              </p>
              {a.models.some((id) => cell(id, cap.id).via === "separate-task") && (
                <p className="text-muted text-[12px]">* = 平台的另一个接口，不是生成时的一步</p>
              )}
            </>
          )}

          {a.kind === "openweights" && (
            <>
              <p className="text-[16px]">
                <b className="text-ink">{a.models.length} 个模型</b>公开了权重
              </p>
              <p className="flex flex-wrap gap-x-3 gap-y-1 text-[15px]">
                {a.models.map((id) => {
                  const m = atlas.models.find((x) => x.id === id)!;
                  return (
                    <Link key={id} href={modelHref(m)} className="underline hover:text-yes">
                      {label(m)}
                    </Link>
                  );
                })}
              </p>
            </>
          )}

          {a.kind === "where" &&
            (() => {
              const m = atlas.models.find((x) => x.id === a.modelId)!;
              const vs = atlas.availability.filter((v) => v.m === a.modelId);
              return (
                <>
                  <p className="text-[16px]">
                    <Link href={modelHref(m)} className="underline hover:text-yes">
                      {label(m)}
                    </Link>
                    {vs.length ? <> 在 <b className="text-ink">{vs.length} 个平台</b>能找到</> : " —— 我们还没找到上架证据"}
                  </p>
                  {vs.map((v) => {
                    const pf = atlas.platforms.find((x) => x.id === v.p)!;
                    return (
                      <p key={v.p} className="text-[15px]">
                        <a href={pf.url} target="_blank" rel="noreferrer" className="underline hover:text-yes">
                          {pf.name}
                        </a>
                        <span className="text-muted text-[13px] ml-2">
                          上架为「{v.listed}」
                          {v.status === "coming-soon" && " · 标着 coming soon，还不能用"}
                          {v.match === "older" && " · ⚠️ 不是当前主力版本"}
                        </span>
                      </p>
                    );
                  })}
                </>
              );
            })()}

          <p className="text-muted text-[12px]">{answerNote(a)}</p>
        </div>
      )}

      {q.trim() && hits.length > 0 && (
        <div className="flex flex-col gap-1">
          <p className="text-muted text-[12px]">{a ? "相关条目" : "找到这些"}</p>
          {hits.map((h) => (
            <Link
              key={`${h.kind}-${h.id}`}
              href={h.kind === "model" ? modelHref(h.id) : h.kind === "capability" ? capHref(h.id) : "#"}
              className="flex items-baseline gap-3 py-1 text-[15px] hover:text-yes"
            >
              <span className="text-muted text-[11px] w-[34px] shrink-0">
                {h.kind === "model" ? "模型" : h.kind === "capability" ? "能力" : "平台"}
              </span>
              <span className="font-medium">{h.title}</span>
              <span className="text-muted text-[13px]">{h.sub}</span>
            </Link>
          ))}
        </div>
      )}

      {q.trim() && !a && hits.length === 0 && (
        <p className="text-muted text-[14px]">
          没找到。<b className="text-ink">这不代表没有</b> —— 只代表我们库里没有这条。
          能力有各家不同的叫法，可以试试别的说法（比如「元素」「Ingredients」都指角色参考）。
        </p>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { atlas, availModels, label, STATUS } from "@/lib/atlas";
import { modelHref } from "@/lib/slug";

/**
 * 平台 × 模型（§9.3）。
 *
 * §9.3 的硬要求：**「✓ 不能只是布尔值。」** 点开一格要看得到
 * Access Type / Region / Plan / Status / Valid From / Valid To / Verified At / Source
 * 八个字段。**一个只回答「有没有」的表会把人骗进去** ——
 * 它答「有」，你买到的却是上一代，或者上游已经停服。
 *
 * 拿不到的字段一律 `unknown`，不猜。`unknown` 和「没有」是两回事，
 * 表里也分开显示。
 */
const MARK: Record<string, { s: string; cls: string }> = {
  available: { s: "✅", cls: "text-yes" },
  "coming-soon": { s: "🕐", cls: "text-muted" },
  gone: { s: "✕", cls: "text-no" },
};
const FIELD: [string, string][] = [
  ["access_type", "调用方式"], ["region", "区域"], ["plan", "计划"],
  ["status", "状态"], ["valid_from", "生效自"], ["valid_to", "有效至"],
];
const ZH: Record<string, string> = {
  api: "API", web: "网页", both: "API + 网页", unknown: "未知",
  free: "免费", paid: "付费", trial: "试用",
  available: "可用", "coming-soon": "标着 coming soon", gone: "已下架",
};

export default function WhereTable() {
  const [cell, setCell] = useState<{ p: string; m: string } | null>(null);
  const ms = availModels();
  const pfs = atlas.platforms.filter((p) => atlas.availability.some((v) => v.p === p.id));
  const v = cell ? atlas.availability.find((x) => x.p === cell.p && x.m === cell.m) : null;
  const pf = cell ? atlas.platforms.find((x) => x.id === cell.p) : null;
  const md = cell ? atlas.models.find((x) => x.id === cell.m) : null;
  const src = v ? atlas.sources[v.src] : null;

  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-x-auto border border-rule rounded-xl bg-card">
        <table className="w-full text-[14px] border-collapse">
          <thead>
            <tr className="border-b border-rule">
              <th className="text-left font-semibold p-3 sticky left-0 bg-card">平台</th>
              {ms.map((m) => {
                const st = m.status && m.status !== "active" ? STATUS[m.status] : null;
                return (
                  <th key={m.id} className="p-2 font-semibold text-[12px] whitespace-nowrap align-bottom">
                    <span className={st?.cls ?? ""}>{label(m)}</span>
                    {st && <span className="block text-[11px] font-medium text-no">{st.tag}</span>}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {pfs.map((p) => (
              <tr key={p.id} className="border-b border-rule/60 last:border-0">
                <td className="p-3 sticky left-0 bg-card whitespace-nowrap">
                  <a href={p.url} target="_blank" rel="noreferrer" className="font-medium underline hover:text-yes">
                    {p.name}
                  </a>
                  <span className="block text-muted text-[11px]">
                    {p.region}
                    {p.discloses === "yes" && <b className="text-yes"> · 公示底层</b>}
                    {p.discloses === "blocked" && <span className="text-unknown"> · 我们读不到它的页</span>}
                  </span>
                </td>
                {ms.map((m) => {
                  const a = atlas.availability.find((x) => x.p === p.id && x.m === m.id);
                  const on = cell?.p === p.id && cell?.m === m.id;
                  return (
                    <td key={m.id} className={`text-center p-1 ${a ? "cursor-pointer hover:bg-yes/8" : ""} ${on ? "bg-yes/12" : ""}`}
                      onClick={() => a && setCell(on ? null : { p: p.id, m: m.id })}>
                      {a ? (
                        <span className={MARK[a.status]?.cls}>
                          {a.match === "older" ? "⚠️" : MARK[a.status]?.s ?? "?"}
                        </span>
                      ) : <span className="text-rule">·</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-muted text-[13px] flex flex-wrap gap-x-4 gap-y-1">
        <span><b className="text-yes">✅</b> 上架的就是当前主力版本</span>
        <span><b className="text-unknown">⚠️</b> 上架的是旧版本</span>
        <span><b className="text-muted">🕐</b> 还不能用</span>
        <span>· = 我们没找到证据，不代表没有</span>
        <span className="text-ink">点任一格看详情</span>
      </p>

      {v && pf && md && (
        <div className="border border-yes/40 bg-yes/6 rounded-lg p-4 flex flex-col gap-2">
          <p className="text-[16px]">
            <Link href={modelHref(md)} className="font-semibold underline hover:text-yes">{label(md)}</Link>
            <span className="text-muted"> @ </span>
            <a href={pf.url} target="_blank" rel="noreferrer" className="font-semibold underline hover:text-yes">{pf.name}</a>
          </p>
          <p className="text-[15px]">
            上架为「<b className="text-ink">{v.listed}</b>」
            {v.match === "older" && <b className="text-unknown"> —— 不是当前主力版本</b>}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-1 text-[13px]">
            {FIELD.map(([k, zh]) => {
              const raw = (v as unknown as Record<string, string>)[k];
              const val = ZH[raw] ?? raw ?? "未知";
              return (
                <span key={k}>
                  <span className="text-muted">{zh}：</span>
                  <span className={raw === "unknown" || raw === undefined ? "text-unknown" : ""}>{val}</span>
                </span>
              );
            })}
            <span><span className="text-muted">核验于：</span>{atlas.generated_at}</span>
          </div>
          {v.note && <p className="text-[13px] leading-relaxed">{v.note}</p>}
          <p className="text-muted text-[12px] leading-relaxed">
            原文：「{v.quote}」
            {src && <a href={src.url} target="_blank" rel="noreferrer" className="underline ml-1.5 hover:text-yes">{src.name}</a>}
          </p>
        </div>
      )}
    </div>
  );
}

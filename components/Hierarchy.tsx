"use client";

import { useState } from "react";
import Link from "next/link";
import { atlas, capsOf, cell, label, orgOf } from "@/lib/atlas";
import { capHref, modelHref } from "@/lib/slug";

/**
 * 层级地图（方案 §9.1）：**公司 → 团队 → 产品线 → 版本 → 能力 → 去哪用。**
 *
 * ## 为什么是分栏，不是节点图
 *
 * §9.1 自己写了一句警告：**「避免知识图谱变成蜘蛛网。」**
 * 15 家公司 × 18 条产品线 × 11 项能力 × 15 个平台，画成自由布局的节点图，
 * 连线会糊成一团 —— 那时候「谁和谁有关」反而看不出来了。
 *
 * 分栏保留了层级的全部信息，而且**逐层展开的顺序就是 §9.1 规定的那个**：
 * 谁做的 → 能做什么 → 去哪用。每一栏只显示上一栏选中项的下级，
 * 这就是 Focus Mode 想要的效果 —— 无关的东西直接不出现，比调透明度更干净。
 *
 * ## 公司这一层现在才画得对
 *
 * 公司是 2026-08-08 才升为一等实体的（此前 vendor 只是模型上的一个字符串，
 * 结果阿里在库里成了两家）。**这张图之前根本画不对。**
 */
export default function Hierarchy() {
  const [org, setOrg] = useState<string | null>(null);
  const [mid, setMid] = useState<string | null>(null);

  const orgs = atlas.orgs
    .map((o) => ({ o, ms: atlas.models.filter((m) => m.org === o.id) }))
    .filter((x) => x.ms.length)
    .sort((a, b) => b.ms.length - a.ms.length);

  const models = org ? atlas.models.filter((m) => m.org === org) : [];
  const model = mid ? atlas.models.find((m) => m.id === mid) : null;
  const versions = mid ? atlas.versions.filter((v) => v.m === mid).sort((a, b) => b.date.localeCompare(a.date)) : [];
  const caps = model ? capsOf(model.class) : [];
  const skills = model ? atlas.skills.filter((s) => s.native?.includes(model.id)) : [];

  const Col = ({ t, n, children }: { t: string; n?: number; children: React.ReactNode }) => (
    <div className="flex-1 min-w-[190px] flex flex-col gap-1.5">
      <p className="text-[12px] text-muted border-b border-rule pb-1">
        {t}{n !== undefined && <span className="ml-1.5">{n}</span>}
      </p>
      {children}
    </div>
  );
  const Item = ({ on, onClick, children }: { on?: boolean; onClick?: () => void; children: React.ReactNode }) => (
    <button onClick={onClick}
      className={`text-left text-[14px] px-2 py-1.5 rounded border ${
        on ? "border-yes bg-yes/8 text-ink" : "border-transparent hover:border-rule text-muted hover:text-ink"
      }`}>
      {children}
    </button>
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-5 items-start">
        <Col t="公司" n={orgs.length}>
          {orgs.map(({ o, ms }) => (
            <Item key={o.id} on={org === o.id} onClick={() => { setOrg(o.id === org ? null : o.id); setMid(null); }}>
              <span className="font-medium">{o.zh}</span>
              <span className="text-muted text-[12px] ml-1.5">{ms.length}</span>
              <span className="block text-muted text-[11px]">{o.hq.city} · {o.hq.country}</span>
            </Item>
          ))}
        </Col>

        <Col t="产品线" n={org ? models.length : undefined}>
          {org ? models.map((m) => (
            <Item key={m.id} on={mid === m.id} onClick={() => setMid(m.id === mid ? null : m.id)}>
              <span className="font-medium">{label(m)}</span>
              {m.team && <span className="text-muted text-[11px] ml-1.5">{m.team} 组</span>}
              <span className="block text-muted text-[11px]">
                {(m.tier ?? "core") === "core" ? "主表" : "Extended"}
                {m.weights === "open" && " · 权重公开"}
                {m.weights === "mixed" && " · 部分公开"}
              </span>
            </Item>
          )) : <p className="text-muted text-[13px] px-2">← 先选一家公司</p>}
        </Col>

        <Col t="能做什么" n={model ? caps.filter((c) => cell(model.id, c.id).state === "yes").length : undefined}>
          {model ? (
            <>
              {caps.filter((c) => cell(model.id, c.id).state === "yes").map((c) => (
                <Link key={c.id} href={capHref(c)}
                  className="text-[14px] px-2 py-1 rounded hover:bg-yes/8 text-yes">
                  {c.zh}
                  {cell(model.id, c.id).via === "separate-task" && <span className="text-unknown text-[11px] align-super">*</span>}
                </Link>
              ))}
              {caps.filter((c) => cell(model.id, c.id).state === "unknown").length > 0 && (
                <p className="text-unknown text-[12px] px-2 pt-1">
                  另有 {caps.filter((c) => cell(model.id, c.id).state === "unknown").length} 项官方没说
                </p>
              )}
            </>
          ) : <p className="text-muted text-[13px] px-2">← 再选一条产品线</p>}
        </Col>

      </div>

      {model && (
        <div className="border-t border-rule pt-3 flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[14px]">
            <Link href={modelHref(model)} className="font-semibold text-[16px] underline hover:text-yes">
              {label(model)}
            </Link>
            <span className="text-muted">{orgOf(model)?.zh}{model.team ? ` · ${model.team}` : ""}</span>
            <span className="text-muted">该版本核验于 {model.version_as_of}</span>
            {model.reach_cn === "blocked" && <b className="text-no">大陆直连不通</b>}
          </div>

          {!!versions.length && (
            <p className="text-[13px] flex flex-wrap gap-x-3 gap-y-1">
              <span className="text-muted">发布记录 {versions.length} 次：</span>
              {versions.slice(0, 6).map((v) => (
                <span key={v.id}>
                  <span className="text-muted tabular-nums">{v.date.slice(0, 7)}</span> {v.added}
                </span>
              ))}
              {versions.length > 6 && <Link href="/tree" className="underline hover:text-yes">全部 →</Link>}
            </p>
          )}

          {!!skills.length && (
            <p className="text-[13px] flex flex-wrap gap-x-3 gap-y-1">
              <span className="text-muted">能拿它做：</span>
              {skills.map((s) => (
                <Link key={s.id} href={`/skill/${s.id}`} className="underline hover:text-yes">{s.zh}</Link>
              ))}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

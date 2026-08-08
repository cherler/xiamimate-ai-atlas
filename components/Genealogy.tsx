"use client";

import { useState } from "react";
import Link from "next/link";
import { atlas, label } from "@/lib/atlas";
import { modelHref } from "@/lib/slug";

/**
 * 模型演进谱系（替换掉原来的「能力演进图」）。
 *
 * ## 换掉的原因
 *
 * 原来那张图每行是一项**能力**，横轴是「我们能证明的最早时间」，线的粗细是几家支持。
 * 读者看完只得到「动作复刻 2025-12 出现、6/9 家支持」——
 * **那是一次数据库查询的可视化，不是知识。**
 *
 * 而且它必须靠图注免责（「左端是我们能证明的最早时间，不是业界首次出现」）。
 * **一张需要图注免责的图，说明它量错了东西** —— 它量的是我们的采集能力，不是行业。
 *
 * 这张图的主体是**模型**，横轴是厂商自己发布的日期，所以不需要免责。
 * 每个节点必须回答一件事：**这一代新增了什么。**
 *
 * ## 读者能一眼拿到的三件事
 *
 * 1. **谁在猛迭代、谁停了** —— 断掉的线比连着的线信息量大
 * 2. **每一代真正加了什么** —— 不是版本号往上跳，是能力往上加
 * 3. **纵向切一刀**：同一项能力，谁先谁后
 *
 * ## 覆盖不全是明说的，不是藏起来的
 *
 * 万相和可灵能画出完整谱系，Runway/Vidu/Seedance 只有近期几个点。
 * **画一条只有两个点的线却不说明，读者会以为这家两年只更新过两次。**
 * 所以线的样式区分「完整」与「片段」，并在行尾直说。
 */
const W = 1080;
const PAD = { l: 132, r: 128, t: 44, b: 28 };
const ROW = 118; // 标签最多三层，给够地方，否则又糊成一团

const MS = (d: string) => new Date(`${d.length === 7 ? `${d}-01` : d}T00:00:00Z`).getTime();
/** 一年内 ≥4 次发布记为「持续迭代」；否则只能算片段，不能让读者误以为这家两年只更新过两次。 */
const DENSE = 4;

export default function Genealogy() {
  const [hot, setHot] = useState<string | null>(null);

  const byModel = new Map<string, typeof atlas.versions>();
  for (const v of atlas.versions) byModel.set(v.m, [...(byModel.get(v.m) ?? []), v]);
  const lanes = [...byModel.entries()]
    .map(([m, vs]) => ({
      model: atlas.models.find((x) => x.id === m)!,
      vs: [...vs].sort((a, b) => MS(a.date) - MS(b.date)),
    }))
    .filter((l) => l.model)
    .sort((a, b) => b.vs.length - a.vs.length);

  const all = atlas.versions.map((v) => MS(v.date));
  const t0 = Math.min(...all), t1 = Math.max(...all);
  const x = (d: string) => PAD.l + ((MS(d) - t0) / (t1 - t0)) * (W - PAD.l - PAD.r);
  const H = PAD.t + lanes.length * ROW + PAD.b;

  // 年份刻度
  // 起点那一年的 1 月 1 日通常落在范围之外（数据从 2025-02 开始），
  // 但**读者需要知道左边是哪一年** —— 所以它照样标，只是画在轴的最左端。
  const years: { y: number; at: string }[] = [];
  for (let y = new Date(t0).getUTCFullYear(); y <= new Date(t1).getUTCFullYear(); y++) {
    const ms = Date.UTC(y, 0, 1);
    years.push({ y, at: ms >= t0 ? `${y}-01-01` : new Date(t0).toISOString().slice(0, 10) });
  }
  const half = years.map(({ y }) => Date.UTC(y, 6, 1)).filter((ms) => ms >= t0 && ms <= t1);

  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[820px]" style={{ height: H }}>
          {years.map(({ y, at }) => (
            <g key={y}>
              <line x1={x(at)} x2={x(at)} y1={PAD.t - 22} y2={H - PAD.b} stroke="var(--color-rule)" />
              <text x={x(at) + 5} y={PAD.t - 27} fontSize="12" fill="var(--color-muted)">{y}</text>
            </g>
          ))}
          {half.map((ms) => (
            <line key={ms} x1={x(new Date(ms).toISOString().slice(0, 10))} x2={x(new Date(ms).toISOString().slice(0, 10))}
              y1={PAD.t - 12} y2={H - PAD.b} stroke="var(--color-rule)" strokeOpacity="0.4" strokeDasharray="3 4" />
          ))}

          {lanes.map((l, i) => {
            const y = PAD.t + i * ROW + 30;
            const dense = l.vs.length >= DENSE;
            const dim = hot && hot !== l.model.id;
            const dead = l.model.status === "discontinued";
            return (
              <g key={l.model.id} opacity={dim ? 0.22 : 1} onMouseEnter={() => setHot(l.model.id)} onMouseLeave={() => setHot(null)}>
                <text x={PAD.l - 12} y={y + 4} textAnchor="end" fontSize="14" fontWeight="600" fill="var(--color-ink)">
                  {l.model.family}
                </text>
                {/* 实线＝持续迭代；虚线＝我们只拿到片段。**两者必须一眼分得开。** */}
                <line x1={x(l.vs[0].date) - (l.vs.length === 1 ? 22 : 0)}
                  x2={x(l.vs[l.vs.length - 1].date) + (l.vs.length === 1 ? 22 : 0)} y1={y} y2={y}
                  stroke={dead ? "var(--color-no)" : "var(--color-yes)"} strokeWidth={dense ? 3 : 1.5}
                  strokeDasharray={dense ? undefined : "6 5"} strokeLinecap="round" />

                {/*
                  标签分层不能按奇偶排。可灵 8 个月里发了 6 次，奇偶两层还是会撞成一团 ——
                  **按实际像素距离贪心分层**：离上一个同层标签太近就换一层。
                */}
                {(() => {
                  const lastAt: number[] = [];
                  return l.vs.map((v, j) => {
                  const gen = j === 0 || v.version !== l.vs[j - 1].version; // 换代 vs 增量
                  const px = x(v.date);
                  let tier = 0;
                  while (lastAt[tier] !== undefined && px - lastAt[tier] < 132) tier += 1;
                  lastAt[tier] = px;
                  const up = tier % 2 === 0;
                  const step = Math.floor(tier / 2) * 26;
                  // 贴右边的节点标签居中会压到右侧那句「只拿到 N 个点」——
                  // 靠边就改成右对齐，靠左同理。
                  const near = px > W - PAD.r - 60 ? "end" : px < PAD.l + 60 ? "start" : "middle";
                  const dx = near === "end" ? -8 : near === "start" ? 8 : 0;
                  return (
                    <g key={`${v.date}-${v.added}`}>
                      <circle cx={x(v.date)} cy={y} r={gen ? 6 : 3.5}
                        fill={gen ? "var(--color-yes)" : "var(--color-paper)"}
                        stroke="var(--color-yes)" strokeWidth="2" />
                      <line x1={px} x2={px} y1={y} y2={up ? y - 9 - step : y + 9 + step}
                        stroke="var(--color-rule)" strokeWidth="1" />
                      <text x={px + dx} y={up ? y - 13 - step : y + 22 + step} textAnchor={near} fontSize="11"
                        fill="var(--color-ink)" fontWeight={gen ? 600 : 400}>
                        {gen ? `${v.version} · ` : ""}{v.added.length > 11 ? `${v.added.slice(0, 10)}…` : v.added}
                      </text>
                      <text x={px + dx} y={up ? y - 25 - step : y + 34 + step} textAnchor={near} fontSize="9.5"
                        fill="var(--color-muted)">{v.date.slice(0, 7)}</text>
                    </g>
                  );
                });
                })()}
                <text x={W - PAD.r + 12} y={y + 4} fontSize="11.5" fill={dense ? "var(--color-muted)" : "var(--color-unknown)"}>
                  {dense ? `${l.vs.length} 次发布` : `只拿到 ${l.vs.length} 个点`}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* 图外的话只说两件事：怎么读、哪里不全。**不解释我们怎么采的。** */}
      <p className="text-muted text-[13px] leading-relaxed max-w-[880px]">
        实心大点＝换代，空心小点＝这一代里新增的能力。
        <b className="text-ink">实线＝这家我们拿到了连续的发布记录；虚线＝只拿到片段</b>
        {" "}—— 虚线不代表它更新得少，代表我们还没把它的发布记录补齐。
      </p>

      {hot && (
        <div className="border border-rule rounded-lg bg-card p-3 max-w-[880px] flex flex-col gap-1.5">
          {(byModel.get(hot) ?? []).map((v) => (
            <p key={`${v.date}-${v.added}`} className="text-[13px] leading-relaxed">
              <span className="text-muted tabular-nums mr-2">{v.date}</span>
              <b className="text-ink">{v.added}</b>
              <span className="text-muted ml-2">
                原文：「{v.quote}」
                <a href={atlas.sources[v.src]?.url} target="_blank" rel="noreferrer" className="underline ml-1.5 hover:text-yes">
                  {atlas.sources[v.src]?.name}
                </a>
              </span>
            </p>
          ))}
          <Link href={modelHref(hot)} className="text-[13px] underline hover:text-yes self-start mt-1">
            {label(atlas.models.find((m) => m.id === hot)!)} 的完整能力 →
          </Link>
        </div>
      )}
    </div>
  );
}

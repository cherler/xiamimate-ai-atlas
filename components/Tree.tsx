"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { atlas, label, orgOf } from "@/lib/atlas";
import { modelHref } from "@/lib/slug";

/**
 * 模型演化树。**时间是纵轴，树从下往上长；两条主干：开源 / 闭源。**
 *
 * ## 为什么是这个形态
 *
 * 上一版是横向泳道，一节点一槽，67 个节点拉了 4000px —— 那不是树，是清单。
 * 参照 LLM 演化树那一类图：**时间做一根轴，血缘分叉横向铺开，
 * 模型在各自发布的时刻长出来。** 分叉是真的（Wan2.1 底座上同时长出
 * FLF2V 和 VACE），平铺会把分叉整个抹掉。
 *
 * ## 两条主干怎么分
 *
 * 按**第一次发布时是否公开权重**分。这不是标签游戏 ——
 * 它照出一件别处看不到的事：**万相从开源走向闭源**（2.1/2.2 在官方 HF 上有权重，
 * 2.5 之后没有），**海螺反过来**（只有最新的 H3 放了权重）。**两条线在中间交叉。**
 * 换向的那个节点单独描出来。
 *
 * ## 文字为什么少
 *
 * §7.1 的验收：删掉正文只留节点、线、日期、关键词，仍要看得懂。
 * 所以图上只有**产品线名 + 时间轴**，每个节点具体加了什么在点开之后 ——
 * 67 个标签同时铺在图上，只会变成一团噪音。
 */
const W = 1240;
const PAD = { t: 56, b: 44, l: 78, r: 58 };
const AXIS_H = 880;

const MS = (d: string) => new Date(`${d.length === 7 ? `${d}-01` : d}T00:00:00Z`).getTime();
const ymd = (ms: number) => new Date(ms).toISOString().slice(0, 10);

type Node = {
  id: string; parent?: string; m: string; version: string; date: string;
  added: string; cap?: string; src: string; quote: string;
};

/** 主干配色。开源一族偏绿，闭源一族偏冷 —— 一眼分得开，且不靠图例。 */
const HUE_OPEN = ["#1f6f5c", "#7a9a3e", "#2f8f8a", "#4a6b2e", "#3aa08a", "#8aa832", "#276b4e"];
const HUE_CLOSED = ["#7a5cc4", "#b06a2c", "#2c6bb0", "#b03a7a", "#5b4fa8", "#c07a1a", "#3a5fa0"];

export default function Tree() {
  const [pin, setPin] = useState<string | null>(null);
  const [cap, setCap] = useState<string | null>(null);
  const [cut, setCut] = useState(100);
  const [playing, setPlaying] = useState(false);
  const raf = useRef(0);

  const nodes = atlas.versions as unknown as Node[];
  const all = nodes.map((n) => MS(n.date)).sort((a, b) => a - b);
  /**
   * 轴的起点不取最早那一条。**2024-10 之前只有一个节点**（Lightricks 的
   * LongAnimateDiff，2023-12），线性铺开会让整张图底部空掉四成。
   * 取第二早的做起点，更早的那些贴在轴底单独标出来 —— **不删数据，只是不让它撑空版面**。
   */
  const t0 = all[1] ?? all[0], t1 = all[all.length - 1];
  const earlier = nodes.filter((n) => MS(n.date) < t0);
  const cutMs = t0 + ((t1 - t0) * cut) / 100;

  /** 时间越晚越靠上 —— 树是往上长的。 */
  const y = (d: string) =>
    PAD.t + AXIS_H - (Math.max(0, MS(d) - t0) / (t1 - t0)) * AXIS_H;

  const lines = useMemo(() => {
    const by = new Map<string, Node[]>();
    for (const n of nodes) by.set(n.m, [...(by.get(n.m) ?? []), n]);
    const arr = [...by.entries()].map(([m, ns]) => {
      const model = atlas.models.find((x) => x.id === m)!;
      const sorted = [...ns].sort((a, b) => MS(a.date) - MS(b.date));
      // 第一次发布时开不开源 —— mixed 的按「起点」归边，换向的节点后面单独描
      const w = model?.weights;
      const side: "open" | "closed" =
        w === "open" ? "open" : w === "closed" ? "closed" : m === "wan" ? "open" : "closed";
      return { m, model, ns: sorted, side, first: sorted[0].date };
    }).filter((l) => l.model);
    const open = arr.filter((l) => l.side === "open").sort((a, b) => a.first.localeCompare(b.first));
    const closed = arr.filter((l) => l.side === "closed").sort((a, b) => a.first.localeCompare(b.first));
    const place = (list: typeof arr, x0: number, x1: number, hue: string[]) =>
      list.map((l, i) => ({
        ...l,
        // 每条线拿到的是一个**带**，不是一个 x —— 分叉要在带内铺开
        cx: x0 + ((i + 0.5) / list.length) * (x1 - x0),
        band: ((x1 - x0) / list.length) * 0.82,
        color: hue[i % hue.length],
      }));
    return [
      ...place(open, PAD.l, W / 2 - 26, HUE_OPEN),
      ...place(closed, W / 2 + 26, W - PAD.r, HUE_CLOSED),
    ];
  }, [nodes]);

  /**
   * 带内的横向布局：**这才是「树」的部分**。
   *
   * 上一版把一条产品线压成一根竖线，Wan2.1 上长出的 FLF2V 和 VACE
   * 全落在同一个 x 上 —— **分叉被整个抹掉了，而分叉正是谱系的意义。**
   *
   * 做法是经典 tidy tree 的横向版：叶子按顺序占槽，父节点取子节点中位。
   */
  const posOf = useMemo(() => {
    const p = new Map<string, { x: number; y: number; color: string; side: string }>();
    for (const l of lines) {
      const kids = new Map<string, Node[]>();
      const roots: Node[] = [];
      for (const n of l.ns) (n.parent && l.ns.some((z) => z.id === n.parent) ? kids.set(n.parent, [...(kids.get(n.parent) ?? []), n]) : roots.push(n));
      const slot = new Map<string, number>();
      let next = 0;
      const walk = (n: Node): number => {
        const cs = kids.get(n.id) ?? [];
        if (!cs.length) { const s = next++; slot.set(n.id, s); return s; }
        const ss = cs.map(walk);
        const s = (Math.min(...ss) + Math.max(...ss)) / 2;
        slot.set(n.id, s);
        return s;
      };
      for (const r of roots) walk(r);
      const maxS = Math.max(1, ...[...slot.values()]);
      const usedY: number[] = [];
      for (const n of l.ns) {
        let yy = y(n.date);
        while (usedY.some((u) => Math.abs(u - yy) < 11)) yy -= 11; // 同月发布不叠成一点
        usedY.push(yy);
        const s = slot.get(n.id) ?? 0;
        const x = l.cx + (maxS ? (s / maxS - 0.5) : 0) * l.band;
        p.set(n.id, { x, y: yy, color: l.color, side: l.side });
      }
    }
    return p;
  }, [lines]);

  useEffect(() => {
    if (!playing) return;
    let last = performance.now();
    const tick = (now: number) => {
      const d = (now - last) / 1000; last = now;
      setCut((c) => { const n = c + d * 20; if (n >= 100) { setPlaying(false); return 100; } return n; });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [playing]);

  const capsHere = useMemo(() => {
    const ids = new Set(nodes.map((n) => n.cap).filter(Boolean) as string[]);
    return atlas.capabilities.filter((c) => ids.has(c.id));
  }, [nodes]);

  const order = useMemo(() => {
    if (!cap) return new Map<string, number>();
    const first = new Map<string, string>();
    for (const n of [...nodes].sort((a, b) => MS(a.date) - MS(b.date)))
      if (n.cap === cap && !first.has(n.m)) first.set(n.m, n.date);
    return new Map([...first.entries()].sort((a, b) => MS(a[1]) - MS(b[1])).map(([m], i) => [m, i + 1]));
  }, [cap, nodes]);

  const H = PAD.t + AXIS_H + PAD.b;
  const years: number[] = [];
  for (let yr = new Date(t0).getUTCFullYear(); yr <= new Date(t1).getUTCFullYear(); yr++) years.push(yr);
  const hot = pin ? nodes.find((n) => n.id === pin) : null;
  const openW = atlas.models.find((m) => m.id === "wan");
  const hail = atlas.models.find((m) => m.id === "hailuo");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2 text-[13px]">
        <button onClick={() => { if (cut >= 100) setCut(0); setPlaying(!playing); }}
          className="px-3 py-1 rounded border border-yes text-yes hover:bg-yes hover:text-paper">
          {playing ? "⏸ 暂停" : "▶ 按时间长出来"}
        </button>
        <input type="range" min={0} max={100} value={cut}
          onChange={(e) => { setPlaying(false); setCut(+e.target.value); }}
          className="flex-1 min-w-[160px] max-w-[340px] accent-[var(--color-yes)]" aria-label="时间游标" />
        <b className="text-ink tabular-nums">{ymd(cutMs).slice(0, 7)}</b>
        <span className="text-muted tabular-nums">{nodes.filter((n) => MS(n.date) <= cutMs).length}/{nodes.length}</span>
        <span className="text-muted ml-auto">谁先谁后：</span>
        <button onClick={() => setCap(null)}
          className={`px-2 py-0.5 rounded border ${!cap ? "border-yes text-yes" : "border-rule text-muted hover:text-ink"}`}>全部</button>
        {capsHere.map((c) => (
          <button key={c.id} onClick={() => setCap(cap === c.id ? null : c.id)}
            className={`px-2 py-0.5 rounded border ${cap === c.id ? "border-yes text-yes" : "border-rule text-muted hover:text-ink"}`}>
            {c.zh}
          </button>
        ))}
      </div>

      {cap && (
        <p className="text-[15px] border border-yes/40 bg-yes/6 rounded-lg px-3 py-2">
          <b className="text-ink">
            {[...order.entries()].map(([m, i]) => (
              <span key={m}>{i > 1 && " → "}{i}. {atlas.models.find((x) => x.id === m)?.family}</span>
            ))}
          </b>
        </p>
      )}

      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[900px]" style={{ height: H }}>
          {/* 年份横线 */}
          {years.map((yr) => {
            const ms = Date.UTC(yr, 0, 1);
            if (ms < t0 || ms > t1) return null;
            const yy = y(ymd(ms));
            return (
              <g key={yr}>
                <line x1={PAD.l - 34} x2={W - 20} y1={yy} y2={yy} stroke="var(--color-rule)" strokeDasharray="3 5" />
                <text x={PAD.l - 40} y={yy + 4} textAnchor="end" fontSize="12" fill="var(--color-muted)">{yr}</text>
              </g>
            );
          })}

          {/* 两条主干标题 */}
          <text x={(PAD.l + W / 2 - 26) / 2} y={22} textAnchor="middle" fontSize="14" fontWeight="700" fill="var(--color-yes)">
            开源权重
          </text>
          <text x={(W / 2 + 26 + W - PAD.r) / 2} y={22} textAnchor="middle" fontSize="14" fontWeight="700" fill="#7a5cc4">
            闭源
          </text>
          <line x1={W / 2} x2={W / 2} y1={30} y2={H - PAD.b} stroke="var(--color-rule)" />

          {/* 血缘的边：先画，节点压在上面 */}
          {nodes.filter((n) => n.parent && posOf.has(n.id) && posOf.has(n.parent!)).map((n) => {
            const a = posOf.get(n.parent!)!, b = posOf.get(n.id)!;
            const on = MS(n.date) <= cutMs;
            const lit = !cap || n.cap === cap;
            const dim = pin && nodes.find((x) => x.id === pin)?.m !== n.m;
            // 有机曲线：从父节点向上弯到子节点，不用直角折线
            const my = (a.y + b.y) / 2;
            return (
              <path key={`e-${n.id}`}
                d={`M${a.x},${a.y} C${a.x},${my} ${b.x},${my} ${b.x},${b.y}`}
                fill="none" stroke={b.color} strokeWidth={a.x === b.x ? 2.4 : 1.4}
                opacity={on ? (lit && !dim ? 0.6 : 0.12) : 0}
                style={{ transition: "opacity .35s" }} />
            );
          })}

          {/* 产品线名：贴在这条线最新那个节点的上方 */}
          {lines.map((l) => {
            const top = l.ns[l.ns.length - 1];
            const p = posOf.get(top.id)!;
            const on = MS(top.date) <= cutMs;
            return (
              <text key={`t-${l.m}`} x={p.x} y={p.y - 13} textAnchor="middle" fontSize="12" fontWeight="700"
                fill={l.color} opacity={on ? 1 : 0.15} style={{ transition: "opacity .35s" }}>
                {l.model.family}
              </text>
            );
          })}

          {/* 靠左对齐，不能用 end —— end 会把「2023-12 起」推出画布左边（刚才裁成了「3-12 起」）。
              另：JSX 注释不能和元素并列当兄弟，这个错今天犯了第三次。 */}
          {earlier.length > 0 && (
            <text x={6} y={PAD.t + AXIS_H + 24} fontSize="11" fill="var(--color-muted)">
              轴起于 {ymd(t0).slice(0, 7)}；更早还有 {earlier.length} 条（{ymd(Math.min(...earlier.map((n) => MS(n.date)))).slice(0, 7)}）
            </text>
          )}

          {nodes.map((n) => {
            const p = posOf.get(n.id);
            if (!p) return null;
            const on = MS(n.date) <= cutMs;
            const lit = !cap || n.cap === cap;
            const dim = pin && nodes.find((x) => x.id === pin)?.m !== n.m;
            const m = atlas.models.find((x) => x.id === n.m);
            // 实心＝这一代权重是公开的；空心＝闭源。**换向的节点会一眼看出来。**
            const openHere = m?.weights === "open" || (m?.id === "hailuo" && n.version === "H3")
              || (m?.id === "wan" && ["2.1", "2.2", "Wan2.1", "Wan2.2"].includes(n.version));
            const rank = cap ? order.get(n.m) : undefined;
            return (
              <g key={n.id} style={{ cursor: "pointer", transition: "opacity .35s" }}
                opacity={on ? (lit && !dim ? 1 : 0.18) : 0}
                onClick={() => setPin(pin === n.id ? null : n.id)}>
                <circle cx={p.x} cy={p.y} r={pin === n.id ? 6.5 : 4.5}
                  fill={openHere ? p.color : "var(--color-paper)"} stroke={p.color} strokeWidth="2" />
                {rank && (
                  <>
                    <circle cx={p.x + 13} cy={p.y} r="7.5" fill={p.color} />
                    <text x={p.x + 13} y={p.y + 3} textAnchor="middle" fontSize="10" fontWeight="700"
                      fill="var(--color-paper)">{rank}</text>
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-muted">
        <span className="flex items-center gap-1.5">
          <svg width="13" height="13"><circle cx="6.5" cy="6.5" r="4.5" fill="var(--color-yes)" /></svg>这一代权重公开
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="13" height="13"><circle cx="6.5" cy="6.5" r="4" fill="var(--color-paper)" stroke="#7a5cc4" strokeWidth="2" /></svg>闭源
        </span>
        <span>点任一节点看它加了什么</span>
        <Link href="/method#genealogy" className="underline hover:text-ink">这张图怎么读 →</Link>
      </div>

      {/* 两条线交叉，是这张图上最值得说的一件事 */}
      <p className="text-[14px] leading-relaxed max-w-[860px]">
        <b className="text-ink">两条主干中间是交叉的。</b>
        {openW?.weights_note && <> 万相：{openW.weights_note.replace(/\*\*/g, "")}</>}
        {hail?.weights_note && <> 海螺：{hail.weights_note.replace(/\*\*/g, "")}</>}
      </p>

      {hot && (
        <div className="border border-rule rounded-lg bg-card p-3 flex flex-col gap-1">
          <p className="text-[15px]">
            <b className="text-ink">{atlas.models.find((m) => m.id === hot.m)?.family} {hot.version}</b>
            <span className="text-muted text-[13px] ml-2">{orgOf(hot.m)?.zh} · {hot.date}</span>
          </p>
          <p className="text-[14px]">新增：<b className="text-ink">{hot.added}</b></p>
          <p className="text-muted text-[12px] leading-relaxed">
            原文：「{hot.quote}」
            <a href={atlas.sources[hot.src]?.url} target="_blank" rel="noreferrer" className="underline ml-1.5 hover:text-yes">
              {atlas.sources[hot.src]?.name}
            </a>
          </p>
          <Link href={modelHref(hot.m)} className="text-[13px] underline hover:text-yes self-start">
            {label(atlas.models.find((m) => m.id === hot.m)!)} 的完整能力 →
          </Link>
        </div>
      )}
    </div>
  );
}

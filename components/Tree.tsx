"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { atlas, label, orgOf } from "@/lib/atlas";
import { modelHref } from "@/lib/slug";

/**
 * 模型演化树。**时间是纵轴，树从下往上长；14 条产品线横向平铺。**
 *
 * ## 为什么是这个形态
 *
 * 上一版是横向泳道，一节点一槽，67 个节点拉了 4000px —— 那不是树，是清单。
 * 参照 LLM 演化树那一类图：**时间做一根轴，血缘分叉横向铺开，
 * 模型在各自发布的时刻长出来。** 分叉是真的（Wan2.1 底座上同时长出
 * FLF2V 和 VACE），平铺会把分叉整个抹掉。
 *
 * ## 开不开源只由「实心/空心」逐代表示，颜色只用来区分线
 *
 * 上一版把宽度硬切两半（左开源右闭源），万相/海螺这种换过向的被挤在交界，
 * 逼出一句文字补救。改成颜色分之后又踩了第二个坑：图例写「绿系=开源家族、
 * 彩色=闭源家族」，同时写「实心=权重公开」—— **两套都叫开源/闭源，结论还相反**
 * （MiniMax 是紫色「闭源家族」，但 H3 实心「权重公开」）。负责人当场问
 * 「公开权重不就是开源吗」。**是分类有毛病，不是他没看懂。**
 *
 * 真相：**开不开源是逐代变的**（万相开源起家、3.0 转闭源；海螺闭源起家、H3 才放权重），
 * 按「家族」贴死标签本身就错。所以现在：开不开源**只看节点实心/空心**，
 * 颜色退回只做一件事 —— 把 14 条产品线彼此区分开，不承载开源语义。
 *
 * ## 文字为什么少
 *
 * §7.1 的验收：删掉正文只留节点、线、日期、关键词，仍要看得懂。
 * 所以图上只有**产品线名 + 时间轴**，每个节点具体加了什么在点开之后 ——
 * 67 个标签同时铺在图上，只会变成一团噪音。
 */
const W = 1240;
const PAD = { t: 56, b: 120, l: 78, r: 58 };  // b 加大：轴底下方要放树根与主干
const AXIS_H = 560;

const MS = (d: string) => new Date(`${d.length === 7 ? `${d}-01` : d}T00:00:00Z`).getTime();
const ymd = (ms: number) => new Date(ms).toISOString().slice(0, 10);

type Node = {
  id: string; parent?: string; m: string; version: string; date: string;
  added: string; cap?: string; src: string; quote: string;
};

/**
 * 两组色板，**只用来把相邻的线区分开，不承载「开不开源」的含义**。
 * （开不开源看节点实心/空心，逐代判断。）
 * 分成两组是为了让首发早的一批和晚的一批在色相上错开，扫视时不糊成一片。
 */
const HUE_A = ["#1f6f5c", "#7a9a3e", "#2f8f8a", "#4a6b2e", "#3aa08a", "#8aa832", "#276b4e"];
const HUE_B = ["#7a5cc4", "#b06a2c", "#2c6bb0", "#b03a7a", "#5b4fa8", "#c07a1a", "#3a5fa0"];

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
      // **按架构族分主干** —— 这是让树从一个根长出来的那一层（负责人 2026-08-09）。
      // 那张 LLM 演化树的根不是权重派生，是 Transformer 架构；三条主干是架构族。
      // 视频这边同理：扩散是共同的根，DiT / 自回归 / 混合 是主干。
      const group: string = (model as { arch?: string })?.arch ?? "unknown";
      return { m, model, ns: sorted, group, first: sorted[0].date };
    }).filter((l) => l.model);
    // 按架构族聚在一起，族内按首发时间排 —— 同族的线彼此相邻，才看得出「一支」。
    const ORDER = ["dit", "hybrid", "ar", "unknown"];
    const seq = ORDER.flatMap((g) =>
      arr.filter((l) => l.group === g).sort((a, b) => a.first.localeCompare(b.first)));
    let oi = 0, ci = 0;
    return seq.map((l, i) => ({
      ...l,
      // 每条线拿到的是一个**带**，不是一个 x —— 分叉要在带内铺开
      cx: PAD.l + ((i + 0.5) / seq.length) * (W - PAD.l - PAD.r),
      band: ((W - PAD.l - PAD.r) / seq.length) * 0.82,
      color: l.group === "dit" ? HUE_A[oi++ % HUE_A.length] : HUE_B[ci++ % HUE_B.length],
    }));
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
    const p = new Map<string, { x: number; y: number; color: string; group: string }>();
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
        while (usedY.some((u) => Math.abs(u - yy) < 8)) yy -= 8; // 同月发布不叠成一点
        usedY.push(yy);
        const s = slot.get(n.id) ?? 0;
        const x = l.cx + (maxS ? (s / maxS - 0.5) : 0) * l.band;
        p.set(n.id, { x, y: yy, color: l.color, group: l.group });
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

  // 每个架构族的主干落点 = 该族所有产品线 cx 的中位数
  const trunks = useMemo(() => {
    const by = new Map<string, number[]>();
    for (const l of lines) by.set(l.group, [...(by.get(l.group) ?? []), l.cx]);
    return [...by.entries()].map(([g, xs]) => ({ g, cx: xs.reduce((a, b) => a + b, 0) / xs.length }));
  }, [lines]);

  const H = PAD.t + AXIS_H + PAD.b;
  const years: number[] = [];
  for (let yr = new Date(t0).getUTCFullYear(); yr <= new Date(t1).getUTCFullYear(); yr++) years.push(yr);
  // 从 t0 那个月的月初起，逐月到 t1 —— 左侧月份刻度用它。
  const months: number[] = [];
  for (let d = Date.UTC(new Date(t0).getUTCFullYear(), new Date(t0).getUTCMonth(), 1); d <= t1; ) {
    if (d >= t0) months.push(d);
    const nx = new Date(d);
    nx.setUTCMonth(nx.getUTCMonth() + 1);
    d = nx.getTime();
  }
  const hot = pin ? nodes.find((n) => n.id === pin) : null;

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
          {/* 月份刻度：左侧一把「尺子」—— 每月一个短刻度，季度（1/4/7/10 月）标月份数字。
              原来只有 2025/2026 两条年线，太粗，看不出一条线上两个节点隔了几个月。 */}
          {months.map((ms) => {
            const yy = y(ymd(ms));
            const mo = new Date(ms).getUTCMonth() + 1;
            const quarter = mo % 3 === 1; // 1/4/7/10
            return (
              <g key={`mo-${ms}`}>
                <line x1={PAD.l - 34} x2={PAD.l - (quarter ? 26 : 30)} y1={yy} y2={yy} stroke="var(--color-rule)" />
                {quarter && (
                  <text x={PAD.l - 38} y={yy + 3} textAnchor="end" fontSize="8" fill="var(--color-muted)" opacity={0.75}>
                    {mo}月
                  </text>
                )}
              </g>
            );
          })}
          {/* 年份横线：全宽虚线，比月份刻度显眼，做粗分隔 */}
          {years.map((yr) => {
            const ms = Date.UTC(yr, 0, 1);
            if (ms < t0 || ms > t1) return null;
            const yy = y(ymd(ms));
            return (
              <g key={yr}>
                <line x1={PAD.l - 34} x2={W - 20} y1={yy} y2={yy} stroke="var(--color-rule)" strokeDasharray="3 5" />
                <text x={PAD.l - 40} y={yy - 3} textAnchor="end" fontSize="12" fontWeight="700" fill="var(--color-ink)">{yr}</text>
              </g>
            );
          })}

          {/*
            **树根与主干**（负责人 2026-08-09）：那张 LLM 演化树之所以是「一棵树」，
            是因为所有分支汇到一个共同的根 —— 不是权重派生，是 **Transformer 架构**。
            视频这边同理：**扩散模型是共同的根**，DiT / 混合 / 自回归是从根上分出的主干。
            我们原来是 14 根各自从底部冒出来的独立竖线，看着像草不像树 —— 这里补上。
          */}
          {(() => {
            const rootY = PAD.t + AXIS_H + 74;   // 根压到更低，主干才有高度长出来
            const rootX = W / 2;
            const forkY = PAD.t + AXIS_H + 4;    // 主干在轴底附近分叉
            const fams = [...new Set(trunks.map((t) => t.g))];
            return (
              <g>
                {/* 从根到各架构族主干的分叉 */}
                {trunks.map((t) => (
                  <path key={`trunk-${t.g}`}
                    // 从根竖直上升一段再向各族横向张开 —— 才像树干分叉，不是一条压扁的横线
                    d={`M${rootX},${rootY} C${rootX},${rootY - 42} ${t.cx},${rootY - 34} ${t.cx},${forkY}`}
                    fill="none" stroke="var(--color-rule)" strokeWidth={4} opacity={0.95} />
                ))}
                {/* 族名标在分叉点下方 */}
                {trunks.map((t) => (
                  <text key={`tl-${t.g}`} x={t.cx} y={forkY + 14} textAnchor="middle"
                    fontSize="10" fontWeight="700" fill="var(--color-muted)">
                    {(atlas as unknown as { $arch: Record<string, { zh: string }> }).$arch?.[t.g]?.zh ?? t.g}
                  </text>
                ))}
                {/* 根 */}
                <circle cx={rootX} cy={rootY} r={5} fill="var(--color-muted)" />
                <text x={rootX} y={rootY + 17} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--color-ink)">
                  扩散模型
                </text>
                <text x={rootX} y={rootY + 29} textAnchor="middle" fontSize="9" fill="var(--color-muted)">
                  {fams.length} 支主干 · {lines.length} 条产品线
                </text>
              </g>
            );
          })()}

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

          {/* 每条线标首末两个节点 —— 上一版只标最新一个，67 个点里 53 个是哑点，
              「看不出是什么」的最直接原因。末节点标产品线名（它长成了什么），
              首节点标它出道时叫什么（这条线从哪来）。 */}
          {lines.map((l) => {
            const top = l.ns[l.ns.length - 1];
            const bot = l.ns[0];
            const pt = posOf.get(top.id)!;
            const pb = posOf.get(bot.id)!;
            const onTop = MS(top.date) <= cutMs;
            const onBot = MS(bot.date) <= cutMs;
            // 首标签的条件（否则叠成一团）：
            //   ① 多节点线（单节点如 Mochi 首末同点，不标）
            //   ② 离末标签够远（短线首末会叠）
            //   ③ **首节点不在轴底最早那批** —— LTX/Allegro/浑源的首发都挤在 2024 底部，
            //      那里已经有「轴起于…」说明和一堆节点，再塞首标签必然叠字。
            //      只有出道较晚、首节点有空档的线（Seedance/Kling/Vidu…）才标首。
            const atFloor = pb.y > PAD.t + AXIS_H - 40;
            const showBot = l.ns.length > 1 && Math.abs(pt.y - pb.y) > 46 && !atFloor;
            return (
              <g key={`t-${l.m}`}>
                {/* 公司名放产品线名上方一行小灰字 —— 回答「谁家的」，和关系图呼应。
                    去掉「科技 / DeepMind」等长后缀，免得撑太宽压到邻线。 */}
                <text x={pt.x} y={pt.y - 26} textAnchor="middle" fontSize="9"
                  fill="var(--color-muted)" opacity={onTop ? 0.85 : 0.12} style={{ transition: "opacity .35s" }}>
                  {(orgOf(l.m)?.zh ?? "").replace("稀宇科技 ", "").replace(" DeepMind", "").replace("科技", "")}
                </text>
                <text x={pt.x} y={pt.y - 13} textAnchor="middle" fontSize="12" fontWeight="700"
                  fill={l.color} opacity={onTop ? 1 : 0.15} style={{ transition: "opacity .35s" }}>
                  {l.model.family}
                </text>
                {showBot && (
                  <text x={pb.x} y={pb.y + 17} textAnchor="middle" fontSize="10"
                    fill={l.color} opacity={onBot ? 0.65 : 0.12} style={{ transition: "opacity .35s" }}>
                    {(bot.version || bot.added).slice(0, 13)}
                  </text>
                )}
              </g>
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
        {/*
          **开不开源只看实心/空心，不看颜色。**
          之前图例写「绿系=开源家族、彩色=闭源家族」，同时又写「实心=权重公开」——
          两套都叫开源/闭源，结论还能相反（MiniMax 紫色=闭源家族，但 H3 是实心=权重公开），
          负责人当场问「公开权重不就是开源吗」。**是分类有毛病，不是他没看懂。**
          真相：开不开源是**逐代变**的（万相开源起家、3.0 转闭源；海螺闭源起家、H3 放权重），
          按「家族」贴死标签本身就错。所以颜色退回只做一件事：区分 14 条线。
        */}
        <span>
          <b className="text-ink">实心</b> = 这一代权重公开，<b className="text-ink">空心</b> = 没公开。
          <b className="text-ink">开不开源看点，不看颜色</b> —— 颜色只用来区分 14 条产品线。
        </span>
        <span className="flex items-center gap-1.5">
          <svg width="34" height="13">
            <circle cx="5" cy="6.5" r="4.5" fill="#1f6f5c" />
            <circle cx="16" cy="6.5" r="4" fill="var(--color-paper)" stroke="#7a5cc4" strokeWidth="2" />
            <circle cx="28" cy="6.5" r="4.5" fill="#b06a2c" />
          </svg>
          同一条线上实空混着 = 它中途换过向（万相开源起家、3.0 转闭源；海螺相反，H3 才放权重）
        </span>
        <span>产品线名旁是公司名 · <b className="text-ink">点任一节点</b>看它这一代加了什么</span>
        <Link href="/method#genealogy" className="underline hover:text-ink">这张图怎么读 →</Link>
      </div>

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

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
const PAD = { t: 56, b: 48, l: 78, r: 120 };  // r 加大：末节点标签写在右侧，别溢出画布
const AXIS_H = 560;

const MS = (d: string) => new Date(`${d.length === 7 ? `${d}-01` : d}T00:00:00Z`).getTime();
const ymd = (ms: number) => new Date(ms).toISOString().slice(0, 10);

type Node = {
  id: string; parent?: string; m: string; version: string; date: string;
  added: string; cap?: string; src: string; quote: string;
};

/**
 * **按公司着色**（负责人 2026-08-09：同色同大小分不出谁是谁）。
 *
 * 走过两个极端：先是 14 条线 14 种随机色（一团花），再是全青绿单色（分不清谁是谁）。
 * 正解是**颜色承载信息**：一家公司一个色，同一家的两条线（Google 的 Veo 与
 * Gemini Omni）同色 —— 这本身就是要传达的事实。
 *
 * 色板是**低饱和、明度接近**的一组，放在纸底上不打架；顺序按色相环排开，
 * 相邻的线拿到的色相差足够大，扫视时分得开。
 */
const ORG_HUE: Record<string, string> = {
  alibaba: "#2f7d5e",      // 阿里 · 绿
  kuaishou: "#c2703a",     // 快手 · 橙
  bytedance: "#2b6fb0",    // 字节 · 蓝
  tencent: "#3f8f86",      // 腾讯 · 青
  kunlun: "#7a5cc4",       // 昆仑万维 · 紫
  shengshu: "#b04a72",     // 生数 · 洋红
  minimax: "#8a7a2e",      // MiniMax · 橄榄
  google: "#4a5fa8",       // Google · 靛
  lightricks: "#1f8a7a",   // Lightricks · 蓝绿
  runway: "#a8563a",       // Runway · 砖
  rhymes: "#6b8f3a",       // Rhymes · 黄绿
  genmo: "#7d6ba8",        // Genmo · 淡紫
  hpcai: "#3d7fa0",        // 潞晨 · 天蓝
};
const FALLBACK = "#5c6a78";

/**
 * 长名简称（负责人：模型名太长就用简称）。
 * 只砍**冗余前后缀**，不砍能区分版本的部分 —— 砍错了就分不出谁是谁。
 */
const SHORT = (t: string) =>
  (t || "")
    .replace(/^HunyuanVideo/, "HY")
    .replace(/^LongAnimateDiff/, "LongAnimDiff")
    .replace(/^OpenSora-/, "OS-")
    .replace(/^Open-Sora/, "Open-Sora")
    .replace(/^SkyReels-/, "SR-")
    .replace(/^Allegro-/, "Alg-")
    .replace(/^换代[:：]?\s*/, "")
    .replace(/\s*补充发布$/, "")
    .replace(/-v\?$/, "")
    .slice(0, 12);

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
      return { m, model, ns: sorted, first: sorted[0].date };
    }).filter((l) => l.model).sort((a, b) => a.first.localeCompare(b.first));

    /**
     * **横向均匀铺开**（负责人：有的挤一起、有的空一大片）。
     * 上一版按「老枝伸得远」排，结果首发早的全挤左边、晚的全挤右边，疏密极不均。
     * 现在：**每条线占等宽的一格**，格宽 = 可用宽度 / 条数 —— 间距天然均匀。
     * 顺序仍按首发时间，读者从左到右就是从早到晚。
     */
    const usable = W - PAD.l - PAD.r;
    const slotW = usable / arr.length;
    return arr.map((l, i) => ({
      ...l,
      cx: PAD.l + slotW * (i + 0.5),
      band: slotW * 0.72,           // 带内分叉铺开的宽度，留 28% 做间隙
      color: ORG_HUE[l.model.org] ?? FALLBACK,
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
    const p = new Map<string, { x: number; y: number; color: string }>();
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
        p.set(n.id, { x, y: yy, color: l.color });
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
  // 从 t0 那个月的月初起，逐月到 t1 —— 左侧月份刻度用它。
  const months: number[] = [];
  for (let d = Date.UTC(new Date(t0).getUTCFullYear(), new Date(t0).getUTCMonth(), 1); d <= t1; ) {
    if (d >= t0) months.push(d);
    const nx = new Date(d);
    nx.setUTCMonth(nx.getUTCMonth() + 1);
    d = nx.getTime();
  }
  /**
   * **下粗上细**（负责人：既然是树，有分支的该下粗上细）。
   * 一个节点的粗细 = 它下面还挂着多少后代 —— 底座托着整条线所以最粗，
   * 末梢没有后代所以最细。这是真实树干的力学，也是谱系的信息量。
   */
  const weight = useMemo(() => {
    const kids = new Map<string, string[]>();
    for (const n of nodes) if (n.parent) kids.set(n.parent, [...(kids.get(n.parent) ?? []), n.id]);
    const memo = new Map<string, number>();
    const count = (id: string): number => {
      if (memo.has(id)) return memo.get(id)!;
      const c = (kids.get(id) ?? []).reduce((sum, k) => sum + 1 + count(k), 0);
      memo.set(id, c);
      return c;
    };
    const w = new Map<string, number>();
    for (const n of nodes) w.set(n.id, count(n.id));
    return w;
  }, [nodes]);

  /**
   * **标签位置一次性算完**（跨枝防重叠）。
   * 上一版在渲染过程里往数组 push，React 重渲时数组不清空、顺序也不保证 ——
   * 结果仍有 10 对重叠。**布局不能靠渲染副作用**，这里用 useMemo 算成纯数据。
   */
  const labelAt = useMemo(() => {
    const out = new Map<string, { x: number; y: number; side: 1 | -1 }>();
    const placed: { x0: number; x1: number; y: number }[] = [];
    // 按 y 从上到下排，先来先占 —— 顺序稳定，结果才可复现
    const all = [...nodes].filter((n) => posOf.has(n.id))
      .sort((a, b) => (posOf.get(a.id)!.y - posOf.get(b.id)!.y));
    for (const n of all) {
      const p = posOf.get(n.id)!;
      const l = lines.find((x) => x.m === n.m);
      const isTop = l ? n.id === l.ns[l.ns.length - 1].id : false;
      const isBot = l ? n.id === l.ns[0].id && l.ns.length > 1 : false;
      const raw = (isTop || isBot) ? (n.version || n.added) : (n.added || n.version);
      const w = SHORT(raw ?? "").replace(/[^\x00-\xff]/g, "aa").length * 5.2 + 10;
      let side: 1 | -1 = 1;
      let ny = p.y;
      const hit = (x0: number, x1: number, yy: number) =>
        placed.some((q) => yy > q.y - 9.5 && yy < q.y + 9.5 && x0 < q.x1 && q.x0 < x1);
      for (let g = 0; g < 16; g++) {
        const x0 = side === 1 ? p.x + 7 : p.x - 7 - w;
        if (!hit(x0, x0 + w, ny)) break;
        if (side === 1) side = -1; else { side = 1; ny -= 9.5; }
      }
      const fx0 = side === 1 ? p.x + 7 : p.x - 7 - w;
      placed.push({ x0: fx0, x1: fx0 + w, y: ny });
      out.set(n.id, { x: p.x, y: ny, side });
    }
    return out;
  }, [nodes, posOf, lines]);

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
            const quarter = mo % 3 === 1 && mo !== 1; // 4/7/10 —— 1 月不标，年份标签已经在那儿了
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
          {/* 起点下方那截「根须」已删（负责人：每个起点下面带个小尾巴是为什么）。
              它本来想表示「这条线在这一刻出现」，但既然不做树根，它就只是装饰 ——
              节点本身的位置已经说明了出现时间。 */}

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
                fill="none" stroke={b.color} strokeLinecap="round"
                // 后代越多越粗：底座 ~4px，末梢 ~1.2px
                strokeWidth={1.2 + Math.min(3, (weight.get(n.parent!) ?? 0) * 0.45)}
                opacity={on ? (lit && !dim ? 0.6 : 0.12) : 0}
                style={{ transition: "opacity .35s" }} />
            );
          })}

          {/* 每条线标首末两个节点 —— 上一版只标最新一个，67 个点里 53 个是哑点，
              「看不出是什么」的最直接原因。末节点标产品线名（它长成了什么），
              首节点标它出道时叫什么（这条线从哪来）。 */}
          {/*
            **每个节点都带名字**（负责人 2026-08-09）。参考图 100+ 个叶子全是带名方块，
            我们原来 67 个点只有 14 个顶端有名、53 个是哑点 —— 那是「看着差」最直接的一条。
            做法：标签写在节点右侧，同一条线内按 y 排序做避让（挤不下就左右交替），
            末节点仍加粗并配公司名。
          */}
          {/* **占位表是全图共用的**（负责人：不同树枝节点之间不要遮挡重叠）。
              上一版每条线各算各的，同一条线内不撞，**邻线之间照撞**。
              现在记下已占用的矩形（x 范围 + y），谁都得躲开谁。 */}
          {lines.map((l) => {
            const sorted = [...l.ns].sort((a, b) => (posOf.get(a.id)?.y ?? 0) - (posOf.get(b.id)?.y ?? 0));
            const top = l.ns[l.ns.length - 1];
            return (
              <g key={`lbl-${l.m}`}>
                {sorted.map((n) => {
                  const p = posOf.get(n.id);
                  if (!p) return null;
                  const isTop = n.id === top.id;
                  const isBot = n.id === l.ns[0].id && l.ns.length > 1;
                  const on = MS(n.date) <= cutMs;
                  /**
                   * **中间节点的标签默认全隐**（负责人：67 个标签把整幅图污染了）。
                   * 只在三种时候露出来：
                   *   ① 末节点 —— 那是产品线名与当前版本，图的骨架，常驻
                   *   ② 正在「长出来」—— 播放或拖动时间轴时，刚长到的那一批亮起
                   *   ③ 被点中 —— 读者主动要看这一条
                   * 平时图上只有 14 个末标签 + 节点，干净。
                   */
                  const scrubbing = playing || cut < 99.5;
                  const justGrown = scrubbing && MS(n.date) > cutMs - (t1 - t0) * 0.05;
                  // **首末两端常驻**（负责人要求），中间的仍默认隐藏
                  // 首标签若和末端的产品线名一模一样就不标 —— 重复两遍没有信息量
                  const dupBot = isBot && SHORT(n.version || n.added || "") === SHORT(l.model.family);
                  const showLabel = on && (isTop || (isBot && !dupBot) || pin === n.id || justGrown);
                  // 首末显版本号（那是「从哪来、长成什么」），中间显「这一代新增了什么」。
                  // 长名简称 —— 负责人：模型名太长就用简称。
                  const raw = (isTop || isBot) ? (n.version || n.added) : (n.added || n.version);
                  const txt = SHORT(raw ?? "");
                  const lp = labelAt.get(n.id) ?? { x: p.x, y: p.y, side: 1 as 1 | -1 };
                  const side = lp.side, ny = lp.y;
                  // **不用 version** —— 同一条线里它大量重复（HunyuanVideo 出现 5 次、
                  // Wan2.2 出现 4 次），重复的标签等于没有标签。用「这一代新增了什么」。
                  // 末节点例外：那里要的是产品线当前版本号。
                  return (
                    <g key={`n-${n.id}`} opacity={showLabel ? 1 : 0} style={{ transition: "opacity .3s" }}>
                      <text x={p.x + side * 8} y={ny + 3} textAnchor={side === 1 ? "start" : "end"}
                        fontSize={isTop ? 10.5 : isBot || pin === n.id ? 9.5 : 8.5}
                        fontWeight={isTop || isBot || pin === n.id ? 700 : 400}
                        fill={isTop || isBot || pin === n.id ? l.color : "var(--color-muted)"}
                        opacity={isTop || isBot || pin === n.id ? 1 : 0.85}>
                        {txt}
                      </text>
                    </g>
                  );
                })}
                {/* 公司名压在这条线最新节点的上方 */}
                {(() => {
                  const pt = posOf.get(top.id)!;
                  const on = MS(top.date) <= cutMs;
                  return (
                    <text x={pt.x} y={pt.y - 12} textAnchor="middle" fontSize="9.5" fontWeight="700"
                      fill={l.color} opacity={on ? 1 : 0.15} style={{ transition: "opacity .35s" }}>
                      {SHORT(l.model.family)}
                    </text>
                  );
                })()}
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
        <span>产品线名旁是公司名 · <b className="text-ink">拖时间轴</b>看每一代长出来 · <b className="text-ink">点任一节点</b>看它加了什么</span>
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

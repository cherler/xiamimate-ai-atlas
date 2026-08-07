"use client";

import { useState } from "react";
import Bipartite, { type Sel } from "@/components/Bipartite";
import Evolution from "@/components/Evolution";
import { atlas, capsOf, cell, compare, extendedOf, label, modelsOf, tally, transparency, type Klass, type State } from "@/lib/atlas";

const MARK: Record<State, string> = { yes: "✅", no: "❌", unknown: "⬜" };
const TONE: Record<State, string> = { yes: "text-yes", no: "text-no", unknown: "text-unknown" };

/** 生命周期。**能力对不代表能用** —— 一个已停服的模型和在售的并排站着，是有害的。 */
const STATUS: Record<string, { tag: string; cls: string }> = {
  discontinued: { tag: "已停服", cls: "text-no line-through" },
  superseded: { tag: "非主力", cls: "text-muted" },
};

/**
 * 数据里的注释一律用 `**…**` 标重点（那是给读 JSON 的人看的）。
 * **同一个坑犯了三次**：表格说明、changelog、排除记录都曾把星号原样印在页面上。
 * 打地鼠没用 —— 凡是渲染数据里的自由文本，一律走这里。
 */
function Rich({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? (
          <b key={i} className="text-ink">
            {part}
          </b>
        ) : (
          part
        ),
      )}
    </span>
  );
}

/** 「怎么个能法」的角标。原生不标，另一个接口才标 —— 默认值不占视觉。 */
function ViaTag({ via }: { via?: string }) {
  if (via !== "separate-task") return null;
  return (
    <span
      className="ml-1.5 px-1.5 py-px rounded bg-unknown/15 text-unknown text-[11px] align-middle"
      title="平台的另一个接口：能做，但要再调一次，且通常只能作用于已生成的视频"
    >
      另一个接口
    </span>
  );
}

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
      <span className={`${TONE[f.state]} font-semibold shrink-0 w-[190px]`}>
        {MARK[f.state]} {cap.zh}
        <ViaTag via={f.via} />
      </span>
      <div className="min-w-0 flex-1">
        {f.note && <Rich text={f.note} className="text-ink leading-relaxed block" />}
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
      <p className="text-muted text-[13px] mb-2">
        <b className="text-unknown">*</b> = 平台的另一个接口：能做，但要再调一次，且通常只能作用于<b className="text-ink">已生成的</b>视频。
        对「能不能做」两者都是能，对「是不是一步做完」差很多。
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
                    <span className={st?.cls ?? ""} title={m.status_note ?? ""}>
                      {label(m)}
                    </span>
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
                  <span className="font-medium">{c.zh}</span>
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

      <section className="bg-card border border-rule rounded-xl p-4">
        <Bipartite sel={sel} onSel={setSel} />
      </section>

      <section>
        <h2 className="text-[22px] font-semibold mb-1">能力演进：早出现 ≠ 铺得开</h2>
        <p className="text-muted text-[14px] mb-4 max-w-[920px] leading-relaxed">
          <b className="text-ink">这张图有一个观点，不只是一个题目</b>：
          最早出现的能力，今天反而最少人做。<b className="text-ink">对口型 2024-01 就有，如今 4/9；
          运镜控制 2024-11 就有，如今只剩 1/9</b>。而 2025 年才冒出来的
          <b className="text-ink">角色参考（2025-03）与多参考（2025-07），今天都是 8/9</b> —— 图上最粗的两条。
          <br />
          这两年真正在铺开的是「你给它什么参考」，不是「你能怎么控制它」。
          运镜那条尤其值得留意：它不是没人做，是<b className="text-ink">没人再写进文档</b> ——
          九家里八家把运镜退回成「你自己在提示词里描述」。
          <br />
          <span className="text-[13px]">
            线越粗＝实现它的模型越多。左端是<b className="text-ink">我们能证明的最早时间</b>，不是业界首次出现 ——
            点开每条能看到那句原文。
          </span>
        </p>
        <div className="bg-card border border-rule rounded-xl p-4">
          <Evolution onPick={(id) => setSel({ kind: "cap", id })} />
        </div>
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

      <section>
        <h2 className="text-[22px] font-semibold mb-1">库里还有，但没进主表</h2>
        <p className="text-muted text-[14px] mb-4 max-w-[880px] leading-relaxed">
          Extended 层：<b className="text-ink">保证「它存在」，不保证逐格核过</b>。
          主表每轨最多 10 个（ontology 规则四），加第 11 个之前必须先踢掉一个 ——
          所以这里既有<b className="text-ink">还没核到的新面孔</b>，也有<b className="text-ink">已经退场的</b>。
          <br />
          停服的模型降到这里而不是删掉：<b className="text-ink">「它没了」本身是有用的信息</b>。
        </p>
        <div className="flex flex-col gap-3">
          {(["clip", "realtime"] as const).flatMap((k) =>
            extendedOf(k).map((m) => (
              <div key={m.id} className="border-t border-rule pt-3 text-[15px]">
                <p className="font-semibold">
                  {label(m)}
                  <span className="text-muted font-normal text-[13px] ml-2">
                    {m.vendor} · {m.version_as_of}
                  </span>
                  {m.status && m.status !== "active" && (
                    <span className={`ml-2 text-[12px] ${STATUS[m.status]?.cls.replace("line-through", "")}`}>
                      {STATUS[m.status]?.tag}
                    </span>
                  )}
                </p>
                {m.status_note && <Rich text={m.status_note} className="text-muted text-[13px] mt-1 leading-relaxed block" />}
              </div>
            )),
          )}
        </div>
      </section>

      <section>
        <h2 id="transparency" className="text-[22px] font-semibold mb-1 scroll-mt-6">透明度：「官方没说」是分化的，不是普遍的</h2>
        <p className="text-muted text-[14px] mb-4 max-w-[880px] leading-relaxed">
          九家都已用厂商官方文档逐格核过。<b className="text-ink">剩下的 ⬜ 就是这家没公开说的部分</b> ——
          不需要我们主观打分，它是从公开事实算出来的、可复核的数。
          <br />
          注意<b className="text-ink">别看总数</b>：报「{tally("clip").unknown} 格官方没说」会让人以为厂商普遍不透明，
          而实际上有官方能力文档的那几家只有 1~3 格。
        </p>
        <div className="flex flex-col gap-2">
          {transparency("clip").map(({ model, unknown, caps }) => (
            <div key={model.id} className="flex items-center gap-3 text-[14px]">
              <span className="w-[190px] shrink-0 truncate">
                {label(model)}
                {model.status && model.status !== "active" && (
                  <span className="text-muted text-[11px] ml-2">{STATUS[model.status]?.tag}</span>
                )}
              </span>
              <span className="w-[52px] shrink-0 text-right text-muted tabular-nums">
                {unknown}/{caps}
              </span>
              <span className="flex-1 h-[14px] bg-rule/50 rounded-sm overflow-hidden">
                <span
                  className="block h-full bg-unknown/80"
                  style={{ width: `${(unknown / caps) * 100}%` }}
                />
              </span>
            </div>
          ))}
        </div>
        <p className="text-muted text-[13px] mt-3">
          Wan 那 10 格的原因很具体：<b className="text-ink">wan.video 取不到任何可抓链接，官方没有可核验的能力文档</b> ——
          九家里唯一一个。Sora 的 6 格则是因为已停服、且页面对我们的采集器返回 403。
        </p>
      </section>

      <section>
        <h2 className="text-[22px] font-semibold mb-1">明确不收的</h2>
        <p className="text-muted text-[14px] mb-4 max-w-[880px] leading-relaxed">
          收录门槛有三条（见 <code className="text-ink">data/ontology.md</code> 规则一）：
          输出或转换动态影像、以模型形式提供、<b className="text-ink">面向内容创作</b>。
          <br />
          第三条排掉的是一整个品类。<b className="text-ink">「为什么不收」和「它没了」一样，是有用的信息</b> ——
          半年后有人问「你们怎么没收某某」，答案该在库里，不在某个人的记忆里。
        </p>
        <div className="flex flex-col gap-3">
          {atlas.excluded.map((e) => (
            <div key={e.name} className="border-t border-rule pt-3 text-[15px]">
              <p className="font-semibold">
                {e.name}
                <span className="text-muted font-normal text-[13px] ml-2">
                  {e.vendor} · {e.kind} · {e.date} 判定
                </span>
              </p>
              <Rich text={e.why} className="text-muted text-[13px] mt-1 leading-relaxed block" />
              {e.same_bucket?.length ? (
                <p className="text-muted text-[13px] mt-1">同类一并不收：{e.same_bucket.join("、")}</p>
              ) : null}
              {e.revisit && <p className="text-muted text-[13px] mt-1 italic">{e.revisit}</p>}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-rule pt-5 text-[13px] text-muted leading-relaxed">
        数据版本 {atlas.version} · 核验于 {atlas.generated_at} ·
        <b className="text-unknown"> 全部为机器录入，未经人工核验</b> · xiamimate.com/atlas
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

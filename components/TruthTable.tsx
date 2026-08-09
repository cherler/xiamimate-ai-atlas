import { Fragment } from "react";
import Link from "next/link";
import { Rich } from "./Fact";
import { atlas, capsOf, cell, label, modelsOf, orgOf, STATUS, type Klass } from "@/lib/atlas";
import { capHref, modelHref } from "@/lib/slug";

/**
 * 真值表 —— 全站主图语言（docs/视觉方案_V1.md 第四节）。
 *
 * ## 为什么是它做首屏
 *
 * 上一版首屏是「能力横条图」：一根横条 + 一个日期 + 一个 4/9，**通篇不出现一个模型的名字**。
 * 首屏可核验的具体事实只有 18 个，读者得先读三行说明才知道这站是干嘛的。
 * 真值表首屏是 147 个。差八倍 —— 这就是「一眼看不懂」的真实原因，跟审美无关。
 *
 * 横条图本身不是废的，它错在**不配单独占一屏**。现在它是行头的一部分，
 * 横条与格子共用一行：这项能力多少家做到了、最早什么时候出现的、具体是哪几家，一次读完。
 *
 * ## 三件必须做对的事
 *
 * 1. **⬜ 用整格斜线纹理，不画符号。** 用浅灰画它它就消失了（我连着三版稿子栽在这儿）。
 *    铺成纹理之后空白会自己连成片 —— Wan 3.0 整列几乎全是斜线，
 *    「阿里几乎什么都没公开说过」这个结论一个字没写就浮出来了。
 * 2. **强调色（蓝）标的是「有出处」，不是「支持」。** 我们不评判谁强，只记录谁说过。
 *    所以「厂商明确说不支持」是黑叉不是红叉 —— 那是一条事实，不是差评。
 * 3. **脚注编号。** 可追溯不该是 hover 弹窗，规格书本来就自带这套东西：
 *    每个 ✅ 右上角一个编号，页脚就是那句厂商原文。
 */

/** 表头那行公司名要短。「稀宇科技 MiniMax」在 64px 的列里会折成三行。 */
const shortOrg = (s: string) => s.replace("稀宇科技 ", "").replace(" DeepMind", "").replace("科技", "");

/**
 * 分组顺序从数据里读，**不在这里硬编码组名**。
 * 上一版我写死了「生成/控制/参考/音频/叙事」五个，结果「获取」和「实时」
 * 两个真实分组掉进了兜底的「其他」—— 又造了第二份口径。
 * 顺序 = 它们在 capabilities 里首次出现的顺序，加新组不用动代码。
 */
const groupsOf = (cs: { group?: string }[]) => {
  const seen: string[] = [];
  for (const c of cs) if (c.group && !seen.includes(c.group)) seen.push(c.group);
  return seen;
};

export default function TruthTable({ k }: { k: Klass }) {
  const ms = modelsOf(k);
  const cs = capsOf(k);
  const notes: { n: number; m: string; c: string; note?: string; src?: string }[] = [];
  let fn = 0;

  const names = groupsOf(cs);
  const groups = names.map((g) => [g, cs.filter((c) => c.group === g)] as const);
  const ungrouped = cs.filter((c) => !c.group);
  if (ungrouped.length) groups.push(["未分组", ungrouped] as const);

  return (
    <div className="hidden md:block">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left align-bottom pb-2 pr-4 font-normal text-[12px] text-muted border-b-[1.5px] border-ink">
                能力
              </th>
              {ms.map((m) => {
                const st = m.status && m.status !== "active" ? STATUS[m.status] : null;
                return (
                  <th
                    key={m.id}
                    className="align-bottom pb-2 px-1 font-normal border-b-[1.5px] border-l-[.5px] border-l-rule border-ink"
                    style={{ width: `${Math.floor(62 / ms.length)}%` }}
                  >
                    <Link href={modelHref(m)} className="block hover:text-yes">
                      <span className="block font-semibold text-[13px] leading-[1.25]">{label(m)}</span>
                    </Link>
                    <span className="block text-[10px] leading-[1.3] text-muted mt-1">{shortOrg(orgOf(m)?.zh ?? "")}</span>
                    <span className="block font-mono text-[9.5px] leading-none text-muted mt-0.5">{m.version_as_of}</span>
                    {st && <span className="block text-[9.5px] leading-none mt-0.5 text-no">{st.tag}</span>}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {groups.map(([g, list]) => (
              <Fragment key={g}>
                <tr className="border-b-[1.5px] border-ink">
                  <td
                    colSpan={ms.length + 1}
                    className="pt-3.5 pb-1 text-[12px] tracking-[.2em] text-muted"
                  >
                    {g}
                  </td>
                </tr>
                {list.map((c) => {
                  const y = ms.filter((m) => cell(m.id, c.id).state === "yes").length;
                  return (
                    <tr key={c.id}>
                      <td className="h-9 pr-4 whitespace-nowrap border-b-[.5px] border-rule">
                        <Link href={capHref(c)} className="font-semibold text-[15px] hover:text-yes">
                          {c.zh}
                        </Link>
                        <span className="font-mono text-[10px] tracking-[.06em] uppercase text-muted ml-2">{c.name}</span>
                        <span className="text-[11px] text-muted ml-3">
                          {c.since ? `${c.since} 起` : "早于可追溯范围"}
                        </span>
                        <span className="font-mono text-[11px] text-muted ml-3">
                          {y}/{ms.length}
                        </span>
                      </td>
                      {ms.map((m) => {
                        const f = cell(m.id, c.id);
                        if (f.state === "yes") {
                          fn += 1;
                          notes.push({ n: fn, m: m.id, c: c.id, note: f.note, src: f.src });
                        }
                        return (
                          <td
                            key={m.id}
                            className={`text-center border-b-[.5px] border-l-[.5px] border-rule ${
                              f.state === "unknown" ? "hatch" : ""
                            }`}
                          >
                            {f.state === "yes" && (
                              <>
                                <span className="inline-block w-[13px] h-[13px] bg-yes align-middle" />
                                <sup className="font-mono text-[9px] text-yes ml-px">{fn}</sup>
                              </>
                            )}
                            {f.state === "no" && <span className="text-[15px] leading-none">✕</span>}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* signature：脚注栏。可追溯不是弹窗，是规格书自带的东西。
          **默认折叠** —— 59 条原文摊开会把表压到看不见，而人是先看表才想追某一条的。 */}
      <details className="mt-7 border-t-[2.5px] border-ink">
        <summary className="cursor-pointer py-2.5 text-[13px] text-muted hover:text-ink select-none">
          {notes.length} 条厂商原文 —— 表里每个编号都能在这儿查到出处
        </summary>
      <div data-quote className="pt-1 pb-3 [column-count:2] [column-gap:34px] [column-rule:.5px_solid_var(--color-rule)]">
        {notes.map((n) => {
          const s = n.src ? atlas.sources[n.src] : null;
          return (
            <p
              key={n.n}
              className="text-[11px] leading-[1.62] text-muted mb-1.5 [break-inside:avoid] pl-[22px] -indent-[22px]"
            >
              <b className="font-mono font-normal text-[10px] text-yes inline-block w-5 indent-0">{n.n}</b>
              <Rich text={n.note ?? `${label(atlas.models.find((m) => m.id === n.m)!)} · 已核`} />
              {s && (
                <a href={s.url} target="_blank" rel="noreferrer" className="underline ml-1 hover:text-ink">
                  {s.name}
                </a>
              )}
            </p>
          );
        })}
      </div>
      </details>
    </div>
  );
}

/**
 * 图例块。**全站口径只有这一份**，也是除 /method 外唯一允许出现成段解释文字的地方。
 * 这个 signature 来自被砍掉的「图幅」方向 —— 制图学里图例是一等公民，
 * 它把散落各页的说明收成一个固定的框。
 */
export function Legend() {
  return (
    <div className="hidden md:flex flex-wrap items-center gap-x-6 gap-y-1.5 mt-5 pt-3 border-t-[.5px] border-rule text-[12px] text-muted">
      <span className="flex items-center gap-1.5">
        <i className="inline-block w-[11px] h-[11px] bg-yes not-italic" />
        厂商官方文档写明支持，右上角编号对应下方原文
      </span>
      <span className="flex items-center gap-1.5">
        <i className="not-italic text-ink text-[13px]">✕</i>
        厂商明确说不支持
      </span>
      <span className="flex items-center gap-1.5">
        <i className="hatch inline-block w-[11px] h-[11px] not-italic border-[.5px] border-rule" />
        厂商没说过 —— 和「不支持」不是一回事
      </span>
      <Link href="/method#states" className="underline hover:text-ink">
        口径 →
      </Link>
    </div>
  );
}

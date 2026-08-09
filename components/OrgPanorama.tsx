import { Fragment } from "react";
import Link from "next/link";
import { atlas, capsOf, cell, label, STATUS, type Klass, type Model } from "@/lib/atlas";
import { modelHref } from "@/lib/slug";

/**
 * 厂商全景 —— 「关系」这张图的第一版（docs/北极星.md 第三、四节）。
 *
 * ## 废掉逐层展开
 *
 * 上一版 /map 是「点公司 → 才长出产品线 → 再点才长出能力」。错在**读者还没看到
 * 东西，就要求他点三次**。信息该一次铺开，密度自己会说话（首页真值表证过这条）。
 * 这一版零点击：15 家公司 18 条产品线一次全摊开。
 *
 * ## 它只是关系图的一角，别假装是全部
 *
 * 这张图回答的是 org → model 的**归属**关系（谁是谁家的）。北极星第四节说清楚了：
 * 真正的关系图还缺另外三类边 —— 模型↔模型血缘(0)、公司↔公司投资(5)、公司↔地点(5/15)。
 * 那些是数据洞，得采出来才画得上。**在采到之前，这一版只诚实地画归属，不画没有的边。**
 *
 * 顶部一条分布摘要（一眼见形状），下面是明细表。两者同一份数据。
 */

const HQ_PREC: Record<string, string> = { exact: "精确", province: "省市级", ambiguous: "有歧义" };
const wcls = (w?: string) => (w === "open" ? "open" : w === "mixed" ? "mixed" : "closed");

type Line = { m: Model; yes: string[]; unk: number; tot: number };
type OrgRow = { id: string; zh: string; hq: string; prec: string; lines: Line[]; total: number };

function collect(): OrgRow[] {
  const rows: OrgRow[] = [];
  for (const o of atlas.orgs) {
    const ms = atlas.models.filter((m) => m.org === o.id);
    if (!ms.length) continue;
    const lines: Line[] = ms.map((m) => {
      const cs = capsOf(m.class as Klass);
      const yes = cs.filter((c) => cell(m.id, c.id).state === "yes").map((c) => c.zh);
      const unk = cs.filter((c) => cell(m.id, c.id).state === "unknown").length;
      return { m, yes, unk, tot: cs.length };
    });
    rows.push({
      id: o.id,
      zh: o.zh,
      hq: o.hq?.city ?? "",
      prec: HQ_PREC[o.hq_precision ?? ""] ?? "未定",
      lines,
      total: lines.reduce((s, l) => s + l.yes.length, 0),
    });
  }
  return rows.sort((a, b) => b.total - a.total);
}

/** 权重色块。open 实心、mixed 半、closed 空心 —— 和演化树一套记号。 */
function Chip({ w }: { w?: string }) {
  const c = wcls(w);
  const base = "inline-block w-[9px] h-[9px] align-middle";
  if (c === "open") return <span className={`${base} bg-yes`} />;
  if (c === "mixed") return <span className={`${base} border border-yes`} style={{ background: "linear-gradient(90deg,var(--color-yes) 50%,transparent 50%)" }} />;
  return <span className={`${base} border border-muted`} />;
}

export default function OrgPanorama() {
  const rows = collect();
  const max = Math.max(...rows.map((r) => r.total));

  return (
    <div className="flex flex-col gap-8">
      {/*
        摘要条（负责人三条反馈全改）：
          ① 裸数字删掉 —— 一个没有标注的 12 谁也不知道是什么，明细表里已经有「支持/总」。
          ② 条长与填充的含义**写在图例里**，不再只存在于我脑子里。
          ③ 每一段可点，直接进那条产品线的模型页 —— 原来整块是死的。
        桌面才显示：190px 名列 + 条一行放不进 390 手机，手机直接看下面的明细表。
      */}
      <section className="hidden md:block">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[12px] text-muted mb-2">
          <span><b className="text-ink">条越长</b> = 这家已核验的能力项越多</span>
          <span className="flex items-center gap-1.5">
            <i className="inline-block w-[11px] h-[11px] bg-yes not-italic" />权重公开
          </span>
          <span className="flex items-center gap-1.5">
            <i className="inline-block w-[11px] h-[11px] bg-yes/15 border border-yes not-italic" />部分代公开
          </span>
          <span className="flex items-center gap-1.5">
            <i className="inline-block w-[11px] h-[11px] bg-card border border-muted not-italic" />闭源
          </span>
          <span>点任一段进那条产品线</span>
        </div>
        <div className="bg-card border border-rule">
        {rows.map((r) => (
          <div key={r.id} className="flex items-center gap-3 px-4 py-2 border-b border-rule last:border-0">
            <div className="w-[190px] shrink-0">
              <span className="font-semibold text-[14px]">{r.zh}</span>
              <span className="block text-[11px] text-muted">
                {r.hq || "—"} · {r.lines.length} 条产品线
              </span>
            </div>
            <div className="flex-1 flex h-[26px]" style={{ maxWidth: `${(r.total / max) * 100}%` }}>
              {r.lines
                .filter((l) => l.yes.length)
                .map((l) => (
                  <Link
                    key={l.m.id}
                    href={modelHref(l.m)}
                    title={`${label(l.m)} —— ${l.yes.length} 项已核验能力`}
                    className={`flex items-center px-2 text-[11.5px] whitespace-nowrap overflow-hidden hover:opacity-80 ${
                      wcls(l.m.weights) === "open"
                        ? "bg-yes text-white"
                        : wcls(l.m.weights) === "mixed"
                          ? "bg-yes/15 text-yes-ink border border-yes"
                          : "bg-card border border-muted"
                    }`}
                    style={{ flex: l.yes.length }}
                  >
                    {label(l.m)}
                  </Link>
                ))}
              {!r.total && <div className="flex items-center text-[11.5px] text-muted">没有已核验的能力</div>}
            </div>
          </div>
        ))}
        </div>
      </section>

      {/* 明细：公司组头 + 产品线行 + 能力平铺 */}
      <section className="bg-card border border-rule overflow-x-auto">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr>
              <th className="text-left font-normal text-[12px] text-muted p-2.5 border-b-[1.5px] border-ink">产品线</th>
              <th className="text-left font-normal text-[12px] text-muted p-2.5 border-b-[1.5px] border-ink">已核验能力</th>
              <th className="text-right font-normal text-[12px] text-muted p-2.5 border-b-[1.5px] border-ink whitespace-nowrap">
                支持 / 总
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <Fragment key={r.id}>
                <tr>
                  <td colSpan={3} className="border-t-[1.5px] border-ink pt-2.5 pb-1 px-2.5 bg-paper/60">
                    <span className="font-semibold text-[16px]">{r.zh}</span>
                    <span className="text-[12px] text-muted ml-2">
                      {r.hq || "—"} · {r.lines.length} 条产品线
                    </span>
                    <span className={`text-[11px] ml-2 ${r.prec === "未定" ? "text-unknown" : "text-muted"}`}>
                      总部 {r.prec}
                    </span>
                  </td>
                </tr>
                {r.lines.map((l) => {
                  const st = l.m.status && l.m.status !== "active" ? STATUS[l.m.status] : null;
                  return (
                    <tr key={l.m.id} className="border-b border-rule">
                      <td className="p-2.5 align-top w-[220px] whitespace-nowrap">
                        <Link href={modelHref(l.m)} className="font-semibold hover:text-yes-ink">
                          {label(l.m)}
                        </Link>
                        {st && <span className="text-[11px] text-no ml-1.5">{st.tag}</span>}
                        {(l.m.tier ?? "core") !== "core" && (
                          <span className="text-[11px] text-muted ml-1.5 border border-rule px-1">Extended</span>
                        )}
                        <span className="block text-[11px] text-muted mt-0.5">
                          <Chip w={l.m.weights} />
                          <span className="ml-1.5">
                            {l.m.team ? `${l.m.team} 组 · ` : ""}
                            {l.m.version_as_of}
                          </span>
                        </span>
                      </td>
                      <td className="p-2.5 align-top text-[12.5px] leading-[1.9]">
                        {l.yes.length ? (
                          l.yes.map((c) => (
                            <span key={c} className="inline-block bg-yes/10 text-yes-ink px-1.5 mr-1.5 mb-1">
                              {c}
                            </span>
                          ))
                        ) : (
                          <span className="text-unknown">没有已核验的能力</span>
                        )}
                      </td>
                      <td className="p-2.5 align-top text-right whitespace-nowrap text-muted">
                        <b className="text-yes-ink text-[15px]">{l.yes.length}</b>/{l.tot}
                        <span className="block text-[11px]">⬜{l.unk}</span>
                      </td>
                    </tr>
                  );
                })}
              </Fragment>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

import { Fragment } from "react";
import Link from "next/link";
import { Rich } from "./Fact";
import { atlas, label } from "@/lib/atlas";
import { modelHref } from "@/lib/slug";

/**
 * 场景板 —— 「我想做这件事，谁能做？」（docs/北极星.md，方案 §10）
 *
 * ## 为什么单独一张图
 *
 * 「能力」是给我们对齐数据用的技术术语（首尾帧、角色参考、多参考…）——
 * 用户不关心这些词，关心「我想让品牌 IP 出镜，用哪个模型」。方案第六节原话：
 * **「Skill 必须是第一等公民。」** 一路把能力矩阵当主图，恰恰把第一等公民做成了二等。
 *
 * 这一页把 skill 数据翻成人话：**一个真实场景 → 直接告诉你用谁**。零点击。
 * 数据全部现成（skills.cases 场景 / native 能做的模型 / opensource 开源实现 /
 * limits 已知限制），不采一条新的。
 */
export default function ScenarioBoard() {
  const skills = atlas.skills;

  return (
    <div className="bg-card border border-rule">
      {skills.map((s) => {
        const native = (s.native ?? [])
          .map((id) => atlas.models.find((m) => m.id === id))
          .filter(Boolean) as (typeof atlas.models)[number][];
        return (
          <div key={s.id} className="border-b border-rule last:border-0 px-5 py-5 md:grid md:grid-cols-[300px_1fr] md:gap-8">
            {/* 左：这是什么事 + 输入→输出 */}
            <div className="mb-4 md:mb-0">
              <Link href={`/skill/${s.id}`} className="text-[20px] font-bold hover:text-yes-ink">
                {s.zh}
              </Link>
              <span className="block text-[11px] tracking-[.06em] uppercase text-muted mt-0.5">{s.en}</span>
              {s.io && (
                <p className="text-[12.5px] text-muted mt-2 leading-relaxed">
                  <b className="text-ink font-normal">{(s.io.in ?? []).join(" + ")}</b>
                  <span className="mx-1.5">→</span>
                  {s.io.out}
                </p>
              )}
            </div>

            {/* 右：场景 → 能做的模型 → 限制 */}
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-[12px] text-muted mr-2">想做</span>
                {(s.cases ?? []).map((c) => (
                  <span key={c} className="inline-block text-[14px] bg-yes/8 text-yes-ink px-2.5 py-1 mr-2 mb-1">
                    {c}
                  </span>
                ))}
              </div>

              <div className="text-[14px]">
                <span className="text-[12px] text-muted mr-2">能做</span>
                {native.length ? (
                  native.map((m, i) => (
                    <Fragment key={m.id}>
                      {i > 0 && <span className="text-rule mx-1">·</span>}
                      <Link href={modelHref(m)} className="font-medium hover:text-yes-ink">
                        ✅ {label(m)}
                      </Link>
                    </Fragment>
                  ))
                ) : (
                  <span className="text-unknown">还没有模型原生做到</span>
                )}
              </div>

              {!!s.opensource?.length && (
                <div className="text-[13px]">
                  <span className="text-[12px] text-muted mr-2">开源自部署</span>
                  {s.opensource.map((o, i) => (
                    <Fragment key={o.name}>
                      {i > 0 && <span className="text-rule mx-1">·</span>}
                      <a href={o.url} target="_blank" rel="noreferrer" className="hover:text-yes-ink underline decoration-dotted">
                        {o.name}
                      </a>
                    </Fragment>
                  ))}
                </div>
              )}

              {!!s.limits?.length && (
                <p className="text-[12.5px] text-muted leading-relaxed">
                  <span className="text-no font-medium">先知道</span>
                  <span className="mx-1.5">·</span>
                  <Rich text={s.limits[0]} />
                  {s.limits.length > 1 && (
                    <Link href={`/skill/${s.id}`} className="underline ml-1.5 hover:text-ink">
                      还有 {s.limits.length - 1} 条 →
                    </Link>
                  )}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

import { Fragment } from "react";
import Link from "next/link";
import { Rich } from "./Fact";
import { atlas, label, skillModels } from "@/lib/atlas";
import { modelHref } from "@/lib/slug";

/**
 * 场景板 —— 「我想做这件事，谁能做、拿什么跑」（docs/北极星.md，方案 §10）
 *
 * ## 为什么单独一张图
 *
 * 「能力」是给我们对齐数据用的技术术语（首尾帧、角色参考、多参考…）——
 * 用户不关心这些词，关心「我想让品牌 IP 出镜，用哪个模型」。方案第六节原话：
 * **「Skill 必须是第一等公民。」**
 *
 * ## 这一版改了什么
 *
 * 上一版是「能力说明换个说法」：一排场景词 + 一排模型名 + 一条限制。看完只知道
 * 「有人能做」，不知道**做起来是几步**、**拿什么跑**。这两件事数据里一直有：
 *
 * - `support[].via` 分 `native`（生成时一步）和 `separate-task`（另开一个任务，
 *   要再调一次、再等一次、再计一次费）—— 以前只以一句散文躺在 limits 里；
 * - `skills[].workflow` 是能真跑起来的官方工作流 / 社区仓库（带星标）。
 *
 * 一行给到：几步能做完 → 谁能做 → 拿什么跑 → 有什么坑。零点击。
 */
export default function ScenarioBoard() {
  return (
    <div className="bg-card border border-rule">
      {atlas.skills.map((s) => {
        const { direct, separate } = skillModels(s);
        const wf = s.workflow ?? [];
        const official = wf.filter((w) => w.kind === "official");
        // 「开源自部署」这类事没有「另开一个任务」之说 —— 分法不适用时就不硬套，标「能做」。
        const split = separate.length > 0;
        return (
          <div
            key={s.id}
            className="border-b border-rule last:border-0 px-5 py-5 md:grid md:grid-cols-[248px_1fr] md:gap-7"
          >
            {/* 左：这是什么事 + 输入→输出 + 三个数 */}
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
              <p className="mt-2.5 text-[12px] text-muted flex flex-wrap gap-x-3 tabular-nums">
                <span>
                  {split ? "一步" : "能做"} <b className="text-ink text-[13px]">{direct.length}</b>
                </span>
                {split && (
                  <span>
                    两步 <b className="text-ink text-[13px]">{separate.length}</b>
                  </span>
                )}
                <span>
                  自部署 <b className="text-ink text-[13px]">{s.opensource?.length ?? 0}</b>
                </span>
                <span>
                  workflow <b className="text-ink text-[13px]">{wf.length}</b>
                </span>
              </p>
            </div>

            {/* 右：想做 → 一步做完 / 另开任务 → 拿什么跑 → 先知道 */}
            <div className="flex flex-col gap-2.5">
              <div>
                <span className="text-[12px] text-muted mr-2">想做</span>
                {(s.cases ?? []).map((c) => (
                  <span key={c} className="inline-block text-[14px] bg-yes/8 text-yes-ink px-2.5 py-1 mr-2 mb-1">
                    {c}
                  </span>
                ))}
              </div>

              <div className="text-[14px] flex gap-2">
                <span className="text-[12px] text-muted shrink-0 w-[76px] pt-[3px]">{split ? "一步做完" : "能做"}</span>
                <span className="min-w-0">
                  {direct.length ? (
                    direct.map((m, i) => (
                      <Fragment key={m.id}>
                        {i > 0 && <span className="text-rule mx-1">·</span>}
                        <Link href={modelHref(m)} className="font-medium hover:text-yes-ink">
                          {label(m)}
                        </Link>
                      </Fragment>
                    ))
                  ) : (
                    <span className="text-unknown text-[13px]">还没有模型把它做进生成里</span>
                  )}
                </span>
              </div>

              {!!separate.length && (
                <div className="text-[13.5px] flex gap-2">
                  <span className="text-[12px] text-muted shrink-0 w-[76px] pt-[2px]">另开任务</span>
                  <span className="min-w-0 text-muted">
                    {separate.map((m, i) => (
                      <Fragment key={m.id}>
                        {i > 0 && <span className="text-rule mx-1">·</span>}
                        <Link href={modelHref(m)} className="hover:text-yes-ink">
                          {label(m)}
                        </Link>
                      </Fragment>
                    ))}
                    <span className="text-[11.5px] ml-1.5">—— 再调一次接口、再计一次费</span>
                  </span>
                </div>
              )}

              {!!wf.length && (
                <div className="text-[13.5px] flex gap-2">
                  <span className="text-[12px] text-muted shrink-0 w-[76px] pt-[2px]">拿什么跑</span>
                  <span className="min-w-0">
                    {(official.length ? official : wf).slice(0, 2).map((w, i) => (
                      <Fragment key={w.url}>
                        {i > 0 && <span className="text-rule mx-1">·</span>}
                        <a
                          href={w.url}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-dotted hover:text-yes-ink"
                        >
                          {w.name}
                        </a>
                      </Fragment>
                    ))}
                    {wf.length > (official.length ? Math.min(official.length, 2) : Math.min(wf.length, 2)) && (
                      <Link href={`/skill/${s.id}`} className="text-muted ml-1.5 underline hover:text-ink">
                        全部 {wf.length} 个 →
                      </Link>
                    )}
                  </span>
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

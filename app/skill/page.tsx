import type { Metadata } from "next";
import Link from "next/link";
import { Rich } from "@/components/Fact";
import { atlas, label } from "@/lib/atlas";
import BackLink from "@/components/BackLink";

export const metadata: Metadata = {
  title: "六件事，分别用什么做 —— 附原生/开源实现与已知限制",
  description: "动作复刻、角色一致、首尾帧补间、口播对口型、多镜头与视频延长、开源自部署。每条列出原生实现、开源实现、已知限制。",
};

/**
 * Skill 索引。**导航里的「Skills」需要一个落点** ——
 * 之前导航直接指向 `/skill/motion`，等于把六件事里的一件当成了入口。
 *
 * 这一页不放解释，只放一张表：一行一件事，横着摊开「谁能原生做」「有没有开源实现」
 * 「已知限制」。**不做逐层展开** —— 读者还没看到东西就要求他点，是错的。
 */
export default function SkillIndex() {
  const skills = atlas.skills;

  return (
    <main className="max-w-[1400px] mx-auto px-6 pt-5 pb-8 flex flex-col">
      <BackLink />
      <header className="flex items-end gap-4 border-b-[2.5px] border-ink pb-2.5 mt-3">
        <h1 className="text-[38px] leading-[1.05] font-bold tracking-[-.01em]">
          六件事，分别用什么做
          <span className="block text-[15px] leading-[1.3] font-normal text-muted mt-2">
            {skills.length} 件常见的活儿 —— 各自谁能原生做、有没有开源实现、会在哪儿崩
          </span>
        </h1>
        <div className="ml-auto text-right text-[12px] leading-[1.7] text-muted whitespace-nowrap">
          核验于 {atlas.generated_at}
        </div>
      </header>

      <div className="bg-card border border-rule mt-5">
        {skills.map((s) => {
          const native = (s.native ?? [])
            .map((id) => atlas.models.find((m) => m.id === id))
            .filter(Boolean)
            .map((m) => label(m!));
          return (
            <div key={s.id} className="border-b border-rule last:border-0 px-5 py-4 flex flex-wrap gap-x-8 gap-y-2">
              <div className="w-[220px] shrink-0">
                <Link href={`/skill/${s.id}`} className="text-[18px] font-semibold hover:text-yes-ink">
                  {s.zh} →
                </Link>
                <span className="block text-[11px] tracking-[.06em] uppercase text-muted mt-0.5">{s.en}</span>
              </div>
              <div className="flex-1 min-w-[280px] text-[14px]">
                <span className="text-muted">原生能做：</span>
                {native.length ? native.join(" · ") : <span className="text-unknown">没有原生实现</span>}
                {!!s.opensource?.length && (
                  <span className="block text-muted mt-1">
                    开源实现：<span className="text-ink">{s.opensource.map((o) => o.name).join(" · ")}</span>
                  </span>
                )}
              </div>
              {/* 「已知限制」和做法同等大小 —— 一份只讲怎么做、不讲会在哪儿崩的说明，
                  是在替读者省时间的名义下让他去踩坑。 */}
              <div className="w-[340px] shrink-0 text-[13px] text-muted leading-relaxed">
                {s.limits?.length ? (
                  <>
                    <span className="text-ink">已知限制 {s.limits.length} 条：</span>
                    <Rich text={s.limits[0]} />
                    {s.limits.length > 1 && (
                      <Link href={`/skill/${s.id}`} className="underline ml-1 hover:text-ink">
                        其余 {s.limits.length - 1} 条 →
                      </Link>
                    )}
                  </>
                ) : (
                  <span className="text-unknown">限制待补</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

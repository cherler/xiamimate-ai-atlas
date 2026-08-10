import Link from "next/link";
import {
  applicationResources,
  atlas,
  type Application,
  type ApplicationResource,
  type ApplicationResourceKind,
} from "@/lib/atlas";

const KIND: Record<ApplicationResourceKind, { label: string; className: string }> = {
  project: { label: "项目", className: "bg-yes/10 text-yes-ink" },
  skill: { label: "Skill", className: "bg-ink/8 text-ink" },
  course: { label: "课程", className: "bg-[#f4eee3] text-[#795b2c]" },
  docs: { label: "文档", className: "bg-[#edf0f3] text-muted" },
};

function ResourceCard({ resource }: { resource: ApplicationResource }) {
  const kind = KIND[resource.kind];
  const source = atlas.sources[resource.src]?.name ?? resource.src;

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noreferrer"
      className="group block min-w-0 border border-rule bg-paper/60 px-3.5 py-3 hover:border-yes hover:bg-yes/5"
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className={`text-[11px] px-1.5 py-0.5 ${kind.className}`}>{kind.label}</span>
        {/* 多条证据时每一行自己就带着 Skill 名，这里再列一遍是重复 —— 只报个数。 */}
        {resource.evidence.length === 1 && (
          <span className="text-[11px] text-muted truncate">来自 {resource.evidence[0].skill_zh}</span>
        )}
        {resource.evidence.length > 1 && (
          <span className="text-[11px] text-muted shrink-0">{resource.evidence.length} 项能力</span>
        )}
      </div>
      <p className="text-[14px] font-medium leading-snug group-hover:text-yes-ink">{resource.name} ↗</p>
      {/* 原文摘录与来源名是**引用**，不计入「我们自己说了多少话」的预算 ——
          和首页脚注同一条纪律（scripts/verify.mjs 里减的就是 [data-quote]）。
          多个 Skill 认领同一个仓库时，**每条原文都留着**：H3 一个链接同时是
          角色一致的 Ref2VA、首尾帧的 FL2VA、口播对口型的官方案例，
          只显示第一条会让口播剧看不到它真正需要的那句。 */}
      {resource.evidence.length > 1 ? (
        <ul data-quote className="text-[12px] text-muted leading-relaxed mt-1.5 flex flex-col gap-1">
          {resource.evidence.map((e) => (
            <li key={`${e.skill_id}-${e.quote}`} className="line-clamp-2">
              <span className="text-ink">{e.skill_zh}</span>：{e.quote}
            </li>
          ))}
        </ul>
      ) : (
        <p data-quote className="text-[12px] text-muted leading-relaxed mt-1.5 line-clamp-2">
          {resource.note ?? resource.quote}
        </p>
      )}
      <p data-quote className="text-[10.5px] text-muted leading-snug mt-2 truncate">{source}</p>
    </a>
  );
}

function counts(resources: ApplicationResource[]) {
  return (Object.keys(KIND) as ApplicationResourceKind[]).map((kind) => ({
    kind,
    n: resources.filter((r) => r.kind === kind).length,
  }));
}

function ApplicationRow({ app }: { app: Application }) {
  const resources = applicationResources(app);
  const skillItems = app.skills
    .map((id) => atlas.skills.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <article className="border-t border-rule px-4 py-6 md:grid md:grid-cols-[280px_1fr] md:gap-8">
      <div className="mb-6 md:mb-0">
        <p className="text-[11px] tracking-[.14em] uppercase text-yes-ink mb-2">应用 / {app.en}</p>
        <h2 className="text-[27px] font-bold leading-tight tracking-[-.02em]">{app.zh}</h2>
        <p className="text-[14px] text-muted leading-relaxed mt-2.5">{app.intro}</p>
        {!!app.aliases?.length && (
          <p className="text-[11.5px] text-muted mt-1.5">行业里也叫：{app.aliases.join(" / ")}</p>
        )}

        <div className="border border-rule bg-paper mt-5">
          <div className="px-3 py-2 border-b border-rule text-[11px] text-muted">输入 → 输出</div>
          <div className="px-3 py-3">
            <div className="flex flex-wrap gap-1.5">
              {app.inputs.map((input) => (
                <span key={input} className="text-[12px] border border-rule px-2 py-1 bg-card">
                  {input}
                </span>
              ))}
            </div>
            <div className="text-[16px] text-muted my-2">↓</div>
            <div className="text-[13px] text-yes-ink border-l-2 border-yes pl-2.5">{app.output}</div>
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[11px] text-muted mb-2">需要的能力</p>
          <div className="flex flex-wrap gap-1.5">
            {skillItems.map((skill) => (
              <Link
                key={skill!.id}
                href={`/skill/${skill!.id}`}
                className="text-[12px] px-2 py-1 bg-yes/8 text-yes-ink hover:bg-yes/15"
              >
                {skill!.zh} →
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap items-end justify-between gap-3 pb-3 border-b border-rule">
          <p className="text-[16px] font-semibold">公开路线</p>
          <div className="flex flex-wrap gap-1.5">
            {counts(resources).map(({ kind, n }) => (
              <span key={kind} className="text-[11px] border border-rule px-2 py-1 text-muted">
                {KIND[kind].label} <b className="text-ink">{n}</b>
              </span>
            ))}
          </div>
        </div>

        <div
          className="mt-3 h-[500px] md:h-[560px] overflow-y-auto overscroll-contain border border-rule bg-paper/35 p-2.5"
          tabIndex={0}
          role="region"
          aria-label={`${app.zh}公开资源列表`}
        >
          <div className="grid gap-2.5 sm:grid-cols-2">
            {resources.map((resource) => <ResourceCard key={resource.url} resource={resource} />)}
          </div>
        </div>

      </div>
    </article>
  );
}

/**
 * 场景页现在以「应用」为入口：先问用户想做什么，再把公开实现路线接上。
 * 能力详情仍然保留在 /skill/[id]，但不再把能力换个词伪装成应用。
 */
export default function ScenarioBoard() {
  return (
    <div className="bg-card border border-rule">
      <div className="px-4 py-4 bg-yes/5 border-b border-rule flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <p className="text-[11px] tracking-[.14em] uppercase text-yes-ink">Application Atlas</p>
          <p className="text-[18px] font-semibold mt-1">从一个真实产出，找到能走的公开路线</p>
        </div>
        {/* 排序与收录规则**全页只说一次**。原来它在六个应用下各印一遍 ——
            同一句话重复六遍不是强调，是噪音，出站验证的字数棘轮正是拿它报的红。 */}
        <p className="text-[12px] text-muted leading-relaxed max-w-[520px]">
          项目、Skill、课程、文档从关联能力自动汇总，按「项目 → Skill → 文档 → 课程」排，
          同类官方来源优先，不按 Star 做推荐结论。不导流收费平台；公开访问 ≠ 自动允许商用。
        </p>
      </div>
      {atlas.applications.map((app) => <ApplicationRow key={app.id} app={app} />)}
    </div>
  );
}

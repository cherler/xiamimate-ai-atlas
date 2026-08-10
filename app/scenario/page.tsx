import type { Metadata } from "next";
import Link from "next/link";
import ScenarioBoard from "@/components/ScenarioBoard";
import { applicationResources, atlas } from "@/lib/atlas";

export const metadata: Metadata = {
  title: "我想做什么 —— AI 视频应用与开源路线",
  description: "从 AI 短剧、漫剧、口播剧、带货视频等真实应用出发，找到关联的公开项目、Skill、课程和文档。",
};

/**
 * 「场景」这张图（docs/北极星.md，方案 §10 Skill 第一等公民）。
 *
 * 能力术语（首尾帧/角色参考…）是给我们对齐数据用的；场景（能做什么事）才是给
 * 用户看的。这一页回答的就是那句「我这事儿谁能干」。数据全部现成，零点击。
 */
export default function ScenarioPage() {
  const n = atlas.applications.length;
  const resourceCount = atlas.applications.reduce((sum, app) => sum + applicationResources(app).length, 0);
  const skillCount = new Set(atlas.applications.flatMap((app) => app.skills)).size;
  return (
    <main className="max-w-[1400px] mx-auto px-6 py-8">
      <header className="flex flex-col gap-4 border-b-[2.5px] border-ink pb-2.5 md:flex-row md:items-end">
        <h1 className="text-[38px] leading-[1.05] font-bold tracking-[-.01em]">
          我想做什么
          <span className="block text-[15px] leading-[1.3] font-normal text-muted mt-2">
            {n} 个真实应用 —— 先看成品，再看它对应的公开项目、Skill、课程与文档
          </span>
        </h1>
        <div className="text-left text-[12px] leading-[1.7] text-muted md:ml-auto md:text-right md:whitespace-nowrap">
          核验于 {atlas.generated_at}
          <br />
          关联能力 {skillCount} 项
          <br />
          公开资源关联 {resourceCount} 条
        </div>
      </header>

      <div className="mt-6">
        <ScenarioBoard />
      </div>

      <p className="mt-6 text-[12px] text-muted">
        这里的「应用」是用户要交付的东西，不是能力名的同义改写；应用层不下效果或适用性结论，限制与核验日期请进入关联 Skill 查看。
        <Link href="/method#states" className="underline ml-1 hover:text-ink">口径 →</Link>
      </p>
    </main>
  );
}

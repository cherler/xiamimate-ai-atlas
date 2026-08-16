import type { Metadata } from "next";
import { atlas } from "@/lib/atlas";
import BackLink from "@/components/BackLink";
import ReportIssue from "@/components/ReportIssue";
import TopicView from "@/components/TopicView";

/**
 * 专项页外壳。**内容逐层展开，交互层在 `components/TopicView.tsx`。**
 *
 * 这一页被否过两次，两次的根因不同，都记在 TopicView 的文件头里：
 * 第一次是「写成了教程」，第二次是「所有信息摆给所有人」。
 */
export function generateStaticParams() {
  return atlas.topics.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const t = atlas.topics.find((x) => x.id === id);
  return t ? { title: t.zh, description: t.intro.replace(/\*\*/g, "").slice(0, 110) } : {};
}

export default async function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = atlas.topics.find((x) => x.id === id);
  if (!t) return null;
  return (
    <main className="max-w-[1080px] mx-auto px-5 pb-16">
      <BackLink />
      <TopicView t={t} />
      <div className="border-t border-rule pt-5 mt-6 text-[12px] text-muted max-w-[62ch]">
        <p className="mb-2">
          覆盖度、星数、许可证、门槛来自仓库原文，点得开核对；
          <b className="text-ink">优势 / 局限 / 不适用是判断</b>。
        </p>
        <ReportIssue />
      </div>
    </main>
  );
}

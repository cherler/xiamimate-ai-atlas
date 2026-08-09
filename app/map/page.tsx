import type { Metadata } from "next";
import OrgPanorama from "@/components/OrgPanorama";
import { atlas } from "@/lib/atlas";

export const metadata: Metadata = {
  title: "谁是谁家的 —— AI 视频厂商全景",
  description: "15 家公司、18 条产品线一次全摊开：各自做什么、权重开闭、已核验多少项能力。",
};

/**
 * 「关系」这张图（docs/北极星.md 第三节）。
 *
 * 现在只画 org → model 的归属（谁是谁家的）。模型↔模型血缘、公司↔公司投资、
 * 公司↔地点这三类边还是数据洞，采到之前不画 —— 见 OrgPanorama 顶部注释。
 */
export default function MapPage() {
  const n = atlas.orgs.filter((o) => atlas.models.some((m) => m.org === o.id)).length;
  const lines = atlas.models.length;

  return (
    <main className="max-w-[1400px] mx-auto px-6 py-8">
      <header className="flex items-end gap-4 border-b-[2.5px] border-ink pb-2.5">
        <h1 className="text-[38px] leading-[1.05] font-bold tracking-[-.01em]">
          谁是谁家的
          <span className="block text-[15px] leading-[1.3] font-normal text-muted mt-2">
            {n} 家公司、{lines} 条产品线 —— 一次全部摊开，不用点
          </span>
        </h1>
        <div className="ml-auto text-right text-[12px] leading-[1.7] text-muted whitespace-nowrap">
          核验于 {atlas.generated_at}
          <br />
          公司 {n} 家 · 产品线 {lines} 条
        </div>
      </header>

      <div className="mt-6">
        <OrgPanorama />
      </div>

      <p className="mt-6 text-[12px] text-muted">
        这一版只画「谁是谁家的」。谁基于谁、谁投资谁，是我们还没采到的边 —— 采到了才画，不编。
      </p>
    </main>
  );
}

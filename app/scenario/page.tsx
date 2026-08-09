import type { Metadata } from "next";
import Link from "next/link";
import ScenarioBoard from "@/components/ScenarioBoard";
import { atlas } from "@/lib/atlas";

export const metadata: Metadata = {
  title: "我想做这件事，谁能做 —— AI 视频场景地图",
  description: "AI 舞蹈、数字人口播、品牌 IP 出镜、一镜到底…一个真实场景直接告诉你用哪个模型，能不能自部署，先要知道什么坑。",
};

/**
 * 「场景」这张图（docs/北极星.md，方案 §10 Skill 第一等公民）。
 *
 * 能力术语（首尾帧/角色参考…）是给我们对齐数据用的；场景（能做什么事）才是给
 * 用户看的。这一页回答的就是那句「我这事儿谁能干」。数据全部现成，零点击。
 */
export default function ScenarioPage() {
  const n = atlas.skills.length;
  return (
    <main className="max-w-[1400px] mx-auto px-6 py-8">
      <header className="flex items-end gap-4 border-b-[2.5px] border-ink pb-2.5">
        <h1 className="text-[38px] leading-[1.05] font-bold tracking-[-.01em]">
          我想做这件事，谁能做
          <span className="block text-[15px] leading-[1.3] font-normal text-muted mt-2">
            {n} 类常见活儿 —— 一个场景直接告诉你用哪个模型、能不能自部署、先要知道什么坑
          </span>
        </h1>
        <div className="ml-auto text-right text-[12px] leading-[1.7] text-muted whitespace-nowrap">
          核验于 {atlas.generated_at}
          <br />
          能跑起来的 workflow {atlas.skills.reduce((n, k) => n + (k.workflow?.length ?? 0), 0)} 个
          <br />
          可自部署 {atlas.skills.reduce((n, k) => n + (k.opensource?.length ?? 0), 0)} 处
        </div>
      </header>

      <div className="mt-6">
        <ScenarioBoard />
      </div>

      <p className="mt-6 text-[12px] text-muted">
        「能做」= 厂商官方文档写明该模型原生支持这件事；「开源自部署」= 有公开权重的实现，可本地跑。
        <Link href="/method#states" className="underline ml-1 hover:text-ink">口径 →</Link>
      </p>
    </main>
  );
}

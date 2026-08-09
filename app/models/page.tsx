import type { Metadata } from "next";
import Link from "next/link";
import { Rich } from "@/components/Fact";
import TruthTable, { Legend } from "@/components/TruthTable";
import { atlas, capsOf, cell, extendedOf, label, modelsOf, vendorName, orgOf, STATUS, availModels } from "@/lib/atlas";
import { modelHref } from "@/lib/slug";

export const metadata: Metadata = {
  title: "全部模型 —— 含库里有但没进主表的",
  description: "主表每轨最多 10 个；停服的降到 Extended 层，不删除。还有明确不收的那一类。",
};

export default function ModelsPage() {
  return (
    <main className="max-w-[1240px] mx-auto px-5 py-8 flex flex-col gap-10">
      <h1 className="text-[28px] font-semibold leading-tight">全部模型</h1>

      <section className="flex flex-col gap-2">
        {atlas.models.map((m) => (
          <Link key={m.id} href={modelHref(m)}
            className="border-b border-rule pb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 hover:text-yes">
            {/* 手机 390 宽装不下三列固定宽度 —— 换成可换行，别让页面横向滚动 */}
            <span className="font-semibold text-[16px] md:w-[210px]">{label(m)}</span>
            <span className="text-muted text-[13px] md:w-[150px]">{orgOf(m)?.zh}</span>
            <span className="text-muted text-[13px] tabular-nums">{m.version_as_of}</span>
            <span className="text-muted text-[12px]">{(m.tier ?? "core") === "core" ? "主表" : "Extended"}</span>
            {m.status && m.status !== "active" && (
              <span className="text-no text-[12px]">{m.status === "discontinued" ? "已停服" : "非主力"}</span>
            )}
          </Link>
        ))}
      </section>
      <section id="realtime">
        <h2 className="text-[22px] font-semibold mb-1">实时交互轨 · 另一套坐标系</h2>
        <p className="text-muted text-[14px] mb-4 max-w-[880px]">
          边生成边看、中途可以干预、时长不预先确定。它们和离线出片轨<b className="text-ink font-normal">不共用能力轴</b> ——
          对它们来说「视频延长」没有意义（本来就没有终点），对那一轨「延迟」也没有意义。
          硬并成一张表会把两边都讲错。
        </p>
        <TruthTable k="realtime" />
        <Legend />
      </section>

      <section>
        <h2 className="text-[22px] font-semibold mb-1">库里还有，但没进主表</h2>
        <p className="text-muted text-[14px] mb-4 max-w-[880px]">
          保证「它存在」，不保证逐格核过。停服的降到这里，不删。
        </p>
        <div className="flex flex-col gap-3">
          {(["clip", "realtime"] as const).flatMap((k) =>
            extendedOf(k).map((m) => (
              <div key={m.id} className="border-t border-rule pt-3 text-[15px]">
                <p className="font-semibold">
                  {label(m)}
                  <span className="text-muted font-normal text-[13px] ml-2">
                    {vendorName(m)} · {m.version_as_of}
                  </span>
                  {m.status && m.status !== "active" && (
                    <span className={`ml-2 text-[12px] ${STATUS[m.status]?.cls.replace("line-through", "")}`}>
                      {STATUS[m.status]?.tag}
                    </span>
                  )}
                </p>
                {m.status_note && <Rich text={m.status_note} className="text-muted text-[13px] mt-1 leading-relaxed block" />}
              </div>
            )),
          )}
        </div>
      </section>

      <section>
        <h2 className="text-[22px] font-semibold mb-1">明确不收的</h2>
        <p className="text-muted text-[14px] mb-4 max-w-[880px]">
          门槛三条：输出或转换动态影像、以模型形式提供、面向内容创作。
        </p>
        <div className="flex flex-col gap-3">
          {atlas.excluded.map((e) => (
            <div key={e.name} className="border-t border-rule pt-3 text-[15px]">
              <p className="font-semibold">
                {e.name}
                <span className="text-muted font-normal text-[13px] ml-2">
                  {e.vendor} · {e.kind} · {e.date} 判定
                </span>
              </p>
              <Rich text={e.why} className="text-muted text-[13px] mt-1 leading-relaxed block" />
              {e.same_bucket?.length ? (
                <p className="text-muted text-[13px] mt-1">同类一并不收：{e.same_bucket.join("、")}</p>
              ) : null}
              {e.revisit && <p className="text-muted text-[13px] mt-1 italic">{e.revisit}</p>}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

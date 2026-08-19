import Link from "next/link";
import { Rich } from "@/components/Fact";
import alerts from "@/data/alerts.json";

/**
 * 快讯条。**站上唯一一个会主动打断阅读的东西，所以门槛必须高。**
 *
 * ## 它跟 `/changes` 页的区别
 *
 * `/changes` 是「读者主动来才看得到」；这条横幅是「你没找它，它也拦你一下」。
 * 一个站里能这么做的东西只该有一样，多了就没人看了。
 * 所以判据不是「有新变化」，是**「知道与不知道，做法会不一样」** ——
 * 由写那条变更事件的人在 `alert` 里明说，脚本不替他判断。
 *
 * ## 到期自己下架
 *
 * `data/alerts.json` 是 `scripts/alert.mjs` 按 `alert.until` 过滤后的产物，
 * 过期的根本不会出现在这里。**一个要靠人记得删的横幅，就是会挂一年的横幅** ——
 * 而挂着的旧快讯比没有横幅更伤：它告诉读者这个站没人管。
 *
 * ## 必须带出处
 *
 * 横幅上没有出处，它就是一条广告。这一站全部的说服力都建立在
 * 「每条事实都指得到来源」上，最显眼的位置更不能例外。
 */
export default function Flash() {
  const items = alerts.items ?? [];
  if (!items.length) return null;

  return (
    <div className="border-b border-rule bg-chip-warm/50">
      {items.map((a) => (
        <div key={a.id} className="mx-auto max-w-[1240px] px-4 py-3 flex flex-col gap-1.5">
          <div className="flex items-baseline gap-3 flex-wrap">
            {/* 「快讯」两个字要认得出是标记不是标题，所以做成小方块而不是大字 */}
            {/* 标签的字面来自数据（`changes.json` 的 `$alert_label`）—— 组件里不写死中文，改名只改一处 */}
            <span className="shrink-0 px-1.5 py-px bg-chip-warm-ink text-paper text-[11px] tracking-[0.18em]">
              {alerts.label ?? "快讯"}
            </span>
            <Link href="/changes" className="text-[16px] font-semibold underline-offset-4 hover:underline">
              {a.headline}
            </Link>
            <span className="text-muted text-[12px] tabular-nums">{a.date}</span>
          </div>
          <Rich text={a.why} className="text-[13.5px] text-muted leading-relaxed" />
          {a.src ? (
            <p className="text-[12px] text-muted">
              出处：
              <a href={a.src.url} className="underline underline-offset-2" target="_blank" rel="noreferrer">
                {a.src.name}
              </a>
              <span className="ml-2">{a.src.tier === "official" ? "官方" : "第三方"}</span>
            </p>
          ) : (
            /* 没有出处的快讯不该存在。真出现了就明写在页面上，别悄悄少一行。 */
            <p className="text-[12px] text-no">这一条没有出处 —— 请去 data/changes.json 补。</p>
          )}
        </div>
      ))}
    </div>
  );
}

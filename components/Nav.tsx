"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * 全站导航。挂在 layout 上，**每一页都有** —— 否则总有页面是死路。
 *
 * 顺序按三条动线的入口排：先「我要做什么」（首页），
 * 再「现在到什么程度」（演化树、地图、能力），最后「我在追踪」（变化）。
 * `方法` 单独放右边 —— 它是口径收容所，不是内容。
 *
 * `data-nav="global"` 是给检查器认的记号：**用通用的 `<nav>` 标签查会假阳性** ——
 * 详情页里的面包屑也是 `<nav>`，把全站导航整个拆掉，检查照样绿。
 * 这个假阳性是「拿一条已知是错的喂进去看它响不响」抓出来的。
 *
 * **没建好的页不放进导航。** 一个点进去发现「还在建」的入口，
 * 比没有入口更糟 —— 它把人引进死路。
 */
/**
 * 四张图 = 全部主线（docs/北极星.md 第三节 + 场景）。导航就是这四个词。
 *
 *   现在 → /       AI 视频研发到哪一步了、谁能做什么（首页真值表）
 *   演变 → /tree   谁在什么时候长出了什么
 *   关系 → /map      谁是谁家的、谁基于谁
 *   场景 → /scenario 我想做这件事，谁能做（方案 §10 Skill 第一等公民）
 *
 * 用户只要这四个问题的答案。**其余一切都是它们的下级或废案**，不占导航：
 * `/models` `/compare` `/capability` `/model` 从图里点进去；
 * `/changes` `/skill` `/toolkit` `/caveats` 是复访/长尾层，从首页页脚的次级入口进。
 *
 * 上一版挂到过九项、砍到六项、又砍到四项 —— **每一次「砍」都还留着不服务三张图的词**。
 * 这一次对着北极星砍到底：不服务三张图的，一个都不上导航。
 * `方法` 单独放右边，它是口径收容所不是内容。
 *
 * `data-nav="global"` 是给检查器认的记号：用通用 `<nav>` 查会假阳性（面包屑也是 nav）。
 */
const MAIN = [
  { href: "/", zh: "现在" },
  { href: "/tree", zh: "演变" },
  { href: "/map", zh: "关系" },
  { href: "/scenario", zh: "场景" },
];

export default function Nav() {
  const p = usePathname() ?? "/";
  const here = (h: string) => (h === "/" ? p === "/" : p.startsWith(h.split("/").slice(0, 2).join("/")));

  // 下级页 = 不在四张主图导航里的页（/skill/* /model/* /compare/* /changes /toolkit …）。
  // 它们从图里点进去，得有一条明确的回退路 —— 否则读者点深了只能靠浏览器后退。
  const isSub = ![...MAIN.map((m) => m.href), "/method"].includes(p) && p !== "/";

  return (
    <nav data-nav="global" className="border-b border-rule bg-paper sticky top-0 z-20">
      <div className="max-w-[1240px] mx-auto px-5 h-12 flex items-center gap-1 overflow-x-auto">
        <Link href="/" className="text-[13px] font-semibold bg-ink text-paper px-2 py-1 shrink-0 mr-2">
          AI 能力地图
        </Link>
        {/* 返回放**最左**（紧挨 logo）—— 放右上角太不显眼，负责人以为没加成功。 */}
        {isSub && (
          <button onClick={() => window.history.back()}
            className="text-[14px] font-medium px-2.5 py-1 mr-2 shrink-0 whitespace-nowrap text-ink hover:text-yes-ink border border-rule">
            ← 返回
          </button>
        )}
        {MAIN.map((m) => (
          <Link key={m.href} href={m.href}
            className={`text-[14px] px-2.5 py-1 shrink-0 whitespace-nowrap ${
              here(m.href) ? "text-ink font-semibold" : "text-muted hover:text-ink"
            }`}>
            {m.zh}
          </Link>
        ))}
        <Link href="/method"
          className={`text-[13px] px-2.5 py-1 ml-auto shrink-0 whitespace-nowrap underline ${
            here("/method") ? "text-ink" : "text-muted hover:text-ink"
          }`}>
          方法
        </Link>
      </div>
    </nav>
  );
}

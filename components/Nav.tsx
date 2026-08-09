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
 * 六项 + 右侧「方法」（docs/视觉方案_V1.md 第五节）。
 *
 * 上一版挂了九项 —— **九项等于没做取舍**，读者第一眼就要在九个词里挑。
 * `/models` `/skill` `/compare` `/capability` `/model` 都是从主图点进去的下级页，不占导航。
 * `/where`（去哪用）和 `/caveats`（别踩坑）同样撤出导航：**它们是「看完表之后」的问题**，
 * 入口应该长在表的下面，不是长在页面最顶上 —— 人还没看表，不会先问「我去哪用」。
 *
 * ## 「地图」为什么改叫「厂商」
 *
 * 产品叫「AI 能力地图」，首页那张真值表**就是能力地图本体**；
 * 我却又在导航里放了个「地图」指向 /map，两个都叫地图，读者当然要问哪个是哪个。
 * /map 回答的是「谁是谁家的」—— 那是**组织**问题不是能力问题，两张图本就不该同名。
 * 首页从左上角 logo 进，logo 上写着的就是产品名。
 */
const MAIN = [
  { href: "/map", zh: "厂商" },
  { href: "/tree", zh: "演化" },
  { href: "/skill", zh: "Skills" },
  { href: "/changes", zh: "变化" },
  { href: "/toolkit", zh: "导航" },
];

export default function Nav() {
  const p = usePathname() ?? "/";
  const here = (h: string) => (h === "/" ? p === "/" : p.startsWith(h.split("/").slice(0, 2).join("/")));

  return (
    <nav data-nav="global" className="border-b border-rule bg-paper sticky top-0 z-20">
      <div className="max-w-[1240px] mx-auto px-5 h-12 flex items-center gap-1 overflow-x-auto">
        <Link href="/" className="text-[13px] font-semibold bg-ink text-paper px-2 py-1 shrink-0 mr-2">
          AI 能力地图
        </Link>
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

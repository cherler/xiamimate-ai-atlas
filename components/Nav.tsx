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
 * 比没有入口更糟 —— 它把人引进死路。/skill 还在建，所以还没进来。
 */
const MAIN = [
  { href: "/", zh: "首页" },
  { href: "/tree", zh: "演化" },
  { href: "/map", zh: "关系图" },
  { href: "/where", zh: "去哪用" },
  { href: "/caveats", zh: "别踩坑" },
  { href: "/models", zh: "全部模型" },
  { href: "/toolkit", zh: "工具箱" },
  { href: "/changes", zh: "变化" },
];

export default function Nav() {
  const p = usePathname() ?? "/";
  const here = (h: string) => (h === "/" ? p === "/" : p.startsWith(h.split("/").slice(0, 2).join("/")));

  return (
    <nav data-nav="global" className="border-b border-rule bg-paper sticky top-0 z-20">
      <div className="max-w-[1240px] mx-auto px-5 h-12 flex items-center gap-1 overflow-x-auto">
        <Link href="/" className="text-[13px] font-semibold bg-ink text-paper px-2 py-1 rounded shrink-0 mr-2">
          AI 能力地图
        </Link>
        {MAIN.map((m) => (
          <Link key={m.href} href={m.href}
            className={`text-[14px] px-2.5 py-1 rounded shrink-0 whitespace-nowrap ${
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

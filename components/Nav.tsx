"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { atlas } from "@/lib/atlas";
import DomainSwitch from "./DomainSwitch";
import { BRAND } from "@/lib/brand";

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
 *   关系 → /map      谁和谁有关系（公司→模型→能力，能力是枢纽）
 *   场景 → /scenario 我想做这件事，谁能做（方案 §10 Skill 第一等公民）
 *
 * 用户只要这四个问题的答案。**其余一切都是它们的下级或废案**，不占导航：
 * `/models` `/compare` `/capability` `/model` 从图里点进去；
 * `/changes` `/toolkit` `/caveats` 是复访/长尾层，从首页页脚的次级入口进；
 * 「场景」页（/scenario）已经涵盖六件事的做法，原 /skill 索引删掉，只留 /skill/[id] 详情。
 *
 * 上一版挂到过九项、砍到六项、又砍到四项 —— **每一次「砍」都还留着不服务三张图的词**。
 * 这一次对着北极星砍到底：不服务三张图的，一个都不上导航。
 * `方法` 单独放右边，它是口径收容所不是内容。
 *
 * `data-nav="global"` 是给检查器认的记号：用通用 `<nav>` 查会假阳性（面包屑也是 nav）。
 */
/**
 * 四张图。**路径带方向前缀** —— `/atlas/video/tree`、`/atlas/image/tree`。
 * 这里只写后缀，前缀由当前所在的方向决定（见下面 `dom`）。
 */
const MAIN = [
  { seg: "", zh: "现在" },
  { seg: "/tree", zh: "演变" },
  { seg: "/map", zh: "关系" },
  { seg: "/scenario", zh: "场景" },
];

export default function Nav() {
  const p = usePathname() ?? "/";
  /**
   * 当前在哪个方向。从路径第一段取；取不到（根页、/method 这类全局页）
   * 就退回 live 的那个 —— **导航不能因为你在全局页就失去入口**。
   */
  const parts = p.replace(/^\/atlas/, "").split("/").filter(Boolean);
  const seg = parts[0] ?? "";
  /**
   * `/skill/[id]` 这类页不带方向前缀，但它**本身是属于某个方向的**。
   * 只按路径退回 live 方向的话，「虚拟试穿」这个图像 Skill 会顶着
   * 「AI 视频」的导航显示 —— 和之前 /atlas/image/map 显示视频是同一类错。
   * 实体自己知道自己属于谁，就问它。
   */
  const owner = seg === "skill"
    ? atlas.skills.find((k) => k.id === parts[1])?.domain
    : undefined;
  const dom = atlas.domains.some((d) => d.id === seg)
    ? seg
    : owner && atlas.domains.some((d) => d.id === owner)
      ? owner
      : (atlas.domains.find((d) => d.state === "live") ?? atlas.domains[0]).id;
  const base = `/${dom}`;
  const here = (h: string) => (h === base ? p.endsWith(base) : p.includes(h));

  // 返回不放在导航条里 —— 塞进菜单栏太丑、和菜单项挤在一起。
  // 改用 <BackLink/> 放各下级页内容区顶部（像旧 /method 的「回地图」那样）。
  return (
    <nav data-nav="global" className="border-b border-rule bg-paper sticky top-0 z-20">
      {/**
       * 品牌块在 `overflow-x-auto` **之外**。
       * 放进去的话，那个 overflow 会建立裁剪上下文，把绝对定位的下拉整个切掉 ——
       * 面板照样存在于 DOM 里、`aria-expanded` 也照样是 true，
       * 只是**一个字都看不见**。又一个「查 DOM 查不出来」的坑。
       */}
      <div className="max-w-[1240px] mx-auto px-5 h-12 flex items-center gap-1">
        <DomainSwitch brand={BRAND.short} current={dom} />
        <div className="flex items-center gap-1 min-w-0 flex-1 overflow-x-auto">
          {MAIN.map((m) => {
            const href = `${base}${m.seg}`;
            return (
              <Link key={href} href={href}
                className={`text-[14px] px-2.5 py-1 shrink-0 whitespace-nowrap ${
                  here(href) ? "text-ink font-semibold" : "text-muted hover:text-ink"
                }`}>
                {m.zh}
              </Link>
            );
          })}
          <Link href="/method"
            className={`text-[13px] px-2.5 py-1 ml-auto shrink-0 whitespace-nowrap underline ${
              here("/method") ? "text-ink" : "text-muted hover:text-ink"
            }`}>
            方法
          </Link>
        </div>
      </div>
    </nav>
  );
}

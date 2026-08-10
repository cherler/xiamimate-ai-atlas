"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { atlas } from "@/lib/atlas";

/**
 * 方向切换器 —— 导航最左边那块。
 *
 * ## 为什么不是一排 tab
 *
 * 数据里 domains 现在只有一条（AI 视频，state=live）。做成一排 tab、把「AI 编程」
 * 「AI 音乐」也摆上去灰着，是**假装有别的**，而这个产品的全部本钱就是不骗人
 * （lib/atlas.ts 的 Domain 注释原话）。所以这里是一个下拉：
 * 收起时只显示当前这一卷，展开时**如实说还有几卷、都是什么状态**。
 *
 * 加第二个方向 = 往 data/atlas.json 的 domains 里加一条，不动这个文件。
 */
export default function DomainSwitch({ brand }: { brand: string }) {
  const [open, setOpen] = useState(false);
  /**
   * 平台页眉挂上时收起品牌字样。
   *
   * 挂上之后上面那条已经写着「虾米伙伴 › 虾米看AI」，这里再写一遍
   * 就是同一个名字在两行里各说一遍。挂不上（本地 dev、干净 clone）时照旧显示 ——
   * **降级后不能连自己是谁都没了。**
   */
  const [chrome, setChrome] = useState(false);
  useEffect(() => {
    const el = document.documentElement;
    const read = () => setChrome(el.dataset.chrome === "on");
    read();
    const mo = new MutationObserver(read);
    mo.observe(el, { attributes: true, attributeFilter: ["data-chrome"] });
    return () => mo.disconnect();
  }, []);
  const box = useRef<HTMLDivElement>(null);
  const now = atlas.domains.find((d) => d.state === "live") ?? atlas.domains[0];

  useEffect(() => {
    if (!open) return;
    const away = (e: MouseEvent) => {
      if (box.current && !box.current.contains(e.target as Node)) setOpen(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", away);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", away);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  const planned = atlas.domains.filter((d) => d.state !== "live" && !d.href);

  return (
    <div ref={box} className="relative shrink-0 mr-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="flex items-center gap-1.5 text-[13px] font-semibold bg-ink text-paper px-2 py-1 hover:opacity-90"
      >
        {!chrome && (
          <>
            <span>{brand}</span>
            <span className="opacity-55">·</span>
          </>
        )}
        <span className={chrome ? "" : "font-normal"}>{now?.name}</span>
        <span className={`text-[9px] transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full mt-1 min-w-[230px] bg-paper border border-ink shadow-[3px_3px_0_var(--color-rule)] py-1 z-30"
        >
          {/**
            * 有 href 的就是**真能点进去**，没有的才是「还没开始」。
            * 之前无差别标「还没开始」，是因为那时确实只有一个方向；
            * 现在 AI 图像已经有页面了 —— 还标「还没开始」就是骗人。
            */}
          {atlas.domains.map((d) => {
            const live = d.state === "live";
            const inner = (
              <>
                <span className={live ? "text-yes-ink" : "text-unknown"}>{live ? "●" : "○"}</span>
                {d.name}
                {!live && (
                  <span className="ml-auto text-[11px]">{d.href ? "建设中" : "还没开始"}</span>
                )}
              </>
            );
            const cls = `px-3 py-1.5 text-[13px] flex items-center gap-2 ${
              live ? "font-semibold" : "text-muted"
            }`;
            return d.href ? (
              <Link key={d.id} href={d.href} role="menuitem" onClick={() => setOpen(false)}
                className={`${cls} hover:bg-yes/8`}>
                {inner}
              </Link>
            ) : (
              <div key={d.id} role="menuitem" className={cls}>{inner}</div>
            );
          })}
          {/* **不许悄悄留白。** 只有一卷就把这句写出来，别让人以为菜单坏了。 */}
          {/**
            * 这句话的条件写错过一次：原来只看 `planned.length`，
            * 而 planned 现在把「有页面的建设中方向」排除掉了 ——
            * 于是加上 AI 图像之后，菜单里明明列着两卷，底下还写着「目前只有这一卷」。
            * **实测点开菜单才看见的。** 条件改成看方向总数。
            */}
          {atlas.domains.length <= 1 ? (
            <p className="px-3 pt-1.5 pb-1 mt-1 border-t border-rule text-[11px] text-muted leading-snug">
              目前只有这一卷。下一个方向没开工，就不在这里摆一个灰名字。
            </p>
          ) : (
            <p className="px-3 pt-1.5 pb-1 mt-1 border-t border-rule text-[11px] text-muted leading-snug">
              「建设中」= 页面能看，但数据还没核完 ——{" "}
              <span className="text-ink">⬜ 多不代表厂商不透明，是我们还没读完。</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

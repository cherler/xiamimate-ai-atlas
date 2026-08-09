"use client";

import { useRouter } from "next/navigation";

/**
 * 下级页的返回链接。**放各页内容区顶部**（不塞进导航条 —— 塞菜单栏里太丑）。
 * 位置贴近导航条下沿，间距小；样式和旧 /method 的「回地图」一致。
 *
 * 用 router.back() 而不是固定回首页 —— 从哪来回哪去（从场景页点进 skill，
 * 返回的就是场景页）。没有历史时浏览器兜底到首页。
 */
export default function BackLink() {
  const r = useRouter();
  return (
    <button
      onClick={() => r.back()}
      className="text-muted text-[13px] underline hover:text-ink self-start"
    >
      ← 返回
    </button>
  );
}

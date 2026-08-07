import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 视频能力地图",
  description:
    "模型之间不靠出身相连，靠能做什么相连。每条事实都带来源、核验日期，和一个「这是机器写的」标记。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

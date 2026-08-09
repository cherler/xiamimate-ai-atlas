import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import NextSteps from "@/components/NextSteps";

const DESC =
  "模型之间不靠出身相连，靠能做什么相连。每条事实都带来源、核验日期，和一个「这是机器写的」标记。";

/**
 * 分享图（§19 · G4）。图由 scripts/make-share.mjs 从 data/atlas.json 生成，
 * **不是手做的** —— 手做的图迟早和数据对不上，而这个项目卖的就是「对得上」。
 *
 * metadataBase 必须写死成线上域名：OG 抓取方要的是绝对地址，
 * 相对路径在微信/Twitter 那边一律抓不到。
 * 路径里的 /atlas 是 basePath —— public/og/x.png 部署后就在 /atlas/og/x.png。
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://xiamimate.com"),
  title: "AI 视频能力地图",
  description: DESC,
  openGraph: {
    title: "9 个 AI 视频模型 × 11 项能力，谁能做什么",
    description: DESC,
    url: "/atlas/",
    siteName: "AI 能力地图",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/atlas/og/index-16x9.png", width: 1200, height: 675 }],
  },
  twitter: { card: "summary_large_image", images: ["/atlas/og/index-16x9.png"] },
  // RSS 自动发现：**静态站没有后端，订阅只能是一个静态文件** ——
  // 好处是读者不用把邮箱交给我们。
  alternates: { types: { "application/rss+xml": [{ url: "/atlas/changes.xml", title: "AI 能力地图 · 变了什么" }] } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        {/* Nav 和 NextSteps 挂在 layout 上 —— **每一页都有，否则总有页面是死路**。 */}
        <Nav />
        {children}
        <div className="max-w-[1240px] mx-auto px-5 pb-10">
          <NextSteps />
        </div>
      </body>
    </html>
  );
}

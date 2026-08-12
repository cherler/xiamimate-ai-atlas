import type { Metadata } from "next";
/**
 * **和主站同一份 Geist**（`geist` 官方包把 woff2 随 npm 本地分发，构建不请求外网）。
 *
 * 为什么要专门加：平台令牌 `--xm-font-sans` 里**根本没有 Geist**，它是
 * `"PingFang SC", "Microsoft YaHei", system-ui…`；主站是在 `<body>` 上另外套了
 * next/font 的 Geist。于是**照着令牌做的子应用，字体和主站不一样** ——
 * 拉丁字母和数字全变样，而这一站满屏是型号名和日期。
 * 令牌文件自己写着「一处不同，用户切模块时就会觉得跳到别的网站了」，这就是那一处。
 */
import { GeistSans } from "geist/font/sans";
import { BRAND } from "@/lib/brand";
import "./globals.css";
import Nav from "@/components/Nav";
import { ChromeFooter, ChromeHeader } from "@/components/PlatformChrome";
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
  /**
   * `template` 让每个子页都自动带上站名 —— 否则分享出去的是一个孤零零的
   * 「谁和谁有关系」，看不出是谁家的。首页用 default，与姊妹站同格式。
   */
  title: { default: BRAND.tab, template: `%s｜${BRAND.short}` },
  icons: { icon: BRAND.icon, shortcut: BRAND.icon, apple: BRAND.icon },
  description: DESC,
  openGraph: {
    title: "9 个 AI 视频模型 × 11 项能力，谁能做什么",
    description: DESC,
    url: "/atlas/",
    siteName: BRAND.full,
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/atlas/og/index-16x9.png", width: 1200, height: 675 }],
  },
  twitter: { card: "summary_large_image", images: ["/atlas/og/index-16x9.png"] },
  // RSS 自动发现：**静态站没有后端，订阅只能是一个静态文件** ——
  // 好处是读者不用把邮箱交给我们。
  alternates: { types: { "application/rss+xml": [{ url: "/atlas/changes.xml", title: `${BRAND.full} · 变了什么` }] } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={GeistSans.variable}>
      {/**
        * `min-h-screen` + 纵向 flex：**内容不够一屏时，把空白留在页脚之上**。
        *
        * 2026-08-12 负责人在 /atlas 首页上问「页脚怎么会突然变那么高了，只有首页有」——
        * 量下来页脚一直是 65px，和别的页一样。真相是首页内容只有 654px，
        * 页脚画到 860px 就结束了，而视口有 1000px：**下面那 140px 白**紧贴着页脚的底色，
        * 看起来就像页脚被撑高了。别的页内容长过一屏，所以看不出来。
        *
        * `flex-1` 给的是内容区（children 与它后面的 NextSteps 一起），
        * 让它吃掉多余高度，页脚自然沉到底。
        */}
      <body className="min-h-screen flex flex-col">
        {/* 平台页眉页脚：加载主站 /chrome 制品。取不到就整个不渲染（本地 dev 即如此）。 */}
        <ChromeHeader />
        {/* Nav 和 NextSteps 挂在 layout 上 —— **每一页都有，否则总有页面是死路**。 */}
        <Nav />
        <div className="flex-1">
          {children}
          <div className="max-w-[1240px] mx-auto px-5 pb-10">
            <NextSteps />
          </div>
        </div>
        <ChromeFooter />
      </body>
    </html>
  );
}

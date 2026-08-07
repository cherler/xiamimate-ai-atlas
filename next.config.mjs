/**
 * 静态导出，挂在 xiamimate.com/atlas 下。
 *
 * 为什么是静态而不是跑 Node：**这个站没有任何服务端逻辑** ——
 * 所有数据在构建时从 data/*.json 读进来，前端纯渲染。
 * 跑一个 Node 进程只是多一个要守着的东西，换不来任何动态能力。
 *
 * 和 tools-frontend、stocks 同一套形态：`next build` 出 out/，
 * 传到 /srv/xiamimate/atlas/current，Caddy 用 handle_path 剥掉前缀（见 deploy/）。
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  // Caddy 的 handle_path 会剥掉 /atlas 前缀，所以静态文件按根目录摆；
  // 但 HTML 里的资源链接必须带 /atlas —— 那正是 basePath 干的事。两者配套，缺一不可。
  basePath: "/atlas",
  images: { unoptimized: true },
  // Next dev 默认只放行 localhost 来源；用 127.0.0.1 打开会被拒，
  // 而且是**静默失败**（HMR / hydration 不工作，页面点不动）。抄自 tools-frontend 踩过的坑。
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;

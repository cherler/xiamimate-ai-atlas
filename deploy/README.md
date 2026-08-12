# 上线

挂在 `xiamimate.com/atlas`。形态与 `/stocks`、`/admin` 完全一致：
**纯静态 + Caddy `handle_path`**，没有后端进程。

## 为什么是静态

这个站**没有任何服务端逻辑** —— 所有数据在构建时从 `data/*.json` 编进页面。
跑一个 Node 进程只是多一个要守着的东西，换不来任何动态能力：
不占内存、不用 pm2、不会挂、更新就是覆盖一批文件。

## 实际做法（2026-08-12 首次部署跑通的那一版）

服务器上有仓库的 checkout（`/srv/xiamimate/xiamimate-ai-atlas`，从 GitHub 拉），
**在服务器上构建**，形态与 frontend / stocks 一致。

```bash
# 本机：分享图要浏览器，服务器上没有 —— 这一步只能在本机做
node scripts/make-matrix.mjs && node scripts/make-share.mjs && node scripts/make-feed.mjs
tar -czf /tmp/atlas-og.tar.gz -C public og && scp /tmp/atlas-og.tar.gz <server>:/tmp/

# 服务器：
cd /srv/xiamimate/xiamimate-ai-atlas
sudo git fetch --all && sudo git reset --hard origin/main
sudo PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm ci --no-audit --no-fund
sudo tar -xzf /tmp/atlas-og.tar.gz -C public      # 先放分享图，再构建
sudo node scripts/validate.mjs                    # 硬闸：数据坏了就不该有产物
sudo npx next build

TS=$(date +%Y%m%d-%H%M%S)
sudo mv /srv/xiamimate/atlas/current /srv/xiamimate/atlas/backup-$TS
sudo cp -r out /srv/xiamimate/atlas/current
```

**回滚就是把 `current` 换回某个 `backup-*`。**

> ⚠️ 三条与旧版文档不符的地方，都是这次真部署照出来的：
>
> 1. **`current` 是实目录，不是软链。** admin / frontend / stocks 三个都这样，
>    回滚靠 `backup-时间戳`。文档原来写「current 是软链」——跟着写会和现场不一致。
> 2. **服务器上出不了分享图。** `make-share.mjs` 要 Playwright 浏览器，
>    生产机上没装、也不值得为一个静态站装。所以 `public/og` 在本机生成后传过去，
>    **而且必须在 `next build` 之前放好** —— 它是靠构建拷进 out 的。
> 3. **`npm run package` 在服务器上跑不了**（最后一步 `verify.mjs` 要浏览器）。
>    服务器上只跑 `validate` + `next build`。

Caddy 配置见 `caddy-snippet.conf` —— 加到线上 Caddyfile 的 `:8080 { }` 块里，
**必须排在主站 `handle { }` 兜底之前**，否则 /atlas 全落到主站静态页。

## 两个配套的一半，缺一不可

| | |
|---|---|
| `next.config.mjs` 的 `basePath: "/atlas"` | 让 HTML 里的资源链接带 `/atlas` |
| Caddy 的 `handle_path /atlas/*` | 剥掉前缀，文件按根目录摆 |

只改一边就是 404。本地要验的话，用模拟线上形状的方式访问，
而不是 `npx serve out` —— 后者从根目录开，看不出这一对配没配好。
**构建成功 ≠ 部署形态对。**

## 上线前必须过的三条

1. `npm run package` 里的 `validate.mjs` 已经是硬闸：**数据坏了就没有产物**。
2. **hydration 要真验一次**：静态导出如果没 hydrate，页面看起来一模一样但是死的
   —— 点一个能力节点，看详情出不出来。
3. 片子与封面里的数字（9 个模型 / 99 格 / 93 格官方来源）来自同一份 `atlas.json`。
   **数据改了就要重出物料**，否则站和片子对不上 —— 而「对得上」正是这产品卖的东西。

## 采集不在这里

`scripts/watch.mjs` 那条管线是**另一件事**，跑在别处（见 `ops/`）。
站是静态的、只在构建时读数据；采集改的是数据，改完要重新 package 才会上线。
两者故意不耦合：**采集挂了，站还在**。

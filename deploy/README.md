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
# 本机：分享图与架构图都要浏览器，服务器上没有 —— 这两步只能在本机做
node scripts/make-matrix.mjs && node scripts/make-share.mjs && node scripts/make-feed.mjs
npm run diagrams        # 专项的架构图（mermaid → SVG）→ public/diagrams/

# COPYFILE_DISABLE=1 是廉价保险，**但它不是已证实的解药**（见下方「未解之谜」）。
COPYFILE_DISABLE=1 tar -czf /tmp/atlas-og.tar.gz -C public og diagrams && scp /tmp/atlas-og.tar.gz <server>:/tmp/

# 服务器：
cd /srv/xiamimate/xiamimate-ai-atlas
sudo git fetch --all && sudo git reset --hard origin/main
sudo PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm ci --no-audit --no-fund
sudo tar -xzf /tmp/atlas-og.tar.gz -C public      # 先放分享图，再构建
sudo node scripts/validate.mjs                    # 硬闸：数据坏了就不该有产物
sudo npx next build
```

⚠️ **`npm ci` + `next build` 加起来可能超过十分钟，别让它挂在一条会断的 ssh 上。**
2026-08-15 就是这么中断的：命令跑过 600 秒被挪到后台，**ssh 一断远端命令跟着被杀**，
回头看服务器上进程没了、`out/` 还是上一版的页数。在服务器上起后台任务才稳：

### 未解之谜：产物里会混进 AppleDouble 垃圾文件

2026-08-15 发现线上 `current/og/` 里躺着 **301 个 `._*` 文件**（`AppleDouble encoded
Macintosh file`），从 08-14 起每个 backup 里都有 238 个。没人会去请求它们，
不报错、不影响页面 —— **这正是它能一路攒下来没人发现的原因**。

**成因没查清，已知事实互相矛盾，先照实记下来：**

- 那些文件的时间戳是 12:17，对得上那次部署
- 但**我们发的那个包里一个都没有**：`tar tzf /tmp/og.tgz | grep -c '\._'` = 0
- 本机 `public/og/*.png` 确实带 `com.apple.provenance` 扩展属性（299 个）
- 而服务器上的 GNU tar 是**忽略**这类头的 —— 解包时刷的那屏
  `Ignoring unknown extended header keyword 'LIBARCHIVE.xattr.com.apple.provenance'`
  就是它在说「我不认识，跳过」。按这个逻辑它不该生成 AppleDouble 文件

**所以别把 `COPYFILE_DISABLE=1` 当成解药** —— 它是 macOS 侧的标准预防手段，加着不亏，
但这次的机制它解释不了。真正管用的是下面那条**不依赖成因的检查**：

```bash
# 切完产物必查：混进垃圾文件就地清掉。**比猜成因可靠。**
ssh <server> 'find /srv/xiamimate/atlas/current -name "._*" -delete
              find /srv/xiamimate/atlas/current -name "._*" | wc -l   # 必须是 0'
```

⚠️ 顺带一提：服务器上的仓库 `public/` 里也会留一个 `._og`。
**`git reset --hard` 不清未跟踪文件**，所以它会一直在，下次 `cp -r` 又带进产物 ——
部署脚本里那句 `rm -rf public/og` 清不掉它（它在 `og` 外面）。

```bash
ssh <server> 'cd /srv/xiamimate/xiamimate-ai-atlas && nohup bash -c "
  PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm ci --silent > /tmp/atlas-build.log 2>&1
  node scripts/validate.mjs >> /tmp/atlas-build.log 2>&1
  npx next build          >> /tmp/atlas-build.log 2>&1
  echo DONE_\$? >> /tmp/atlas-build.log
" > /dev/null 2>&1 &'
# 然后轮询 /tmp/atlas-build.log 里的 DONE_0
```

⚠️ **光看 DONE_ 标记不够 —— 它会静默骗你**（2026-08-15 又栽一次）。
那次 `setsid` 起的构建退出码是 1，而日志里**只有 `DONE_1` 七个字节** ——
`npm ci`、`validate`、`next build` 三条命令**一个字都没输出**；
同样的命令手动跑却完全正常。原因没查清（环境差异），但后果很清楚：
**如果只认「有 DONE_ 就往下走」，就会把上一版的 `out/` 当成新产物切上去，
等于一次静默回滚。**

所以切产物前三样都要过，缺一不可：

```bash
ssh <server> '
  grep -c DONE_0 /tmp/atlas-build.log                    # ① 标记是 DONE_0 不是 DONE_1
  wc -l < /tmp/atlas-build.log                           # ② 日志有真内容（不能只有一行）
  find /srv/xiamimate/xiamimate-ai-atlas/out -name "*.html" | wc -l   # ③ 页数
'
find out -name '*.html' | wc -l                          # ③ 和本机 build 的页数对得上
```

**③ 是最早响的那个警报。** 这次就是它拦住的：服务器 1276 / 本机 1270，
数字对不上时**不要往下走** —— 那 6 页之差正是「移除 Synthesia 之后少的页」，
说明服务器根本没重新构建。

```bash

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

## 首次上线的验收结果（2026-08-12）

线上 `https://xiamimate.com/atlas/`，11 条路径全 200，逐页核过标题与关键词
（**不是兜底给的首页** —— 那才是这套路由最容易出的错）；
尾斜杠 308 到规范地址；`_next` 静态资源 200；107 张分享图抽查 200。

**hydration 已验：** 点演进树上的节点，正文从 1966 字变成 2144 字，控制台无报错。

## ⚠️ 对线上做浏览器验收，必须用**有头**浏览器

SafeLine 会掐掉无头浏览器的连接 —— 表现是 `net::ERR_CONNECTION_CLOSED`，
**而同一时刻 curl 直连是 200**。实测：

| 方式 | 结果 |
|---|---|
| curl 直连（任意 UA）| 200 |
| Playwright headless（哪怕换成真 UA）| ERR_CONNECTION_CLOSED |
| Playwright `headless: false` | 200 |

**这是反爬在正常工作，不是故障。** 但它极易被误判 ——
2026-08-12 我为此绕了两圈：第一次记成「本地网络那层的事」就没往下查，
第二次直接怀疑到自己刚动过的服务器上，还一度断定是
「在生产机上跑 next build 把 SafeLine 撑 OOM 了」。
**手上有个变更，就容易把什么都归到它头上。**

所以线上验收的正确姿势：

```js
const b = await chromium.launch({ headless: false, args: ["--no-proxy-server"] });
```

`--no-proxy-server` 也是必需的：本机若开着系统代理，浏览器走代理同样连不上。

## 上线前必须过的三条

1. `npm run package` 里的 `validate.mjs` 已经是硬闸：**数据坏了就没有产物**。
2. **hydration 要真验一次**：静态导出如果没 hydrate，页面看起来一模一样但是死的
   —— 点一个能力节点，看详情出不出来。
3. 片子与封面里的数字（9 个模型 / 99 格 / 93 格官方来源）来自同一份 `atlas.json`。
   **数据改了就要重出物料**，否则站和片子对不上 —— 而「对得上」正是这产品卖的东西。

## 分享图没有「分享按钮」，这是刻意的

负责人 2026-08-12 问「分享按钮在哪」——**站上没有，也不该有**。
106 张图分两种用途：

| | 谁在用 | 有没有入口 |
|---|---|---|
| `*-16x9.png`（97 张，每页一张）| 微信 / Twitter / Slack 抓的 `og:image` | 不需要入口 —— 别人**粘贴链接**时自动弹预览卡 |
| `index / tree / caveats` 的 1:1 与 9:16（9 张）| 手动发社交媒体 | **目前没有入口**，只能按 URL 取 |

第一种是刚需且全自动；第二种是给人下载去发小红书/朋友圈的，
**站上确实没有地方能拿到它们** —— 要么加个取图入口，要么就承认它是运营手动用的素材。
这个缺口记在这里，别让它变成「生成了但没人知道」。

## 采集不在这里

`scripts/watch.mjs` 那条管线是**另一件事**，跑在别处（见 `ops/`）。
站是静态的、只在构建时读数据；采集改的是数据，改完要重新 package 才会上线。
两者故意不耦合：**采集挂了，站还在**。

## 备份只留最近三份

`current` 每次上线都会被 `mv` 成 `backup-时间戳`，**它不会自己清**。
2026-08-17 发现攒了 27 份、共 2.5G（最早的是 08-12），负责人：「天呐，没必要，
只要最近三份备份就 ok 了」。清完从 2.5G 降到 504M。

```bash
ssh <server> 'cd /srv/xiamimate/atlas && ls -dt backup-* | tail -n +4 | xargs -r sudo rm -rf'
```

**删之前先把名单打出来看一眼** —— 确认 `current` 不在里面、要留的三份是最新的那三份
（其中第一份就是这次上线前的那个，也就是真正的回滚点）。

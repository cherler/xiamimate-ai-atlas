# 定时采集怎么跑起来

## 这条管线里，谁干什么

| 环节 | 谁 | 为什么 |
|---|---|---|
| 定时触发 | **系统调度器**（launchd / cron / systemd） | —— |
| 抓取、指纹、比对 | **纯 Node，一个模型都不用** | §33：确定性的事不该让模型碰。也正因如此它才敢无人值守 |
| 「这段变化意味着什么」 | **MiniMax-M3** | §33 里 LLM 该管的那一段 |
| 「要不要写进能力表」 | **人** | §59.3 的黄/红通道。绿色通道等分级规则做好再开 |

**抽取器不写 `atlas.json`。** 产出落在 `data/inbox/<日期>.json`，是候选不是事实 ——
「世界变了」和「我们认定它变了」是两件事。

## 本机（macOS，已装好）

```bash
launchctl bootstrap gui/$(id -u) ops/com.xiamimate.atlas-watch.plist   # 装
launchctl kickstart -k gui/$(id -u)/com.xiamimate.atlas-watch          # 立刻跑一次
launchctl bootout   gui/$(id -u)/com.xiamimate.atlas-watch             # 卸
tail -f data/watch.log
```

每天 09:23（**刻意避开整点** —— 整点是全世界定时任务一起砸源站的时刻）。
用 `launchd` 而不是 `crontab`，是因为笔记本会睡：`StartCalendarInterval`
错过触发后**会在下次唤醒时补跑**，crontab 不会。

## 上服务器：两个本机看不出来的坑

### 坑一 · SPA 源需要浏览器

46 个源里有一批是 `kind: "spa"`（Vidu 文档、Runway changelog、Kling 更新日志、
AA 榜单……），**纯 HTTP 抓回来是导航壳**。这些必须用无头 Chromium 渲染。

服务器上要装：

```bash
npx playwright install --with-deps chromium    # 约 400MB，含系统依赖
```

而且 `watch.mjs` 与 `sweep-nav.mjs` 里的 Playwright 路径**目前是写死的本机 npx 缓存路径**，
上服务器前必须改成正常依赖（`npm i -D playwright` 后 `import { chromium } from "playwright"`）。
**这是已知的移植债，别忘。**

### 坑二 · 出境可达性

按 `deployment-region-decision`，站点守大陆单点。但采集要抓的源里，
Google / HuggingFace / arXiv / TechCrunch / OpenAI 都在境外。

本机是靠 `HTTPS_PROXY` 走通的（而且踩过一次坑：**curl 认这个环境变量，
Node 的全局 fetch 默认不认**，要 `NODE_USE_ENV_PROXY=1`，脚本里已自动处理）。

服务器上有两条路，**必须先定一条**：

- 采集单独跑在能出境的机器上，产出（快照 + inbox）同步回大陆；
- 或者大陆机器走合规的出境代理。

这不是技术选择，是 `deployment-region-decision` 那条「出境合规」的延伸，得人拍板。

### 服务器上的定时（Linux）

```cron
23 9 * * *  cd /srv/xiamimate-ai-atlas && bash scripts/tick.sh
```

或 systemd timer（推荐，日志和失败重试更好管）：

```ini
# /etc/systemd/system/atlas-watch.timer
[Timer]
OnCalendar=*-*-* 09:23:00
Persistent=true          # 关机错过了，开机补跑 —— 和 launchd 的行为对齐
```

## 密钥

`MINIMAX_API_KEY` 从**仓库根的 `.env`** 读（已在 `.gitignore` 里）。
**不写进 plist / systemd unit** —— 那些文件是要进 git 的。

没有 key 也能跑：采集本身不需要模型，只是不做抽取那一步。

## 提交纪律

`tick.sh` 只提交 `data/snapshots/` 与 `data/watch-report.md`，
署名 `atlas-watch[bot]`，**绝不碰 `atlas.json` 和任何代码**。

判据是**快照变没变**，不是报告变没变 —— 报告每跑一次都带新时间戳，
拿它当判据会每天产生一次空提交，把 git log（我们的 ChangeEvent 表）冲成噪音。

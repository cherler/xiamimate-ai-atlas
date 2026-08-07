# 上线

挂在 `xiamimate.com/atlas`。形态与 `/stocks`、`/admin` 完全一致：
**纯静态 + Caddy `handle_path`**，没有后端进程。

## 为什么是静态

这个站**没有任何服务端逻辑** —— 所有数据在构建时从 `data/*.json` 编进页面。
跑一个 Node 进程只是多一个要守着的东西，换不来任何动态能力：
不占内存、不用 pm2、不会挂、更新就是覆盖一批文件。

## 三步

```bash
npm run package          # 校验数据 → 重出矩阵图 → 构建 → 打 tar.gz（约 330KB）
scp dist/atlas-*.tar.gz <server>:/tmp/
# 服务器上：
D=/srv/xiamimate/atlas/$(date +%Y%m%d-%H%M%S)
sudo mkdir -p $D && sudo tar -xzf /tmp/atlas-*.tar.gz -C $D
sudo ln -sfn $D /srv/xiamimate/atlas/current    # current 是软链
```

**回滚就是把软链指回上一个目录**，不用重新构建、不用回滚代码。

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

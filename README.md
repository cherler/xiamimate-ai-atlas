# 虾米看AI

以能力为线索，比较 AI 模型能做什么、适用什么场景，以及结论来自哪里。包含视频、图像、文本、声音、3D、数字人、具身智能、世界模型和科学计算九个方向。

- [GitHub Pages 完整版](https://cherler.github.io/xiamimate-ai-atlas/)
- [虾米伙伴站点](https://xiamimate.com/atlas/)

本仓库包含完整的页面、数据、来源快照、审阅工具与构建流程。模型和能力信息以 `data/atlas.json` 为真源；变更记录在 `data/changes.json`。每项判断保留来源、核验日期及适用版本，机器录入的内容仍需结合官方文档核对。

## 本地运行

需要 Node.js 22 和 npm。

```sh
npm ci
npx playwright install chromium
node scripts/make-share.mjs
npm run diagrams
npm run dev
```

打开 <http://localhost:3400/atlas/>。图表和分享图由数据生成，不随源码存储。需要处理数据时可手动运行 `npm run station`，打开 <http://127.0.0.1:8230/>；普通浏览和构建不需要开启采集、监控或审阅台。

## GitHub Pages 发布

仓库设置中选择 **Pages → Build and deployment → Source → GitHub Actions**，向 `main` 推送或手动运行 `Deploy full atlas to GitHub Pages` 即可发布。流程会验证数据、生成完整图片与架构图、构建静态页面并检查站内链接。没有定时监控或采集任务。

独立站点的导航、订阅和分享图使用当前 Pages 地址，纠错入口会打开预填好的 GitHub Issue，也可通过邮件反馈。原有 `xiamimate.com` 部署继续使用主站的页眉、页脚和反馈服务。

本地构建相同的独立版本：

```sh
export NEXT_PUBLIC_BASE_PATH=/xiamimate-ai-atlas
export NEXT_PUBLIC_SITE_ORIGIN=https://cherler.github.io
export NEXT_PUBLIC_STANDALONE=true
export NEXT_PUBLIC_REPOSITORY=cherler/xiamimate-ai-atlas
node scripts/make-share.mjs
npm run diagrams
npm run build:static
npm run basepath
npm run check:static
```

产物在 `out/`。以上变量只包含公开配置，不能填入任何密钥。不设置变量时，默认构建地址为 `https://xiamimate.com/atlas`；原站发布步骤见 [deploy/README.md](deploy/README.md)。

## 数据维护与设计

- [任务与迭代记录](docs/任务清单.md)
- [完整设计与交接文档](docs/AI_VIDEO_ATLAS_HANDOFF_V1.md)
- [本地运维说明](ops/README.md)

提交数据修改前运行 `npm run validate`；审阅逻辑的检查使用 `npm run test:review`，数据规则检查使用 `npm run test:rules`。`.env`、运行日志和生成图片不应提交到仓库。

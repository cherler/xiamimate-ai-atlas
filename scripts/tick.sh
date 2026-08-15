#!/bin/bash
# 定时一跳：抓到期的源 → 写快照 → 提交 → 记日志。
#
# **这一段必须是纯程序**（§33）：抓取、指纹、比对都是确定性的，不需要也不该
# 让模型参与。模型只在下一步「这段变化意味着什么」时进来。
#
# 由 launchd 调度（ops/com.xiamimate.atlas-watch.plist），不是 CronCreate ——
# CronCreate 只活在一个 Claude 会话里、7 天过期，而这条管线要长期跑。
#
# 三条纪律：
#   1. **只提交 data/snapshots 与 data/watch-report.md。** 绝不碰 atlas.json ——
#      「世界变了」和「我们认定它变了」是两件事，后者要走人审（§59.3 的黄/红通道）。
#   2. **提交者署名 atlas-watch[bot]**，和人工提交在 git log 里一眼分得开。
#      这正是 §59.4.c 说的「commit author 免费当录入身份用」。
#   3. **失败不静默**：抓不到、没内容都进日志，日志本身就是「哪家没有公开入口」的证据。
set -uo pipefail

cd "$(dirname "$0")/.." || exit 1
LOG=data/watch.log
mkdir -p data

# 这台机器上的代理。launchd 不继承登录 shell 的环境变量，所以要显式给。
# 代理没开也不致命 —— 一部分源直连可达，抓不到的会如实记进报告。
export HTTPS_PROXY="${HTTPS_PROXY:-http://127.0.0.1:7890}"
export HTTP_PROXY="${HTTP_PROXY:-$HTTPS_PROXY}"
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

# 密钥从仓库根的 .env 读（已在 .gitignore 里）。
# **不写进 plist** —— plist 是要进 git 的，密钥进 git 就废了。
[ -f .env ] && set -a && . ./.env && set +a

STAMP=$(date '+%Y-%m-%d %H:%M')
echo "── ${STAMP} 开跑" >> "$LOG"

if ! node scripts/watch.mjs --due >> "$LOG" 2>&1; then
  echo "   watch.mjs 退出码非零，见上方输出" >> "$LOG"
fi

# 只有快照或报告真的变了才提交 —— 空提交会把 git log 冲成噪音，
# 而 git log 是我们的 ChangeEvent 表。
# **判据是快照变没变，不是报告变没变。** 报告每跑一次都会带上新时间戳，
# 拿它当判据的话每天都会产生一次空提交，把 git log（我们的 ChangeEvent 表）冲成噪音。
if [ -n "$(git status --porcelain data/snapshots)" ]; then
  git add data/snapshots data/watch-report.md
  CHANGED=$(git diff --cached --name-only | grep -c 'data/snapshots/' || true)
  git -c user.name='atlas-watch[bot]' -c user.email='atlas-watch@xiamimate.local' \
      commit -q -m "watch: ${STAMP}，${CHANGED} 个源的快照有变动

由 scripts/tick.sh 自动提交。只动快照与报告，**没有碰 atlas.json** ——
「世界变了」不等于「我们认定它变了」，后者要走人审。
待办见 data/watch-report.md。" \
    && echo "   已提交：${CHANGED} 个源有变动" >> "$LOG"
else
  echo "   无变动，不提交" >> "$LOG"
fi

# 有变化才调模型。**这是管线里唯一花钱的一步**，没变化时一分不花。
# 抽出来的是候选，落在 data/inbox/，**不进 atlas.json** —— 那要走人审。
if [ -n "${MINIMAX_API_KEY:-}" ] && [ "${CHANGED:-0}" != "0" ]; then
  node scripts/extract.mjs >> "$LOG" 2>&1 || echo "   extract.mjs 失败，见上方" >> "$LOG"
elif [ -z "${MINIMAX_API_KEY:-}" ]; then
  echo "   没有 MINIMAX_API_KEY，跳过抽取（采集本身不需要模型）" >> "$LOG"
fi

# ── 引文回查：署的那个来源，今天还找得到这句话吗？
#
# **必须放在 watch 之后**：它比对的是刚落地的快照。
# 2026-08-15 加的，起因是那天 watch 一口气建了 31 个「首次」快照 ——
# 全是早就被格子引用、却从没进过监视的源。也就是说在那之前，
# **那些页变了也没人会发现**，「这个站会自己发现自己错了」在它们身上是假的。
#
# 它只写报告，**不改 atlas.json**，和 watch 同一条纪律。
node scripts/requote.mjs --report >> "$LOG" 2>&1 || echo "   requote.mjs 失败，见上方" >> "$LOG"

# ── 待办：汇成一个文件，并且主动叫人。
#
# **管线会攒待办，但在这之前它不会叫人** —— 收件箱里 17 条从 08-07 躺到 08-11，
# 四天没人知道，因为唯一的出口是这个日志文件，而人不会每天打开日志。
# 现在收敛到一个 data/TODO.md，并发一条本机通知（零成本、不需要任何凭据）。
# 要邮件/微信是另一件事，得先定渠道 —— 那是花钱和对外的决定。
node scripts/todo.mjs --notify >> "$LOG" 2>&1 || echo "   todo.mjs 失败，见上方" >> "$LOG"

# 待办表变了就提交 —— 它和快照一样是「这一天的事实」，要能回溯
if [ -n "$(git status --porcelain data/TODO.md data/requote-report.md)" ]; then
  git add data/TODO.md data/requote-report.md
  git -c user.name='atlas-watch[bot]' -c user.email='atlas-watch@xiamimate.local' \
      commit -q -m "watch: ${STAMP} 待办表更新" && echo "   待办表已提交" >> "$LOG"
fi

echo "" >> "$LOG"

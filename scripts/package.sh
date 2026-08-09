#!/bin/bash
# 打包上线产物。**校验在最前面** —— 数据坏了就不该有产物，
# 而不是先做出一个错的站再去发现。
set -euo pipefail
cd "$(dirname "$0")/.."

echo "── 1/5 校验数据"
node scripts/validate.mjs

echo "── 2/5 重出矩阵图（数据一变，图就得跟着变）"
node scripts/make-matrix.mjs

# 分享图不进 git —— 它是数据的产物，不是源码。
# 每次打包重出，才保证图上写的和站上写的是同一份数据。
echo "── 3/5 重出分享图与 RSS"
node scripts/make-share.mjs
node scripts/make-feed.mjs

echo "── 4/5 构建静态站"
rm -rf out
npm run build >/dev/null

# 出站前的最后一道：**量到用户能感知那一层**（详见 scripts/verify.mjs 开头）
echo "── 5/5 出站前验证"
node scripts/verify.mjs

echo "── 打包"
STAMP=$(date '+%Y%m%d-%H%M')
TAR="dist/atlas-${STAMP}.tar.gz"
mkdir -p dist
tar -czf "$TAR" -C out .
echo
echo "产物：${TAR}（$(du -h "$TAR" | cut -f1)）"
echo
echo "上线："
echo "  scp $TAR <server>:/tmp/"
echo "  ssh <server> 'set -e"
echo "    D=/srv/xiamimate/atlas/\$(date +%Y%m%d-%H%M%S)"
echo "    sudo mkdir -p \$D && sudo tar -xzf /tmp/$(basename "$TAR") -C \$D"
echo "    sudo ln -sfn \$D /srv/xiamimate/atlas/current'   # current 是软链，回滚就是改指向"

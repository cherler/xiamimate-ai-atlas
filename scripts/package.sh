#!/bin/bash
# 打包上线产物。**校验在最前面** —— 数据坏了就不该有产物，
# 而不是先做出一个错的站再去发现。
set -euo pipefail
cd "$(dirname "$0")/.."

echo "── 1/4 校验数据"
node scripts/validate.mjs

echo "── 2/4 重出矩阵图（数据一变，图就得跟着变）"
node scripts/make-matrix.mjs

echo "── 3/4 构建静态站"
rm -rf out
npm run build >/dev/null

echo "── 4/4 打包"
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

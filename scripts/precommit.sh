#!/bin/bash
# 提交前必须全过。**上一次我在构建失败的情况下提交了** ——
# 因为 `tsc | head` 让退出码永远是 0，`&&` 链断在 build，
# 而 git commit 是下一条命令，照样跑。
#
# 这支把顺序钉死：类型 → 数据校验 → 规则自测 → 构建 → 出站验证。
# 任何一步不过就退出，不给「顺手提交」留缝。
set -euo pipefail
cd "$(dirname "$0")/.."
echo "── 1/5 类型";     npx tsc --noEmit
echo "── 2/5 数据校验"; node scripts/validate.mjs
echo "── 3/5 规则自测"; node scripts/test-rules.mjs
echo "── 4/5 构建";     npx next build > /tmp/atlas-build.log 2>&1 || { tail -20 /tmp/atlas-build.log; exit 1; }
echo "── 5/5 出站验证"; node scripts/verify.mjs
echo "全部通过，可以提交。"

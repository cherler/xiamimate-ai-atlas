# 该你看了 · 2026-08-11

**78 条待办**，分 3 摞。每摞都指向它原本在的文件 —— **这里只汇总，不下判断**。

## 收件箱里等你定的 22 条（能直接落格 3 条）

红的共同点是**错了会污染整张图且难回滚**：新实体、要推理才得出的结论、摘不出原文的。

→ **开审阅台**：`node scripts/review-ui.mjs` → http://127.0.0.1:8230 ；命令行版 `node scripts/review.mjs`。分级理由看 `node scripts/triage.mjs`

## 谱系候选没收的 17 条（video 14 · image 3）

**先问「它是不是这一代的发布本体」** —— 端口、量化档、配件、以及挂错产品线的，都不算。

→ `node scripts/hf-lineage.mjs --json` 重扫；清单在 data/lineage-candidates.json

## 收录候选 39 行（AA 榜新面孔 + HF 新组织）

两路都只是**发现**，不是收录。收不收按 ontology 规则一与规则四人工定。

→ `node scripts/candidates.mjs` 重算；清单在 data/candidates.md

---

> 超过 20 条时 `triage.mjs` 会自动放宽一类规则（§59.3 的负反馈：**人每周看的必须 ≤20**）。
> 红色永远不放宽 —— 那批错了会污染整张图。

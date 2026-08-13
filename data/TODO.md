# 该你看了 · 2026-08-13

**67 条待办**，分 4 摞。每摞都指向它原本在的文件 —— **这里只汇总，不下判断**。

## 谱系候选没收的 7 条（video 4 · image 2 · text 1）

**先问「它是不是这一代的发布本体」** —— 端口、量化档、配件、以及挂错产品线的，都不算。

→ `node scripts/hf-lineage.mjs --json` 重扫；清单在 data/lineage-candidates.json

## 魔搭独有、我们还没收的 17 条（video 1 · threed 2 · text 13 · sound 1）

**「HF 那边没有」有两种**：真的只发了魔搭，或者两边名字不一样 —— 人工看一眼才算数。

→ `node scripts/modelscope.mjs --json` 重扫；清单在 data/modelscope-candidates.json（🔵 那些）

## 待重核 3 格（hunyuan3d 3）

**厂商的能力页常常落后于它自己的模型清单。** 这些格子的证据是真的，只是核的是上一版 —— 改 verified_for 是编，退回 ⬜ 是把真证据扔了，所以照实标着，但必须一直算作待办。

→ 去厂商能力页看新版是否已列入；列了就把 verified_for 改成新版并去掉 recheck，没列就留着

## 收录候选 40 行（AA 榜新面孔 + HF 新组织）

两路都只是**发现**，不是收录。收不收按 ontology 规则一与规则四人工定。

→ `node scripts/candidates.mjs` 重算；清单在 data/candidates.md

---

> 超过 20 条时 `triage.mjs` 会自动放宽一类规则（§59.3 的负反馈：**人每周看的必须 ≤20**）。
> 红色永远不放宽 —— 那批错了会污染整张图。

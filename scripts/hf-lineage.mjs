/**
 * 从官方 Hugging Face 组织采**开源视频模型的发布谱系**。
 *
 * ## 为什么这是最好的来源
 *
 * 模型名本身就编码了代际和能力：`Wan2.1-FLF2V`＝首尾帧、`Wan2.2-S2V`＝语音驱动、
 * `SkyReels-V2-I2V`＝图生视频。发布时间由 API 给出，**比任何新闻稿都准**。
 * 而且它能一路回溯到 2023 年 —— 那正是演化树需要的纵深。
 *
 * ## 必须用 createdAt，不能用 lastModified
 *
 * 第一版我读的是 `lastModified`，把它当成了发布日期。结果 Wan2.2 记成 2025-08-07
 * （实际 2025-07-18）、Animate 记成 2025-11-05（实际 2025-09-11）——**差了两个月**。
 * 仓库发布之后还会被反复更新，**「最后修改」和「什么时候发布」根本不是一回事**。
 * 这类错最阴：日期看着合理，图也画得出来，但整条时间线是歪的。
 *
 * ## 三件事这支不做
 *
 * 1. **不写 atlas.json** —— 只产候选，人工过一遍再入库
 * 2. **不收 -Diffusers / -diffusers 端口** —— 那是同一个模型的另一种格式，不是新模型
 * 3. **不收 LoRA / upscaler / 工具** —— 除非它本身代表一项新能力
 *
 *   node scripts/hf-lineage.mjs           # 打候选
 *   node scripts/hf-lineage.mjs --json    # 写 data/lineage-candidates.json
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PROXY = process.env.HTTPS_PROXY || process.env.HTTP_PROXY || "";
if (PROXY && !process.env.NODE_USE_ENV_PROXY) {
  const { spawnSync } = await import("node:child_process");
  const r = spawnSync(process.execPath, [process.argv[1], ...process.argv.slice(2)],
    { stdio: "inherit", env: { ...process.env, NODE_USE_ENV_PROXY: "1" } });
  process.exit(r.status ?? 1);
}

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/** 官方组织 → 我们库里的模型 id（没有对应的先留 null，说明是候选新面孔）。 */
const ORGS = [
  { org: "Wan-AI", m: "wan", zh: "阿里 · 万相" },
  { org: "Lightricks", m: "ltx", zh: "Lightricks · LTX" },
  { org: "tencent", m: null, zh: "腾讯 · 混元" },
  { org: "Skywork", m: "skyreels", zh: "昆仑万维 · SkyReels" },
  { org: "genmo", m: null, zh: "Genmo · Mochi" },
  { org: "hpcai-tech", m: null, zh: "Open-Sora" },
  { org: "rhymes-ai", m: null, zh: "Rhymes · Allegro" },
  { org: "THUDM", m: null, zh: "智谱 · CogVideo" },
  { org: "MiniMaxAI", m: "hailuo", zh: "MiniMax · 海螺" },
  { org: "Alibaba-Research-Intelligence-Computing", m: null, zh: "阿里 · ATH" },
];

const VIDEO = /video|t2v|i2v|ti2v|s2v|flf|vace|animate|dance|mochi|cogvideo|allegro|hunyuanvideo|skyreels|ltx|wan\d/i;
/** 端口与配件不是新模型 —— 收进来会把树塞满噪音。 */
const NOISE = /-diffusers$|-Diffusers$|LoRA|lora|upscaler|PromptRewrite|-fp8$|-nvfp4$|-hf$|distilled|Distilled|-dev$|tokenizer|Tokenizer/;

const rows = [];
for (const t of ORGS) {
  try {
    const r = await fetch(
      `https://huggingface.co/api/models?author=${t.org}&sort=createdAt&direction=1&limit=200`,
      { headers: { accept: "application/json", "user-agent": "xiamimate-ai-atlas/0.1 (capability atlas)" } });
    if (!r.ok) { console.log(`${t.zh.padEnd(22)} HTTP ${r.status}`); continue; }
    const j = await r.json();
    const keep = j.filter((x) => VIDEO.test(x.id) && !NOISE.test(x.id));
    console.log(`\n══ ${t.zh}（${t.org}）—— 视频模型 ${keep.length} / 全部 ${j.length}`);
    for (const x of keep) {
      const row = {
        org: t.org, m: t.m, repo: x.id,
        // **createdAt，不是 lastModified** —— 见文件头
        date: (x.createdAt ?? "").slice(0, 10),
        downloads: x.downloads ?? 0, likes: x.likes ?? 0,
      };
      rows.push(row);
      console.log(`  ${row.date}  ${row.repo.padEnd(46)} ↓${row.downloads}`);
    }
  } catch (e) {
    console.log(`${t.zh.padEnd(22)} 抓不到：${String(e.message).slice(0, 60)}`);
  }
}

rows.sort((a, b) => a.date.localeCompare(b.date));
console.log(`\n共 ${rows.length} 条，最早 ${rows[0]?.date}，最新 ${rows[rows.length - 1]?.date}`);

if (process.argv.includes("--json")) {
  writeFileSync(join(ROOT, "data/lineage-candidates.json"),
    JSON.stringify({ note: "HF createdAt 采集的开源视频模型候选，**未经人工核**，不要直接当数据用", rows }, null, 2) + "\n");
  console.log("→ data/lineage-candidates.json（没有写 atlas.json）");
}

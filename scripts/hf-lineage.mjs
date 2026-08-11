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
/**
 * 官方组织 → 我们库里的模型 id（没有对应的先留 null，说明是候选新面孔）。
 *
 * `d` = 这一条扫的是哪个方向。**同一个组织可以出现两次** —— 腾讯的 HF 组织下
 * 既有 HunyuanVideo 又有 HunyuanImage，它们属于两卷，得分别过滤。
 *
 * ⚠️ 加了 AI 图像那一批（2026-08-11）。此前这张表只有 10 家视频公司、
 * 过滤器也只有一个写死的 VIDEO 正则 —— **图像那 53 个谱系节点全是手工补的，
 * 这条自动化线对图像是空的**。负责人问「图像的采集 agent 做好了吗」才发现。
 */
const ORGS = [
  // ── AI 视频
  { org: "Wan-AI", m: "wan", zh: "阿里 · 万相", d: "video" },
  { org: "Lightricks", m: "ltx", zh: "Lightricks · LTX", d: "video" },
  { org: "tencent", m: null, zh: "腾讯 · 混元视频", d: "video" },
  { org: "Skywork", m: "skyreels", zh: "昆仑万维 · SkyReels", d: "video" },
  { org: "genmo", m: null, zh: "Genmo · Mochi", d: "video" },
  { org: "hpcai-tech", m: null, zh: "Open-Sora", d: "video" },
  { org: "rhymes-ai", m: null, zh: "Rhymes · Allegro", d: "video" },
  { org: "THUDM", m: null, zh: "智谱 · CogVideo", d: "video" },
  { org: "MiniMaxAI", m: "hailuo", zh: "MiniMax · 海螺", d: "video" },
  { org: "Alibaba-Research-Intelligence-Computing", m: null, zh: "阿里 · ATH", d: "video" },
  // ── AI 图像
  { org: "black-forest-labs", m: "flux", zh: "BFL · FLUX", d: "image" },
  { org: "stabilityai", m: "sd", zh: "Stability · SD", d: "image" },
  { org: "Qwen", m: "qwen-image", zh: "阿里 · 通义千问图像", d: "image" },
  { org: "Tongyi-MAI", m: "z-image", zh: "阿里 · Z-Image", d: "image" },
  { org: "tencent", m: "hunyuan-image", zh: "腾讯 · 混元图像", d: "image" },
  { org: "Kwai-Kolors", m: "kolors", zh: "快手 · 可图", d: "image" },
  { org: "HiDream-ai", m: "hidream", zh: "智象未来 · HiDream", d: "image" },
  { org: "baidu", m: "ernie-image", zh: "百度 · 文心图像", d: "image" },
  { org: "ATH-MaaS", m: "ovis-image", zh: "阿里 · Ovis（原 AIDC-AI，组织已搬家）", d: "image" },
  { org: "nvidia", m: "pixeldit", zh: "NVIDIA · PixelDiT", d: "image" },
  { org: "ideogram-ai", m: "ideogram", zh: "Ideogram", d: "image" },
  { org: "Boogu", m: "boogu-image", zh: "Boogu", d: "image" },
  { org: "NewBie-AI", m: "newbie-image", zh: "NewBie AI", d: "image" },
  { org: "circlestone-labs", m: "anima", zh: "Circlestone · Anima", d: "image" },
  { org: "microsoft", m: "lens", zh: "微软 · Lens / Mage-Flow", d: "image" },
];

const VIDEO = /video|t2v|i2v|ti2v|s2v|flf|vace|animate|dance|mochi|cogvideo|allegro|hunyuanvideo|skyreels|ltx|wan\d/i;
/**
 * 出图那一卷的匹配。**不能只写 `image`** —— 那会把 HunyuanVideo 的
 * image-to-video 也捞进来；也不能只列型号名，新面孔就是要靠它发现的。
 * 做法：先要求像出图模型（型号名或 image/t2i 之类），再用下面的 NOT_IMAGE 把
 * 明显是视频/3D/理解类的剔掉 —— **宁可多捞一点让人去看，也别静默漏掉一代**。
 */
const IMAGE = /image|t2i|text-to-image|flux|stable-diffusion|sd3|sdxl|kolors|ideogram|hidream|ernie-image|ovis-image|pixeldit|anima|boogu|newbie|lens|mage-flow|krea/i;
/**
 * 剔掉的：视频、**图生 3D**（TRELLIS 那一支产出的是网格不是图，已记在
 * `excluded` 里当作另一个方向）、以及理解类模型。
 * TRELLIS 名字里带 image 却是 3D —— **按名字收必然要有一张这样的例外表**。
 */
const NOT_IMAGE = /video|t2v|i2v|animate|3d|mesh|splat|audio|speech|vl-|-vl|reranker|embedding|trellis|triposr|dreamfusion|hunyuan3d/i;
/**
 * 噪音过滤：端口与配件不是新模型。
 *
 * ⚠️ **不能按 `-dev` / `distilled` 过滤。** LTX 的 0.9.7 和 0.9.8 只发过
 * `-dev` 和 `-distilled` 版本 —— 那就是那一代的发布本体，滤掉就等于说这两代不存在。
 * 真正该滤的只有：格式端口（-diffusers）、量化（-fp8/-nvfp4）、外挂（LoRA/upscaler）。
 * 代际去重交给下游按**版本号**归组，不靠名字后缀猜。
 */
const NOISE = new RegExp([
  "-diffusers$", "-Diffusers$", "LoRA", "lora", "upscaler", "PromptRewrite",
  "-fp8$", "-nvfp4$", "-hf$", "tokenizer", "Tokenizer",
  // ── 出图那一卷的端口与配件（2026-08-11 补）。**判据和上面一样：
  //    它是不是「这一代的发布本体」**。下面这些都不是 ——
  //    换推理后端（onnx / tensorrt / amdgpu / ryzen-ai / -kv）、
  //    拆出来的部件（vae / refiner / controlnet / decoder）。
  //    ⚠️ `-turbo`、`-distilled`、`-dev`、`-klein-4B` 一律**不滤** ——
  //    sdxl-turbo、FLUX.2-klein-4B 就是那一代的发布本体。
  "-onnx$", "tensorrt", "_amdgpu$", "ryzen-ai", "-kv$",
  "vae$", "-refiner", "controlnet", "decoder$",
].join("|"));

const rows = [];
for (const t of ORGS) {
  try {
    const r = await fetch(
      /**
       * **降序 + 拉满。** 原来是 `direction=1&limit=200`（最老的 200 条）——
       * 对小组织没差别，对 Qwen / NVIDIA / 微软这种上千个仓库的，
       * 拿到的全是几年前的 LLM，出图模型一个都看不见，
       * 而日志上打的是「出图模型 0 / 全部 200」—— **看起来是结论，其实是截断**。
       * 实测 HF 对 limit 有上限（给 1000 也只回 458），所以顺带记下真实回了多少条。
       */
      `https://huggingface.co/api/models?author=${t.org}&sort=createdAt&direction=-1&limit=1000`,
      { headers: { accept: "application/json", "user-agent": "xiamimate-ai-atlas/0.1 (capability atlas)" } });
    if (!r.ok) { console.log(`${t.zh.padEnd(22)} HTTP ${r.status}`); continue; }
    const j = await r.json();
    const hit = t.d === "image"
      ? (id) => IMAGE.test(id) && !NOT_IMAGE.test(id)
      : (id) => VIDEO.test(id);
    const keep = j.filter((x) => hit(x.id) && !NOISE.test(x.id));
    // 回的条数逼近上限时**明说一句**：这时候「全部 N」不是这家的总数，是我们只看到了 N 个
    const capped = j.length >= 450 ? "（**已到 API 上限，可能还有没看到的**）" : "";
    console.log(`\n══ ${t.zh}（${t.org}）—— ${t.d === "image" ? "出图" : "视频"}模型 ${keep.length} / 看到 ${j.length}${capped}`);
    for (const x of keep) {
      const row = {
        org: t.org, m: t.m, repo: x.id,
        // **方向要跟着行走。** 下游要按方向分开看候选；不带的话
        // 图像新面孔会混进视频那一摞，人审时第一眼就分不清。
        domain: t.d,
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
    JSON.stringify({ note: "HF createdAt 采集的开源模型候选（每行带 domain：video / image），**未经人工核**，不要直接当数据用", rows }, null, 2) + "\n");
  console.log("→ data/lineage-candidates.json（没有写 atlas.json）");
}

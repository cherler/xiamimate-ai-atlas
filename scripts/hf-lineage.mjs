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
  // ── AI 文本（2026-08-11 开）。闭源那几家（Claude / GPT / Gemini / 豆包 / Grok）
  //    HF 上没有权重，谱系走各家官方文档，不在这张表里。
  { org: "Qwen", m: "qwen-text", zh: "阿里 · 通义千问", d: "text" },
  { org: "deepseek-ai", m: "deepseek", zh: "深度求索 · DeepSeek", d: "text" },
  { org: "moonshotai", m: "kimi", zh: "月之暗面 · Kimi", d: "text" },
  { org: "zai-org", m: "glm", zh: "智谱 · GLM", d: "text" },
  { org: "MiniMaxAI", m: "minimax-text", zh: "MiniMax · 文本", d: "text" },
  { org: "meta-llama", m: "llama", zh: "Meta · Llama", d: "text" },
  { org: "mistralai", m: "mistral-text", zh: "Mistral", d: "text" },
];

const VIDEO = /video|t2v|i2v|ti2v|s2v|flf|vace|animate|dance|mochi|cogvideo|allegro|hunyuanvideo|skyreels|ltx|wan\d/i;
/**
 * 出图那一卷的匹配。**不能只写 `image`** —— 那会把 HunyuanVideo 的
 * image-to-video 也捞进来；也不能只列型号名，新面孔就是要靠它发现的。
 * 做法：先要求像出图模型（型号名或 image/t2i 之类），再用下面的 NOT_IMAGE 把
 * 明显是视频/3D/理解类的剔掉 —— **宁可多捞一点让人去看，也别静默漏掉一代**。
 */
/**
 * 文本那一卷。**主要靠排除**：这些组织下绝大多数就是语言模型，
 * 真正要滤掉的是出图/视频/语音/嵌入这些**产出物不是文本**的旁支，
 * 以及 base/instruct 之外的量化与端口档（交给 NOISE）。
 */
const TEXT = /.*/;
const NOT_TEXT = new RegExp([
  "image", "video", "audio", "speech", "tts", "asr", "voice", "vl$", "-vl-", "vision",
  "embedding", "rerank", "guard", "omni", "diffusion", "t2i", "t2v",
  /**
   * ⚠️ 2026-08-11 收口。开文本方向那天 `NOT_TEXT` 只有上面一行，
   * 结果候选一次涌出 696 条 —— **一个人审不完的清单等于没有清单**（§59.3）。
   * 逐条看过之后，混进来的是这几类，它们的共同点是**产出物不是文本**或**根本不是模型**：
   */
  "cogview", "kaleido", "-s2v", "cogagent",   // 出图 / 视频 / GUI 智能体，挂在同一个组织下
  "ocr", "-math$", "-math-",                  // 单任务衍生，不是这一代的发布本体
  "^esft-", "sae-", "-sae", "probe", "reward", // 研究产物：专家微调、稀疏自编码器、探针、奖励模型
  /**
   * ⚠️ 2026-08-12 第二次收口。上面那批只挡住了名字里明写 image/video/vision 的，
   * 可各家给跨模态支线起的**是产品名，不是功能名** —— 光看名字看不出它产出什么：
   */
  "janus",                                    // DeepSeek 的图像生成线（Janus / JanusFlow / Janus-Pro）
  "pixtral", "voxtral",                        // Mistral 的视觉线与音频线
  "visualglm", "cogvlm", "vlm", "vl\\d",        // 智谱的视觉线；vl\d 收的是 deepseek-vl2 那种「vl+代号」
  "\\d+\\.?\\d*v(-|$)", "-v-flash",            // glm-4v / GLM-4.5V / GLM-4.6V-Flash：**版本号后面那个 v 就是 vision**
  "qvq",                                       // 通义的视觉推理线
  "autoglm", "scail",                          // GUI 智能体 / 未公开说明的研究预览
  "forcedaligner",                             // 音频对齐
  "minimax-h3",                                // **它是视频模型**，只是挂在 MiniMax 同一个组织下
].join("|"), "i");

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
  // ── 文本那一卷的量化与格式档（2026-08-11 补）。同一个判据：**换个精度不是新模型**。
  //    文本模型的量化衍生比视频多一个数量级 —— 光这一类就占了 704 条里的 242 条。
  "gguf", "gptq", "awq", "-mlx", "mlx-", "bnb-", "-4bit", "-8bit", "nf4",
  "int4", "int8", "fp4", "mxfp", "-w4a", "-w8a", "-quant", "-bf16", "-tgi",
  //    推测解码的草稿模型（eagle / dspark / dflash）**是给某一代提速的配件**，
  //    和 vae、controlnet 同一类：它不是新的一代，没有它那一代照样存在。
  "eagle", "dspark", "dflash",
].join("|"), "i");

/**
 * **冷门产物地板。** 收口到这一步还剩一堆研究产物：ESFT、SAE、LongWriter、webrl、
 * MathGLM、SCAIL、MSAGPT…… 一条条列黑名单是没有尽头的活，下次换个名字又漏。
 * 换成看热度指标 —— 一代正经发布不可能没人关注。
 *
 * ⚠️ **只看下载量会系统性杀掉旗舰。** 第一版设了 ↓5000 的地板，
 * 结果把 `Mistral-Large-3-675B`（↓1177）滤掉了 —— 它是 Mistral 当时的旗舰。
 * 原因不是它不重要，是**没人在自己机器上跑 675B**：
 * **下载量量的是「跑不跑得动」，不是「重不重要」。** 这个假设正好反了。
 *
 * likes 量的才是关注度，实测分得干净：
 *   该留 —— Mistral-Large-3 ♥242、Shieldstral ♥227、DeepSeek-V4-Pro ♥326、GLM-5.2 ♥4926
 *   该滤 —— MathGLM ♥8、MSAGPT ♥2、webrl ♥8、ESFT ♥20、UI2Code ♥24
 * 所以两条地板**过一条就留**，再加一条豁免：
 * `NEW_DAYS` 天内新建的一律留下 —— **刚发布的那一代还没来得及攒任何指标，
 * 而它恰恰是这张表最该抓住的东西**。
 */
const FLOOR_DL = 5000;
const FLOOR_LIKE = 150;
const NEW_DAYS = 120;
const FRESH = Date.now() - NEW_DAYS * 86400000;

/**
 * **代际键：把同一代的一堆 SKU 折成一个。**
 *
 * 这是这支脚本真正缺的那一步 —— 文件头写着「代际去重交给下游按版本号归组」，
 * 可下游根本没有这一步，于是 Qwen3 的 8 个尺寸 × 4 种量化 = 32 行全躺在候选里。
 * **谱系树的一个节点是「一个产品线的一代」，不是一个 SKU。**
 *
 * 只剥三类**不改变身份**的后缀：参数量、精度/格式、base/instruct/chat。
 * **能力后缀一个都不能剥** —— Wan2.1-FLF2V（首尾帧）和 Wan2.1-I2V（图生视频）
 * 是两项不同能力，折在一起就把演化树最有信息量的那部分抹掉了。
 */
const genKey = (repo) =>
  repo
    .replace(/^[^/]+\//, "")
    .replace(/[-_]?\d+(\.\d+)?[BbMm](?![a-z])/g, "")   // 7B / 1.5B / 235B / 80m
    .replace(/[-_]?A\d+(\.\d+)?B/gi, "")               // MoE 激活量 A22B / A3B
    .replace(/[-_](base|instruct|chat|it|hf)$/i, "")
    .replace(/[-_]\d{4}(-\d{2})?$/, "")                // 尾部日期戳 2507 / 2026-03
    .replace(/[-_]{2,}/g, "-").replace(/[-_]+$/, "")
    .toLowerCase();

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
      : t.d === "text"
        ? (id) => TEXT.test(id) && !NOT_TEXT.test(id)
        : (id) => VIDEO.test(id);
    const raw = j.filter((x) => hit(x.id) && !NOISE.test(x.id));
    /**
     * **折代际。** 每个代际键只留一条，代表选**最早的那个仓库** ——
     * 那是这一代的首发；后来补的尺寸档和 -Instruct 都晚于它。
     * 折掉多少条要**报出来**：静默的合并和静默的截断一样危险，
     * 人看到「1 条」时得知道背后是 1 个还是 32 个。
     */
    const groups = new Map();
    for (const x of raw) {
      const k = genKey(x.id);
      const g = groups.get(k);
      if (!g || (x.createdAt ?? "") < (g.createdAt ?? "")) groups.set(k, { ...x, _n: (g?._n ?? 0) + 1 });
      else g._n += 1;
    }
    const folded0 = [...groups.values()].sort((a, b) => (a.createdAt ?? "").localeCompare(b.createdAt ?? ""));
    const keep = folded0.filter((x) =>
      (x.downloads ?? 0) >= FLOOR_DL || (x.likes ?? 0) >= FLOOR_LIKE || Date.parse(x.createdAt ?? 0) >= FRESH);
    const folded = raw.length - folded0.length;
    const thin = folded0.length - keep.length;
    // 回的条数逼近上限时**明说一句**：这时候「全部 N」不是这家的总数，是我们只看到了 N 个
    const capped = j.length >= 450 ? "（**已到 API 上限，可能还有没看到的**）" : "";
    console.log(`\n══ ${t.zh}（${t.org}）—— ${{ image: "出图", text: "文本", video: "视频" }[t.d]}模型 ${keep.length} 代`
      + `（由 ${raw.length} 个仓库折成：省掉 ${folded} 个尺寸/精度档、`
      + `${thin} 个没人关注的冷门产物）/ 看到 ${j.length}${capped}`);
    for (const x of keep) {
      const row = {
        org: t.org, m: t.m, repo: x.id,
        // **方向要跟着行走。** 下游要按方向分开看候选；不带的话
        // 图像新面孔会混进视频那一摞，人审时第一眼就分不清。
        domain: t.d,
        // **createdAt，不是 lastModified** —— 见文件头
        date: (x.createdAt ?? "").slice(0, 10),
        downloads: x.downloads ?? 0, likes: x.likes ?? 0,
        // 这一代折进来多少个仓库。**1 和 32 对人审的意义完全不同** ——
        // 只发过一个仓库的多半是实验品，几十个 SKU 的才是正经一代
        skus: x._n ?? 1,
      };
      rows.push(row);
      console.log(`  ${row.date}  ${row.repo.padEnd(46)} ↓${row.downloads}${row.skus > 1 ? `  ×${row.skus} 档` : ""}`);
    }
  } catch (e) {
    console.log(`${t.zh.padEnd(22)} 抓不到：${String(e.message).slice(0, 60)}`);
  }
}

rows.sort((a, b) => a.date.localeCompare(b.date));
console.log(`\n共 ${rows.length} 条，最早 ${rows[0]?.date}，最新 ${rows[rows.length - 1]?.date}`);

if (process.argv.includes("--json")) {
  writeFileSync(join(ROOT, "data/lineage-candidates.json"),
    JSON.stringify({ note: "HF createdAt 采集的开源模型候选（每行带 domain 与 skus=这一代折进来几个仓库），**未经人工核**，不要直接当数据用", rows }, null, 2) + "\n");
  console.log("→ data/lineage-candidates.json（没有写 atlas.json）");
}

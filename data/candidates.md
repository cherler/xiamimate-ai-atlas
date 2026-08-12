# 收录候选 · 2026-08-13



> **这份名单是筛出来的，不是抄来的。**

> 两路都只是**发现**。收不收按 ontology 规则一（是不是模型）

> 与规则四（Core 每轨 ≤10，**加第 11 个之前先踢掉一个**）人工定。

>

> **按方向分开列** —— 混在一起时，图像那一半永远是空的，

> 而空看起来像「没有新面孔」，其实是「没看」。



## 【AI 视频】

### 一、Artificial Analysis 榜上、我们没收的（闭源侧的「有人真在用」）

| 厂商 | 模型 | Elo |
|---|---|---:|
| Open | Weights | 1237 |
| PixVerse | PixVerse V6 | 1078 |

### 二、Hugging Face 下载量前列、我们没收的组织（开源侧的实际采用度）

| 组织 | 仓库数 | 示例 |
|---|---:|---|
| Lightricks | 18 | `Lightricks/LTX-2` |
| QuantStack | 8 | `QuantStack/LTX-2.3-GGUF` |
| Abiray | 7 | `Abiray/LTX-2.3-22B-DISTILLED-1.1-GGUF` |
| vantagewithai | 7 | `vantagewithai/LTX-2.3-GGUF` |
| rzgar | 4 | `rzgar/Bernini-R-LightX2V-4step-loras` |
| calcuis | 3 | `calcuis/wan-gguf` |
| joeygambino | 3 | `joeygambino/MiniMax-H3-GGUF` |
| zai-org | 3 | `zai-org/CogVideoX-2b` |
| nvidia | 3 | `nvidia/Cosmos-Predict2-2B-Video2World` |
| ByteDance-Seed | 3 | `ByteDance-Seed/SeedVR-3B` |
| aidealab | 2 | `aidealab/AnimeGen-I2V` |
| ali-vilab | 2 | `ali-vilab/i2vgen-xl` |
| bullerwins | 2 | `bullerwins/Wan2.2-T2V-A14B-GGUF` |
| city96 | 2 | `city96/Wan2.1-T2V-14B-gguf` |
| ibyteohdear | 2 | `ibyteohdear/Lightricks-LTX-2-DISTILLED-10-Eros` |
| unsloth | 2 | `unsloth/LTX-2.3-GGUF` |
| CornLogic | 2 | `CornLogic/10EROS-INT8` |
| joyfox | 2 | `joyfox/LTX-2.3-Transition-LORA` |
| robbyant | 2 | `robbyant/lingbot-world-fast` |
| stabilityai | 2 | `stabilityai/stable-video-diffusion-img2vid` |

> ⚠️ HF 这一路混着个人搬运号与量化号（QuantStack、city96、calcuis 之类）。
> **脚本分不出「自己训模型」和「搬别人的」** —— 那要人看一眼组织主页。
> 不要照单全收，也不要因为混了噪音就整路丢掉：Lightricks、nvidia、zai-org
> 都是这一路捞出来的，而它们在闭源榜上完全隐形。

### 当前 Core（clip 轨 16/10，realtime 轨 2/10）

- `clip` Seedance 2.5（2026-07-31）
- `clip` MiniMax Hailuo H3（2026-07-31）
- `clip` Gemini Omni Flash（2026-05-19）
- `clip` Wan 3.0（2026-08-07）
- `clip` Runway Gen Gen-4.5（2025-12-11）
- `clip` Kling 3.0（2026-02-04）
- `clip` Vidu Q Q3（2026-04-13）
- `clip` Veo 3.1（2025-10） — **superseded**
- `clip` Sora 2（2025-09） — **discontinued**
- `realtime` Vidu S S1（2026-07-03）
- `realtime` Decart Lucy Lucy 2.5（2026-08-07）
- `clip` LTX 2.3（2026-08-08）
- `clip` HappyHorse 1.1（2026-06）
- `clip` SkyReels V3（2026-03）
- `clip` HunyuanVideo 1.5（2025-11-18）
- `clip` Mochi 1（2024-10-22）
- `clip` Allegro T2V（2024-12-17）
- `clip` Open-Sora v2（2025-03-10）
- `still` FLUX 2-dev（2025-11-22）
- `still` Qwen-Image 3.0-pro（2026-08-12）
- `still` Z-Image Turbo（2025-11-25）
- `still` HunyuanImage 3.0（2025-09-25）
- `still` Stable Diffusion XL 1.0（2023-07-25）
- `still` Krea 2-Raw（2026-06-18）
- `still` Seedream 5.0 Pro（2026-08-11）
- `still` Nano Banana 2（gemini-3.1-flash-image）（2026-08-11）
- `still` GPT Image 2（gpt-image-2）（2026-08-11）
- `still` Kolors 待核（2026-08-11）
- `still` Midjourney 待核（2026-08-11）
- `still` Ideogram 4.0（2026-08-12）
- `still` Recraft V4.1（2026-08-11）
- `still` HiDream-I1 O1-Image（2026-05-08）
- `still` ERNIE-Image Aes（2026-05-18）
- `still` Ovis-Image 7B（2025-11-28）
- `still` Lens Lens（2026-05-23）
- `still` Mage-Flow Mage-Flow（2026-07-24）
- `still` PixelDiT 1300M-1024px（2026-03-30）
- `still` Anima Anima（2026-01-29）
- `still` Boogu-Image 0.1-Turbo（2026-06-16）
- `still` NewBie-image Exp0.1（2025-11-30）
- `chat` Claude Fable 5（2026-06-09）
- `chat` GPT GPT-5.6（2026-08-11）
- `chat` Gemini Gemini 3.6 Flash（2026-08-11）
- `chat` Qwen 3.8-max（2026-08-11）
- `chat` DeepSeek V4（2026-07-31）
- `chat` Kimi K3（2026-06-13）
- `chat` GLM GLM-5.2（2026-06-16）
- `chat` MiniMax M3（2026-06-02）
- `chat` Doubao Seed-2.1 Pro（2026-06-23）
- `chat` Llama 4（2025-04-05）
- `chat` Grok 4.5（2026-08-11）
- `chat` Mistral Medium 3.5（2026-03-31）
- `tts` MiniMax Speech speech-2.8-hd（2026-08-12）
- `tts` ElevenLabs Eleven v3（2026-08-12）
- `tts` Gemini TTS 3.1 Flash TTS Preview（2026-08-12）
- `tts` GPT TTS GPT-4o mini TTS（2026-08-12）
- `voice-rt` GLM Voice glm-4-voice（2026-08-12）
- `tts` Qwen Omni 3.5-omni-plus（2026-08-12）
- `music` MiniMax Music music-3.0（2026-08-12）
- `music` Eleven Music v2（2026-08-12）
- `music` Lyria 3 Pro Preview（2026-08-12）
- `voice-rt` GPT Realtime 2.1（2026-08-12）
- `voice-rt` Grok Voice think-fast-2.0（2026-08-12）
- `tts` GLM-TTS GLM-TTS（2026-08-12）
- `tts` CosyVoice Fun-CosyVoice3-0.5B-2512（2025-12-11）
- `tts` Fish Speech s2-pro（2026-03-09）
- `tts` Kokoro 82M v1.1-zh（2025-02-27）

> clip 轨只剩 1 个空位。按规则四，再进新的就必须先踢一个 ——
> 最该出去的是 **Sora 2**（已公告停服）。但**停服的模型不该从库里删**：
> 「它没了」本身是有用的信息，应降到 Extended 层，而不是消失。

## 【AI 图像】

### 一、Artificial Analysis 榜上、我们没收的（闭源侧的「有人真在用」）

（无）

### 二、Hugging Face 下载量前列、我们没收的组织（开源侧的实际采用度）

| 组织 | 仓库数 | 示例 |
|---|---:|---|
| black-forest-labs | 14 | `black-forest-labs/FLUX.1-dev` |
| John6666 | 7 | `John6666/amanatsu-illustrious-v11-sdxl` |
| stabilityai | 6 | `stabilityai/sd-turbo` |
| unsloth | 5 | `unsloth/FLUX.2-klein-4B-GGUF` |
| Lykon | 4 | `Lykon/DreamShaper` |
| lllyasviel | 4 | `lllyasviel/control_v11p_sd15_inpaint` |
| city96 | 3 | `city96/FLUX.1-dev-gguf` |
| QuantStack | 3 | `QuantStack/FLUX.1-Kontext-dev-GGUF` |
| prithivMLmods | 3 | `prithivMLmods/Qwen-Image-Edit-2511-Hyper-Realistic-Portrait` |
| cagliostrolab | 2 | `cagliostrolab/animagine-xl-3.1` |
| diffusers | 2 | `diffusers/stable-diffusion-xl-1.0-inpainting-0.1` |
| xinsir | 2 | `xinsir/controlnet-openpose-sdxl-1.0` |
| caidas | 2 | `caidas/swin2SR-classical-sr-x2-64` |
| lilylilith | 2 | `lilylilith/AnyPose` |
| meituan-longcat | 2 | `meituan-longcat/LongCat-Image-Edit` |

> ⚠️ HF 这一路混着个人搬运号与量化号（QuantStack、city96、calcuis 之类）。
> **脚本分不出「自己训模型」和「搬别人的」** —— 那要人看一眼组织主页。
> 不要照单全收，也不要因为混了噪音就整路丢掉：Lightricks、nvidia、zai-org
> 都是这一路捞出来的，而它们在闭源榜上完全隐形。

### 当前 Core（clip 轨 16/10，realtime 轨 2/10）

- `clip` Seedance 2.5（2026-07-31）
- `clip` MiniMax Hailuo H3（2026-07-31）
- `clip` Gemini Omni Flash（2026-05-19）
- `clip` Wan 3.0（2026-08-07）
- `clip` Runway Gen Gen-4.5（2025-12-11）
- `clip` Kling 3.0（2026-02-04）
- `clip` Vidu Q Q3（2026-04-13）
- `clip` Veo 3.1（2025-10） — **superseded**
- `clip` Sora 2（2025-09） — **discontinued**
- `realtime` Vidu S S1（2026-07-03）
- `realtime` Decart Lucy Lucy 2.5（2026-08-07）
- `clip` LTX 2.3（2026-08-08）
- `clip` HappyHorse 1.1（2026-06）
- `clip` SkyReels V3（2026-03）
- `clip` HunyuanVideo 1.5（2025-11-18）
- `clip` Mochi 1（2024-10-22）
- `clip` Allegro T2V（2024-12-17）
- `clip` Open-Sora v2（2025-03-10）
- `still` FLUX 2-dev（2025-11-22）
- `still` Qwen-Image 3.0-pro（2026-08-12）
- `still` Z-Image Turbo（2025-11-25）
- `still` HunyuanImage 3.0（2025-09-25）
- `still` Stable Diffusion XL 1.0（2023-07-25）
- `still` Krea 2-Raw（2026-06-18）
- `still` Seedream 5.0 Pro（2026-08-11）
- `still` Nano Banana 2（gemini-3.1-flash-image）（2026-08-11）
- `still` GPT Image 2（gpt-image-2）（2026-08-11）
- `still` Kolors 待核（2026-08-11）
- `still` Midjourney 待核（2026-08-11）
- `still` Ideogram 4.0（2026-08-12）
- `still` Recraft V4.1（2026-08-11）
- `still` HiDream-I1 O1-Image（2026-05-08）
- `still` ERNIE-Image Aes（2026-05-18）
- `still` Ovis-Image 7B（2025-11-28）
- `still` Lens Lens（2026-05-23）
- `still` Mage-Flow Mage-Flow（2026-07-24）
- `still` PixelDiT 1300M-1024px（2026-03-30）
- `still` Anima Anima（2026-01-29）
- `still` Boogu-Image 0.1-Turbo（2026-06-16）
- `still` NewBie-image Exp0.1（2025-11-30）
- `chat` Claude Fable 5（2026-06-09）
- `chat` GPT GPT-5.6（2026-08-11）
- `chat` Gemini Gemini 3.6 Flash（2026-08-11）
- `chat` Qwen 3.8-max（2026-08-11）
- `chat` DeepSeek V4（2026-07-31）
- `chat` Kimi K3（2026-06-13）
- `chat` GLM GLM-5.2（2026-06-16）
- `chat` MiniMax M3（2026-06-02）
- `chat` Doubao Seed-2.1 Pro（2026-06-23）
- `chat` Llama 4（2025-04-05）
- `chat` Grok 4.5（2026-08-11）
- `chat` Mistral Medium 3.5（2026-03-31）
- `tts` MiniMax Speech speech-2.8-hd（2026-08-12）
- `tts` ElevenLabs Eleven v3（2026-08-12）
- `tts` Gemini TTS 3.1 Flash TTS Preview（2026-08-12）
- `tts` GPT TTS GPT-4o mini TTS（2026-08-12）
- `voice-rt` GLM Voice glm-4-voice（2026-08-12）
- `tts` Qwen Omni 3.5-omni-plus（2026-08-12）
- `music` MiniMax Music music-3.0（2026-08-12）
- `music` Eleven Music v2（2026-08-12）
- `music` Lyria 3 Pro Preview（2026-08-12）
- `voice-rt` GPT Realtime 2.1（2026-08-12）
- `voice-rt` Grok Voice think-fast-2.0（2026-08-12）
- `tts` GLM-TTS GLM-TTS（2026-08-12）
- `tts` CosyVoice Fun-CosyVoice3-0.5B-2512（2025-12-11）
- `tts` Fish Speech s2-pro（2026-03-09）
- `tts` Kokoro 82M v1.1-zh（2025-02-27）

> clip 轨只剩 1 个空位。按规则四，再进新的就必须先踢一个 ——
> 最该出去的是 **Sora 2**（已公告停服）。但**停服的模型不该从库里删**：
> 「它没了」本身是有用的信息，应降到 Extended 层，而不是消失。

## 人工发现的（自动那两路看不见的）

> 两条自动路各有盲区：AA 榜只收上了竞技场的闭源模型，HF 那一路只看开源权重。
> **落在两边之外的，只能人看见** —— 写在 `data/candidates-manual.json` 里，不会被重跑冲掉。

### `video` Black Forest Labs · FLUX 3（2026-08-13 发现）

**为什么两路都捞不到**：**BFL 从图像跨进了视频**，而两条自动路都看不见这件事：AA 的文生图榜不收视频模型，HF 那一路只看开源权重而 FLUX 3 是闭源 API。

**怎么撞见的**：给图像卷的 FLUX 补 ⬜ 时，从官方文档索引 docs.bfl.ai/llms.txt 里看到有一整组 flux_3 文档

- 「FLUX 3 is one multimodal model. Video with synchronized audio, one request shape keyed by mode.」
- 「One model trained across image, video, and audio.」
- 三种模式：`t2v`（纯提示词）、`i2v`（1–10 张图，可用 `[seconds, image]` 把关键帧钉到时间轴上）、Video Continuation（给一段 clip 接着往下生成）
- 「More images, more control: two pin the start and end frames, up to ten storyboard the clip」—— **首尾帧与多关键帧**
- 「Audio is on by default: multilingual speech with lipsync, effects, and ambience rendered scene-aware alongside the frames. No second model, no second pass.」—— **原生音频 + 对口型**
- 规格：5–20 秒、24fps、`hd` 或 `fhd`；宽高比 21:9 / 2:1 / 16:9 等
- 价格表（官方）：t2v / i2v $0.17/s hd、$0.29/s fhd；Video Continuation $0.43/s hd、$0.54/s fhd；draft 档 $0.06/s
- ⚠️ 官方自述「FLUX 3 is a **preview** model. **Video editing** and **Omni Reference with images and videos** will be available soon.」—— 视频编辑还没有

来源：https://docs.bfl.ml/flux_3/flux3_overview.md

****待人工定。** 按规则四，clip 轨已经 9/10（见 candidates.md 末尾那句「只剩 1 个空位」），进它就要先安排一个出去。证据够厚（t2v/i2v/首尾帧/原生音频/对口型/视频续写全有官方原文），但**收不收是范围决定，不是采集决定**。**

> ⚠️ 我在 2026-08-12 的提交里把这条写成了「BFL 已经出到 FLUX 3，我们库里最新还是 FLUX 2-dev」，**那句话是错的**：FLUX 3 不是 FLUX 2 的新版本，它是另一个模态。图像卷的 flux 停在 FLUX 2-dev 是对的，不该跟着改版本号。

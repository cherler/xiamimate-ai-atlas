# 收录候选 · 2026-08-07



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
| PixVerse | PixVerse V6 | 1078 |

### 二、Hugging Face 下载量前列、我们没收的组织（开源侧的实际采用度）

| 组织 | 仓库数 | 示例 |
|---|---:|---|
| Lightricks | 19 | `Lightricks/LTX-2` |
| QuantStack | 10 | `QuantStack/LTX-2.3-GGUF` |
| vantagewithai | 7 | `vantagewithai/LTX-2.3-GGUF` |
| Abiray | 5 | `Abiray/LTX-2.3-22B-DISTILLED-1.1-GGUF` |
| calcuis | 4 | `calcuis/wan-1.3b-gguf` |
| rzgar | 4 | `rzgar/Bernini-R-LightX2V-4step-loras` |
| nvidia | 4 | `nvidia/Cosmos-H-Surgical` |
| city96 | 3 | `city96/Wan2.1-T2V-14B-gguf` |
| zai-org | 3 | `zai-org/CogVideoX-2b` |
| ByteDance-Seed | 3 | `ByteDance-Seed/SeedVR-3B` |
| aidealab | 2 | `aidealab/AnimeGen-I2V` |
| ali-vilab | 2 | `ali-vilab/i2vgen-xl` |
| bullerwins | 2 | `bullerwins/Wan2.2-T2V-A14B-GGUF` |
| ibyteohdear | 2 | `ibyteohdear/Lightricks-LTX-2.3` |
| unsloth | 2 | `unsloth/LTX-2.3-GGUF` |
| CornLogic | 2 | `CornLogic/10EROS-INT8` |
| joyfox | 2 | `joyfox/LTX-2.3-Transition-LORA` |
| robbyant | 2 | `robbyant/lingbot-world-fast` |
| stabilityai | 2 | `stabilityai/stable-video-diffusion-img2vid` |
| JunhaoZhuang | 2 | `JunhaoZhuang/FlashVSR` |

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
- `clip` SkyReels V4（2026-03）
- `clip` HunyuanVideo 1.5（2025-11-18）
- `clip` Mochi 1（2024-10-22）
- `clip` Allegro T2V（2024-12-17）
- `clip` Open-Sora v2（2025-03-10）
- `still` FLUX 2-dev（2025-11-22）
- `still` Qwen-Image Edit-2511（2025-12-17）
- `still` Z-Image Turbo（2025-11-25）
- `still` HunyuanImage 3.0（2025-09-25）
- `still` Stable Diffusion XL 1.0（2023-07-25）
- `still` Krea 2-Raw（2026-06-18）
- `still` Seedream 5.0 Pro（2026-08-11）
- `still` Nano Banana 2（gemini-3.1-flash-image）（2026-08-11）
- `still` GPT Image 2（gpt-image-2）（2026-08-11）
- `still` Kolors 待核（2026-08-11）
- `still` Midjourney 待核（2026-08-11）
- `still` Ideogram 3.0（2025-03-26）
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
- `clip` SkyReels V4（2026-03）
- `clip` HunyuanVideo 1.5（2025-11-18）
- `clip` Mochi 1（2024-10-22）
- `clip` Allegro T2V（2024-12-17）
- `clip` Open-Sora v2（2025-03-10）
- `still` FLUX 2-dev（2025-11-22）
- `still` Qwen-Image Edit-2511（2025-12-17）
- `still` Z-Image Turbo（2025-11-25）
- `still` HunyuanImage 3.0（2025-09-25）
- `still` Stable Diffusion XL 1.0（2023-07-25）
- `still` Krea 2-Raw（2026-06-18）
- `still` Seedream 5.0 Pro（2026-08-11）
- `still` Nano Banana 2（gemini-3.1-flash-image）（2026-08-11）
- `still` GPT Image 2（gpt-image-2）（2026-08-11）
- `still` Kolors 待核（2026-08-11）
- `still` Midjourney 待核（2026-08-11）
- `still` Ideogram 3.0（2025-03-26）
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

> clip 轨只剩 1 个空位。按规则四，再进新的就必须先踢一个 ——
> 最该出去的是 **Sora 2**（已公告停服）。但**停服的模型不该从库里删**：
> 「它没了」本身是有用的信息，应降到 Extended 层，而不是消失。
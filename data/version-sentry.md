# 版本哨兵 · 2026-10-04

扫 136 个模型：**有更新的一代 5** · 口径存疑 0 · 牌子摘了 32 · 比不了 56

> 这份只回答一件事：**一格署的那个源上，今天有没有出现比我们记的更新的版本号？**
> 报出来的不是「世界变了」，是「**我们抓到了但没写回**」—— 这两件事的严重程度不一样。

## 有更新的一代（5）—— 这一摞要写回 atlas.json

- **GPT**（gpt）库里记 `GPT-6 Astra`（核于 2026-09-10），而 `openai-models` 的快照（2026-10-01）上写着 **GPT-6.1**
  > model If you re not sure where to start, use GPT-6 Astra , our flagship model for complex reasoning and coding. Choose GPT-6.1 Sol to balance intelligence and cost, or GPT-6 Luna for cost-sensitive, high-volume workloads. All latest OpenAI models support text and image input, text output, multilingual capabilities, an

- **Kling**（kling）库里记 `3.0`（核于 2026-02-04），而 `kling-site` 的快照（2026-09-29）上写着 **Kling 4.0**　⚠️ 这一格署的是 `kling-api-updates`，**那个源上看不见新版**
  > Kling AI Video and Image Generator [图标] Kling 4.0 全新升级 全能班底，你和可灵 [图标] 钢琴师在巨浪中的船头演奏。 开启创作 Kling 4.0 [图标] [图标] 视听表现，让画面真实 大幅度动态表现稳定、视听体验沉浸，从画面生成迈向专业级成片 [图标] [图标] 立即体验 [图标] Kling Image 3.0 强化影视级叙事 精准理解镜头语言，让每张静帧都拥有电影叙事张力 原生4K超清直出 原生直出4K超清画面，纹理

- **Meshy**（meshy）库里记 `7`（核于 2026-08-13），而 `meshy-docs-api` 的快照（2026-09-26）上写着 **meshy-7.1**　⚠️ 这一格署的是 `meshy-site`，**那个源上看不见新版**
  > l to use. The available values depend on model_type. Standard generation (model_type: standard): meshy-6-lite, meshy-6, meshy-7.1, latest (Meshy 7.1) meshy-7 (deprecated): use meshy-7.1 instead. Smart Topology generation (model_type: smart-topology): meshy-t2 (default): the Smart Topology model — cleaner topology, nati

- **MiniMax**（minimax-text）库里记 `M3`（核于 2026-06-02），而 `minimax-api-overview` 的快照（2026-09-30）上写着 **M3.1**　⚠️ 这一格署的是 `hf-org`，**那个源上看不见新版**
  > n Plan，查看 订阅 Key [图标] 订阅 Key 用于 Token Plan 订阅套餐和已购积分，并与按量计费 API Key 相互独立。详情见 Token Plan 概要 ​ [图标] 语言模型 语言模型接口使用 MiniMax M3.1-Flash-Preview，MiniMax M3，MiniMax M2.7，MiniMax M2.7-highspeed，MiniMax M2.5，MiniMax M2.5-highspeed，MiniMax M2.1，MiniMax M2.1-highspeed，MiniMax M2 根据输入的上下文，让模型生成对话内容、工具调用。 [图标] MiniMax-M3.1-Flash-Pr

- **Odyssey**（odyssey）库里记 `Odyssey-2`（核于 2026-08-14），而 `odyssey-site` 的快照（2026-09-26）上写着 **Odyssey-3**
  > ta Apple XAI We’re backed by ')"> Foundation World Models Foundation world models to power physical and virtual systems Odyssey-3 draws on a learned understanding of physics, motion, and cause-and-effect to act in physical and virtual worlds. One foundation world model powers policies for robots, humanoids, cars, drone

## 机器自查 · 牌子摘了（32）—— **不用你拍板**

> 「在这个源上找不到我们记的版本号」有两种成因，脚本分不开：
> **版本串本来就不是数字型号**（`650M` / `7B` / `2b/5b` / `glm-4-voice` 这类，占绝大多数），
> 或者**页面改版把它挪走了**。前者是这支脚本够不着，后者才是问题。
> 所以这一摞只存不催 —— 真出了新一代，上面那一摞会喊。

- **AnySplat**（anysplat）记的是 `v1`，`hf-anysplat`（2026-09-25）上没有这个号
- **Aurora**（aurora）记的是 `1`，`sci-aurora-gh`（2026-09-26）上没有这个号
- **CogVideoX**（cogvideox）记的是 `2b/5b`，`hf-cogvideox`（2026-09-26）上没有这个号
- **Doubao**（doubao）记的是 `Seed-2.1 Pro`，`doubao-force-2026`（2026-08-12）上没有这个号
- **ESM-2**（esm）记的是 `650M`，`sci-esm2-card`（2026-09-14）上没有这个号
- **FLUX 3**（flux-video）记的是 `3`，`bfl-flux3`（2026-09-26）上没有这个号
- **Gemini TTS**（gemini-tts）记的是 `3.1 Flash TTS Preview`，`gemini-tts`（2026-09-23）上没有这个号
- **GLM Voice**（glm-voice）记的是 `glm-4-voice`，`glm-voice-doc`（2026-09-23）上没有这个号
- **GNoME**（gnome）记的是 `1`，`sci-gnome-gh`（2026-09-26）上没有这个号
- **MiniMax Hailuo**（hailuo）记的是 `H3`，`minimax-release-notes`（2026-09-26）上没有这个号
- **HunyuanVideo-Avatar**（hunyuan-avatar）记的是 `1.0`，`hf-hunyuan-avatar`（2026-09-26）上没有这个号
- **Hunyuan3D**（hunyuan3d）记的是 `3.1`，`replicate-hunyuan3d-31`（2026-09-26）上没有这个号
- **LivePortrait**（liveportrait）记的是 `1.0`，`hf-liveportrait`（2026-09-26）上没有这个号
- **MAGI**（magi）记的是 `2 Preview`，`hf-magi`（2026-09-26）上没有这个号
- **MatterGen**（mattergen）记的是 `1`，`sci-mattergen-gh`（2026-09-26）上没有这个号
- **MiniMax Speech**（mm-speech）记的是 `speech-2.8-hd`，`minimax-api-overview`（2026-09-30）上没有这个号
- **MuseTalk**（musetalk）记的是 `1.0`，`hf-musetalk`（2026-09-26）上没有这个号
- **NeuralGCM**（neuralgcm）记的是 `1`，`sci-neuralgcm-gh`（2026-09-26）上没有这个号
- **GPT TTS**（openai-tts）记的是 `GPT-4o mini TTS`，`openai-models`（2026-10-01）上没有这个号
- **OpenVLA**（openvla）记的是 `7B`，`openvla-gh`（2026-09-26）上没有这个号
- **PixVerse**（pixverse）记的是 `V6`，`pixverse-v6`（2026-09-26）上没有这个号
- **Qwen Omni**（qwen-omni）记的是 `3.5-omni-plus`，`bailian-websearch`（2026-09-23）上没有这个号
- **Qwen3-ASR**（qwen3-asr）记的是 `1.7B`，`hf-qwen3-asr`（2026-09-26）上没有这个号
- **Rodin**（rodin）记的是 `Gen-2.5`，`rodin-api-docs`（2026-09-26）上没有这个号
- **Runway Gen**（runway）记的是 `Gen-4.5`，`runway-changelog`（2026-09-30）上没有这个号
- **ElevenLabs Scribe**（scribe）记的是 `v2`，`elevenlabs-models`（2026-09-23）上没有这个号
- **Seed GR-3**（seed-gr3）记的是 `GR-3`，`seed-models`（2026-09-23）上没有这个号
- **Seedance**（seedance）记的是 `2.5`，`seed-blog`（2026-09-30）上没有这个号
- **Seedream**（seedream）记的是 `5.0 Pro`，`seed-blog`（2026-09-30）上没有这个号
- **SPAR3D**（spar3d）记的是 `Stable Point Aware 3D`，`stability-spar3d`（2026-09-26）上没有这个号
- **Tripo**（tripo）记的是 `P1-20260311`，`tripo-docs-generation`（2026-09-26）上没有这个号
- **Meta V-JEPA**（vjepa）记的是 `V-JEPA 2`，`vjepa2-blog`（2026-09-13）上没有这个号

## 比不了（56）

> **比不了不等于没问题**，只等于这支脚本够不着。列出来是为了不假装全站都盯住了。

- grok-image —— xai-imagine-image 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- grok-video —— xai-imagine-video 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- luma-ray —— luma-ray32 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- muse-spark —— meta-muse 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- lux3d —— lux3d-site 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- locateanything —— hf-locateanything 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- gemini-omni —— 版本串「Flash」里没有数字，比不了
- wan —— wan3-qbitai / wan-gh-releases 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- sora —— 没署 version_src，这家也没有标 good_for: version 的源
- happyhorse —— 没署 version_src，这家也没有标 good_for: version 的源
- hunyuan-video —— 没署 version_src，这家也没有标 good_for: version 的源
- mochi —— 没署 version_src，这家也没有标 good_for: version 的源
- allegro —— 没署 version_src，这家也没有标 good_for: version 的源
- open-sora —— 没署 version_src，这家也没有标 good_for: version 的源
- flux —— hf-lineage 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- z-image —— hf-lineage 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- hunyuan-image —— hf-lineage 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- sd —— 没署 version_src，这家也没有标 good_for: version 的源
- kolors —— 版本串「待核」里没有数字，比不了
- midjourney —— 版本串「待核」里没有数字，比不了
- hidream —— 没署 version_src，这家也没有标 good_for: version 的源
- ernie-image —— 没署 version_src，这家也没有标 good_for: version 的源
- ovis-image —— 没署 version_src，这家也没有标 good_for: version 的源
- lens —— 没署 version_src，这家也没有标 good_for: version 的源
- mage-flow —— 没署 version_src，这家也没有标 good_for: version 的源
- pixeldit —— 没署 version_src，这家也没有标 good_for: version 的源
- anima —— 没署 version_src，这家也没有标 good_for: version 的源
- boogu-image —— 没署 version_src，这家也没有标 good_for: version 的源
- newbie-image —— 没署 version_src，这家也没有标 good_for: version 的源
- llama —— hf-org 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- glm-tts —— 版本串「GLM-TTS」里没有数字，比不了
- cosyvoice —— hf-org 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- fish-speech —— hf-org 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- apple-sharp —— 版本串「Sharp」里没有数字，比不了
- i2vgen —— 版本串「XL」里没有数字，比不了
- longcat-image —— 版本串「Edit」里没有数字，比不了
- heygen —— 版本串「Avatar V」里没有数字，比不了
- hallo2 —— 版本串「Hallo-Live」里没有数字，比不了
- molmoact —— hf-robotics 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- pi —— 版本串「π₀.₅」里没有数字，比不了
- smolvla —— hf-robotics 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- helix —— 版本串「Helix」里没有数字，比不了
- xvla —— hf-robotics 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- internvla —— modelscope-orgs 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- hy-embodied —— modelscope-orgs 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- xiaomi-robotics —— hf-robotics 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- g0-vla —— modelscope-orgs 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- lingbot-vla —— modelscope-orgs 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- marble —— 版本串「Marble」里没有数字，比不了
- wham —— 版本串「WHAM」里没有数字，比不了
- oasis500m —— hf-robotics 都没有可比对的正文（没快照，或只有 json/atom 的 items）
- sensevoice —— 版本串「Small」里没有数字，比不了
- mace —— 版本串「MP」里没有数字，比不了
- funcineforge —— 版本串「Fun-CineForge」里没有数字，比不了
- seedrealtime —— 版本串「SeedRealtime」里没有数字，比不了
- protenix —— 版本串「Protenix」里没有数字，比不了

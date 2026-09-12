# 信息源监视报告 · 2026-09-12

本次检查 90 个到期源（共 449 个）：变化 54 · 首次 0 · 无变化 31 · **抓不到 5**

> 这份报告是给人看的那 20 条待办的来源（§59.3 的负反馈：人每周要看的条目 ≤ 20）。
> 「抓不到」不是失败，是**信息本身** —— 一个长期抓不到的官方源，说明那家厂商没有可 diff 的公开更新入口，
> 而那正好解释了为什么它名下的格子质量最差。

## 抓到了但没内容（比抓不到更危险 —— 它不会喊）

（无）

## 抓不到（要处理）

- **kling-site**（S/spa）Kling AI 官网 — 还是壳：渲染后正文只有 232 个字符
  https://klingai.com/
- **aa-t2i**（A/spa）Artificial Analysis · 文生图竞技场 — 还是壳：渲染后正文只有 321 个字符
  https://artificialanalysis.ai/text-to-image/arena
- **tripo-site**（S/spa）Tripo 官网 — 被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法
  https://www.tripo3d.ai/
- **sora-eol-search**（B/html）OpenAI Sora 停服说明（⚠️ 页面反爬，我们抓不到，内容来自搜索摘要转述） — HTTP 403
  https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation
- **sora-2**（A/html）OpenAI · Sora 2 发布页（⚠️ 对我们的采集器返回 403，本轮未能一手复核） — HTTP 403
  https://openai.com/index/sora-2/

## 有变化

- **bfl-flux3** Black Forest Labs 官方文档 · FLUX 3 概览
- **hf-hunyuan3d-21** 腾讯混元3D 2.1 · HF 模型卡
- **meshy-docs-api** Meshy · API 文档
- **meshy-site** Meshy 官网
- **gh-trellis** microsoft/TRELLIS 仓库
- **stability-spar3d** Stability · SPAR3D 发布公告
- **rodin-site** Rodin / Hyper3D 官网
- **gh-hunyuan3d-buffalo** Tencent-Hunyuan/Hunyuan3D-Buffalo1.0 仓库
- **replicate-hunyuan3d-31** Replicate · 腾讯官方账号 tencent/hunyuan-3d-3.1
- **hf-wan-vace** Hugging Face · Wan2.1-VACE-14B 模型卡
- **hf-ltx-25** Hugging Face · LTX-2.5 模型卡
- **meshy-changelog** Meshy · API 更新日志
- **heygen-docs** HeyGen · 开发者文档索引
- **synthesia-docs** Synthesia · API 文档
- **hf-longcat-avatar** HF · 美团 LongCat-Video-Avatar-1.5
- **hf-hunyuan-avatar** HF · 腾讯 HunyuanVideo-Avatar
- **hf-liveportrait** HF · 快手 LivePortrait
- **hf-musetalk** HF · 腾讯音乐 MuseTalk
- **hf-hallo2** HF · 复旦 Hallo2
- **heygen-changelog** HeyGen · API 更新日志
- **hf-hallo-live** HF · 复旦 Hallo-Live
- **hf-longcat-avatar-10** HF · 美团 LongCat-Video-Avatar（1.0）
- **elevenlabs-changelog** ElevenLabs · 更新日志索引
- **hf-glm-voice** HF · 智谱 glm-4-voice-9b
- **hf-glm-tts** HF · 智谱 GLM-TTS
- **openai-model-tts** OpenAI · GPT-4o mini TTS 模型页
- **openai-model-realtime** OpenAI · GPT-Realtime 模型页
- **hf-robotics** Hugging Face · robotics 榜（按下载）
  新增 9 条：BAAI/RoboBrain2.0-3B、CursedRock17/rover-line-follower-ppo、IPEC-COMMUNITY/EO-1-3B、YuankaiLuo/SimVLA-LIBERO、allenai/MolmoAct2-DROID、mradermacher/PhysBrain1.5-2B-i1-GGUF、mradermacher/PhysBrain1.5-8B-GGUF、mradermacher/PhysBrain1.5-8B-i1-GGUF、mradermacher/RynnBrain-Nav-8B-i1-GGUF
- **lerobot-gh** Hugging Face 官方 · LeRobot 仓库
- **rynnbrain-card** 阿里达摩院官方 · RynnBrain 1.1 模型卡
- **genie3-blog** Google DeepMind 官方博客 · Genie 3
- **worldlabs-marble** World Labs 官方博客 · Marble
- **seed-25** ByteDance Seed 官方博客 · Seedance 2.5（2026-07-31）
- **sora-api** OpenAI API · sora-2 模型页（⚠️ 同上，403）
- **mm-hf-api** HF API · MiniMaxAI/MiniMax-H3 元数据（许可与文件清单）
- **vidu-fl** Vidu 平台 · Function List（官方功能清单）
- **vidu-up** Vidu 平台 · Update Notice（官方更新日志）
- **vidu-mm** Vidu 平台 · Model Map（官方模型清单）
- **rw-changelog** Runway · 官方 Changelog
- **omni-doc** Google · Gemini Omni Flash 官方文档
- **g-video** Google · 视频生成总览（两个模型如何取舍）
- **ltx-hf-23** Hugging Face · Lightricks/LTX-2.3（当前主力）
- **aa-board** Artificial Analysis 榜（只证明「存在且有人用」，不证明能力）
- **recraft-docs** Recraft · 官方文档
- **bfl-docs** Black Forest Labs · 官方文档索引
- **zimage-card** Z-Image 官方模型卡（Hugging Face）
- **hunyuan-image-card** HunyuanImage-3.0 官方模型卡（Hugging Face）
- **smolvla-card** Hugging Face 官方 · SmolVLA 模型卡
- **molmoact-card** Ai2 官方 · MolmoAct2 模型卡
- **hf-sensevoice** 阿里 FunAudioLLM 官方 · SenseVoiceSmall 模型卡
- **hf-qwen3-asr** 阿里官方 · Qwen3-ASR 模型卡
- **seed-blog-1_5** 字节 Seed · Seedance 1.5 pro 发布（2025-12-16）
- **seed-blog-2_0** 字节 Seed · Seedance 2.0 发布（2026-02-12）
- **ideogram-x** Ideogram 官方账号发布公告（@ideogram_ai）

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 未到期（上次 2026-09-09） |
| seed-models | S | html | 未到期（上次 2026-09-09） |
| kling-api-updates | S | spa | 未到期（上次 2026-09-09） |
| kling-site | S | spa | 抓不到（还是壳：渲染后正文只有 232 个字符） |
| google-video-docs | S | html | 未到期（上次 2026-09-09） |
| deepmind-veo | S | html | 未到期（上次 2026-09-09） |
| vertex-video-ref | S | html | 未到期（上次 2026-09-09） |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 未到期（上次 2026-09-09） |
| wan-hf | S | json | 未到期（上次 2026-09-09） |
| minimax-blog | S | html | 未到期（上次 2026-09-09） |
| minimax-hf | S | json | 未到期（上次 2026-09-09） |
| runway-research | S | html | 未到期（上次 2026-09-09） |
| luma-site | S | html | 未到期（上次 2026-09-09） |
| vidu-changelog | S | spa | 未到期（上次 2026-09-09） |
| vidu-model-map | S | spa | 未到期（上次 2026-09-09） |
| vidu-function-list | S | spa | 未到期（上次 2026-09-09） |
| vidu-site | S | html | 未到期（上次 2026-09-09） |
| vidu-s1-gh | S | json | 未到期（上次 2026-09-09） |
| pika-site | S | html | 未到期（上次 2026-09-09） |
| higgsfield-site | S | html | 未到期（上次 2026-09-09） |
| decart-research | S | html | 未到期（上次 2026-09-09） |
| arxiv-video | S | atom | 未到期（上次 2026-09-06） |
| epoch-notable | A | csv | 未到期（上次 2026-09-09） |
| aa-t2v | A | spa | 未到期（上次 2026-09-09） |
| aa-i2v | A | spa | 未到期（上次 2026-09-09） |
| hf-t2v | A | json | 未到期（上次 2026-09-11） |
| hf-i2v | A | json | 未到期（上次 2026-09-11） |
| hf-v2v | A | json | 未到期（上次 2026-09-09） |
| fal-video | S | spa | 未到期（上次 2026-09-10） |
| replicate-t2v | S | html | 未到期（上次 2026-09-09） |
| aiwiki | B | spa | 未到期（上次 2026-09-11） |
| futurepedia | B | html | 未到期（上次 2026-09-11） |
| comfyui-releases | C | json | 未到期（上次 2026-09-09） |
| capcut-templates | C | html | 未到期（上次 2026-09-11） |
| picsart-effects | C | html | 未到期（上次 2026-09-11） |
| runway-changelog | S | spa | 未到期（上次 2026-09-09） |
| runway-models | S | spa | 未到期（上次 2026-09-09） |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| google-models | S | html | 未到期（上次 2026-09-09） |
| seed-models-hub | S | html | 未到期（上次 2026-09-09） |
| apiyi-models | S | spa | 未到期（上次 2026-09-09） |
| arxiv-worldmodel | S | atom | 未到期（上次 2026-09-06） |
| techcrunch-ai | B | atom | 未到期（上次 2026-09-11） |
| decart-blog | S | spa | 未到期（上次 2026-09-09） |
| ltx-gh | S | json | 未到期（上次 2026-09-09） |
| ltx-hf-org | S | json | 未到期（上次 2026-09-11） |
| decart-site | S | spa | 无变化 |
| picsart-video | C | html | 未到期（上次 2026-09-11） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 未到期（上次 2026-09-09） |
| hailuo-video | S | html | 未到期（上次 2026-09-09） |
| volcengine-ark-price | S | spa | 未到期（上次 2026-09-11） |
| minimax-price | S | spa | 未到期（上次 2026-09-11） |
| google-ai-price | S | html | 未到期（上次 2026-09-11） |
| bailian-price | S | spa | 未到期（上次 2026-09-11） |
| runway-price | S | spa | 未到期（上次 2026-09-11） |
| kling-price | S | spa | 未到期（上次 2026-09-11） |
| vidu-price | S | spa | 未到期（上次 2026-09-11） |
| fal-ltx-price | S | spa | 未到期（上次 2026-09-11） |
| replicate-price | A | html | 未到期（上次 2026-09-11） |
| hf-course | S | html | 未到期（上次 2026-08-12） |
| comfy-docs | S | spa | 未到期（上次 2026-09-09） |
| h3-card | S | html | 未到期（上次 2026-09-09） |
| hf-lineage | S | json | 未到期（上次 2026-09-09） |
| vacetools-gh | C | json | 未到期（上次 2026-09-09） |
| framepack-gh | S | json | 未到期（上次 2026-09-09） |
| fpwrapper-gh | C | json | 未到期（上次 2026-09-09） |
| latentsync-gh | S | json | 未到期（上次 2026-09-09） |
| lswrapper-gh | C | json | 未到期（上次 2026-09-09） |
| float-gh | C | json | 未到期（上次 2026-09-09） |
| sviflf-gh | C | json | 未到期（上次 2026-09-09） |
| flflatent-gh | C | json | 未到期（上次 2026-09-09） |
| mm-blog | S | html | 未到期（上次 2026-09-11） |
| wanwrapper-gh | C | json | 未到期（上次 2026-09-09） |
| comfy-org-hf | S | json | 未到期（上次 2026-09-09） |
| ltx-comfy-gh | S | json | 未到期（上次 2026-09-09） |
| mpt-gh | C | json | 未到期（上次 2026-09-09） |
| manim-gh | C | json | 未到期（上次 2026-09-09） |
| pyvideotrans-gh | C | json | 未到期（上次 2026-09-09） |
| duix-gh | C | json | 未到期（上次 2026-09-09） |
| fay-gh | C | json | 未到期（上次 2026-09-09） |
| narrato-gh | C | json | 未到期（上次 2026-09-09） |
| zho-wf-gh | C | json | 未到期（上次 2026-09-09） |
| echomimic-gh | C | json | 未到期（上次 2026-09-09） |
| linly-talker-gh | C | json | 未到期（上次 2026-09-09） |
| animate-anything-gh | C | json | 未到期（上次 2026-09-09） |
| huobao-gh | C | json | 未到期（上次 2026-09-09） |
| awesome-vd-gh | C | json | 未到期（上次 2026-09-09） |
| seedream-page | S | html | 未到期（上次 2026-09-09） |
| openai-models | S | html | 未到期（上次 2026-09-10） |
| gemini-models | S | html | 未到期（上次 2026-09-10） |
| google-gemini-blog | S | html | 未到期（上次 2026-09-09） |
| azure-foundry-blog | B | html | 未到期（上次 2026-09-11） |
| recraft-blog | S | html | 未到期（上次 2026-09-11） |
| kolors-gh | S | html | 未到期（上次 2026-09-11） |
| krea-blog | S | html | 未到期（上次 2026-09-09） |
| wiki-midjourney | B | html | 未到期（上次 2026-08-12） |
| comfyui-gh | S | json | 未到期（上次 2026-09-11） |
| sdwebui-gh | S | json | 未到期（上次 2026-09-11） |
| fooocus-gh | S | json | 未到期（上次 2026-09-11） |
| invokeai-gh | S | json | 未到期（上次 2026-09-11） |
| iopaint-gh | S | json | 未到期（上次 2026-09-11） |
| rembg-gh | S | json | 未到期（上次 2026-09-11） |
| realesrgan-gh | S | json | 未到期（上次 2026-09-11） |
| gfpgan-gh | S | json | 未到期（上次 2026-09-11） |
| codeformer-gh | S | json | 未到期（上次 2026-09-11） |
| oldphoto-gh | S | json | 未到期（上次 2026-09-11） |
| controlnet-gh | S | json | 未到期（上次 2026-09-11） |
| ipadapter-gh | S | json | 未到期（上次 2026-09-11） |
| instantid-gh | S | json | 未到期（上次 2026-09-11） |
| photomaker-gh | S | json | 未到期（上次 2026-09-11） |
| iclight-gh | S | json | 未到期（上次 2026-09-11） |
| idmvton-gh | S | json | 未到期（上次 2026-09-11） |
| ootd-gh | S | json | 未到期（上次 2026-09-11） |
| catvton-gh | S | json | 未到期（上次 2026-09-11） |
| kritaai-gh | S | json | 未到期（上次 2026-09-11） |
| omnigen-gh | S | json | 未到期（上次 2026-09-11） |
| step1x-gh | S | json | 未到期（上次 2026-09-11） |
| qwenimage-gh | S | json | 未到期（上次 2026-09-11） |
| anytext-gh | S | json | 未到期（上次 2026-09-11） |
| incontextlora-gh | S | json | 未到期（上次 2026-09-11） |
| comictrans-gh | S | json | 未到期（上次 2026-09-11） |
| manganinjia-gh | S | json | 未到期（上次 2026-09-11） |
| starvector-gh | S | json | 未到期（上次 2026-09-11） |
| svgdreamer-gh | S | json | 未到期（上次 2026-09-11） |
| easyphoto-gh | S | json | 未到期（上次 2026-09-11） |
| ipadapter-plus-gh | S | json | 未到期（上次 2026-09-11） |
| controlnet-aux-gh | S | json | 未到期（上次 2026-09-11） |
| ultimate-upscale-gh | S | json | 未到期（上次 2026-09-11） |
| comfy-manager-gh | S | json | 未到期（上次 2026-09-11） |
| comfy-examples-gh | S | json | 未到期（上次 2026-09-11） |
| comfy-templates-gh | S | json | 未到期（上次 2026-09-11） |
| hf-diffusion-class-gh | S | json | 未到期（上次 2026-09-11） |
| fastai-course | S | html | 未到期（上次 2026-08-12） |
| dreamtextures-gh | S | json | 未到期（上次 2026-09-11） |
| char2d-gh | S | json | 未到期（上次 2026-09-11） |
| hf-pixelart-lora | S | json | 未到期（上次 2026-08-12） |
| google-nb-blog | S | html | 未到期（上次 2026-09-09） |
| ms-foundry-blog | B | html | 未到期（上次 2026-09-11） |
| hf-image-org | S | json | 未到期（上次 2026-09-09） |
| mj-updates | S | html | 未到期（上次 2026-09-09） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 321 个字符） |
| hf-t2i | A | json | 未到期（上次 2026-09-11） |
| hf-i2i | A | json | 未到期（上次 2026-09-11） |
| anthropic-models | S | html | 未到期（上次 2026-09-10） |
| deepseek-docs | S | html | 未到期（上次 2026-09-10） |
| xai-docs | S | html | 未到期（上次 2026-09-10） |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| hf-text-org | S | json | 未到期（上次 2026-09-10） |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 未到期（上次 2026-09-09） |
| glm-api | S | html | 未到期（上次 2026-09-09） |
| minimax-platform | S | html | 未到期（上次 2026-09-09） |
| langchain-gh | S | json | 未到期（上次 2026-09-11） |
| langgraph-gh | S | json | 未到期（上次 2026-09-11） |
| llamaindex-gh | S | json | 未到期（上次 2026-09-11） |
| vllm-gh | S | json | 未到期（上次 2026-09-11） |
| llamacpp-gh | S | json | 未到期（上次 2026-09-11） |
| ollama-gh | S | json | 未到期（上次 2026-09-11） |
| ragflow-gh | S | json | 未到期（上次 2026-09-11） |
| dify-gh | S | json | 未到期（上次 2026-09-11） |
| n8n-gh | S | json | 未到期（上次 2026-09-11） |
| openwebui-gh | S | json | 未到期（上次 2026-09-11） |
| autogen-gh | S | json | 未到期（上次 2026-09-11） |
| crewai-gh | S | json | 未到期（上次 2026-09-11） |
| litellm-gh | S | json | 未到期（上次 2026-09-11） |
| transformers-gh | S | json | 未到期（上次 2026-09-11） |
| unsloth-gh | S | json | 未到期（上次 2026-09-11） |
| llamafactory-gh | S | json | 未到期（上次 2026-09-11） |
| aider-gh | S | json | 未到期（上次 2026-09-11） |
| cline-gh | S | json | 未到期（上次 2026-09-11） |
| continue-gh | S | json | 未到期（上次 2026-09-11） |
| openhands-gh | S | json | 未到期（上次 2026-09-11） |
| browseruse-gh | S | json | 未到期（上次 2026-09-11） |
| markitdown-gh | S | json | 未到期（上次 2026-09-11） |
| unstructured-gh | S | json | 未到期（上次 2026-09-11） |
| mineru-gh | S | json | 未到期（上次 2026-09-11） |
| mcpservers-gh | S | json | 未到期（上次 2026-09-11） |
| anthropic-features | S | html | 未到期（上次 2026-09-10） |
| openai-docs | S | html | 未到期（上次 2026-09-10） |
| deepseek-pricing | S | html | 未到期（上次 2026-09-10） |
| deepseek-updates | S | html | 未到期（上次 2026-09-10） |
| bailian-models | S | html | 未到期（上次 2026-09-09） |
| kimi-pricing | S | html | 未到期（上次 2026-09-09） |
| glm-52-doc | S | html | 未到期（上次 2026-09-09） |
| kimi-websearch | S | html | 未到期（上次 2026-09-09） |
| kimi-chat-api | S | html | 未到期（上次 2026-09-09） |
| bailian-websearch | S | html | 未到期（上次 2026-09-09） |
| glm-websearch | S | html | 未到期（上次 2026-09-09） |
| bailian-coder | S | html | 未到期（上次 2026-09-09） |
| ark-models | S | spa | 未到期（上次 2026-09-09） |
| minimax-api-overview | S | spa | 未到期（上次 2026-09-09） |
| claude-models | S | html | 未到期（上次 2026-09-10） |
| openai-caching | S | html | 未到期（上次 2026-09-10） |
| openai-structured | S | html | 未到期（上次 2026-09-10） |
| deepseek-chat-api | S | html | 未到期（上次 2026-09-10） |
| gemini-audio | S | spa | 未到期（上次 2026-09-10） |
| gemini-vision | S | spa | 未到期（上次 2026-09-10） |
| minimax-anthropic-api | S | spa | 未到期（上次 2026-09-09） |
| minimax-openai-api | S | spa | 未到期（上次 2026-09-09） |
| minimax-server-tools | S | spa | 未到期（上次 2026-09-09） |
| minimax-caching | S | spa | 未到期（上次 2026-09-09） |
| minimax-openapi | S | json | 未到期（上次 2026-09-09） |
| gemini-computer-use | S | spa | 未到期（上次 2026-09-10） |
| ark-pricing | S | spa | 未到期（上次 2026-09-09） |
| bailian-models-zh | S | spa | 未到期（上次 2026-09-09） |
| glm-batch | S | html | 未到期（上次 2026-09-09） |
| glm-chat-api | S | html | 未到期（上次 2026-09-09） |
| claude-deprecations | S | html | 未到期（上次 2026-09-10） |
| openai-changelog | S | spa | 未到期（上次 2026-09-10） |
| gemini-changelog | S | spa | 未到期（上次 2026-09-10） |
| xai-release-notes | S | html | 未到期（上次 2026-09-10） |
| aa-llm | B | spa | 未到期（上次 2026-09-09） |
| ideogram-api | S | html | 未到期（上次 2026-09-09） |
| elevenlabs-models | S | html | 未到期（上次 2026-09-09） |
| openai-realtime | S | html | 未到期（上次 2026-09-09） |
| gemini-tts | S | html | 未到期（上次 2026-09-09） |
| elevenlabs-tts | S | html | 未到期（上次 2026-09-09） |
| bailian-omni | S | html | 未到期（上次 2026-09-10） |
| elevenlabs-remix | S | html | 未到期（上次 2026-09-09） |
| openai-tts | S | html | 未到期（上次 2026-09-09） |
| gemini-music | S | html | 未到期（上次 2026-09-10） |
| glm-tts-doc | S | html | 未到期（上次 2026-09-09） |
| glm-tts-clone-doc | S | html | 未到期（上次 2026-09-09） |
| glm-voice-doc | S | html | 未到期（上次 2026-09-09） |
| xai-voice | S | html | 未到期（上次 2026-09-09） |
| hf-sound-org | S | json | 未到期（上次 2026-09-09） |
| kokoro-card | S | html | 未到期（上次 2026-09-09） |
| xai-models | S | html | 未到期（上次 2026-09-10） |
| mistral-models | S | html | 未到期（上次 2026-09-09） |
| mistral-tools | S | html | 未到期（上次 2026-09-09） |
| mistral-vision | S | html | 未到期（上次 2026-09-09） |
| fish-s2pro-card | S | html | 未到期（上次 2026-09-09） |
| cosyvoice-card | S | html | 未到期（上次 2026-09-09） |
| llama-card | S | html | 未到期（上次 2026-09-09） |
| elevenlabs-voices | S | html | 未到期（上次 2026-09-09） |
| wan-t2v-card | S | html | 未到期（上次 2026-09-09） |
| minimax-release | S | spa | 未到期（上次 2026-09-09） |
| s-e2ab-gh | C | json | 未到期（上次 2026-09-09） |
| s-abogen-gh | C | json | 未到期（上次 2026-09-09） |
| s-epub2tts-gh | C | json | 未到期（上次 2026-09-09） |
| s-abcreator-gh | C | json | 未到期（上次 2026-09-09） |
| s-pvt-gh | C | json | 未到期（上次 2026-09-09） |
| s-smartsub-gh | C | json | 未到期（上次 2026-09-09） |
| s-youdub-gh | C | json | 未到期（上次 2026-09-09） |
| s-pipecat-gh | C | json | 未到期（上次 2026-09-09） |
| s-livekit-gh | C | json | 未到期（上次 2026-09-09） |
| s-hfs2s-gh | C | json | 未到期（上次 2026-09-09） |
| s-moshi-gh | C | json | 未到期（上次 2026-09-09） |
| s-acestep15-gh | C | json | 未到期（上次 2026-09-09） |
| s-acestep-gh | C | json | 未到期（上次 2026-09-09） |
| s-yue-gh | C | json | 未到期（上次 2026-09-09） |
| s-audiocraft-gh | C | json | 未到期（上次 2026-09-09） |
| s-gptsovits-gh | C | json | 未到期（上次 2026-09-09） |
| s-rvc-gh | C | json | 未到期（上次 2026-09-09） |
| s-fishspeech-gh | C | json | 未到期（上次 2026-09-09） |
| s-indextts-gh | C | json | 未到期（上次 2026-09-09） |
| s-cosyvoice-gh | C | json | 未到期（上次 2026-09-09） |
| s-f5tts-gh | C | json | 未到期（上次 2026-09-09） |
| s-qwen3omni-gh | C | json | 未到期（上次 2026-09-09） |
| ideogram-overview | A | html | 未到期（上次 2026-09-09） |
| ideogram-v4-remix | A | html | 未到期（上次 2026-09-09） |
| ideogram-v3-inpaint | A | html | 未到期（上次 2026-09-09） |
| ideogram-v3-reframe | A | html | 未到期（上次 2026-09-09） |
| ideogram-v3-generate | A | html | 未到期（上次 2026-09-09） |
| ideogram-edit | A | html | 未到期（上次 2026-09-09） |
| ideogram-upscale | A | html | 未到期（上次 2026-09-09） |
| ideogram-hf | A | html | 未到期（上次 2026-09-09） |
| bailian-qimg3 | A | html | 未到期（上次 2026-09-09） |
| bailian-qimg | A | html | 未到期（上次 2026-09-09） |
| bailian-textgen-zh | A | html | 未到期（上次 2026-09-09） |
| bailian-thinking-zh | A | html | 未到期（上次 2026-09-09） |
| bailian-cache-zh | A | html | 未到期（上次 2026-09-09） |
| bailian-batch-zh | A | html | 未到期（上次 2026-09-09） |
| bailian-websearch-zh | A | html | 未到期（上次 2026-09-10） |
| hf-kokoro | A | json | 未到期（上次 2026-09-11） |
| hf-cosyvoice2 | A | json | 未到期（上次 2026-09-11） |
| hf-glmtts | A | json | 未到期（上次 2026-09-11） |
| hf-glm4voice | A | json | 未到期（上次 2026-09-11） |
| hf-fishspeech15 | A | html | 未到期（上次 2026-08-15） |
| hf-qwen3omni | A | json | 未到期（上次 2026-09-11） |
| hf-qwen-layered | A | html | 未到期（上次 2026-08-15） |
| hf-org-minimax | A | json | 未到期（上次 2026-09-11） |
| hf-org-xai | A | json | 未到期（上次 2026-09-11） |
| hf-org-elevenlabs | A | json | 未到期（上次 2026-09-11） |
| hf-org-openai | A | json | 未到期（上次 2026-09-11） |
| ideogram-layerize | A | html | 未到期（上次 2026-09-11） |
| recraft-endpoints | A | html | 未到期（上次 2026-09-03） |
| recraft-nl-edit | A | html | 未到期（上次 2026-09-03） |
| hunyuan-image-hf | A | json | 未到期（上次 2026-09-03） |
| bfl-flux2-overview | A | html | 未到期（上次 2026-09-03） |
| bfl-flux2-multiref | A | html | 无变化 |
| ark-seedream-api | A | spa | 未到期（上次 2026-09-10） |
| arxiv-fp8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-int8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-qlora | A | html | 未到期（上次 2026-08-13） |
| arxiv-gptq | A | html | 未到期（上次 2026-08-13） |
| arxiv-awq | A | html | 未到期（上次 2026-08-13） |
| arxiv-lora | A | html | 未到期（上次 2026-08-13） |
| hf-gguf-doc | A | html | 未到期（上次 2026-08-13） |
| hf-diffusers-memory | A | html | 未到期（上次 2026-08-13） |
| zimage-gh | A | html | 未到期（上次 2026-09-05） |
| hunyuan-image-gh | A | html | 未到期（上次 2026-09-05） |
| skyreels-gh | A | html | 无变化 |
| bfl-flux3 | A | html | 变了 |
| anthropic-privacy | A | html | 未到期（上次 2026-08-14） |
| stability-terms | A | html | 未到期（上次 2026-08-14） |
| recraft-blog-b | A | html | 未到期（上次 2026-08-14） |
| gh-llm-universe | C | json | 未到期（上次 2026-08-14） |
| gh-all-in-rag | C | json | 未到期（上次 2026-08-14） |
| gh-handy-multi-agent | C | json | 未到期（上次 2026-08-14） |
| gh-llm-action | C | json | 未到期（上次 2026-08-14） |
| gh-self-llm | C | json | 未到期（上次 2026-08-14） |
| gh-langchain-zh | C | json | 未到期（上次 2026-08-14） |
| gh-llamafactory | C | json | 未到期（上次 2026-08-14） |
| gh-gptsovits-cn | C | json | 未到期（上次 2026-08-14） |
| gh-cosyvoice-doc | C | json | 未到期（上次 2026-08-14） |
| gh-chattts-cn | C | json | 未到期（上次 2026-08-14） |
| gh-pyvideotrans-doc | C | json | 未到期（上次 2026-08-14） |
| gh-comfy-zho | C | json | 未到期（上次 2026-08-14） |
| gh-comfyui | C | json | 未到期（上次 2026-08-14） |
| gh-sdbook | C | json | 未到期（上次 2026-08-14） |
| waytoagi-wiki | C | spa | 从未抓过 |
| hf-hunyuan3d-21 | S | html | 变了 |
| tripo-docs-generation | S | spa | 无变化 |
| meshy-docs-api | S | spa | 变了 |
| meshy-site | S | spa | 变了 |
| rodin-api-docs | S | html | 无变化 |
| gh-trellis | S | html | 变了 |
| seed3d-page | S | spa | 从未抓过 |
| stability-spar3d | S | html | 变了 |
| tripo-site | S | spa | 抓不到（被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法） |
| rodin-site | S | spa | 变了 |
| tripo-docs-animation | S | spa | 无变化 |
| gh-hunyuan3d-buffalo | S | html | 变了 |
| replicate-hunyuan3d-31 | A | spa | 变了 |
| replicate-3d | A | spa | 未到期（上次 2026-09-04） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-09-04） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-09-04） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-09-04） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-09-04） |
| gh-spar3d | S | html | 未到期（上次 2026-09-04） |
| gh-triposg | S | html | 未到期（上次 2026-09-04） |
| gh-instantmesh | S | html | 未到期（上次 2026-09-04） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 变了 |
| hf-ltx-25 | S | html | 变了 |
| meshy-changelog | S | spa | 变了 |
| hf-instantmesh | S | html | 未到期（上次 2026-09-04） |
| hf-apple-sharp | S | html | 未到期（上次 2026-09-04） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-09-04） |
| hf-anysplat | S | html | 未到期（上次 2026-09-04） |
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-08-14） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-08-14） |
| hf-trellis2 | S | html | 未到期（上次 2026-09-04） |
| pixverse-caps | S | html | 无变化 |
| pixverse-v6 | S | html | 无变化 |
| pixverse-fusion | S | html | 无变化 |
| hf-cogvideox | S | html | 未到期（上次 2026-09-05） |
| hf-i2vgen | S | html | 未到期（上次 2026-09-05） |
| hf-longcat-edit | S | html | 未到期（上次 2026-09-05） |
| hf-magi | S | html | 未到期（上次 2026-09-05） |
| heygen-docs | S | spa | 变了 |
| synthesia-docs | S | spa | 变了 |
| hf-longcat-avatar | S | html | 变了 |
| hf-hunyuan-avatar | S | html | 变了 |
| hf-liveportrait | S | html | 变了 |
| hf-musetalk | S | html | 变了 |
| hf-hallo2 | S | html | 变了 |
| replicate-lipsync | A | spa | 未到期（上次 2026-09-05） |
| comfy-s2v | S | html | 未到期（上次 2026-09-05） |
| heygen-translate | S | html | 未到期（上次 2026-09-05） |
| heygen-live | S | html | 未到期（上次 2026-09-05） |
| heygen-photo | S | html | 未到期（上次 2026-09-05） |
| heygen-training | S | html | 未到期（上次 2026-09-05） |
| heygen-changelog | S | html | 变了 |
| hf-hallo-live | S | html | 变了 |
| hf-longcat-avatar-10 | S | html | 变了 |
| gh-video-retalking | S | html | 未到期（上次 2026-09-05） |
| elevenlabs-changelog | S | html | 变了 |
| hf-glm-voice | S | html | 变了 |
| hf-glm-tts | S | html | 变了 |
| openai-model-tts | S | spa | 变了 |
| openai-model-realtime | S | spa | 变了 |
| elevenlabs-docs | S | html | 未到期（上次 2026-09-10） |
| gemini-robotics-er | S | html | 无变化 |
| figure-helix | A | html | 无变化 |
| pi-pi05-blog | A | html | 无变化 |
| pi-openpi-gh | A | html | 无变化 |
| nvidia-groot-gh | A | html | 无变化 |
| openvla-gh | A | html | 无变化 |
| openvla-repo | A | html | 无变化 |
| hf-robotics | B | json | 变了 |
| lerobot-gh | A | json | 变了 |
| groot-policy-doc | A | html | 无变化 |
| rynnbrain-card | A | html | 变了 |
| maniskill-gh | B | json | 未到期（上次 2026-08-14） |
| cosmos3-card | S | html | 无变化 |
| genie3-blog | A | html | 变了 |
| odyssey-site | A | html | 无变化 |
| worldlabs-marble | A | html | 变了 |
| matrixgame-card | A | html | 无变化 |
| hunyuanworld-gh | A | html | 无变化 |
| wham-card | A | html | 未到期（上次 2026-08-14） |
| vjepa2-blog | A | html | 未到期（上次 2026-08-14） |
| vjepa2-card | B | html | 未到期（上次 2026-08-14） |
| sci-boltz-gh | A | html | 无变化 |
| sci-af3-blog | A | html | 未到期（上次 2026-08-15） |
| sci-esm2-card | B | html | 未到期（上次 2026-08-15） |
| sci-wn-gh | A | html | 无变化 |
| sci-aurora-gh | A | html | 无变化 |
| sci-neuralgcm-gh | A | html | 无变化 |
| sci-mattergen-gh | A | html | 无变化 |
| sci-mace-gh | A | html | 无变化 |
| sci-gnome-gh | A | html | 无变化 |
| kling-api | A | html | 无变化 |
| seed-25 | A | html | 变了 |
| veo-doc | A | html | 未到期（上次 2026-09-10） |
| sora-eol-search | B | html | 抓不到（HTTP 403） |
| sora-api | A | html | 变了 |
| sora-2 | A | html | 抓不到（HTTP 403） |
| wan-site | A | html | 无变化 |
| mm-hf-api | A | json | 变了 |
| vidu-fl | A | html | 变了 |
| vidu-up | A | html | 变了 |
| vidu-mm | A | html | 变了 |
| rw-changelog | A | html | 变了 |
| vidu-s1-paper | A | html | 未到期（上次 2026-08-15） |
| omni-doc | A | html | 变了 |
| g-video | A | html | 变了 |
| ltx-hf-23 | A | html | 变了 |
| aa-board | B | html | 变了 |
| gemini-image-docs | A | html | 未到期（上次 2026-09-10） |
| openai-image-docs | A | html | 未到期（上次 2026-09-10） |
| recraft-docs | A | html | 变了 |
| bfl-docs | A | html | 变了 |
| zimage-card | A | html | 变了 |
| hunyuan-image-card | A | html | 变了 |
| smolvla-card | A | html | 变了 |
| molmoact-card | A | html | 变了 |
| hf-whisper | A | html | 未到期（上次 2026-09-10） |
| hf-sensevoice | A | html | 变了 |
| hf-qwen3-asr | A | html | 变了 |
| minimax-release-notes | A | html | 无变化 |
| seed-blog-1_5 | A | html | 变了 |
| seed-blog-2_0 | A | html | 变了 |
| ideogram-x | A | html | 变了 |

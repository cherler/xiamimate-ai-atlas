# 信息源监视报告 · 2026-08-29

本次检查 95 个到期源（共 448 个）：变化 58 · 首次 0 · 无变化 32 · **抓不到 5**

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

- **hf-hunyuan3d-21** 腾讯混元3D 2.1 · HF 模型卡
- **meshy-docs-api** Meshy · API 文档
- **meshy-site** Meshy 官网
- **rodin-api-docs** Rodin / Hyper3D · API 文档索引
- **gh-trellis** microsoft/TRELLIS 仓库
- **stability-spar3d** Stability · SPAR3D 发布公告
- **rodin-site** Rodin / Hyper3D 官网
- **tripo-docs-animation** Tripo · Animation 端点文档
- **gh-hunyuan3d-buffalo** Tencent-Hunyuan/Hunyuan3D-Buffalo1.0 仓库
- **replicate-hunyuan3d-31** Replicate · 腾讯官方账号 tencent/hunyuan-3d-3.1
- **hf-wan-vace** Hugging Face · Wan2.1-VACE-14B 模型卡
- **hf-ltx-25** Hugging Face · LTX-2.5 模型卡
- **meshy-changelog** Meshy · API 更新日志
- **heygen-docs** HeyGen · 开发者文档索引
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
- **elevenlabs-docs** ElevenLabs · 文档索引（llms.txt）
- **gemini-robotics-er** Google 官方文档 · Gemini Robotics ER（能力表 / 端点 / 定价）
- **figure-helix** Figure 官方 · Helix 模型发布页
- **hf-robotics** Hugging Face · robotics 榜（按下载）
  新增 12 条：Eku127/swiftvln-satnav-3b-1ep-f32s4-overlap0-pf-h8-pool-s2-noembed、H-EmbodVis/TurboVLA、MangoGoes/libero4in1_wan2.2vae_latent_cosmos_style、Sylvest/openvla-7b-oft-finetuned-libero-plus-mixdata、diantoudefengshan/Jetson-PI-GGUF、kemjensak/unlv_vla_policy、mradermacher/Qwen3.8-Couture-Engine-27B-GGUF、robotics-diffusion-transformer/rdt-1b、tylergp/molmoact2-libero-ft-10mm-10、tylergp/molmoact2-libero-ft-10mm-100、tylergp/molmoact2-libero-ft-10mm-30、unitreerobotics/UnifoLM-VLM-Base
- **lerobot-gh** Hugging Face 官方 · LeRobot 仓库
- **cosmos3-card** NVIDIA 官方 · Cosmos3-Nano 模型卡（输入输出规格与本体维度表）
- **worldlabs-marble** World Labs 官方博客 · Marble
- **sci-mattergen-gh** 微软官方仓库 · MatterGen
- **veo-doc** Google · Veo 3.1 官方文档
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
- **gemini-image-docs** Google · Gemini API 图像生成官方文档
- **openai-image-docs** OpenAI · Image generation 官方指南
- **recraft-docs** Recraft · 官方文档
- **bfl-docs** Black Forest Labs · 官方文档索引
- **zimage-card** Z-Image 官方模型卡（Hugging Face）
- **hunyuan-image-card** HunyuanImage-3.0 官方模型卡（Hugging Face）
- **smolvla-card** Hugging Face 官方 · SmolVLA 模型卡
- **molmoact-card** Ai2 官方 · MolmoAct2 模型卡
- **hf-whisper** OpenAI 官方 · Whisper large-v3 模型卡
- **hf-sensevoice** 阿里 FunAudioLLM 官方 · SenseVoiceSmall 模型卡
- **hf-qwen3-asr** 阿里官方 · Qwen3-ASR 模型卡
- **minimax-release-notes** MiniMax 开放平台 · 模型发布日志
- **ideogram-x** Ideogram 官方账号发布公告（@ideogram_ai）

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 未到期（上次 2026-08-26） |
| seed-models | S | html | 未到期（上次 2026-08-26） |
| kling-api-updates | S | spa | 未到期（上次 2026-08-26） |
| kling-site | S | spa | 抓不到（还是壳：渲染后正文只有 232 个字符） |
| google-video-docs | S | html | 未到期（上次 2026-08-26） |
| deepmind-veo | S | html | 未到期（上次 2026-08-26） |
| vertex-video-ref | S | html | 未到期（上次 2026-08-26） |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 未到期（上次 2026-08-26） |
| wan-hf | S | json | 未到期（上次 2026-08-26） |
| minimax-blog | S | html | 未到期（上次 2026-08-26） |
| minimax-hf | S | json | 未到期（上次 2026-08-26） |
| runway-research | S | html | 未到期（上次 2026-08-26） |
| luma-site | S | html | 未到期（上次 2026-08-26） |
| vidu-changelog | S | spa | 未到期（上次 2026-08-26） |
| vidu-model-map | S | spa | 未到期（上次 2026-08-26） |
| vidu-function-list | S | spa | 未到期（上次 2026-08-26） |
| vidu-site | S | html | 未到期（上次 2026-08-26） |
| vidu-s1-gh | S | json | 未到期（上次 2026-08-26） |
| pika-site | S | html | 未到期（上次 2026-08-26） |
| higgsfield-site | S | html | 未到期（上次 2026-08-26） |
| decart-research | S | html | 未到期（上次 2026-08-26） |
| arxiv-video | S | atom | 未到期（上次 2026-08-23） |
| epoch-notable | A | csv | 未到期（上次 2026-08-26） |
| aa-t2v | A | spa | 未到期（上次 2026-08-26） |
| aa-i2v | A | spa | 未到期（上次 2026-08-26） |
| hf-t2v | A | json | 未到期（上次 2026-08-27） |
| hf-i2v | A | json | 未到期（上次 2026-08-27） |
| hf-v2v | A | json | 未到期（上次 2026-08-26） |
| fal-video | S | spa | 未到期（上次 2026-08-26） |
| replicate-t2v | S | html | 未到期（上次 2026-08-26） |
| aiwiki | B | spa | 未到期（上次 2026-08-12） |
| futurepedia | B | html | 未到期（上次 2026-08-12） |
| comfyui-releases | C | json | 未到期（上次 2026-08-26） |
| capcut-templates | C | html | 未到期（上次 2026-08-12） |
| picsart-effects | C | html | 未到期（上次 2026-08-12） |
| runway-changelog | S | spa | 未到期（上次 2026-08-26） |
| runway-models | S | spa | 未到期（上次 2026-08-26） |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| google-models | S | html | 未到期（上次 2026-08-26） |
| seed-models-hub | S | html | 未到期（上次 2026-08-26） |
| apiyi-models | S | spa | 未到期（上次 2026-08-26） |
| arxiv-worldmodel | S | atom | 未到期（上次 2026-08-23） |
| techcrunch-ai | B | atom | 未到期（上次 2026-08-27） |
| decart-blog | S | spa | 未到期（上次 2026-08-26） |
| ltx-gh | S | json | 未到期（上次 2026-08-26） |
| ltx-hf-org | S | json | 未到期（上次 2026-08-27） |
| decart-site | S | spa | 无变化 |
| picsart-video | C | html | 未到期（上次 2026-08-12） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 未到期（上次 2026-08-26） |
| hailuo-video | S | html | 未到期（上次 2026-08-26） |
| volcengine-ark-price | S | spa | 未到期（上次 2026-08-12） |
| minimax-price | S | spa | 未到期（上次 2026-08-12） |
| google-ai-price | S | html | 未到期（上次 2026-08-12） |
| bailian-price | S | spa | 未到期（上次 2026-08-12） |
| runway-price | S | spa | 未到期（上次 2026-08-12） |
| kling-price | S | spa | 未到期（上次 2026-08-12） |
| vidu-price | S | spa | 未到期（上次 2026-08-12） |
| fal-ltx-price | S | spa | 未到期（上次 2026-08-12） |
| replicate-price | A | html | 未到期（上次 2026-08-12） |
| hf-course | S | html | 未到期（上次 2026-08-12） |
| comfy-docs | S | spa | 未到期（上次 2026-08-26） |
| h3-card | S | html | 未到期（上次 2026-08-26） |
| hf-lineage | S | json | 未到期（上次 2026-08-26） |
| vacetools-gh | C | json | 未到期（上次 2026-08-26） |
| framepack-gh | S | json | 未到期（上次 2026-08-26） |
| fpwrapper-gh | C | json | 未到期（上次 2026-08-26） |
| latentsync-gh | S | json | 未到期（上次 2026-08-26） |
| lswrapper-gh | C | json | 未到期（上次 2026-08-26） |
| float-gh | C | json | 未到期（上次 2026-08-26） |
| sviflf-gh | C | json | 未到期（上次 2026-08-26） |
| flflatent-gh | C | json | 未到期（上次 2026-08-26） |
| mm-blog | S | html | 未到期（上次 2026-08-12） |
| wanwrapper-gh | C | json | 未到期（上次 2026-08-26） |
| comfy-org-hf | S | json | 未到期（上次 2026-08-26） |
| ltx-comfy-gh | S | json | 未到期（上次 2026-08-26） |
| mpt-gh | C | json | 未到期（上次 2026-08-26） |
| manim-gh | C | json | 未到期（上次 2026-08-26） |
| pyvideotrans-gh | C | json | 未到期（上次 2026-08-26） |
| duix-gh | C | json | 未到期（上次 2026-08-26） |
| fay-gh | C | json | 未到期（上次 2026-08-26） |
| narrato-gh | C | json | 未到期（上次 2026-08-26） |
| zho-wf-gh | C | json | 未到期（上次 2026-08-26） |
| echomimic-gh | C | json | 未到期（上次 2026-08-26） |
| linly-talker-gh | C | json | 未到期（上次 2026-08-26） |
| animate-anything-gh | C | json | 未到期（上次 2026-08-26） |
| huobao-gh | C | json | 未到期（上次 2026-08-26） |
| awesome-vd-gh | C | json | 未到期（上次 2026-08-26） |
| seedream-page | S | html | 未到期（上次 2026-08-26） |
| openai-models | S | html | 未到期（上次 2026-08-26） |
| gemini-models | S | html | 未到期（上次 2026-08-26） |
| google-gemini-blog | S | html | 未到期（上次 2026-08-26） |
| azure-foundry-blog | B | html | 未到期（上次 2026-08-12） |
| recraft-blog | S | html | 未到期（上次 2026-08-12） |
| kolors-gh | S | html | 未到期（上次 2026-08-12） |
| krea-blog | S | html | 未到期（上次 2026-08-26） |
| wiki-midjourney | B | html | 未到期（上次 2026-08-12） |
| comfyui-gh | S | json | 未到期（上次 2026-08-12） |
| sdwebui-gh | S | json | 未到期（上次 2026-08-12） |
| fooocus-gh | S | json | 未到期（上次 2026-08-12） |
| invokeai-gh | S | json | 未到期（上次 2026-08-12） |
| iopaint-gh | S | json | 未到期（上次 2026-08-12） |
| rembg-gh | S | json | 未到期（上次 2026-08-12） |
| realesrgan-gh | S | json | 未到期（上次 2026-08-12） |
| gfpgan-gh | S | json | 未到期（上次 2026-08-12） |
| codeformer-gh | S | json | 未到期（上次 2026-08-12） |
| oldphoto-gh | S | json | 未到期（上次 2026-08-12） |
| controlnet-gh | S | json | 未到期（上次 2026-08-12） |
| ipadapter-gh | S | json | 未到期（上次 2026-08-12） |
| instantid-gh | S | json | 未到期（上次 2026-08-12） |
| photomaker-gh | S | json | 未到期（上次 2026-08-12） |
| iclight-gh | S | json | 未到期（上次 2026-08-12） |
| idmvton-gh | S | json | 未到期（上次 2026-08-12） |
| ootd-gh | S | json | 未到期（上次 2026-08-12） |
| catvton-gh | S | json | 未到期（上次 2026-08-12） |
| kritaai-gh | S | json | 未到期（上次 2026-08-12） |
| omnigen-gh | S | json | 未到期（上次 2026-08-12） |
| step1x-gh | S | json | 未到期（上次 2026-08-12） |
| qwenimage-gh | S | json | 未到期（上次 2026-08-12） |
| anytext-gh | S | json | 未到期（上次 2026-08-12） |
| incontextlora-gh | S | json | 未到期（上次 2026-08-12） |
| comictrans-gh | S | json | 未到期（上次 2026-08-12） |
| manganinjia-gh | S | json | 未到期（上次 2026-08-12） |
| starvector-gh | S | json | 未到期（上次 2026-08-12） |
| svgdreamer-gh | S | json | 未到期（上次 2026-08-12） |
| easyphoto-gh | S | json | 未到期（上次 2026-08-12） |
| ipadapter-plus-gh | S | json | 未到期（上次 2026-08-12） |
| controlnet-aux-gh | S | json | 未到期（上次 2026-08-12） |
| ultimate-upscale-gh | S | json | 未到期（上次 2026-08-12） |
| comfy-manager-gh | S | json | 未到期（上次 2026-08-12） |
| comfy-examples-gh | S | json | 未到期（上次 2026-08-12） |
| comfy-templates-gh | S | json | 未到期（上次 2026-08-12） |
| hf-diffusion-class-gh | S | json | 未到期（上次 2026-08-12） |
| fastai-course | S | html | 未到期（上次 2026-08-12） |
| dreamtextures-gh | S | json | 未到期（上次 2026-08-12） |
| char2d-gh | S | json | 未到期（上次 2026-08-12） |
| hf-pixelart-lora | S | json | 未到期（上次 2026-08-12） |
| google-nb-blog | S | html | 未到期（上次 2026-08-26） |
| ms-foundry-blog | B | html | 未到期（上次 2026-08-12） |
| hf-image-org | S | json | 未到期（上次 2026-08-26） |
| mj-updates | S | html | 未到期（上次 2026-08-26） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 321 个字符） |
| hf-t2i | A | json | 未到期（上次 2026-08-27） |
| hf-i2i | A | json | 未到期（上次 2026-08-27） |
| anthropic-models | S | html | 未到期（上次 2026-08-26） |
| deepseek-docs | S | html | 未到期（上次 2026-08-26） |
| xai-docs | S | html | 未到期（上次 2026-08-26） |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| hf-text-org | S | json | 未到期（上次 2026-08-27） |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 未到期（上次 2026-08-26） |
| glm-api | S | html | 未到期（上次 2026-08-26） |
| minimax-platform | S | html | 未到期（上次 2026-08-26） |
| langchain-gh | S | json | 未到期（上次 2026-08-12） |
| langgraph-gh | S | json | 未到期（上次 2026-08-12） |
| llamaindex-gh | S | json | 未到期（上次 2026-08-12） |
| vllm-gh | S | json | 未到期（上次 2026-08-12） |
| llamacpp-gh | S | json | 未到期（上次 2026-08-12） |
| ollama-gh | S | json | 未到期（上次 2026-08-12） |
| ragflow-gh | S | json | 未到期（上次 2026-08-12） |
| dify-gh | S | json | 未到期（上次 2026-08-12） |
| n8n-gh | S | json | 未到期（上次 2026-08-12） |
| openwebui-gh | S | json | 未到期（上次 2026-08-12） |
| autogen-gh | S | json | 未到期（上次 2026-08-12） |
| crewai-gh | S | json | 未到期（上次 2026-08-12） |
| litellm-gh | S | json | 未到期（上次 2026-08-12） |
| transformers-gh | S | json | 未到期（上次 2026-08-12） |
| unsloth-gh | S | json | 未到期（上次 2026-08-12） |
| llamafactory-gh | S | json | 未到期（上次 2026-08-12） |
| aider-gh | S | json | 未到期（上次 2026-08-12） |
| cline-gh | S | json | 未到期（上次 2026-08-12） |
| continue-gh | S | json | 未到期（上次 2026-08-12） |
| openhands-gh | S | json | 未到期（上次 2026-08-12） |
| browseruse-gh | S | json | 未到期（上次 2026-08-12） |
| markitdown-gh | S | json | 未到期（上次 2026-08-12） |
| unstructured-gh | S | json | 未到期（上次 2026-08-12） |
| mineru-gh | S | json | 未到期（上次 2026-08-12） |
| mcpservers-gh | S | json | 未到期（上次 2026-08-12） |
| anthropic-features | S | html | 未到期（上次 2026-08-26） |
| openai-docs | S | html | 未到期（上次 2026-08-26） |
| deepseek-pricing | S | html | 未到期（上次 2026-08-26） |
| bailian-models | S | html | 未到期（上次 2026-08-26） |
| kimi-pricing | S | html | 未到期（上次 2026-08-26） |
| glm-52-doc | S | html | 未到期（上次 2026-08-26） |
| kimi-websearch | S | html | 未到期（上次 2026-08-26） |
| kimi-chat-api | S | html | 未到期（上次 2026-08-26） |
| bailian-websearch | S | html | 未到期（上次 2026-08-26） |
| glm-websearch | S | html | 未到期（上次 2026-08-26） |
| bailian-coder | S | html | 未到期（上次 2026-08-26） |
| ark-models | S | spa | 未到期（上次 2026-08-26） |
| minimax-api-overview | S | spa | 未到期（上次 2026-08-26） |
| claude-models | S | html | 未到期（上次 2026-08-26） |
| openai-caching | S | html | 未到期（上次 2026-08-26） |
| openai-structured | S | html | 未到期（上次 2026-08-26） |
| deepseek-chat-api | S | html | 未到期（上次 2026-08-26） |
| gemini-audio | S | spa | 未到期（上次 2026-08-26） |
| gemini-vision | S | spa | 未到期（上次 2026-08-26） |
| minimax-anthropic-api | S | spa | 未到期（上次 2026-08-26） |
| minimax-openai-api | S | spa | 未到期（上次 2026-08-26） |
| minimax-server-tools | S | spa | 未到期（上次 2026-08-26） |
| minimax-caching | S | spa | 未到期（上次 2026-08-26） |
| minimax-openapi | S | json | 未到期（上次 2026-08-26） |
| gemini-computer-use | S | spa | 未到期（上次 2026-08-26） |
| ark-pricing | S | spa | 未到期（上次 2026-08-26） |
| bailian-models-zh | S | spa | 未到期（上次 2026-08-26） |
| glm-batch | S | html | 未到期（上次 2026-08-26） |
| glm-chat-api | S | html | 未到期（上次 2026-08-26） |
| claude-deprecations | S | html | 未到期（上次 2026-08-26） |
| openai-changelog | S | spa | 未到期（上次 2026-08-26） |
| gemini-changelog | S | spa | 未到期（上次 2026-08-26） |
| xai-release-notes | S | html | 未到期（上次 2026-08-26） |
| aa-llm | B | spa | 未到期（上次 2026-08-26） |
| ideogram-api | S | html | 未到期（上次 2026-08-26） |
| elevenlabs-models | S | html | 未到期（上次 2026-08-26） |
| openai-realtime | S | html | 未到期（上次 2026-08-26） |
| gemini-tts | S | html | 未到期（上次 2026-08-26） |
| elevenlabs-tts | S | html | 未到期（上次 2026-08-26） |
| bailian-omni | S | html | 未到期（上次 2026-08-26） |
| elevenlabs-remix | S | html | 未到期（上次 2026-08-26） |
| openai-tts | S | html | 未到期（上次 2026-08-26） |
| gemini-music | S | html | 未到期（上次 2026-08-26） |
| glm-tts-doc | S | html | 未到期（上次 2026-08-26） |
| glm-tts-clone-doc | S | html | 未到期（上次 2026-08-26） |
| glm-voice-doc | S | html | 未到期（上次 2026-08-26） |
| xai-voice | S | html | 未到期（上次 2026-08-26） |
| hf-sound-org | S | json | 未到期（上次 2026-08-26） |
| kokoro-card | S | html | 未到期（上次 2026-08-26） |
| xai-models | S | html | 未到期（上次 2026-08-26） |
| mistral-models | S | html | 未到期（上次 2026-08-26） |
| mistral-tools | S | html | 未到期（上次 2026-08-26） |
| mistral-vision | S | html | 未到期（上次 2026-08-26） |
| fish-s2pro-card | S | html | 未到期（上次 2026-08-26） |
| cosyvoice-card | S | html | 未到期（上次 2026-08-26） |
| llama-card | S | html | 未到期（上次 2026-08-26） |
| elevenlabs-voices | S | html | 未到期（上次 2026-08-26） |
| wan-t2v-card | S | html | 未到期（上次 2026-08-26） |
| minimax-release | S | spa | 未到期（上次 2026-08-26） |
| s-e2ab-gh | C | json | 未到期（上次 2026-08-26） |
| s-abogen-gh | C | json | 未到期（上次 2026-08-26） |
| s-epub2tts-gh | C | json | 未到期（上次 2026-08-26） |
| s-abcreator-gh | C | json | 未到期（上次 2026-08-26） |
| s-pvt-gh | C | json | 未到期（上次 2026-08-26） |
| s-smartsub-gh | C | json | 未到期（上次 2026-08-26） |
| s-youdub-gh | C | json | 未到期（上次 2026-08-26） |
| s-pipecat-gh | C | json | 未到期（上次 2026-08-26） |
| s-livekit-gh | C | json | 未到期（上次 2026-08-26） |
| s-hfs2s-gh | C | json | 未到期（上次 2026-08-26） |
| s-moshi-gh | C | json | 未到期（上次 2026-08-26） |
| s-acestep15-gh | C | json | 未到期（上次 2026-08-26） |
| s-acestep-gh | C | json | 未到期（上次 2026-08-26） |
| s-yue-gh | C | json | 未到期（上次 2026-08-26） |
| s-audiocraft-gh | C | json | 未到期（上次 2026-08-26） |
| s-gptsovits-gh | C | json | 未到期（上次 2026-08-26） |
| s-rvc-gh | C | json | 未到期（上次 2026-08-26） |
| s-fishspeech-gh | C | json | 未到期（上次 2026-08-26） |
| s-indextts-gh | C | json | 未到期（上次 2026-08-26） |
| s-cosyvoice-gh | C | json | 未到期（上次 2026-08-26） |
| s-f5tts-gh | C | json | 未到期（上次 2026-08-26） |
| s-qwen3omni-gh | C | json | 未到期（上次 2026-08-26） |
| ideogram-overview | A | html | 未到期（上次 2026-08-26） |
| ideogram-v4-remix | A | html | 未到期（上次 2026-08-26） |
| ideogram-v3-inpaint | A | html | 未到期（上次 2026-08-26） |
| ideogram-v3-reframe | A | html | 未到期（上次 2026-08-26） |
| ideogram-v3-generate | A | html | 未到期（上次 2026-08-26） |
| ideogram-edit | A | html | 未到期（上次 2026-08-26） |
| ideogram-upscale | A | html | 未到期（上次 2026-08-26） |
| ideogram-hf | A | html | 未到期（上次 2026-08-26） |
| bailian-qimg3 | A | html | 未到期（上次 2026-08-26） |
| bailian-qimg | A | html | 未到期（上次 2026-08-26） |
| bailian-textgen-zh | A | html | 未到期（上次 2026-08-26） |
| bailian-thinking-zh | A | html | 未到期（上次 2026-08-26） |
| bailian-cache-zh | A | html | 未到期（上次 2026-08-26） |
| bailian-batch-zh | A | html | 未到期（上次 2026-08-26） |
| bailian-websearch-zh | A | html | 未到期（上次 2026-08-26） |
| hf-kokoro | A | json | 未到期（上次 2026-08-12） |
| hf-cosyvoice2 | A | json | 未到期（上次 2026-08-12） |
| hf-glmtts | A | json | 未到期（上次 2026-08-12） |
| hf-glm4voice | A | json | 未到期（上次 2026-08-12） |
| hf-fishspeech15 | A | html | 未到期（上次 2026-08-15） |
| hf-qwen3omni | A | json | 未到期（上次 2026-08-12） |
| hf-qwen-layered | A | html | 未到期（上次 2026-08-15） |
| hf-org-minimax | A | json | 未到期（上次 2026-08-12） |
| hf-org-xai | A | json | 未到期（上次 2026-08-12） |
| hf-org-elevenlabs | A | json | 未到期（上次 2026-08-12） |
| hf-org-openai | A | json | 未到期（上次 2026-08-12） |
| ideogram-layerize | A | html | 未到期（上次 2026-08-12） |
| recraft-endpoints | A | html | 未到期（上次 2026-08-13） |
| recraft-nl-edit | A | html | 未到期（上次 2026-08-13） |
| hunyuan-image-hf | A | json | 未到期（上次 2026-08-13） |
| bfl-flux2-overview | A | html | 未到期（上次 2026-08-13） |
| bfl-flux2-multiref | A | html | 无变化 |
| ark-seedream-api | A | spa | 未到期（上次 2026-08-27） |
| arxiv-fp8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-int8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-qlora | A | html | 未到期（上次 2026-08-13） |
| arxiv-gptq | A | html | 未到期（上次 2026-08-13） |
| arxiv-awq | A | html | 未到期（上次 2026-08-13） |
| arxiv-lora | A | html | 未到期（上次 2026-08-13） |
| hf-gguf-doc | A | html | 未到期（上次 2026-08-13） |
| hf-diffusers-memory | A | html | 未到期（上次 2026-08-13） |
| zimage-gh | A | html | 未到期（上次 2026-08-15） |
| hunyuan-image-gh | A | html | 未到期（上次 2026-08-15） |
| skyreels-gh | A | html | 无变化 |
| bfl-flux3 | A | html | 无变化 |
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
| rodin-api-docs | S | html | 变了 |
| gh-trellis | S | html | 变了 |
| seed3d-page | S | spa | 从未抓过 |
| stability-spar3d | S | html | 变了 |
| tripo-site | S | spa | 抓不到（被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法） |
| rodin-site | S | spa | 变了 |
| tripo-docs-animation | S | spa | 变了 |
| gh-hunyuan3d-buffalo | S | html | 变了 |
| replicate-hunyuan3d-31 | A | spa | 变了 |
| replicate-3d | A | spa | 未到期（上次 2026-08-14） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-08-14） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-08-14） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-08-14） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-08-14） |
| gh-spar3d | S | html | 未到期（上次 2026-08-14） |
| gh-triposg | S | html | 未到期（上次 2026-08-14） |
| gh-instantmesh | S | html | 未到期（上次 2026-08-14） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 变了 |
| hf-ltx-25 | S | html | 变了 |
| meshy-changelog | S | spa | 变了 |
| hf-instantmesh | S | html | 未到期（上次 2026-08-14） |
| hf-apple-sharp | S | html | 未到期（上次 2026-08-14） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-08-14） |
| hf-anysplat | S | html | 未到期（上次 2026-08-14） |
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-08-14） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-08-14） |
| hf-trellis2 | S | html | 未到期（上次 2026-08-14） |
| pixverse-caps | S | html | 无变化 |
| pixverse-v6 | S | html | 无变化 |
| pixverse-fusion | S | html | 无变化 |
| hf-cogvideox | S | html | 未到期（上次 2026-08-15） |
| hf-i2vgen | S | html | 未到期（上次 2026-08-15） |
| hf-longcat-edit | S | html | 未到期（上次 2026-08-15） |
| hf-magi | S | html | 未到期（上次 2026-08-15） |
| heygen-docs | S | spa | 变了 |
| synthesia-docs | S | spa | 无变化 |
| hf-longcat-avatar | S | html | 变了 |
| hf-hunyuan-avatar | S | html | 变了 |
| hf-liveportrait | S | html | 变了 |
| hf-musetalk | S | html | 变了 |
| hf-hallo2 | S | html | 变了 |
| replicate-lipsync | A | spa | 未到期（上次 2026-08-15） |
| comfy-s2v | S | html | 未到期（上次 2026-08-15） |
| heygen-translate | S | html | 未到期（上次 2026-08-15） |
| heygen-live | S | html | 未到期（上次 2026-08-15） |
| heygen-photo | S | html | 未到期（上次 2026-08-15） |
| heygen-training | S | html | 未到期（上次 2026-08-15） |
| heygen-changelog | S | html | 变了 |
| hf-hallo-live | S | html | 变了 |
| hf-longcat-avatar-10 | S | html | 变了 |
| gh-video-retalking | S | html | 未到期（上次 2026-08-15） |
| elevenlabs-changelog | S | html | 变了 |
| hf-glm-voice | S | html | 变了 |
| hf-glm-tts | S | html | 变了 |
| openai-model-tts | S | spa | 变了 |
| openai-model-realtime | S | spa | 无变化 |
| elevenlabs-docs | S | html | 变了 |
| gemini-robotics-er | S | html | 变了 |
| figure-helix | A | html | 变了 |
| pi-pi05-blog | A | html | 无变化 |
| pi-openpi-gh | A | html | 无变化 |
| nvidia-groot-gh | A | html | 无变化 |
| openvla-gh | A | html | 无变化 |
| openvla-repo | A | html | 无变化 |
| hf-robotics | B | json | 变了 |
| lerobot-gh | A | json | 变了 |
| groot-policy-doc | A | html | 无变化 |
| rynnbrain-card | A | html | 无变化 |
| maniskill-gh | B | json | 未到期（上次 2026-08-14） |
| cosmos3-card | S | html | 变了 |
| genie3-blog | A | html | 无变化 |
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
| sci-mattergen-gh | A | html | 变了 |
| sci-mace-gh | A | html | 无变化 |
| sci-gnome-gh | A | html | 无变化 |
| kling-api | A | html | 无变化 |
| seed-25 | A | html | 无变化 |
| veo-doc | A | html | 变了 |
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
| gemini-image-docs | A | html | 变了 |
| openai-image-docs | A | html | 变了 |
| recraft-docs | A | html | 变了 |
| bfl-docs | A | html | 变了 |
| zimage-card | A | html | 变了 |
| hunyuan-image-card | A | html | 变了 |
| smolvla-card | A | html | 变了 |
| molmoact-card | A | html | 变了 |
| hf-whisper | A | html | 变了 |
| hf-sensevoice | A | html | 变了 |
| hf-qwen3-asr | A | html | 变了 |
| minimax-release-notes | A | html | 变了 |
| seed-blog-1_5 | A | html | 无变化 |
| seed-blog-2_0 | A | html | 无变化 |
| ideogram-x | A | html | 变了 |

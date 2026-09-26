# 信息源监视报告 · 2026-09-26

本次检查 100 个到期源（共 429 个）：变化 60 · 首次 0 · 无变化 36 · **抓不到 4**

> 这份报告是给人看的那 20 条待办的来源（§59.3 的负反馈：人每周要看的条目 ≤ 20）。
> 「抓不到」不是失败，是**信息本身** —— 一个长期抓不到的官方源，说明那家厂商没有可 diff 的公开更新入口，
> 而那正好解释了为什么它名下的格子质量最差。

## 抓到了但没内容（比抓不到更危险 —— 它不会喊）

（无）

## 抓不到（要处理）

- **kling-site**（S/spa）Kling AI 官网 — 还是壳：渲染后正文只有 215 个字符
  https://klingai.com/
- **aa-t2i**（A/spa）Artificial Analysis · 文生图竞技场 — 还是壳：渲染后正文只有 310 个字符
  https://artificialanalysis.ai/text-to-image/arena
- **tripo-site**（S/spa）Tripo 官网 — 被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法
  https://www.tripo3d.ai/
- **pi-pi05-blog**（A/html）Physical Intelligence 官方博客 · π₀.₅ — HTTP 429
  https://www.physicalintelligence.company/blog/pi05

## 有变化

- **hf-t2v** Hugging Face · text-to-video 按下载量
  新增 1 条：Jojocodex/minimax-h3-Camera-Motion-lora
- **hf-i2v** Hugging Face · image-to-video 按下载量
  新增 2 条：Wan-AI/Wan2.1-VACE-1.3B-diffusers、Winnougan/Cobijada_Minimax-H3_Hybrid_Pruned_ComfyUI
- **techcrunch-ai** TechCrunch · AI（RSS）
  新增 20 条：Crusoe abandons $1.25B plan to use Boom turbines at AI data centers、Unsecured OpenAI agents posted 53 user images on the internet without the lab&#8217;s knowledge、Meta opens early access program for new Muse features、Anthropic to pay Akamai $11.6 billion over seven years in cloud deal、Mark Wahlberg is coming to TechCrunch Disrupt 2026, and he wants to talk about your work, not his、Ahead of US IPO, British AI neocloud Nscale secures $3.36B in convertible financing、Meta’s Muse just stole the AI spotlight from OpenAI and Anthropic、Some Supabase customers are publicly exposing reams of people&#8217;s data to the web、Astra and Opus just passed Turing&#8217;s other test、Meta is putting its muscle behind Muse as the AI app takes off、Meta’s AI Tamagotchi bet is…working?、For months, OpenAI&#8217;s agent swarms have been attacking online databases to find obscure facts …
- **ltx-hf-org** Hugging Face · Lightricks 组织全部仓库
  新增 1 条：Lightricks/LTX-2.5-22b-LoRA-Slow-Motion-Control
- **hf-t2i** Hugging Face · text-to-image 按下载量
  新增 5 条：krea/Krea-2-Raw、krea/Krea-2-Turbo、molbal/ideogram-4-gguf、unsloth/ERNIE-Image-Turbo-GGUF、unsloth/Qwen-Image-2.1-GGUF
- **hf-i2i** Hugging Face · image-to-image 按下载量
  新增 2 条：Abiray/Qwen-Image-2.1-GGUF、Viggle/Qwen-Image-2.1-viggle-turbo
- **bfl-flux3** Black Forest Labs 官方文档 · FLUX 3 概览
- **hf-hunyuan3d-21** 腾讯混元3D 2.1 · HF 模型卡
- **meshy-docs-api** Meshy · API 文档
- **meshy-site** Meshy 官网
- **gh-trellis** microsoft/TRELLIS 仓库
- **stability-spar3d** Stability · SPAR3D 发布公告
- **gh-hunyuan3d-buffalo** Tencent-Hunyuan/Hunyuan3D-Buffalo1.0 仓库
- **replicate-hunyuan3d-31** Replicate · 腾讯官方账号 tencent/hunyuan-3d-3.1
- **hf-wan-vace** Hugging Face · Wan2.1-VACE-14B 模型卡
- **hf-ltx-25** Hugging Face · LTX-2.5 模型卡
- **meshy-changelog** Meshy · API 更新日志
- **hf-cogvideox** Hugging Face · zai-org/CogVideoX-2b
- **hf-i2vgen** Hugging Face · ali-vilab/i2vgen-xl
- **hf-longcat-edit** Hugging Face · meituan-longcat/LongCat-Image-Edit
- **hf-magi** Hugging Face · sand-ai/MAGI-1 与 MAGI-2-preview
- **heygen-docs** HeyGen · 开发者文档索引
- **synthesia-docs** Synthesia · API 文档
- **hf-longcat-avatar** HF · 美团 LongCat-Video-Avatar-1.5
- **hf-hunyuan-avatar** HF · 腾讯 HunyuanVideo-Avatar
- **hf-liveportrait** HF · 快手 LivePortrait
- **hf-musetalk** HF · 腾讯音乐 MuseTalk
- **replicate-lipsync** Replicate · 搜索「lipsync」
- **comfy-s2v** ComfyUI 官方 · Wan2.2-S2V 音频驱动工作流
- **heygen-translate** HeyGen · Video Translation 文档
- **heygen-changelog** HeyGen · API 更新日志
- **hf-hallo-live** HF · 复旦 Hallo-Live
- **hf-longcat-avatar-10** HF · 美团 LongCat-Video-Avatar（1.0）
- **gh-video-retalking** OpenTalker/video-retalking 仓库
- **elevenlabs-changelog** ElevenLabs · 更新日志索引
- **hf-glm-voice** HF · 智谱 glm-4-voice-9b
- **hf-glm-tts** HF · 智谱 GLM-TTS
- **openai-model-realtime** OpenAI · GPT-Realtime 模型页
- **gemini-robotics-er** Google 官方文档 · Gemini Robotics ER（能力表 / 端点 / 定价）
- **hf-robotics** Hugging Face · robotics 榜（按下载）
  新增 11 条：CMSManhattan/JiRackPrecisionTokenizer、IPEC-COMMUNITY/spatialvla-4b-224-pt、Iwas-6127/act-model-20260920_211516、RLWRLD/RLDX-1-PT、helenlu94/NoveltyAdapt-policies、lerobot/smolvla_vlabench、lerobot/xvla-widowx、mradermacher/JiRackUltra_32b-i1-GGUF、mradermacher/RynnBrain-Plan-30B-A3B-i1-GGUF、remyxai/SpaceThinker-Qwen2.5VL-3B、vrfai/pi05-libero-gguf
- **lerobot-gh** Hugging Face 官方 · LeRobot 仓库
- **genie3-blog** Google DeepMind 官方博客 · Genie 3
- **odyssey-site** Odyssey 官网（产品线自述）
- **sci-mace-gh** MACE 官方仓库
- **seed-25** ByteDance Seed 官方博客 · Seedance 2.5（2026-07-31）
- **sora-api** OpenAI API · sora-2 模型页（⚠️ 同上，403）
- **mm-hf-api** HF API · MiniMaxAI/MiniMax-H3 元数据（许可与文件清单）
- **omni-doc** Google · Gemini Omni Flash 官方文档
- **ltx-hf-23** Hugging Face · Lightricks/LTX-2.3（当前主力）
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
| seed-blog | S | html | 未到期（上次 2026-09-23） |
| seed-models | S | html | 未到期（上次 2026-09-23） |
| kling-api-updates | S | spa | 未到期（上次 2026-09-23） |
| kling-site | S | spa | 抓不到（还是壳：渲染后正文只有 215 个字符） |
| google-video-docs | S | html | 未到期（上次 2026-09-23） |
| deepmind-veo | S | html | 未到期（上次 2026-09-23） |
| vertex-video-ref | S | html | 未到期（上次 2026-09-23） |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 未到期（上次 2026-09-23） |
| wan-hf | S | json | 未到期（上次 2026-09-23） |
| minimax-blog | S | html | 未到期（上次 2026-09-23） |
| minimax-hf | S | json | 未到期（上次 2026-09-23） |
| runway-research | S | html | 未到期（上次 2026-09-23） |
| luma-site | S | html | 未到期（上次 2026-09-23） |
| vidu-changelog | S | spa | 未到期（上次 2026-09-23） |
| vidu-model-map | S | spa | 未到期（上次 2026-09-23） |
| vidu-function-list | S | spa | 未到期（上次 2026-09-23） |
| vidu-site | S | html | 未到期（上次 2026-09-23） |
| vidu-s1-gh | S | json | 未到期（上次 2026-09-23） |
| pika-site | S | html | 未到期（上次 2026-09-23） |
| higgsfield-site | S | html | 未到期（上次 2026-09-23） |
| decart-research | S | html | 未到期（上次 2026-09-23） |
| arxiv-video | S | atom | 未到期（上次 2026-09-23） |
| epoch-notable | A | csv | 未到期（上次 2026-09-23） |
| aa-t2v | A | spa | 未到期（上次 2026-09-23） |
| aa-i2v | A | spa | 未到期（上次 2026-09-23） |
| hf-t2v | A | json | 变了 |
| hf-i2v | A | json | 变了 |
| hf-v2v | A | json | 未到期（上次 2026-09-23） |
| fal-video | S | spa | 未到期（上次 2026-09-24） |
| replicate-t2v | S | html | 未到期（上次 2026-09-23） |
| aiwiki | B | spa | 未到期（上次 2026-09-11） |
| futurepedia | B | html | 未到期（上次 2026-09-11） |
| comfyui-releases | C | json | 未到期（上次 2026-09-23） |
| capcut-templates | C | html | 未到期（上次 2026-09-11） |
| picsart-effects | C | html | 未到期（上次 2026-09-11） |
| runway-changelog | S | spa | 未到期（上次 2026-09-23） |
| runway-models | S | spa | 未到期（上次 2026-09-23） |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| seed-models-hub | S | html | 未到期（上次 2026-09-23） |
| apiyi-models | S | spa | 未到期（上次 2026-09-23） |
| arxiv-worldmodel | S | atom | 未到期（上次 2026-09-23） |
| techcrunch-ai | B | atom | 变了 |
| ltx-gh | S | json | 未到期（上次 2026-09-23） |
| ltx-hf-org | S | json | 变了 |
| decart-site | S | spa | 无变化 |
| picsart-video | C | html | 未到期（上次 2026-09-11） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 未到期（上次 2026-09-23） |
| hailuo-video | S | html | 未到期（上次 2026-09-23） |
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
| comfy-docs | S | spa | 未到期（上次 2026-09-23） |
| h3-card | S | html | 未到期（上次 2026-09-23） |
| hf-lineage | S | json | 未到期（上次 2026-09-23） |
| vacetools-gh | C | json | 未到期（上次 2026-09-23） |
| framepack-gh | S | json | 未到期（上次 2026-09-23） |
| fpwrapper-gh | C | json | 未到期（上次 2026-09-23） |
| latentsync-gh | S | json | 未到期（上次 2026-09-23） |
| lswrapper-gh | C | json | 未到期（上次 2026-09-23） |
| float-gh | C | json | 未到期（上次 2026-09-23） |
| sviflf-gh | C | json | 未到期（上次 2026-09-23） |
| flflatent-gh | C | json | 未到期（上次 2026-09-23） |
| mm-blog | S | html | 未到期（上次 2026-09-11） |
| wanwrapper-gh | C | json | 未到期（上次 2026-09-23） |
| comfy-org-hf | S | json | 未到期（上次 2026-09-23） |
| ltx-comfy-gh | S | json | 未到期（上次 2026-09-23） |
| mpt-gh | C | json | 未到期（上次 2026-09-23） |
| manim-gh | C | json | 未到期（上次 2026-09-23） |
| pyvideotrans-gh | C | json | 未到期（上次 2026-09-23） |
| duix-gh | C | json | 未到期（上次 2026-09-23） |
| fay-gh | C | json | 未到期（上次 2026-09-23） |
| narrato-gh | C | json | 未到期（上次 2026-09-23） |
| zho-wf-gh | C | json | 未到期（上次 2026-09-23） |
| echomimic-gh | C | json | 未到期（上次 2026-09-23） |
| linly-talker-gh | C | json | 未到期（上次 2026-09-23） |
| animate-anything-gh | C | json | 未到期（上次 2026-09-23） |
| huobao-gh | C | json | 未到期（上次 2026-09-23） |
| awesome-vd-gh | C | json | 未到期（上次 2026-09-23） |
| seedream-page | S | html | 未到期（上次 2026-09-23） |
| openai-models | S | html | 未到期（上次 2026-09-24） |
| gemini-models | S | html | 未到期（上次 2026-09-24） |
| google-gemini-blog | S | html | 未到期（上次 2026-09-23） |
| azure-foundry-blog | B | html | 未到期（上次 2026-09-11） |
| recraft-blog | S | html | 未到期（上次 2026-09-11） |
| kolors-gh | S | html | 未到期（上次 2026-09-11） |
| krea-blog | S | html | 未到期（上次 2026-09-23） |
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
| google-nb-blog | S | html | 未到期（上次 2026-09-23） |
| ms-foundry-blog | B | html | 未到期（上次 2026-09-11） |
| mj-updates | S | html | 未到期（上次 2026-09-23） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 310 个字符） |
| hf-t2i | A | json | 变了 |
| hf-i2i | A | json | 变了 |
| anthropic-models | S | html | 未到期（上次 2026-09-24） |
| deepseek-docs | S | html | 未到期（上次 2026-09-24） |
| xai-docs | S | html | 未到期（上次 2026-09-24） |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 未到期（上次 2026-09-23） |
| glm-api | S | html | 未到期（上次 2026-09-23） |
| minimax-platform | S | html | 未到期（上次 2026-09-23） |
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
| anthropic-features | S | html | 未到期（上次 2026-09-24） |
| openai-docs | S | html | 未到期（上次 2026-09-24） |
| deepseek-pricing | S | html | 未到期（上次 2026-09-25） |
| deepseek-updates | S | html | 未到期（上次 2026-09-25） |
| bailian-models | S | html | 未到期（上次 2026-09-23） |
| kimi-pricing | S | html | 未到期（上次 2026-09-23） |
| glm-52-doc | S | html | 未到期（上次 2026-09-23） |
| kimi-websearch | S | html | 未到期（上次 2026-09-23） |
| bailian-websearch | S | html | 未到期（上次 2026-09-23） |
| glm-websearch | S | html | 未到期（上次 2026-09-23） |
| bailian-coder | S | html | 未到期（上次 2026-09-23） |
| ark-models | S | spa | 未到期（上次 2026-09-23） |
| minimax-api-overview | S | spa | 未到期（上次 2026-09-23） |
| openai-caching | S | html | 未到期（上次 2026-09-24） |
| openai-structured | S | html | 未到期（上次 2026-09-24） |
| deepseek-chat-api | S | html | 未到期（上次 2026-09-24） |
| gemini-audio | S | spa | 未到期（上次 2026-09-24） |
| gemini-vision | S | spa | 未到期（上次 2026-09-24） |
| minimax-anthropic-api | S | spa | 未到期（上次 2026-09-23） |
| minimax-openai-api | S | spa | 未到期（上次 2026-09-23） |
| minimax-server-tools | S | spa | 未到期（上次 2026-09-23） |
| minimax-caching | S | spa | 未到期（上次 2026-09-23） |
| minimax-openapi | S | json | 未到期（上次 2026-09-23） |
| gemini-computer-use | S | spa | 未到期（上次 2026-09-24） |
| ark-pricing | S | spa | 未到期（上次 2026-09-23） |
| bailian-models-zh | S | spa | 未到期（上次 2026-09-23） |
| glm-batch | S | html | 未到期（上次 2026-09-23） |
| glm-chat-api | S | html | 未到期（上次 2026-09-23） |
| claude-deprecations | S | html | 未到期（上次 2026-09-24） |
| openai-changelog | S | spa | 未到期（上次 2026-09-24） |
| gemini-changelog | S | spa | 未到期（上次 2026-09-24） |
| xai-release-notes | S | html | 未到期（上次 2026-09-24） |
| aa-llm | B | spa | 未到期（上次 2026-09-23） |
| ideogram-api | S | html | 未到期（上次 2026-09-23） |
| elevenlabs-models | S | html | 未到期（上次 2026-09-23） |
| openai-realtime | S | html | 未到期（上次 2026-09-23） |
| gemini-tts | S | html | 未到期（上次 2026-09-23） |
| elevenlabs-tts | S | html | 未到期（上次 2026-09-23） |
| bailian-omni | S | html | 未到期（上次 2026-09-24） |
| elevenlabs-remix | S | html | 未到期（上次 2026-09-23） |
| openai-tts | S | html | 未到期（上次 2026-09-23） |
| gemini-music | S | html | 未到期（上次 2026-09-24） |
| glm-tts-doc | S | html | 未到期（上次 2026-09-23） |
| glm-tts-clone-doc | S | html | 未到期（上次 2026-09-23） |
| glm-voice-doc | S | html | 未到期（上次 2026-09-23） |
| xai-voice | S | html | 未到期（上次 2026-09-23） |
| kokoro-card | S | html | 未到期（上次 2026-09-23） |
| mistral-models | S | html | 未到期（上次 2026-09-23） |
| mistral-tools | S | html | 未到期（上次 2026-09-23） |
| mistral-vision | S | html | 未到期（上次 2026-09-23） |
| fish-s2pro-card | S | html | 未到期（上次 2026-09-23） |
| cosyvoice-card | S | html | 未到期（上次 2026-09-23） |
| llama-card | S | html | 未到期（上次 2026-09-23） |
| elevenlabs-voices | S | html | 未到期（上次 2026-09-23） |
| wan-t2v-card | S | html | 未到期（上次 2026-09-23） |
| minimax-release | S | spa | 未到期（上次 2026-09-23） |
| s-e2ab-gh | C | json | 未到期（上次 2026-09-23） |
| s-abogen-gh | C | json | 未到期（上次 2026-09-23） |
| s-epub2tts-gh | C | json | 未到期（上次 2026-09-23） |
| s-abcreator-gh | C | json | 未到期（上次 2026-09-23） |
| s-smartsub-gh | C | json | 未到期（上次 2026-09-23） |
| s-youdub-gh | C | json | 未到期（上次 2026-09-23） |
| s-pipecat-gh | C | json | 未到期（上次 2026-09-23） |
| s-livekit-gh | C | json | 未到期（上次 2026-09-23） |
| s-hfs2s-gh | C | json | 未到期（上次 2026-09-23） |
| s-moshi-gh | C | json | 未到期（上次 2026-09-23） |
| s-acestep15-gh | C | json | 未到期（上次 2026-09-23） |
| s-acestep-gh | C | json | 未到期（上次 2026-09-23） |
| s-yue-gh | C | json | 未到期（上次 2026-09-23） |
| s-audiocraft-gh | C | json | 未到期（上次 2026-09-23） |
| s-gptsovits-gh | C | json | 未到期（上次 2026-09-23） |
| s-rvc-gh | C | json | 未到期（上次 2026-09-23） |
| s-fishspeech-gh | C | json | 未到期（上次 2026-09-23） |
| s-indextts-gh | C | json | 未到期（上次 2026-09-23） |
| s-cosyvoice-gh | C | json | 未到期（上次 2026-09-23） |
| s-f5tts-gh | C | json | 未到期（上次 2026-09-23） |
| s-qwen3omni-gh | C | json | 未到期（上次 2026-09-23） |
| ideogram-overview | A | html | 未到期（上次 2026-09-23） |
| ideogram-v4-remix | A | html | 未到期（上次 2026-09-23） |
| ideogram-v3-inpaint | A | html | 未到期（上次 2026-09-23） |
| ideogram-v3-reframe | A | html | 未到期（上次 2026-09-23） |
| ideogram-v3-generate | A | html | 未到期（上次 2026-09-23） |
| ideogram-edit | A | html | 未到期（上次 2026-09-23） |
| ideogram-upscale | A | html | 未到期（上次 2026-09-23） |
| ideogram-hf | A | html | 未到期（上次 2026-09-23） |
| bailian-qimg3 | A | html | 未到期（上次 2026-09-23） |
| bailian-qimg | A | html | 未到期（上次 2026-09-23） |
| bailian-textgen-zh | A | html | 未到期（上次 2026-09-23） |
| bailian-thinking-zh | A | html | 未到期（上次 2026-09-23） |
| bailian-cache-zh | A | html | 未到期（上次 2026-09-23） |
| bailian-batch-zh | A | html | 未到期（上次 2026-09-23） |
| bailian-websearch-zh | A | html | 未到期（上次 2026-09-24） |
| hf-kokoro | A | json | 未到期（上次 2026-09-11） |
| hf-cosyvoice2 | A | json | 未到期（上次 2026-09-11） |
| hf-glmtts | A | json | 未到期（上次 2026-09-11） |
| hf-glm4voice | A | json | 未到期（上次 2026-09-11） |
| hf-fishspeech15 | A | html | 未到期（上次 2026-09-14） |
| hf-qwen3omni | A | json | 未到期（上次 2026-09-11） |
| hf-qwen-layered | A | html | 未到期（上次 2026-09-14） |
| hf-org-minimax | A | json | 未到期（上次 2026-09-11） |
| hf-org-xai | A | json | 未到期（上次 2026-09-11） |
| hf-org-elevenlabs | A | json | 未到期（上次 2026-09-11） |
| hf-org-openai | A | json | 未到期（上次 2026-09-11） |
| ideogram-layerize | A | html | 未到期（上次 2026-09-11） |
| recraft-endpoints | A | html | 未到期（上次 2026-09-24） |
| recraft-nl-edit | A | html | 未到期（上次 2026-09-24） |
| hunyuan-image-hf | A | json | 未到期（上次 2026-09-24） |
| bfl-flux2-overview | A | html | 未到期（上次 2026-09-24） |
| bfl-flux2-multiref | A | html | 无变化 |
| ark-seedream-api | A | spa | 未到期（上次 2026-09-24） |
| arxiv-fp8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-int8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-qlora | A | html | 未到期（上次 2026-08-13） |
| arxiv-gptq | A | html | 未到期（上次 2026-08-13） |
| arxiv-awq | A | html | 未到期（上次 2026-08-13） |
| arxiv-lora | A | html | 未到期（上次 2026-08-13） |
| hf-gguf-doc | A | html | 未到期（上次 2026-08-13） |
| hf-diffusers-memory | A | html | 未到期（上次 2026-08-13） |
| zimage-gh | A | html | 无变化 |
| hunyuan-image-gh | A | html | 无变化 |
| skyreels-gh | A | html | 无变化 |
| bfl-flux3 | A | html | 变了 |
| anthropic-privacy | A | html | 未到期（上次 2026-08-14） |
| stability-terms | A | html | 未到期（上次 2026-08-14） |
| gh-llm-universe | C | json | 未到期（上次 2026-09-13） |
| gh-all-in-rag | C | json | 未到期（上次 2026-09-13） |
| gh-handy-multi-agent | C | json | 未到期（上次 2026-09-13） |
| gh-llm-action | C | json | 未到期（上次 2026-09-13） |
| gh-self-llm | C | json | 未到期（上次 2026-09-13） |
| gh-langchain-zh | C | json | 未到期（上次 2026-09-13） |
| gh-llamafactory | C | json | 未到期（上次 2026-09-13） |
| gh-chattts-cn | C | json | 未到期（上次 2026-09-13） |
| gh-comfyui | C | json | 未到期（上次 2026-09-13） |
| gh-sdbook | C | json | 未到期（上次 2026-09-13） |
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
| rodin-site | S | spa | 无变化 |
| tripo-docs-animation | S | spa | 无变化 |
| gh-hunyuan3d-buffalo | S | html | 变了 |
| replicate-hunyuan3d-31 | A | spa | 变了 |
| replicate-3d | A | spa | 未到期（上次 2026-09-25） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-09-25） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-09-25） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-09-25） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-09-25） |
| gh-spar3d | S | html | 未到期（上次 2026-09-25） |
| gh-triposg | S | html | 未到期（上次 2026-09-25） |
| gh-instantmesh | S | html | 未到期（上次 2026-09-25） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 变了 |
| hf-ltx-25 | S | html | 变了 |
| meshy-changelog | S | spa | 变了 |
| hf-instantmesh | S | html | 未到期（上次 2026-09-25） |
| hf-apple-sharp | S | html | 未到期（上次 2026-09-25） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-09-25） |
| hf-anysplat | S | html | 未到期（上次 2026-09-25） |
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-09-13） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-09-13） |
| hf-trellis2 | S | html | 未到期（上次 2026-09-25） |
| pixverse-caps | S | html | 无变化 |
| pixverse-v6 | S | html | 无变化 |
| pixverse-fusion | S | html | 无变化 |
| hf-cogvideox | S | html | 变了 |
| hf-i2vgen | S | html | 变了 |
| hf-longcat-edit | S | html | 变了 |
| hf-magi | S | html | 变了 |
| heygen-docs | S | spa | 变了 |
| synthesia-docs | S | spa | 变了 |
| hf-longcat-avatar | S | html | 变了 |
| hf-hunyuan-avatar | S | html | 变了 |
| hf-liveportrait | S | html | 变了 |
| hf-musetalk | S | html | 变了 |
| hf-hallo2 | S | html | 无变化 |
| replicate-lipsync | A | spa | 变了 |
| comfy-s2v | S | html | 变了 |
| heygen-translate | S | html | 变了 |
| heygen-live | S | html | 无变化 |
| heygen-photo | S | html | 无变化 |
| heygen-training | S | html | 无变化 |
| heygen-changelog | S | html | 变了 |
| hf-hallo-live | S | html | 变了 |
| hf-longcat-avatar-10 | S | html | 变了 |
| gh-video-retalking | S | html | 变了 |
| elevenlabs-changelog | S | html | 变了 |
| hf-glm-voice | S | html | 变了 |
| hf-glm-tts | S | html | 变了 |
| openai-model-tts | S | spa | 无变化 |
| openai-model-realtime | S | spa | 变了 |
| elevenlabs-docs | S | html | 未到期（上次 2026-09-24） |
| gemini-robotics-er | S | html | 变了 |
| figure-helix | A | html | 无变化 |
| pi-pi05-blog | A | html | 抓不到（HTTP 429） |
| pi-openpi-gh | A | html | 无变化 |
| nvidia-groot-gh | A | html | 无变化 |
| openvla-gh | A | html | 无变化 |
| openvla-repo | A | html | 无变化 |
| hf-robotics | B | json | 变了 |
| lerobot-gh | A | json | 变了 |
| groot-policy-doc | A | html | 无变化 |
| rynnbrain-card | A | html | 无变化 |
| maniskill-gh | B | json | 未到期（上次 2026-09-13） |
| cosmos3-card | S | html | 无变化 |
| genie3-blog | A | html | 变了 |
| odyssey-site | A | html | 变了 |
| worldlabs-marble | A | html | 无变化 |
| matrixgame-card | A | html | 无变化 |
| hunyuanworld-gh | A | html | 无变化 |
| wham-card | A | html | 未到期（上次 2026-09-13） |
| vjepa2-blog | A | html | 未到期（上次 2026-09-13） |
| vjepa2-card | B | html | 未到期（上次 2026-09-13） |
| sci-boltz-gh | A | html | 无变化 |
| sci-af3-blog | A | html | 未到期（上次 2026-09-14） |
| sci-esm2-card | B | html | 未到期（上次 2026-09-14） |
| sci-wn-gh | A | html | 无变化 |
| sci-aurora-gh | A | html | 无变化 |
| sci-neuralgcm-gh | A | html | 无变化 |
| sci-mattergen-gh | A | html | 无变化 |
| sci-mace-gh | A | html | 变了 |
| sci-gnome-gh | A | html | 无变化 |
| seed-25 | A | html | 变了 |
| veo-doc | A | html | 未到期（上次 2026-09-24） |
| sora-api | A | html | 变了 |
| wan-site | A | html | 无变化 |
| mm-hf-api | A | json | 变了 |
| vidu-s1-paper | A | html | 未到期（上次 2026-08-15） |
| omni-doc | A | html | 变了 |
| ltx-hf-23 | A | html | 变了 |
| gemini-image-docs | A | html | 未到期（上次 2026-09-24） |
| openai-image-docs | A | html | 未到期（上次 2026-09-24） |
| recraft-docs | A | html | 变了 |
| bfl-docs | A | html | 变了 |
| zimage-card | A | html | 变了 |
| hunyuan-image-card | A | html | 变了 |
| smolvla-card | A | html | 变了 |
| molmoact-card | A | html | 变了 |
| hf-whisper | A | html | 未到期（上次 2026-09-24） |
| hf-sensevoice | A | html | 变了 |
| hf-qwen3-asr | A | html | 变了 |
| minimax-release-notes | A | html | 无变化 |
| seed-blog-1_5 | A | html | 变了 |
| seed-blog-2_0 | A | html | 变了 |
| ideogram-x | A | html | 变了 |
| hf-funcineforge | S | html | 未到期（上次 2026-09-20） |
| hf-org | S | json | 未到期（上次 2026-09-25） |
| gh-gptsovits-cn | C | json | 未到期（上次 2026-09-20） |

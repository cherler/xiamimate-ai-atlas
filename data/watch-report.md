# 信息源监视报告 · 2026-11-07

本次检查 123 个到期源（共 467 个）：变化 71 · 首次 0 · 无变化 46 · **抓不到 6**

> 这份报告是给人看的那 20 条待办的来源（§59.3 的负反馈：人每周要看的条目 ≤ 20）。
> 「抓不到」不是失败，是**信息本身** —— 一个长期抓不到的官方源，说明那家厂商没有可 diff 的公开更新入口，
> 而那正好解释了为什么它名下的格子质量最差。

## 抓到了但没内容（比抓不到更危险 —— 它不会喊）

（无）

## 抓不到（要处理）

- **picsart-effects**（C/html）Picsart Effects — HTTP 404
  https://picsart.com/ai-video-effects/
- **aa-t2i**（A/spa）Artificial Analysis · 文生图竞技场 — 还是壳：渲染后正文只有 281 个字符
  https://artificialanalysis.ai/text-to-image/arena
- **tripo-site**（S/spa）Tripo 官网 — 被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法
  https://www.tripo3d.ai/
- **pixverse-caps**（S/html）PixVerse · 官方能力矩阵 — HTTP 404
  https://docs.platform.pixverse.ai/capability-matrix-2144288m0.md
- **pixverse-v6**（S/html）PixVerse · V6 模型文档 — HTTP 404
  https://docs.platform.pixverse.ai/v6-2056814m0.md
- **pixverse-fusion**（S/html）PixVerse · Fusion（多参考图生视频）文档 — HTTP 404
  https://docs.platform.pixverse.ai/fusionreference-to-video-1339253m0.md

## 有变化

- **arxiv-video** arXiv · 视频生成新论文
  新增 40 条：EgoGeneralist: Unifying Egocentric Action-Video Tasks through Video-Native Modeling、ManimCode: Learning Visual Self-Correction for Educational Animation、La-JEPA: Compact Robot Policies with Latent World Modeling、Training-Free Predictive Spatio-Temporal Token Pruning for Few-Step Autoregressive Video Diffusion、ArtiVidRM: Verifiable Artifact-as-Rubric Reward Modeling for Explicit Quality Articulation in Video Generation、Householder Motion Embedding: Noise Modulation for Motion-Controllable Video Generation、VA-TDM: A Unified View for Improving Few-Step Diffusion Models by Velocity Adversarial Distillation、NextGAN: Towards Simple and Scalable GAN Training for Image and Video Generation、ReactWorld: Structuring Interaction Responses for Embodied Video Generation、Chronos: Sequential Identity-Preserving Video Generation by Temporal Anchoring、DualCast: Dual-Image Conditioned Diffusion Transformers for Digital Human E-Commerce Video Generation、PyRUA-DataFarm: LLM Agent as a Cost-Efficient Teleoperator for Real-Ready Robot Data …
- **hf-t2v** Hugging Face · text-to-video 按下载量
  新增 4 条：ChrisColeTech/minimax-h3-turbo-GGUF、LokkenJP/TenEros_Max_optimized_learned、alibaba-pai/Wan2.2-VACE-Fun-A14B、unsloth/LTX-2.5-FP8
- **hf-i2v** Hugging Face · image-to-video 按下载量
  新增 3 条：ChrisColeTech/minimax-h3-turbo-GGUF、LokkenJP/TenEros_Max_optimized_learned、Pika-Labs/Pika-H3-Flex-Turbo-LoRA
- **techcrunch-ai** TechCrunch · AI（RSS）
  新增 20 条：OpenAI reportedly raises an additional $11 billion at a $1.25 trillion valuation、Hundreds of Artex AI hacking tools found publicly exposed to the web、Meta introduces Spaces, a new way to collaborate with your Muse agent、How a Blue Wave midterm might reshape the AI industry、After the midterms, is the AI industry in for a rough two years?、Ramp data shows AI spending stalling just as Anthropic nears its IPO、After blocking Muse, Amazon now lets users text Alexa to help them shop、Underdog shows off a 32MB speech model in new demo、Physicl raises $10M to make the digital world real enough for robots、Palo Alto Networks in talks to buy AI agent security startup Clutch for $500M、Airbnb says it&#8217;s launching an AI travel agent in the first half of 2027、Meta says US users can now video chat with their Muse AI avatar …
- **hf-t2i** Hugging Face · text-to-image 按下载量
  新增 2 条：PrunaAI/P-H3-Image-Comfy、leejet/Z-Image-Turbo-GGUF
- **hf-i2i** Hugging Face · image-to-image 按下载量
  新增 2 条：PrunaAI/P-H3-Image-Comfy、ml-resources/flux-3-image-klein
- **elevenlabs-models** ElevenLabs · Models
- **bfl-flux3** Black Forest Labs 官方文档 · FLUX 3 概览
- **hf-hunyuan3d-21** 腾讯混元3D 2.1 · HF 模型卡
- **tripo-docs-generation** Tripo · Generation 端点文档
- **meshy-docs-api** Meshy · API 文档
- **meshy-site** Meshy 官网
- **gh-trellis** microsoft/TRELLIS 仓库
- **stability-spar3d** Stability · SPAR3D 发布公告
- **tripo-docs-animation** Tripo · Animation 端点文档
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
- **hf-hallo2** HF · 复旦 Hallo2
- **replicate-lipsync** Replicate · 搜索「lipsync」
- **comfy-s2v** ComfyUI 官方 · Wan2.2-S2V 音频驱动工作流
- **heygen-translate** HeyGen · Video Translation 文档
- **heygen-live** HeyGen · Live Avatar 文档
- **heygen-photo** HeyGen · Photo Avatar 文档
- **heygen-training** HeyGen · 培训与入职视频（Cookbook）
- **heygen-changelog** HeyGen · API 更新日志
- **hf-hallo-live** HF · 复旦 Hallo-Live
- **hf-longcat-avatar-10** HF · 美团 LongCat-Video-Avatar（1.0）
- **gh-video-retalking** OpenTalker/video-retalking 仓库
- **elevenlabs-changelog** ElevenLabs · 更新日志索引
- **hf-glm-voice** HF · 智谱 glm-4-voice-9b
- **hf-glm-tts** HF · 智谱 GLM-TTS
- **openai-model-realtime** OpenAI · GPT-Realtime 模型页
- **gemini-robotics-er** Google 官方文档 · Gemini Robotics ER（能力表 / 端点 / 定价）
- **nvidia-groot-gh** NVIDIA/Isaac-GR00T 官方仓库
- **hf-robotics** Hugging Face · robotics 榜（按下载）
  新增 8 条：allenai/GraspMolmo、lerobot/smolvla_robocasa、lerobot/wall-oss-0.5、mradermacher/Capek0.5-35B-A3B-GGUF、mradermacher/Capek0.5-35B-A3B-i1-GGUF、nvidia/Metatron-v1、sii-research/tau-0-wm、vrfai/openvla-oft-libero-gguf
- **lerobot-gh** Hugging Face 官方 · LeRobot 仓库
- **genie3-blog** Google DeepMind 官方博客 · Genie 3
- **odyssey-site** Odyssey 官网（产品线自述）
- **worldlabs-marble** World Labs 官方博客 · Marble
- **matrixgame-card** 昆仑万维官方 · Matrix-Game 3.0 模型卡
- **sora-api** OpenAI API · sora-2 模型页（⚠️ 同上，403）
- **mm-hf-api** HF API · MiniMaxAI/MiniMax-H3 元数据（许可与文件清单）
- **ltx-hf-23** Hugging Face · Lightricks/LTX-2.3（当前主力）
- **recraft-docs** Recraft · 官方文档
- **bfl-docs** Black Forest Labs · 官方文档索引
- **zimage-card** Z-Image 官方模型卡（Hugging Face）
- **hunyuan-image-card** HunyuanImage-3.0 官方模型卡（Hugging Face）
- **smolvla-card** Hugging Face 官方 · SmolVLA 模型卡
- **molmoact-card** Ai2 官方 · MolmoAct2 模型卡
- **hf-sensevoice** 阿里 FunAudioLLM 官方 · SenseVoiceSmall 模型卡
- **hf-qwen3-asr** 阿里官方 · Qwen3-ASR 模型卡
- **ideogram-x** Ideogram 官方账号发布公告（@ideogram_ai）
- **gemini-nb21** Google · Nano Banana 2.1 模型卡
- **rodin-gen25-api** Rodin Gen-2.5 API 参数
- **rodin-bang-api** Rodin Bang 部件分割端点
- **card-minimaxai-minimax-m2** MiniMaxAI/MiniMax-M2 官方模型卡
- **card-minimaxai-minimax-m2-5** MiniMaxAI/MiniMax-M2.5 官方模型卡
- **card-minimaxai-minimax-m3** MiniMaxAI/MiniMax-M3 官方模型卡

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 未到期（上次 2026-11-04） |
| seed-models | S | html | 未到期（上次 2026-11-04） |
| kling-api-updates | S | spa | 未到期（上次 2026-11-04） |
| kling-site | S | spa | 无变化 |
| google-video-docs | S | html | 未到期（上次 2026-11-04） |
| deepmind-veo | S | html | 未到期（上次 2026-11-04） |
| vertex-video-ref | S | html | 未到期（上次 2026-11-04） |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 未到期（上次 2026-11-04） |
| wan-hf | S | json | 未到期（上次 2026-11-04） |
| minimax-blog | S | html | 未到期（上次 2026-11-04） |
| minimax-hf | S | json | 未到期（上次 2026-11-04） |
| runway-research | S | html | 未到期（上次 2026-11-04） |
| luma-site | S | html | 未到期（上次 2026-11-04） |
| vidu-changelog | S | spa | 未到期（上次 2026-11-02） |
| vidu-model-map | S | spa | 未到期（上次 2026-11-02） |
| vidu-function-list | S | spa | 未到期（上次 2026-11-02） |
| vidu-site | S | html | 未到期（上次 2026-11-04） |
| vidu-s1-gh | S | json | 未到期（上次 2026-11-04） |
| pika-site | S | html | 未到期（上次 2026-11-05） |
| higgsfield-site | S | html | 未到期（上次 2026-11-04） |
| decart-research | S | html | 未到期（上次 2026-11-04） |
| arxiv-video | S | atom | 变了 |
| epoch-notable | A | csv | 未到期（上次 2026-11-04） |
| aa-t2v | A | spa | 未到期（上次 2026-11-04） |
| aa-i2v | A | spa | 未到期（上次 2026-11-04） |
| hf-t2v | A | json | 变了 |
| hf-i2v | A | json | 变了 |
| hf-v2v | A | json | 未到期（上次 2026-11-04） |
| fal-video | S | spa | 未到期（上次 2026-11-05） |
| replicate-t2v | S | html | 未到期（上次 2026-11-04） |
| aiwiki | B | spa | 未到期（上次 2026-10-11） |
| futurepedia | B | html | 未到期（上次 2026-10-11） |
| comfyui-releases | C | json | 未到期（上次 2026-11-04） |
| capcut-templates | C | html | 未到期（上次 2026-10-11） |
| picsart-effects | C | html | 抓不到（HTTP 404） |
| runway-changelog | S | spa | 未到期（上次 2026-11-04） |
| runway-models | S | spa | 未到期（上次 2026-11-04） |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| seed-models-hub | S | html | 未到期（上次 2026-11-04） |
| apiyi-models | S | spa | 未到期（上次 2026-11-04） |
| arxiv-worldmodel | S | atom | 未到期（上次 2026-11-05） |
| techcrunch-ai | B | atom | 变了 |
| ltx-gh | S | json | 未到期（上次 2026-11-04） |
| ltx-hf-org | S | json | 无变化 |
| decart-site | S | spa | 未到期（上次 2026-11-01） |
| picsart-video | C | html | 未到期（上次 2026-10-24） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 未到期（上次 2026-11-04） |
| hailuo-video | S | html | 未到期（上次 2026-11-04） |
| volcengine-ark-price | S | spa | 未到期（上次 2026-10-11） |
| minimax-price | S | spa | 未到期（上次 2026-10-11） |
| google-ai-price | S | html | 未到期（上次 2026-10-11） |
| bailian-price | S | spa | 未到期（上次 2026-10-11） |
| runway-price | S | spa | 未到期（上次 2026-10-11） |
| kling-price | S | spa | 未到期（上次 2026-10-11） |
| vidu-price | S | spa | 未到期（上次 2026-10-11） |
| fal-ltx-price | S | spa | 未到期（上次 2026-10-11） |
| replicate-price | A | html | 未到期（上次 2026-10-11） |
| hf-course | S | html | 未到期（上次 2026-08-12） |
| comfy-docs | S | spa | 未到期（上次 2026-11-04） |
| h3-card | S | html | 未到期（上次 2026-11-04） |
| hf-lineage | S | json | 未到期（上次 2026-11-04） |
| vacetools-gh | C | json | 未到期（上次 2026-11-04） |
| framepack-gh | S | json | 未到期（上次 2026-11-04） |
| fpwrapper-gh | C | json | 未到期（上次 2026-11-04） |
| latentsync-gh | S | json | 未到期（上次 2026-11-04） |
| lswrapper-gh | C | json | 未到期（上次 2026-11-04） |
| float-gh | C | json | 未到期（上次 2026-11-04） |
| sviflf-gh | C | json | 未到期（上次 2026-11-04） |
| flflatent-gh | C | json | 未到期（上次 2026-11-04） |
| mm-blog | S | html | 未到期（上次 2026-10-11） |
| wanwrapper-gh | C | json | 未到期（上次 2026-11-04） |
| comfy-org-hf | S | json | 未到期（上次 2026-11-04） |
| ltx-comfy-gh | S | json | 未到期（上次 2026-11-04） |
| mpt-gh | C | json | 未到期（上次 2026-11-04） |
| manim-gh | C | json | 未到期（上次 2026-11-04） |
| pyvideotrans-gh | C | json | 未到期（上次 2026-11-04） |
| duix-gh | C | json | 未到期（上次 2026-11-04） |
| fay-gh | C | json | 未到期（上次 2026-11-04） |
| narrato-gh | C | json | 未到期（上次 2026-11-04） |
| zho-wf-gh | C | json | 未到期（上次 2026-11-04） |
| echomimic-gh | C | json | 未到期（上次 2026-11-04） |
| linly-talker-gh | C | json | 未到期（上次 2026-11-04） |
| animate-anything-gh | C | json | 未到期（上次 2026-11-04） |
| huobao-gh | C | json | 未到期（上次 2026-11-04） |
| awesome-vd-gh | C | json | 未到期（上次 2026-11-04） |
| seedream-page | S | html | 未到期（上次 2026-11-04） |
| openai-models | S | html | 未到期（上次 2026-11-05） |
| gemini-models | S | spa | 未到期（上次 2026-11-02） |
| google-gemini-blog | S | html | 未到期（上次 2026-11-04） |
| azure-foundry-blog | B | html | 未到期（上次 2026-10-11） |
| recraft-blog | S | html | 未到期（上次 2026-10-11） |
| kolors-gh | S | html | 未到期（上次 2026-10-11） |
| krea-blog | S | html | 未到期（上次 2026-11-04） |
| wiki-midjourney | B | html | 未到期（上次 2026-10-11） |
| comfyui-gh | S | json | 未到期（上次 2026-10-11） |
| sdwebui-gh | S | json | 未到期（上次 2026-10-11） |
| fooocus-gh | S | json | 未到期（上次 2026-10-11） |
| invokeai-gh | S | json | 未到期（上次 2026-10-11） |
| iopaint-gh | S | json | 未到期（上次 2026-10-11） |
| rembg-gh | S | json | 未到期（上次 2026-10-11） |
| realesrgan-gh | S | json | 未到期（上次 2026-10-11） |
| gfpgan-gh | S | json | 未到期（上次 2026-10-11） |
| codeformer-gh | S | json | 未到期（上次 2026-10-11） |
| oldphoto-gh | S | json | 未到期（上次 2026-10-11） |
| controlnet-gh | S | json | 未到期（上次 2026-10-11） |
| ipadapter-gh | S | json | 未到期（上次 2026-10-11） |
| instantid-gh | S | json | 未到期（上次 2026-10-11） |
| photomaker-gh | S | json | 未到期（上次 2026-10-11） |
| iclight-gh | S | json | 未到期（上次 2026-10-11） |
| idmvton-gh | S | json | 未到期（上次 2026-10-11） |
| ootd-gh | S | json | 未到期（上次 2026-10-11） |
| catvton-gh | S | json | 未到期（上次 2026-10-11） |
| kritaai-gh | S | json | 未到期（上次 2026-10-11） |
| omnigen-gh | S | json | 未到期（上次 2026-10-11） |
| step1x-gh | S | json | 未到期（上次 2026-10-11） |
| qwenimage-gh | S | json | 未到期（上次 2026-10-11） |
| anytext-gh | S | json | 未到期（上次 2026-10-11） |
| incontextlora-gh | S | json | 未到期（上次 2026-10-11） |
| comictrans-gh | S | json | 未到期（上次 2026-10-11） |
| manganinjia-gh | S | json | 未到期（上次 2026-10-11） |
| starvector-gh | S | json | 未到期（上次 2026-10-11） |
| svgdreamer-gh | S | json | 未到期（上次 2026-10-11） |
| easyphoto-gh | S | json | 未到期（上次 2026-10-11） |
| ipadapter-plus-gh | S | json | 未到期（上次 2026-10-11） |
| controlnet-aux-gh | S | json | 未到期（上次 2026-10-11） |
| ultimate-upscale-gh | S | json | 未到期（上次 2026-10-11） |
| comfy-manager-gh | S | json | 未到期（上次 2026-10-11） |
| comfy-examples-gh | S | json | 未到期（上次 2026-10-11） |
| comfy-templates-gh | S | json | 未到期（上次 2026-10-11） |
| hf-diffusion-class-gh | S | json | 未到期（上次 2026-10-11） |
| fastai-course | S | html | 未到期（上次 2026-08-12） |
| dreamtextures-gh | S | json | 未到期（上次 2026-10-11） |
| char2d-gh | S | json | 未到期（上次 2026-10-11） |
| hf-pixelart-lora | S | json | 未到期（上次 2026-10-11） |
| google-nb-blog | S | html | 未到期（上次 2026-11-05） |
| ms-foundry-blog | B | html | 未到期（上次 2026-10-11） |
| mj-updates | S | html | 未到期（上次 2026-11-04） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 281 个字符） |
| hf-t2i | A | json | 变了 |
| hf-i2i | A | json | 变了 |
| anthropic-models | S | html | 未到期（上次 2026-11-05） |
| deepseek-docs | S | html | 未到期（上次 2026-11-05） |
| xai-docs | S | html | 未到期（上次 2026-11-05） |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 未到期（上次 2026-11-04） |
| glm-api | S | html | 未到期（上次 2026-11-04） |
| minimax-platform | S | html | 未到期（上次 2026-11-04） |
| langchain-gh | S | json | 未到期（上次 2026-10-11） |
| langgraph-gh | S | json | 未到期（上次 2026-10-11） |
| llamaindex-gh | S | json | 未到期（上次 2026-10-11） |
| vllm-gh | S | json | 未到期（上次 2026-10-11） |
| llamacpp-gh | S | json | 未到期（上次 2026-10-11） |
| ollama-gh | S | json | 未到期（上次 2026-10-11） |
| ragflow-gh | S | json | 未到期（上次 2026-10-11） |
| dify-gh | S | json | 未到期（上次 2026-10-11） |
| n8n-gh | S | json | 未到期（上次 2026-10-11） |
| openwebui-gh | S | json | 未到期（上次 2026-10-11） |
| autogen-gh | S | json | 未到期（上次 2026-10-11） |
| crewai-gh | S | json | 未到期（上次 2026-10-11） |
| litellm-gh | S | json | 未到期（上次 2026-10-11） |
| transformers-gh | S | json | 未到期（上次 2026-10-11） |
| unsloth-gh | S | json | 未到期（上次 2026-10-11） |
| llamafactory-gh | S | json | 未到期（上次 2026-10-11） |
| aider-gh | S | json | 未到期（上次 2026-10-11） |
| cline-gh | S | json | 未到期（上次 2026-10-11） |
| continue-gh | S | json | 未到期（上次 2026-10-11） |
| openhands-gh | S | json | 未到期（上次 2026-10-11） |
| browseruse-gh | S | json | 未到期（上次 2026-10-11） |
| markitdown-gh | S | json | 未到期（上次 2026-10-11） |
| unstructured-gh | S | json | 未到期（上次 2026-10-11） |
| mineru-gh | S | json | 未到期（上次 2026-10-11） |
| mcpservers-gh | S | json | 未到期（上次 2026-10-11） |
| anthropic-features | S | html | 未到期（上次 2026-11-05） |
| openai-docs | S | html | 未到期（上次 2026-11-05） |
| deepseek-pricing | S | spa | 未到期（上次 2026-11-06） |
| deepseek-updates | S | spa | 未到期（上次 2026-11-06） |
| bailian-models | S | html | 未到期（上次 2026-11-04） |
| kimi-pricing | S | html | 未到期（上次 2026-11-04） |
| glm-52-doc | S | html | 未到期（上次 2026-11-04） |
| kimi-websearch | S | html | 未到期（上次 2026-11-04） |
| bailian-websearch | S | html | 未到期（上次 2026-11-04） |
| glm-websearch | S | html | 未到期（上次 2026-11-04） |
| bailian-coder | S | html | 未到期（上次 2026-11-04） |
| ark-models | S | spa | 未到期（上次 2026-11-04） |
| minimax-api-overview | S | spa | 未到期（上次 2026-11-02） |
| openai-caching | S | html | 未到期（上次 2026-11-05） |
| openai-structured | S | html | 未到期（上次 2026-11-05） |
| deepseek-chat-api | S | html | 未到期（上次 2026-11-05） |
| gemini-audio | S | spa | 未到期（上次 2026-11-05） |
| gemini-vision | S | spa | 未到期（上次 2026-11-05） |
| minimax-anthropic-api | S | html | 未到期（上次 2026-11-02） |
| minimax-openai-api | S | spa | 未到期（上次 2026-11-04） |
| minimax-server-tools | S | spa | 未到期（上次 2026-11-04） |
| minimax-caching | S | spa | 未到期（上次 2026-11-04） |
| minimax-openapi | S | json | 未到期（上次 2026-11-04） |
| gemini-computer-use | S | spa | 未到期（上次 2026-11-05） |
| ark-pricing | S | spa | 未到期（上次 2026-11-04） |
| bailian-models-zh | S | spa | 未到期（上次 2026-11-04） |
| glm-batch | S | html | 未到期（上次 2026-11-04） |
| glm-chat-api | S | html | 未到期（上次 2026-11-04） |
| claude-deprecations | S | html | 未到期（上次 2026-11-05） |
| openai-changelog | S | spa | 未到期（上次 2026-11-05） |
| gemini-changelog | S | spa | 未到期（上次 2026-11-02） |
| xai-release-notes | S | spa | 未到期（上次 2026-11-02） |
| aa-llm | B | spa | 未到期（上次 2026-11-04） |
| ideogram-api | S | html | 未到期（上次 2026-11-04） |
| elevenlabs-models | S | html | 变了 |
| openai-realtime | S | html | 未到期（上次 2026-11-04） |
| gemini-tts | S | spa | 未到期（上次 2026-11-02） |
| elevenlabs-tts | S | html | 未到期（上次 2026-11-04） |
| bailian-omni | S | html | 未到期（上次 2026-11-05） |
| elevenlabs-remix | S | html | 未到期（上次 2026-11-04） |
| openai-tts | S | html | 未到期（上次 2026-11-04） |
| gemini-music | S | html | 未到期（上次 2026-11-05） |
| glm-tts-doc | S | html | 未到期（上次 2026-11-04） |
| glm-tts-clone-doc | S | html | 未到期（上次 2026-11-04） |
| glm-voice-doc | S | html | 未到期（上次 2026-11-04） |
| xai-voice | S | spa | 未到期（上次 2026-11-02） |
| kokoro-card | S | html | 未到期（上次 2026-11-04） |
| mistral-models | S | html | 未到期（上次 2026-11-04） |
| mistral-tools | S | html | 未到期（上次 2026-11-04） |
| mistral-vision | S | html | 未到期（上次 2026-11-04） |
| fish-s2pro-card | S | html | 未到期（上次 2026-11-04） |
| cosyvoice-card | S | html | 未到期（上次 2026-11-04） |
| llama-card | S | html | 未到期（上次 2026-11-04） |
| elevenlabs-voices | S | html | 未到期（上次 2026-11-04） |
| wan-t2v-card | S | html | 未到期（上次 2026-11-04） |
| minimax-release | S | spa | 未到期（上次 2026-11-04） |
| s-e2ab-gh | C | json | 未到期（上次 2026-11-04） |
| s-abogen-gh | C | json | 未到期（上次 2026-11-04） |
| s-epub2tts-gh | C | json | 未到期（上次 2026-11-04） |
| s-abcreator-gh | C | json | 未到期（上次 2026-11-04） |
| s-smartsub-gh | C | json | 未到期（上次 2026-11-04） |
| s-youdub-gh | C | json | 未到期（上次 2026-11-04） |
| s-pipecat-gh | C | json | 未到期（上次 2026-11-04） |
| s-livekit-gh | C | json | 未到期（上次 2026-11-04） |
| s-hfs2s-gh | C | json | 未到期（上次 2026-11-04） |
| s-moshi-gh | C | json | 未到期（上次 2026-11-04） |
| s-acestep15-gh | C | json | 未到期（上次 2026-11-04） |
| s-acestep-gh | C | json | 未到期（上次 2026-11-04） |
| s-yue-gh | C | json | 未到期（上次 2026-11-04） |
| s-audiocraft-gh | C | json | 未到期（上次 2026-11-04） |
| s-gptsovits-gh | C | json | 未到期（上次 2026-11-04） |
| s-rvc-gh | C | json | 未到期（上次 2026-11-04） |
| s-fishspeech-gh | C | json | 未到期（上次 2026-11-04） |
| s-indextts-gh | C | json | 未到期（上次 2026-11-04） |
| s-cosyvoice-gh | C | json | 未到期（上次 2026-11-04） |
| s-f5tts-gh | C | json | 未到期（上次 2026-11-04） |
| s-qwen3omni-gh | C | json | 未到期（上次 2026-11-04） |
| ideogram-overview | A | html | 未到期（上次 2026-11-04） |
| ideogram-v4-remix | A | html | 未到期（上次 2026-11-04） |
| ideogram-v3-inpaint | A | html | 未到期（上次 2026-11-04） |
| ideogram-v3-reframe | A | html | 未到期（上次 2026-11-04） |
| ideogram-v3-generate | A | html | 未到期（上次 2026-11-04） |
| ideogram-edit | A | html | 未到期（上次 2026-11-04） |
| ideogram-upscale | A | html | 未到期（上次 2026-11-04） |
| ideogram-hf | A | html | 未到期（上次 2026-11-04） |
| bailian-qimg3 | A | html | 未到期（上次 2026-11-04） |
| bailian-qimg | A | html | 未到期（上次 2026-11-04） |
| bailian-textgen-zh | A | html | 未到期（上次 2026-11-04） |
| bailian-thinking-zh | A | html | 未到期（上次 2026-11-04） |
| bailian-cache-zh | A | html | 未到期（上次 2026-11-04） |
| bailian-batch-zh | A | html | 未到期（上次 2026-11-04） |
| bailian-websearch-zh | A | html | 未到期（上次 2026-11-05） |
| hf-kokoro | A | json | 未到期（上次 2026-10-11） |
| hf-cosyvoice2 | A | json | 未到期（上次 2026-10-11） |
| hf-glmtts | A | json | 未到期（上次 2026-10-11） |
| hf-glm4voice | A | json | 未到期（上次 2026-10-11） |
| hf-fishspeech15 | A | html | 未到期（上次 2026-10-14） |
| hf-qwen3omni | A | json | 未到期（上次 2026-10-11） |
| hf-qwen-layered | A | html | 未到期（上次 2026-10-14） |
| hf-org-minimax | A | json | 未到期（上次 2026-10-11） |
| hf-org-xai | A | json | 未到期（上次 2026-10-11） |
| hf-org-elevenlabs | A | json | 未到期（上次 2026-10-11） |
| hf-org-openai | A | json | 未到期（上次 2026-10-11） |
| ideogram-layerize | A | html | 未到期（上次 2026-10-11） |
| recraft-endpoints | A | html | 未到期（上次 2026-11-05） |
| recraft-nl-edit | A | html | 未到期（上次 2026-11-05） |
| hunyuan-image-hf | A | json | 未到期（上次 2026-11-05） |
| bfl-flux2-overview | A | html | 未到期（上次 2026-11-05） |
| bfl-flux2-multiref | A | html | 未到期（上次 2026-11-01） |
| ark-seedream-api | A | spa | 未到期（上次 2026-11-05） |
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
| gh-llm-universe | C | json | 未到期（上次 2026-10-13） |
| gh-all-in-rag | C | json | 未到期（上次 2026-10-13） |
| gh-handy-multi-agent | C | json | 未到期（上次 2026-10-13） |
| gh-llm-action | C | json | 未到期（上次 2026-10-13） |
| gh-self-llm | C | json | 未到期（上次 2026-10-13） |
| gh-langchain-zh | C | json | 未到期（上次 2026-10-13） |
| gh-llamafactory | C | json | 未到期（上次 2026-10-13） |
| gh-chattts-cn | C | json | 未到期（上次 2026-10-13） |
| gh-comfyui | C | json | 未到期（上次 2026-10-13） |
| gh-sdbook | C | json | 未到期（上次 2026-10-13） |
| waytoagi-wiki | C | spa | 从未抓过 |
| hf-hunyuan3d-21 | S | html | 变了 |
| tripo-docs-generation | S | spa | 变了 |
| meshy-docs-api | S | spa | 变了 |
| meshy-site | S | spa | 变了 |
| rodin-api-docs | S | html | 未到期（上次 2026-10-25） |
| gh-trellis | S | html | 变了 |
| seed3d-page | S | spa | 从未抓过 |
| stability-spar3d | S | html | 变了 |
| tripo-site | S | spa | 抓不到（被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法） |
| rodin-site | S | spa | 无变化 |
| tripo-docs-animation | S | spa | 变了 |
| gh-hunyuan3d-buffalo | S | html | 变了 |
| replicate-hunyuan3d-31 | A | spa | 变了 |
| replicate-3d | A | spa | 未到期（上次 2026-11-06） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-11-06） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-11-06） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-11-06） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-11-06） |
| gh-spar3d | S | html | 未到期（上次 2026-11-06） |
| gh-triposg | S | html | 未到期（上次 2026-11-06） |
| gh-instantmesh | S | html | 未到期（上次 2026-11-06） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 变了 |
| hf-ltx-25 | S | html | 变了 |
| meshy-changelog | S | spa | 变了 |
| hf-instantmesh | S | html | 未到期（上次 2026-11-06） |
| hf-apple-sharp | S | html | 未到期（上次 2026-11-06） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-11-06） |
| hf-anysplat | S | html | 未到期（上次 2026-11-06） |
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-10-13） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-10-13） |
| hf-trellis2 | S | html | 未到期（上次 2026-11-06） |
| pixverse-caps | S | html | 抓不到（HTTP 404） |
| pixverse-v6 | S | html | 抓不到（HTTP 404） |
| pixverse-fusion | S | html | 抓不到（HTTP 404） |
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
| hf-hallo2 | S | html | 变了 |
| replicate-lipsync | A | spa | 变了 |
| comfy-s2v | S | html | 变了 |
| heygen-translate | S | html | 变了 |
| heygen-live | S | html | 变了 |
| heygen-photo | S | html | 变了 |
| heygen-training | S | html | 变了 |
| heygen-changelog | S | html | 变了 |
| hf-hallo-live | S | html | 变了 |
| hf-longcat-avatar-10 | S | html | 变了 |
| gh-video-retalking | S | html | 变了 |
| elevenlabs-changelog | S | html | 变了 |
| hf-glm-voice | S | html | 变了 |
| hf-glm-tts | S | html | 变了 |
| openai-model-tts | S | spa | 无变化 |
| openai-model-realtime | S | spa | 变了 |
| elevenlabs-docs | S | html | 未到期（上次 2026-11-05） |
| gemini-robotics-er | S | html | 变了 |
| figure-helix | A | html | 无变化 |
| pi-pi05-blog | A | html | 未到期（上次 2026-10-28） |
| pi-openpi-gh | A | html | 无变化 |
| nvidia-groot-gh | A | html | 变了 |
| openvla-gh | A | html | 无变化 |
| openvla-repo | A | html | 无变化 |
| hf-robotics | B | json | 变了 |
| lerobot-gh | A | json | 变了 |
| groot-policy-doc | A | html | 无变化 |
| rynnbrain-card | A | html | 无变化 |
| maniskill-gh | B | json | 未到期（上次 2026-10-13） |
| cosmos3-card | S | html | 无变化 |
| genie3-blog | A | html | 变了 |
| odyssey-site | S | html | 变了 |
| worldlabs-marble | A | html | 变了 |
| matrixgame-card | A | html | 变了 |
| hunyuanworld-gh | A | html | 无变化 |
| wham-card | A | html | 未到期（上次 2026-10-13） |
| vjepa2-blog | A | html | 未到期（上次 2026-10-13） |
| vjepa2-card | B | html | 未到期（上次 2026-10-13） |
| sci-boltz-gh | A | html | 无变化 |
| sci-af3-blog | A | html | 未到期（上次 2026-10-14） |
| sci-esm2-card | B | html | 未到期（上次 2026-10-14） |
| sci-wn-gh | A | html | 无变化 |
| sci-aurora-gh | A | html | 无变化 |
| sci-neuralgcm-gh | A | html | 无变化 |
| sci-mattergen-gh | A | html | 无变化 |
| sci-mace-gh | A | html | 无变化 |
| sci-gnome-gh | A | html | 无变化 |
| seed-25 | A | html | 无变化 |
| veo-doc | A | html | 未到期（上次 2026-11-05） |
| sora-api | A | html | 变了 |
| wan-site | A | html | 无变化 |
| mm-hf-api | A | json | 变了 |
| vidu-s1-paper | A | html | 未到期（上次 2026-08-15） |
| omni-doc | A | html | 未到期（上次 2026-10-25） |
| ltx-hf-23 | A | html | 变了 |
| gemini-image-docs | A | html | 未到期（上次 2026-11-05） |
| openai-image-docs | A | html | 未到期（上次 2026-11-05） |
| recraft-docs | A | html | 变了 |
| bfl-docs | A | html | 变了 |
| zimage-card | A | html | 变了 |
| hunyuan-image-card | A | html | 变了 |
| smolvla-card | A | html | 变了 |
| molmoact-card | A | html | 变了 |
| hf-whisper | A | html | 未到期（上次 2026-11-05） |
| hf-sensevoice | A | html | 变了 |
| hf-qwen3-asr | A | html | 变了 |
| minimax-release-notes | A | html | 未到期（上次 2026-11-02） |
| seed-blog-1_5 | A | html | 无变化 |
| seed-blog-2_0 | A | html | 无变化 |
| ideogram-x | A | html | 变了 |
| hf-funcineforge | S | html | 未到期（上次 2026-11-01） |
| hf-org | S | json | 未到期（上次 2026-11-06） |
| gh-gptsovits-cn | C | json | 未到期（上次 2026-11-01） |
| gemini-nb21 | S | spa | 变了 |
| xai-grok47-model | S | spa | 未到期（上次 2026-11-02） |
| ideogram-v1-overview | A | html | 无变化 |
| ideogram-v1-upscale | A | html | 无变化 |
| rodin-gen25-api | A | html | 变了 |
| rodin-bang-api | A | html | 变了 |
| card-deepseek-ai-deepseek-v3-2 | A | html | 无变化 |
| card-zai-org-glm-4-5 | A | html | 无变化 |
| card-zai-org-glm-4-6 | A | html | 无变化 |
| card-zai-org-glm-5 | A | html | 无变化 |
| card-zai-org-glm-5-1 | A | html | 无变化 |
| card-zai-org-glm-5-2 | A | html | 无变化 |
| card-moonshotai-kimi-k2-base | A | html | 无变化 |
| card-moonshotai-kimi-k2-thinking | A | html | 无变化 |
| card-moonshotai-kimi-k2-5 | A | html | 无变化 |
| card-moonshotai-kimi-k2-6 | A | html | 无变化 |
| card-moonshotai-kimi-k3 | A | html | 无变化 |
| card-minimaxai-minimax-m2 | A | html | 变了 |
| card-minimaxai-minimax-m2-5 | A | html | 变了 |
| card-minimaxai-minimax-m3 | A | html | 变了 |
| card-mistralai-mistral-large-3-675b-instruct-2512 | A | html | 无变化 |
| card-mistralai-mistral-small-4-119b-2603 | A | html | 无变化 |
| card-mistralai-mistral-medium-3-5-128b | A | html | 无变化 |
| card-qwen-qwen3-5-27b | A | html | 无变化 |
| card-qwen-qwen3-6-27b | A | html | 无变化 |
| card-tencent-hunyuan3d-part | A | html | 无变化 |
| card-zai-org-glm-4-7 | A | html | 无变化 |
| gemini-argon | S | spa | 未到期（上次 2026-11-02） |
| gemini-tts38 | S | spa | 未到期（上次 2026-11-02） |
| vidu-q4-i2v | S | spa | 未到期（上次 2026-11-02） |
| vidu-q4-reference | S | spa | 未到期（上次 2026-11-02） |
| xai-voice3 | S | spa | 未到期（上次 2026-11-02） |
| minimax-m31-guide | S | html | 未到期（上次 2026-11-02） |
| minimax-m31-tools | S | html | 未到期（上次 2026-11-02） |
| recraft-image-to-image | S | html | 未到期（上次 2026-11-02） |
| recraft-inpainting | S | html | 未到期（上次 2026-11-02） |
| recraft-outpainting | S | html | 未到期（上次 2026-11-02） |
| recraft-upscale | S | html | 未到期（上次 2026-11-02） |

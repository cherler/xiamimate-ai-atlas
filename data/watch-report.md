# 信息源监视报告 · 2026-10-07

本次检查 150 个到期源（共 429 个）：变化 105 · 首次 0 · 无变化 41 · **抓不到 4**

> 这份报告是给人看的那 20 条待办的来源（§59.3 的负反馈：人每周要看的条目 ≤ 20）。
> 「抓不到」不是失败，是**信息本身** —— 一个长期抓不到的官方源，说明那家厂商没有可 diff 的公开更新入口，
> 而那正好解释了为什么它名下的格子质量最差。

## 抓到了但没内容（比抓不到更危险 —— 它不会喊）

（无）

## 抓不到（要处理）

- **pika-site**（S/html）Pika 官网 — fetch failed / ECONNRESET
  https://pika.art/
- **aa-t2i**（A/spa）Artificial Analysis · 文生图竞技场 — 还是壳：渲染后正文只有 281 个字符
  https://artificialanalysis.ai/text-to-image/arena
- **tripo-site**（S/spa）Tripo 官网 — 被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法
  https://www.tripo3d.ai/
- **pi-pi05-blog**（A/html）Physical Intelligence 官方博客 · π₀.₅ — HTTP 429
  https://www.physicalintelligence.company/blog/pi05

## 有变化

- **vertex-video-ref** Vertex AI · 参考图引导生成
- **minimax-blog** MiniMax · 官方博客
- **runway-research** Runway · Research
- **higgsfield-site** Higgsfield（平台，不是模型）
- **arxiv-video** arXiv · 视频生成新论文
  新增 40 条：Rethinking Visual Provenance: Detection and Watermarking Across Direct Visual Generation and LLM-Driven Code Rendering、DensiTok: Making Feed-Forward 3D Gaussian Splatting See More Views Than It Is Given、CCDF: A Benchmark Dataset for Deepfake Detection in Real-World Surveillance Footage、Diverse Motion Customization via Control-based Dynamic Optimization、ChronoWorld: Camera-Controlled Consistent 4D World Generation via Spatiotemporal Cues and Geometric Reflections、RealtimeWAM: One-Step Asynchronous World Action Models、SimForcing: Distilling Simulation Motion Priors into Real-Domain Robot World Models、Keepsake: Selective Spatial Memory for Long-Horizon Video Generation、MTOR: Generalizable AI-Generated Video Detection with Multimodal Semantics and Temporal Over-Regularity、TasteRoute: Personalized Routing for Video Generation、Level-of-Token Diffusion、A Spatiotemporal Semantic Importance-Guided Unified Compression and Editing Framework for AI-Generated Videos …
- **epoch-notable** Epoch AI · Notable AI Models（每日）
  新增 1 条：6372 行
- **aa-t2v** Artificial Analysis · 文生视频榜
- **aa-i2v** Artificial Analysis · 图生视频榜
- **hf-v2v** Hugging Face · video-to-video 按下载量
  新增 5 条：Lightricks/LTX-2.5-22b-IC-LoRA-Alpha-Gen、Lightricks/LTX-2.5-22b-IC-LoRA-Refine-Details、ZawShiShawn/Gestura-MiniMax-H3-VAE-LiteRT、rzgar/minimax_h3_fl2va_fp8_e4m3fn、rzgar/minimax_h3_ref2va_fp8_e4m3fn
- **replicate-t2v** Replicate · text-to-video 集合
- **comfyui-releases** GitHub · ComfyUI releases
  新增 2 条：399457068、404140386
- **runway-changelog** Runway · Changelog（官方更新日志）
- **runway-models** Runway · Models 指南
- **apiyi-models** APIYI · 更新日志（API 聚合商）
- **arxiv-worldmodel** arXiv · world model / 实时视频生成
  新增 40 条：Tracking Is Not Permanence: What Video World Models Keep of a Hidden Object、H-JEPA: End-to-End Learning of Hierarchical World Models for Visual Planning、SimForcing: Distilling Simulation Motion Priors into Real-Domain Robot World Models、KineWorld: Action-Induced Transport Fields for Embodied World Modeling、HLA-WM: Hybrid Linear Attention for Long-Horizon Video World Models、FLEX-WAM: Flexible Block-Causal World-Action Models for Long-Horizon Imagination and Planning、Artemis: Geometry-Grounded Multi-Agent Driving World Models with Shared 3D State and Progressive Memory Update、Identifiable World Models from Pretrained Diffusion Representations、PWM: Personalized World Models with Online Reinforcement Learning、A differentiable Lagrangian-coupled 3D Gaussian Splatting-SPH model for forward simulation and inverse analysis in solid mechanics、Kepler4D: Controllable Future Video Generation via 4D Scene State Evolution、SUAVE: Unified Video-Action Models via Masked Diffusion …
- **ltx-gh** GitHub · Lightricks/LTX-2 releases
  新增 2 条：400150257、401730279
- **dreamina** 即梦 Dreamina（字节自有产品）
- **hailuo-video** 海螺视频（MiniMax 自有产品）
- **h3-card** Hugging Face · MiniMax H3 模型卡
- **hf-lineage** Hugging Face · 模型公开目录
  新增 100 条：14A5/BzHtYuG3Vw5uFamg、14A5/KjbQLQmYEkg4JicC、14A5/QgOqvNpAshWTVGAm、14A5/TfblvOcGcMmxAxgg、14A5/yhpMswCT3aQjufWj、APMIC/ACE-privacy-filter-zhtw、Agtian/cpt7、Allinsama/user-35402414-yachiyo、Baekpica/GLM-5.3-Flash-Uncensored-Mixed-Quant-GGUF、Bigglz/mistral-small4-119b-sft-sft-dpo、BuboixStudios/fly-brain-english-checkpoints、ChodBhangra/knee-cartilage-segmentation …
- **framepack-gh** GitHub · FramePack
- **fpwrapper-gh** GitHub · ComfyUI-FramePackWrapper
- **latentsync-gh** GitHub · bytedance/LatentSync
- **lswrapper-gh** GitHub · ComfyUI-LatentSyncWrapper
- **float-gh** GitHub · ComfyUI-FLOAT
- **wanwrapper-gh** GitHub · ComfyUI-WanVideoWrapper
- **ltx-comfy-gh** GitHub · ComfyUI-LTXVideo
- **mpt-gh** GitHub · harry0703/MoneyPrinterTurbo
- **manim-gh** GitHub · ManimCommunity/manim
- **pyvideotrans-gh** GitHub · jianchang512/pyvideotrans
- **duix-gh** GitHub · duixcom/Duix-Avatar
- **fay-gh** GitHub · xszyou/Fay
- **narrato-gh** GitHub · linyqh/NarratoAI
- **zho-wf-gh** GitHub · ZHO-ZHO-ZHO/ComfyUI-Workflows-ZHO
- **echomimic-gh** GitHub · antgroup/echomimic
- **linly-talker-gh** GitHub · Kedreamix/Linly-Talker
- **huobao-gh** GitHub · chatfire-AI/huobao-drama
- **awesome-vd-gh** GitHub · showlab/Awesome-Video-Diffusion
- **google-gemini-blog** Google 官方博客 · Gemini
- **krea-blog** Krea 官方博客
- **google-nb-blog** Google 官方博客 · Nano Banana 系列
- **mj-updates** Midjourney 官方更新日志（updates.midjourney.com）
- **kimi-api** Kimi 开放平台 · Chat API
- **minimax-platform** MiniMax 开放平台文档 · 视频生成指南
- **kimi-pricing** Kimi 开放平台 · 模型推理价格
- **bailian-websearch** 阿里云百炼 · 大模型联网搜索
- **minimax-api-overview** MiniMax 开放平台 · 接口概览
- **minimax-anthropic-api** MiniMax 开放平台 · Anthropic SDK 兼容
- **minimax-openai-api** MiniMax 开放平台 · OpenAI SDK 兼容
- **ark-pricing** 火山方舟 · 模型价格
- **glm-batch** 智谱开放平台 · 批量处理
- **glm-chat-api** 智谱开放平台 · 对话补全 API
- **aa-llm** Artificial Analysis · LLM 智能分数榜
- **ideogram-api** Ideogram · API 文档（generate v4）
- **elevenlabs-models** ElevenLabs · Models
- **openai-realtime** OpenAI · Realtime API 指南
- **gemini-tts** Gemini API · Speech generation
- **elevenlabs-tts** ElevenLabs · Text to Speech
- **elevenlabs-remix** ElevenLabs · Voice remixing
- **openai-tts** OpenAI · Text to speech
- **glm-tts-doc** 智谱 · GLM-TTS
- **glm-tts-clone-doc** 智谱 · GLM-TTS-Clone
- **glm-voice-doc** 智谱 · GLM-4-Voice
- **xai-voice** xAI · Voice APIs
- **kokoro-card** Hugging Face · hexgrad/Kokoro-82M 模型卡
- **mistral-models** Mistral · Models overview
- **mistral-tools** Mistral · Function calling
- **mistral-vision** Mistral · Vision
- **fish-s2pro-card** Hugging Face · fishaudio/s2-pro 模型卡
- **cosyvoice-card** Hugging Face · Fun-CosyVoice3-0.5B-2512 模型卡
- **llama-card** Meta · Llama 4 模型卡与提示格式
- **elevenlabs-voices** ElevenLabs · Voices
- **wan-t2v-card** Hugging Face · Wan2.2-T2V-A14B 模型卡
- **s-e2ab-gh** GitHub · DrewThomasson/ebook2audiobook
- **s-abogen-gh** GitHub · denizsafak/abogen
- **s-epub2tts-gh** GitHub · aedocw/epub2tts
- **s-abcreator-gh** GitHub · prakharsr/audiobook-creator
- **s-smartsub-gh** GitHub · buxuku/SmartSub
- **s-youdub-gh** GitHub · liuzhao1225/YouDub
- **s-pipecat-gh** GitHub · pipecat-ai/pipecat
- **s-livekit-gh** GitHub · livekit/agents
- **s-hfs2s-gh** GitHub · huggingface/speech-to-speech
- **s-moshi-gh** GitHub · kyutai-labs/moshi
- **s-acestep15-gh** GitHub · ace-step/ACE-Step-1.5
- **s-acestep-gh** GitHub · ace-step/ACE-Step
- **s-yue-gh** GitHub · multimodal-art-projection/YuE
- **s-audiocraft-gh** GitHub · facebookresearch/audiocraft
- **s-gptsovits-gh** GitHub · RVC-Boss/GPT-SoVITS
- **s-rvc-gh** GitHub · RVC-Project/Retrieval-based-Voice-Conversion-WebUI
- **s-fishspeech-gh** GitHub · fishaudio/fish-speech
- **s-indextts-gh** GitHub · index-tts/index-tts
- **s-cosyvoice-gh** GitHub · QwenAudio/CosyVoice
- **s-f5tts-gh** GitHub · SWivid/F5-TTS
- **s-qwen3omni-gh** GitHub · QwenLM/Qwen3-Omni
- **ideogram-overview** Ideogram 官方 API 概览（能力总览）
- **ideogram-v4-remix** Ideogram 官方 API 参考 · Remix with Ideogram 4.0
- **ideogram-v3-inpaint** Ideogram 官方 API 参考 · Inpaint with Ideogram 3.0
- **ideogram-v3-reframe** Ideogram 官方 API 参考 · Reframe with Ideogram 3.0
- **ideogram-v3-generate** Ideogram 官方 API 参考 · Generate with Ideogram 3.0
- **ideogram-edit** Ideogram 官方 API 参考 · Edit images with a prompt
- **ideogram-upscale** Ideogram 官方 API 参考 · Upscale
- **ideogram-hf** Ideogram 官方 Hugging Face 组织 · ideogram-4-fp8
- **bailian-qimg3** 阿里云百炼 · 千问-图像生成与编辑3.0 API参考
- **bailian-cache-zh** 阿里云百炼中文站 · 上下文缓存
- **hf-org** Hugging Face 官方组织目录（模型接口）
  新增 239 条：19nbrown/qwen-image-2.1-casual-phone-photo-style-lora、AIImageStudio/RadianceChromeVoluptuous_QwenImage2.1_v1.0、ARTPARK-IISc/SraVaani-1.0、Abiray/10Eros-Max-Turbo-Hybrid-Beta5-GGUF、Abiray/MiniCPM5-2B-heretic-abliterated-GGUF、AesSedai/MiMo-V2.6-Pro-MOPD-GGUF、Andycurrent/Gemma-3-1B-it-GLM-4.7-Flash-Heretic-Uncensored-Thinking_GGUF、ArliAI/GLM-4.6-Derestricted-v3、ArtShtorm/Shtorm-PocketTTS-RU、Ateron/Gemma-4-Writers-31B-V2、Atlas3D/JEV-27B-VL-GGUF、Baghdad99/saad-speech-recognition-hausa-audio-to-text …

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 无变化 |
| seed-models | S | html | 无变化 |
| kling-api-updates | S | spa | 无变化 |
| kling-site | S | spa | 未到期（上次 2026-09-29） |
| google-video-docs | S | html | 无变化 |
| deepmind-veo | S | html | 无变化 |
| vertex-video-ref | S | html | 变了 |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 无变化 |
| wan-hf | S | json | 无变化 |
| minimax-blog | S | html | 变了 |
| minimax-hf | S | json | 无变化 |
| runway-research | S | html | 变了 |
| luma-site | S | html | 无变化 |
| vidu-changelog | S | spa | 无变化 |
| vidu-model-map | S | spa | 无变化 |
| vidu-function-list | S | spa | 无变化 |
| vidu-site | S | html | 无变化 |
| vidu-s1-gh | S | json | 无变化 |
| pika-site | S | html | 抓不到（fetch failed / ECONNRESET） |
| higgsfield-site | S | html | 变了 |
| decart-research | S | html | 无变化 |
| arxiv-video | S | atom | 变了 |
| epoch-notable | A | csv | 变了 |
| aa-t2v | A | spa | 变了 |
| aa-i2v | A | spa | 变了 |
| hf-t2v | A | json | 未到期（上次 2026-10-05） |
| hf-i2v | A | json | 未到期（上次 2026-10-05） |
| hf-v2v | A | json | 变了 |
| fal-video | S | spa | 未到期（上次 2026-10-01） |
| replicate-t2v | S | html | 变了 |
| aiwiki | B | spa | 未到期（上次 2026-09-11） |
| futurepedia | B | html | 未到期（上次 2026-09-11） |
| comfyui-releases | C | json | 变了 |
| capcut-templates | C | html | 未到期（上次 2026-09-11） |
| picsart-effects | C | html | 未到期（上次 2026-09-11） |
| runway-changelog | S | spa | 变了 |
| runway-models | S | spa | 变了 |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| seed-models-hub | S | html | 无变化 |
| apiyi-models | S | spa | 变了 |
| arxiv-worldmodel | S | atom | 变了 |
| techcrunch-ai | B | atom | 未到期（上次 2026-10-05） |
| ltx-gh | S | json | 变了 |
| ltx-hf-org | S | json | 未到期（上次 2026-10-05） |
| decart-site | S | spa | 未到期（上次 2026-10-03） |
| picsart-video | C | html | 未到期（上次 2026-09-11） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 变了 |
| hailuo-video | S | html | 变了 |
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
| comfy-docs | S | spa | 无变化 |
| h3-card | S | html | 变了 |
| hf-lineage | S | json | 变了 |
| vacetools-gh | C | json | 无变化 |
| framepack-gh | S | json | 变了 |
| fpwrapper-gh | C | json | 变了 |
| latentsync-gh | S | json | 变了 |
| lswrapper-gh | C | json | 变了 |
| float-gh | C | json | 变了 |
| sviflf-gh | C | json | 无变化 |
| flflatent-gh | C | json | 无变化 |
| mm-blog | S | html | 未到期（上次 2026-09-11） |
| wanwrapper-gh | C | json | 变了 |
| comfy-org-hf | S | json | 无变化 |
| ltx-comfy-gh | S | json | 变了 |
| mpt-gh | C | json | 变了 |
| manim-gh | C | json | 变了 |
| pyvideotrans-gh | C | json | 变了 |
| duix-gh | C | json | 变了 |
| fay-gh | C | json | 变了 |
| narrato-gh | C | json | 变了 |
| zho-wf-gh | C | json | 变了 |
| echomimic-gh | C | json | 变了 |
| linly-talker-gh | C | json | 变了 |
| animate-anything-gh | C | json | 无变化 |
| huobao-gh | C | json | 变了 |
| awesome-vd-gh | C | json | 变了 |
| seedream-page | S | html | 无变化 |
| openai-models | S | html | 未到期（上次 2026-10-01） |
| gemini-models | S | html | 未到期（上次 2026-10-01） |
| google-gemini-blog | S | html | 变了 |
| azure-foundry-blog | B | html | 未到期（上次 2026-09-11） |
| recraft-blog | S | html | 未到期（上次 2026-09-11） |
| kolors-gh | S | html | 未到期（上次 2026-09-11） |
| krea-blog | S | html | 变了 |
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
| google-nb-blog | S | html | 变了 |
| ms-foundry-blog | B | html | 未到期（上次 2026-09-11） |
| mj-updates | S | html | 变了 |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 281 个字符） |
| hf-t2i | A | json | 未到期（上次 2026-10-05） |
| hf-i2i | A | json | 未到期（上次 2026-10-05） |
| anthropic-models | S | html | 未到期（上次 2026-10-01） |
| deepseek-docs | S | html | 未到期（上次 2026-10-01） |
| xai-docs | S | html | 未到期（上次 2026-10-01） |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 变了 |
| glm-api | S | html | 无变化 |
| minimax-platform | S | html | 变了 |
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
| anthropic-features | S | html | 未到期（上次 2026-10-01） |
| openai-docs | S | html | 未到期（上次 2026-10-01） |
| deepseek-pricing | S | html | 无变化 |
| deepseek-updates | S | html | 无变化 |
| bailian-models | S | html | 无变化 |
| kimi-pricing | S | html | 变了 |
| glm-52-doc | S | html | 无变化 |
| kimi-websearch | S | html | 无变化 |
| bailian-websearch | S | html | 变了 |
| glm-websearch | S | html | 无变化 |
| bailian-coder | S | html | 无变化 |
| ark-models | S | spa | 无变化 |
| minimax-api-overview | S | spa | 变了 |
| openai-caching | S | html | 未到期（上次 2026-09-24） |
| openai-structured | S | html | 未到期（上次 2026-09-24） |
| deepseek-chat-api | S | html | 未到期（上次 2026-09-24） |
| gemini-audio | S | spa | 未到期（上次 2026-09-24） |
| gemini-vision | S | spa | 未到期（上次 2026-09-24） |
| minimax-anthropic-api | S | spa | 变了 |
| minimax-openai-api | S | spa | 变了 |
| minimax-server-tools | S | spa | 无变化 |
| minimax-caching | S | spa | 无变化 |
| minimax-openapi | S | json | 无变化 |
| gemini-computer-use | S | spa | 未到期（上次 2026-09-24） |
| ark-pricing | S | spa | 变了 |
| bailian-models-zh | S | spa | 无变化 |
| glm-batch | S | html | 变了 |
| glm-chat-api | S | html | 变了 |
| claude-deprecations | S | html | 未到期（上次 2026-10-01） |
| openai-changelog | S | spa | 未到期（上次 2026-10-01） |
| gemini-changelog | S | spa | 未到期（上次 2026-10-01） |
| xai-release-notes | S | html | 未到期（上次 2026-10-01） |
| aa-llm | B | spa | 变了 |
| ideogram-api | S | html | 变了 |
| elevenlabs-models | S | html | 变了 |
| openai-realtime | S | html | 变了 |
| gemini-tts | S | html | 变了 |
| elevenlabs-tts | S | html | 变了 |
| bailian-omni | S | html | 未到期（上次 2026-09-24） |
| elevenlabs-remix | S | html | 变了 |
| openai-tts | S | html | 变了 |
| gemini-music | S | html | 未到期（上次 2026-10-01） |
| glm-tts-doc | S | html | 变了 |
| glm-tts-clone-doc | S | html | 变了 |
| glm-voice-doc | S | html | 变了 |
| xai-voice | S | html | 变了 |
| kokoro-card | S | html | 变了 |
| mistral-models | S | html | 变了 |
| mistral-tools | S | html | 变了 |
| mistral-vision | S | html | 变了 |
| fish-s2pro-card | S | html | 变了 |
| cosyvoice-card | S | html | 变了 |
| llama-card | S | html | 变了 |
| elevenlabs-voices | S | html | 变了 |
| wan-t2v-card | S | html | 变了 |
| minimax-release | S | spa | 无变化 |
| s-e2ab-gh | C | json | 变了 |
| s-abogen-gh | C | json | 变了 |
| s-epub2tts-gh | C | json | 变了 |
| s-abcreator-gh | C | json | 变了 |
| s-smartsub-gh | C | json | 变了 |
| s-youdub-gh | C | json | 变了 |
| s-pipecat-gh | C | json | 变了 |
| s-livekit-gh | C | json | 变了 |
| s-hfs2s-gh | C | json | 变了 |
| s-moshi-gh | C | json | 变了 |
| s-acestep15-gh | C | json | 变了 |
| s-acestep-gh | C | json | 变了 |
| s-yue-gh | C | json | 变了 |
| s-audiocraft-gh | C | json | 变了 |
| s-gptsovits-gh | C | json | 变了 |
| s-rvc-gh | C | json | 变了 |
| s-fishspeech-gh | C | json | 变了 |
| s-indextts-gh | C | json | 变了 |
| s-cosyvoice-gh | C | json | 变了 |
| s-f5tts-gh | C | json | 变了 |
| s-qwen3omni-gh | C | json | 变了 |
| ideogram-overview | A | html | 变了 |
| ideogram-v4-remix | A | html | 变了 |
| ideogram-v3-inpaint | A | html | 变了 |
| ideogram-v3-reframe | A | html | 变了 |
| ideogram-v3-generate | A | html | 变了 |
| ideogram-edit | A | html | 变了 |
| ideogram-upscale | A | html | 变了 |
| ideogram-hf | A | html | 变了 |
| bailian-qimg3 | A | html | 变了 |
| bailian-qimg | A | html | 无变化 |
| bailian-textgen-zh | A | html | 无变化 |
| bailian-thinking-zh | A | html | 无变化 |
| bailian-cache-zh | A | html | 变了 |
| bailian-batch-zh | A | html | 无变化 |
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
| bfl-flux2-multiref | A | html | 未到期（上次 2026-10-03） |
| ark-seedream-api | A | spa | 未到期（上次 2026-09-24） |
| arxiv-fp8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-int8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-qlora | A | html | 未到期（上次 2026-08-13） |
| arxiv-gptq | A | html | 未到期（上次 2026-08-13） |
| arxiv-awq | A | html | 未到期（上次 2026-08-13） |
| arxiv-lora | A | html | 未到期（上次 2026-08-13） |
| hf-gguf-doc | A | html | 未到期（上次 2026-08-13） |
| hf-diffusers-memory | A | html | 未到期（上次 2026-08-13） |
| zimage-gh | A | html | 未到期（上次 2026-09-26） |
| hunyuan-image-gh | A | html | 未到期（上次 2026-09-26） |
| skyreels-gh | A | html | 未到期（上次 2026-09-26） |
| bfl-flux3 | A | html | 未到期（上次 2026-09-26） |
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
| hf-hunyuan3d-21 | S | html | 未到期（上次 2026-09-26） |
| tripo-docs-generation | S | spa | 未到期（上次 2026-09-26） |
| meshy-docs-api | S | spa | 未到期（上次 2026-09-26） |
| meshy-site | S | spa | 未到期（上次 2026-09-26） |
| rodin-api-docs | S | html | 未到期（上次 2026-09-26） |
| gh-trellis | S | html | 未到期（上次 2026-09-26） |
| seed3d-page | S | spa | 从未抓过 |
| stability-spar3d | S | html | 未到期（上次 2026-09-26） |
| tripo-site | S | spa | 抓不到（被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法） |
| rodin-site | S | spa | 未到期（上次 2026-09-26） |
| tripo-docs-animation | S | spa | 未到期（上次 2026-09-26） |
| gh-hunyuan3d-buffalo | S | html | 未到期（上次 2026-09-26） |
| replicate-hunyuan3d-31 | A | spa | 未到期（上次 2026-09-26） |
| replicate-3d | A | spa | 未到期（上次 2026-09-25） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-09-25） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-09-25） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-09-25） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-09-25） |
| gh-spar3d | S | html | 未到期（上次 2026-09-25） |
| gh-triposg | S | html | 未到期（上次 2026-09-25） |
| gh-instantmesh | S | html | 未到期（上次 2026-09-25） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 未到期（上次 2026-09-26） |
| hf-ltx-25 | S | html | 未到期（上次 2026-09-26） |
| meshy-changelog | S | spa | 未到期（上次 2026-09-26） |
| hf-instantmesh | S | html | 未到期（上次 2026-09-25） |
| hf-apple-sharp | S | html | 未到期（上次 2026-09-25） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-09-25） |
| hf-anysplat | S | html | 未到期（上次 2026-09-25） |
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-09-13） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-09-13） |
| hf-trellis2 | S | html | 未到期（上次 2026-09-25） |
| pixverse-caps | S | html | 未到期（上次 2026-09-26） |
| pixverse-v6 | S | html | 未到期（上次 2026-09-26） |
| pixverse-fusion | S | html | 未到期（上次 2026-09-26） |
| hf-cogvideox | S | html | 未到期（上次 2026-09-26） |
| hf-i2vgen | S | html | 未到期（上次 2026-09-26） |
| hf-longcat-edit | S | html | 未到期（上次 2026-09-26） |
| hf-magi | S | html | 未到期（上次 2026-09-26） |
| heygen-docs | S | spa | 未到期（上次 2026-09-26） |
| synthesia-docs | S | spa | 未到期（上次 2026-09-26） |
| hf-longcat-avatar | S | html | 未到期（上次 2026-09-26） |
| hf-hunyuan-avatar | S | html | 未到期（上次 2026-09-26） |
| hf-liveportrait | S | html | 未到期（上次 2026-09-26） |
| hf-musetalk | S | html | 未到期（上次 2026-09-26） |
| hf-hallo2 | S | html | 未到期（上次 2026-09-26） |
| replicate-lipsync | A | spa | 未到期（上次 2026-09-26） |
| comfy-s2v | S | html | 未到期（上次 2026-09-26） |
| heygen-translate | S | html | 未到期（上次 2026-09-26） |
| heygen-live | S | html | 未到期（上次 2026-09-26） |
| heygen-photo | S | html | 未到期（上次 2026-09-26） |
| heygen-training | S | html | 未到期（上次 2026-09-26） |
| heygen-changelog | S | html | 未到期（上次 2026-09-26） |
| hf-hallo-live | S | html | 未到期（上次 2026-09-26） |
| hf-longcat-avatar-10 | S | html | 未到期（上次 2026-09-26） |
| gh-video-retalking | S | html | 未到期（上次 2026-09-26） |
| elevenlabs-changelog | S | html | 未到期（上次 2026-09-26） |
| hf-glm-voice | S | html | 未到期（上次 2026-09-26） |
| hf-glm-tts | S | html | 未到期（上次 2026-09-26） |
| openai-model-tts | S | spa | 未到期（上次 2026-09-26） |
| openai-model-realtime | S | spa | 未到期（上次 2026-09-26） |
| elevenlabs-docs | S | html | 未到期（上次 2026-09-24） |
| gemini-robotics-er | S | html | 未到期（上次 2026-10-03） |
| figure-helix | A | html | 未到期（上次 2026-09-26） |
| pi-pi05-blog | A | html | 抓不到（HTTP 429） |
| pi-openpi-gh | A | html | 未到期（上次 2026-10-03） |
| nvidia-groot-gh | A | html | 未到期（上次 2026-10-03） |
| openvla-gh | A | html | 未到期（上次 2026-09-26） |
| openvla-repo | A | html | 未到期（上次 2026-09-26） |
| hf-robotics | B | json | 未到期（上次 2026-10-03） |
| lerobot-gh | A | json | 未到期（上次 2026-10-03） |
| groot-policy-doc | A | html | 未到期（上次 2026-10-03） |
| rynnbrain-card | A | html | 未到期（上次 2026-09-26） |
| maniskill-gh | B | json | 未到期（上次 2026-09-13） |
| cosmos3-card | S | html | 未到期（上次 2026-10-03） |
| genie3-blog | A | html | 未到期（上次 2026-09-26） |
| odyssey-site | A | html | 未到期（上次 2026-09-26） |
| worldlabs-marble | A | html | 未到期（上次 2026-09-26） |
| matrixgame-card | A | html | 未到期（上次 2026-09-26） |
| hunyuanworld-gh | A | html | 未到期（上次 2026-09-26） |
| wham-card | A | html | 未到期（上次 2026-09-13） |
| vjepa2-blog | A | html | 未到期（上次 2026-09-13） |
| vjepa2-card | B | html | 未到期（上次 2026-09-13） |
| sci-boltz-gh | A | html | 未到期（上次 2026-09-26） |
| sci-af3-blog | A | html | 未到期（上次 2026-09-14） |
| sci-esm2-card | B | html | 未到期（上次 2026-09-14） |
| sci-wn-gh | A | html | 未到期（上次 2026-09-26） |
| sci-aurora-gh | A | html | 未到期（上次 2026-09-26） |
| sci-neuralgcm-gh | A | html | 未到期（上次 2026-09-26） |
| sci-mattergen-gh | A | html | 未到期（上次 2026-09-26） |
| sci-mace-gh | A | html | 未到期（上次 2026-09-26） |
| sci-gnome-gh | A | html | 未到期（上次 2026-09-26） |
| seed-25 | A | html | 未到期（上次 2026-09-26） |
| veo-doc | A | html | 未到期（上次 2026-09-24） |
| sora-api | A | html | 未到期（上次 2026-09-26） |
| wan-site | A | html | 未到期（上次 2026-09-26） |
| mm-hf-api | A | json | 未到期（上次 2026-09-26） |
| vidu-s1-paper | A | html | 未到期（上次 2026-08-15） |
| omni-doc | A | html | 未到期（上次 2026-09-26） |
| ltx-hf-23 | A | html | 未到期（上次 2026-09-26） |
| gemini-image-docs | A | html | 未到期（上次 2026-09-24） |
| openai-image-docs | A | html | 未到期（上次 2026-09-24） |
| recraft-docs | A | html | 未到期（上次 2026-09-26） |
| bfl-docs | A | html | 未到期（上次 2026-09-26） |
| zimage-card | A | html | 未到期（上次 2026-09-26） |
| hunyuan-image-card | A | html | 未到期（上次 2026-09-26） |
| smolvla-card | A | html | 未到期（上次 2026-09-26） |
| molmoact-card | A | html | 未到期（上次 2026-09-26） |
| hf-whisper | A | html | 未到期（上次 2026-09-24） |
| hf-sensevoice | A | html | 未到期（上次 2026-09-26） |
| hf-qwen3-asr | A | html | 未到期（上次 2026-09-26） |
| minimax-release-notes | A | html | 未到期（上次 2026-09-26） |
| seed-blog-1_5 | A | html | 未到期（上次 2026-09-26） |
| seed-blog-2_0 | A | html | 未到期（上次 2026-09-26） |
| ideogram-x | A | html | 未到期（上次 2026-09-26） |
| hf-funcineforge | S | html | 未到期（上次 2026-10-04） |
| hf-org | S | json | 变了 |
| gh-gptsovits-cn | C | json | 未到期（上次 2026-10-04） |

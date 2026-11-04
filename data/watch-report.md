# 信息源监视报告 · 2026-11-04

本次检查 144 个到期源（共 467 个）：变化 108 · 首次 0 · 无变化 30 · **抓不到 6**

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

- **kling-api-updates** Kling AI · API 更新日志
- **google-video-docs** Google AI for Developers · 视频生成
- **deepmind-veo** Google DeepMind · Veo
- **vertex-video-ref** Vertex AI · 参考图引导生成
- **minimax-blog** MiniMax · 官方博客
- **minimax-hf** Hugging Face · MiniMaxAI 名下仓库
  新增 1 条：MiniMaxAI/MiniMax-M3.1-Flash
- **runway-research** Runway · Research
- **luma-site** Luma AI 官网
- **higgsfield-site** Higgsfield（平台，不是模型）
- **decart-research** Decart · Research
- **epoch-notable** Epoch AI · Notable AI Models（每日）
  新增 1 条：6416 行
- **aa-t2v** Artificial Analysis · 文生视频榜
- **aa-i2v** Artificial Analysis · 图生视频榜
- **hf-t2v** Hugging Face · text-to-video 按下载量
  新增 2 条：binglingzhimeng/minimax_h3_hybrid_fl2va_ref2va_b25-49_w6a8、guoyww/animatediff-motion-adapter-v1-5-2
- **hf-i2v** Hugging Face · image-to-video 按下载量
  新增 1 条：styly-agents/Wan2-2-pixel-animate
- **hf-v2v** Hugging Face · video-to-video 按下载量
  新增 3 条：Comfy-Org/Frame-Interpolation、Efficient-Large-Model/Open-H3-Regenerate-2K、rzgar/minimax-h3_ref2va_8Step_motion_enhancer
- **replicate-t2v** Replicate · text-to-video 集合
- **comfyui-releases** GitHub · ComfyUI releases
  新增 2 条：424957271、433335054
- **runway-models** Runway · Models 指南
- **techcrunch-ai** TechCrunch · AI（RSS）
  新增 20 条：Anthropic is working on a system to prove AI models&#8217; identity、Data centers are turning to old jet engines as the wait for power grows、Ted Schlein&#8217;s Ballistic Ventures seeks $490M for new funds amid AI-driven cybersecurity boom、Hiding inside Palantir&#8217;s skyrocketing quarter is a foreboding signal、AI inference startup Fal doubles its valuation to $16B as demand surges、Netflix&#8217;s new AI Discover tab helps you find something to watch based on your mood、Anthropic is still grappling with the economics of compute、Google will let schools disable its AI tools, but not without sacrificing Search、Apple restricts dating apps and AI companions to users 18 and up、The TechCrunch Founder Summit agenda is only half the reason to be in Boston on November 4、Tomorrow: TechCrunch Founder Summit takes over Boston and when pass rates increase、Apple Watch&#8217;s AI features for rewinding and recapping conversations begin beta testing …
- **dreamina** 即梦 Dreamina（字节自有产品）
- **hailuo-video** 海螺视频（MiniMax 自有产品）
- **comfy-docs** ComfyUI · 官方原生工作流文档
- **h3-card** Hugging Face · MiniMax H3 模型卡
- **hf-lineage** Hugging Face · 模型公开目录
  新增 100 条：15A9/NKuoX6S2afHJVxiZ、15A9/mGXlJY09OAstPJCQ、15A9/qvX6PopRMdpq88M0、15A9/rTOeadVdeNpuHwYl、294-288-pretrain-interaction/160M-exp、AXERA-TECH/Qwen3.8-27B-AX8860-llama.cpp、Aiden12910/tiktok-videos、ApolloRaines/Pythia-6.9B-DNP-500-Facts、ApolloRaines/Sharona-B2-7B-Jbliterated、ArmanMunir/fetchly-urdu-tts-piper、Asilarkness/slm-diloco、BasiraSoft/CraveX …
- **framepack-gh** GitHub · FramePack
- **latentsync-gh** GitHub · bytedance/LatentSync
- **lswrapper-gh** GitHub · ComfyUI-LatentSyncWrapper
- **wanwrapper-gh** GitHub · ComfyUI-WanVideoWrapper
- **comfy-org-hf** Hugging Face · Comfy-Org 官方组织
  新增 34 条：Comfy-Org/ACE-Step、Comfy-Org/ACE-Step-1.5、Comfy-Org/Anima-LLLite、Comfy-Org/Bernini-R、Comfy-Org/BiRefNet、Comfy-Org/Boogu-Image、Comfy-Org/CLIP-ViT-H-14-laion2B-s32B-b79K_repackaged、Comfy-Org/Causal-Forcing-Framewise、Comfy-Org/Chroma1-HD、Comfy-Org/Chroma1-Radiance、Comfy-Org/Cosmos-Predict2、Comfy-Org/Depth-Anything-3 …
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
- **hf-t2i** Hugging Face · text-to-image 按下载量
  新增 5 条：Comfy-Org/Krea-2、abenzerps/Qwen-Image-2.1-Turbo-Quantized、unsloth/Z-Image-GGUF、unsloth/flux-3-image-klein-FP8、unsloth/flux-3-image-klein-GGUF
- **hf-i2i** Hugging Face · image-to-image 按下载量
  新增 1 条：mflux-community/qwen-image-edit-2511-mflux-q8
- **kimi-api** Kimi 开放平台 · Chat API
- **glm-api** Z.ai 官方 API 参考 · Chat Completion
- **minimax-platform** MiniMax 开放平台文档 · 视频生成指南
- **bailian-models** 阿里云百炼 · 支持的模型清单
- **kimi-pricing** Kimi 开放平台 · 模型推理价格
- **glm-52-doc** Z.ai 开放平台 · GLM-5.2 模型文档
- **kimi-websearch** Kimi 开放平台 · 联网搜索
- **bailian-websearch** 阿里云百炼 · 大模型联网搜索
- **glm-websearch** 智谱开放平台 · 联网搜索工具
- **bailian-coder** 阿里云百炼 · Qwen-Coder
- **ark-models** 火山方舟 · 模型列表
- **minimax-openai-api** MiniMax 开放平台 · OpenAI SDK 兼容
- **minimax-caching** MiniMax 开放平台 · Prompt 缓存
- **ark-pricing** 火山方舟 · 模型价格
- **bailian-models-zh** 阿里云百炼 · 模型列表（中文站）
- **glm-batch** 智谱开放平台 · 批量处理
- **glm-chat-api** 智谱开放平台 · 对话补全 API
- **aa-llm** Artificial Analysis · LLM 智能分数榜
- **openai-realtime** OpenAI · Realtime API 指南
- **elevenlabs-tts** ElevenLabs · Text to Speech
- **elevenlabs-remix** ElevenLabs · Voice remixing
- **openai-tts** OpenAI · Text to speech
- **glm-tts-doc** 智谱 · GLM-TTS
- **glm-tts-clone-doc** 智谱 · GLM-TTS-Clone
- **glm-voice-doc** 智谱 · GLM-4-Voice
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
- **ideogram-hf** Ideogram 官方 Hugging Face 组织 · ideogram-4-fp8
- **bailian-qimg3** 阿里云百炼 · 千问-图像生成与编辑3.0 API参考
- **bailian-qimg** 阿里云百炼 · 千问-文生图API参考（模型概览）
- **bailian-textgen-zh** 阿里云百炼中文站 · 文本生成（推荐模型能力表）
- **bailian-thinking-zh** 阿里云百炼中文站 · 深度思考
- **bailian-cache-zh** 阿里云百炼中文站 · 上下文缓存
- **bailian-batch-zh** 阿里云百炼中文站 · 批量推理

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 无变化 |
| seed-models | S | html | 无变化 |
| kling-api-updates | S | spa | 变了 |
| kling-site | S | spa | 未到期（上次 2026-10-24） |
| google-video-docs | S | html | 变了 |
| deepmind-veo | S | html | 变了 |
| vertex-video-ref | S | html | 变了 |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 无变化 |
| wan-hf | S | json | 无变化 |
| minimax-blog | S | html | 变了 |
| minimax-hf | S | json | 变了 |
| runway-research | S | html | 变了 |
| luma-site | S | html | 变了 |
| vidu-changelog | S | spa | 未到期（上次 2026-11-02） |
| vidu-model-map | S | spa | 未到期（上次 2026-11-02） |
| vidu-function-list | S | spa | 未到期（上次 2026-11-02） |
| vidu-site | S | html | 无变化 |
| vidu-s1-gh | S | json | 无变化 |
| pika-site | S | html | 未到期（上次 2026-10-22） |
| higgsfield-site | S | html | 变了 |
| decart-research | S | html | 变了 |
| arxiv-video | S | atom | 未到期（上次 2026-10-31） |
| epoch-notable | A | csv | 变了 |
| aa-t2v | A | spa | 变了 |
| aa-i2v | A | spa | 变了 |
| hf-t2v | A | json | 变了 |
| hf-i2v | A | json | 变了 |
| hf-v2v | A | json | 变了 |
| fal-video | S | spa | 未到期（上次 2026-10-29） |
| replicate-t2v | S | html | 变了 |
| aiwiki | B | spa | 未到期（上次 2026-10-11） |
| futurepedia | B | html | 未到期（上次 2026-10-11） |
| comfyui-releases | C | json | 变了 |
| capcut-templates | C | html | 未到期（上次 2026-10-11） |
| picsart-effects | C | html | 抓不到（HTTP 404） |
| runway-changelog | S | spa | 无变化 |
| runway-models | S | spa | 变了 |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| seed-models-hub | S | html | 无变化 |
| apiyi-models | S | spa | 无变化 |
| arxiv-worldmodel | S | atom | 未到期（上次 2026-10-29） |
| techcrunch-ai | B | atom | 变了 |
| ltx-gh | S | json | 无变化 |
| ltx-hf-org | S | json | 无变化 |
| decart-site | S | spa | 未到期（上次 2026-11-01） |
| picsart-video | C | html | 未到期（上次 2026-10-24） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 变了 |
| hailuo-video | S | html | 变了 |
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
| comfy-docs | S | spa | 变了 |
| h3-card | S | html | 变了 |
| hf-lineage | S | json | 变了 |
| vacetools-gh | C | json | 无变化 |
| framepack-gh | S | json | 变了 |
| fpwrapper-gh | C | json | 无变化 |
| latentsync-gh | S | json | 变了 |
| lswrapper-gh | C | json | 变了 |
| float-gh | C | json | 无变化 |
| sviflf-gh | C | json | 无变化 |
| flflatent-gh | C | json | 无变化 |
| mm-blog | S | html | 未到期（上次 2026-10-11） |
| wanwrapper-gh | C | json | 变了 |
| comfy-org-hf | S | json | 变了 |
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
| openai-models | S | html | 未到期（上次 2026-10-29） |
| gemini-models | S | spa | 未到期（上次 2026-11-02） |
| google-gemini-blog | S | html | 变了 |
| azure-foundry-blog | B | html | 未到期（上次 2026-10-11） |
| recraft-blog | S | html | 未到期（上次 2026-10-11） |
| kolors-gh | S | html | 未到期（上次 2026-10-11） |
| krea-blog | S | html | 变了 |
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
| google-nb-blog | S | html | 未到期（上次 2026-10-22） |
| ms-foundry-blog | B | html | 未到期（上次 2026-10-11） |
| mj-updates | S | html | 无变化 |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 281 个字符） |
| hf-t2i | A | json | 变了 |
| hf-i2i | A | json | 变了 |
| anthropic-models | S | html | 未到期（上次 2026-10-29） |
| deepseek-docs | S | html | 未到期（上次 2026-10-29） |
| xai-docs | S | html | 未到期（上次 2026-10-29） |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 变了 |
| glm-api | S | html | 变了 |
| minimax-platform | S | html | 变了 |
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
| anthropic-features | S | html | 未到期（上次 2026-10-29） |
| openai-docs | S | html | 未到期（上次 2026-10-29） |
| deepseek-pricing | S | spa | 未到期（上次 2026-11-03） |
| deepseek-updates | S | spa | 未到期（上次 2026-11-03） |
| bailian-models | S | html | 变了 |
| kimi-pricing | S | html | 变了 |
| glm-52-doc | S | html | 变了 |
| kimi-websearch | S | html | 变了 |
| bailian-websearch | S | html | 变了 |
| glm-websearch | S | html | 变了 |
| bailian-coder | S | html | 变了 |
| ark-models | S | spa | 变了 |
| minimax-api-overview | S | spa | 未到期（上次 2026-11-02） |
| openai-caching | S | html | 未到期（上次 2026-10-22） |
| openai-structured | S | html | 未到期（上次 2026-10-22） |
| deepseek-chat-api | S | html | 未到期（上次 2026-10-22） |
| gemini-audio | S | spa | 未到期（上次 2026-10-22） |
| gemini-vision | S | spa | 未到期（上次 2026-10-22） |
| minimax-anthropic-api | S | html | 未到期（上次 2026-11-02） |
| minimax-openai-api | S | spa | 变了 |
| minimax-server-tools | S | spa | 无变化 |
| minimax-caching | S | spa | 变了 |
| minimax-openapi | S | json | 无变化 |
| gemini-computer-use | S | spa | 未到期（上次 2026-10-22） |
| ark-pricing | S | spa | 变了 |
| bailian-models-zh | S | spa | 变了 |
| glm-batch | S | html | 变了 |
| glm-chat-api | S | html | 变了 |
| claude-deprecations | S | html | 未到期（上次 2026-10-29） |
| openai-changelog | S | spa | 未到期（上次 2026-10-29） |
| gemini-changelog | S | spa | 未到期（上次 2026-11-02） |
| xai-release-notes | S | spa | 未到期（上次 2026-11-02） |
| aa-llm | B | spa | 变了 |
| ideogram-api | S | html | 无变化 |
| elevenlabs-models | S | html | 未到期（上次 2026-10-24） |
| openai-realtime | S | html | 变了 |
| gemini-tts | S | spa | 未到期（上次 2026-11-02） |
| elevenlabs-tts | S | html | 变了 |
| bailian-omni | S | html | 未到期（上次 2026-10-22） |
| elevenlabs-remix | S | html | 变了 |
| openai-tts | S | html | 变了 |
| gemini-music | S | html | 未到期（上次 2026-10-29） |
| glm-tts-doc | S | html | 变了 |
| glm-tts-clone-doc | S | html | 变了 |
| glm-voice-doc | S | html | 变了 |
| xai-voice | S | spa | 未到期（上次 2026-11-02） |
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
| s-youdub-gh | C | json | 无变化 |
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
| ideogram-v4-remix | A | html | 无变化 |
| ideogram-v3-inpaint | A | html | 无变化 |
| ideogram-v3-reframe | A | html | 无变化 |
| ideogram-v3-generate | A | html | 无变化 |
| ideogram-edit | A | html | 无变化 |
| ideogram-upscale | A | html | 无变化 |
| ideogram-hf | A | html | 变了 |
| bailian-qimg3 | A | html | 变了 |
| bailian-qimg | A | html | 变了 |
| bailian-textgen-zh | A | html | 变了 |
| bailian-thinking-zh | A | html | 变了 |
| bailian-cache-zh | A | html | 变了 |
| bailian-batch-zh | A | html | 变了 |
| bailian-websearch-zh | A | html | 未到期（上次 2026-10-22） |
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
| recraft-endpoints | A | html | 未到期（上次 2026-10-15） |
| recraft-nl-edit | A | html | 未到期（上次 2026-10-15） |
| hunyuan-image-hf | A | json | 未到期（上次 2026-10-15） |
| bfl-flux2-overview | A | html | 未到期（上次 2026-10-15） |
| bfl-flux2-multiref | A | html | 未到期（上次 2026-11-01） |
| ark-seedream-api | A | spa | 未到期（上次 2026-10-22） |
| arxiv-fp8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-int8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-qlora | A | html | 未到期（上次 2026-08-13） |
| arxiv-gptq | A | html | 未到期（上次 2026-08-13） |
| arxiv-awq | A | html | 未到期（上次 2026-08-13） |
| arxiv-lora | A | html | 未到期（上次 2026-08-13） |
| hf-gguf-doc | A | html | 未到期（上次 2026-08-13） |
| hf-diffusers-memory | A | html | 未到期（上次 2026-08-13） |
| zimage-gh | A | html | 未到期（上次 2026-10-17） |
| hunyuan-image-gh | A | html | 未到期（上次 2026-10-17） |
| skyreels-gh | A | html | 未到期（上次 2026-10-24） |
| bfl-flux3 | A | html | 未到期（上次 2026-10-24） |
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
| hf-hunyuan3d-21 | S | html | 未到期（上次 2026-10-24） |
| tripo-docs-generation | S | spa | 未到期（上次 2026-10-24） |
| meshy-docs-api | S | spa | 未到期（上次 2026-10-24） |
| meshy-site | S | spa | 未到期（上次 2026-10-24） |
| rodin-api-docs | S | html | 未到期（上次 2026-10-25） |
| gh-trellis | S | html | 未到期（上次 2026-10-24） |
| seed3d-page | S | spa | 从未抓过 |
| stability-spar3d | S | html | 未到期（上次 2026-10-24） |
| tripo-site | S | spa | 抓不到（被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法） |
| rodin-site | S | spa | 未到期（上次 2026-10-24） |
| tripo-docs-animation | S | spa | 未到期（上次 2026-10-24） |
| gh-hunyuan3d-buffalo | S | html | 未到期（上次 2026-10-24） |
| replicate-hunyuan3d-31 | A | spa | 未到期（上次 2026-10-24） |
| replicate-3d | A | spa | 未到期（上次 2026-10-16） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-10-16） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-10-16） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-10-16） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-10-16） |
| gh-spar3d | S | html | 未到期（上次 2026-10-16） |
| gh-triposg | S | html | 未到期（上次 2026-10-16） |
| gh-instantmesh | S | html | 未到期（上次 2026-10-16） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 未到期（上次 2026-10-24） |
| hf-ltx-25 | S | html | 未到期（上次 2026-10-24） |
| meshy-changelog | S | spa | 未到期（上次 2026-10-24） |
| hf-instantmesh | S | html | 未到期（上次 2026-10-16） |
| hf-apple-sharp | S | html | 未到期（上次 2026-10-16） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-10-16） |
| hf-anysplat | S | html | 未到期（上次 2026-10-16） |
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-10-13） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-10-13） |
| hf-trellis2 | S | html | 未到期（上次 2026-10-16） |
| pixverse-caps | S | html | 抓不到（HTTP 404） |
| pixverse-v6 | S | html | 抓不到（HTTP 404） |
| pixverse-fusion | S | html | 抓不到（HTTP 404） |
| hf-cogvideox | S | html | 未到期（上次 2026-10-17） |
| hf-i2vgen | S | html | 未到期（上次 2026-10-17） |
| hf-longcat-edit | S | html | 未到期（上次 2026-10-17） |
| hf-magi | S | html | 未到期（上次 2026-10-17） |
| heygen-docs | S | spa | 未到期（上次 2026-10-24） |
| synthesia-docs | S | spa | 未到期（上次 2026-10-24） |
| hf-longcat-avatar | S | html | 未到期（上次 2026-10-24） |
| hf-hunyuan-avatar | S | html | 未到期（上次 2026-10-24） |
| hf-liveportrait | S | html | 未到期（上次 2026-10-24） |
| hf-musetalk | S | html | 未到期（上次 2026-10-24） |
| hf-hallo2 | S | html | 未到期（上次 2026-10-24） |
| replicate-lipsync | A | spa | 未到期（上次 2026-10-17） |
| comfy-s2v | S | html | 未到期（上次 2026-10-17） |
| heygen-translate | S | html | 未到期（上次 2026-10-17） |
| heygen-live | S | html | 未到期（上次 2026-10-17） |
| heygen-photo | S | html | 未到期（上次 2026-10-17） |
| heygen-training | S | html | 未到期（上次 2026-10-17） |
| heygen-changelog | S | html | 未到期（上次 2026-10-24） |
| hf-hallo-live | S | html | 未到期（上次 2026-10-24） |
| hf-longcat-avatar-10 | S | html | 未到期（上次 2026-10-24） |
| gh-video-retalking | S | html | 未到期（上次 2026-10-17） |
| elevenlabs-changelog | S | html | 未到期（上次 2026-10-24） |
| hf-glm-voice | S | html | 未到期（上次 2026-10-24） |
| hf-glm-tts | S | html | 未到期（上次 2026-10-24） |
| openai-model-tts | S | spa | 未到期（上次 2026-10-24） |
| openai-model-realtime | S | spa | 未到期（上次 2026-10-24） |
| elevenlabs-docs | S | html | 未到期（上次 2026-10-22） |
| gemini-robotics-er | S | html | 未到期（上次 2026-10-31） |
| figure-helix | A | html | 未到期（上次 2026-10-24） |
| pi-pi05-blog | A | html | 未到期（上次 2026-10-28） |
| pi-openpi-gh | A | html | 未到期（上次 2026-10-31） |
| nvidia-groot-gh | A | html | 未到期（上次 2026-10-31） |
| openvla-gh | A | html | 未到期（上次 2026-10-24） |
| openvla-repo | A | html | 未到期（上次 2026-10-24） |
| hf-robotics | B | json | 未到期（上次 2026-10-31） |
| lerobot-gh | A | json | 未到期（上次 2026-10-31） |
| groot-policy-doc | A | html | 未到期（上次 2026-10-31） |
| rynnbrain-card | A | html | 未到期（上次 2026-10-24） |
| maniskill-gh | B | json | 未到期（上次 2026-10-13） |
| cosmos3-card | S | html | 未到期（上次 2026-10-31） |
| genie3-blog | A | html | 未到期（上次 2026-10-24） |
| odyssey-site | S | html | 未到期（上次 2026-10-24） |
| worldlabs-marble | A | html | 未到期（上次 2026-10-24） |
| matrixgame-card | A | html | 未到期（上次 2026-10-24） |
| hunyuanworld-gh | A | html | 未到期（上次 2026-10-24） |
| wham-card | A | html | 未到期（上次 2026-10-13） |
| vjepa2-blog | A | html | 未到期（上次 2026-10-13） |
| vjepa2-card | B | html | 未到期（上次 2026-10-13） |
| sci-boltz-gh | A | html | 未到期（上次 2026-10-24） |
| sci-af3-blog | A | html | 未到期（上次 2026-10-14） |
| sci-esm2-card | B | html | 未到期（上次 2026-10-14） |
| sci-wn-gh | A | html | 未到期（上次 2026-10-24） |
| sci-aurora-gh | A | html | 未到期（上次 2026-10-24） |
| sci-neuralgcm-gh | A | html | 未到期（上次 2026-10-24） |
| sci-mattergen-gh | A | html | 未到期（上次 2026-10-24） |
| sci-mace-gh | A | html | 未到期（上次 2026-10-24） |
| sci-gnome-gh | A | html | 未到期（上次 2026-10-24） |
| seed-25 | A | html | 未到期（上次 2026-10-24） |
| veo-doc | A | html | 未到期（上次 2026-10-22） |
| sora-api | A | html | 未到期（上次 2026-10-24） |
| wan-site | A | html | 未到期（上次 2026-10-24） |
| mm-hf-api | A | json | 未到期（上次 2026-10-24） |
| vidu-s1-paper | A | html | 未到期（上次 2026-08-15） |
| omni-doc | A | html | 未到期（上次 2026-10-25） |
| ltx-hf-23 | A | html | 未到期（上次 2026-10-24） |
| gemini-image-docs | A | html | 未到期（上次 2026-10-22） |
| openai-image-docs | A | html | 未到期（上次 2026-10-22） |
| recraft-docs | A | html | 未到期（上次 2026-10-24） |
| bfl-docs | A | html | 未到期（上次 2026-10-24） |
| zimage-card | A | html | 未到期（上次 2026-10-24） |
| hunyuan-image-card | A | html | 未到期（上次 2026-10-24） |
| smolvla-card | A | html | 未到期（上次 2026-10-24） |
| molmoact-card | A | html | 未到期（上次 2026-10-24） |
| hf-whisper | A | html | 未到期（上次 2026-10-22） |
| hf-sensevoice | A | html | 未到期（上次 2026-10-24） |
| hf-qwen3-asr | A | html | 未到期（上次 2026-10-24） |
| minimax-release-notes | A | html | 未到期（上次 2026-11-02） |
| seed-blog-1_5 | A | html | 未到期（上次 2026-10-24） |
| seed-blog-2_0 | A | html | 未到期（上次 2026-10-24） |
| ideogram-x | A | html | 未到期（上次 2026-10-24） |
| hf-funcineforge | S | html | 未到期（上次 2026-11-01） |
| hf-org | S | json | 未到期（上次 2026-11-03） |
| gh-gptsovits-cn | C | json | 未到期（上次 2026-11-01） |
| gemini-nb21 | S | spa | 未到期（上次 2026-10-31） |
| xai-grok47-model | S | spa | 未到期（上次 2026-11-02） |
| ideogram-v1-overview | A | html | 未到期（上次 2026-10-24） |
| ideogram-v1-upscale | A | html | 未到期（上次 2026-10-24） |
| rodin-gen25-api | A | html | 未到期（上次 2026-10-24） |
| rodin-bang-api | A | html | 未到期（上次 2026-10-24） |
| card-deepseek-ai-deepseek-v3-2 | A | html | 未到期（上次 2026-10-24） |
| card-zai-org-glm-4-5 | A | html | 未到期（上次 2026-10-24） |
| card-zai-org-glm-4-6 | A | html | 未到期（上次 2026-10-24） |
| card-zai-org-glm-5 | A | html | 未到期（上次 2026-10-24） |
| card-zai-org-glm-5-1 | A | html | 未到期（上次 2026-10-24） |
| card-zai-org-glm-5-2 | A | html | 未到期（上次 2026-10-24） |
| card-moonshotai-kimi-k2-base | A | html | 未到期（上次 2026-10-24） |
| card-moonshotai-kimi-k2-thinking | A | html | 未到期（上次 2026-10-24） |
| card-moonshotai-kimi-k2-5 | A | html | 未到期（上次 2026-10-24） |
| card-moonshotai-kimi-k2-6 | A | html | 未到期（上次 2026-10-24） |
| card-moonshotai-kimi-k3 | A | html | 未到期（上次 2026-10-24） |
| card-minimaxai-minimax-m2 | A | html | 未到期（上次 2026-10-24） |
| card-minimaxai-minimax-m2-5 | A | html | 未到期（上次 2026-10-24） |
| card-minimaxai-minimax-m3 | A | html | 未到期（上次 2026-10-24） |
| card-mistralai-mistral-large-3-675b-instruct-2512 | A | html | 未到期（上次 2026-10-24） |
| card-mistralai-mistral-small-4-119b-2603 | A | html | 未到期（上次 2026-10-24） |
| card-mistralai-mistral-medium-3-5-128b | A | html | 未到期（上次 2026-10-24） |
| card-qwen-qwen3-5-27b | A | html | 未到期（上次 2026-10-24） |
| card-qwen-qwen3-6-27b | A | html | 未到期（上次 2026-10-24） |
| card-tencent-hunyuan3d-part | A | html | 未到期（上次 2026-10-24） |
| card-zai-org-glm-4-7 | A | html | 未到期（上次 2026-10-24） |
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

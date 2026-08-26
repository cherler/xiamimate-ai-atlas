# 信息源监视报告 · 2026-08-26

本次检查 176 个到期源（共 448 个）：变化 137 · 首次 0 · 无变化 35 · **抓不到 4**

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
- **sora-eol-search**（B/html）OpenAI Sora 停服说明（⚠️ 页面反爬，我们抓不到，内容来自搜索摘要转述） — HTTP 403
  https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation
- **sora-2**（A/html）OpenAI · Sora 2 发布页（⚠️ 对我们的采集器返回 403，本轮未能一手复核） — HTTP 403
  https://openai.com/index/sora-2/

## 有变化

- **kling-api-updates** Kling AI · API 更新日志
- **vertex-video-ref** Vertex AI · 参考图引导生成
- **runway-research** Runway · Research
- **luma-site** Luma AI 官网
- **vidu-changelog** Vidu 平台 · 更新日志
- **vidu-model-map** Vidu 平台 · Model Map（官方模型清单）
- **vidu-function-list** Vidu 平台 · Function List（官方按模型列的能力清单）
- **vidu-site** Vidu 官网
- **pika-site** Pika 官网
- **higgsfield-site** Higgsfield（平台，不是模型）
- **decart-research** Decart · Research
- **epoch-notable** Epoch AI · Notable AI Models（每日）
  新增 1 条：6318 行
- **aa-t2v** Artificial Analysis · 文生视频榜
- **aa-i2v** Artificial Analysis · 图生视频榜
- **hf-v2v** Hugging Face · video-to-video 按下载量
  新增 3 条：ChrisColeTech/LTX-2.3-uncensored-v1.4-FP8、alibaba-pai/MiniMax-H3-Fun-Controlnet-Union、jdopensource/JoyAI-Video-Edit
- **fal-video** fal · 视频模型目录
- **replicate-t2v** Replicate · text-to-video 集合
- **comfyui-releases** GitHub · ComfyUI releases
  新增 1 条：370196467
- **runway-models** Runway · Models 指南
- **apiyi-models** APIYI · 更新日志（API 聚合商）
- **dreamina** 即梦 Dreamina（字节自有产品）
- **hailuo-video** 海螺视频（MiniMax 自有产品）
- **comfy-docs** ComfyUI · 官方原生工作流文档
- **h3-card** Hugging Face · MiniMax H3 模型卡
- **hf-lineage** Hugging Face · 模型公开目录
  新增 100 条：ASzecsenyi/VQLM、Abody-77/VitaDermAi1、CentralDeTraducoes/TraducoesPC、ChanBeDu/arctrm-c、DewiBrynJones/whisper-large-v2-ft-cy-2607、HungryDino/qwen_2.5_7b-eagle_numbers-collapse_p10-run2-gen12、Jendersen/t5-small-finetuned-bible-only-breton-plus-cy-kw、Jendersen/t5-small-finetuned-bible-only-welsh-breton-kernewek-16、Jongbin-kr/llama-3.1-8b-instruct-sni-ffn-lora、JuloEco/opsiom-fr-checkpoints、Lucien-shark/2D-to-3D-grapher、Lucien-shark/Linny-Frame-Interpolator-UNet …
- **vacetools-gh** GitHub · ComfyUI-SuperUltimateVaceTools
- **framepack-gh** GitHub · FramePack
- **fpwrapper-gh** GitHub · ComfyUI-FramePackWrapper
- **latentsync-gh** GitHub · bytedance/LatentSync
- **sviflf-gh** GitHub · ComfyUI-Wan-SVI2Pro-FLF
- **wanwrapper-gh** GitHub · ComfyUI-WanVideoWrapper
- **comfy-org-hf** Hugging Face · Comfy-Org 官方组织
  新增 3 条：Comfy-Org/MiniMax-H3、Comfy-Org/Pixal3D、Comfy-Org/TRELLIS.2
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
- **animate-anything-gh** GitHub · alibaba/animate-anything
- **huobao-gh** GitHub · chatfire-AI/huobao-drama
- **awesome-vd-gh** GitHub · showlab/Awesome-Video-Diffusion
- **openai-models** OpenAI · 官方模型列表
- **google-gemini-blog** Google 官方博客 · Gemini
- **krea-blog** Krea 官方博客
- **google-nb-blog** Google 官方博客 · Nano Banana 系列
- **hf-image-org** Hugging Face 官方组织 · 出图模型
  新增 499 条：0xKitkat/Ox-Alpha-GGUF、ACE-Step/acestep-v15-xl-turbo、ASLP-lab/CN-MultiDialect-ASR、ASLP-lab/MeanVC2、Abiray/10Eros-Max-fl2va-Beta2-GGUF、Abiray/10Eros-Max-ref2va-Beta2-GGUF、AiNinja94/MiniMax-H3、AlayaLab/Marionette、Alissonerdx/BFS-Best-Face-Swap-Video、Alissonerdx/LTX-Best-Face-ID、Alissonerdx/MiniMax-H3-Single-Frame-VAE-500K-Comfy、AntResearch/4DAnyone …
- **mj-updates** Midjourney 官方更新日志（updates.midjourney.com）
- **anthropic-models** Anthropic 官方文档 · 模型总览
- **deepseek-docs** DeepSeek 官方 API 文档
- **xai-docs** xAI 官方文档 · 模型清单
- **kimi-api** Kimi 开放平台 · Chat API
- **glm-api** Z.ai 官方 API 参考 · Chat Completion
- **minimax-platform** MiniMax 开放平台文档 · 视频生成指南
- **anthropic-features** Anthropic 官方文档 · Features overview
- **openai-docs** OpenAI 开发者文档 · 指南索引
- **deepseek-pricing** DeepSeek 官方文档 · 模型与价格
- **bailian-models** 阿里云百炼 · 支持的模型清单
- **kimi-pricing** Kimi 开放平台 · 模型推理价格
- **glm-52-doc** Z.ai 开放平台 · GLM-5.2 模型文档
- **kimi-websearch** Kimi 开放平台 · 联网搜索
- **kimi-chat-api** Kimi 开放平台 · Chat Completions
- **glm-websearch** 智谱开放平台 · 联网搜索工具
- **bailian-coder** 阿里云百炼 · Qwen-Coder
- **ark-models** 火山方舟 · 模型列表
- **minimax-api-overview** MiniMax 开放平台 · 接口概览
- **claude-models** Anthropic · Models overview
- **openai-caching** OpenAI · Prompt Caching
- **openai-structured** OpenAI · Structured model outputs
- **deepseek-chat-api** DeepSeek · Create Chat Completion
- **gemini-audio** Gemini API · Audio understanding
- **gemini-vision** Gemini API · Image understanding
- **gemini-computer-use** Gemini API · Computer Use
- **ark-pricing** 火山方舟 · 模型价格
- **bailian-models-zh** 阿里云百炼 · 模型列表（中文站）
- **claude-deprecations** Anthropic · Model deprecations
- **openai-changelog** OpenAI · API Changelog
- **gemini-changelog** Gemini API · Release notes
- **aa-llm** Artificial Analysis · LLM 智能分数榜
- **ideogram-api** Ideogram · API 文档（generate v4）
- **elevenlabs-models** ElevenLabs · Models
- **openai-realtime** OpenAI · Realtime API 指南
- **gemini-tts** Gemini API · Speech generation
- **elevenlabs-tts** ElevenLabs · Text to Speech
- **elevenlabs-remix** ElevenLabs · Voice remixing
- **openai-tts** OpenAI · Text to speech
- **xai-voice** xAI · Voice APIs
- **hf-sound-org** Hugging Face · 官方组织（声音）
  新增 498 条：0xKitkat/Ox-Alpha-GGUF、ACE-Step/acestep-v15-xl-turbo、ASLP-lab/CN-MultiDialect-ASR、ASLP-lab/MeanVC2、Abiray/10Eros-Max-fl2va-Beta2-GGUF、AiNinja94/MiniMax-H3、AlayaLab/Marionette、Alissonerdx/BFS-Best-Face-Swap-Video、Alissonerdx/LTX-Best-Face-ID、Alissonerdx/MiniMax-H3-Single-Frame-VAE-500K-Comfy、AntResearch/4DAnyone、Applied-Innovation-Center/Karnak-40B-v1.0 …
- **kokoro-card** Hugging Face · hexgrad/Kokoro-82M 模型卡
- **xai-models** xAI · Models
- **mistral-models** Mistral · Models overview
- **mistral-tools** Mistral · Function calling
- **mistral-vision** Mistral · Vision
- **fish-s2pro-card** Hugging Face · fishaudio/s2-pro 模型卡
- **cosyvoice-card** Hugging Face · Fun-CosyVoice3-0.5B-2512 模型卡
- **elevenlabs-voices** ElevenLabs · Voices
- **wan-t2v-card** Hugging Face · Wan2.2-T2V-A14B 模型卡
- **s-e2ab-gh** GitHub · DrewThomasson/ebook2audiobook
- **s-abogen-gh** GitHub · denizsafak/abogen
- **s-epub2tts-gh** GitHub · aedocw/epub2tts
- **s-abcreator-gh** GitHub · prakharsr/audiobook-creator
- **s-pvt-gh** GitHub · jianchang512/pyvideotrans
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
- **bailian-qimg** 阿里云百炼 · 千问-文生图API参考（模型概览）
- **bailian-textgen-zh** 阿里云百炼中文站 · 文本生成（推荐模型能力表）
- **bailian-thinking-zh** 阿里云百炼中文站 · 深度思考
- **bailian-cache-zh** 阿里云百炼中文站 · 上下文缓存
- **bailian-batch-zh** 阿里云百炼中文站 · 批量推理
- **bailian-websearch-zh** 阿里云百炼中文站 · 联网搜索

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 无变化 |
| seed-models | S | html | 无变化 |
| kling-api-updates | S | spa | 变了 |
| kling-site | S | spa | 抓不到（还是壳：渲染后正文只有 232 个字符） |
| google-video-docs | S | html | 无变化 |
| deepmind-veo | S | html | 无变化 |
| vertex-video-ref | S | html | 变了 |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 无变化 |
| wan-hf | S | json | 无变化 |
| minimax-blog | S | html | 无变化 |
| minimax-hf | S | json | 无变化 |
| runway-research | S | html | 变了 |
| luma-site | S | html | 变了 |
| vidu-changelog | S | spa | 变了 |
| vidu-model-map | S | spa | 变了 |
| vidu-function-list | S | spa | 变了 |
| vidu-site | S | html | 变了 |
| vidu-s1-gh | S | json | 无变化 |
| pika-site | S | html | 变了 |
| higgsfield-site | S | html | 变了 |
| decart-research | S | html | 变了 |
| arxiv-video | S | atom | 未到期（上次 2026-08-23） |
| epoch-notable | A | csv | 变了 |
| aa-t2v | A | spa | 变了 |
| aa-i2v | A | spa | 变了 |
| hf-t2v | A | json | 未到期（上次 2026-08-24） |
| hf-i2v | A | json | 未到期（上次 2026-08-24） |
| hf-v2v | A | json | 变了 |
| fal-video | S | spa | 变了 |
| replicate-t2v | S | html | 变了 |
| aiwiki | B | spa | 未到期（上次 2026-08-12） |
| futurepedia | B | html | 未到期（上次 2026-08-12） |
| comfyui-releases | C | json | 变了 |
| capcut-templates | C | html | 未到期（上次 2026-08-12） |
| picsart-effects | C | html | 未到期（上次 2026-08-12） |
| runway-changelog | S | spa | 无变化 |
| runway-models | S | spa | 变了 |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| google-models | S | html | 无变化 |
| seed-models-hub | S | html | 无变化 |
| apiyi-models | S | spa | 变了 |
| arxiv-worldmodel | S | atom | 未到期（上次 2026-08-23） |
| techcrunch-ai | B | atom | 未到期（上次 2026-08-24） |
| decart-blog | S | spa | 无变化 |
| ltx-gh | S | json | 无变化 |
| ltx-hf-org | S | json | 未到期（上次 2026-08-24） |
| decart-site | S | spa | 未到期（上次 2026-08-21） |
| picsart-video | C | html | 未到期（上次 2026-08-12） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 变了 |
| hailuo-video | S | html | 变了 |
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
| comfy-docs | S | spa | 变了 |
| h3-card | S | html | 变了 |
| hf-lineage | S | json | 变了 |
| vacetools-gh | C | json | 变了 |
| framepack-gh | S | json | 变了 |
| fpwrapper-gh | C | json | 变了 |
| latentsync-gh | S | json | 变了 |
| lswrapper-gh | C | json | 无变化 |
| float-gh | C | json | 无变化 |
| sviflf-gh | C | json | 变了 |
| flflatent-gh | C | json | 无变化 |
| mm-blog | S | html | 未到期（上次 2026-08-12） |
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
| animate-anything-gh | C | json | 变了 |
| huobao-gh | C | json | 变了 |
| awesome-vd-gh | C | json | 变了 |
| seedream-page | S | html | 无变化 |
| openai-models | S | html | 变了 |
| gemini-models | S | html | 无变化 |
| google-gemini-blog | S | html | 变了 |
| azure-foundry-blog | B | html | 未到期（上次 2026-08-12） |
| recraft-blog | S | html | 未到期（上次 2026-08-12） |
| kolors-gh | S | html | 未到期（上次 2026-08-12） |
| krea-blog | S | html | 变了 |
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
| google-nb-blog | S | html | 变了 |
| ms-foundry-blog | B | html | 未到期（上次 2026-08-12） |
| hf-image-org | S | json | 变了 |
| mj-updates | S | html | 变了 |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 321 个字符） |
| hf-t2i | A | json | 未到期（上次 2026-08-24） |
| hf-i2i | A | json | 未到期（上次 2026-08-24） |
| anthropic-models | S | html | 变了 |
| deepseek-docs | S | html | 变了 |
| xai-docs | S | html | 变了 |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| hf-text-org | S | json | 未到期（上次 2026-08-24） |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 变了 |
| glm-api | S | html | 变了 |
| minimax-platform | S | html | 变了 |
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
| anthropic-features | S | html | 变了 |
| openai-docs | S | html | 变了 |
| deepseek-pricing | S | html | 变了 |
| bailian-models | S | html | 变了 |
| kimi-pricing | S | html | 变了 |
| glm-52-doc | S | html | 变了 |
| kimi-websearch | S | html | 变了 |
| kimi-chat-api | S | html | 变了 |
| bailian-websearch | S | html | 无变化 |
| glm-websearch | S | html | 变了 |
| bailian-coder | S | html | 变了 |
| ark-models | S | spa | 变了 |
| minimax-api-overview | S | spa | 变了 |
| claude-models | S | html | 变了 |
| openai-caching | S | html | 变了 |
| openai-structured | S | html | 变了 |
| deepseek-chat-api | S | html | 变了 |
| gemini-audio | S | spa | 变了 |
| gemini-vision | S | spa | 变了 |
| minimax-anthropic-api | S | spa | 无变化 |
| minimax-openai-api | S | spa | 无变化 |
| minimax-server-tools | S | spa | 无变化 |
| minimax-caching | S | spa | 无变化 |
| minimax-openapi | S | json | 无变化 |
| gemini-computer-use | S | spa | 变了 |
| ark-pricing | S | spa | 变了 |
| bailian-models-zh | S | spa | 变了 |
| glm-batch | S | html | 无变化 |
| glm-chat-api | S | html | 无变化 |
| claude-deprecations | S | html | 变了 |
| openai-changelog | S | spa | 变了 |
| gemini-changelog | S | spa | 变了 |
| xai-release-notes | S | html | 无变化 |
| aa-llm | B | spa | 变了 |
| ideogram-api | S | html | 变了 |
| elevenlabs-models | S | html | 变了 |
| openai-realtime | S | html | 变了 |
| gemini-tts | S | html | 变了 |
| elevenlabs-tts | S | html | 变了 |
| bailian-omni | S | html | 无变化 |
| elevenlabs-remix | S | html | 变了 |
| openai-tts | S | html | 变了 |
| gemini-music | S | html | 无变化 |
| glm-tts-doc | S | html | 无变化 |
| glm-tts-clone-doc | S | html | 无变化 |
| glm-voice-doc | S | html | 无变化 |
| xai-voice | S | html | 变了 |
| hf-sound-org | S | json | 变了 |
| kokoro-card | S | html | 变了 |
| xai-models | S | html | 变了 |
| mistral-models | S | html | 变了 |
| mistral-tools | S | html | 变了 |
| mistral-vision | S | html | 变了 |
| fish-s2pro-card | S | html | 变了 |
| cosyvoice-card | S | html | 变了 |
| llama-card | S | html | 无变化 |
| elevenlabs-voices | S | html | 变了 |
| wan-t2v-card | S | html | 变了 |
| minimax-release | S | spa | 无变化 |
| s-e2ab-gh | C | json | 变了 |
| s-abogen-gh | C | json | 变了 |
| s-epub2tts-gh | C | json | 变了 |
| s-abcreator-gh | C | json | 变了 |
| s-pvt-gh | C | json | 变了 |
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
| bailian-qimg | A | html | 变了 |
| bailian-textgen-zh | A | html | 变了 |
| bailian-thinking-zh | A | html | 变了 |
| bailian-cache-zh | A | html | 变了 |
| bailian-batch-zh | A | html | 变了 |
| bailian-websearch-zh | A | html | 变了 |
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
| bfl-flux2-multiref | A | html | 未到期（上次 2026-08-22） |
| ark-seedream-api | A | spa | 未到期（上次 2026-08-13） |
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
| skyreels-gh | A | html | 未到期（上次 2026-08-15） |
| bfl-flux3 | A | html | 未到期（上次 2026-08-14） |
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
| hf-hunyuan3d-21 | S | html | 未到期（上次 2026-08-14） |
| tripo-docs-generation | S | spa | 未到期（上次 2026-08-14） |
| meshy-docs-api | S | spa | 未到期（上次 2026-08-14） |
| meshy-site | S | spa | 未到期（上次 2026-08-14） |
| rodin-api-docs | S | html | 未到期（上次 2026-08-14） |
| gh-trellis | S | html | 未到期（上次 2026-08-14） |
| seed3d-page | S | spa | 从未抓过 |
| stability-spar3d | S | html | 未到期（上次 2026-08-14） |
| tripo-site | S | spa | 未到期（上次 2026-08-14） |
| rodin-site | S | spa | 未到期（上次 2026-08-14） |
| tripo-docs-animation | S | spa | 未到期（上次 2026-08-14） |
| gh-hunyuan3d-buffalo | S | html | 未到期（上次 2026-08-14） |
| replicate-hunyuan3d-31 | A | spa | 未到期（上次 2026-08-14） |
| replicate-3d | A | spa | 未到期（上次 2026-08-14） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-08-14） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-08-14） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-08-14） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-08-14） |
| gh-spar3d | S | html | 未到期（上次 2026-08-14） |
| gh-triposg | S | html | 未到期（上次 2026-08-14） |
| gh-instantmesh | S | html | 未到期（上次 2026-08-14） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 未到期（上次 2026-08-14） |
| hf-ltx-25 | S | html | 未到期（上次 2026-08-14） |
| meshy-changelog | S | spa | 未到期（上次 2026-08-14） |
| hf-instantmesh | S | html | 未到期（上次 2026-08-14） |
| hf-apple-sharp | S | html | 未到期（上次 2026-08-14） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-08-14） |
| hf-anysplat | S | html | 未到期（上次 2026-08-14） |
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-08-14） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-08-14） |
| hf-trellis2 | S | html | 未到期（上次 2026-08-14） |
| pixverse-caps | S | html | 未到期（上次 2026-08-15） |
| pixverse-v6 | S | html | 未到期（上次 2026-08-15） |
| pixverse-fusion | S | html | 未到期（上次 2026-08-15） |
| hf-cogvideox | S | html | 未到期（上次 2026-08-15） |
| hf-i2vgen | S | html | 未到期（上次 2026-08-15） |
| hf-longcat-edit | S | html | 未到期（上次 2026-08-15） |
| hf-magi | S | html | 未到期（上次 2026-08-15） |
| heygen-docs | S | spa | 未到期（上次 2026-08-15） |
| synthesia-docs | S | spa | 未到期（上次 2026-08-15） |
| hf-longcat-avatar | S | html | 未到期（上次 2026-08-15） |
| hf-hunyuan-avatar | S | html | 未到期（上次 2026-08-15） |
| hf-liveportrait | S | html | 未到期（上次 2026-08-15） |
| hf-musetalk | S | html | 未到期（上次 2026-08-15） |
| hf-hallo2 | S | html | 未到期（上次 2026-08-15） |
| replicate-lipsync | A | spa | 未到期（上次 2026-08-15） |
| comfy-s2v | S | html | 未到期（上次 2026-08-15） |
| heygen-translate | S | html | 未到期（上次 2026-08-15） |
| heygen-live | S | html | 未到期（上次 2026-08-15） |
| heygen-photo | S | html | 未到期（上次 2026-08-15） |
| heygen-training | S | html | 未到期（上次 2026-08-15） |
| heygen-changelog | S | html | 未到期（上次 2026-08-15） |
| hf-hallo-live | S | html | 未到期（上次 2026-08-15） |
| hf-longcat-avatar-10 | S | html | 未到期（上次 2026-08-15） |
| gh-video-retalking | S | html | 未到期（上次 2026-08-15） |
| elevenlabs-changelog | S | html | 未到期（上次 2026-08-15） |
| hf-glm-voice | S | html | 未到期（上次 2026-08-15） |
| hf-glm-tts | S | html | 未到期（上次 2026-08-15） |
| openai-model-tts | S | spa | 未到期（上次 2026-08-15） |
| openai-model-realtime | S | spa | 未到期（上次 2026-08-15） |
| elevenlabs-docs | S | html | 未到期（上次 2026-08-15） |
| gemini-robotics-er | S | html | 未到期（上次 2026-08-21） |
| figure-helix | A | html | 未到期（上次 2026-08-14） |
| pi-pi05-blog | A | html | 未到期（上次 2026-08-14） |
| pi-openpi-gh | A | html | 未到期（上次 2026-08-22） |
| nvidia-groot-gh | A | html | 未到期（上次 2026-08-22） |
| openvla-gh | A | html | 未到期（上次 2026-08-15） |
| openvla-repo | A | html | 未到期（上次 2026-08-15） |
| hf-robotics | B | json | 未到期（上次 2026-08-21） |
| lerobot-gh | A | json | 未到期（上次 2026-08-21） |
| groot-policy-doc | A | html | 未到期（上次 2026-08-21） |
| rynnbrain-card | A | html | 未到期（上次 2026-08-14） |
| maniskill-gh | B | json | 未到期（上次 2026-08-14） |
| cosmos3-card | S | html | 未到期（上次 2026-08-21） |
| genie3-blog | A | html | 未到期（上次 2026-08-14） |
| odyssey-site | A | html | 未到期（上次 2026-08-14） |
| worldlabs-marble | A | html | 未到期（上次 2026-08-14） |
| matrixgame-card | A | html | 未到期（上次 2026-08-14） |
| hunyuanworld-gh | A | html | 未到期（上次 2026-08-14） |
| wham-card | A | html | 未到期（上次 2026-08-14） |
| vjepa2-blog | A | html | 未到期（上次 2026-08-14） |
| vjepa2-card | B | html | 未到期（上次 2026-08-14） |
| sci-boltz-gh | A | html | 未到期（上次 2026-08-15） |
| sci-af3-blog | A | html | 未到期（上次 2026-08-15） |
| sci-esm2-card | B | html | 未到期（上次 2026-08-15） |
| sci-wn-gh | A | html | 未到期（上次 2026-08-15） |
| sci-aurora-gh | A | html | 未到期（上次 2026-08-15） |
| sci-neuralgcm-gh | A | html | 未到期（上次 2026-08-15） |
| sci-mattergen-gh | A | html | 未到期（上次 2026-08-15） |
| sci-mace-gh | A | html | 未到期（上次 2026-08-15） |
| sci-gnome-gh | A | html | 未到期（上次 2026-08-15） |
| kling-api | A | html | 未到期（上次 2026-08-15） |
| seed-25 | A | html | 未到期（上次 2026-08-15） |
| veo-doc | A | html | 未到期（上次 2026-08-15） |
| sora-eol-search | B | html | 抓不到（HTTP 403） |
| sora-api | A | html | 未到期（上次 2026-08-15） |
| sora-2 | A | html | 抓不到（HTTP 403） |
| wan-site | A | html | 未到期（上次 2026-08-15） |
| mm-hf-api | A | json | 未到期（上次 2026-08-15） |
| vidu-fl | A | html | 未到期（上次 2026-08-15） |
| vidu-up | A | html | 未到期（上次 2026-08-15） |
| vidu-mm | A | html | 未到期（上次 2026-08-15） |
| rw-changelog | A | html | 未到期（上次 2026-08-15） |
| vidu-s1-paper | A | html | 未到期（上次 2026-08-15） |
| omni-doc | A | html | 未到期（上次 2026-08-15） |
| g-video | A | html | 未到期（上次 2026-08-15） |
| ltx-hf-23 | A | html | 未到期（上次 2026-08-15） |
| aa-board | B | html | 未到期（上次 2026-08-15） |
| gemini-image-docs | A | html | 未到期（上次 2026-08-15） |
| openai-image-docs | A | html | 未到期（上次 2026-08-15） |
| recraft-docs | A | html | 未到期（上次 2026-08-15） |
| bfl-docs | A | html | 未到期（上次 2026-08-15） |
| zimage-card | A | html | 未到期（上次 2026-08-15） |
| hunyuan-image-card | A | html | 未到期（上次 2026-08-15） |
| smolvla-card | A | html | 未到期（上次 2026-08-15） |
| molmoact-card | A | html | 未到期（上次 2026-08-15） |
| hf-whisper | A | html | 未到期（上次 2026-08-15） |
| hf-sensevoice | A | html | 未到期（上次 2026-08-15） |
| hf-qwen3-asr | A | html | 未到期（上次 2026-08-15） |
| minimax-release-notes | A | html | 未到期（上次 2026-08-15） |
| seed-blog-1_5 | A | html | 未到期（上次 2026-08-15） |
| seed-blog-2_0 | A | html | 未到期（上次 2026-08-15） |
| ideogram-x | A | html | 未到期（上次 2026-08-15） |

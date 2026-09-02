# 信息源监视报告 · 2026-09-02

本次检查 104 个到期源（共 448 个）：变化 70 · 首次 0 · 无变化 29 · **抓不到 5**

> 这份报告是给人看的那 20 条待办的来源（§59.3 的负反馈：人每周要看的条目 ≤ 20）。
> 「抓不到」不是失败，是**信息本身** —— 一个长期抓不到的官方源，说明那家厂商没有可 diff 的公开更新入口，
> 而那正好解释了为什么它名下的格子质量最差。

## 抓到了但没内容（比抓不到更危险 —— 它不会喊）

（无）

## 抓不到（要处理）

- **kling-site**（S/spa）Kling AI 官网 — 还是壳：渲染后正文只有 232 个字符
  https://klingai.com/
- **aa-t2i**（A/spa）Artificial Analysis · 文生图竞技场 — 还是壳：渲染后正文只有 314 个字符
  https://artificialanalysis.ai/text-to-image/arena
- **tripo-site**（S/spa）Tripo 官网 — 被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法
  https://www.tripo3d.ai/
- **sora-eol-search**（B/html）OpenAI Sora 停服说明（⚠️ 页面反爬，我们抓不到，内容来自搜索摘要转述） — HTTP 403
  https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation
- **sora-2**（A/html）OpenAI · Sora 2 发布页（⚠️ 对我们的采集器返回 403，本轮未能一手复核） — HTTP 403
  https://openai.com/index/sora-2/

## 有变化

- **google-video-docs** Google AI for Developers · 视频生成
- **minimax-blog** MiniMax · 官方博客
- **aa-t2v** Artificial Analysis · 文生视频榜
- **aa-i2v** Artificial Analysis · 图生视频榜
- **hf-t2v** Hugging Face · text-to-video 按下载量
  新增 5 条：Rabinovich/LongLive-2.0-5B-Diffusers、alibaba-pai/MiniMax-H3-Acc-LoRAs、aptech0081/MiniMax-H3-Acc-LoRAs-ComfyUI、samuelchristlie/Wan2.1-T2V-1.3B-GGUF、samuelchristlie/Wan2.1-VACE-1.3B-GGUF
- **hf-i2v** Hugging Face · image-to-video 按下载量
  新增 3 条：Hearmeman/minimax-h3-loras、city96/Wan2.1-FLF2V-14B-720P-gguf、vantagewithai/SCAIL-2-GGUF-ComfyUI
- **hf-v2v** Hugging Face · video-to-video 按下载量
  新增 5 条：Dxf3316/SeedVR2_comfyUI、Johnmn/SeedVR2-3B、QuantStack/LTX-2-GGUF、lxxxy6/LTX-2.5、rzgar/minimax_h3_ref2va_fp8_e4m3fn
- **fal-video** fal · 视频模型目录
- **replicate-t2v** Replicate · text-to-video 集合
- **runway-changelog** Runway · Changelog（官方更新日志）
- **runway-models** Runway · Models 指南
- **google-models** Google · 全部模型清单
- **apiyi-models** APIYI · 更新日志（API 聚合商）
- **techcrunch-ai** TechCrunch · AI（RSS）
  新增 20 条：AfterQuery reportedly becomes Y Combinator&#8217;s fastest-ever unicorn, now valued at $3.2B、OpenAI&#8217;s Astra model is on the way — and very good at breaking into computer systems、Google&#8217;s Android update tackles motion sickness, accessibility, and more、Anthropic&#8217;s new Fable release is cheaper, less restrictive、Google&#8217;s answer to Canva is an AI tool where you prompt instead of design、ChatGPT Health adds Epic integration for clinicians to import patient data、Sequoia-incubated Empirik launches with $21M to predict outages before they happen、Amazon Alexa can now alert you when something new might tempt you to shop、AIR raises $50M to help companies vet the skills and add-ons AI agents use、Fambot introduces an &#8216;AI chief of staff&#8217; for families、Apple shares &#8216;shocking evidence&#8217; against former employee accused of stealing company data for OpenAI、The Pentagon now has its own version of ChatGPT and Grok …
- **ltx-gh** GitHub · Lightricks/LTX-2 releases
  新增 1 条：377060167
- **hf-lineage** Hugging Face · 模型公开目录
  新增 100 条：AbstractPhil/alephllm-mini-beatrix-training、AlexHaochenLi/scannet_v5、AnonymousInterpScience/pythia-jlens-artifacts、DatPySci/Rubric-Hacking、DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF、ElMusk/fun06、ElMusk/fun07、ElMusk/fun08、ElMusk/fun09、HarperJane/20260902-012313、Jongbin-kr/llama-3.1-8b-instruct_SNI-random-luca_ffn-only、Jongbin-kr/llama-3.1-8b-instruct_lbox-criminal-property_ffn-only …
- **framepack-gh** GitHub · FramePack
- **fpwrapper-gh** GitHub · ComfyUI-FramePackWrapper
- **latentsync-gh** GitHub · bytedance/LatentSync
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
- **openai-models** OpenAI · 官方模型列表
- **gemini-models** Google · Gemini API 官方模型列表
- **hf-image-org** Hugging Face 官方组织 · 出图模型
  新增 476 条：0bserverx/RVN-Qwen3.8-Flash-Next-Abliterated-Uncensored-GGUF、0xKitkat/Ornith-1.5-35B-A3B-Uncensored-GGUF、0xSero/GLM-5.3-Flash-EXL3-Q4、0xSojalSec/Tencent-Hy-30B-A3B-uncensored-heretic、26B-Suite/Dark-Goetia-26B-A4B-v4、AIconjured/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF-Q8-NVFP4、ARC4NUM/Qwen3.8-Flash-Next-Uncensored-MLX-Serve-4bit、Abiray/MiniMax-H3-Pruned-GGUF、AesSedai/GLM-5.3-GGUF、AesSedai/Qwen3.8-Flash-Next-GGUF、Aignostics/RudolfV-2、AlicanKiraz0/Cybersecurity-BaronLLM_Offensive_Security_LLM_Q6_K_GGUF …
- **hf-i2i** Hugging Face · image-to-image 按下载量
  新增 1 条：ChrisColeTech/qwen-image-edit-uncensored-GGUF
- **anthropic-models** Anthropic 官方文档 · 模型总览
- **hf-text-org** Hugging Face 官方组织 · 文本模型
  新增 241 条：0bserverx/RVN-Qwen3.8-Flash-Next-Abliterated-Uncensored-GGUF、0xKitkat/Ornith-1.5-35B-A3B-Uncensored-GGUF、0xSojalSec/Tencent-Hy-30B-A3B-uncensored-heretic、26B-Suite/Dark-Goetia-26B-A4B-v4、Abiray/10Eros-Max-GGUF、Abiray/MiniMax-H3-Pruned-GGUF、AesSedai/GLM-5.3-GGUF、Aignostics/RudolfV-2、AliceThirty/GLM-5.3-Flash-UNCENSORED-GGUF、Anbeeld/GLM-5.3-Flash-DFlash2-GGUF、AnonimousA/Qwen3.8-Flash-Next-REAP-320-GGUF、Applied-Innovation-Center/Karnak-6B-v1.0 …
- **anthropic-features** Anthropic 官方文档 · Features overview
- **openai-docs** OpenAI 开发者文档 · 指南索引
- **bailian-models** 阿里云百炼 · 支持的模型清单
- **minimax-api-overview** MiniMax 开放平台 · 接口概览
- **claude-models** Anthropic · Models overview
- **bailian-models-zh** 阿里云百炼 · 模型列表（中文站）
- **glm-chat-api** 智谱开放平台 · 对话补全 API
- **claude-deprecations** Anthropic · Model deprecations
- **openai-changelog** OpenAI · API Changelog
- **gemini-changelog** Gemini API · Release notes
- **xai-release-notes** xAI · API Release Notes
- **hf-sound-org** Hugging Face · 官方组织（声音）
  新增 475 条：0bserverx/RVN-Qwen3.8-Flash-Next-Abliterated-Uncensored-GGUF、0xKitkat/Ornith-1.5-35B-A3B-Uncensored-GGUF、0xSero/GLM-5.3-Flash-EXL3-Q4、0xSojalSec/Tencent-Hy-30B-A3B-uncensored-heretic、26B-Suite/Dark-Goetia-26B-A4B-v4、AIconjured/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF-Q8-NVFP4、ARC4NUM/Qwen3.8-Flash-Next-Uncensored-MLX-Serve-4bit、Abiray/MiniMax-H3-Pruned-GGUF、AesSedai/GLM-5.3-GGUF、AesSedai/Qwen3.8-Flash-Next-GGUF、Aignostics/RudolfV-2、AlicanKiraz0/Cybersecurity-BaronLLM_Offensive_Security_LLM_Q6_K_GGUF …
- **s-e2ab-gh** GitHub · DrewThomasson/ebook2audiobook
- **s-abogen-gh** GitHub · denizsafak/abogen
- **s-abcreator-gh** GitHub · prakharsr/audiobook-creator
- **s-pvt-gh** GitHub · jianchang512/pyvideotrans
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

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 无变化 |
| seed-models | S | html | 未到期（上次 2026-08-26） |
| kling-api-updates | S | spa | 无变化 |
| kling-site | S | spa | 抓不到（还是壳：渲染后正文只有 232 个字符） |
| google-video-docs | S | html | 变了 |
| deepmind-veo | S | html | 未到期（上次 2026-08-26） |
| vertex-video-ref | S | html | 未到期（上次 2026-08-26） |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 无变化 |
| wan-hf | S | json | 无变化 |
| minimax-blog | S | html | 变了 |
| minimax-hf | S | json | 无变化 |
| runway-research | S | html | 未到期（上次 2026-08-26） |
| luma-site | S | html | 未到期（上次 2026-08-26） |
| vidu-changelog | S | spa | 无变化 |
| vidu-model-map | S | spa | 无变化 |
| vidu-function-list | S | spa | 无变化 |
| vidu-site | S | html | 未到期（上次 2026-08-26） |
| vidu-s1-gh | S | json | 未到期（上次 2026-08-26） |
| pika-site | S | html | 未到期（上次 2026-08-26） |
| higgsfield-site | S | html | 未到期（上次 2026-08-26） |
| decart-research | S | html | 未到期（上次 2026-08-26） |
| arxiv-video | S | atom | 未到期（上次 2026-08-30） |
| epoch-notable | A | csv | 无变化 |
| aa-t2v | A | spa | 变了 |
| aa-i2v | A | spa | 变了 |
| hf-t2v | A | json | 变了 |
| hf-i2v | A | json | 变了 |
| hf-v2v | A | json | 变了 |
| fal-video | S | spa | 变了 |
| replicate-t2v | S | html | 变了 |
| aiwiki | B | spa | 未到期（上次 2026-08-12） |
| futurepedia | B | html | 未到期（上次 2026-08-12） |
| comfyui-releases | C | json | 未到期（上次 2026-08-26） |
| capcut-templates | C | html | 未到期（上次 2026-08-12） |
| picsart-effects | C | html | 未到期（上次 2026-08-12） |
| runway-changelog | S | spa | 变了 |
| runway-models | S | spa | 变了 |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| google-models | S | html | 变了 |
| seed-models-hub | S | html | 无变化 |
| apiyi-models | S | spa | 变了 |
| arxiv-worldmodel | S | atom | 未到期（上次 2026-08-30） |
| techcrunch-ai | B | atom | 变了 |
| decart-blog | S | spa | 无变化 |
| ltx-gh | S | json | 变了 |
| ltx-hf-org | S | json | 无变化 |
| decart-site | S | spa | 未到期（上次 2026-08-29） |
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
| hf-lineage | S | json | 变了 |
| vacetools-gh | C | json | 无变化 |
| framepack-gh | S | json | 变了 |
| fpwrapper-gh | C | json | 变了 |
| latentsync-gh | S | json | 变了 |
| lswrapper-gh | C | json | 无变化 |
| float-gh | C | json | 无变化 |
| sviflf-gh | C | json | 无变化 |
| flflatent-gh | C | json | 无变化 |
| mm-blog | S | html | 未到期（上次 2026-08-12） |
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
| seedream-page | S | html | 未到期（上次 2026-08-26） |
| openai-models | S | html | 变了 |
| gemini-models | S | html | 变了 |
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
| hf-image-org | S | json | 变了 |
| mj-updates | S | html | 未到期（上次 2026-08-26） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 314 个字符） |
| hf-t2i | A | json | 无变化 |
| hf-i2i | A | json | 变了 |
| anthropic-models | S | html | 变了 |
| deepseek-docs | S | html | 无变化 |
| xai-docs | S | html | 无变化 |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| hf-text-org | S | json | 变了 |
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
| anthropic-features | S | html | 变了 |
| openai-docs | S | html | 变了 |
| deepseek-pricing | S | html | 无变化 |
| bailian-models | S | html | 变了 |
| kimi-pricing | S | html | 未到期（上次 2026-08-26） |
| glm-52-doc | S | html | 未到期（上次 2026-08-26） |
| kimi-websearch | S | html | 未到期（上次 2026-08-26） |
| kimi-chat-api | S | html | 未到期（上次 2026-08-26） |
| bailian-websearch | S | html | 未到期（上次 2026-08-26） |
| glm-websearch | S | html | 未到期（上次 2026-08-26） |
| bailian-coder | S | html | 未到期（上次 2026-08-26） |
| ark-models | S | spa | 无变化 |
| minimax-api-overview | S | spa | 变了 |
| claude-models | S | html | 变了 |
| openai-caching | S | html | 未到期（上次 2026-08-26） |
| openai-structured | S | html | 未到期（上次 2026-08-26） |
| deepseek-chat-api | S | html | 未到期（上次 2026-08-26） |
| gemini-audio | S | spa | 未到期（上次 2026-08-26） |
| gemini-vision | S | spa | 未到期（上次 2026-08-26） |
| minimax-anthropic-api | S | spa | 未到期（上次 2026-08-26） |
| minimax-openai-api | S | spa | 未到期（上次 2026-08-26） |
| minimax-server-tools | S | spa | 未到期（上次 2026-08-26） |
| minimax-caching | S | spa | 未到期（上次 2026-08-26） |
| minimax-openapi | S | json | 无变化 |
| gemini-computer-use | S | spa | 未到期（上次 2026-08-26） |
| ark-pricing | S | spa | 未到期（上次 2026-08-26） |
| bailian-models-zh | S | spa | 变了 |
| glm-batch | S | html | 无变化 |
| glm-chat-api | S | html | 变了 |
| claude-deprecations | S | html | 变了 |
| openai-changelog | S | spa | 变了 |
| gemini-changelog | S | spa | 变了 |
| xai-release-notes | S | html | 变了 |
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
| hf-sound-org | S | json | 变了 |
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
| minimax-release | S | spa | 无变化 |
| s-e2ab-gh | C | json | 变了 |
| s-abogen-gh | C | json | 变了 |
| s-epub2tts-gh | C | json | 无变化 |
| s-abcreator-gh | C | json | 变了 |
| s-pvt-gh | C | json | 变了 |
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
| bfl-flux2-multiref | A | html | 未到期（上次 2026-08-29） |
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
| skyreels-gh | A | html | 未到期（上次 2026-08-29） |
| bfl-flux3 | A | html | 未到期（上次 2026-08-29） |
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
| hf-hunyuan3d-21 | S | html | 未到期（上次 2026-08-29） |
| tripo-docs-generation | S | spa | 未到期（上次 2026-08-29） |
| meshy-docs-api | S | spa | 未到期（上次 2026-08-29） |
| meshy-site | S | spa | 未到期（上次 2026-08-29） |
| rodin-api-docs | S | html | 未到期（上次 2026-08-29） |
| gh-trellis | S | html | 未到期（上次 2026-08-29） |
| seed3d-page | S | spa | 从未抓过 |
| stability-spar3d | S | html | 未到期（上次 2026-08-29） |
| tripo-site | S | spa | 抓不到（被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法） |
| rodin-site | S | spa | 未到期（上次 2026-08-29） |
| tripo-docs-animation | S | spa | 未到期（上次 2026-08-29） |
| gh-hunyuan3d-buffalo | S | html | 未到期（上次 2026-08-29） |
| replicate-hunyuan3d-31 | A | spa | 未到期（上次 2026-08-29） |
| replicate-3d | A | spa | 未到期（上次 2026-08-14） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-08-14） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-08-14） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-08-14） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-08-14） |
| gh-spar3d | S | html | 未到期（上次 2026-08-14） |
| gh-triposg | S | html | 未到期（上次 2026-08-14） |
| gh-instantmesh | S | html | 未到期（上次 2026-08-14） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 未到期（上次 2026-08-29） |
| hf-ltx-25 | S | html | 未到期（上次 2026-08-29） |
| meshy-changelog | S | spa | 未到期（上次 2026-08-29） |
| hf-instantmesh | S | html | 未到期（上次 2026-08-14） |
| hf-apple-sharp | S | html | 未到期（上次 2026-08-14） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-08-14） |
| hf-anysplat | S | html | 未到期（上次 2026-08-14） |
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-08-14） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-08-14） |
| hf-trellis2 | S | html | 未到期（上次 2026-08-14） |
| pixverse-caps | S | html | 未到期（上次 2026-08-29） |
| pixverse-v6 | S | html | 未到期（上次 2026-08-29） |
| pixverse-fusion | S | html | 未到期（上次 2026-08-29） |
| hf-cogvideox | S | html | 未到期（上次 2026-08-15） |
| hf-i2vgen | S | html | 未到期（上次 2026-08-15） |
| hf-longcat-edit | S | html | 未到期（上次 2026-08-15） |
| hf-magi | S | html | 未到期（上次 2026-08-15） |
| heygen-docs | S | spa | 未到期（上次 2026-08-29） |
| synthesia-docs | S | spa | 未到期（上次 2026-08-29） |
| hf-longcat-avatar | S | html | 未到期（上次 2026-08-29） |
| hf-hunyuan-avatar | S | html | 未到期（上次 2026-08-29） |
| hf-liveportrait | S | html | 未到期（上次 2026-08-29） |
| hf-musetalk | S | html | 未到期（上次 2026-08-29） |
| hf-hallo2 | S | html | 未到期（上次 2026-08-29） |
| replicate-lipsync | A | spa | 未到期（上次 2026-08-15） |
| comfy-s2v | S | html | 未到期（上次 2026-08-15） |
| heygen-translate | S | html | 未到期（上次 2026-08-15） |
| heygen-live | S | html | 未到期（上次 2026-08-15） |
| heygen-photo | S | html | 未到期（上次 2026-08-15） |
| heygen-training | S | html | 未到期（上次 2026-08-15） |
| heygen-changelog | S | html | 未到期（上次 2026-08-29） |
| hf-hallo-live | S | html | 未到期（上次 2026-08-29） |
| hf-longcat-avatar-10 | S | html | 未到期（上次 2026-08-29） |
| gh-video-retalking | S | html | 未到期（上次 2026-08-15） |
| elevenlabs-changelog | S | html | 未到期（上次 2026-08-29） |
| hf-glm-voice | S | html | 未到期（上次 2026-08-29） |
| hf-glm-tts | S | html | 未到期（上次 2026-08-29） |
| openai-model-tts | S | spa | 未到期（上次 2026-08-29） |
| openai-model-realtime | S | spa | 未到期（上次 2026-08-29） |
| elevenlabs-docs | S | html | 未到期（上次 2026-08-29） |
| gemini-robotics-er | S | html | 未到期（上次 2026-08-29） |
| figure-helix | A | html | 未到期（上次 2026-08-29） |
| pi-pi05-blog | A | html | 未到期（上次 2026-08-29） |
| pi-openpi-gh | A | html | 未到期（上次 2026-08-29） |
| nvidia-groot-gh | A | html | 未到期（上次 2026-08-29） |
| openvla-gh | A | html | 未到期（上次 2026-08-29） |
| openvla-repo | A | html | 未到期（上次 2026-08-29） |
| hf-robotics | B | json | 未到期（上次 2026-08-29） |
| lerobot-gh | A | json | 未到期（上次 2026-08-29） |
| groot-policy-doc | A | html | 未到期（上次 2026-08-29） |
| rynnbrain-card | A | html | 未到期（上次 2026-08-29） |
| maniskill-gh | B | json | 未到期（上次 2026-08-14） |
| cosmos3-card | S | html | 未到期（上次 2026-08-29） |
| genie3-blog | A | html | 未到期（上次 2026-08-29） |
| odyssey-site | A | html | 未到期（上次 2026-08-29） |
| worldlabs-marble | A | html | 未到期（上次 2026-08-29） |
| matrixgame-card | A | html | 未到期（上次 2026-08-29） |
| hunyuanworld-gh | A | html | 未到期（上次 2026-08-29） |
| wham-card | A | html | 未到期（上次 2026-08-14） |
| vjepa2-blog | A | html | 未到期（上次 2026-08-14） |
| vjepa2-card | B | html | 未到期（上次 2026-08-14） |
| sci-boltz-gh | A | html | 未到期（上次 2026-08-29） |
| sci-af3-blog | A | html | 未到期（上次 2026-08-15） |
| sci-esm2-card | B | html | 未到期（上次 2026-08-15） |
| sci-wn-gh | A | html | 未到期（上次 2026-08-29） |
| sci-aurora-gh | A | html | 未到期（上次 2026-08-29） |
| sci-neuralgcm-gh | A | html | 未到期（上次 2026-08-29） |
| sci-mattergen-gh | A | html | 未到期（上次 2026-08-29） |
| sci-mace-gh | A | html | 未到期（上次 2026-08-29） |
| sci-gnome-gh | A | html | 未到期（上次 2026-08-29） |
| kling-api | A | html | 未到期（上次 2026-08-29） |
| seed-25 | A | html | 未到期（上次 2026-08-29） |
| veo-doc | A | html | 未到期（上次 2026-08-29） |
| sora-eol-search | B | html | 抓不到（HTTP 403） |
| sora-api | A | html | 未到期（上次 2026-08-29） |
| sora-2 | A | html | 抓不到（HTTP 403） |
| wan-site | A | html | 未到期（上次 2026-08-29） |
| mm-hf-api | A | json | 未到期（上次 2026-08-29） |
| vidu-fl | A | html | 未到期（上次 2026-08-29） |
| vidu-up | A | html | 未到期（上次 2026-08-29） |
| vidu-mm | A | html | 未到期（上次 2026-08-29） |
| rw-changelog | A | html | 未到期（上次 2026-08-29） |
| vidu-s1-paper | A | html | 未到期（上次 2026-08-15） |
| omni-doc | A | html | 未到期（上次 2026-08-29） |
| g-video | A | html | 未到期（上次 2026-08-29） |
| ltx-hf-23 | A | html | 未到期（上次 2026-08-29） |
| aa-board | B | html | 未到期（上次 2026-08-29） |
| gemini-image-docs | A | html | 未到期（上次 2026-08-29） |
| openai-image-docs | A | html | 未到期（上次 2026-08-29） |
| recraft-docs | A | html | 未到期（上次 2026-08-29） |
| bfl-docs | A | html | 未到期（上次 2026-08-29） |
| zimage-card | A | html | 未到期（上次 2026-08-29） |
| hunyuan-image-card | A | html | 未到期（上次 2026-08-29） |
| smolvla-card | A | html | 未到期（上次 2026-08-29） |
| molmoact-card | A | html | 未到期（上次 2026-08-29） |
| hf-whisper | A | html | 未到期（上次 2026-08-29） |
| hf-sensevoice | A | html | 未到期（上次 2026-08-29） |
| hf-qwen3-asr | A | html | 未到期（上次 2026-08-29） |
| minimax-release-notes | A | html | 未到期（上次 2026-08-29） |
| seed-blog-1_5 | A | html | 未到期（上次 2026-08-29） |
| seed-blog-2_0 | A | html | 未到期（上次 2026-08-29） |
| ideogram-x | A | html | 未到期（上次 2026-08-29） |

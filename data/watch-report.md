# 信息源监视报告 · 2026-11-12

本次检查 36 个到期源（共 467 个）：变化 23 · 首次 0 · 无变化 6 · **抓不到 6**

> 这份报告是给人看的那 20 条待办的来源（§59.3 的负反馈：人每周要看的条目 ≤ 20）。
> 「抓不到」不是失败，是**信息本身** —— 一个长期抓不到的官方源，说明那家厂商没有可 diff 的公开更新入口，
> 而那正好解释了为什么它名下的格子质量最差。

## 抓到了但没内容（比抓不到更危险 —— 它不会喊）

- **deepseek-docs** DeepSeek 官方 API 文档 — 正文里找不到任何一个期望关键词（https://api-docs.deepseek.com/）

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

- **fal-video** fal · 视频模型目录
- **arxiv-worldmodel** arXiv · world model / 实时视频生成
  新增 21 条：OnlyAct: Extracting Action Representations from Foundation Models for World Models、From Video Frames to Robot Meta-Frames: A Unified Latent Interface for World Action Models、LaST0.5: A Generalist World Action Model with Interaction-Centric Latent Reasoning、WanderBench: Can World Models Explore Dynamic Worlds from Video?、How Many Candidates Does a One-Step World Model Need? A Random-Codebook Account of Nearest-of-m Training on Frozen DINO Tokens、SurgTAP-3D: A Large-Scale Cross-Surgery Video Dataset with Contact-Aware 3D Motion Tracking、Breaking survivorship bias in driving world models、ForeAct: Geometry-Guided Action Learning from World Representations、SurgWorld: Learning Surgical Representations Beyond Observation via Latent Prediction、ObjectWorld: Scaling Object-Centric World Models with A Large-Scale 3D Full-Object Flow Dataset、WorldFoundry: Towards Unified Infrastructure for World Intelligence、Action Transfer Across Character Body Plans in Latent-Action World Models: An Empirical Study of Animated Characters …
- **openai-models** OpenAI · 官方模型列表
- **anthropic-models** Anthropic 官方文档 · 模型总览
- **anthropic-features** Anthropic 官方文档 · Features overview
- **openai-docs** OpenAI 开发者文档 · 指南索引
- **claude-deprecations** Anthropic · Model deprecations
- **openai-changelog** OpenAI · API Changelog
- **gemini-music** Gemini API · Music generation（Lyria 3）
- **gh-llm-universe** GitHub · datawhalechina/llm-universe（动手学大模型应用开发）
- **gh-all-in-rag** GitHub · datawhalechina/all-in-rag（RAG 技术全栈指南）
- **gh-handy-multi-agent** GitHub · datawhalechina/handy-multi-agent（多智能体教程）
- **gh-llm-action** GitHub · liguodongiot/llm-action（大模型工程化实战）
- **gh-self-llm** GitHub · datawhalechina/self-llm（开源大模型食用指南）
- **gh-langchain-zh** GitHub · LangChain 中文入门教程
- **gh-llamafactory** GitHub · hiyouga/LLaMA-Factory
- **gh-chattts-cn** ChatTTS 官方中文文档
- **gh-comfyui** GitHub · Comfy-Org/ComfyUI
- **gh-sdbook** GitHub · StableDiffusionBook（中文 AI 绘画手册）
- **arxiv-seed3d-20** arXiv · Seed3D 2.0 技术报告
- **maniskill-gh** ManiSkill 仿真环境仓库
- **vjepa2-blog** Meta 官方博客 · V-JEPA 2 world model
- **hf-org** Hugging Face 官方组织目录（模型接口）
  新增 231 条：7err4/MOSS-Image-CharRef、AInVFX/ainvfx-fluid、AJ-Gonzalez/coder-lfm3-1.7b-k3.1-pro、Abiray/MiniMax-H3-Image-GGUF、AiNinja94/RelayVSR-ComfyUI-Workflow、AkameV6p5/Gemma-4-E4B-Maomao、AmSach/Gemma-4-26B-A4B-MAPLE-Sub5GB-GGUF、Angais/Krea-2-PixelArt-16x16、Angais/MOSS-Image-PixelArt-16x16、Asteromorph/AsteroRank-Lepton、AtomicChat/Arete-27B-GGUF、AtomicChat/LFM2.5-24B-A2B-Uncensored-GGUF …

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 未到期（上次 2026-11-11） |
| seed-models | S | html | 未到期（上次 2026-11-04） |
| kling-api-updates | S | spa | 未到期（上次 2026-11-11） |
| kling-site | S | spa | 未到期（上次 2026-11-07） |
| google-video-docs | S | html | 未到期（上次 2026-11-11） |
| deepmind-veo | S | html | 未到期（上次 2026-11-04） |
| vertex-video-ref | S | html | 未到期（上次 2026-11-04） |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 未到期（上次 2026-11-11） |
| wan-hf | S | json | 未到期（上次 2026-11-11） |
| minimax-blog | S | html | 未到期（上次 2026-11-11） |
| minimax-hf | S | json | 未到期（上次 2026-11-11） |
| runway-research | S | html | 未到期（上次 2026-11-04） |
| luma-site | S | html | 未到期（上次 2026-11-04） |
| vidu-changelog | S | spa | 未到期（上次 2026-11-09） |
| vidu-model-map | S | spa | 未到期（上次 2026-11-09） |
| vidu-function-list | S | spa | 未到期（上次 2026-11-09） |
| vidu-site | S | html | 未到期（上次 2026-11-04） |
| vidu-s1-gh | S | json | 未到期（上次 2026-11-04） |
| pika-site | S | html | 未到期（上次 2026-11-05） |
| higgsfield-site | S | html | 未到期（上次 2026-11-04） |
| decart-research | S | html | 未到期（上次 2026-11-04） |
| arxiv-video | S | atom | 未到期（上次 2026-11-07） |
| epoch-notable | A | csv | 未到期（上次 2026-11-11） |
| aa-t2v | A | spa | 未到期（上次 2026-11-11） |
| aa-i2v | A | spa | 未到期（上次 2026-11-11） |
| hf-t2v | A | json | 未到期（上次 2026-11-10） |
| hf-i2v | A | json | 未到期（上次 2026-11-10） |
| hf-v2v | A | json | 未到期（上次 2026-11-11） |
| fal-video | S | spa | 变了 |
| replicate-t2v | S | html | 未到期（上次 2026-11-11） |
| aiwiki | B | spa | 未到期（上次 2026-11-10） |
| futurepedia | B | html | 未到期（上次 2026-11-10） |
| comfyui-releases | C | json | 未到期（上次 2026-11-04） |
| capcut-templates | C | html | 未到期（上次 2026-11-10） |
| picsart-effects | C | html | 抓不到（HTTP 404） |
| runway-changelog | S | spa | 未到期（上次 2026-11-11） |
| runway-models | S | spa | 未到期（上次 2026-11-11） |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| seed-models-hub | S | html | 未到期（上次 2026-11-11） |
| apiyi-models | S | spa | 未到期（上次 2026-11-11） |
| arxiv-worldmodel | S | atom | 变了 |
| techcrunch-ai | B | atom | 未到期（上次 2026-11-10） |
| ltx-gh | S | json | 未到期（上次 2026-11-11） |
| ltx-hf-org | S | json | 未到期（上次 2026-11-10） |
| decart-site | S | spa | 未到期（上次 2026-11-08） |
| picsart-video | C | html | 未到期（上次 2026-10-24） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 未到期（上次 2026-11-04） |
| hailuo-video | S | html | 未到期（上次 2026-11-04） |
| volcengine-ark-price | S | spa | 未到期（上次 2026-11-10） |
| minimax-price | S | spa | 未到期（上次 2026-11-10） |
| google-ai-price | S | html | 未到期（上次 2026-11-10） |
| bailian-price | S | spa | 未到期（上次 2026-11-10） |
| runway-price | S | spa | 未到期（上次 2026-11-10） |
| kling-price | S | spa | 未到期（上次 2026-11-10） |
| vidu-price | S | spa | 未到期（上次 2026-11-10） |
| fal-ltx-price | S | spa | 未到期（上次 2026-11-10） |
| replicate-price | A | html | 未到期（上次 2026-11-10） |
| hf-course | S | html | 未到期（上次 2026-11-10） |
| comfy-docs | S | spa | 未到期（上次 2026-11-04） |
| h3-card | S | html | 未到期（上次 2026-11-04） |
| hf-lineage | S | json | 未到期（上次 2026-11-11） |
| vacetools-gh | C | json | 未到期（上次 2026-11-11） |
| framepack-gh | S | json | 未到期（上次 2026-11-11） |
| fpwrapper-gh | C | json | 未到期（上次 2026-11-11） |
| latentsync-gh | S | json | 未到期（上次 2026-11-11） |
| lswrapper-gh | C | json | 未到期（上次 2026-11-11） |
| float-gh | C | json | 未到期（上次 2026-11-11） |
| sviflf-gh | C | json | 未到期（上次 2026-11-11） |
| flflatent-gh | C | json | 未到期（上次 2026-11-11） |
| mm-blog | S | html | 未到期（上次 2026-11-10） |
| wanwrapper-gh | C | json | 未到期（上次 2026-11-11） |
| comfy-org-hf | S | json | 未到期（上次 2026-11-11） |
| ltx-comfy-gh | S | json | 未到期（上次 2026-11-11） |
| mpt-gh | C | json | 未到期（上次 2026-11-11） |
| manim-gh | C | json | 未到期（上次 2026-11-11） |
| pyvideotrans-gh | C | json | 未到期（上次 2026-11-11） |
| duix-gh | C | json | 未到期（上次 2026-11-11） |
| fay-gh | C | json | 未到期（上次 2026-11-11） |
| narrato-gh | C | json | 未到期（上次 2026-11-11） |
| zho-wf-gh | C | json | 未到期（上次 2026-11-11） |
| echomimic-gh | C | json | 未到期（上次 2026-11-11） |
| linly-talker-gh | C | json | 未到期（上次 2026-11-11） |
| animate-anything-gh | C | json | 未到期（上次 2026-11-11） |
| huobao-gh | C | json | 未到期（上次 2026-11-11） |
| awesome-vd-gh | C | json | 未到期（上次 2026-11-11） |
| seedream-page | S | html | 未到期（上次 2026-11-04） |
| openai-models | S | html | 变了 |
| gemini-models | S | spa | 未到期（上次 2026-11-09） |
| google-gemini-blog | S | html | 未到期（上次 2026-11-04） |
| azure-foundry-blog | B | html | 未到期（上次 2026-11-10） |
| recraft-blog | S | html | 未到期（上次 2026-11-10） |
| kolors-gh | S | html | 未到期（上次 2026-11-10） |
| krea-blog | S | html | 未到期（上次 2026-11-04） |
| wiki-midjourney | B | html | 未到期（上次 2026-10-11） |
| comfyui-gh | S | json | 未到期（上次 2026-11-10） |
| sdwebui-gh | S | json | 未到期（上次 2026-11-10） |
| fooocus-gh | S | json | 未到期（上次 2026-11-10） |
| invokeai-gh | S | json | 未到期（上次 2026-11-10） |
| iopaint-gh | S | json | 未到期（上次 2026-11-10） |
| rembg-gh | S | json | 未到期（上次 2026-11-10） |
| realesrgan-gh | S | json | 未到期（上次 2026-11-10） |
| gfpgan-gh | S | json | 未到期（上次 2026-11-10） |
| codeformer-gh | S | json | 未到期（上次 2026-11-10） |
| oldphoto-gh | S | json | 未到期（上次 2026-11-10） |
| controlnet-gh | S | json | 未到期（上次 2026-11-10） |
| ipadapter-gh | S | json | 未到期（上次 2026-11-10） |
| instantid-gh | S | json | 未到期（上次 2026-11-10） |
| photomaker-gh | S | json | 未到期（上次 2026-11-10） |
| iclight-gh | S | json | 未到期（上次 2026-11-10） |
| idmvton-gh | S | json | 未到期（上次 2026-11-10） |
| ootd-gh | S | json | 未到期（上次 2026-11-10） |
| catvton-gh | S | json | 未到期（上次 2026-11-10） |
| kritaai-gh | S | json | 未到期（上次 2026-11-10） |
| omnigen-gh | S | json | 未到期（上次 2026-11-10） |
| step1x-gh | S | json | 未到期（上次 2026-11-10） |
| qwenimage-gh | S | json | 未到期（上次 2026-11-10） |
| anytext-gh | S | json | 未到期（上次 2026-11-10） |
| incontextlora-gh | S | json | 未到期（上次 2026-11-10） |
| comictrans-gh | S | json | 未到期（上次 2026-11-10） |
| manganinjia-gh | S | json | 未到期（上次 2026-11-10） |
| starvector-gh | S | json | 未到期（上次 2026-11-10） |
| svgdreamer-gh | S | json | 未到期（上次 2026-11-10） |
| easyphoto-gh | S | json | 未到期（上次 2026-11-10） |
| ipadapter-plus-gh | S | json | 未到期（上次 2026-11-10） |
| controlnet-aux-gh | S | json | 未到期（上次 2026-11-10） |
| ultimate-upscale-gh | S | json | 未到期（上次 2026-11-10） |
| comfy-manager-gh | S | json | 未到期（上次 2026-11-10） |
| comfy-examples-gh | S | json | 未到期（上次 2026-11-10） |
| comfy-templates-gh | S | json | 未到期（上次 2026-11-10） |
| hf-diffusion-class-gh | S | json | 未到期（上次 2026-11-10） |
| fastai-course | S | html | 未到期（上次 2026-11-10） |
| dreamtextures-gh | S | json | 未到期（上次 2026-11-10） |
| char2d-gh | S | json | 未到期（上次 2026-11-10） |
| hf-pixelart-lora | S | json | 未到期（上次 2026-10-11） |
| google-nb-blog | S | html | 未到期（上次 2026-11-05） |
| ms-foundry-blog | B | html | 未到期（上次 2026-11-10） |
| mj-updates | S | html | 未到期（上次 2026-11-04） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 281 个字符） |
| hf-t2i | A | json | 未到期（上次 2026-11-10） |
| hf-i2i | A | json | 未到期（上次 2026-11-10） |
| anthropic-models | S | html | 变了 |
| deepseek-docs | S | html | 没内容 |
| xai-docs | S | html | 无变化 |
| doubao-force-2026 | B | html | 未到期（上次 2026-11-10） |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 未到期（上次 2026-11-04） |
| glm-api | S | html | 未到期（上次 2026-11-04） |
| minimax-platform | S | html | 未到期（上次 2026-11-04） |
| langchain-gh | S | json | 未到期（上次 2026-11-10） |
| langgraph-gh | S | json | 未到期（上次 2026-11-10） |
| llamaindex-gh | S | json | 未到期（上次 2026-11-10） |
| vllm-gh | S | json | 未到期（上次 2026-11-10） |
| llamacpp-gh | S | json | 未到期（上次 2026-11-10） |
| ollama-gh | S | json | 未到期（上次 2026-11-10） |
| ragflow-gh | S | json | 未到期（上次 2026-11-10） |
| dify-gh | S | json | 未到期（上次 2026-11-10） |
| n8n-gh | S | json | 未到期（上次 2026-11-10） |
| openwebui-gh | S | json | 未到期（上次 2026-11-10） |
| autogen-gh | S | json | 未到期（上次 2026-11-10） |
| crewai-gh | S | json | 未到期（上次 2026-11-10） |
| litellm-gh | S | json | 未到期（上次 2026-11-10） |
| transformers-gh | S | json | 未到期（上次 2026-11-10） |
| unsloth-gh | S | json | 未到期（上次 2026-11-10） |
| llamafactory-gh | S | json | 未到期（上次 2026-11-10） |
| aider-gh | S | json | 未到期（上次 2026-11-10） |
| cline-gh | S | json | 未到期（上次 2026-11-10） |
| continue-gh | S | json | 未到期（上次 2026-11-10） |
| openhands-gh | S | json | 未到期（上次 2026-11-10） |
| browseruse-gh | S | json | 未到期（上次 2026-11-10） |
| markitdown-gh | S | json | 未到期（上次 2026-11-10） |
| unstructured-gh | S | json | 未到期（上次 2026-11-10） |
| mineru-gh | S | json | 未到期（上次 2026-11-10） |
| mcpservers-gh | S | json | 未到期（上次 2026-11-10） |
| anthropic-features | S | html | 变了 |
| openai-docs | S | html | 变了 |
| deepseek-pricing | S | spa | 无变化 |
| deepseek-updates | S | spa | 无变化 |
| bailian-models | S | html | 未到期（上次 2026-11-11） |
| kimi-pricing | S | html | 未到期（上次 2026-11-04） |
| glm-52-doc | S | html | 未到期（上次 2026-11-04） |
| kimi-websearch | S | html | 未到期（上次 2026-11-04） |
| bailian-websearch | S | html | 未到期（上次 2026-11-04） |
| glm-websearch | S | html | 未到期（上次 2026-11-04） |
| bailian-coder | S | html | 未到期（上次 2026-11-04） |
| ark-models | S | spa | 未到期（上次 2026-11-11） |
| minimax-api-overview | S | spa | 未到期（上次 2026-11-09） |
| openai-caching | S | html | 未到期（上次 2026-11-05） |
| openai-structured | S | html | 未到期（上次 2026-11-05） |
| deepseek-chat-api | S | html | 未到期（上次 2026-11-05） |
| gemini-audio | S | spa | 未到期（上次 2026-11-05） |
| gemini-vision | S | spa | 未到期（上次 2026-11-05） |
| minimax-anthropic-api | S | html | 未到期（上次 2026-11-09） |
| minimax-openai-api | S | spa | 未到期（上次 2026-11-04） |
| minimax-server-tools | S | spa | 未到期（上次 2026-11-04） |
| minimax-caching | S | spa | 未到期（上次 2026-11-04） |
| minimax-openapi | S | json | 未到期（上次 2026-11-11） |
| gemini-computer-use | S | spa | 未到期（上次 2026-11-05） |
| ark-pricing | S | spa | 未到期（上次 2026-11-04） |
| bailian-models-zh | S | spa | 未到期（上次 2026-11-11） |
| glm-batch | S | html | 未到期（上次 2026-11-11） |
| glm-chat-api | S | html | 未到期（上次 2026-11-11） |
| claude-deprecations | S | html | 变了 |
| openai-changelog | S | spa | 变了 |
| gemini-changelog | S | spa | 未到期（上次 2026-11-09） |
| xai-release-notes | S | spa | 未到期（上次 2026-11-09） |
| aa-llm | B | spa | 未到期（上次 2026-11-04） |
| ideogram-api | S | html | 未到期（上次 2026-11-04） |
| elevenlabs-models | S | html | 未到期（上次 2026-11-07） |
| openai-realtime | S | html | 未到期（上次 2026-11-04） |
| gemini-tts | S | spa | 未到期（上次 2026-11-02） |
| elevenlabs-tts | S | html | 未到期（上次 2026-11-04） |
| bailian-omni | S | html | 未到期（上次 2026-11-05） |
| elevenlabs-remix | S | html | 未到期（上次 2026-11-04） |
| openai-tts | S | html | 未到期（上次 2026-11-04） |
| gemini-music | S | html | 变了 |
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
| minimax-release | S | spa | 未到期（上次 2026-11-11） |
| s-e2ab-gh | C | json | 未到期（上次 2026-11-11） |
| s-abogen-gh | C | json | 未到期（上次 2026-11-11） |
| s-epub2tts-gh | C | json | 未到期（上次 2026-11-11） |
| s-abcreator-gh | C | json | 未到期（上次 2026-11-11） |
| s-smartsub-gh | C | json | 未到期（上次 2026-11-11） |
| s-youdub-gh | C | json | 未到期（上次 2026-11-11） |
| s-pipecat-gh | C | json | 未到期（上次 2026-11-11） |
| s-livekit-gh | C | json | 未到期（上次 2026-11-11） |
| s-hfs2s-gh | C | json | 未到期（上次 2026-11-11） |
| s-moshi-gh | C | json | 未到期（上次 2026-11-11） |
| s-acestep15-gh | C | json | 未到期（上次 2026-11-11） |
| s-acestep-gh | C | json | 未到期（上次 2026-11-11） |
| s-yue-gh | C | json | 未到期（上次 2026-11-11） |
| s-audiocraft-gh | C | json | 未到期（上次 2026-11-11） |
| s-gptsovits-gh | C | json | 未到期（上次 2026-11-11） |
| s-rvc-gh | C | json | 未到期（上次 2026-11-11） |
| s-fishspeech-gh | C | json | 未到期（上次 2026-11-11） |
| s-indextts-gh | C | json | 未到期（上次 2026-11-11） |
| s-cosyvoice-gh | C | json | 未到期（上次 2026-11-11） |
| s-f5tts-gh | C | json | 未到期（上次 2026-11-11） |
| s-qwen3omni-gh | C | json | 未到期（上次 2026-11-11） |
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
| hf-kokoro | A | json | 未到期（上次 2026-11-10） |
| hf-cosyvoice2 | A | json | 未到期（上次 2026-11-10） |
| hf-glmtts | A | json | 未到期（上次 2026-11-10） |
| hf-glm4voice | A | json | 未到期（上次 2026-11-10） |
| hf-fishspeech15 | A | html | 未到期（上次 2026-10-14） |
| hf-qwen3omni | A | json | 未到期（上次 2026-11-10） |
| hf-qwen-layered | A | html | 未到期（上次 2026-10-14） |
| hf-org-minimax | A | json | 未到期（上次 2026-11-10） |
| hf-org-xai | A | json | 未到期（上次 2026-11-10） |
| hf-org-elevenlabs | A | json | 未到期（上次 2026-11-10） |
| hf-org-openai | A | json | 未到期（上次 2026-11-10） |
| ideogram-layerize | A | html | 未到期（上次 2026-11-10） |
| recraft-endpoints | A | html | 未到期（上次 2026-11-05） |
| recraft-nl-edit | A | html | 未到期（上次 2026-11-05） |
| hunyuan-image-hf | A | json | 未到期（上次 2026-11-05） |
| bfl-flux2-overview | A | html | 未到期（上次 2026-11-05） |
| bfl-flux2-multiref | A | html | 未到期（上次 2026-11-08） |
| ark-seedream-api | A | spa | 未到期（上次 2026-11-05） |
| arxiv-fp8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-int8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-qlora | A | html | 未到期（上次 2026-08-13） |
| arxiv-gptq | A | html | 未到期（上次 2026-08-13） |
| arxiv-awq | A | html | 未到期（上次 2026-08-13） |
| arxiv-lora | A | html | 未到期（上次 2026-08-13） |
| hf-gguf-doc | A | html | 未到期（上次 2026-08-13） |
| hf-diffusers-memory | A | html | 未到期（上次 2026-08-13） |
| zimage-gh | A | html | 未到期（上次 2026-11-07） |
| hunyuan-image-gh | A | html | 未到期（上次 2026-11-07） |
| skyreels-gh | A | html | 未到期（上次 2026-11-07） |
| bfl-flux3 | A | html | 未到期（上次 2026-11-07） |
| anthropic-privacy | A | html | 未到期（上次 2026-08-14） |
| stability-terms | A | html | 未到期（上次 2026-08-14） |
| gh-llm-universe | C | json | 变了 |
| gh-all-in-rag | C | json | 变了 |
| gh-handy-multi-agent | C | json | 变了 |
| gh-llm-action | C | json | 变了 |
| gh-self-llm | C | json | 变了 |
| gh-langchain-zh | C | json | 变了 |
| gh-llamafactory | C | json | 变了 |
| gh-chattts-cn | C | json | 变了 |
| gh-comfyui | C | json | 变了 |
| gh-sdbook | C | json | 变了 |
| waytoagi-wiki | C | spa | 从未抓过 |
| hf-hunyuan3d-21 | S | html | 未到期（上次 2026-11-07） |
| tripo-docs-generation | S | spa | 未到期（上次 2026-11-07） |
| meshy-docs-api | S | spa | 未到期（上次 2026-11-07） |
| meshy-site | S | spa | 未到期（上次 2026-11-07） |
| rodin-api-docs | S | html | 未到期（上次 2026-11-08） |
| gh-trellis | S | html | 未到期（上次 2026-11-07） |
| seed3d-page | S | spa | 从未抓过 |
| stability-spar3d | S | html | 未到期（上次 2026-11-07） |
| tripo-site | S | spa | 抓不到（被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法） |
| rodin-site | S | spa | 未到期（上次 2026-11-07） |
| tripo-docs-animation | S | spa | 未到期（上次 2026-11-07） |
| gh-hunyuan3d-buffalo | S | html | 未到期（上次 2026-11-07） |
| replicate-hunyuan3d-31 | A | spa | 未到期（上次 2026-11-07） |
| replicate-3d | A | spa | 未到期（上次 2026-11-06） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-11-06） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-11-06） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-11-06） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-11-06） |
| gh-spar3d | S | html | 未到期（上次 2026-11-06） |
| gh-triposg | S | html | 未到期（上次 2026-11-06） |
| gh-instantmesh | S | html | 未到期（上次 2026-11-06） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 未到期（上次 2026-11-07） |
| hf-ltx-25 | S | html | 未到期（上次 2026-11-07） |
| meshy-changelog | S | spa | 未到期（上次 2026-11-07） |
| hf-instantmesh | S | html | 未到期（上次 2026-11-06） |
| hf-apple-sharp | S | html | 未到期（上次 2026-11-06） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-11-06） |
| hf-anysplat | S | html | 未到期（上次 2026-11-06） |
| arxiv-seed3d-20 | S | html | 变了 |
| arxiv-seed3d-10 | S | html | 无变化 |
| hf-trellis2 | S | html | 未到期（上次 2026-11-06） |
| pixverse-caps | S | html | 抓不到（HTTP 404） |
| pixverse-v6 | S | html | 抓不到（HTTP 404） |
| pixverse-fusion | S | html | 抓不到（HTTP 404） |
| hf-cogvideox | S | html | 未到期（上次 2026-11-07） |
| hf-i2vgen | S | html | 未到期（上次 2026-11-07） |
| hf-longcat-edit | S | html | 未到期（上次 2026-11-07） |
| hf-magi | S | html | 未到期（上次 2026-11-07） |
| heygen-docs | S | spa | 未到期（上次 2026-11-07） |
| synthesia-docs | S | spa | 未到期（上次 2026-11-07） |
| hf-longcat-avatar | S | html | 未到期（上次 2026-11-07） |
| hf-hunyuan-avatar | S | html | 未到期（上次 2026-11-07） |
| hf-liveportrait | S | html | 未到期（上次 2026-11-07） |
| hf-musetalk | S | html | 未到期（上次 2026-11-07） |
| hf-hallo2 | S | html | 未到期（上次 2026-11-07） |
| replicate-lipsync | A | spa | 未到期（上次 2026-11-07） |
| comfy-s2v | S | html | 未到期（上次 2026-11-07） |
| heygen-translate | S | html | 未到期（上次 2026-11-07） |
| heygen-live | S | html | 未到期（上次 2026-11-07） |
| heygen-photo | S | html | 未到期（上次 2026-11-07） |
| heygen-training | S | html | 未到期（上次 2026-11-07） |
| heygen-changelog | S | html | 未到期（上次 2026-11-07） |
| hf-hallo-live | S | html | 未到期（上次 2026-11-07） |
| hf-longcat-avatar-10 | S | html | 未到期（上次 2026-11-07） |
| gh-video-retalking | S | html | 未到期（上次 2026-11-07） |
| elevenlabs-changelog | S | html | 未到期（上次 2026-11-07） |
| hf-glm-voice | S | html | 未到期（上次 2026-11-07） |
| hf-glm-tts | S | html | 未到期（上次 2026-11-07） |
| openai-model-tts | S | spa | 未到期（上次 2026-11-07） |
| openai-model-realtime | S | spa | 未到期（上次 2026-11-07） |
| elevenlabs-docs | S | html | 未到期（上次 2026-11-05） |
| gemini-robotics-er | S | html | 未到期（上次 2026-11-07） |
| figure-helix | A | html | 未到期（上次 2026-11-07） |
| pi-pi05-blog | A | html | 未到期（上次 2026-11-11） |
| pi-openpi-gh | A | html | 未到期（上次 2026-11-07） |
| nvidia-groot-gh | A | html | 未到期（上次 2026-11-07） |
| openvla-gh | A | html | 未到期（上次 2026-11-07） |
| openvla-repo | A | html | 未到期（上次 2026-11-07） |
| hf-robotics | B | json | 未到期（上次 2026-11-07） |
| lerobot-gh | A | json | 未到期（上次 2026-11-07） |
| groot-policy-doc | A | html | 未到期（上次 2026-11-07） |
| rynnbrain-card | A | html | 未到期（上次 2026-11-07） |
| maniskill-gh | B | json | 变了 |
| cosmos3-card | S | html | 未到期（上次 2026-11-07） |
| genie3-blog | A | html | 未到期（上次 2026-11-07） |
| odyssey-site | S | html | 未到期（上次 2026-11-07） |
| worldlabs-marble | A | html | 未到期（上次 2026-11-07） |
| matrixgame-card | A | html | 未到期（上次 2026-11-07） |
| hunyuanworld-gh | A | html | 未到期（上次 2026-11-07） |
| wham-card | A | html | 无变化 |
| vjepa2-blog | A | html | 变了 |
| vjepa2-card | B | html | 无变化 |
| sci-boltz-gh | A | html | 未到期（上次 2026-11-07） |
| sci-af3-blog | A | html | 未到期（上次 2026-10-14） |
| sci-esm2-card | B | html | 未到期（上次 2026-10-14） |
| sci-wn-gh | A | html | 未到期（上次 2026-11-07） |
| sci-aurora-gh | A | html | 未到期（上次 2026-11-07） |
| sci-neuralgcm-gh | A | html | 未到期（上次 2026-11-07） |
| sci-mattergen-gh | A | html | 未到期（上次 2026-11-07） |
| sci-mace-gh | A | html | 未到期（上次 2026-11-07） |
| sci-gnome-gh | A | html | 未到期（上次 2026-11-07） |
| seed-25 | A | html | 未到期（上次 2026-11-07） |
| veo-doc | A | html | 未到期（上次 2026-11-05） |
| sora-api | A | html | 未到期（上次 2026-11-07） |
| wan-site | A | html | 未到期（上次 2026-11-07） |
| mm-hf-api | A | json | 未到期（上次 2026-11-07） |
| vidu-s1-paper | A | html | 未到期（上次 2026-08-15） |
| omni-doc | A | html | 未到期（上次 2026-11-08） |
| ltx-hf-23 | A | html | 未到期（上次 2026-11-07） |
| gemini-image-docs | A | html | 未到期（上次 2026-11-05） |
| openai-image-docs | A | html | 未到期（上次 2026-11-05） |
| recraft-docs | A | html | 未到期（上次 2026-11-07） |
| bfl-docs | A | html | 未到期（上次 2026-11-07） |
| zimage-card | A | html | 未到期（上次 2026-11-07） |
| hunyuan-image-card | A | html | 未到期（上次 2026-11-07） |
| smolvla-card | A | html | 未到期（上次 2026-11-07） |
| molmoact-card | A | html | 未到期（上次 2026-11-07） |
| hf-whisper | A | html | 未到期（上次 2026-11-05） |
| hf-sensevoice | A | html | 未到期（上次 2026-11-07） |
| hf-qwen3-asr | A | html | 未到期（上次 2026-11-07） |
| minimax-release-notes | A | html | 未到期（上次 2026-11-02） |
| seed-blog-1_5 | A | html | 未到期（上次 2026-11-07） |
| seed-blog-2_0 | A | html | 未到期（上次 2026-11-07） |
| ideogram-x | A | html | 未到期（上次 2026-11-07） |
| hf-funcineforge | S | html | 未到期（上次 2026-11-01） |
| hf-org | S | json | 变了 |
| gh-gptsovits-cn | C | json | 未到期（上次 2026-11-08） |
| gemini-nb21 | S | spa | 未到期（上次 2026-11-07） |
| xai-grok47-model | S | spa | 未到期（上次 2026-11-09） |
| ideogram-v1-overview | A | html | 未到期（上次 2026-11-07） |
| ideogram-v1-upscale | A | html | 未到期（上次 2026-11-07） |
| rodin-gen25-api | A | html | 未到期（上次 2026-11-07） |
| rodin-bang-api | A | html | 未到期（上次 2026-11-07） |
| card-deepseek-ai-deepseek-v3-2 | A | html | 未到期（上次 2026-11-07） |
| card-zai-org-glm-4-5 | A | html | 未到期（上次 2026-11-07） |
| card-zai-org-glm-4-6 | A | html | 未到期（上次 2026-11-07） |
| card-zai-org-glm-5 | A | html | 未到期（上次 2026-11-07） |
| card-zai-org-glm-5-1 | A | html | 未到期（上次 2026-11-07） |
| card-zai-org-glm-5-2 | A | html | 未到期（上次 2026-11-07） |
| card-moonshotai-kimi-k2-base | A | html | 未到期（上次 2026-11-07） |
| card-moonshotai-kimi-k2-thinking | A | html | 未到期（上次 2026-11-07） |
| card-moonshotai-kimi-k2-5 | A | html | 未到期（上次 2026-11-07） |
| card-moonshotai-kimi-k2-6 | A | html | 未到期（上次 2026-11-07） |
| card-moonshotai-kimi-k3 | A | html | 未到期（上次 2026-11-07） |
| card-minimaxai-minimax-m2 | A | html | 未到期（上次 2026-11-07） |
| card-minimaxai-minimax-m2-5 | A | html | 未到期（上次 2026-11-07） |
| card-minimaxai-minimax-m3 | A | html | 未到期（上次 2026-11-07） |
| card-mistralai-mistral-large-3-675b-instruct-2512 | A | html | 未到期（上次 2026-11-07） |
| card-mistralai-mistral-small-4-119b-2603 | A | html | 未到期（上次 2026-11-07） |
| card-mistralai-mistral-medium-3-5-128b | A | html | 未到期（上次 2026-11-07） |
| card-qwen-qwen3-5-27b | A | html | 未到期（上次 2026-11-07） |
| card-qwen-qwen3-6-27b | A | html | 未到期（上次 2026-11-07） |
| card-tencent-hunyuan3d-part | A | html | 未到期（上次 2026-11-07） |
| card-zai-org-glm-4-7 | A | html | 未到期（上次 2026-11-07） |
| gemini-argon | S | spa | 未到期（上次 2026-11-09） |
| gemini-tts38 | S | spa | 未到期（上次 2026-11-09） |
| vidu-q4-i2v | S | spa | 未到期（上次 2026-11-09） |
| vidu-q4-reference | S | spa | 未到期（上次 2026-11-09） |
| xai-voice3 | S | spa | 未到期（上次 2026-11-09） |
| minimax-m31-guide | S | html | 未到期（上次 2026-11-09） |
| minimax-m31-tools | S | html | 未到期（上次 2026-11-09） |
| recraft-image-to-image | S | html | 未到期（上次 2026-11-09） |
| recraft-inpainting | S | html | 未到期（上次 2026-11-09） |
| recraft-outpainting | S | html | 未到期（上次 2026-11-09） |
| recraft-upscale | S | html | 未到期（上次 2026-11-09） |

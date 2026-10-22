# 信息源监视报告 · 2026-10-22

本次检查 34 个到期源（共 467 个）：变化 27 · 首次 0 · 无变化 2 · **抓不到 4**

> 这份报告是给人看的那 20 条待办的来源（§59.3 的负反馈：人每周要看的条目 ≤ 20）。
> 「抓不到」不是失败，是**信息本身** —— 一个长期抓不到的官方源，说明那家厂商没有可 diff 的公开更新入口，
> 而那正好解释了为什么它名下的格子质量最差。

## 抓到了但没内容（比抓不到更危险 —— 它不会喊）

- **deepseek-docs** DeepSeek 官方 API 文档 — 正文里找不到任何一个期望关键词（https://api-docs.deepseek.com/）

## 抓不到（要处理）

- **picsart-effects**（C/html）Picsart Effects — HTTP 403
  https://picsart.com/ai-video-effects/
- **picsart-video**（C/html）Picsart AI 视频 — HTTP 403
  https://picsart.com/ai-video-generator/
- **aa-t2i**（A/spa）Artificial Analysis · 文生图竞技场 — 还是壳：渲染后正文只有 281 个字符
  https://artificialanalysis.ai/text-to-image/arena
- **tripo-site**（S/spa）Tripo 官网 — 被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法
  https://www.tripo3d.ai/

## 有变化

- **pika-site** Pika 官网
- **fal-video** fal · 视频模型目录
- **arxiv-worldmodel** arXiv · world model / 实时视频生成
  新增 38 条：Guess and Send: World-Model-Guided Semantic Packet Transmission for Robust Video Perception、LiveAct: Towards Real-Time Multi-Agent World Models with Heterogeneous Action Interfaces、How Representational Priors Shape Generalization in World Action Models、OccJEPA: Occlusion as Masking for Amodal Video Segmentation、AEON: Unifying Video and 3D World Models、Physical Canvas: A Vision Tactile World Model For Robot Policy Evaluation And Learning、Learning the 4D World through Point Trajectory Forecasting、OverSeer: Multi-Agent World Models Beyond What Agents See、MoDDiT: Simple Token Routing in Diffusion Transformers、EndoWorld-JEPA: Motion-Guided Global-Local Latent World Modeling for Endoscopic Video Representation Learning、LaLa-World: Scaling Latent World Models with Natural Language Actions、RoboJudge: Multimodal Language Models as Judges for Embodied Video Generation …
- **openai-models** OpenAI · 官方模型列表
- **google-nb-blog** Google 官方博客 · Nano Banana 系列
- **anthropic-models** Anthropic 官方文档 · 模型总览
- **anthropic-features** Anthropic 官方文档 · Features overview
- **openai-docs** OpenAI 开发者文档 · 指南索引
- **deepseek-pricing** DeepSeek 官方文档 · 模型与价格
- **deepseek-updates** DeepSeek 官方文档 · 更新日志
- **openai-caching** OpenAI · Prompt Caching
- **openai-structured** OpenAI · Structured model outputs
- **deepseek-chat-api** DeepSeek · Create Chat Completion
- **gemini-audio** Gemini API · Audio understanding
- **gemini-vision** Gemini API · Image understanding
- **gemini-computer-use** Gemini API · Computer Use
- **claude-deprecations** Anthropic · Model deprecations
- **openai-changelog** OpenAI · API Changelog
- **bailian-omni** 阿里云百炼 · Qwen-Omni
- **bailian-websearch-zh** 阿里云百炼中文站 · 联网搜索
- **ark-seedream-api** 火山方舟 API 参考 · 图片生成 API
- **elevenlabs-docs** ElevenLabs · 文档索引（llms.txt）
- **veo-doc** Google · Veo 3.1 官方文档
- **gemini-image-docs** Google · Gemini API 图像生成官方文档
- **openai-image-docs** OpenAI · Image generation 官方指南
- **hf-whisper** OpenAI 官方 · Whisper large-v3 模型卡
- **hf-org** Hugging Face 官方组织目录（模型接口）
  新增 380 条：ATH-MaaS/OvisOCR3、Abiray/Fibo-2.0-edit-turbo-GGUF、Abiray/flint-40B-A2.5B-Q4_K_M-GGUF、AdityaaXD/Multi-Agent_Reinforcement_Learning_Trading_System_Models、Agnes-AI/Agnes-3.0-Qwen、AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GGUF、AtomicChat/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-GGUF、AtomicChat/Ornith-1.5-122B-GGUF、AtomicChat/Ternary-Bonsai-2-9B-Uncensored-LoRA-GGUF、BAAI/bge-reranker-v2-m3、BennyDaBall/Z-Image-Engineer-V6-GGUF、BlackwellBoy/DeepSeek-V4.1-Flash-1017-BLACKFOLD-EXL3-2.9bpw-TP2 …

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 未到期（上次 2026-10-21） |
| seed-models | S | html | 未到期（上次 2026-10-21） |
| kling-api-updates | S | spa | 未到期（上次 2026-10-21） |
| kling-site | S | spa | 未到期（上次 2026-10-10） |
| google-video-docs | S | html | 未到期（上次 2026-10-21） |
| deepmind-veo | S | html | 未到期（上次 2026-10-21） |
| vertex-video-ref | S | html | 未到期（上次 2026-10-21） |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 未到期（上次 2026-10-21） |
| wan-hf | S | json | 未到期（上次 2026-10-21） |
| minimax-blog | S | html | 未到期（上次 2026-10-21） |
| minimax-hf | S | json | 未到期（上次 2026-10-21） |
| runway-research | S | html | 未到期（上次 2026-10-21） |
| luma-site | S | html | 未到期（上次 2026-10-21） |
| vidu-changelog | S | spa | 未到期（上次 2026-10-19） |
| vidu-model-map | S | spa | 未到期（上次 2026-10-19） |
| vidu-function-list | S | spa | 未到期（上次 2026-10-19） |
| vidu-site | S | html | 未到期（上次 2026-10-21） |
| vidu-s1-gh | S | json | 未到期（上次 2026-10-21） |
| pika-site | S | html | 变了 |
| higgsfield-site | S | html | 未到期（上次 2026-10-21） |
| decart-research | S | html | 未到期（上次 2026-10-21） |
| arxiv-video | S | atom | 未到期（上次 2026-10-16） |
| epoch-notable | A | csv | 未到期（上次 2026-10-21） |
| aa-t2v | A | spa | 未到期（上次 2026-10-21） |
| aa-i2v | A | spa | 未到期（上次 2026-10-21） |
| hf-t2v | A | json | 未到期（上次 2026-10-20） |
| hf-i2v | A | json | 未到期（上次 2026-10-20） |
| hf-v2v | A | json | 未到期（上次 2026-10-21） |
| fal-video | S | spa | 变了 |
| replicate-t2v | S | html | 未到期（上次 2026-10-21） |
| aiwiki | B | spa | 未到期（上次 2026-10-11） |
| futurepedia | B | html | 未到期（上次 2026-10-11） |
| comfyui-releases | C | json | 未到期（上次 2026-10-21） |
| capcut-templates | C | html | 未到期（上次 2026-10-11） |
| picsart-effects | C | html | 抓不到（HTTP 403） |
| runway-changelog | S | spa | 未到期（上次 2026-10-21） |
| runway-models | S | spa | 未到期（上次 2026-10-21） |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| seed-models-hub | S | html | 未到期（上次 2026-10-21） |
| apiyi-models | S | spa | 未到期（上次 2026-10-21） |
| arxiv-worldmodel | S | atom | 变了 |
| techcrunch-ai | B | atom | 未到期（上次 2026-10-20） |
| ltx-gh | S | json | 未到期（上次 2026-10-21） |
| ltx-hf-org | S | json | 未到期（上次 2026-10-20） |
| decart-site | S | spa | 未到期（上次 2026-10-18） |
| picsart-video | C | html | 抓不到（HTTP 403） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 未到期（上次 2026-10-21） |
| hailuo-video | S | html | 未到期（上次 2026-10-21） |
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
| comfy-docs | S | spa | 未到期（上次 2026-10-21） |
| h3-card | S | html | 未到期（上次 2026-10-21） |
| hf-lineage | S | json | 未到期（上次 2026-10-21） |
| vacetools-gh | C | json | 未到期（上次 2026-10-21） |
| framepack-gh | S | json | 未到期（上次 2026-10-21） |
| fpwrapper-gh | C | json | 未到期（上次 2026-10-21） |
| latentsync-gh | S | json | 未到期（上次 2026-10-21） |
| lswrapper-gh | C | json | 未到期（上次 2026-10-21） |
| float-gh | C | json | 未到期（上次 2026-10-21） |
| sviflf-gh | C | json | 未到期（上次 2026-10-21） |
| flflatent-gh | C | json | 未到期（上次 2026-10-21） |
| mm-blog | S | html | 未到期（上次 2026-10-11） |
| wanwrapper-gh | C | json | 未到期（上次 2026-10-21） |
| comfy-org-hf | S | json | 未到期（上次 2026-10-21） |
| ltx-comfy-gh | S | json | 未到期（上次 2026-10-21） |
| mpt-gh | C | json | 未到期（上次 2026-10-21） |
| manim-gh | C | json | 未到期（上次 2026-10-21） |
| pyvideotrans-gh | C | json | 未到期（上次 2026-10-21） |
| duix-gh | C | json | 未到期（上次 2026-10-21） |
| fay-gh | C | json | 未到期（上次 2026-10-21） |
| narrato-gh | C | json | 未到期（上次 2026-10-21） |
| zho-wf-gh | C | json | 未到期（上次 2026-10-21） |
| echomimic-gh | C | json | 未到期（上次 2026-10-21） |
| linly-talker-gh | C | json | 未到期（上次 2026-10-21） |
| animate-anything-gh | C | json | 未到期（上次 2026-10-21） |
| huobao-gh | C | json | 未到期（上次 2026-10-21） |
| awesome-vd-gh | C | json | 未到期（上次 2026-10-21） |
| seedream-page | S | html | 未到期（上次 2026-10-21） |
| openai-models | S | html | 变了 |
| gemini-models | S | spa | 未到期（上次 2026-10-19） |
| google-gemini-blog | S | html | 未到期（上次 2026-10-21） |
| azure-foundry-blog | B | html | 未到期（上次 2026-10-11） |
| recraft-blog | S | html | 未到期（上次 2026-10-11） |
| kolors-gh | S | html | 未到期（上次 2026-10-11） |
| krea-blog | S | html | 未到期（上次 2026-10-21） |
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
| google-nb-blog | S | html | 变了 |
| ms-foundry-blog | B | html | 未到期（上次 2026-10-11） |
| mj-updates | S | html | 未到期（上次 2026-10-21） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 281 个字符） |
| hf-t2i | A | json | 未到期（上次 2026-10-20） |
| hf-i2i | A | json | 未到期（上次 2026-10-20） |
| anthropic-models | S | html | 变了 |
| deepseek-docs | S | html | 没内容 |
| xai-docs | S | html | 无变化 |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 未到期（上次 2026-10-21） |
| glm-api | S | html | 未到期（上次 2026-10-21） |
| minimax-platform | S | html | 未到期（上次 2026-10-21） |
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
| anthropic-features | S | html | 变了 |
| openai-docs | S | html | 变了 |
| deepseek-pricing | S | spa | 变了 |
| deepseek-updates | S | spa | 变了 |
| bailian-models | S | html | 未到期（上次 2026-10-21） |
| kimi-pricing | S | html | 未到期（上次 2026-10-21） |
| glm-52-doc | S | html | 未到期（上次 2026-10-21） |
| kimi-websearch | S | html | 未到期（上次 2026-10-21） |
| bailian-websearch | S | html | 未到期（上次 2026-10-21） |
| glm-websearch | S | html | 未到期（上次 2026-10-21） |
| bailian-coder | S | html | 未到期（上次 2026-10-21） |
| ark-models | S | spa | 未到期（上次 2026-10-21） |
| minimax-api-overview | S | spa | 未到期（上次 2026-10-19） |
| openai-caching | S | html | 变了 |
| openai-structured | S | html | 变了 |
| deepseek-chat-api | S | html | 变了 |
| gemini-audio | S | spa | 变了 |
| gemini-vision | S | spa | 变了 |
| minimax-anthropic-api | S | html | 未到期（上次 2026-10-19） |
| minimax-openai-api | S | spa | 未到期（上次 2026-10-21） |
| minimax-server-tools | S | spa | 未到期（上次 2026-10-21） |
| minimax-caching | S | spa | 未到期（上次 2026-10-21） |
| minimax-openapi | S | json | 未到期（上次 2026-10-21） |
| gemini-computer-use | S | spa | 变了 |
| ark-pricing | S | spa | 未到期（上次 2026-10-21） |
| bailian-models-zh | S | spa | 未到期（上次 2026-10-21） |
| glm-batch | S | html | 未到期（上次 2026-10-21） |
| glm-chat-api | S | html | 未到期（上次 2026-10-21） |
| claude-deprecations | S | html | 变了 |
| openai-changelog | S | spa | 变了 |
| gemini-changelog | S | spa | 未到期（上次 2026-10-19） |
| xai-release-notes | S | spa | 未到期（上次 2026-10-19） |
| aa-llm | B | spa | 未到期（上次 2026-10-21） |
| ideogram-api | S | html | 未到期（上次 2026-10-21） |
| elevenlabs-models | S | html | 未到期（上次 2026-10-10） |
| openai-realtime | S | html | 未到期（上次 2026-10-21） |
| gemini-tts | S | spa | 未到期（上次 2026-10-19） |
| elevenlabs-tts | S | html | 未到期（上次 2026-10-21） |
| bailian-omni | S | html | 变了 |
| elevenlabs-remix | S | html | 未到期（上次 2026-10-21） |
| openai-tts | S | html | 未到期（上次 2026-10-21） |
| gemini-music | S | html | 无变化 |
| glm-tts-doc | S | html | 未到期（上次 2026-10-21） |
| glm-tts-clone-doc | S | html | 未到期（上次 2026-10-21） |
| glm-voice-doc | S | html | 未到期（上次 2026-10-21） |
| xai-voice | S | spa | 未到期（上次 2026-10-19） |
| kokoro-card | S | html | 未到期（上次 2026-10-21） |
| mistral-models | S | html | 未到期（上次 2026-10-21） |
| mistral-tools | S | html | 未到期（上次 2026-10-21） |
| mistral-vision | S | html | 未到期（上次 2026-10-21） |
| fish-s2pro-card | S | html | 未到期（上次 2026-10-21） |
| cosyvoice-card | S | html | 未到期（上次 2026-10-21） |
| llama-card | S | html | 未到期（上次 2026-10-21） |
| elevenlabs-voices | S | html | 未到期（上次 2026-10-21） |
| wan-t2v-card | S | html | 未到期（上次 2026-10-21） |
| minimax-release | S | spa | 未到期（上次 2026-10-21） |
| s-e2ab-gh | C | json | 未到期（上次 2026-10-21） |
| s-abogen-gh | C | json | 未到期（上次 2026-10-21） |
| s-epub2tts-gh | C | json | 未到期（上次 2026-10-21） |
| s-abcreator-gh | C | json | 未到期（上次 2026-10-21） |
| s-smartsub-gh | C | json | 未到期（上次 2026-10-21） |
| s-youdub-gh | C | json | 未到期（上次 2026-10-21） |
| s-pipecat-gh | C | json | 未到期（上次 2026-10-21） |
| s-livekit-gh | C | json | 未到期（上次 2026-10-21） |
| s-hfs2s-gh | C | json | 未到期（上次 2026-10-21） |
| s-moshi-gh | C | json | 未到期（上次 2026-10-21） |
| s-acestep15-gh | C | json | 未到期（上次 2026-10-21） |
| s-acestep-gh | C | json | 未到期（上次 2026-10-21） |
| s-yue-gh | C | json | 未到期（上次 2026-10-21） |
| s-audiocraft-gh | C | json | 未到期（上次 2026-10-21） |
| s-gptsovits-gh | C | json | 未到期（上次 2026-10-21） |
| s-rvc-gh | C | json | 未到期（上次 2026-10-21） |
| s-fishspeech-gh | C | json | 未到期（上次 2026-10-21） |
| s-indextts-gh | C | json | 未到期（上次 2026-10-21） |
| s-cosyvoice-gh | C | json | 未到期（上次 2026-10-21） |
| s-f5tts-gh | C | json | 未到期（上次 2026-10-21） |
| s-qwen3omni-gh | C | json | 未到期（上次 2026-10-21） |
| ideogram-overview | A | html | 未到期（上次 2026-10-21） |
| ideogram-v4-remix | A | html | 未到期（上次 2026-10-21） |
| ideogram-v3-inpaint | A | html | 未到期（上次 2026-10-21） |
| ideogram-v3-reframe | A | html | 未到期（上次 2026-10-21） |
| ideogram-v3-generate | A | html | 未到期（上次 2026-10-21） |
| ideogram-edit | A | html | 未到期（上次 2026-10-21） |
| ideogram-upscale | A | html | 未到期（上次 2026-10-21） |
| ideogram-hf | A | html | 未到期（上次 2026-10-21） |
| bailian-qimg3 | A | html | 未到期（上次 2026-10-21） |
| bailian-qimg | A | html | 未到期（上次 2026-10-21） |
| bailian-textgen-zh | A | html | 未到期（上次 2026-10-21） |
| bailian-thinking-zh | A | html | 未到期（上次 2026-10-21） |
| bailian-cache-zh | A | html | 未到期（上次 2026-10-21） |
| bailian-batch-zh | A | html | 未到期（上次 2026-10-21） |
| bailian-websearch-zh | A | html | 变了 |
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
| bfl-flux2-multiref | A | html | 未到期（上次 2026-10-18） |
| ark-seedream-api | A | spa | 变了 |
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
| skyreels-gh | A | html | 未到期（上次 2026-10-10） |
| bfl-flux3 | A | html | 未到期（上次 2026-10-10） |
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
| hf-hunyuan3d-21 | S | html | 未到期（上次 2026-10-10） |
| tripo-docs-generation | S | spa | 未到期（上次 2026-10-10） |
| meshy-docs-api | S | spa | 未到期（上次 2026-10-10） |
| meshy-site | S | spa | 未到期（上次 2026-10-10） |
| rodin-api-docs | S | html | 未到期（上次 2026-10-11） |
| gh-trellis | S | html | 未到期（上次 2026-10-10） |
| seed3d-page | S | spa | 从未抓过 |
| stability-spar3d | S | html | 未到期（上次 2026-10-10） |
| tripo-site | S | spa | 抓不到（被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法） |
| rodin-site | S | spa | 未到期（上次 2026-10-10） |
| tripo-docs-animation | S | spa | 未到期（上次 2026-10-10） |
| gh-hunyuan3d-buffalo | S | html | 未到期（上次 2026-10-10） |
| replicate-hunyuan3d-31 | A | spa | 未到期（上次 2026-10-10） |
| replicate-3d | A | spa | 未到期（上次 2026-10-16） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-10-16） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-10-16） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-10-16） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-10-16） |
| gh-spar3d | S | html | 未到期（上次 2026-10-16） |
| gh-triposg | S | html | 未到期（上次 2026-10-16） |
| gh-instantmesh | S | html | 未到期（上次 2026-10-16） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 未到期（上次 2026-10-10） |
| hf-ltx-25 | S | html | 未到期（上次 2026-10-10） |
| meshy-changelog | S | spa | 未到期（上次 2026-10-10） |
| hf-instantmesh | S | html | 未到期（上次 2026-10-16） |
| hf-apple-sharp | S | html | 未到期（上次 2026-10-16） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-10-16） |
| hf-anysplat | S | html | 未到期（上次 2026-10-16） |
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-10-13） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-10-13） |
| hf-trellis2 | S | html | 未到期（上次 2026-10-16） |
| pixverse-caps | S | html | 未到期（上次 2026-10-10） |
| pixverse-v6 | S | html | 未到期（上次 2026-10-10） |
| pixverse-fusion | S | html | 未到期（上次 2026-10-10） |
| hf-cogvideox | S | html | 未到期（上次 2026-10-17） |
| hf-i2vgen | S | html | 未到期（上次 2026-10-17） |
| hf-longcat-edit | S | html | 未到期（上次 2026-10-17） |
| hf-magi | S | html | 未到期（上次 2026-10-17） |
| heygen-docs | S | spa | 未到期（上次 2026-10-10） |
| synthesia-docs | S | spa | 未到期（上次 2026-10-10） |
| hf-longcat-avatar | S | html | 未到期（上次 2026-10-10） |
| hf-hunyuan-avatar | S | html | 未到期（上次 2026-10-10） |
| hf-liveportrait | S | html | 未到期（上次 2026-10-10） |
| hf-musetalk | S | html | 未到期（上次 2026-10-10） |
| hf-hallo2 | S | html | 未到期（上次 2026-10-10） |
| replicate-lipsync | A | spa | 未到期（上次 2026-10-17） |
| comfy-s2v | S | html | 未到期（上次 2026-10-17） |
| heygen-translate | S | html | 未到期（上次 2026-10-17） |
| heygen-live | S | html | 未到期（上次 2026-10-17） |
| heygen-photo | S | html | 未到期（上次 2026-10-17） |
| heygen-training | S | html | 未到期（上次 2026-10-17） |
| heygen-changelog | S | html | 未到期（上次 2026-10-10） |
| hf-hallo-live | S | html | 未到期（上次 2026-10-10） |
| hf-longcat-avatar-10 | S | html | 未到期（上次 2026-10-10） |
| gh-video-retalking | S | html | 未到期（上次 2026-10-17） |
| elevenlabs-changelog | S | html | 未到期（上次 2026-10-10） |
| hf-glm-voice | S | html | 未到期（上次 2026-10-10） |
| hf-glm-tts | S | html | 未到期（上次 2026-10-10） |
| openai-model-tts | S | spa | 未到期（上次 2026-10-10） |
| openai-model-realtime | S | spa | 未到期（上次 2026-10-10） |
| elevenlabs-docs | S | html | 变了 |
| gemini-robotics-er | S | html | 未到期（上次 2026-10-17） |
| figure-helix | A | html | 未到期（上次 2026-10-10） |
| pi-pi05-blog | A | html | 未到期（上次 2026-10-14） |
| pi-openpi-gh | A | html | 未到期（上次 2026-10-17） |
| nvidia-groot-gh | A | html | 未到期（上次 2026-10-17） |
| openvla-gh | A | html | 未到期（上次 2026-10-10） |
| openvla-repo | A | html | 未到期（上次 2026-10-10） |
| hf-robotics | B | json | 未到期（上次 2026-10-17） |
| lerobot-gh | A | json | 未到期（上次 2026-10-17） |
| groot-policy-doc | A | html | 未到期（上次 2026-10-17） |
| rynnbrain-card | A | html | 未到期（上次 2026-10-10） |
| maniskill-gh | B | json | 未到期（上次 2026-10-13） |
| cosmos3-card | S | html | 未到期（上次 2026-10-17） |
| genie3-blog | A | html | 未到期（上次 2026-10-10） |
| odyssey-site | S | html | 未到期（上次 2026-10-10） |
| worldlabs-marble | A | html | 未到期（上次 2026-10-10） |
| matrixgame-card | A | html | 未到期（上次 2026-10-10） |
| hunyuanworld-gh | A | html | 未到期（上次 2026-10-10） |
| wham-card | A | html | 未到期（上次 2026-10-13） |
| vjepa2-blog | A | html | 未到期（上次 2026-10-13） |
| vjepa2-card | B | html | 未到期（上次 2026-10-13） |
| sci-boltz-gh | A | html | 未到期（上次 2026-10-10） |
| sci-af3-blog | A | html | 未到期（上次 2026-10-14） |
| sci-esm2-card | B | html | 未到期（上次 2026-10-14） |
| sci-wn-gh | A | html | 未到期（上次 2026-10-10） |
| sci-aurora-gh | A | html | 未到期（上次 2026-10-10） |
| sci-neuralgcm-gh | A | html | 未到期（上次 2026-10-10） |
| sci-mattergen-gh | A | html | 未到期（上次 2026-10-10） |
| sci-mace-gh | A | html | 未到期（上次 2026-10-10） |
| sci-gnome-gh | A | html | 未到期（上次 2026-10-10） |
| seed-25 | A | html | 未到期（上次 2026-10-10） |
| veo-doc | A | html | 变了 |
| sora-api | A | html | 未到期（上次 2026-10-10） |
| wan-site | A | html | 未到期（上次 2026-10-10） |
| mm-hf-api | A | json | 未到期（上次 2026-10-10） |
| vidu-s1-paper | A | html | 未到期（上次 2026-08-15） |
| omni-doc | A | html | 未到期（上次 2026-10-11） |
| ltx-hf-23 | A | html | 未到期（上次 2026-10-10） |
| gemini-image-docs | A | html | 变了 |
| openai-image-docs | A | html | 变了 |
| recraft-docs | A | html | 未到期（上次 2026-10-10） |
| bfl-docs | A | html | 未到期（上次 2026-10-10） |
| zimage-card | A | html | 未到期（上次 2026-10-10） |
| hunyuan-image-card | A | html | 未到期（上次 2026-10-10） |
| smolvla-card | A | html | 未到期（上次 2026-10-10） |
| molmoact-card | A | html | 未到期（上次 2026-10-10） |
| hf-whisper | A | html | 变了 |
| hf-sensevoice | A | html | 未到期（上次 2026-10-10） |
| hf-qwen3-asr | A | html | 未到期（上次 2026-10-10） |
| minimax-release-notes | A | html | 未到期（上次 2026-10-19） |
| seed-blog-1_5 | A | html | 未到期（上次 2026-10-10） |
| seed-blog-2_0 | A | html | 未到期（上次 2026-10-10） |
| ideogram-x | A | html | 未到期（上次 2026-10-10） |
| hf-funcineforge | S | html | 未到期（上次 2026-10-18） |
| hf-org | S | json | 变了 |
| gh-gptsovits-cn | C | json | 未到期（上次 2026-10-18） |
| gemini-nb21 | S | spa | 未到期（上次 2026-10-17） |
| xai-grok47-model | S | spa | 未到期（上次 2026-10-19） |
| ideogram-v1-overview | A | html | 未到期（上次 2026-10-10T02:48:40.640Z） |
| ideogram-v1-upscale | A | html | 未到期（上次 2026-10-10T02:48:40.641Z） |
| rodin-gen25-api | A | html | 未到期（上次 2026-10-10T02:48:40.642Z） |
| rodin-bang-api | A | html | 未到期（上次 2026-10-10T02:48:40.642Z） |
| card-deepseek-ai-deepseek-v3-2 | A | html | 未到期（上次 2026-10-10T02:48:40.644Z） |
| card-zai-org-glm-4-5 | A | html | 未到期（上次 2026-10-10T02:48:40.644Z） |
| card-zai-org-glm-4-6 | A | html | 未到期（上次 2026-10-10T02:48:40.644Z） |
| card-zai-org-glm-5 | A | html | 未到期（上次 2026-10-10T02:48:40.644Z） |
| card-zai-org-glm-5-1 | A | html | 未到期（上次 2026-10-10T02:48:40.644Z） |
| card-zai-org-glm-5-2 | A | html | 未到期（上次 2026-10-10T02:48:40.645Z） |
| card-moonshotai-kimi-k2-base | A | html | 未到期（上次 2026-10-10T02:48:40.645Z） |
| card-moonshotai-kimi-k2-thinking | A | html | 未到期（上次 2026-10-10T02:48:40.645Z） |
| card-moonshotai-kimi-k2-5 | A | html | 未到期（上次 2026-10-10T02:48:40.645Z） |
| card-moonshotai-kimi-k2-6 | A | html | 未到期（上次 2026-10-10T02:48:40.645Z） |
| card-moonshotai-kimi-k3 | A | html | 未到期（上次 2026-10-10T02:48:40.645Z） |
| card-minimaxai-minimax-m2 | A | html | 未到期（上次 2026-10-10T02:48:40.646Z） |
| card-minimaxai-minimax-m2-5 | A | html | 未到期（上次 2026-10-10T02:48:40.646Z） |
| card-minimaxai-minimax-m3 | A | html | 未到期（上次 2026-10-10T02:48:40.646Z） |
| card-mistralai-mistral-large-3-675b-instruct-2512 | A | html | 未到期（上次 2026-10-10T02:48:40.646Z） |
| card-mistralai-mistral-small-4-119b-2603 | A | html | 未到期（上次 2026-10-10T02:48:40.646Z） |
| card-mistralai-mistral-medium-3-5-128b | A | html | 未到期（上次 2026-10-10T02:48:40.646Z） |
| card-qwen-qwen3-5-27b | A | html | 未到期（上次 2026-10-10T02:48:40.646Z） |
| card-qwen-qwen3-6-27b | A | html | 未到期（上次 2026-10-10T02:48:40.647Z） |
| card-tencent-hunyuan3d-part | A | html | 未到期（上次 2026-10-10T02:48:40.647Z） |
| card-zai-org-glm-4-7 | A | html | 未到期（上次 2026-10-10T02:52:01.981Z） |
| gemini-argon | S | spa | 未到期（上次 2026-10-19） |
| gemini-tts38 | S | spa | 未到期（上次 2026-10-19） |
| vidu-q4-i2v | S | spa | 未到期（上次 2026-10-19） |
| vidu-q4-reference | S | spa | 未到期（上次 2026-10-19） |
| xai-voice3 | S | spa | 未到期（上次 2026-10-19） |
| minimax-m31-guide | S | html | 未到期（上次 2026-10-19） |
| minimax-m31-tools | S | html | 未到期（上次 2026-10-19） |
| recraft-image-to-image | S | html | 未到期（上次 2026-10-19） |
| recraft-inpainting | S | html | 未到期（上次 2026-10-19） |
| recraft-outpainting | S | html | 未到期（上次 2026-10-19） |
| recraft-upscale | S | html | 未到期（上次 2026-10-19） |

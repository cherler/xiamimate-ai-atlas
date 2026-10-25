# 信息源监视报告 · 2026-10-25

本次检查 14 个到期源（共 467 个）：变化 5 · 首次 0 · 无变化 3 · **抓不到 6**

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

- **decart-site** Decart 官网首屏（当前版本）
- **bfl-flux2-multiref** Black Forest Labs 官方文档 · FLUX.2 多图参考编辑指南
- **rodin-api-docs** Rodin / Hyper3D · API 文档索引
- **omni-doc** Google · Gemini Omni Flash 官方文档
- **hf-org** Hugging Face 官方组织目录（模型接口）
  新增 235 条：7err4/MOSS-Image-CharRef、ATH-MaaS/PixText、Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot、Abiray/Minimax-h3-Singularity-V2-Pruned、Abiray/Minimax-h3-Singularity-V2-Pruned-GGUF、Alex995647/loras-minimax-h3、AtomicChat/FLUX-3-Image-Klein-GGUF、AtomicChat/Ling-3.0-flash-Sante-Uncensored-GGUF、AtomicChat/NVIDIA-Nemotron-3.5-Bolt-E4B-Uncensored-GGUF、AtomicChat/Qwen3.8-Flash-Next-Uncensored-GGUF、AuroraAI-Research/AuroraTTS-100K、CREATUS/AutonomousAgents …

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 未到期（上次 2026-10-21） |
| seed-models | S | html | 未到期（上次 2026-10-21） |
| kling-api-updates | S | spa | 未到期（上次 2026-10-21） |
| kling-site | S | spa | 未到期（上次 2026-10-24） |
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
| pika-site | S | html | 未到期（上次 2026-10-22） |
| higgsfield-site | S | html | 未到期（上次 2026-10-21） |
| decart-research | S | html | 未到期（上次 2026-10-21） |
| arxiv-video | S | atom | 未到期（上次 2026-10-24） |
| epoch-notable | A | csv | 未到期（上次 2026-10-21） |
| aa-t2v | A | spa | 未到期（上次 2026-10-21） |
| aa-i2v | A | spa | 未到期（上次 2026-10-21） |
| hf-t2v | A | json | 未到期（上次 2026-10-23） |
| hf-i2v | A | json | 未到期（上次 2026-10-23） |
| hf-v2v | A | json | 未到期（上次 2026-10-21） |
| fal-video | S | spa | 未到期（上次 2026-10-22） |
| replicate-t2v | S | html | 未到期（上次 2026-10-21） |
| aiwiki | B | spa | 未到期（上次 2026-10-11） |
| futurepedia | B | html | 未到期（上次 2026-10-11） |
| comfyui-releases | C | json | 未到期（上次 2026-10-21） |
| capcut-templates | C | html | 未到期（上次 2026-10-11） |
| picsart-effects | C | html | 抓不到（HTTP 404） |
| runway-changelog | S | spa | 未到期（上次 2026-10-21） |
| runway-models | S | spa | 未到期（上次 2026-10-21） |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| seed-models-hub | S | html | 未到期（上次 2026-10-21） |
| apiyi-models | S | spa | 未到期（上次 2026-10-21） |
| arxiv-worldmodel | S | atom | 未到期（上次 2026-10-22） |
| techcrunch-ai | B | atom | 未到期（上次 2026-10-23） |
| ltx-gh | S | json | 未到期（上次 2026-10-21） |
| ltx-hf-org | S | json | 未到期（上次 2026-10-23） |
| decart-site | S | spa | 变了 |
| picsart-video | C | html | 未到期（上次 2026-10-24） |
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
| openai-models | S | html | 未到期（上次 2026-10-22） |
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
| google-nb-blog | S | html | 未到期（上次 2026-10-22） |
| ms-foundry-blog | B | html | 未到期（上次 2026-10-11） |
| mj-updates | S | html | 未到期（上次 2026-10-21） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 281 个字符） |
| hf-t2i | A | json | 未到期（上次 2026-10-23） |
| hf-i2i | A | json | 未到期（上次 2026-10-23） |
| anthropic-models | S | html | 未到期（上次 2026-10-22） |
| deepseek-docs | S | html | 未到期（上次 2026-10-22） |
| xai-docs | S | html | 未到期（上次 2026-10-22） |
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
| anthropic-features | S | html | 未到期（上次 2026-10-22） |
| openai-docs | S | html | 未到期（上次 2026-10-22） |
| deepseek-pricing | S | spa | 无变化 |
| deepseek-updates | S | spa | 无变化 |
| bailian-models | S | html | 未到期（上次 2026-10-21） |
| kimi-pricing | S | html | 未到期（上次 2026-10-21） |
| glm-52-doc | S | html | 未到期（上次 2026-10-21） |
| kimi-websearch | S | html | 未到期（上次 2026-10-21） |
| bailian-websearch | S | html | 未到期（上次 2026-10-21） |
| glm-websearch | S | html | 未到期（上次 2026-10-21） |
| bailian-coder | S | html | 未到期（上次 2026-10-21） |
| ark-models | S | spa | 未到期（上次 2026-10-21） |
| minimax-api-overview | S | spa | 未到期（上次 2026-10-19） |
| openai-caching | S | html | 未到期（上次 2026-10-22） |
| openai-structured | S | html | 未到期（上次 2026-10-22） |
| deepseek-chat-api | S | html | 未到期（上次 2026-10-22） |
| gemini-audio | S | spa | 未到期（上次 2026-10-22） |
| gemini-vision | S | spa | 未到期（上次 2026-10-22） |
| minimax-anthropic-api | S | html | 未到期（上次 2026-10-19） |
| minimax-openai-api | S | spa | 未到期（上次 2026-10-21） |
| minimax-server-tools | S | spa | 未到期（上次 2026-10-21） |
| minimax-caching | S | spa | 未到期（上次 2026-10-21） |
| minimax-openapi | S | json | 未到期（上次 2026-10-21） |
| gemini-computer-use | S | spa | 未到期（上次 2026-10-22） |
| ark-pricing | S | spa | 未到期（上次 2026-10-21） |
| bailian-models-zh | S | spa | 未到期（上次 2026-10-21） |
| glm-batch | S | html | 未到期（上次 2026-10-21） |
| glm-chat-api | S | html | 未到期（上次 2026-10-21） |
| claude-deprecations | S | html | 未到期（上次 2026-10-22） |
| openai-changelog | S | spa | 未到期（上次 2026-10-22） |
| gemini-changelog | S | spa | 未到期（上次 2026-10-19） |
| xai-release-notes | S | spa | 未到期（上次 2026-10-19） |
| aa-llm | B | spa | 未到期（上次 2026-10-21） |
| ideogram-api | S | html | 未到期（上次 2026-10-21） |
| elevenlabs-models | S | html | 未到期（上次 2026-10-24） |
| openai-realtime | S | html | 未到期（上次 2026-10-21） |
| gemini-tts | S | spa | 未到期（上次 2026-10-19） |
| elevenlabs-tts | S | html | 未到期（上次 2026-10-21） |
| bailian-omni | S | html | 未到期（上次 2026-10-22） |
| elevenlabs-remix | S | html | 未到期（上次 2026-10-21） |
| openai-tts | S | html | 未到期（上次 2026-10-21） |
| gemini-music | S | html | 未到期（上次 2026-10-22） |
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
| bfl-flux2-multiref | A | html | 变了 |
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
| rodin-api-docs | S | html | 变了 |
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
| gemini-robotics-er | S | html | 未到期（上次 2026-10-24） |
| figure-helix | A | html | 未到期（上次 2026-10-24） |
| pi-pi05-blog | A | html | 未到期（上次 2026-10-14） |
| pi-openpi-gh | A | html | 未到期（上次 2026-10-24） |
| nvidia-groot-gh | A | html | 未到期（上次 2026-10-24） |
| openvla-gh | A | html | 未到期（上次 2026-10-24） |
| openvla-repo | A | html | 未到期（上次 2026-10-24） |
| hf-robotics | B | json | 未到期（上次 2026-10-24） |
| lerobot-gh | A | json | 未到期（上次 2026-10-24） |
| groot-policy-doc | A | html | 未到期（上次 2026-10-24） |
| rynnbrain-card | A | html | 未到期（上次 2026-10-24） |
| maniskill-gh | B | json | 未到期（上次 2026-10-13） |
| cosmos3-card | S | html | 未到期（上次 2026-10-24） |
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
| omni-doc | A | html | 变了 |
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
| minimax-release-notes | A | html | 未到期（上次 2026-10-19） |
| seed-blog-1_5 | A | html | 未到期（上次 2026-10-24） |
| seed-blog-2_0 | A | html | 未到期（上次 2026-10-24） |
| ideogram-x | A | html | 未到期（上次 2026-10-24） |
| hf-funcineforge | S | html | 未到期（上次 2026-10-18） |
| hf-org | S | json | 变了 |
| gh-gptsovits-cn | C | json | 无变化 |
| gemini-nb21 | S | spa | 未到期（上次 2026-10-24） |
| xai-grok47-model | S | spa | 未到期（上次 2026-10-19） |
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

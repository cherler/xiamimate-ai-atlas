# 信息源监视报告 · 2026-11-09

本次检查 29 个到期源（共 467 个）：变化 9 · 首次 0 · 无变化 14 · **抓不到 6**

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

- **gemini-models** Google · Gemini API 官方模型列表
- **minimax-api-overview** MiniMax 开放平台 · 接口概览
- **minimax-anthropic-api** MiniMax · Anthropic 兼容 API
- **gemini-changelog** Gemini API · Release notes
- **xai-release-notes** xAI · API Release Notes
- **hf-org** Hugging Face 官方组织目录（模型接口）
  新增 216 条：0ppxnhximxr/snapref-v2a、169Pi/Alpie_Seed_GGUF、169Pi/Alpie_seed、AJ-Gonzalez/coder-lfm3-1.7b、Abiray/LTX-2.5-Distilled-GGUF、Adahm/PE-Heretic-INT8-ConvRot-for-Qwen-Image-2.1、AlicanKiraz0/Cybersecurity-BaronLLM_Offensive_Security_LLM_Q6_K_GGUF、BAAI/AREX-2、BAAI/PingPongRealWorldRL、BAAI/bge-small-en-v1.5、BananaMind/BananaMind-2.5-Pro、BeaverAI/Spectre-37B-v1b-GGUF …
- **gemini-argon** Google · Gemini 4 Argon 模型卡
- **gemini-tts38** Google · Gemini 3.8 Flash TTS 模型卡
- **minimax-m31-tools** MiniMax · M3.1 工具调用

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 未到期（上次 2026-11-04） |
| seed-models | S | html | 未到期（上次 2026-11-04） |
| kling-api-updates | S | spa | 未到期（上次 2026-11-04） |
| kling-site | S | spa | 未到期（上次 2026-11-07） |
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
| vidu-changelog | S | spa | 无变化 |
| vidu-model-map | S | spa | 无变化 |
| vidu-function-list | S | spa | 无变化 |
| vidu-site | S | html | 未到期（上次 2026-11-04） |
| vidu-s1-gh | S | json | 未到期（上次 2026-11-04） |
| pika-site | S | html | 未到期（上次 2026-11-05） |
| higgsfield-site | S | html | 未到期（上次 2026-11-04） |
| decart-research | S | html | 未到期（上次 2026-11-04） |
| arxiv-video | S | atom | 未到期（上次 2026-11-07） |
| epoch-notable | A | csv | 未到期（上次 2026-11-04） |
| aa-t2v | A | spa | 未到期（上次 2026-11-04） |
| aa-i2v | A | spa | 未到期（上次 2026-11-04） |
| hf-t2v | A | json | 未到期（上次 2026-11-07） |
| hf-i2v | A | json | 未到期（上次 2026-11-07） |
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
| techcrunch-ai | B | atom | 未到期（上次 2026-11-07） |
| ltx-gh | S | json | 未到期（上次 2026-11-04） |
| ltx-hf-org | S | json | 未到期（上次 2026-11-07） |
| decart-site | S | spa | 未到期（上次 2026-11-08） |
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
| gemini-models | S | spa | 变了 |
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
| hf-t2i | A | json | 未到期（上次 2026-11-07） |
| hf-i2i | A | json | 未到期（上次 2026-11-07） |
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
| deepseek-pricing | S | spa | 无变化 |
| deepseek-updates | S | spa | 无变化 |
| bailian-models | S | html | 未到期（上次 2026-11-04） |
| kimi-pricing | S | html | 未到期（上次 2026-11-04） |
| glm-52-doc | S | html | 未到期（上次 2026-11-04） |
| kimi-websearch | S | html | 未到期（上次 2026-11-04） |
| bailian-websearch | S | html | 未到期（上次 2026-11-04） |
| glm-websearch | S | html | 未到期（上次 2026-11-04） |
| bailian-coder | S | html | 未到期（上次 2026-11-04） |
| ark-models | S | spa | 未到期（上次 2026-11-04） |
| minimax-api-overview | S | spa | 变了 |
| openai-caching | S | html | 未到期（上次 2026-11-05） |
| openai-structured | S | html | 未到期（上次 2026-11-05） |
| deepseek-chat-api | S | html | 未到期（上次 2026-11-05） |
| gemini-audio | S | spa | 未到期（上次 2026-11-05） |
| gemini-vision | S | spa | 未到期（上次 2026-11-05） |
| minimax-anthropic-api | S | html | 变了 |
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
| gemini-changelog | S | spa | 变了 |
| xai-release-notes | S | spa | 变了 |
| aa-llm | B | spa | 未到期（上次 2026-11-04） |
| ideogram-api | S | html | 未到期（上次 2026-11-04） |
| elevenlabs-models | S | html | 未到期（上次 2026-11-07） |
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
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-10-13） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-10-13） |
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
| pi-pi05-blog | A | html | 未到期（上次 2026-10-28） |
| pi-openpi-gh | A | html | 未到期（上次 2026-11-07） |
| nvidia-groot-gh | A | html | 未到期（上次 2026-11-07） |
| openvla-gh | A | html | 未到期（上次 2026-11-07） |
| openvla-repo | A | html | 未到期（上次 2026-11-07） |
| hf-robotics | B | json | 未到期（上次 2026-11-07） |
| lerobot-gh | A | json | 未到期（上次 2026-11-07） |
| groot-policy-doc | A | html | 未到期（上次 2026-11-07） |
| rynnbrain-card | A | html | 未到期（上次 2026-11-07） |
| maniskill-gh | B | json | 未到期（上次 2026-10-13） |
| cosmos3-card | S | html | 未到期（上次 2026-11-07） |
| genie3-blog | A | html | 未到期（上次 2026-11-07） |
| odyssey-site | S | html | 未到期（上次 2026-11-07） |
| worldlabs-marble | A | html | 未到期（上次 2026-11-07） |
| matrixgame-card | A | html | 未到期（上次 2026-11-07） |
| hunyuanworld-gh | A | html | 未到期（上次 2026-11-07） |
| wham-card | A | html | 未到期（上次 2026-10-13） |
| vjepa2-blog | A | html | 未到期（上次 2026-10-13） |
| vjepa2-card | B | html | 未到期（上次 2026-10-13） |
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
| xai-grok47-model | S | spa | 无变化 |
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
| gemini-argon | S | spa | 变了 |
| gemini-tts38 | S | spa | 变了 |
| vidu-q4-i2v | S | spa | 无变化 |
| vidu-q4-reference | S | spa | 无变化 |
| xai-voice3 | S | spa | 无变化 |
| minimax-m31-guide | S | html | 无变化 |
| minimax-m31-tools | S | html | 变了 |
| recraft-image-to-image | S | html | 无变化 |
| recraft-inpainting | S | html | 无变化 |
| recraft-outpainting | S | html | 无变化 |
| recraft-upscale | S | html | 无变化 |

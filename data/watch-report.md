# 信息源监视报告 · 2026-08-12

本次检查 15 个到期源（共 217 个）：变化 0 · 首次 4 · 无变化 0 · **抓不到 11**

> 这份报告是给人看的那 20 条待办的来源（§59.3 的负反馈：人每周要看的条目 ≤ 20）。
> 「抓不到」不是失败，是**信息本身** —— 一个长期抓不到的官方源，说明那家厂商没有可 diff 的公开更新入口，
> 而那正好解释了为什么它名下的格子质量最差。

## 抓到了但没内容（比抓不到更危险 —— 它不会喊）

（无）

## 抓不到（要处理）

- **openai-sora-eol**（S/html）OpenAI 帮助中心 · Sora 停服说明 — HTTP 403
  https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation
- **openai-sora-2**（S/html）OpenAI · Sora 2 发布页 — HTTP 403
  https://openai.com/index/sora-2/
- **fal-video**（S/html）fal · 视频模型目录 — HTTP 429
  https://fal.ai/models?categories=text-to-video
- **aiwiki**（B/html）AI Wiki — HTTP 429
  https://aiwiki.ai/
- **picsart-video**（C/spa）Picsart AI 视频 — page.goto: Timeout 45000ms exceeded.
Call log:
  - navigating to "https://picsart.com/ai-v
  https://picsart.com/ai-video-generator/
- **libtv**（C/spa）LibTV — page.goto: net::ERR_CONNECTION_CLOSED at https://libtv.com/
Call log:
  - navigating to "h
  https://libtv.com/
- **dreamina**（S/spa）即梦 Dreamina（字节自有产品） — page.goto: Timeout 45000ms exceeded.
Call log:
  - navigating to "https://dreamina.capcut.
  https://dreamina.capcut.com/
- **hailuo-video**（S/spa）海螺视频（MiniMax 自有产品） — page.goto: Timeout 45000ms exceeded.
Call log:
  - navigating to "https://hailuoai.video/"
  https://hailuoai.video/
- **hf-pixelart-lora**（S/json）Hugging Face · nerijs/pixel-art-xl — Unexpected token '<', "<!doctype "... is not valid JSON
  https://huggingface.co/nerijs/pixel-art-xl
- **wan3-qbitai**（B/html）量子位 · 阿里 Wan3.0 开启公测 — fetch failed / ECONNRESET
  https://www.qbitai.com/2026/08/467877.html
- **minimax-platform**（S/spa）MiniMax 开放平台文档 — 还是壳：渲染后正文只有 59 个字符
  https://platform.minimaxi.com/document/platform

## 有变化

（首轮无基线可比）

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 未到期（上次 2026-08-07） |
| seed-models | S | html | 未到期（上次 2026-08-07） |
| kling-api-updates | S | spa | 未到期（上次 2026-08-07） |
| kling-site | S | spa | 未到期（上次 2026-08-07） |
| google-video-docs | S | html | 未到期（上次 2026-08-07） |
| deepmind-veo | S | html | 未到期（上次 2026-08-07） |
| vertex-video-ref | S | html | 未到期（上次 2026-08-07） |
| openai-sora-eol | S | html | 抓不到（HTTP 403） |
| openai-sora-2 | S | html | 抓不到（HTTP 403） |
| wan-gh-releases | S | json | 未到期（上次 2026-08-08） |
| wan-hf | S | json | 未到期（上次 2026-08-08） |
| minimax-blog | S | html | 未到期（上次 2026-08-07） |
| minimax-hf | S | json | 未到期（上次 2026-08-08） |
| runway-research | S | html | 未到期（上次 2026-08-07） |
| luma-site | S | html | 未到期（上次 2026-08-07） |
| vidu-changelog | S | spa | 未到期（上次 2026-08-07） |
| vidu-model-map | S | spa | 未到期（上次 2026-08-07） |
| vidu-function-list | S | spa | 未到期（上次 2026-08-07） |
| vidu-site | S | html | 未到期（上次 2026-08-07） |
| vidu-s1-gh | S | json | 未到期（上次 2026-08-07） |
| pika-site | S | html | 未到期（上次 2026-08-08） |
| higgsfield-site | S | html | 未到期（上次 2026-08-08） |
| decart-research | S | html | 未到期（上次 2026-08-07） |
| arxiv-video | S | atom | 未到期（上次 2026-08-07） |
| epoch-notable | A | csv | 未到期（上次 2026-08-07） |
| aa-t2v | A | spa | 未到期（上次 2026-08-07） |
| aa-i2v | A | spa | 未到期（上次 2026-08-07） |
| hf-t2v | A | json | 未到期（上次 2026-08-11） |
| hf-i2v | A | json | 未到期（上次 2026-08-11） |
| hf-v2v | A | json | 未到期（上次 2026-08-07） |
| fal-video | S | html | 抓不到（HTTP 429） |
| replicate-t2v | S | html | 未到期（上次 2026-08-07） |
| aiwiki | B | html | 抓不到（HTTP 429） |
| futurepedia | B | html | 未到期（上次 2026-08-07） |
| comfyui-releases | C | json | 未到期（上次 2026-08-07） |
| capcut-templates | C | html | 未到期（上次 2026-08-07） |
| picsart-effects | C | html | 未到期（上次 2026-08-07） |
| runway-changelog | S | spa | 未到期（上次 2026-08-07） |
| runway-models | S | spa | 未到期（上次 2026-08-07） |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| google-models | S | html | 未到期（上次 2026-08-07） |
| seed-models-hub | S | html | 未到期（上次 2026-08-07） |
| apiyi-models | S | spa | 未到期（上次 2026-08-07） |
| arxiv-worldmodel | S | atom | 未到期（上次 2026-08-07） |
| techcrunch-ai | B | atom | 未到期（上次 2026-08-11） |
| decart-blog | S | spa | 未到期（上次 2026-08-07） |
| ltx-gh | S | json | 未到期（上次 2026-08-08） |
| ltx-hf-org | S | json | 未到期（上次 2026-08-11） |
| decart-site | S | spa | 未到期（上次 2026-08-11） |
| picsart-video | C | spa | 抓不到（page.goto: Timeout 45000ms exceeded.
Call log:
  - navigating to "https://picsart.com/ai-v） |
| libtv | C | spa | 抓不到（page.goto: net::ERR_CONNECTION_CLOSED at https://libtv.com/
Call log:
  - navigating to "h） |
| dreamina | S | spa | 抓不到（page.goto: Timeout 45000ms exceeded.
Call log:
  - navigating to "https://dreamina.capcut.） |
| hailuo-video | S | spa | 抓不到（page.goto: Timeout 45000ms exceeded.
Call log:
  - navigating to "https://hailuoai.video/"） |
| volcengine-ark-price | S | spa | 未到期（上次 2026-08-08） |
| minimax-price | S | spa | 未到期（上次 2026-08-08） |
| google-ai-price | S | html | 未到期（上次 2026-08-08） |
| bailian-price | S | spa | 未到期（上次 2026-08-08） |
| runway-price | S | spa | 未到期（上次 2026-08-08） |
| kling-price | S | spa | 未到期（上次 2026-08-08） |
| vidu-price | S | spa | 未到期（上次 2026-08-08） |
| fal-ltx-price | S | spa | 未到期（上次 2026-08-08） |
| replicate-price | A | html | 未到期（上次 2026-08-08） |
| hf-course | S | html | 未到期（上次 2026-08-11） |
| comfy-docs | S | spa | 未到期（上次 2026-08-11） |
| h3-card | S | html | 未到期（上次 2026-08-11） |
| hf-lineage | S | json | 未到期（上次 2026-08-11） |
| vacetools-gh | C | json | 未到期（上次 2026-08-11） |
| framepack-gh | S | json | 未到期（上次 2026-08-11） |
| fpwrapper-gh | C | json | 未到期（上次 2026-08-11） |
| latentsync-gh | S | json | 未到期（上次 2026-08-11） |
| lswrapper-gh | C | json | 未到期（上次 2026-08-11） |
| float-gh | C | json | 未到期（上次 2026-08-11） |
| sviflf-gh | C | json | 未到期（上次 2026-08-11） |
| flflatent-gh | C | json | 未到期（上次 2026-08-11） |
| mm-blog | S | html | 未到期（上次 2026-08-11） |
| wanwrapper-gh | C | json | 未到期（上次 2026-08-11） |
| comfy-org-hf | S | json | 未到期（上次 2026-08-11） |
| ltx-comfy-gh | S | json | 未到期（上次 2026-08-11） |
| mpt-gh | C | json | 未到期（上次 2026-08-11） |
| manim-gh | C | json | 未到期（上次 2026-08-11） |
| pyvideotrans-gh | C | json | 未到期（上次 2026-08-11） |
| duix-gh | C | json | 未到期（上次 2026-08-11） |
| fay-gh | C | json | 未到期（上次 2026-08-11） |
| narrato-gh | C | json | 未到期（上次 2026-08-11） |
| zho-wf-gh | C | json | 未到期（上次 2026-08-11） |
| echomimic-gh | C | json | 未到期（上次 2026-08-11） |
| linly-talker-gh | C | json | 未到期（上次 2026-08-11） |
| animate-anything-gh | C | json | 未到期（上次 2026-08-11） |
| huobao-gh | C | json | 未到期（上次 2026-08-11） |
| awesome-vd-gh | C | json | 未到期（上次 2026-08-11） |
| seedream-page | S | html | 未到期（上次 2026-08-11） |
| openai-models | S | html | 未到期（上次 2026-08-11） |
| gemini-models | S | html | 未到期（上次 2026-08-11） |
| google-gemini-blog | S | html | 未到期（上次 2026-08-11） |
| azure-foundry-blog | B | html | 未到期（上次 2026-08-11） |
| recraft-blog | S | html | 未到期（上次 2026-08-11） |
| kolors-gh | S | html | 未到期（上次 2026-08-11） |
| krea-blog | S | html | 未到期（上次 2026-08-11） |
| wiki-midjourney | B | html | 未到期（上次 2026-08-11） |
| comfyui-gh | S | json | 未到期（上次 2026-08-11） |
| sdwebui-gh | S | json | 未到期（上次 2026-08-11） |
| fooocus-gh | S | json | 未到期（上次 2026-08-11） |
| invokeai-gh | S | json | 未到期（上次 2026-08-11） |
| iopaint-gh | S | json | 未到期（上次 2026-08-11） |
| rembg-gh | S | json | 未到期（上次 2026-08-11） |
| realesrgan-gh | S | json | 未到期（上次 2026-08-11） |
| gfpgan-gh | S | json | 未到期（上次 2026-08-11） |
| codeformer-gh | S | json | 未到期（上次 2026-08-11） |
| oldphoto-gh | S | json | 未到期（上次 2026-08-11） |
| controlnet-gh | S | json | 未到期（上次 2026-08-11） |
| ipadapter-gh | S | json | 未到期（上次 2026-08-11） |
| instantid-gh | S | json | 未到期（上次 2026-08-11） |
| photomaker-gh | S | json | 未到期（上次 2026-08-11） |
| iclight-gh | S | json | 未到期（上次 2026-08-11） |
| idmvton-gh | S | json | 未到期（上次 2026-08-11） |
| ootd-gh | S | json | 未到期（上次 2026-08-11） |
| catvton-gh | S | json | 未到期（上次 2026-08-11） |
| kritaai-gh | S | json | 未到期（上次 2026-08-11） |
| omnigen-gh | S | json | 未到期（上次 2026-08-11） |
| step1x-gh | S | json | 未到期（上次 2026-08-11） |
| qwenimage-gh | S | json | 未到期（上次 2026-08-11） |
| anytext-gh | S | json | 未到期（上次 2026-08-11） |
| incontextlora-gh | S | json | 未到期（上次 2026-08-11） |
| comictrans-gh | S | json | 未到期（上次 2026-08-11） |
| manganinjia-gh | S | json | 未到期（上次 2026-08-11） |
| starvector-gh | S | json | 未到期（上次 2026-08-11） |
| svgdreamer-gh | S | json | 未到期（上次 2026-08-11） |
| easyphoto-gh | S | json | 未到期（上次 2026-08-11） |
| ipadapter-plus-gh | S | json | 未到期（上次 2026-08-11） |
| controlnet-aux-gh | S | json | 未到期（上次 2026-08-11） |
| ultimate-upscale-gh | S | json | 未到期（上次 2026-08-11） |
| comfy-manager-gh | S | json | 未到期（上次 2026-08-11） |
| comfy-examples-gh | S | json | 未到期（上次 2026-08-11） |
| comfy-templates-gh | S | json | 未到期（上次 2026-08-11） |
| hf-diffusion-class-gh | S | json | 未到期（上次 2026-08-11） |
| fastai-course | S | html | 未到期（上次 2026-08-11） |
| dreamtextures-gh | S | json | 未到期（上次 2026-08-11） |
| char2d-gh | S | json | 未到期（上次 2026-08-11） |
| hf-pixelart-lora | S | json | 抓不到（Unexpected token '<', "<!doctype "... is not valid JSON） |
| google-nb-blog | S | html | 未到期（上次 2026-08-11） |
| ms-foundry-blog | B | html | 未到期（上次 2026-08-11） |
| hf-image-org | S | json | 未到期（上次 2026-08-11） |
| mj-updates | S | html | 未到期（上次 2026-08-11） |
| aa-t2i | A | spa | 未到期（上次 2026-08-11） |
| hf-t2i | A | json | 未到期（上次 2026-08-11） |
| hf-i2i | A | json | 未到期（上次 2026-08-11） |
| anthropic-models | S | html | 未到期（上次 2026-08-11） |
| deepseek-docs | S | html | 未到期（上次 2026-08-11） |
| qwen-docs | S | html | 未到期（上次 2026-08-11） |
| xai-docs | S | html | 未到期（上次 2026-08-11） |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-11） |
| hf-text-org | S | json | 未到期（上次 2026-08-11） |
| wan3-qbitai | B | html | 抓不到（fetch failed / ECONNRESET） |
| kimi-api | S | html | 未到期（上次 2026-08-11） |
| glm-api | S | html | 未到期（上次 2026-08-11） |
| minimax-platform | S | spa | 抓不到（还是壳：渲染后正文只有 59 个字符） |
| langchain-gh | S | json | 未到期（上次 2026-08-11） |
| langgraph-gh | S | json | 未到期（上次 2026-08-11） |
| llamaindex-gh | S | json | 未到期（上次 2026-08-11） |
| vllm-gh | S | json | 未到期（上次 2026-08-11） |
| llamacpp-gh | S | json | 未到期（上次 2026-08-11） |
| ollama-gh | S | json | 未到期（上次 2026-08-11） |
| ragflow-gh | S | json | 未到期（上次 2026-08-11） |
| dify-gh | S | json | 未到期（上次 2026-08-11） |
| n8n-gh | S | json | 未到期（上次 2026-08-11） |
| openwebui-gh | S | json | 未到期（上次 2026-08-11） |
| autogen-gh | S | json | 未到期（上次 2026-08-11） |
| crewai-gh | S | json | 未到期（上次 2026-08-11） |
| litellm-gh | S | json | 未到期（上次 2026-08-11） |
| transformers-gh | S | json | 未到期（上次 2026-08-11） |
| unsloth-gh | S | json | 未到期（上次 2026-08-11） |
| llamafactory-gh | S | json | 未到期（上次 2026-08-11） |
| aider-gh | S | json | 未到期（上次 2026-08-11） |
| cline-gh | S | json | 未到期（上次 2026-08-11） |
| continue-gh | S | json | 未到期（上次 2026-08-11） |
| openhands-gh | S | json | 未到期（上次 2026-08-11） |
| browseruse-gh | S | json | 未到期（上次 2026-08-11） |
| markitdown-gh | S | json | 未到期（上次 2026-08-11） |
| unstructured-gh | S | json | 未到期（上次 2026-08-11） |
| mineru-gh | S | json | 未到期（上次 2026-08-11） |
| mcpservers-gh | S | json | 未到期（上次 2026-08-11） |
| anthropic-features | S | html | 未到期（上次 2026-08-11） |
| openai-docs | S | html | 未到期（上次 2026-08-11） |
| deepseek-pricing | S | html | 未到期（上次 2026-08-11） |
| bailian-models | S | html | 未到期（上次 2026-08-11） |
| kimi-pricing | S | html | 未到期（上次 2026-08-11） |
| glm-52-doc | S | html | 未到期（上次 2026-08-11） |
| bailian-textgen | S | html | 未到期（上次 2026-08-11） |
| kimi-websearch | S | html | 未到期（上次 2026-08-11） |
| kimi-chat-api | S | html | 未到期（上次 2026-08-11） |
| bailian-cache | S | html | 未到期（上次 2026-08-11） |
| bailian-batch | S | html | 未到期（上次 2026-08-11） |
| bailian-websearch | S | html | 未到期（上次 2026-08-11） |
| glm-websearch | S | html | 未到期（上次 2026-08-11） |
| bailian-coder | S | html | 未到期（上次 2026-08-11） |
| ark-models | S | spa | 未到期（上次 2026-08-11） |
| minimax-api-overview | S | spa | 未到期（上次 2026-08-11） |
| claude-models | S | html | 未到期（上次 2026-08-11） |
| openai-caching | S | html | 未到期（上次 2026-08-11） |
| openai-structured | S | html | 未到期（上次 2026-08-11） |
| deepseek-chat-api | S | html | 未到期（上次 2026-08-11） |
| gemini-audio | S | spa | 未到期（上次 2026-08-11） |
| gemini-vision | S | spa | 未到期（上次 2026-08-11） |
| minimax-anthropic-api | S | spa | 未到期（上次 2026-08-11） |
| minimax-openai-api | S | spa | 未到期（上次 2026-08-11） |
| minimax-server-tools | S | spa | 未到期（上次 2026-08-11） |
| minimax-caching | S | spa | 未到期（上次 2026-08-11） |
| minimax-openapi | S | json | 未到期（上次 2026-08-11） |
| gemini-computer-use | S | spa | 未到期（上次 2026-08-11） |
| ark-pricing | S | spa | 未到期（上次 2026-08-11） |
| bailian-models-zh | S | spa | 未到期（上次 2026-08-11） |
| glm-batch | S | html | 未到期（上次 2026-08-11） |
| glm-chat-api | S | html | 未到期（上次 2026-08-11） |
| claude-deprecations | S | html | 首次 |
| openai-changelog | S | spa | 首次 |
| gemini-changelog | S | spa | 首次 |
| xai-release-notes | S | html | 首次 |

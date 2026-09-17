# 信息源监视报告 · 2026-09-17

本次检查 25 个到期源（共 449 个）：变化 16 · 首次 0 · 无变化 4 · **抓不到 5**

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
- **tripo-site**（S/spa）Tripo 官网 — 被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法
  https://www.tripo3d.ai/
- **sora-eol-search**（B/html）OpenAI Sora 停服说明（⚠️ 页面反爬，我们抓不到，内容来自搜索摘要转述） — HTTP 403
  https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation
- **sora-2**（A/html）OpenAI · Sora 2 发布页（⚠️ 对我们的采集器返回 403，本轮未能一手复核） — HTTP 403
  https://openai.com/index/sora-2/

## 有变化

- **hf-t2v** Hugging Face · text-to-video 按下载量
  新增 4 条：Wan-AI/Wan2.2-TI2V-5B、rockerBOO/minimax-h3-nvfp4-convrot、t8star/Vdn-Minimax-H3-Comfy、wangfuyun/AnimateLCM
- **hf-i2v** Hugging Face · image-to-video 按下载量
  新增 2 条：Wan-AI/Wan-Dancer-14B、rockerBOO/minimax-h3-nvfp4-convrot
- **fal-video** fal · 视频模型目录
- **techcrunch-ai** TechCrunch · AI（RSS）
  新增 20 条：Anthropic and OpenAI want to embed safety evaluators. Will they really be independent?、After accusations of selling &#8216;perv glasses,&#8217; Meta prepares to sell a pair without a camera、AI labs want in-house auditors — but maybe they should shut the front door first、Your AI agents can now control your Google Home devices、Anthropic merges Claude chat and Cowork in one interface、Robots are waiting for a ChatGPT moment: Nvidia’s Les Karpas explains why at TechCrunch Disrupt 2026、Threads&#8217; new features let podcasters promote shows and reach listeners、Next wave of VCs judging Startup Battlefield 200 contenders at TechCrunch Disrupt 2026 revealed、3 days left to exhibit: Get your brand in front of VCs and high-value leads at TechCrunch Disrupt 2026、SK Hynix reportedly in talks with Intel to build memory chips in US、Former Infosys chief&#8217;s AI startup nabs another $53M、Amazon launches Alexa+ in India with Hindi support …
- **ltx-hf-org** Hugging Face · Lightricks 组织全部仓库
  新增 3 条：Lightricks/LTX-2.5-22b-IC-LoRA-Colorization、Lightricks/LTX-2.5-22b-IC-LoRA-Deblur、Lightricks/LTX-2.5-22b-IC-LoRA-Decompression
- **openai-models** OpenAI · 官方模型列表
- **gemini-models** Google · Gemini API 官方模型列表
- **hf-t2i** Hugging Face · text-to-image 按下载量
  新增 1 条：AlperKTS/Krea2_FP8
- **hf-i2i** Hugging Face · image-to-image 按下载量
  新增 1 条：ChrisColeTech/krea2-turbo-uncensored-v1.1-FP8
- **deepseek-docs** DeepSeek 官方 API 文档
- **xai-docs** xAI 官方文档 · 模型清单
- **openai-docs** OpenAI 开发者文档 · 指南索引
- **openai-changelog** OpenAI · API Changelog
- **gemini-changelog** Gemini API · Release notes
- **xai-release-notes** xAI · API Release Notes
- **gemini-music** Gemini API · Music generation（Lyria 3）

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 未到期（上次 2026-09-16） |
| seed-models | S | html | 未到期（上次 2026-09-09） |
| kling-api-updates | S | spa | 未到期（上次 2026-09-16） |
| kling-site | S | spa | 抓不到（还是壳：渲染后正文只有 232 个字符） |
| google-video-docs | S | html | 未到期（上次 2026-09-16） |
| deepmind-veo | S | html | 未到期（上次 2026-09-09） |
| vertex-video-ref | S | html | 未到期（上次 2026-09-09） |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 未到期（上次 2026-09-16） |
| wan-hf | S | json | 未到期（上次 2026-09-16） |
| minimax-blog | S | html | 未到期（上次 2026-09-16） |
| minimax-hf | S | json | 未到期（上次 2026-09-16） |
| runway-research | S | html | 未到期（上次 2026-09-09） |
| luma-site | S | html | 未到期（上次 2026-09-09） |
| vidu-changelog | S | spa | 未到期（上次 2026-09-16） |
| vidu-model-map | S | spa | 未到期（上次 2026-09-16） |
| vidu-function-list | S | spa | 未到期（上次 2026-09-16） |
| vidu-site | S | html | 未到期（上次 2026-09-09） |
| vidu-s1-gh | S | json | 未到期（上次 2026-09-09） |
| pika-site | S | html | 未到期（上次 2026-09-09） |
| higgsfield-site | S | html | 未到期（上次 2026-09-09） |
| decart-research | S | html | 未到期（上次 2026-09-09） |
| arxiv-video | S | atom | 未到期（上次 2026-09-16） |
| epoch-notable | A | csv | 未到期（上次 2026-09-16） |
| aa-t2v | A | spa | 未到期（上次 2026-09-16） |
| aa-i2v | A | spa | 未到期（上次 2026-09-16） |
| hf-t2v | A | json | 变了 |
| hf-i2v | A | json | 变了 |
| hf-v2v | A | json | 未到期（上次 2026-09-16） |
| fal-video | S | spa | 变了 |
| replicate-t2v | S | html | 未到期（上次 2026-09-16） |
| aiwiki | B | spa | 未到期（上次 2026-09-11） |
| futurepedia | B | html | 未到期（上次 2026-09-11） |
| comfyui-releases | C | json | 未到期（上次 2026-09-09） |
| capcut-templates | C | html | 未到期（上次 2026-09-11） |
| picsart-effects | C | html | 未到期（上次 2026-09-11） |
| runway-changelog | S | spa | 未到期（上次 2026-09-16） |
| runway-models | S | spa | 未到期（上次 2026-09-16） |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| google-models | S | html | 未到期（上次 2026-09-16） |
| seed-models-hub | S | html | 未到期（上次 2026-09-16） |
| apiyi-models | S | spa | 未到期（上次 2026-09-16） |
| arxiv-worldmodel | S | atom | 未到期（上次 2026-09-16） |
| techcrunch-ai | B | atom | 变了 |
| decart-blog | S | spa | 未到期（上次 2026-09-16） |
| ltx-gh | S | json | 未到期（上次 2026-09-16） |
| ltx-hf-org | S | json | 变了 |
| decart-site | S | spa | 未到期（上次 2026-09-12） |
| picsart-video | C | html | 未到期（上次 2026-09-11） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 未到期（上次 2026-09-09） |
| hailuo-video | S | html | 未到期（上次 2026-09-09） |
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
| comfy-docs | S | spa | 未到期（上次 2026-09-09） |
| h3-card | S | html | 未到期（上次 2026-09-09） |
| hf-lineage | S | json | 未到期（上次 2026-09-16） |
| vacetools-gh | C | json | 未到期（上次 2026-09-16） |
| framepack-gh | S | json | 未到期（上次 2026-09-16） |
| fpwrapper-gh | C | json | 未到期（上次 2026-09-16） |
| latentsync-gh | S | json | 未到期（上次 2026-09-16） |
| lswrapper-gh | C | json | 未到期（上次 2026-09-16） |
| float-gh | C | json | 未到期（上次 2026-09-16） |
| sviflf-gh | C | json | 未到期（上次 2026-09-16） |
| flflatent-gh | C | json | 未到期（上次 2026-09-16） |
| mm-blog | S | html | 未到期（上次 2026-09-11） |
| wanwrapper-gh | C | json | 未到期（上次 2026-09-16） |
| comfy-org-hf | S | json | 未到期（上次 2026-09-16） |
| ltx-comfy-gh | S | json | 未到期（上次 2026-09-16） |
| mpt-gh | C | json | 未到期（上次 2026-09-16） |
| manim-gh | C | json | 未到期（上次 2026-09-16） |
| pyvideotrans-gh | C | json | 未到期（上次 2026-09-16） |
| duix-gh | C | json | 未到期（上次 2026-09-16） |
| fay-gh | C | json | 未到期（上次 2026-09-16） |
| narrato-gh | C | json | 未到期（上次 2026-09-16） |
| zho-wf-gh | C | json | 未到期（上次 2026-09-16） |
| echomimic-gh | C | json | 未到期（上次 2026-09-16） |
| linly-talker-gh | C | json | 未到期（上次 2026-09-16） |
| animate-anything-gh | C | json | 未到期（上次 2026-09-16） |
| huobao-gh | C | json | 未到期（上次 2026-09-16） |
| awesome-vd-gh | C | json | 未到期（上次 2026-09-16） |
| seedream-page | S | html | 未到期（上次 2026-09-09） |
| openai-models | S | html | 变了 |
| gemini-models | S | html | 变了 |
| google-gemini-blog | S | html | 未到期（上次 2026-09-09） |
| azure-foundry-blog | B | html | 未到期（上次 2026-09-11） |
| recraft-blog | S | html | 未到期（上次 2026-09-11） |
| kolors-gh | S | html | 未到期（上次 2026-09-11） |
| krea-blog | S | html | 未到期（上次 2026-09-09） |
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
| google-nb-blog | S | html | 未到期（上次 2026-09-09） |
| ms-foundry-blog | B | html | 未到期（上次 2026-09-11） |
| hf-image-org | S | json | 未到期（上次 2026-09-16） |
| mj-updates | S | html | 未到期（上次 2026-09-09） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 321 个字符） |
| hf-t2i | A | json | 变了 |
| hf-i2i | A | json | 变了 |
| anthropic-models | S | html | 无变化 |
| deepseek-docs | S | html | 变了 |
| xai-docs | S | html | 变了 |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| hf-text-org | S | json | 未到期（上次 2026-09-16） |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 未到期（上次 2026-09-09） |
| glm-api | S | html | 未到期（上次 2026-09-09） |
| minimax-platform | S | html | 未到期（上次 2026-09-09） |
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
| anthropic-features | S | html | 无变化 |
| openai-docs | S | html | 变了 |
| deepseek-pricing | S | html | 未到期（上次 2026-09-16） |
| deepseek-updates | S | html | 未到期（上次 2026-09-16） |
| bailian-models | S | html | 未到期（上次 2026-09-16） |
| kimi-pricing | S | html | 未到期（上次 2026-09-09） |
| glm-52-doc | S | html | 未到期（上次 2026-09-09） |
| kimi-websearch | S | html | 未到期（上次 2026-09-09） |
| kimi-chat-api | S | html | 未到期（上次 2026-09-09） |
| bailian-websearch | S | html | 未到期（上次 2026-09-09） |
| glm-websearch | S | html | 未到期（上次 2026-09-09） |
| bailian-coder | S | html | 未到期（上次 2026-09-09） |
| ark-models | S | spa | 未到期（上次 2026-09-16） |
| minimax-api-overview | S | spa | 未到期（上次 2026-09-16） |
| claude-models | S | html | 无变化 |
| openai-caching | S | html | 未到期（上次 2026-09-10） |
| openai-structured | S | html | 未到期（上次 2026-09-10） |
| deepseek-chat-api | S | html | 未到期（上次 2026-09-10） |
| gemini-audio | S | spa | 未到期（上次 2026-09-10） |
| gemini-vision | S | spa | 未到期（上次 2026-09-10） |
| minimax-anthropic-api | S | spa | 未到期（上次 2026-09-09） |
| minimax-openai-api | S | spa | 未到期（上次 2026-09-09） |
| minimax-server-tools | S | spa | 未到期（上次 2026-09-09） |
| minimax-caching | S | spa | 未到期（上次 2026-09-09） |
| minimax-openapi | S | json | 未到期（上次 2026-09-16） |
| gemini-computer-use | S | spa | 未到期（上次 2026-09-10） |
| ark-pricing | S | spa | 未到期（上次 2026-09-09） |
| bailian-models-zh | S | spa | 未到期（上次 2026-09-16） |
| glm-batch | S | html | 未到期（上次 2026-09-16） |
| glm-chat-api | S | html | 未到期（上次 2026-09-16） |
| claude-deprecations | S | html | 无变化 |
| openai-changelog | S | spa | 变了 |
| gemini-changelog | S | spa | 变了 |
| xai-release-notes | S | html | 变了 |
| aa-llm | B | spa | 未到期（上次 2026-09-09） |
| ideogram-api | S | html | 未到期（上次 2026-09-09） |
| elevenlabs-models | S | html | 未到期（上次 2026-09-09） |
| openai-realtime | S | html | 未到期（上次 2026-09-09） |
| gemini-tts | S | html | 未到期（上次 2026-09-09） |
| elevenlabs-tts | S | html | 未到期（上次 2026-09-09） |
| bailian-omni | S | html | 未到期（上次 2026-09-10） |
| elevenlabs-remix | S | html | 未到期（上次 2026-09-09） |
| openai-tts | S | html | 未到期（上次 2026-09-09） |
| gemini-music | S | html | 变了 |
| glm-tts-doc | S | html | 未到期（上次 2026-09-09） |
| glm-tts-clone-doc | S | html | 未到期（上次 2026-09-09） |
| glm-voice-doc | S | html | 未到期（上次 2026-09-09） |
| xai-voice | S | html | 未到期（上次 2026-09-09） |
| hf-sound-org | S | json | 未到期（上次 2026-09-16） |
| kokoro-card | S | html | 未到期（上次 2026-09-09） |
| xai-models | S | html | 未到期（上次 2026-09-10） |
| mistral-models | S | html | 未到期（上次 2026-09-09） |
| mistral-tools | S | html | 未到期（上次 2026-09-09） |
| mistral-vision | S | html | 未到期（上次 2026-09-09） |
| fish-s2pro-card | S | html | 未到期（上次 2026-09-09） |
| cosyvoice-card | S | html | 未到期（上次 2026-09-09） |
| llama-card | S | html | 未到期（上次 2026-09-09） |
| elevenlabs-voices | S | html | 未到期（上次 2026-09-09） |
| wan-t2v-card | S | html | 未到期（上次 2026-09-09） |
| minimax-release | S | spa | 未到期（上次 2026-09-16） |
| s-e2ab-gh | C | json | 未到期（上次 2026-09-16） |
| s-abogen-gh | C | json | 未到期（上次 2026-09-16） |
| s-epub2tts-gh | C | json | 未到期（上次 2026-09-16） |
| s-abcreator-gh | C | json | 未到期（上次 2026-09-16） |
| s-pvt-gh | C | json | 未到期（上次 2026-09-16） |
| s-smartsub-gh | C | json | 未到期（上次 2026-09-16） |
| s-youdub-gh | C | json | 未到期（上次 2026-09-16） |
| s-pipecat-gh | C | json | 未到期（上次 2026-09-16） |
| s-livekit-gh | C | json | 未到期（上次 2026-09-16） |
| s-hfs2s-gh | C | json | 未到期（上次 2026-09-16） |
| s-moshi-gh | C | json | 未到期（上次 2026-09-16） |
| s-acestep15-gh | C | json | 未到期（上次 2026-09-16） |
| s-acestep-gh | C | json | 未到期（上次 2026-09-16） |
| s-yue-gh | C | json | 未到期（上次 2026-09-16） |
| s-audiocraft-gh | C | json | 未到期（上次 2026-09-16） |
| s-gptsovits-gh | C | json | 未到期（上次 2026-09-16） |
| s-rvc-gh | C | json | 未到期（上次 2026-09-16） |
| s-fishspeech-gh | C | json | 未到期（上次 2026-09-16） |
| s-indextts-gh | C | json | 未到期（上次 2026-09-16） |
| s-cosyvoice-gh | C | json | 未到期（上次 2026-09-16） |
| s-f5tts-gh | C | json | 未到期（上次 2026-09-16） |
| s-qwen3omni-gh | C | json | 未到期（上次 2026-09-16） |
| ideogram-overview | A | html | 未到期（上次 2026-09-09） |
| ideogram-v4-remix | A | html | 未到期（上次 2026-09-09） |
| ideogram-v3-inpaint | A | html | 未到期（上次 2026-09-09） |
| ideogram-v3-reframe | A | html | 未到期（上次 2026-09-09） |
| ideogram-v3-generate | A | html | 未到期（上次 2026-09-09） |
| ideogram-edit | A | html | 未到期（上次 2026-09-09） |
| ideogram-upscale | A | html | 未到期（上次 2026-09-09） |
| ideogram-hf | A | html | 未到期（上次 2026-09-09） |
| bailian-qimg3 | A | html | 未到期（上次 2026-09-09） |
| bailian-qimg | A | html | 未到期（上次 2026-09-09） |
| bailian-textgen-zh | A | html | 未到期（上次 2026-09-09） |
| bailian-thinking-zh | A | html | 未到期（上次 2026-09-09） |
| bailian-cache-zh | A | html | 未到期（上次 2026-09-09） |
| bailian-batch-zh | A | html | 未到期（上次 2026-09-09） |
| bailian-websearch-zh | A | html | 未到期（上次 2026-09-10） |
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
| recraft-endpoints | A | html | 未到期（上次 2026-09-03） |
| recraft-nl-edit | A | html | 未到期（上次 2026-09-03） |
| hunyuan-image-hf | A | json | 未到期（上次 2026-09-03） |
| bfl-flux2-overview | A | html | 未到期（上次 2026-09-03） |
| bfl-flux2-multiref | A | html | 未到期（上次 2026-09-12） |
| ark-seedream-api | A | spa | 未到期（上次 2026-09-10） |
| arxiv-fp8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-int8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-qlora | A | html | 未到期（上次 2026-08-13） |
| arxiv-gptq | A | html | 未到期（上次 2026-08-13） |
| arxiv-awq | A | html | 未到期（上次 2026-08-13） |
| arxiv-lora | A | html | 未到期（上次 2026-08-13） |
| hf-gguf-doc | A | html | 未到期（上次 2026-08-13） |
| hf-diffusers-memory | A | html | 未到期（上次 2026-08-13） |
| zimage-gh | A | html | 未到期（上次 2026-09-05） |
| hunyuan-image-gh | A | html | 未到期（上次 2026-09-05） |
| skyreels-gh | A | html | 未到期（上次 2026-09-12） |
| bfl-flux3 | A | html | 未到期（上次 2026-09-12） |
| anthropic-privacy | A | html | 未到期（上次 2026-08-14） |
| stability-terms | A | html | 未到期（上次 2026-08-14） |
| recraft-blog-b | A | html | 未到期（上次 2026-09-13） |
| gh-llm-universe | C | json | 未到期（上次 2026-09-13） |
| gh-all-in-rag | C | json | 未到期（上次 2026-09-13） |
| gh-handy-multi-agent | C | json | 未到期（上次 2026-09-13） |
| gh-llm-action | C | json | 未到期（上次 2026-09-13） |
| gh-self-llm | C | json | 未到期（上次 2026-09-13） |
| gh-langchain-zh | C | json | 未到期（上次 2026-09-13） |
| gh-llamafactory | C | json | 未到期（上次 2026-09-13） |
| gh-gptsovits-cn | C | json | 未到期（上次 2026-09-13） |
| gh-cosyvoice-doc | C | json | 未到期（上次 2026-09-13） |
| gh-chattts-cn | C | json | 未到期（上次 2026-09-13） |
| gh-pyvideotrans-doc | C | json | 未到期（上次 2026-09-13） |
| gh-comfy-zho | C | json | 未到期（上次 2026-09-13） |
| gh-comfyui | C | json | 未到期（上次 2026-09-13） |
| gh-sdbook | C | json | 未到期（上次 2026-09-13） |
| waytoagi-wiki | C | spa | 从未抓过 |
| hf-hunyuan3d-21 | S | html | 未到期（上次 2026-09-12） |
| tripo-docs-generation | S | spa | 未到期（上次 2026-09-12） |
| meshy-docs-api | S | spa | 未到期（上次 2026-09-12） |
| meshy-site | S | spa | 未到期（上次 2026-09-12） |
| rodin-api-docs | S | html | 未到期（上次 2026-09-12） |
| gh-trellis | S | html | 未到期（上次 2026-09-12） |
| seed3d-page | S | spa | 从未抓过 |
| stability-spar3d | S | html | 未到期（上次 2026-09-12） |
| tripo-site | S | spa | 抓不到（被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法） |
| rodin-site | S | spa | 未到期（上次 2026-09-12） |
| tripo-docs-animation | S | spa | 未到期（上次 2026-09-12） |
| gh-hunyuan3d-buffalo | S | html | 未到期（上次 2026-09-12） |
| replicate-hunyuan3d-31 | A | spa | 未到期（上次 2026-09-12） |
| replicate-3d | A | spa | 未到期（上次 2026-09-04） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-09-04） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-09-04） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-09-04） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-09-04） |
| gh-spar3d | S | html | 未到期（上次 2026-09-04） |
| gh-triposg | S | html | 未到期（上次 2026-09-04） |
| gh-instantmesh | S | html | 未到期（上次 2026-09-04） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 未到期（上次 2026-09-12） |
| hf-ltx-25 | S | html | 未到期（上次 2026-09-12） |
| meshy-changelog | S | spa | 未到期（上次 2026-09-12） |
| hf-instantmesh | S | html | 未到期（上次 2026-09-04） |
| hf-apple-sharp | S | html | 未到期（上次 2026-09-04） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-09-04） |
| hf-anysplat | S | html | 未到期（上次 2026-09-04） |
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-09-13） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-09-13） |
| hf-trellis2 | S | html | 未到期（上次 2026-09-04） |
| pixverse-caps | S | html | 未到期（上次 2026-09-12） |
| pixverse-v6 | S | html | 未到期（上次 2026-09-12） |
| pixverse-fusion | S | html | 未到期（上次 2026-09-12） |
| hf-cogvideox | S | html | 未到期（上次 2026-09-05） |
| hf-i2vgen | S | html | 未到期（上次 2026-09-05） |
| hf-longcat-edit | S | html | 未到期（上次 2026-09-05） |
| hf-magi | S | html | 未到期（上次 2026-09-05） |
| heygen-docs | S | spa | 未到期（上次 2026-09-12） |
| synthesia-docs | S | spa | 未到期（上次 2026-09-12） |
| hf-longcat-avatar | S | html | 未到期（上次 2026-09-12） |
| hf-hunyuan-avatar | S | html | 未到期（上次 2026-09-12） |
| hf-liveportrait | S | html | 未到期（上次 2026-09-12） |
| hf-musetalk | S | html | 未到期（上次 2026-09-12） |
| hf-hallo2 | S | html | 未到期（上次 2026-09-12） |
| replicate-lipsync | A | spa | 未到期（上次 2026-09-05） |
| comfy-s2v | S | html | 未到期（上次 2026-09-05） |
| heygen-translate | S | html | 未到期（上次 2026-09-05） |
| heygen-live | S | html | 未到期（上次 2026-09-05） |
| heygen-photo | S | html | 未到期（上次 2026-09-05） |
| heygen-training | S | html | 未到期（上次 2026-09-05） |
| heygen-changelog | S | html | 未到期（上次 2026-09-12） |
| hf-hallo-live | S | html | 未到期（上次 2026-09-12） |
| hf-longcat-avatar-10 | S | html | 未到期（上次 2026-09-12） |
| gh-video-retalking | S | html | 未到期（上次 2026-09-05） |
| elevenlabs-changelog | S | html | 未到期（上次 2026-09-12） |
| hf-glm-voice | S | html | 未到期（上次 2026-09-12） |
| hf-glm-tts | S | html | 未到期（上次 2026-09-12） |
| openai-model-tts | S | spa | 未到期（上次 2026-09-12） |
| openai-model-realtime | S | spa | 未到期（上次 2026-09-12） |
| elevenlabs-docs | S | html | 未到期（上次 2026-09-10） |
| gemini-robotics-er | S | html | 未到期（上次 2026-09-12） |
| figure-helix | A | html | 未到期（上次 2026-09-12） |
| pi-pi05-blog | A | html | 未到期（上次 2026-09-12） |
| pi-openpi-gh | A | html | 未到期（上次 2026-09-12） |
| nvidia-groot-gh | A | html | 未到期（上次 2026-09-12） |
| openvla-gh | A | html | 未到期（上次 2026-09-12） |
| openvla-repo | A | html | 未到期（上次 2026-09-12） |
| hf-robotics | B | json | 未到期（上次 2026-09-12） |
| lerobot-gh | A | json | 未到期（上次 2026-09-12） |
| groot-policy-doc | A | html | 未到期（上次 2026-09-12） |
| rynnbrain-card | A | html | 未到期（上次 2026-09-12） |
| maniskill-gh | B | json | 未到期（上次 2026-09-13） |
| cosmos3-card | S | html | 未到期（上次 2026-09-12） |
| genie3-blog | A | html | 未到期（上次 2026-09-12） |
| odyssey-site | A | html | 未到期（上次 2026-09-12） |
| worldlabs-marble | A | html | 未到期（上次 2026-09-12） |
| matrixgame-card | A | html | 未到期（上次 2026-09-12） |
| hunyuanworld-gh | A | html | 未到期（上次 2026-09-12） |
| wham-card | A | html | 未到期（上次 2026-09-13） |
| vjepa2-blog | A | html | 未到期（上次 2026-09-13） |
| vjepa2-card | B | html | 未到期（上次 2026-09-13） |
| sci-boltz-gh | A | html | 未到期（上次 2026-09-12） |
| sci-af3-blog | A | html | 未到期（上次 2026-09-14） |
| sci-esm2-card | B | html | 未到期（上次 2026-09-14） |
| sci-wn-gh | A | html | 未到期（上次 2026-09-12） |
| sci-aurora-gh | A | html | 未到期（上次 2026-09-12） |
| sci-neuralgcm-gh | A | html | 未到期（上次 2026-09-12） |
| sci-mattergen-gh | A | html | 未到期（上次 2026-09-12） |
| sci-mace-gh | A | html | 未到期（上次 2026-09-12） |
| sci-gnome-gh | A | html | 未到期（上次 2026-09-12） |
| kling-api | A | html | 未到期（上次 2026-09-12） |
| seed-25 | A | html | 未到期（上次 2026-09-12） |
| veo-doc | A | html | 未到期（上次 2026-09-10） |
| sora-eol-search | B | html | 抓不到（HTTP 403） |
| sora-api | A | html | 未到期（上次 2026-09-12） |
| sora-2 | A | html | 抓不到（HTTP 403） |
| wan-site | A | html | 未到期（上次 2026-09-12） |
| mm-hf-api | A | json | 未到期（上次 2026-09-12） |
| vidu-fl | A | html | 未到期（上次 2026-09-12） |
| vidu-up | A | html | 未到期（上次 2026-09-12） |
| vidu-mm | A | html | 未到期（上次 2026-09-12） |
| rw-changelog | A | html | 未到期（上次 2026-09-12） |
| vidu-s1-paper | A | html | 未到期（上次 2026-08-15） |
| omni-doc | A | html | 未到期（上次 2026-09-12） |
| g-video | A | html | 未到期（上次 2026-09-12） |
| ltx-hf-23 | A | html | 未到期（上次 2026-09-12） |
| aa-board | B | html | 未到期（上次 2026-09-12） |
| gemini-image-docs | A | html | 未到期（上次 2026-09-10） |
| openai-image-docs | A | html | 未到期（上次 2026-09-10） |
| recraft-docs | A | html | 未到期（上次 2026-09-12） |
| bfl-docs | A | html | 未到期（上次 2026-09-12） |
| zimage-card | A | html | 未到期（上次 2026-09-12） |
| hunyuan-image-card | A | html | 未到期（上次 2026-09-12） |
| smolvla-card | A | html | 未到期（上次 2026-09-12） |
| molmoact-card | A | html | 未到期（上次 2026-09-12） |
| hf-whisper | A | html | 未到期（上次 2026-09-10） |
| hf-sensevoice | A | html | 未到期（上次 2026-09-12） |
| hf-qwen3-asr | A | html | 未到期（上次 2026-09-12） |
| minimax-release-notes | A | html | 未到期（上次 2026-09-12） |
| seed-blog-1_5 | A | html | 未到期（上次 2026-09-12） |
| seed-blog-2_0 | A | html | 未到期（上次 2026-09-12） |
| ideogram-x | A | html | 未到期（上次 2026-09-12） |

# 信息源监视报告 · 2026-09-14

本次检查 17 个到期源（共 449 个）：变化 7 · 首次 0 · 无变化 3 · **抓不到 7**

> 这份报告是给人看的那 20 条待办的来源（§59.3 的负反馈：人每周要看的条目 ≤ 20）。
> 「抓不到」不是失败，是**信息本身** —— 一个长期抓不到的官方源，说明那家厂商没有可 diff 的公开更新入口，
> 而那正好解释了为什么它名下的格子质量最差。

## 抓到了但没内容（比抓不到更危险 —— 它不会喊）

（无）

## 抓不到（要处理）

- **kling-site**（S/spa）Kling AI 官网 — 还是壳：渲染后正文只有 232 个字符
  https://klingai.com/
- **arxiv-video**（S/atom）arXiv · 视频生成新论文 — HTTP 429
  http://export.arxiv.org/api/query?search_query=abs:%22video%20generation%22&sortBy=submittedDate&sortOrder=descending&max_results=40
- **arxiv-worldmodel**（S/atom）arXiv · world model / 实时视频生成 — The operation was aborted due to timeout
  http://export.arxiv.org/api/query?search_query=abs:%22world%20model%22+AND+abs:%22video%22&sortBy=submittedDate&sortOrder=descending&max_results=40
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
  新增 3 条：Lightricks/LTX-Video-0.9.5、brurpo/DaSiWa-MiniMax-H3-Hybrid、ibyteohdear/Lightricks-LTX-2-DISTILLED-10-Eros
- **hf-i2v** Hugging Face · image-to-video 按下载量
  新增 7 条：Patarapoom/h3-vbvr、Wan-AI/Wan2.1-VACE-14B、brurpo/DaSiWa-MiniMax-H3-Hybrid、ibyteohdear/Lightricks-LTX-2-DISTILLED-10-Eros、lxxxy6/LTX-2.5、t8star/Vdn-Minimax-H3-Comfy、zai-org/CogVideoX-5b-I2V
- **techcrunch-ai** TechCrunch · AI（RSS）
  新增 12 条：What&#8217;s behind the AI industry’s latest warnings of doom?、Obama urges Democrats to have a ‘clear plan’ for AI safeguards、OpenAI’s Sam Altman says it would be &#8216;ill-advised&#8217; to go public in 2026、Anthropic CEO outlines plan to slow AI development、Mecka AI nears $500M valuation in Sequoia-led deal amid rush for robot training data、Y Combinator&#8217;s Garry Tan wants US open-weight AI labs to &#8216;distill&#8217; frontier models, too、OpenAI&#8217;s feud with mathematicians is only escalating、One week left to book your exhibit table at TechCrunch Disrupt 2026、Final, final, final call for TechCrunch Disrupt 2026 Side Events、Kimi-maker Moonshot AI targets $2B in annual revenue、An Anthropic researcher’s doomsday warning comes at a very interesting time、Nscale adds former OpenAI exec Fidji Simo to its board ahead of potential IPO
- **ltx-hf-org** Hugging Face · Lightricks 组织全部仓库
  新增 1 条：Lightricks/LTX-2.5-22b-IC-LoRA-Ingredients
- **hf-t2i** Hugging Face · text-to-image 按下载量
  新增 3 条：OnomaAIResearch/Illustrious-xl-early-release-v0、drbaph/HiDream-O1-Image-FP8、thibaud/controlnet-openpose-sdxl-1.0
- **hf-i2i** Hugging Face · image-to-image 按下载量
  新增 2 条：MeiGen-AI/PosterOmni_v1、realrebelai/SenseNova-U1.5-8B_GGUFs
- **sci-af3-blog** Google 官方博客 · AlphaFold 3

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 未到期（上次 2026-09-09） |
| seed-models | S | html | 未到期（上次 2026-09-09） |
| kling-api-updates | S | spa | 未到期（上次 2026-09-09） |
| kling-site | S | spa | 抓不到（还是壳：渲染后正文只有 232 个字符） |
| google-video-docs | S | html | 未到期（上次 2026-09-09） |
| deepmind-veo | S | html | 未到期（上次 2026-09-09） |
| vertex-video-ref | S | html | 未到期（上次 2026-09-09） |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 未到期（上次 2026-09-09） |
| wan-hf | S | json | 未到期（上次 2026-09-09） |
| minimax-blog | S | html | 未到期（上次 2026-09-09） |
| minimax-hf | S | json | 未到期（上次 2026-09-09） |
| runway-research | S | html | 未到期（上次 2026-09-09） |
| luma-site | S | html | 未到期（上次 2026-09-09） |
| vidu-changelog | S | spa | 未到期（上次 2026-09-09） |
| vidu-model-map | S | spa | 未到期（上次 2026-09-09） |
| vidu-function-list | S | spa | 未到期（上次 2026-09-09） |
| vidu-site | S | html | 未到期（上次 2026-09-09） |
| vidu-s1-gh | S | json | 未到期（上次 2026-09-09） |
| pika-site | S | html | 未到期（上次 2026-09-09） |
| higgsfield-site | S | html | 未到期（上次 2026-09-09） |
| decart-research | S | html | 未到期（上次 2026-09-09） |
| arxiv-video | S | atom | 抓不到（HTTP 429） |
| epoch-notable | A | csv | 未到期（上次 2026-09-09） |
| aa-t2v | A | spa | 未到期（上次 2026-09-09） |
| aa-i2v | A | spa | 未到期（上次 2026-09-09） |
| hf-t2v | A | json | 变了 |
| hf-i2v | A | json | 变了 |
| hf-v2v | A | json | 未到期（上次 2026-09-09） |
| fal-video | S | spa | 未到期（上次 2026-09-10） |
| replicate-t2v | S | html | 未到期（上次 2026-09-09） |
| aiwiki | B | spa | 未到期（上次 2026-09-11） |
| futurepedia | B | html | 未到期（上次 2026-09-11） |
| comfyui-releases | C | json | 未到期（上次 2026-09-09） |
| capcut-templates | C | html | 未到期（上次 2026-09-11） |
| picsart-effects | C | html | 未到期（上次 2026-09-11） |
| runway-changelog | S | spa | 未到期（上次 2026-09-09） |
| runway-models | S | spa | 未到期（上次 2026-09-09） |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| google-models | S | html | 未到期（上次 2026-09-09） |
| seed-models-hub | S | html | 未到期（上次 2026-09-09） |
| apiyi-models | S | spa | 未到期（上次 2026-09-09） |
| arxiv-worldmodel | S | atom | 抓不到（The operation was aborted due to timeout） |
| techcrunch-ai | B | atom | 变了 |
| decart-blog | S | spa | 未到期（上次 2026-09-09） |
| ltx-gh | S | json | 未到期（上次 2026-09-09） |
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
| hf-lineage | S | json | 未到期（上次 2026-09-09） |
| vacetools-gh | C | json | 未到期（上次 2026-09-09） |
| framepack-gh | S | json | 未到期（上次 2026-09-09） |
| fpwrapper-gh | C | json | 未到期（上次 2026-09-09） |
| latentsync-gh | S | json | 未到期（上次 2026-09-09） |
| lswrapper-gh | C | json | 未到期（上次 2026-09-09） |
| float-gh | C | json | 未到期（上次 2026-09-09） |
| sviflf-gh | C | json | 未到期（上次 2026-09-09） |
| flflatent-gh | C | json | 未到期（上次 2026-09-09） |
| mm-blog | S | html | 未到期（上次 2026-09-11） |
| wanwrapper-gh | C | json | 未到期（上次 2026-09-09） |
| comfy-org-hf | S | json | 未到期（上次 2026-09-09） |
| ltx-comfy-gh | S | json | 未到期（上次 2026-09-09） |
| mpt-gh | C | json | 未到期（上次 2026-09-09） |
| manim-gh | C | json | 未到期（上次 2026-09-09） |
| pyvideotrans-gh | C | json | 未到期（上次 2026-09-09） |
| duix-gh | C | json | 未到期（上次 2026-09-09） |
| fay-gh | C | json | 未到期（上次 2026-09-09） |
| narrato-gh | C | json | 未到期（上次 2026-09-09） |
| zho-wf-gh | C | json | 未到期（上次 2026-09-09） |
| echomimic-gh | C | json | 未到期（上次 2026-09-09） |
| linly-talker-gh | C | json | 未到期（上次 2026-09-09） |
| animate-anything-gh | C | json | 未到期（上次 2026-09-09） |
| huobao-gh | C | json | 未到期（上次 2026-09-09） |
| awesome-vd-gh | C | json | 未到期（上次 2026-09-09） |
| seedream-page | S | html | 未到期（上次 2026-09-09） |
| openai-models | S | html | 未到期（上次 2026-09-10） |
| gemini-models | S | html | 未到期（上次 2026-09-10） |
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
| hf-image-org | S | json | 未到期（上次 2026-09-09） |
| mj-updates | S | html | 未到期（上次 2026-09-09） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 321 个字符） |
| hf-t2i | A | json | 变了 |
| hf-i2i | A | json | 变了 |
| anthropic-models | S | html | 未到期（上次 2026-09-10） |
| deepseek-docs | S | html | 未到期（上次 2026-09-10） |
| xai-docs | S | html | 未到期（上次 2026-09-10） |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| hf-text-org | S | json | 未到期（上次 2026-09-13） |
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
| anthropic-features | S | html | 未到期（上次 2026-09-10） |
| openai-docs | S | html | 未到期（上次 2026-09-10） |
| deepseek-pricing | S | html | 未到期（上次 2026-09-13） |
| deepseek-updates | S | html | 未到期（上次 2026-09-13） |
| bailian-models | S | html | 未到期（上次 2026-09-09） |
| kimi-pricing | S | html | 未到期（上次 2026-09-09） |
| glm-52-doc | S | html | 未到期（上次 2026-09-09） |
| kimi-websearch | S | html | 未到期（上次 2026-09-09） |
| kimi-chat-api | S | html | 未到期（上次 2026-09-09） |
| bailian-websearch | S | html | 未到期（上次 2026-09-09） |
| glm-websearch | S | html | 未到期（上次 2026-09-09） |
| bailian-coder | S | html | 未到期（上次 2026-09-09） |
| ark-models | S | spa | 未到期（上次 2026-09-09） |
| minimax-api-overview | S | spa | 未到期（上次 2026-09-09） |
| claude-models | S | html | 未到期（上次 2026-09-10） |
| openai-caching | S | html | 未到期（上次 2026-09-10） |
| openai-structured | S | html | 未到期（上次 2026-09-10） |
| deepseek-chat-api | S | html | 未到期（上次 2026-09-10） |
| gemini-audio | S | spa | 未到期（上次 2026-09-10） |
| gemini-vision | S | spa | 未到期（上次 2026-09-10） |
| minimax-anthropic-api | S | spa | 未到期（上次 2026-09-09） |
| minimax-openai-api | S | spa | 未到期（上次 2026-09-09） |
| minimax-server-tools | S | spa | 未到期（上次 2026-09-09） |
| minimax-caching | S | spa | 未到期（上次 2026-09-09） |
| minimax-openapi | S | json | 未到期（上次 2026-09-09） |
| gemini-computer-use | S | spa | 未到期（上次 2026-09-10） |
| ark-pricing | S | spa | 未到期（上次 2026-09-09） |
| bailian-models-zh | S | spa | 未到期（上次 2026-09-09） |
| glm-batch | S | html | 未到期（上次 2026-09-09） |
| glm-chat-api | S | html | 未到期（上次 2026-09-09） |
| claude-deprecations | S | html | 未到期（上次 2026-09-10） |
| openai-changelog | S | spa | 未到期（上次 2026-09-10） |
| gemini-changelog | S | spa | 未到期（上次 2026-09-10） |
| xai-release-notes | S | html | 未到期（上次 2026-09-10） |
| aa-llm | B | spa | 未到期（上次 2026-09-09） |
| ideogram-api | S | html | 未到期（上次 2026-09-09） |
| elevenlabs-models | S | html | 未到期（上次 2026-09-09） |
| openai-realtime | S | html | 未到期（上次 2026-09-09） |
| gemini-tts | S | html | 未到期（上次 2026-09-09） |
| elevenlabs-tts | S | html | 未到期（上次 2026-09-09） |
| bailian-omni | S | html | 未到期（上次 2026-09-10） |
| elevenlabs-remix | S | html | 未到期（上次 2026-09-09） |
| openai-tts | S | html | 未到期（上次 2026-09-09） |
| gemini-music | S | html | 未到期（上次 2026-09-10） |
| glm-tts-doc | S | html | 未到期（上次 2026-09-09） |
| glm-tts-clone-doc | S | html | 未到期（上次 2026-09-09） |
| glm-voice-doc | S | html | 未到期（上次 2026-09-09） |
| xai-voice | S | html | 未到期（上次 2026-09-09） |
| hf-sound-org | S | json | 未到期（上次 2026-09-09） |
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
| minimax-release | S | spa | 未到期（上次 2026-09-09） |
| s-e2ab-gh | C | json | 未到期（上次 2026-09-09） |
| s-abogen-gh | C | json | 未到期（上次 2026-09-09） |
| s-epub2tts-gh | C | json | 未到期（上次 2026-09-09） |
| s-abcreator-gh | C | json | 未到期（上次 2026-09-09） |
| s-pvt-gh | C | json | 未到期（上次 2026-09-09） |
| s-smartsub-gh | C | json | 未到期（上次 2026-09-09） |
| s-youdub-gh | C | json | 未到期（上次 2026-09-09） |
| s-pipecat-gh | C | json | 未到期（上次 2026-09-09） |
| s-livekit-gh | C | json | 未到期（上次 2026-09-09） |
| s-hfs2s-gh | C | json | 未到期（上次 2026-09-09） |
| s-moshi-gh | C | json | 未到期（上次 2026-09-09） |
| s-acestep15-gh | C | json | 未到期（上次 2026-09-09） |
| s-acestep-gh | C | json | 未到期（上次 2026-09-09） |
| s-yue-gh | C | json | 未到期（上次 2026-09-09） |
| s-audiocraft-gh | C | json | 未到期（上次 2026-09-09） |
| s-gptsovits-gh | C | json | 未到期（上次 2026-09-09） |
| s-rvc-gh | C | json | 未到期（上次 2026-09-09） |
| s-fishspeech-gh | C | json | 未到期（上次 2026-09-09） |
| s-indextts-gh | C | json | 未到期（上次 2026-09-09） |
| s-cosyvoice-gh | C | json | 未到期（上次 2026-09-09） |
| s-f5tts-gh | C | json | 未到期（上次 2026-09-09） |
| s-qwen3omni-gh | C | json | 未到期（上次 2026-09-09） |
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
| hf-fishspeech15 | A | html | 无变化 |
| hf-qwen3omni | A | json | 未到期（上次 2026-09-11） |
| hf-qwen-layered | A | html | 无变化 |
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
| sci-af3-blog | A | html | 变了 |
| sci-esm2-card | B | html | 无变化 |
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

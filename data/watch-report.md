# 信息源监视报告 · 2026-10-08

本次检查 37 个到期源（共 429 个）：变化 28 · 首次 0 · 无变化 5 · **抓不到 3**

> 这份报告是给人看的那 20 条待办的来源（§59.3 的负反馈：人每周要看的条目 ≤ 20）。
> 「抓不到」不是失败，是**信息本身** —— 一个长期抓不到的官方源，说明那家厂商没有可 diff 的公开更新入口，
> 而那正好解释了为什么它名下的格子质量最差。

## 抓到了但没内容（比抓不到更危险 —— 它不会喊）

- **deepseek-docs** DeepSeek 官方 API 文档 — 正文里找不到任何一个期望关键词（https://api-docs.deepseek.com/）

## 抓不到（要处理）

- **aa-t2i**（A/spa）Artificial Analysis · 文生图竞技场 — 还是壳：渲染后正文只有 281 个字符
  https://artificialanalysis.ai/text-to-image/arena
- **tripo-site**（S/spa）Tripo 官网 — 被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法
  https://www.tripo3d.ai/
- **pi-pi05-blog**（A/html）Physical Intelligence 官方博客 · π₀.₅ — HTTP 429
  https://www.physicalintelligence.company/blog/pi05

## 有变化

- **pika-site** Pika 官网
- **hf-t2v** Hugging Face · text-to-video 按下载量
  新增 2 条：CZMartin22/TaoMate-H3-3step-ComfyUI、realrebelai/LTX-2.5_GGUFs
- **hf-i2v** Hugging Face · image-to-video 按下载量
  新增 3 条：CZMartin22/TaoMate-H3-3step-ComfyUI、hum-ma/Wan2.2-TI2V-5B-Turbo-GGUF、nvidia/Cosmos3-Super-Image2Video
- **fal-video** fal · 视频模型目录
- **techcrunch-ai** TechCrunch · AI（RSS）
  新增 20 条：Nous Research confirms it hit $1.5B valuation, launches AI agents for business users、Microsoft releases new Nvidia-chip AI PCs with revamped Windows 11、Meta&#8217;s Muse launches on iPad just a month after its mobile debut、ChatGPT for Teens keeps teens talking, even during mental health crises、ChatGPT is getting a lot more visual, with the launch of a new interface、Meta rolls out new AI tools to detect ads that secretly lead to child sexual abuse material、Healthleap raises $38M for its AI that flags hospital patients who may need a closer look、Tony Fadell on why the first wave of AI gadgets failed — and what comes next、Google experiments with an AI-powered gaming platform、OpenAI’s Alexander Embiricos is coming to TechCrunch Disrupt 2026 — days after the launch of Dots、Get hands-on: The full lineup of interactive roundtables at TechCrunch Disrupt 2026、6 days to TechCrunch Disrupt 2026: Save on your pass before doors open …
- **openai-models** OpenAI · 官方模型列表
- **gemini-models** Google · Gemini API 官方模型列表
- **hf-t2i** Hugging Face · text-to-image 按下载量
  新增 2 条：AlperKTS/Krea2_FP8、silveroxides/Chroma-GGUF
- **hf-i2i** Hugging Face · image-to-image 按下载量
  新增 1 条：joyfox/Qwen-Image-Edit-2509-Upscale2K
- **anthropic-models** Anthropic 官方文档 · 模型总览
- **xai-docs** xAI 官方文档 · 模型清单
- **anthropic-features** Anthropic 官方文档 · Features overview
- **openai-docs** OpenAI 开发者文档 · 指南索引
- **openai-caching** OpenAI · Prompt Caching
- **openai-structured** OpenAI · Structured model outputs
- **deepseek-chat-api** DeepSeek · Create Chat Completion
- **gemini-computer-use** Gemini API · Computer Use
- **claude-deprecations** Anthropic · Model deprecations
- **openai-changelog** OpenAI · API Changelog
- **gemini-changelog** Gemini API · Release notes
- **xai-release-notes** xAI · API Release Notes
- **bailian-omni** 阿里云百炼 · Qwen-Omni
- **gemini-music** Gemini API · Music generation（Lyria 3）
- **bailian-websearch-zh** 阿里云百炼中文站 · 联网搜索
- **elevenlabs-docs** ElevenLabs · 文档索引（llms.txt）
- **gemini-image-docs** Google · Gemini API 图像生成官方文档
- **openai-image-docs** OpenAI · Image generation 官方指南
- **hf-whisper** OpenAI 官方 · Whisper large-v3 模型卡

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 未到期（上次 2026-10-07） |
| seed-models | S | html | 未到期（上次 2026-10-07） |
| kling-api-updates | S | spa | 未到期（上次 2026-10-07） |
| kling-site | S | spa | 未到期（上次 2026-09-29） |
| google-video-docs | S | html | 未到期（上次 2026-10-07） |
| deepmind-veo | S | html | 未到期（上次 2026-10-07） |
| vertex-video-ref | S | html | 未到期（上次 2026-10-07） |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 未到期（上次 2026-10-07） |
| wan-hf | S | json | 未到期（上次 2026-10-07） |
| minimax-blog | S | html | 未到期（上次 2026-10-07） |
| minimax-hf | S | json | 未到期（上次 2026-10-07） |
| runway-research | S | html | 未到期（上次 2026-10-07） |
| luma-site | S | html | 未到期（上次 2026-10-07） |
| vidu-changelog | S | spa | 未到期（上次 2026-10-07） |
| vidu-model-map | S | spa | 未到期（上次 2026-10-07） |
| vidu-function-list | S | spa | 未到期（上次 2026-10-07） |
| vidu-site | S | html | 未到期（上次 2026-10-07） |
| vidu-s1-gh | S | json | 未到期（上次 2026-10-07） |
| pika-site | S | html | 变了 |
| higgsfield-site | S | html | 未到期（上次 2026-10-07） |
| decart-research | S | html | 未到期（上次 2026-10-07） |
| arxiv-video | S | atom | 未到期（上次 2026-10-07） |
| epoch-notable | A | csv | 未到期（上次 2026-10-07） |
| aa-t2v | A | spa | 未到期（上次 2026-10-07） |
| aa-i2v | A | spa | 未到期（上次 2026-10-07） |
| hf-t2v | A | json | 变了 |
| hf-i2v | A | json | 变了 |
| hf-v2v | A | json | 未到期（上次 2026-10-07） |
| fal-video | S | spa | 变了 |
| replicate-t2v | S | html | 未到期（上次 2026-10-07） |
| aiwiki | B | spa | 未到期（上次 2026-09-11） |
| futurepedia | B | html | 未到期（上次 2026-09-11） |
| comfyui-releases | C | json | 未到期（上次 2026-10-07） |
| capcut-templates | C | html | 未到期（上次 2026-09-11） |
| picsart-effects | C | html | 未到期（上次 2026-09-11） |
| runway-changelog | S | spa | 未到期（上次 2026-10-07） |
| runway-models | S | spa | 未到期（上次 2026-10-07） |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| seed-models-hub | S | html | 未到期（上次 2026-10-07） |
| apiyi-models | S | spa | 未到期（上次 2026-10-07） |
| arxiv-worldmodel | S | atom | 未到期（上次 2026-10-07） |
| techcrunch-ai | B | atom | 变了 |
| ltx-gh | S | json | 未到期（上次 2026-10-07） |
| ltx-hf-org | S | json | 无变化 |
| decart-site | S | spa | 未到期（上次 2026-10-03） |
| picsart-video | C | html | 未到期（上次 2026-09-11） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 未到期（上次 2026-10-07） |
| hailuo-video | S | html | 未到期（上次 2026-10-07） |
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
| comfy-docs | S | spa | 未到期（上次 2026-10-07） |
| h3-card | S | html | 未到期（上次 2026-10-07） |
| hf-lineage | S | json | 未到期（上次 2026-10-07） |
| vacetools-gh | C | json | 未到期（上次 2026-10-07） |
| framepack-gh | S | json | 未到期（上次 2026-10-07） |
| fpwrapper-gh | C | json | 未到期（上次 2026-10-07） |
| latentsync-gh | S | json | 未到期（上次 2026-10-07） |
| lswrapper-gh | C | json | 未到期（上次 2026-10-07） |
| float-gh | C | json | 未到期（上次 2026-10-07） |
| sviflf-gh | C | json | 未到期（上次 2026-10-07） |
| flflatent-gh | C | json | 未到期（上次 2026-10-07） |
| mm-blog | S | html | 未到期（上次 2026-09-11） |
| wanwrapper-gh | C | json | 未到期（上次 2026-10-07） |
| comfy-org-hf | S | json | 未到期（上次 2026-10-07） |
| ltx-comfy-gh | S | json | 未到期（上次 2026-10-07） |
| mpt-gh | C | json | 未到期（上次 2026-10-07） |
| manim-gh | C | json | 未到期（上次 2026-10-07） |
| pyvideotrans-gh | C | json | 未到期（上次 2026-10-07） |
| duix-gh | C | json | 未到期（上次 2026-10-07） |
| fay-gh | C | json | 未到期（上次 2026-10-07） |
| narrato-gh | C | json | 未到期（上次 2026-10-07） |
| zho-wf-gh | C | json | 未到期（上次 2026-10-07） |
| echomimic-gh | C | json | 未到期（上次 2026-10-07） |
| linly-talker-gh | C | json | 未到期（上次 2026-10-07） |
| animate-anything-gh | C | json | 未到期（上次 2026-10-07） |
| huobao-gh | C | json | 未到期（上次 2026-10-07） |
| awesome-vd-gh | C | json | 未到期（上次 2026-10-07） |
| seedream-page | S | html | 未到期（上次 2026-10-07） |
| openai-models | S | html | 变了 |
| gemini-models | S | html | 变了 |
| google-gemini-blog | S | html | 未到期（上次 2026-10-07） |
| azure-foundry-blog | B | html | 未到期（上次 2026-09-11） |
| recraft-blog | S | html | 未到期（上次 2026-09-11） |
| kolors-gh | S | html | 未到期（上次 2026-09-11） |
| krea-blog | S | html | 未到期（上次 2026-10-07） |
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
| google-nb-blog | S | html | 未到期（上次 2026-10-07） |
| ms-foundry-blog | B | html | 未到期（上次 2026-09-11） |
| mj-updates | S | html | 未到期（上次 2026-10-07） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 281 个字符） |
| hf-t2i | A | json | 变了 |
| hf-i2i | A | json | 变了 |
| anthropic-models | S | html | 变了 |
| deepseek-docs | S | html | 没内容 |
| xai-docs | S | html | 变了 |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 未到期（上次 2026-10-07） |
| glm-api | S | html | 未到期（上次 2026-10-07） |
| minimax-platform | S | html | 未到期（上次 2026-10-07） |
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
| anthropic-features | S | html | 变了 |
| openai-docs | S | html | 变了 |
| deepseek-pricing | S | html | 未到期（上次 2026-10-07） |
| deepseek-updates | S | html | 未到期（上次 2026-10-07） |
| bailian-models | S | html | 未到期（上次 2026-10-07） |
| kimi-pricing | S | html | 未到期（上次 2026-10-07） |
| glm-52-doc | S | html | 未到期（上次 2026-10-07） |
| kimi-websearch | S | html | 未到期（上次 2026-10-07） |
| bailian-websearch | S | html | 未到期（上次 2026-10-07） |
| glm-websearch | S | html | 未到期（上次 2026-10-07） |
| bailian-coder | S | html | 未到期（上次 2026-10-07） |
| ark-models | S | spa | 未到期（上次 2026-10-07） |
| minimax-api-overview | S | spa | 未到期（上次 2026-10-07） |
| openai-caching | S | html | 变了 |
| openai-structured | S | html | 变了 |
| deepseek-chat-api | S | html | 变了 |
| gemini-audio | S | spa | 无变化 |
| gemini-vision | S | spa | 无变化 |
| minimax-anthropic-api | S | spa | 未到期（上次 2026-10-07） |
| minimax-openai-api | S | spa | 未到期（上次 2026-10-07） |
| minimax-server-tools | S | spa | 未到期（上次 2026-10-07） |
| minimax-caching | S | spa | 未到期（上次 2026-10-07） |
| minimax-openapi | S | json | 未到期（上次 2026-10-07） |
| gemini-computer-use | S | spa | 变了 |
| ark-pricing | S | spa | 未到期（上次 2026-10-07） |
| bailian-models-zh | S | spa | 未到期（上次 2026-10-07） |
| glm-batch | S | html | 未到期（上次 2026-10-07） |
| glm-chat-api | S | html | 未到期（上次 2026-10-07） |
| claude-deprecations | S | html | 变了 |
| openai-changelog | S | spa | 变了 |
| gemini-changelog | S | spa | 变了 |
| xai-release-notes | S | html | 变了 |
| aa-llm | B | spa | 未到期（上次 2026-10-07） |
| ideogram-api | S | html | 未到期（上次 2026-10-07） |
| elevenlabs-models | S | html | 未到期（上次 2026-10-07） |
| openai-realtime | S | html | 未到期（上次 2026-10-07） |
| gemini-tts | S | html | 未到期（上次 2026-10-07） |
| elevenlabs-tts | S | html | 未到期（上次 2026-10-07） |
| bailian-omni | S | html | 变了 |
| elevenlabs-remix | S | html | 未到期（上次 2026-10-07） |
| openai-tts | S | html | 未到期（上次 2026-10-07） |
| gemini-music | S | html | 变了 |
| glm-tts-doc | S | html | 未到期（上次 2026-10-07） |
| glm-tts-clone-doc | S | html | 未到期（上次 2026-10-07） |
| glm-voice-doc | S | html | 未到期（上次 2026-10-07） |
| xai-voice | S | html | 未到期（上次 2026-10-07） |
| kokoro-card | S | html | 未到期（上次 2026-10-07） |
| mistral-models | S | html | 未到期（上次 2026-10-07） |
| mistral-tools | S | html | 未到期（上次 2026-10-07） |
| mistral-vision | S | html | 未到期（上次 2026-10-07） |
| fish-s2pro-card | S | html | 未到期（上次 2026-10-07） |
| cosyvoice-card | S | html | 未到期（上次 2026-10-07） |
| llama-card | S | html | 未到期（上次 2026-10-07） |
| elevenlabs-voices | S | html | 未到期（上次 2026-10-07） |
| wan-t2v-card | S | html | 未到期（上次 2026-10-07） |
| minimax-release | S | spa | 未到期（上次 2026-10-07） |
| s-e2ab-gh | C | json | 未到期（上次 2026-10-07） |
| s-abogen-gh | C | json | 未到期（上次 2026-10-07） |
| s-epub2tts-gh | C | json | 未到期（上次 2026-10-07） |
| s-abcreator-gh | C | json | 未到期（上次 2026-10-07） |
| s-smartsub-gh | C | json | 未到期（上次 2026-10-07） |
| s-youdub-gh | C | json | 未到期（上次 2026-10-07） |
| s-pipecat-gh | C | json | 未到期（上次 2026-10-07） |
| s-livekit-gh | C | json | 未到期（上次 2026-10-07） |
| s-hfs2s-gh | C | json | 未到期（上次 2026-10-07） |
| s-moshi-gh | C | json | 未到期（上次 2026-10-07） |
| s-acestep15-gh | C | json | 未到期（上次 2026-10-07） |
| s-acestep-gh | C | json | 未到期（上次 2026-10-07） |
| s-yue-gh | C | json | 未到期（上次 2026-10-07） |
| s-audiocraft-gh | C | json | 未到期（上次 2026-10-07） |
| s-gptsovits-gh | C | json | 未到期（上次 2026-10-07） |
| s-rvc-gh | C | json | 未到期（上次 2026-10-07） |
| s-fishspeech-gh | C | json | 未到期（上次 2026-10-07） |
| s-indextts-gh | C | json | 未到期（上次 2026-10-07） |
| s-cosyvoice-gh | C | json | 未到期（上次 2026-10-07） |
| s-f5tts-gh | C | json | 未到期（上次 2026-10-07） |
| s-qwen3omni-gh | C | json | 未到期（上次 2026-10-07） |
| ideogram-overview | A | html | 未到期（上次 2026-10-07） |
| ideogram-v4-remix | A | html | 未到期（上次 2026-10-07） |
| ideogram-v3-inpaint | A | html | 未到期（上次 2026-10-07） |
| ideogram-v3-reframe | A | html | 未到期（上次 2026-10-07） |
| ideogram-v3-generate | A | html | 未到期（上次 2026-10-07） |
| ideogram-edit | A | html | 未到期（上次 2026-10-07） |
| ideogram-upscale | A | html | 未到期（上次 2026-10-07） |
| ideogram-hf | A | html | 未到期（上次 2026-10-07） |
| bailian-qimg3 | A | html | 未到期（上次 2026-10-07） |
| bailian-qimg | A | html | 未到期（上次 2026-10-07） |
| bailian-textgen-zh | A | html | 未到期（上次 2026-10-07） |
| bailian-thinking-zh | A | html | 未到期（上次 2026-10-07） |
| bailian-cache-zh | A | html | 未到期（上次 2026-10-07） |
| bailian-batch-zh | A | html | 未到期（上次 2026-10-07） |
| bailian-websearch-zh | A | html | 变了 |
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
| recraft-endpoints | A | html | 未到期（上次 2026-09-24） |
| recraft-nl-edit | A | html | 未到期（上次 2026-09-24） |
| hunyuan-image-hf | A | json | 未到期（上次 2026-09-24） |
| bfl-flux2-overview | A | html | 未到期（上次 2026-09-24） |
| bfl-flux2-multiref | A | html | 未到期（上次 2026-10-03） |
| ark-seedream-api | A | spa | 无变化 |
| arxiv-fp8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-int8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-qlora | A | html | 未到期（上次 2026-08-13） |
| arxiv-gptq | A | html | 未到期（上次 2026-08-13） |
| arxiv-awq | A | html | 未到期（上次 2026-08-13） |
| arxiv-lora | A | html | 未到期（上次 2026-08-13） |
| hf-gguf-doc | A | html | 未到期（上次 2026-08-13） |
| hf-diffusers-memory | A | html | 未到期（上次 2026-08-13） |
| zimage-gh | A | html | 未到期（上次 2026-09-26） |
| hunyuan-image-gh | A | html | 未到期（上次 2026-09-26） |
| skyreels-gh | A | html | 未到期（上次 2026-09-26） |
| bfl-flux3 | A | html | 未到期（上次 2026-09-26） |
| anthropic-privacy | A | html | 未到期（上次 2026-08-14） |
| stability-terms | A | html | 未到期（上次 2026-08-14） |
| gh-llm-universe | C | json | 未到期（上次 2026-09-13） |
| gh-all-in-rag | C | json | 未到期（上次 2026-09-13） |
| gh-handy-multi-agent | C | json | 未到期（上次 2026-09-13） |
| gh-llm-action | C | json | 未到期（上次 2026-09-13） |
| gh-self-llm | C | json | 未到期（上次 2026-09-13） |
| gh-langchain-zh | C | json | 未到期（上次 2026-09-13） |
| gh-llamafactory | C | json | 未到期（上次 2026-09-13） |
| gh-chattts-cn | C | json | 未到期（上次 2026-09-13） |
| gh-comfyui | C | json | 未到期（上次 2026-09-13） |
| gh-sdbook | C | json | 未到期（上次 2026-09-13） |
| waytoagi-wiki | C | spa | 从未抓过 |
| hf-hunyuan3d-21 | S | html | 未到期（上次 2026-09-26） |
| tripo-docs-generation | S | spa | 未到期（上次 2026-09-26） |
| meshy-docs-api | S | spa | 未到期（上次 2026-09-26） |
| meshy-site | S | spa | 未到期（上次 2026-09-26） |
| rodin-api-docs | S | html | 未到期（上次 2026-09-26） |
| gh-trellis | S | html | 未到期（上次 2026-09-26） |
| seed3d-page | S | spa | 从未抓过 |
| stability-spar3d | S | html | 未到期（上次 2026-09-26） |
| tripo-site | S | spa | 抓不到（被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法） |
| rodin-site | S | spa | 未到期（上次 2026-09-26） |
| tripo-docs-animation | S | spa | 未到期（上次 2026-09-26） |
| gh-hunyuan3d-buffalo | S | html | 未到期（上次 2026-09-26） |
| replicate-hunyuan3d-31 | A | spa | 未到期（上次 2026-09-26） |
| replicate-3d | A | spa | 未到期（上次 2026-09-25） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-09-25） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-09-25） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-09-25） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-09-25） |
| gh-spar3d | S | html | 未到期（上次 2026-09-25） |
| gh-triposg | S | html | 未到期（上次 2026-09-25） |
| gh-instantmesh | S | html | 未到期（上次 2026-09-25） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 未到期（上次 2026-09-26） |
| hf-ltx-25 | S | html | 未到期（上次 2026-09-26） |
| meshy-changelog | S | spa | 未到期（上次 2026-09-26） |
| hf-instantmesh | S | html | 未到期（上次 2026-09-25） |
| hf-apple-sharp | S | html | 未到期（上次 2026-09-25） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-09-25） |
| hf-anysplat | S | html | 未到期（上次 2026-09-25） |
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-09-13） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-09-13） |
| hf-trellis2 | S | html | 未到期（上次 2026-09-25） |
| pixverse-caps | S | html | 未到期（上次 2026-09-26） |
| pixverse-v6 | S | html | 未到期（上次 2026-09-26） |
| pixverse-fusion | S | html | 未到期（上次 2026-09-26） |
| hf-cogvideox | S | html | 未到期（上次 2026-09-26） |
| hf-i2vgen | S | html | 未到期（上次 2026-09-26） |
| hf-longcat-edit | S | html | 未到期（上次 2026-09-26） |
| hf-magi | S | html | 未到期（上次 2026-09-26） |
| heygen-docs | S | spa | 未到期（上次 2026-09-26） |
| synthesia-docs | S | spa | 未到期（上次 2026-09-26） |
| hf-longcat-avatar | S | html | 未到期（上次 2026-09-26） |
| hf-hunyuan-avatar | S | html | 未到期（上次 2026-09-26） |
| hf-liveportrait | S | html | 未到期（上次 2026-09-26） |
| hf-musetalk | S | html | 未到期（上次 2026-09-26） |
| hf-hallo2 | S | html | 未到期（上次 2026-09-26） |
| replicate-lipsync | A | spa | 未到期（上次 2026-09-26） |
| comfy-s2v | S | html | 未到期（上次 2026-09-26） |
| heygen-translate | S | html | 未到期（上次 2026-09-26） |
| heygen-live | S | html | 未到期（上次 2026-09-26） |
| heygen-photo | S | html | 未到期（上次 2026-09-26） |
| heygen-training | S | html | 未到期（上次 2026-09-26） |
| heygen-changelog | S | html | 未到期（上次 2026-09-26） |
| hf-hallo-live | S | html | 未到期（上次 2026-09-26） |
| hf-longcat-avatar-10 | S | html | 未到期（上次 2026-09-26） |
| gh-video-retalking | S | html | 未到期（上次 2026-09-26） |
| elevenlabs-changelog | S | html | 未到期（上次 2026-09-26） |
| hf-glm-voice | S | html | 未到期（上次 2026-09-26） |
| hf-glm-tts | S | html | 未到期（上次 2026-09-26） |
| openai-model-tts | S | spa | 未到期（上次 2026-09-26） |
| openai-model-realtime | S | spa | 未到期（上次 2026-09-26） |
| elevenlabs-docs | S | html | 变了 |
| gemini-robotics-er | S | html | 未到期（上次 2026-10-03） |
| figure-helix | A | html | 未到期（上次 2026-09-26） |
| pi-pi05-blog | A | html | 抓不到（HTTP 429） |
| pi-openpi-gh | A | html | 未到期（上次 2026-10-03） |
| nvidia-groot-gh | A | html | 未到期（上次 2026-10-03） |
| openvla-gh | A | html | 未到期（上次 2026-09-26） |
| openvla-repo | A | html | 未到期（上次 2026-09-26） |
| hf-robotics | B | json | 未到期（上次 2026-10-03） |
| lerobot-gh | A | json | 未到期（上次 2026-10-03） |
| groot-policy-doc | A | html | 未到期（上次 2026-10-03） |
| rynnbrain-card | A | html | 未到期（上次 2026-09-26） |
| maniskill-gh | B | json | 未到期（上次 2026-09-13） |
| cosmos3-card | S | html | 未到期（上次 2026-10-03） |
| genie3-blog | A | html | 未到期（上次 2026-09-26） |
| odyssey-site | A | html | 未到期（上次 2026-09-26） |
| worldlabs-marble | A | html | 未到期（上次 2026-09-26） |
| matrixgame-card | A | html | 未到期（上次 2026-09-26） |
| hunyuanworld-gh | A | html | 未到期（上次 2026-09-26） |
| wham-card | A | html | 未到期（上次 2026-09-13） |
| vjepa2-blog | A | html | 未到期（上次 2026-09-13） |
| vjepa2-card | B | html | 未到期（上次 2026-09-13） |
| sci-boltz-gh | A | html | 未到期（上次 2026-09-26） |
| sci-af3-blog | A | html | 未到期（上次 2026-09-14） |
| sci-esm2-card | B | html | 未到期（上次 2026-09-14） |
| sci-wn-gh | A | html | 未到期（上次 2026-09-26） |
| sci-aurora-gh | A | html | 未到期（上次 2026-09-26） |
| sci-neuralgcm-gh | A | html | 未到期（上次 2026-09-26） |
| sci-mattergen-gh | A | html | 未到期（上次 2026-09-26） |
| sci-mace-gh | A | html | 未到期（上次 2026-09-26） |
| sci-gnome-gh | A | html | 未到期（上次 2026-09-26） |
| seed-25 | A | html | 未到期（上次 2026-09-26） |
| veo-doc | A | html | 无变化 |
| sora-api | A | html | 未到期（上次 2026-09-26） |
| wan-site | A | html | 未到期（上次 2026-09-26） |
| mm-hf-api | A | json | 未到期（上次 2026-09-26） |
| vidu-s1-paper | A | html | 未到期（上次 2026-08-15） |
| omni-doc | A | html | 未到期（上次 2026-09-26） |
| ltx-hf-23 | A | html | 未到期（上次 2026-09-26） |
| gemini-image-docs | A | html | 变了 |
| openai-image-docs | A | html | 变了 |
| recraft-docs | A | html | 未到期（上次 2026-09-26） |
| bfl-docs | A | html | 未到期（上次 2026-09-26） |
| zimage-card | A | html | 未到期（上次 2026-09-26） |
| hunyuan-image-card | A | html | 未到期（上次 2026-09-26） |
| smolvla-card | A | html | 未到期（上次 2026-09-26） |
| molmoact-card | A | html | 未到期（上次 2026-09-26） |
| hf-whisper | A | html | 变了 |
| hf-sensevoice | A | html | 未到期（上次 2026-09-26） |
| hf-qwen3-asr | A | html | 未到期（上次 2026-09-26） |
| minimax-release-notes | A | html | 未到期（上次 2026-09-26） |
| seed-blog-1_5 | A | html | 未到期（上次 2026-09-26） |
| seed-blog-2_0 | A | html | 未到期（上次 2026-09-26） |
| ideogram-x | A | html | 未到期（上次 2026-09-26） |
| hf-funcineforge | S | html | 未到期（上次 2026-10-04） |
| hf-org | S | json | 未到期（上次 2026-10-07） |
| gh-gptsovits-cn | C | json | 未到期（上次 2026-10-04） |

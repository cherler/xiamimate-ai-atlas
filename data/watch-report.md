# 信息源监视报告 · 2026-11-19

本次检查 39 个到期源（共 474 个）：变化 30 · 首次 0 · 无变化 2 · **抓不到 6**

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

- **pika-site** Pika 官网
- **hf-t2v** Hugging Face · text-to-video 按下载量
  新增 2 条：Lightricks/LTX-2.5-Diffusers、alibaba-pai/Wan2.2-VACE-Fun-A14B
- **hf-i2v** Hugging Face · image-to-video 按下载量
  新增 1 条：ChrisColeTech/minimax-h3-turbo-GGUF
- **fal-video** fal · 视频模型目录
- **arxiv-worldmodel** arXiv · world model / 实时视频生成
  新增 25 条：Evolve in Panorama, Render in View: Panoramic World State Evolution for Video World Models、Beyond the Camera: A Tri-Modal Driving World Model for Future RGB, Thermal, and LiDAR Forecasting in Adverse Weather、Plausible Videos Can Lead to Poor Decisions: Diagnosing and CURE-ing World Models for Planning、FailureGen: Scalable Robot Failure Data Generation with World Models、Inertial Video World Models、ReLAP: Latent Action Pretraining through Recurrent Video Prediction in JEPA Space、DreamFAR: Real-Time and Long-Horizon Interaction with Diverse Objects、Every Camera Grows Up: Camera-Height Regression in Interactive Video World Models、LynnReal-Hand: Unlocking World Interaction with Hand Control、SciWorldBench: Do Video World Models Really Understand Scientific Experiments?、Latent World Modeling for Point-Cloud Video Pretraining、PanDWM: Panoramic 4D Driving World Models …
- **techcrunch-ai** TechCrunch · AI（RSS）
  新增 20 条：Microsoft CEO Satya Nadella explains why he asked 60K employees to quit、Amidst fears of AI cyberattacks, Satya Nadella says lots of critical infrastructure is &#8216;unpatchable&#8217;、Elon Musk says ousting Jensen Huang is like &#8216;kicking Michael Jordan off your team&#8217;、Microsoft CEO Satya Nadella remains confident in Nvidia after Huang’s exit、Satya Nadella predicts AI agents will reshuffle the economics of the web、Anthropic reportedly prices IPO at $83 a share, above projected range、Nvidia created a weird bit of intrigue by not filing a routine SEC report、Palmer Luckey warns AI-powered cyberattacks are outpacing defenses: &#8216;It&#8217;s time to start running&#8217;、Palmer Luckey thinks China is &#8216;thrilled to have Jensen out,&#8217; so he wants the ousted Nvidia CEO reinstated、Sam Altman says his life is so weird that he&#8217;s unfazed by Andrew Garfield portraying him in upcoming movie、Snapchat now lets developers build AR Lenses with AI assistants like Claude Code and Cursor、Google&#8217;s AI feature in Search gets its own incognito mode …
- **openai-models** OpenAI · 官方模型列表
- **hf-t2i** Hugging Face · text-to-image 按下载量
  新增 4 条：Abiray/MiniMax-H3-Image-GGUF、Hearthscale/MiniMax-H3-Image-GGUF、chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized、unsloth/MOSS-Image-SFT-GGUF
- **hf-i2i** Hugging Face · image-to-image 按下载量
  新增 1 条：prs-eth/marigold-iid-appearance-v1-1
- **anthropic-models** Anthropic 官方文档 · 模型总览
- **xai-docs** xAI 官方文档 · 模型清单
- **anthropic-features** Anthropic 官方文档 · Features overview
- **openai-docs** OpenAI 开发者文档 · 指南索引
- **openai-caching** OpenAI · Prompt Caching
- **openai-structured** OpenAI · Structured model outputs
- **deepseek-chat-api** DeepSeek · Create Chat Completion
- **gemini-audio** Gemini API · Audio understanding
- **gemini-vision** Gemini API · Image understanding
- **gemini-computer-use** Gemini API · Computer Use
- **claude-deprecations** Anthropic · Model deprecations
- **openai-changelog** OpenAI · API Changelog
- **bailian-omni** 阿里云百炼 · Qwen-Omni
- **gemini-music** Gemini API · Music generation（Lyria 3）
- **bailian-websearch-zh** 阿里云百炼中文站 · 联网搜索
- **ark-seedream-api** 火山方舟 API 参考 · 图片生成 API
- **elevenlabs-docs** ElevenLabs · 文档索引（llms.txt）
- **veo-doc** Google · Veo 3.1 官方文档
- **gemini-image-docs** Google · Gemini API 图像生成官方文档
- **openai-image-docs** OpenAI · Image generation 官方指南
- **hf-whisper** OpenAI 官方 · Whisper large-v3 模型卡

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 未到期（上次 2026-11-18） |
| seed-models | S | html | 未到期（上次 2026-11-18） |
| kling-api-updates | S | spa | 未到期（上次 2026-11-18） |
| kling-site | S | spa | 未到期（上次 2026-11-07） |
| google-video-docs | S | html | 未到期（上次 2026-11-18） |
| deepmind-veo | S | html | 未到期（上次 2026-11-18） |
| vertex-video-ref | S | html | 未到期（上次 2026-11-18） |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 未到期（上次 2026-11-18） |
| wan-hf | S | json | 未到期（上次 2026-11-18） |
| minimax-blog | S | html | 未到期（上次 2026-11-18） |
| minimax-hf | S | json | 未到期（上次 2026-11-18） |
| runway-research | S | html | 未到期（上次 2026-11-18） |
| luma-site | S | html | 未到期（上次 2026-11-18） |
| vidu-changelog | S | spa | 未到期（上次 2026-11-16） |
| vidu-model-map | S | spa | 未到期（上次 2026-11-16） |
| vidu-function-list | S | spa | 未到期（上次 2026-11-16） |
| vidu-site | S | html | 未到期（上次 2026-11-18） |
| vidu-s1-gh | S | json | 未到期（上次 2026-11-18） |
| pika-site | S | html | 变了 |
| higgsfield-site | S | html | 未到期（上次 2026-11-18） |
| decart-research | S | html | 未到期（上次 2026-11-18） |
| arxiv-video | S | atom | 未到期（上次 2026-11-14） |
| epoch-notable | A | csv | 未到期（上次 2026-11-18） |
| aa-t2v | A | spa | 未到期（上次 2026-11-18） |
| aa-i2v | A | spa | 未到期（上次 2026-11-18） |
| hf-t2v | A | json | 变了 |
| hf-i2v | A | json | 变了 |
| hf-v2v | A | json | 未到期（上次 2026-11-18） |
| fal-video | S | spa | 变了 |
| replicate-t2v | S | html | 未到期（上次 2026-11-18） |
| aiwiki | B | spa | 未到期（上次 2026-11-10） |
| futurepedia | B | html | 未到期（上次 2026-11-10） |
| comfyui-releases | C | json | 未到期（上次 2026-11-18） |
| capcut-templates | C | html | 未到期（上次 2026-11-10） |
| picsart-effects | C | html | 抓不到（HTTP 404） |
| runway-changelog | S | spa | 未到期（上次 2026-11-18） |
| runway-models | S | spa | 未到期（上次 2026-11-18） |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| seed-models-hub | S | html | 未到期（上次 2026-11-18） |
| apiyi-models | S | spa | 未到期（上次 2026-11-18） |
| arxiv-worldmodel | S | atom | 变了 |
| techcrunch-ai | B | atom | 变了 |
| ltx-gh | S | json | 未到期（上次 2026-11-18） |
| ltx-hf-org | S | json | 无变化 |
| decart-site | S | spa | 未到期（上次 2026-11-15） |
| picsart-video | C | html | 未到期（上次 2026-10-24） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 未到期（上次 2026-11-18） |
| hailuo-video | S | html | 未到期（上次 2026-11-18） |
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
| comfy-docs | S | spa | 未到期（上次 2026-11-18） |
| h3-card | S | html | 未到期（上次 2026-11-18） |
| hf-lineage | S | json | 未到期（上次 2026-11-18） |
| vacetools-gh | C | json | 未到期（上次 2026-11-18） |
| framepack-gh | S | json | 未到期（上次 2026-11-18） |
| fpwrapper-gh | C | json | 未到期（上次 2026-11-18） |
| latentsync-gh | S | json | 未到期（上次 2026-11-18） |
| lswrapper-gh | C | json | 未到期（上次 2026-11-18） |
| float-gh | C | json | 未到期（上次 2026-11-18） |
| sviflf-gh | C | json | 未到期（上次 2026-11-18） |
| flflatent-gh | C | json | 未到期（上次 2026-11-18） |
| mm-blog | S | html | 未到期（上次 2026-11-10） |
| wanwrapper-gh | C | json | 未到期（上次 2026-11-18） |
| comfy-org-hf | S | json | 未到期（上次 2026-11-18） |
| ltx-comfy-gh | S | json | 未到期（上次 2026-11-18） |
| mpt-gh | C | json | 未到期（上次 2026-11-18） |
| manim-gh | C | json | 未到期（上次 2026-11-18） |
| pyvideotrans-gh | C | json | 未到期（上次 2026-11-18） |
| duix-gh | C | json | 未到期（上次 2026-11-18） |
| fay-gh | C | json | 未到期（上次 2026-11-18） |
| narrato-gh | C | json | 未到期（上次 2026-11-18） |
| zho-wf-gh | C | json | 未到期（上次 2026-11-18） |
| echomimic-gh | C | json | 未到期（上次 2026-11-18） |
| linly-talker-gh | C | json | 未到期（上次 2026-11-18） |
| animate-anything-gh | C | json | 未到期（上次 2026-11-18） |
| huobao-gh | C | json | 未到期（上次 2026-11-18） |
| awesome-vd-gh | C | json | 未到期（上次 2026-11-18） |
| seedream-page | S | html | 未到期（上次 2026-11-18） |
| openai-models | S | html | 变了 |
| gemini-models | S | spa | 未到期（上次 2026-11-16） |
| google-gemini-blog | S | html | 未到期（上次 2026-11-18） |
| azure-foundry-blog | B | html | 未到期（上次 2026-11-10） |
| recraft-blog | S | html | 未到期（上次 2026-11-10） |
| kolors-gh | S | html | 未到期（上次 2026-11-10） |
| krea-blog | S | html | 未到期（上次 2026-11-18） |
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
| google-nb-blog | S | html | 无变化 |
| ms-foundry-blog | B | html | 未到期（上次 2026-11-10） |
| mj-updates | S | html | 未到期（上次 2026-11-18） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 281 个字符） |
| hf-t2i | A | json | 变了 |
| hf-i2i | A | json | 变了 |
| anthropic-models | S | html | 变了 |
| deepseek-docs | S | html | 没内容 |
| xai-docs | S | html | 变了 |
| doubao-force-2026 | B | html | 未到期（上次 2026-11-10） |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 未到期（上次 2026-11-18） |
| glm-api | S | html | 未到期（上次 2026-11-18） |
| minimax-platform | S | html | 未到期（上次 2026-11-18） |
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
| deepseek-pricing | S | spa | 未到期（上次 2026-11-18） |
| deepseek-updates | S | spa | 未到期（上次 2026-11-18） |
| bailian-models | S | html | 未到期（上次 2026-11-18） |
| kimi-pricing | S | html | 未到期（上次 2026-11-18） |
| glm-52-doc | S | html | 未到期（上次 2026-11-18） |
| kimi-websearch | S | html | 未到期（上次 2026-11-18） |
| bailian-websearch | S | html | 未到期（上次 2026-11-18） |
| glm-websearch | S | html | 未到期（上次 2026-11-18） |
| bailian-coder | S | html | 未到期（上次 2026-11-18） |
| ark-models | S | spa | 未到期（上次 2026-11-18） |
| minimax-api-overview | S | spa | 未到期（上次 2026-11-16） |
| openai-caching | S | html | 变了 |
| openai-structured | S | html | 变了 |
| deepseek-chat-api | S | html | 变了 |
| gemini-audio | S | spa | 变了 |
| gemini-vision | S | spa | 变了 |
| minimax-anthropic-api | S | html | 未到期（上次 2026-11-16） |
| minimax-openai-api | S | spa | 未到期（上次 2026-11-18） |
| minimax-server-tools | S | spa | 未到期（上次 2026-11-18） |
| minimax-caching | S | spa | 未到期（上次 2026-11-18） |
| minimax-openapi | S | json | 未到期（上次 2026-11-18） |
| gemini-computer-use | S | spa | 变了 |
| ark-pricing | S | spa | 未到期（上次 2026-11-18） |
| bailian-models-zh | S | spa | 未到期（上次 2026-11-18） |
| glm-batch | S | html | 未到期（上次 2026-11-18） |
| glm-chat-api | S | html | 未到期（上次 2026-11-18） |
| claude-deprecations | S | html | 变了 |
| openai-changelog | S | spa | 变了 |
| gemini-changelog | S | spa | 未到期（上次 2026-11-16） |
| xai-release-notes | S | spa | 未到期（上次 2026-11-16） |
| aa-llm | B | spa | 未到期（上次 2026-11-18） |
| ideogram-api | S | html | 未到期（上次 2026-11-18） |
| elevenlabs-models | S | html | 未到期（上次 2026-11-07） |
| openai-realtime | S | html | 未到期（上次 2026-11-18） |
| gemini-tts | S | spa | 未到期（上次 2026-11-16） |
| elevenlabs-tts | S | html | 未到期（上次 2026-11-18） |
| bailian-omni | S | html | 变了 |
| elevenlabs-remix | S | html | 未到期（上次 2026-11-18） |
| openai-tts | S | html | 未到期（上次 2026-11-18） |
| gemini-music | S | html | 变了 |
| glm-tts-doc | S | html | 未到期（上次 2026-11-18） |
| glm-tts-clone-doc | S | html | 未到期（上次 2026-11-18） |
| glm-voice-doc | S | html | 未到期（上次 2026-11-18） |
| xai-voice | S | spa | 未到期（上次 2026-11-16） |
| kokoro-card | S | html | 未到期（上次 2026-11-18） |
| mistral-models | S | html | 未到期（上次 2026-11-18） |
| mistral-tools | S | html | 未到期（上次 2026-11-18） |
| mistral-vision | S | html | 未到期（上次 2026-11-18） |
| fish-s2pro-card | S | html | 未到期（上次 2026-11-18） |
| cosyvoice-card | S | html | 未到期（上次 2026-11-18） |
| llama-card | S | html | 未到期（上次 2026-11-18） |
| elevenlabs-voices | S | html | 未到期（上次 2026-11-18） |
| wan-t2v-card | S | html | 未到期（上次 2026-11-18） |
| minimax-release | S | spa | 未到期（上次 2026-11-18） |
| s-e2ab-gh | C | json | 未到期（上次 2026-11-18） |
| s-abogen-gh | C | json | 未到期（上次 2026-11-18） |
| s-epub2tts-gh | C | json | 未到期（上次 2026-11-18） |
| s-abcreator-gh | C | json | 未到期（上次 2026-11-18） |
| s-smartsub-gh | C | json | 未到期（上次 2026-11-18） |
| s-youdub-gh | C | json | 未到期（上次 2026-11-18） |
| s-pipecat-gh | C | json | 未到期（上次 2026-11-18） |
| s-livekit-gh | C | json | 未到期（上次 2026-11-18） |
| s-hfs2s-gh | C | json | 未到期（上次 2026-11-18） |
| s-moshi-gh | C | json | 未到期（上次 2026-11-18） |
| s-acestep15-gh | C | json | 未到期（上次 2026-11-18） |
| s-acestep-gh | C | json | 未到期（上次 2026-11-18） |
| s-yue-gh | C | json | 未到期（上次 2026-11-18） |
| s-audiocraft-gh | C | json | 未到期（上次 2026-11-18） |
| s-gptsovits-gh | C | json | 未到期（上次 2026-11-18） |
| s-rvc-gh | C | json | 未到期（上次 2026-11-18） |
| s-fishspeech-gh | C | json | 未到期（上次 2026-11-18） |
| s-indextts-gh | C | json | 未到期（上次 2026-11-18） |
| s-cosyvoice-gh | C | json | 未到期（上次 2026-11-18） |
| s-f5tts-gh | C | json | 未到期（上次 2026-11-18） |
| s-qwen3omni-gh | C | json | 未到期（上次 2026-11-18） |
| ideogram-overview | A | html | 未到期（上次 2026-11-18） |
| ideogram-v4-remix | A | html | 未到期（上次 2026-11-18） |
| ideogram-v3-inpaint | A | html | 未到期（上次 2026-11-18） |
| ideogram-v3-reframe | A | html | 未到期（上次 2026-11-18） |
| ideogram-v3-generate | A | html | 未到期（上次 2026-11-18） |
| ideogram-edit | A | html | 未到期（上次 2026-11-18） |
| ideogram-upscale | A | html | 未到期（上次 2026-11-18） |
| ideogram-hf | A | html | 未到期（上次 2026-11-18） |
| bailian-qimg3 | A | html | 未到期（上次 2026-11-18） |
| bailian-qimg | A | html | 未到期（上次 2026-11-18） |
| bailian-textgen-zh | A | html | 未到期（上次 2026-11-18） |
| bailian-thinking-zh | A | html | 未到期（上次 2026-11-18） |
| bailian-cache-zh | A | html | 未到期（上次 2026-11-18） |
| bailian-batch-zh | A | html | 未到期（上次 2026-11-18） |
| bailian-websearch-zh | A | html | 变了 |
| hf-kokoro | A | json | 未到期（上次 2026-11-10） |
| hf-cosyvoice2 | A | json | 未到期（上次 2026-11-10） |
| hf-glmtts | A | json | 未到期（上次 2026-11-10） |
| hf-glm4voice | A | json | 未到期（上次 2026-11-10） |
| hf-fishspeech15 | A | html | 未到期（上次 2026-11-13） |
| hf-qwen3omni | A | json | 未到期（上次 2026-11-10） |
| hf-qwen-layered | A | html | 未到期（上次 2026-11-13） |
| hf-org-minimax | A | json | 未到期（上次 2026-11-10） |
| hf-org-xai | A | json | 未到期（上次 2026-11-10） |
| hf-org-elevenlabs | A | json | 未到期（上次 2026-11-10） |
| hf-org-openai | A | json | 未到期（上次 2026-11-10） |
| ideogram-layerize | A | html | 未到期（上次 2026-11-10） |
| recraft-endpoints | A | html | 未到期（上次 2026-11-05） |
| recraft-nl-edit | A | html | 未到期（上次 2026-11-05） |
| hunyuan-image-hf | A | json | 未到期（上次 2026-11-05） |
| bfl-flux2-overview | A | html | 未到期（上次 2026-11-05） |
| bfl-flux2-multiref | A | html | 未到期（上次 2026-11-15） |
| ark-seedream-api | A | spa | 变了 |
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
| gh-llm-universe | C | json | 未到期（上次 2026-11-12） |
| gh-all-in-rag | C | json | 未到期（上次 2026-11-12） |
| gh-handy-multi-agent | C | json | 未到期（上次 2026-11-12） |
| gh-llm-action | C | json | 未到期（上次 2026-11-12） |
| gh-self-llm | C | json | 未到期（上次 2026-11-12） |
| gh-langchain-zh | C | json | 未到期（上次 2026-11-12） |
| gh-llamafactory | C | json | 未到期（上次 2026-11-12） |
| gh-chattts-cn | C | json | 未到期（上次 2026-11-12） |
| gh-comfyui | C | json | 未到期（上次 2026-11-12） |
| gh-sdbook | C | json | 未到期（上次 2026-11-12） |
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
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-11-12） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-11-12） |
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
| elevenlabs-docs | S | html | 变了 |
| gemini-robotics-er | S | html | 未到期（上次 2026-11-14） |
| figure-helix | A | html | 未到期（上次 2026-11-07） |
| pi-pi05-blog | A | html | 未到期（上次 2026-11-11） |
| pi-openpi-gh | A | html | 未到期（上次 2026-11-14） |
| nvidia-groot-gh | A | html | 未到期（上次 2026-11-14） |
| openvla-gh | A | html | 未到期（上次 2026-11-07） |
| openvla-repo | A | html | 未到期（上次 2026-11-07） |
| hf-robotics | B | json | 未到期（上次 2026-11-14） |
| lerobot-gh | A | json | 未到期（上次 2026-11-14） |
| groot-policy-doc | A | html | 未到期（上次 2026-11-14） |
| rynnbrain-card | A | html | 未到期（上次 2026-11-07） |
| maniskill-gh | B | json | 未到期（上次 2026-11-12） |
| cosmos3-card | S | html | 未到期（上次 2026-11-14） |
| genie3-blog | A | html | 未到期（上次 2026-11-07） |
| odyssey-site | S | html | 未到期（上次 2026-11-07） |
| worldlabs-marble | A | html | 未到期（上次 2026-11-07） |
| matrixgame-card | A | html | 未到期（上次 2026-11-07） |
| hunyuanworld-gh | A | html | 未到期（上次 2026-11-07） |
| wham-card | A | html | 未到期（上次 2026-11-12） |
| vjepa2-blog | A | html | 未到期（上次 2026-11-12） |
| vjepa2-card | B | html | 未到期（上次 2026-11-12） |
| sci-boltz-gh | A | html | 未到期（上次 2026-11-07） |
| sci-af3-blog | A | html | 未到期（上次 2026-11-13） |
| sci-esm2-card | B | html | 未到期（上次 2026-11-13） |
| sci-wn-gh | A | html | 未到期（上次 2026-11-07） |
| sci-aurora-gh | A | html | 未到期（上次 2026-11-07） |
| sci-neuralgcm-gh | A | html | 未到期（上次 2026-11-07） |
| sci-mattergen-gh | A | html | 未到期（上次 2026-11-07） |
| sci-mace-gh | A | html | 未到期（上次 2026-11-07） |
| sci-gnome-gh | A | html | 未到期（上次 2026-11-07） |
| seed-25 | A | html | 未到期（上次 2026-11-07） |
| veo-doc | A | html | 变了 |
| sora-api | A | html | 未到期（上次 2026-11-07） |
| wan-site | A | html | 未到期（上次 2026-11-07） |
| mm-hf-api | A | json | 未到期（上次 2026-11-07） |
| vidu-s1-paper | A | html | 未到期（上次 2026-11-13） |
| omni-doc | A | html | 未到期（上次 2026-11-08） |
| ltx-hf-23 | A | html | 未到期（上次 2026-11-07） |
| gemini-image-docs | A | html | 变了 |
| openai-image-docs | A | html | 变了 |
| recraft-docs | A | html | 未到期（上次 2026-11-07） |
| bfl-docs | A | html | 未到期（上次 2026-11-07） |
| zimage-card | A | html | 未到期（上次 2026-11-07） |
| hunyuan-image-card | A | html | 未到期（上次 2026-11-07） |
| smolvla-card | A | html | 未到期（上次 2026-11-07） |
| molmoact-card | A | html | 未到期（上次 2026-11-07） |
| hf-whisper | A | html | 变了 |
| hf-sensevoice | A | html | 未到期（上次 2026-11-07） |
| hf-qwen3-asr | A | html | 未到期（上次 2026-11-07） |
| minimax-release-notes | A | html | 未到期（上次 2026-11-16） |
| seed-blog-1_5 | A | html | 未到期（上次 2026-11-07） |
| seed-blog-2_0 | A | html | 未到期（上次 2026-11-07） |
| ideogram-x | A | html | 未到期（上次 2026-11-07） |
| hf-funcineforge | S | html | 未到期（上次 2026-11-15） |
| hf-org | S | json | 未到期（上次 2026-11-18） |
| gh-gptsovits-cn | C | json | 未到期（上次 2026-11-15） |
| gemini-nb21 | S | spa | 未到期（上次 2026-11-14） |
| xai-grok47-model | S | spa | 未到期（上次 2026-11-16） |
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
| gemini-argon | S | spa | 未到期（上次 2026-11-16） |
| gemini-tts38 | S | spa | 未到期（上次 2026-11-16） |
| vidu-q4-i2v | S | spa | 未到期（上次 2026-11-16） |
| vidu-q4-reference | S | spa | 未到期（上次 2026-11-16） |
| xai-voice3 | S | spa | 未到期（上次 2026-11-16） |
| minimax-m31-guide | S | html | 未到期（上次 2026-11-16） |
| minimax-m31-tools | S | html | 未到期（上次 2026-11-16） |
| recraft-image-to-image | S | html | 未到期（上次 2026-11-16） |
| recraft-inpainting | S | html | 未到期（上次 2026-11-16） |
| recraft-outpainting | S | html | 未到期（上次 2026-11-16） |
| recraft-upscale | S | html | 未到期（上次 2026-11-16） |
| review-genie4 | S | html | 未到期（上次 2026-11-15） |
| review-kimi31 | S | html | 未到期（上次 2026-11-15） |
| review-lucy26 | S | html | 未到期（上次 2026-11-15） |
| review-tripo-p2 | S | html | 未到期（上次 2026-11-15） |
| review-meshy-image | S | html | 未到期（上次 2026-11-15） |
| review-meshy-multi | S | html | 未到期（上次 2026-11-15） |
| review-krea3 | S | html | 未到期（上次 2026-11-15） |

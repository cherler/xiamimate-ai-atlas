# 信息源监视报告 · 2026-10-11

本次检查 109 个到期源（共 456 个）：变化 27 · 首次 1 · 无变化 76 · **抓不到 5**

> 这份报告是给人看的那 20 条待办的来源（§59.3 的负反馈：人每周要看的条目 ≤ 20）。
> 「抓不到」不是失败，是**信息本身** —— 一个长期抓不到的官方源，说明那家厂商没有可 diff 的公开更新入口，
> 而那正好解释了为什么它名下的格子质量最差。

## 抓到了但没内容（比抓不到更危险 —— 它不会喊）

（无）

## 抓不到（要处理）

- **picsart-effects**（C/html）Picsart Effects — HTTP 403
  https://picsart.com/ai-video-effects/
- **picsart-video**（C/html）Picsart AI 视频 — HTTP 403
  https://picsart.com/ai-video-generator/
- **aa-t2i**（A/spa）Artificial Analysis · 文生图竞技场 — 还是壳：渲染后正文只有 281 个字符
  https://artificialanalysis.ai/text-to-image/arena
- **tripo-site**（S/spa）Tripo 官网 — 被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法
  https://www.tripo3d.ai/
- **pi-pi05-blog**（A/html）Physical Intelligence 官方博客 · π₀.₅ — HTTP 429
  https://www.physicalintelligence.company/blog/pi05

## 有变化

- **hf-t2v** Hugging Face · text-to-video 按下载量
  新增 1 条：unsloth/LTX-2-GGUF
- **hf-i2v** Hugging Face · image-to-video 按下载量
  新增 1 条：Wan-AI/Wan2.1-I2V-14B-720P
- **aiwiki** AI Wiki
- **futurepedia** Futurepedia
- **capcut-templates** CapCut 模板
- **techcrunch-ai** TechCrunch · AI（RSS）
  新增 20 条：Microsoft’s Satya Nadella says AI models need an ‘emergency brake’、Apple discloses deal to hire team and license tech from personalized podcast startup Huxe、3 days to TechCrunch Disrupt 2026: Meet the startups before they hit mainstream、Here are the top AI agents that can live in your text messages、Anthropic can&#8217;t reliably control its AI agents. It&#8217;s cutting off its internal evals from the live internet instead、The maker of non-text AI model Jev valued at $7.5B just weeks after launch、An Anthropic AI model sent a false homicide tip to Philadelphia police、Amazon and others are done keeping data center deals secret. Is it enough to build trust?、Amazon drops data center NDAs, and AI agents want your credit card、Danu Robotics&#8217; fight to build a better recycling robot、We can&#8217;t help treating AI like it&#8217;s human. But should we?、a16z’s Olivia Moore on the state of consumer AI …
- **volcengine-ark-price** 火山引擎方舟 · 模型计费
- **google-ai-price** Google AI · Gemini API 定价
- **bailian-price** 阿里云百炼 · 模型计费
- **runway-price** Runway · 定价
- **kling-price** 可灵开放平台 · 计费
- **vidu-price** Vidu 平台 · 价格
- **fal-ltx-price** fal · 平台定价
- **mm-blog** MiniMax · H3 官方发布
- **azure-foundry-blog** Microsoft Azure AI Foundry 博客
- **recraft-blog** Recraft 官方博客
- **kolors-gh** Kolors 官方 GitHub（含发布日志）
- **wiki-midjourney** Wikipedia · Midjourney（版本年表）
- **hf-pixelart-lora** Hugging Face · nerijs/pixel-art-xl
- **hf-t2i** Hugging Face · text-to-image 按下载量
  新增 3 条：Abiray/Qwen-Image-2.1-GGUF、Noctaluna/Noct-Q-Uncensored-Qwen-Image-2.1、krea/Krea-2-Turbo
- **hf-i2i** Hugging Face · image-to-image 按下载量
  新增 2 条：mlx-community/Qwen-Image-2.1-mflux-q4、tencent/HunyuanImage-3.0-Instruct
- **hf-kokoro** Hugging Face · hexgrad/Kokoro-82M
- **hf-cosyvoice2** Hugging Face · FunAudioLLM/CosyVoice2-0.5B
- **hf-glmtts** Hugging Face · zai-org/GLM-TTS
- **hf-glm4voice** Hugging Face · zai-org/glm-4-voice-9b
- **hf-qwen3omni** Hugging Face · Qwen/Qwen3-Omni-30B-A3B-Instruct
- **ideogram-layerize** Ideogram 官方 API 参考 · Layerize Text

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 未到期（上次 2026-10-07） |
| seed-models | S | html | 未到期（上次 2026-10-07） |
| kling-api-updates | S | spa | 未到期（上次 2026-10-07） |
| kling-site | S | spa | 未到期（上次 2026-10-10） |
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
| pika-site | S | html | 未到期（上次 2026-10-08） |
| higgsfield-site | S | html | 未到期（上次 2026-10-07） |
| decart-research | S | html | 未到期（上次 2026-10-07） |
| arxiv-video | S | atom | 未到期（上次 2026-10-07） |
| epoch-notable | A | csv | 未到期（上次 2026-10-07） |
| aa-t2v | A | spa | 未到期（上次 2026-10-07） |
| aa-i2v | A | spa | 未到期（上次 2026-10-07） |
| hf-t2v | A | json | 变了 |
| hf-i2v | A | json | 变了 |
| hf-v2v | A | json | 未到期（上次 2026-10-07） |
| fal-video | S | spa | 未到期（上次 2026-10-08） |
| replicate-t2v | S | html | 未到期（上次 2026-10-07） |
| aiwiki | B | spa | 变了 |
| futurepedia | B | html | 变了 |
| comfyui-releases | C | json | 未到期（上次 2026-10-07） |
| capcut-templates | C | html | 变了 |
| picsart-effects | C | html | 抓不到（HTTP 403） |
| runway-changelog | S | spa | 未到期（上次 2026-10-07） |
| runway-models | S | spa | 未到期（上次 2026-10-07） |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| seed-models-hub | S | html | 未到期（上次 2026-10-07） |
| apiyi-models | S | spa | 未到期（上次 2026-10-07） |
| arxiv-worldmodel | S | atom | 未到期（上次 2026-10-07） |
| techcrunch-ai | B | atom | 变了 |
| ltx-gh | S | json | 未到期（上次 2026-10-07） |
| ltx-hf-org | S | json | 无变化 |
| decart-site | S | spa | 无变化 |
| picsart-video | C | html | 抓不到（HTTP 403） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 未到期（上次 2026-10-07） |
| hailuo-video | S | html | 未到期（上次 2026-10-07） |
| volcengine-ark-price | S | spa | 变了 |
| minimax-price | S | spa | 无变化 |
| google-ai-price | S | html | 变了 |
| bailian-price | S | spa | 变了 |
| runway-price | S | spa | 变了 |
| kling-price | S | spa | 变了 |
| vidu-price | S | spa | 变了 |
| fal-ltx-price | S | spa | 变了 |
| replicate-price | A | html | 无变化 |
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
| mm-blog | S | html | 变了 |
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
| openai-models | S | html | 未到期（上次 2026-10-08） |
| gemini-models | S | html | 未到期（上次 2026-10-08） |
| google-gemini-blog | S | html | 未到期（上次 2026-10-07） |
| azure-foundry-blog | B | html | 变了 |
| recraft-blog | S | html | 变了 |
| kolors-gh | S | html | 变了 |
| krea-blog | S | html | 未到期（上次 2026-10-07） |
| wiki-midjourney | B | html | 变了 |
| comfyui-gh | S | json | 无变化 |
| sdwebui-gh | S | json | 无变化 |
| fooocus-gh | S | json | 无变化 |
| invokeai-gh | S | json | 无变化 |
| iopaint-gh | S | json | 无变化 |
| rembg-gh | S | json | 无变化 |
| realesrgan-gh | S | json | 无变化 |
| gfpgan-gh | S | json | 无变化 |
| codeformer-gh | S | json | 无变化 |
| oldphoto-gh | S | json | 无变化 |
| controlnet-gh | S | json | 无变化 |
| ipadapter-gh | S | json | 无变化 |
| instantid-gh | S | json | 无变化 |
| photomaker-gh | S | json | 无变化 |
| iclight-gh | S | json | 无变化 |
| idmvton-gh | S | json | 无变化 |
| ootd-gh | S | json | 无变化 |
| catvton-gh | S | json | 无变化 |
| kritaai-gh | S | json | 无变化 |
| omnigen-gh | S | json | 无变化 |
| step1x-gh | S | json | 无变化 |
| qwenimage-gh | S | json | 无变化 |
| anytext-gh | S | json | 无变化 |
| incontextlora-gh | S | json | 无变化 |
| comictrans-gh | S | json | 无变化 |
| manganinjia-gh | S | json | 无变化 |
| starvector-gh | S | json | 无变化 |
| svgdreamer-gh | S | json | 无变化 |
| easyphoto-gh | S | json | 无变化 |
| ipadapter-plus-gh | S | json | 无变化 |
| controlnet-aux-gh | S | json | 无变化 |
| ultimate-upscale-gh | S | json | 无变化 |
| comfy-manager-gh | S | json | 无变化 |
| comfy-examples-gh | S | json | 无变化 |
| comfy-templates-gh | S | json | 无变化 |
| hf-diffusion-class-gh | S | json | 无变化 |
| fastai-course | S | html | 未到期（上次 2026-08-12） |
| dreamtextures-gh | S | json | 无变化 |
| char2d-gh | S | json | 无变化 |
| hf-pixelart-lora | S | json | 变了 |
| google-nb-blog | S | html | 未到期（上次 2026-10-07） |
| ms-foundry-blog | B | html | 无变化 |
| mj-updates | S | html | 未到期（上次 2026-10-07） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 281 个字符） |
| hf-t2i | A | json | 变了 |
| hf-i2i | A | json | 变了 |
| anthropic-models | S | html | 未到期（上次 2026-10-08） |
| deepseek-docs | S | html | 未到期（上次 2026-10-08） |
| xai-docs | S | html | 未到期（上次 2026-10-08） |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 未到期（上次 2026-10-07） |
| glm-api | S | html | 未到期（上次 2026-10-07） |
| minimax-platform | S | html | 未到期（上次 2026-10-07） |
| langchain-gh | S | json | 无变化 |
| langgraph-gh | S | json | 无变化 |
| llamaindex-gh | S | json | 无变化 |
| vllm-gh | S | json | 无变化 |
| llamacpp-gh | S | json | 无变化 |
| ollama-gh | S | json | 无变化 |
| ragflow-gh | S | json | 无变化 |
| dify-gh | S | json | 无变化 |
| n8n-gh | S | json | 无变化 |
| openwebui-gh | S | json | 无变化 |
| autogen-gh | S | json | 无变化 |
| crewai-gh | S | json | 无变化 |
| litellm-gh | S | json | 无变化 |
| transformers-gh | S | json | 无变化 |
| unsloth-gh | S | json | 无变化 |
| llamafactory-gh | S | json | 无变化 |
| aider-gh | S | json | 无变化 |
| cline-gh | S | json | 无变化 |
| continue-gh | S | json | 无变化 |
| openhands-gh | S | json | 无变化 |
| browseruse-gh | S | json | 无变化 |
| markitdown-gh | S | json | 无变化 |
| unstructured-gh | S | json | 无变化 |
| mineru-gh | S | json | 无变化 |
| mcpservers-gh | S | json | 无变化 |
| anthropic-features | S | html | 未到期（上次 2026-10-08） |
| openai-docs | S | html | 未到期（上次 2026-10-08） |
| deepseek-pricing | S | html | 未到期（上次 2026-10-10） |
| deepseek-updates | S | html | 未到期（上次 2026-10-10） |
| bailian-models | S | html | 未到期（上次 2026-10-07） |
| kimi-pricing | S | html | 未到期（上次 2026-10-07） |
| glm-52-doc | S | html | 未到期（上次 2026-10-07） |
| kimi-websearch | S | html | 未到期（上次 2026-10-07） |
| bailian-websearch | S | html | 未到期（上次 2026-10-07） |
| glm-websearch | S | html | 未到期（上次 2026-10-07） |
| bailian-coder | S | html | 未到期（上次 2026-10-07） |
| ark-models | S | spa | 未到期（上次 2026-10-07） |
| minimax-api-overview | S | spa | 未到期（上次 2026-10-10） |
| openai-caching | S | html | 未到期（上次 2026-10-08） |
| openai-structured | S | html | 未到期（上次 2026-10-08） |
| deepseek-chat-api | S | html | 未到期（上次 2026-10-08） |
| gemini-audio | S | spa | 未到期（上次 2026-10-08） |
| gemini-vision | S | spa | 未到期（上次 2026-10-08） |
| minimax-anthropic-api | S | spa | 未到期（上次 2026-10-07） |
| minimax-openai-api | S | spa | 未到期（上次 2026-10-07） |
| minimax-server-tools | S | spa | 未到期（上次 2026-10-07） |
| minimax-caching | S | spa | 未到期（上次 2026-10-07） |
| minimax-openapi | S | json | 未到期（上次 2026-10-07） |
| gemini-computer-use | S | spa | 未到期（上次 2026-10-08） |
| ark-pricing | S | spa | 未到期（上次 2026-10-07） |
| bailian-models-zh | S | spa | 未到期（上次 2026-10-07） |
| glm-batch | S | html | 未到期（上次 2026-10-07） |
| glm-chat-api | S | html | 未到期（上次 2026-10-07） |
| claude-deprecations | S | html | 未到期（上次 2026-10-08） |
| openai-changelog | S | spa | 未到期（上次 2026-10-08） |
| gemini-changelog | S | spa | 未到期（上次 2026-10-08） |
| xai-release-notes | S | html | 未到期（上次 2026-10-08） |
| aa-llm | B | spa | 未到期（上次 2026-10-07） |
| ideogram-api | S | html | 未到期（上次 2026-10-07） |
| elevenlabs-models | S | html | 未到期（上次 2026-10-10） |
| openai-realtime | S | html | 未到期（上次 2026-10-07） |
| gemini-tts | S | html | 未到期（上次 2026-10-07） |
| elevenlabs-tts | S | html | 未到期（上次 2026-10-07） |
| bailian-omni | S | html | 未到期（上次 2026-10-08） |
| elevenlabs-remix | S | html | 未到期（上次 2026-10-07） |
| openai-tts | S | html | 未到期（上次 2026-10-07） |
| gemini-music | S | html | 未到期（上次 2026-10-08） |
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
| bailian-websearch-zh | A | html | 未到期（上次 2026-10-08） |
| hf-kokoro | A | json | 变了 |
| hf-cosyvoice2 | A | json | 变了 |
| hf-glmtts | A | json | 变了 |
| hf-glm4voice | A | json | 变了 |
| hf-fishspeech15 | A | html | 未到期（上次 2026-09-14） |
| hf-qwen3omni | A | json | 变了 |
| hf-qwen-layered | A | html | 未到期（上次 2026-09-14） |
| hf-org-minimax | A | json | 无变化 |
| hf-org-xai | A | json | 无变化 |
| hf-org-elevenlabs | A | json | 无变化 |
| hf-org-openai | A | json | 无变化 |
| ideogram-layerize | A | html | 变了 |
| recraft-endpoints | A | html | 未到期（上次 2026-09-24） |
| recraft-nl-edit | A | html | 未到期（上次 2026-09-24） |
| hunyuan-image-hf | A | json | 未到期（上次 2026-09-24） |
| bfl-flux2-overview | A | html | 未到期（上次 2026-09-24） |
| bfl-flux2-multiref | A | html | 无变化 |
| ark-seedream-api | A | spa | 未到期（上次 2026-10-08） |
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
| skyreels-gh | A | html | 未到期（上次 2026-10-10） |
| bfl-flux3 | A | html | 未到期（上次 2026-10-10） |
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
| hf-hunyuan3d-21 | S | html | 未到期（上次 2026-10-10） |
| tripo-docs-generation | S | spa | 未到期（上次 2026-10-10） |
| meshy-docs-api | S | spa | 未到期（上次 2026-10-10） |
| meshy-site | S | spa | 未到期（上次 2026-10-10） |
| rodin-api-docs | S | html | 无变化 |
| gh-trellis | S | html | 未到期（上次 2026-10-10） |
| seed3d-page | S | spa | 从未抓过 |
| stability-spar3d | S | html | 未到期（上次 2026-10-10） |
| tripo-site | S | spa | 抓不到（被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法） |
| rodin-site | S | spa | 未到期（上次 2026-10-10） |
| tripo-docs-animation | S | spa | 未到期（上次 2026-10-10） |
| gh-hunyuan3d-buffalo | S | html | 未到期（上次 2026-10-10） |
| replicate-hunyuan3d-31 | A | spa | 未到期（上次 2026-10-10） |
| replicate-3d | A | spa | 未到期（上次 2026-09-25） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-09-25） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-09-25） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-09-25） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-09-25） |
| gh-spar3d | S | html | 未到期（上次 2026-09-25） |
| gh-triposg | S | html | 未到期（上次 2026-09-25） |
| gh-instantmesh | S | html | 未到期（上次 2026-09-25） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 未到期（上次 2026-10-10） |
| hf-ltx-25 | S | html | 未到期（上次 2026-10-10） |
| meshy-changelog | S | spa | 未到期（上次 2026-10-10） |
| hf-instantmesh | S | html | 未到期（上次 2026-09-25） |
| hf-apple-sharp | S | html | 未到期（上次 2026-09-25） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-09-25） |
| hf-anysplat | S | html | 未到期（上次 2026-09-25） |
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-09-13） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-09-13） |
| hf-trellis2 | S | html | 未到期（上次 2026-09-25） |
| pixverse-caps | S | html | 未到期（上次 2026-10-10） |
| pixverse-v6 | S | html | 未到期（上次 2026-10-10） |
| pixverse-fusion | S | html | 未到期（上次 2026-10-10） |
| hf-cogvideox | S | html | 未到期（上次 2026-09-26） |
| hf-i2vgen | S | html | 未到期（上次 2026-09-26） |
| hf-longcat-edit | S | html | 未到期（上次 2026-09-26） |
| hf-magi | S | html | 未到期（上次 2026-09-26） |
| heygen-docs | S | spa | 未到期（上次 2026-10-10） |
| synthesia-docs | S | spa | 未到期（上次 2026-10-10） |
| hf-longcat-avatar | S | html | 未到期（上次 2026-10-10） |
| hf-hunyuan-avatar | S | html | 未到期（上次 2026-10-10） |
| hf-liveportrait | S | html | 未到期（上次 2026-10-10） |
| hf-musetalk | S | html | 未到期（上次 2026-10-10） |
| hf-hallo2 | S | html | 未到期（上次 2026-10-10） |
| replicate-lipsync | A | spa | 未到期（上次 2026-09-26） |
| comfy-s2v | S | html | 未到期（上次 2026-09-26） |
| heygen-translate | S | html | 未到期（上次 2026-09-26） |
| heygen-live | S | html | 未到期（上次 2026-09-26） |
| heygen-photo | S | html | 未到期（上次 2026-09-26） |
| heygen-training | S | html | 未到期（上次 2026-09-26） |
| heygen-changelog | S | html | 未到期（上次 2026-10-10） |
| hf-hallo-live | S | html | 未到期（上次 2026-10-10） |
| hf-longcat-avatar-10 | S | html | 未到期（上次 2026-10-10） |
| gh-video-retalking | S | html | 未到期（上次 2026-09-26） |
| elevenlabs-changelog | S | html | 未到期（上次 2026-10-10） |
| hf-glm-voice | S | html | 未到期（上次 2026-10-10） |
| hf-glm-tts | S | html | 未到期（上次 2026-10-10） |
| openai-model-tts | S | spa | 未到期（上次 2026-10-10） |
| openai-model-realtime | S | spa | 未到期（上次 2026-10-10） |
| elevenlabs-docs | S | html | 未到期（上次 2026-10-08） |
| gemini-robotics-er | S | html | 未到期（上次 2026-10-10） |
| figure-helix | A | html | 未到期（上次 2026-10-10） |
| pi-pi05-blog | A | html | 抓不到（HTTP 429） |
| pi-openpi-gh | A | html | 未到期（上次 2026-10-10） |
| nvidia-groot-gh | A | html | 未到期（上次 2026-10-10） |
| openvla-gh | A | html | 未到期（上次 2026-10-10） |
| openvla-repo | A | html | 未到期（上次 2026-10-10） |
| hf-robotics | B | json | 未到期（上次 2026-10-10） |
| lerobot-gh | A | json | 未到期（上次 2026-10-10） |
| groot-policy-doc | A | html | 未到期（上次 2026-10-10） |
| rynnbrain-card | A | html | 未到期（上次 2026-10-10） |
| maniskill-gh | B | json | 未到期（上次 2026-09-13） |
| cosmos3-card | S | html | 未到期（上次 2026-10-10） |
| genie3-blog | A | html | 未到期（上次 2026-10-10） |
| odyssey-site | S | html | 未到期（上次 2026-10-10） |
| worldlabs-marble | A | html | 未到期（上次 2026-10-10） |
| matrixgame-card | A | html | 未到期（上次 2026-10-10） |
| hunyuanworld-gh | A | html | 未到期（上次 2026-10-10） |
| wham-card | A | html | 未到期（上次 2026-09-13） |
| vjepa2-blog | A | html | 未到期（上次 2026-09-13） |
| vjepa2-card | B | html | 未到期（上次 2026-09-13） |
| sci-boltz-gh | A | html | 未到期（上次 2026-10-10） |
| sci-af3-blog | A | html | 未到期（上次 2026-09-14） |
| sci-esm2-card | B | html | 未到期（上次 2026-09-14） |
| sci-wn-gh | A | html | 未到期（上次 2026-10-10） |
| sci-aurora-gh | A | html | 未到期（上次 2026-10-10） |
| sci-neuralgcm-gh | A | html | 未到期（上次 2026-10-10） |
| sci-mattergen-gh | A | html | 未到期（上次 2026-10-10） |
| sci-mace-gh | A | html | 未到期（上次 2026-10-10） |
| sci-gnome-gh | A | html | 未到期（上次 2026-10-10） |
| seed-25 | A | html | 未到期（上次 2026-10-10） |
| veo-doc | A | html | 未到期（上次 2026-10-08） |
| sora-api | A | html | 未到期（上次 2026-10-10） |
| wan-site | A | html | 未到期（上次 2026-10-10） |
| mm-hf-api | A | json | 未到期（上次 2026-10-10） |
| vidu-s1-paper | A | html | 未到期（上次 2026-08-15） |
| omni-doc | A | html | 无变化 |
| ltx-hf-23 | A | html | 未到期（上次 2026-10-10） |
| gemini-image-docs | A | html | 未到期（上次 2026-10-08） |
| openai-image-docs | A | html | 未到期（上次 2026-10-08） |
| recraft-docs | A | html | 未到期（上次 2026-10-10） |
| bfl-docs | A | html | 未到期（上次 2026-10-10） |
| zimage-card | A | html | 未到期（上次 2026-10-10） |
| hunyuan-image-card | A | html | 未到期（上次 2026-10-10） |
| smolvla-card | A | html | 未到期（上次 2026-10-10） |
| molmoact-card | A | html | 未到期（上次 2026-10-10） |
| hf-whisper | A | html | 未到期（上次 2026-10-08） |
| hf-sensevoice | A | html | 未到期（上次 2026-10-10） |
| hf-qwen3-asr | A | html | 未到期（上次 2026-10-10） |
| minimax-release-notes | A | html | 未到期（上次 2026-10-10） |
| seed-blog-1_5 | A | html | 未到期（上次 2026-10-10） |
| seed-blog-2_0 | A | html | 未到期（上次 2026-10-10） |
| ideogram-x | A | html | 未到期（上次 2026-10-10） |
| hf-funcineforge | S | html | 未到期（上次 2026-10-04） |
| hf-org | S | json | 未到期（上次 2026-10-10） |
| gh-gptsovits-cn | C | json | 无变化 |
| gemini-nb21 | S | spa | 未到期（上次 2026-10-10） |
| xai-grok47-model | S | html | 首次 |
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

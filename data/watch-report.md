# 信息源监视报告 · 2026-09-05

本次检查 34 个到期源（共 448 个）：变化 17 · 首次 0 · 无变化 12 · **抓不到 5**

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
  新增 2 条：Hearmeman/minimax-h3-loras、rzgar/minimax_h3_fl2v_lightx2v_4step_int8-convrot_comfy
- **hf-i2v** Hugging Face · image-to-video 按下载量
  新增 2 条：Abiray/10Eros-Max-GGUF、jdopensource/JoyAI-Echo
- **techcrunch-ai** TechCrunch · AI（RSS）
  新增 19 条：XDOF, just three months out of stealth, is in talks for a Series B at a $1.2B valuation、OpenAI&#8217;s rogue agents keep escaping, with no formal process to investigate them、AI compute provider Nscale is looking for $3.5B in pre-IPO financing、What will Apple&#8217;s John Ternus era look like?、Another swarm of OpenAI agents reached the open internet without the frontier lab&#8217;s knowledge、Apple&#8217;s Ternus era begins as Nvidia bets on the whole AI stack、Google&#8217;s Gemini Spark can now manage your Google Photos library、Less than 24 hours to apply for your TechCrunch Disrupt 2026 Side Event、The sameness problem behind those unappetizing AI-generated menus、Crusoe reportedly raises $3B at a  $30B valuation、Accel reportedly in talks to lead $1B round for Thinking Machines at $40B valuation、Abliteration.ai is making a business out of removing AI guardrails …
- **hf-t2i** Hugging Face · text-to-image 按下载量
  新增 3 条：John6666/obsession-illustriousxl-v10-sdxl、Omnico/Krea2_turbo_diff_loras、latent-consistency/lcm-lora-sdv1-5
- **hf-i2i** Hugging Face · image-to-image 按下载量
  新增 1 条：lllyasviel/control_v11p_sd15_openpose
- **hf-text-org** Hugging Face 官方组织 · 文本模型
  新增 243 条：0bserverx/RVN-Qwen3.8-Flash-Next-Abliterated-Uncensored、ACERobotics/Puffin-World、AesSedai/GLM-5.3-Flash-GGUF、Aitrepreneur/IdeoKrea、Akahsizrr/Cyber-Prime-1-2.6B、Akahsizrr/Fuse-2-MoE-BF16、Aratako/Irodori-TTS-v4.1-Small、ArliAI/GLM-4.6-Derestricted-v3、Asirus/Minimax-H3-Latent-Upscaler-BF16-MAXQUALITY、Ateron/Gemma-4-MoonGem-31B、Blackfrost-Research/GLM-5.3-DERISKED-NVFP4、ByteDance/Bernini-Diffusers-v2 …
- **hf-cogvideox** Hugging Face · zai-org/CogVideoX-2b
- **hf-i2vgen** Hugging Face · ali-vilab/i2vgen-xl
- **hf-longcat-edit** Hugging Face · meituan-longcat/LongCat-Image-Edit
- **hf-magi** Hugging Face · sand-ai/MAGI-1 与 MAGI-2-preview
- **replicate-lipsync** Replicate · 搜索「lipsync」
- **comfy-s2v** ComfyUI 官方 · Wan2.2-S2V 音频驱动工作流
- **heygen-translate** HeyGen · Video Translation 文档
- **gh-video-retalking** OpenTalker/video-retalking 仓库
- **gemini-robotics-er** Google 官方文档 · Gemini Robotics ER（能力表 / 端点 / 定价）
- **hf-robotics** Hugging Face · robotics 榜（按下载）
  新增 12 条：Aasdfip/longnav-objectnav-flow-nopose-cotrain-2p5hz-merged、Alibaba-DAMO-Academy/RynnBrain1.1-9B、CMSManhattan/JiRackDeltaNet_27b、StarVLA/Qwen3-VL-4B-Instruct-Action、allenai/GraspMolmo、hesh0629/smolvla-put_banana_v2、irl-kit/SPARC-Qwen3.5-0.8B-VTFT、lerobot/lingbot_va_libero_long、lerobot/pi0fast-base、mradermacher/RynnBrain-Plan-8B-i1-GGUF、open-gigaai/GigaBrain-0.7-3.5B-Base、qwbu/univla-7b
- **lerobot-gh** Hugging Face 官方 · LeRobot 仓库

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 未到期（上次 2026-09-02） |
| seed-models | S | html | 未到期（上次 2026-08-26） |
| kling-api-updates | S | spa | 未到期（上次 2026-09-02） |
| kling-site | S | spa | 抓不到（还是壳：渲染后正文只有 232 个字符） |
| google-video-docs | S | html | 未到期（上次 2026-09-02） |
| deepmind-veo | S | html | 未到期（上次 2026-08-26） |
| vertex-video-ref | S | html | 未到期（上次 2026-08-26） |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 未到期（上次 2026-09-02） |
| wan-hf | S | json | 未到期（上次 2026-09-02） |
| minimax-blog | S | html | 未到期（上次 2026-09-02） |
| minimax-hf | S | json | 未到期（上次 2026-09-02） |
| runway-research | S | html | 未到期（上次 2026-08-26） |
| luma-site | S | html | 未到期（上次 2026-08-26） |
| vidu-changelog | S | spa | 未到期（上次 2026-09-02） |
| vidu-model-map | S | spa | 未到期（上次 2026-09-02） |
| vidu-function-list | S | spa | 未到期（上次 2026-09-02） |
| vidu-site | S | html | 未到期（上次 2026-08-26） |
| vidu-s1-gh | S | json | 未到期（上次 2026-08-26） |
| pika-site | S | html | 未到期（上次 2026-08-26） |
| higgsfield-site | S | html | 未到期（上次 2026-08-26） |
| decart-research | S | html | 未到期（上次 2026-08-26） |
| arxiv-video | S | atom | 未到期（上次 2026-08-30） |
| epoch-notable | A | csv | 未到期（上次 2026-09-02） |
| aa-t2v | A | spa | 未到期（上次 2026-09-02） |
| aa-i2v | A | spa | 未到期（上次 2026-09-02） |
| hf-t2v | A | json | 变了 |
| hf-i2v | A | json | 变了 |
| hf-v2v | A | json | 未到期（上次 2026-09-02） |
| fal-video | S | spa | 未到期（上次 2026-09-02） |
| replicate-t2v | S | html | 未到期（上次 2026-09-02） |
| aiwiki | B | spa | 未到期（上次 2026-08-12） |
| futurepedia | B | html | 未到期（上次 2026-08-12） |
| comfyui-releases | C | json | 未到期（上次 2026-08-26） |
| capcut-templates | C | html | 未到期（上次 2026-08-12） |
| picsart-effects | C | html | 未到期（上次 2026-08-12） |
| runway-changelog | S | spa | 未到期（上次 2026-09-02） |
| runway-models | S | spa | 未到期（上次 2026-09-02） |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| google-models | S | html | 未到期（上次 2026-09-02） |
| seed-models-hub | S | html | 未到期（上次 2026-09-02） |
| apiyi-models | S | spa | 未到期（上次 2026-09-02） |
| arxiv-worldmodel | S | atom | 未到期（上次 2026-08-30） |
| techcrunch-ai | B | atom | 变了 |
| decart-blog | S | spa | 未到期（上次 2026-09-02） |
| ltx-gh | S | json | 未到期（上次 2026-09-02） |
| ltx-hf-org | S | json | 无变化 |
| decart-site | S | spa | 无变化 |
| picsart-video | C | html | 未到期（上次 2026-08-12） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 未到期（上次 2026-08-26） |
| hailuo-video | S | html | 未到期（上次 2026-08-26） |
| volcengine-ark-price | S | spa | 未到期（上次 2026-08-12） |
| minimax-price | S | spa | 未到期（上次 2026-08-12） |
| google-ai-price | S | html | 未到期（上次 2026-08-12） |
| bailian-price | S | spa | 未到期（上次 2026-08-12） |
| runway-price | S | spa | 未到期（上次 2026-08-12） |
| kling-price | S | spa | 未到期（上次 2026-08-12） |
| vidu-price | S | spa | 未到期（上次 2026-08-12） |
| fal-ltx-price | S | spa | 未到期（上次 2026-08-12） |
| replicate-price | A | html | 未到期（上次 2026-08-12） |
| hf-course | S | html | 未到期（上次 2026-08-12） |
| comfy-docs | S | spa | 未到期（上次 2026-08-26） |
| h3-card | S | html | 未到期（上次 2026-08-26） |
| hf-lineage | S | json | 未到期（上次 2026-09-02） |
| vacetools-gh | C | json | 未到期（上次 2026-09-02） |
| framepack-gh | S | json | 未到期（上次 2026-09-02） |
| fpwrapper-gh | C | json | 未到期（上次 2026-09-02） |
| latentsync-gh | S | json | 未到期（上次 2026-09-02） |
| lswrapper-gh | C | json | 未到期（上次 2026-09-02） |
| float-gh | C | json | 未到期（上次 2026-09-02） |
| sviflf-gh | C | json | 未到期（上次 2026-09-02） |
| flflatent-gh | C | json | 未到期（上次 2026-09-02） |
| mm-blog | S | html | 未到期（上次 2026-08-12） |
| wanwrapper-gh | C | json | 未到期（上次 2026-09-02） |
| comfy-org-hf | S | json | 未到期（上次 2026-09-02） |
| ltx-comfy-gh | S | json | 未到期（上次 2026-09-02） |
| mpt-gh | C | json | 未到期（上次 2026-09-02） |
| manim-gh | C | json | 未到期（上次 2026-09-02） |
| pyvideotrans-gh | C | json | 未到期（上次 2026-09-02） |
| duix-gh | C | json | 未到期（上次 2026-09-02） |
| fay-gh | C | json | 未到期（上次 2026-09-02） |
| narrato-gh | C | json | 未到期（上次 2026-09-02） |
| zho-wf-gh | C | json | 未到期（上次 2026-09-02） |
| echomimic-gh | C | json | 未到期（上次 2026-09-02） |
| linly-talker-gh | C | json | 未到期（上次 2026-09-02） |
| animate-anything-gh | C | json | 未到期（上次 2026-09-02） |
| huobao-gh | C | json | 未到期（上次 2026-09-02） |
| awesome-vd-gh | C | json | 未到期（上次 2026-09-02） |
| seedream-page | S | html | 未到期（上次 2026-08-26） |
| openai-models | S | html | 未到期（上次 2026-09-02） |
| gemini-models | S | html | 未到期（上次 2026-09-02） |
| google-gemini-blog | S | html | 未到期（上次 2026-08-26） |
| azure-foundry-blog | B | html | 未到期（上次 2026-08-12） |
| recraft-blog | S | html | 未到期（上次 2026-08-12） |
| kolors-gh | S | html | 未到期（上次 2026-08-12） |
| krea-blog | S | html | 未到期（上次 2026-08-26） |
| wiki-midjourney | B | html | 未到期（上次 2026-08-12） |
| comfyui-gh | S | json | 未到期（上次 2026-08-12） |
| sdwebui-gh | S | json | 未到期（上次 2026-08-12） |
| fooocus-gh | S | json | 未到期（上次 2026-08-12） |
| invokeai-gh | S | json | 未到期（上次 2026-08-12） |
| iopaint-gh | S | json | 未到期（上次 2026-08-12） |
| rembg-gh | S | json | 未到期（上次 2026-08-12） |
| realesrgan-gh | S | json | 未到期（上次 2026-08-12） |
| gfpgan-gh | S | json | 未到期（上次 2026-08-12） |
| codeformer-gh | S | json | 未到期（上次 2026-08-12） |
| oldphoto-gh | S | json | 未到期（上次 2026-08-12） |
| controlnet-gh | S | json | 未到期（上次 2026-08-12） |
| ipadapter-gh | S | json | 未到期（上次 2026-08-12） |
| instantid-gh | S | json | 未到期（上次 2026-08-12） |
| photomaker-gh | S | json | 未到期（上次 2026-08-12） |
| iclight-gh | S | json | 未到期（上次 2026-08-12） |
| idmvton-gh | S | json | 未到期（上次 2026-08-12） |
| ootd-gh | S | json | 未到期（上次 2026-08-12） |
| catvton-gh | S | json | 未到期（上次 2026-08-12） |
| kritaai-gh | S | json | 未到期（上次 2026-08-12） |
| omnigen-gh | S | json | 未到期（上次 2026-08-12） |
| step1x-gh | S | json | 未到期（上次 2026-08-12） |
| qwenimage-gh | S | json | 未到期（上次 2026-08-12） |
| anytext-gh | S | json | 未到期（上次 2026-08-12） |
| incontextlora-gh | S | json | 未到期（上次 2026-08-12） |
| comictrans-gh | S | json | 未到期（上次 2026-08-12） |
| manganinjia-gh | S | json | 未到期（上次 2026-08-12） |
| starvector-gh | S | json | 未到期（上次 2026-08-12） |
| svgdreamer-gh | S | json | 未到期（上次 2026-08-12） |
| easyphoto-gh | S | json | 未到期（上次 2026-08-12） |
| ipadapter-plus-gh | S | json | 未到期（上次 2026-08-12） |
| controlnet-aux-gh | S | json | 未到期（上次 2026-08-12） |
| ultimate-upscale-gh | S | json | 未到期（上次 2026-08-12） |
| comfy-manager-gh | S | json | 未到期（上次 2026-08-12） |
| comfy-examples-gh | S | json | 未到期（上次 2026-08-12） |
| comfy-templates-gh | S | json | 未到期（上次 2026-08-12） |
| hf-diffusion-class-gh | S | json | 未到期（上次 2026-08-12） |
| fastai-course | S | html | 未到期（上次 2026-08-12） |
| dreamtextures-gh | S | json | 未到期（上次 2026-08-12） |
| char2d-gh | S | json | 未到期（上次 2026-08-12） |
| hf-pixelart-lora | S | json | 未到期（上次 2026-08-12） |
| google-nb-blog | S | html | 未到期（上次 2026-08-26） |
| ms-foundry-blog | B | html | 未到期（上次 2026-08-12） |
| hf-image-org | S | json | 未到期（上次 2026-09-02） |
| mj-updates | S | html | 未到期（上次 2026-08-26） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 321 个字符） |
| hf-t2i | A | json | 变了 |
| hf-i2i | A | json | 变了 |
| anthropic-models | S | html | 未到期（上次 2026-09-02） |
| deepseek-docs | S | html | 未到期（上次 2026-09-02） |
| xai-docs | S | html | 未到期（上次 2026-09-02） |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| hf-text-org | S | json | 变了 |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 未到期（上次 2026-08-26） |
| glm-api | S | html | 未到期（上次 2026-08-26） |
| minimax-platform | S | html | 未到期（上次 2026-08-26） |
| langchain-gh | S | json | 未到期（上次 2026-08-12） |
| langgraph-gh | S | json | 未到期（上次 2026-08-12） |
| llamaindex-gh | S | json | 未到期（上次 2026-08-12） |
| vllm-gh | S | json | 未到期（上次 2026-08-12） |
| llamacpp-gh | S | json | 未到期（上次 2026-08-12） |
| ollama-gh | S | json | 未到期（上次 2026-08-12） |
| ragflow-gh | S | json | 未到期（上次 2026-08-12） |
| dify-gh | S | json | 未到期（上次 2026-08-12） |
| n8n-gh | S | json | 未到期（上次 2026-08-12） |
| openwebui-gh | S | json | 未到期（上次 2026-08-12） |
| autogen-gh | S | json | 未到期（上次 2026-08-12） |
| crewai-gh | S | json | 未到期（上次 2026-08-12） |
| litellm-gh | S | json | 未到期（上次 2026-08-12） |
| transformers-gh | S | json | 未到期（上次 2026-08-12） |
| unsloth-gh | S | json | 未到期（上次 2026-08-12） |
| llamafactory-gh | S | json | 未到期（上次 2026-08-12） |
| aider-gh | S | json | 未到期（上次 2026-08-12） |
| cline-gh | S | json | 未到期（上次 2026-08-12） |
| continue-gh | S | json | 未到期（上次 2026-08-12） |
| openhands-gh | S | json | 未到期（上次 2026-08-12） |
| browseruse-gh | S | json | 未到期（上次 2026-08-12） |
| markitdown-gh | S | json | 未到期（上次 2026-08-12） |
| unstructured-gh | S | json | 未到期（上次 2026-08-12） |
| mineru-gh | S | json | 未到期（上次 2026-08-12） |
| mcpservers-gh | S | json | 未到期（上次 2026-08-12） |
| anthropic-features | S | html | 未到期（上次 2026-09-02） |
| openai-docs | S | html | 未到期（上次 2026-09-02） |
| deepseek-pricing | S | html | 未到期（上次 2026-09-02） |
| bailian-models | S | html | 未到期（上次 2026-09-02） |
| kimi-pricing | S | html | 未到期（上次 2026-08-26） |
| glm-52-doc | S | html | 未到期（上次 2026-08-26） |
| kimi-websearch | S | html | 未到期（上次 2026-08-26） |
| kimi-chat-api | S | html | 未到期（上次 2026-08-26） |
| bailian-websearch | S | html | 未到期（上次 2026-08-26） |
| glm-websearch | S | html | 未到期（上次 2026-08-26） |
| bailian-coder | S | html | 未到期（上次 2026-08-26） |
| ark-models | S | spa | 未到期（上次 2026-09-02） |
| minimax-api-overview | S | spa | 未到期（上次 2026-09-02） |
| claude-models | S | html | 未到期（上次 2026-09-02） |
| openai-caching | S | html | 未到期（上次 2026-08-26） |
| openai-structured | S | html | 未到期（上次 2026-08-26） |
| deepseek-chat-api | S | html | 未到期（上次 2026-08-26） |
| gemini-audio | S | spa | 未到期（上次 2026-08-26） |
| gemini-vision | S | spa | 未到期（上次 2026-08-26） |
| minimax-anthropic-api | S | spa | 未到期（上次 2026-08-26） |
| minimax-openai-api | S | spa | 未到期（上次 2026-08-26） |
| minimax-server-tools | S | spa | 未到期（上次 2026-08-26） |
| minimax-caching | S | spa | 未到期（上次 2026-08-26） |
| minimax-openapi | S | json | 未到期（上次 2026-09-02） |
| gemini-computer-use | S | spa | 未到期（上次 2026-08-26） |
| ark-pricing | S | spa | 未到期（上次 2026-08-26） |
| bailian-models-zh | S | spa | 未到期（上次 2026-09-02） |
| glm-batch | S | html | 未到期（上次 2026-09-02） |
| glm-chat-api | S | html | 未到期（上次 2026-09-02） |
| claude-deprecations | S | html | 未到期（上次 2026-09-02） |
| openai-changelog | S | spa | 未到期（上次 2026-09-02） |
| gemini-changelog | S | spa | 未到期（上次 2026-09-02） |
| xai-release-notes | S | html | 未到期（上次 2026-09-02） |
| aa-llm | B | spa | 未到期（上次 2026-08-26） |
| ideogram-api | S | html | 未到期（上次 2026-08-26） |
| elevenlabs-models | S | html | 未到期（上次 2026-08-26） |
| openai-realtime | S | html | 未到期（上次 2026-08-26） |
| gemini-tts | S | html | 未到期（上次 2026-08-26） |
| elevenlabs-tts | S | html | 未到期（上次 2026-08-26） |
| bailian-omni | S | html | 未到期（上次 2026-08-26） |
| elevenlabs-remix | S | html | 未到期（上次 2026-08-26） |
| openai-tts | S | html | 未到期（上次 2026-08-26） |
| gemini-music | S | html | 未到期（上次 2026-08-26） |
| glm-tts-doc | S | html | 未到期（上次 2026-08-26） |
| glm-tts-clone-doc | S | html | 未到期（上次 2026-08-26） |
| glm-voice-doc | S | html | 未到期（上次 2026-08-26） |
| xai-voice | S | html | 未到期（上次 2026-08-26） |
| hf-sound-org | S | json | 未到期（上次 2026-09-02） |
| kokoro-card | S | html | 未到期（上次 2026-08-26） |
| xai-models | S | html | 未到期（上次 2026-08-26） |
| mistral-models | S | html | 未到期（上次 2026-08-26） |
| mistral-tools | S | html | 未到期（上次 2026-08-26） |
| mistral-vision | S | html | 未到期（上次 2026-08-26） |
| fish-s2pro-card | S | html | 未到期（上次 2026-08-26） |
| cosyvoice-card | S | html | 未到期（上次 2026-08-26） |
| llama-card | S | html | 未到期（上次 2026-08-26） |
| elevenlabs-voices | S | html | 未到期（上次 2026-08-26） |
| wan-t2v-card | S | html | 未到期（上次 2026-08-26） |
| minimax-release | S | spa | 未到期（上次 2026-09-02） |
| s-e2ab-gh | C | json | 未到期（上次 2026-09-02） |
| s-abogen-gh | C | json | 未到期（上次 2026-09-02） |
| s-epub2tts-gh | C | json | 未到期（上次 2026-09-02） |
| s-abcreator-gh | C | json | 未到期（上次 2026-09-02） |
| s-pvt-gh | C | json | 未到期（上次 2026-09-02） |
| s-smartsub-gh | C | json | 未到期（上次 2026-09-02） |
| s-youdub-gh | C | json | 未到期（上次 2026-09-02） |
| s-pipecat-gh | C | json | 未到期（上次 2026-09-02） |
| s-livekit-gh | C | json | 未到期（上次 2026-09-02） |
| s-hfs2s-gh | C | json | 未到期（上次 2026-09-02） |
| s-moshi-gh | C | json | 未到期（上次 2026-09-02） |
| s-acestep15-gh | C | json | 未到期（上次 2026-09-02） |
| s-acestep-gh | C | json | 未到期（上次 2026-09-02） |
| s-yue-gh | C | json | 未到期（上次 2026-09-02） |
| s-audiocraft-gh | C | json | 未到期（上次 2026-09-02） |
| s-gptsovits-gh | C | json | 未到期（上次 2026-09-02） |
| s-rvc-gh | C | json | 未到期（上次 2026-09-02） |
| s-fishspeech-gh | C | json | 未到期（上次 2026-09-02） |
| s-indextts-gh | C | json | 未到期（上次 2026-09-02） |
| s-cosyvoice-gh | C | json | 未到期（上次 2026-09-02） |
| s-f5tts-gh | C | json | 未到期（上次 2026-09-02） |
| s-qwen3omni-gh | C | json | 未到期（上次 2026-09-02） |
| ideogram-overview | A | html | 未到期（上次 2026-08-26） |
| ideogram-v4-remix | A | html | 未到期（上次 2026-08-26） |
| ideogram-v3-inpaint | A | html | 未到期（上次 2026-08-26） |
| ideogram-v3-reframe | A | html | 未到期（上次 2026-08-26） |
| ideogram-v3-generate | A | html | 未到期（上次 2026-08-26） |
| ideogram-edit | A | html | 未到期（上次 2026-08-26） |
| ideogram-upscale | A | html | 未到期（上次 2026-08-26） |
| ideogram-hf | A | html | 未到期（上次 2026-08-26） |
| bailian-qimg3 | A | html | 未到期（上次 2026-08-26） |
| bailian-qimg | A | html | 未到期（上次 2026-08-26） |
| bailian-textgen-zh | A | html | 未到期（上次 2026-08-26） |
| bailian-thinking-zh | A | html | 未到期（上次 2026-08-26） |
| bailian-cache-zh | A | html | 未到期（上次 2026-08-26） |
| bailian-batch-zh | A | html | 未到期（上次 2026-08-26） |
| bailian-websearch-zh | A | html | 未到期（上次 2026-08-26） |
| hf-kokoro | A | json | 未到期（上次 2026-08-12） |
| hf-cosyvoice2 | A | json | 未到期（上次 2026-08-12） |
| hf-glmtts | A | json | 未到期（上次 2026-08-12） |
| hf-glm4voice | A | json | 未到期（上次 2026-08-12） |
| hf-fishspeech15 | A | html | 未到期（上次 2026-08-15） |
| hf-qwen3omni | A | json | 未到期（上次 2026-08-12） |
| hf-qwen-layered | A | html | 未到期（上次 2026-08-15） |
| hf-org-minimax | A | json | 未到期（上次 2026-08-12） |
| hf-org-xai | A | json | 未到期（上次 2026-08-12） |
| hf-org-elevenlabs | A | json | 未到期（上次 2026-08-12） |
| hf-org-openai | A | json | 未到期（上次 2026-08-12） |
| ideogram-layerize | A | html | 未到期（上次 2026-08-12） |
| recraft-endpoints | A | html | 未到期（上次 2026-09-03） |
| recraft-nl-edit | A | html | 未到期（上次 2026-09-03） |
| hunyuan-image-hf | A | json | 未到期（上次 2026-09-03） |
| bfl-flux2-overview | A | html | 未到期（上次 2026-09-03） |
| bfl-flux2-multiref | A | html | 无变化 |
| ark-seedream-api | A | spa | 未到期（上次 2026-08-27） |
| arxiv-fp8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-int8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-qlora | A | html | 未到期（上次 2026-08-13） |
| arxiv-gptq | A | html | 未到期（上次 2026-08-13） |
| arxiv-awq | A | html | 未到期（上次 2026-08-13） |
| arxiv-lora | A | html | 未到期（上次 2026-08-13） |
| hf-gguf-doc | A | html | 未到期（上次 2026-08-13） |
| hf-diffusers-memory | A | html | 未到期（上次 2026-08-13） |
| zimage-gh | A | html | 无变化 |
| hunyuan-image-gh | A | html | 无变化 |
| skyreels-gh | A | html | 未到期（上次 2026-08-29） |
| bfl-flux3 | A | html | 未到期（上次 2026-08-29） |
| anthropic-privacy | A | html | 未到期（上次 2026-08-14） |
| stability-terms | A | html | 未到期（上次 2026-08-14） |
| recraft-blog-b | A | html | 未到期（上次 2026-08-14） |
| gh-llm-universe | C | json | 未到期（上次 2026-08-14） |
| gh-all-in-rag | C | json | 未到期（上次 2026-08-14） |
| gh-handy-multi-agent | C | json | 未到期（上次 2026-08-14） |
| gh-llm-action | C | json | 未到期（上次 2026-08-14） |
| gh-self-llm | C | json | 未到期（上次 2026-08-14） |
| gh-langchain-zh | C | json | 未到期（上次 2026-08-14） |
| gh-llamafactory | C | json | 未到期（上次 2026-08-14） |
| gh-gptsovits-cn | C | json | 未到期（上次 2026-08-14） |
| gh-cosyvoice-doc | C | json | 未到期（上次 2026-08-14） |
| gh-chattts-cn | C | json | 未到期（上次 2026-08-14） |
| gh-pyvideotrans-doc | C | json | 未到期（上次 2026-08-14） |
| gh-comfy-zho | C | json | 未到期（上次 2026-08-14） |
| gh-comfyui | C | json | 未到期（上次 2026-08-14） |
| gh-sdbook | C | json | 未到期（上次 2026-08-14） |
| waytoagi-wiki | C | spa | 从未抓过 |
| hf-hunyuan3d-21 | S | html | 未到期（上次 2026-08-29） |
| tripo-docs-generation | S | spa | 未到期（上次 2026-08-29） |
| meshy-docs-api | S | spa | 未到期（上次 2026-08-29） |
| meshy-site | S | spa | 未到期（上次 2026-08-29） |
| rodin-api-docs | S | html | 未到期（上次 2026-08-29） |
| gh-trellis | S | html | 未到期（上次 2026-08-29） |
| seed3d-page | S | spa | 从未抓过 |
| stability-spar3d | S | html | 未到期（上次 2026-08-29） |
| tripo-site | S | spa | 抓不到（被人机验证挡住（页面标题「Just a moment...」）—— 这条源只能人工核，别再换抓法） |
| rodin-site | S | spa | 未到期（上次 2026-08-29） |
| tripo-docs-animation | S | spa | 未到期（上次 2026-08-29） |
| gh-hunyuan3d-buffalo | S | html | 未到期（上次 2026-08-29） |
| replicate-hunyuan3d-31 | A | spa | 未到期（上次 2026-08-29） |
| replicate-3d | A | spa | 未到期（上次 2026-09-04） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-09-04） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-09-04） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-09-04） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-09-04） |
| gh-spar3d | S | html | 未到期（上次 2026-09-04） |
| gh-triposg | S | html | 未到期（上次 2026-09-04） |
| gh-instantmesh | S | html | 未到期（上次 2026-09-04） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 未到期（上次 2026-08-29） |
| hf-ltx-25 | S | html | 未到期（上次 2026-08-29） |
| meshy-changelog | S | spa | 未到期（上次 2026-08-29） |
| hf-instantmesh | S | html | 未到期（上次 2026-09-04） |
| hf-apple-sharp | S | html | 未到期（上次 2026-09-04） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-09-04） |
| hf-anysplat | S | html | 未到期（上次 2026-09-04） |
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-08-14） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-08-14） |
| hf-trellis2 | S | html | 未到期（上次 2026-09-04） |
| pixverse-caps | S | html | 未到期（上次 2026-08-29） |
| pixverse-v6 | S | html | 未到期（上次 2026-08-29） |
| pixverse-fusion | S | html | 未到期（上次 2026-08-29） |
| hf-cogvideox | S | html | 变了 |
| hf-i2vgen | S | html | 变了 |
| hf-longcat-edit | S | html | 变了 |
| hf-magi | S | html | 变了 |
| heygen-docs | S | spa | 未到期（上次 2026-08-29） |
| synthesia-docs | S | spa | 未到期（上次 2026-08-29） |
| hf-longcat-avatar | S | html | 未到期（上次 2026-08-29） |
| hf-hunyuan-avatar | S | html | 未到期（上次 2026-08-29） |
| hf-liveportrait | S | html | 未到期（上次 2026-08-29） |
| hf-musetalk | S | html | 未到期（上次 2026-08-29） |
| hf-hallo2 | S | html | 未到期（上次 2026-08-29） |
| replicate-lipsync | A | spa | 变了 |
| comfy-s2v | S | html | 变了 |
| heygen-translate | S | html | 变了 |
| heygen-live | S | html | 无变化 |
| heygen-photo | S | html | 无变化 |
| heygen-training | S | html | 无变化 |
| heygen-changelog | S | html | 未到期（上次 2026-08-29） |
| hf-hallo-live | S | html | 未到期（上次 2026-08-29） |
| hf-longcat-avatar-10 | S | html | 未到期（上次 2026-08-29） |
| gh-video-retalking | S | html | 变了 |
| elevenlabs-changelog | S | html | 未到期（上次 2026-08-29） |
| hf-glm-voice | S | html | 未到期（上次 2026-08-29） |
| hf-glm-tts | S | html | 未到期（上次 2026-08-29） |
| openai-model-tts | S | spa | 未到期（上次 2026-08-29） |
| openai-model-realtime | S | spa | 未到期（上次 2026-08-29） |
| elevenlabs-docs | S | html | 未到期（上次 2026-08-29） |
| gemini-robotics-er | S | html | 变了 |
| figure-helix | A | html | 未到期（上次 2026-08-29） |
| pi-pi05-blog | A | html | 未到期（上次 2026-08-29） |
| pi-openpi-gh | A | html | 无变化 |
| nvidia-groot-gh | A | html | 无变化 |
| openvla-gh | A | html | 未到期（上次 2026-08-29） |
| openvla-repo | A | html | 未到期（上次 2026-08-29） |
| hf-robotics | B | json | 变了 |
| lerobot-gh | A | json | 变了 |
| groot-policy-doc | A | html | 无变化 |
| rynnbrain-card | A | html | 未到期（上次 2026-08-29） |
| maniskill-gh | B | json | 未到期（上次 2026-08-14） |
| cosmos3-card | S | html | 无变化 |
| genie3-blog | A | html | 未到期（上次 2026-08-29） |
| odyssey-site | A | html | 未到期（上次 2026-08-29） |
| worldlabs-marble | A | html | 未到期（上次 2026-08-29） |
| matrixgame-card | A | html | 未到期（上次 2026-08-29） |
| hunyuanworld-gh | A | html | 未到期（上次 2026-08-29） |
| wham-card | A | html | 未到期（上次 2026-08-14） |
| vjepa2-blog | A | html | 未到期（上次 2026-08-14） |
| vjepa2-card | B | html | 未到期（上次 2026-08-14） |
| sci-boltz-gh | A | html | 未到期（上次 2026-08-29） |
| sci-af3-blog | A | html | 未到期（上次 2026-08-15） |
| sci-esm2-card | B | html | 未到期（上次 2026-08-15） |
| sci-wn-gh | A | html | 未到期（上次 2026-08-29） |
| sci-aurora-gh | A | html | 未到期（上次 2026-08-29） |
| sci-neuralgcm-gh | A | html | 未到期（上次 2026-08-29） |
| sci-mattergen-gh | A | html | 未到期（上次 2026-08-29） |
| sci-mace-gh | A | html | 未到期（上次 2026-08-29） |
| sci-gnome-gh | A | html | 未到期（上次 2026-08-29） |
| kling-api | A | html | 未到期（上次 2026-08-29） |
| seed-25 | A | html | 未到期（上次 2026-08-29） |
| veo-doc | A | html | 未到期（上次 2026-08-29） |
| sora-eol-search | B | html | 抓不到（HTTP 403） |
| sora-api | A | html | 未到期（上次 2026-08-29） |
| sora-2 | A | html | 抓不到（HTTP 403） |
| wan-site | A | html | 未到期（上次 2026-08-29） |
| mm-hf-api | A | json | 未到期（上次 2026-08-29） |
| vidu-fl | A | html | 未到期（上次 2026-08-29） |
| vidu-up | A | html | 未到期（上次 2026-08-29） |
| vidu-mm | A | html | 未到期（上次 2026-08-29） |
| rw-changelog | A | html | 未到期（上次 2026-08-29） |
| vidu-s1-paper | A | html | 未到期（上次 2026-08-15） |
| omni-doc | A | html | 未到期（上次 2026-08-29） |
| g-video | A | html | 未到期（上次 2026-08-29） |
| ltx-hf-23 | A | html | 未到期（上次 2026-08-29） |
| aa-board | B | html | 未到期（上次 2026-08-29） |
| gemini-image-docs | A | html | 未到期（上次 2026-08-29） |
| openai-image-docs | A | html | 未到期（上次 2026-08-29） |
| recraft-docs | A | html | 未到期（上次 2026-08-29） |
| bfl-docs | A | html | 未到期（上次 2026-08-29） |
| zimage-card | A | html | 未到期（上次 2026-08-29） |
| hunyuan-image-card | A | html | 未到期（上次 2026-08-29） |
| smolvla-card | A | html | 未到期（上次 2026-08-29） |
| molmoact-card | A | html | 未到期（上次 2026-08-29） |
| hf-whisper | A | html | 未到期（上次 2026-08-29） |
| hf-sensevoice | A | html | 未到期（上次 2026-08-29） |
| hf-qwen3-asr | A | html | 未到期（上次 2026-08-29） |
| minimax-release-notes | A | html | 未到期（上次 2026-08-29） |
| seed-blog-1_5 | A | html | 未到期（上次 2026-08-29） |
| seed-blog-2_0 | A | html | 未到期（上次 2026-08-29） |
| ideogram-x | A | html | 未到期（上次 2026-08-29） |

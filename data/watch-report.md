# 信息源监视报告 · 2026-08-19

本次检查 97 个到期源（共 448 个）：变化 72 · 首次 0 · 无变化 20 · **抓不到 5**

> 这份报告是给人看的那 20 条待办的来源（§59.3 的负反馈：人每周要看的条目 ≤ 20）。
> 「抓不到」不是失败，是**信息本身** —— 一个长期抓不到的官方源，说明那家厂商没有可 diff 的公开更新入口，
> 而那正好解释了为什么它名下的格子质量最差。

## 抓到了但没内容（比抓不到更危险 —— 它不会喊）

（无）

## 抓不到（要处理）

- **arxiv-video**（S/atom）arXiv · 视频生成新论文 — HTTP 429
  http://export.arxiv.org/api/query?search_query=abs:%22video%20generation%22&sortBy=submittedDate&sortOrder=descending&max_results=40
- **arxiv-worldmodel**（S/atom）arXiv · world model / 实时视频生成 — HTTP 429
  http://export.arxiv.org/api/query?search_query=abs:%22world%20model%22+AND+abs:%22video%22&sortBy=submittedDate&sortOrder=descending&max_results=40
- **aa-t2i**（A/spa）Artificial Analysis · 文生图竞技场 — 还是壳：渲染后正文只有 308 个字符
  https://artificialanalysis.ai/text-to-image/arena
- **sora-eol-search**（B/html）OpenAI Sora 停服说明（⚠️ 页面反爬，我们抓不到，内容来自搜索摘要转述） — HTTP 403
  https://help.openai.com/en/articles/20001152-what-to-know-about-the-sora-discontinuation
- **sora-2**（A/html）OpenAI · Sora 2 发布页（⚠️ 对我们的采集器返回 403，本轮未能一手复核） — HTTP 403
  https://openai.com/index/sora-2/

## 有变化

- **kling-api-updates** Kling AI · API 更新日志
- **wan-hf** Hugging Face · Wan-AI 名下仓库
  新增 2 条：Wan-AI/Wan2.2-Animate-2-14B-Diffusers、Wan-AI/Wan2.2-Animate-2-14B-Distilled-Diffusers
- **minimax-blog** MiniMax · 官方博客
- **minimax-hf** Hugging Face · MiniMaxAI 名下仓库
  新增 2 条：MiniMaxAI/MiniMax-H3、MiniMaxAI/MiniMax-Music3
- **epoch-notable** Epoch AI · Notable AI Models（每日）
  新增 1 条：6312 行
- **aa-t2v** Artificial Analysis · 文生视频榜
- **aa-i2v** Artificial Analysis · 图生视频榜
- **hf-v2v** Hugging Face · video-to-video 按下载量
  新增 11 条：Abiray/LTX-2.5-Distilled-GGUF、Lightricks/LTX-2.5、Lightricks/LTX-2.5-22b-IC-LoRA-Pixel-Spatial-Upscaler、Lightricks/LTX-2.5-Diffusers、Lightricks/LTX-2.5-Pre-Trained、comfyicu/LTX-2.5、rzgar/ltx-2.5-22b-distilled-lora-450-enhanced-n4w、stronman/LTX-2.3-fp8、tsolful/LTX_2.5_INT4_W4A8_ConvRot、vantagewithai/LTX-2.5-GGUF、yuvraj108c/LTX-2.5
- **fal-video** fal · 视频模型目录
- **replicate-t2v** Replicate · text-to-video 集合
- **google-models** Google · 全部模型清单
- **apiyi-models** APIYI · 更新日志（API 聚合商）
- **hf-lineage** Hugging Face · 模型公开目录
  新增 100 条：0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF、6block/Qwen3.8-2.4T-A95B-GGUF、Avra98/Sudoku_superposition、B111ue/fcl-vla-functional-support-canary、ClankerResearch/RizzSmooth-2B-Checkpoints、DatPySci/Rubric-Hacking、Frenchbane/ok-id-pro、HungryDino/qwen_2.5_7b-cat_numbers-collapse_p10-run2-gen11、IDEALLab/engiopt-vqgan、Impliedhomeland/cosine-1B-60B-datamatched-resume、Jojocodex/minimax-h3-spatial-physics-lora、Jojocodex/minimax-h3-wushu-action-lora …
- **framepack-gh** GitHub · FramePack
- **fpwrapper-gh** GitHub · ComfyUI-FramePackWrapper
- **latentsync-gh** GitHub · bytedance/LatentSync
- **lswrapper-gh** GitHub · ComfyUI-LatentSyncWrapper
- **float-gh** GitHub · ComfyUI-FLOAT
- **sviflf-gh** GitHub · ComfyUI-Wan-SVI2Pro-FLF
- **flflatent-gh** GitHub · Wan22FirstLastFrameToVideoLatent
- **wanwrapper-gh** GitHub · ComfyUI-WanVideoWrapper
- **comfy-org-hf** Hugging Face · Comfy-Org 官方组织
  新增 40 条：Comfy-Org/Real-ESRGAN_repackaged、Comfy-Org/SCAIL-2、Comfy-Org/SDPose、Comfy-Org/SeedVR2、Comfy-Org/T2I-Adapter_ComfyUI_Repackaged、Comfy-Org/TRELLIS.2、Comfy-Org/USO_1.0_Repackaged、Comfy-Org/Wan-Dancer、Comfy-Org/Wan_2.1_ComfyUI_repackaged、Comfy-Org/Wan_2.2_ComfyUI_Repackaged、Comfy-Org/ace_step_1.5_ComfyUI_files、Comfy-Org/causal_forcing_framewise_ComfyUI_repackaged …
- **ltx-comfy-gh** GitHub · ComfyUI-LTXVideo
- **mpt-gh** GitHub · harry0703/MoneyPrinterTurbo
- **manim-gh** GitHub · ManimCommunity/manim
- **pyvideotrans-gh** GitHub · jianchang512/pyvideotrans
- **duix-gh** GitHub · duixcom/Duix-Avatar
- **fay-gh** GitHub · xszyou/Fay
- **narrato-gh** GitHub · linyqh/NarratoAI
- **zho-wf-gh** GitHub · ZHO-ZHO-ZHO/ComfyUI-Workflows-ZHO
- **echomimic-gh** GitHub · antgroup/echomimic
- **linly-talker-gh** GitHub · Kedreamix/Linly-Talker
- **huobao-gh** GitHub · chatfire-AI/huobao-drama
- **awesome-vd-gh** GitHub · showlab/Awesome-Video-Diffusion
- **openai-models** OpenAI · 官方模型列表
- **gemini-models** Google · Gemini API 官方模型列表
- **hf-image-org** Hugging Face 官方组织 · 出图模型
  新增 469 条：0bserverx/Muse-Glimmer-30B-Heretic-Uncensored-GGUF、0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF、0xKitkat/Qwen3.8-27B-Uncensored-Aggressive、26B-Suite/Plainspeak-Dial-Gemma-4-26B-A4B-BakeVector、AEON-7/Qwen3.6-35B-A3B-heretic-NVFP4、AEON-7/Qwen3.8-27B-AEON-ULTIMATE-UNCENSORED-BF16、ARTPARK-IISc/SraVaani-1.0、AaryanK/Qwen3.5-9B-GGUF、Abiray/MiniMax-Music3-GGUF、Abiray/Qwen3.8-27B-Q4_K_M-GGUF、AesSedai/Motif-3-GGUF、AlayaLab/Evoke …
- **anthropic-models** Anthropic 官方文档 · 模型总览
- **deepseek-docs** DeepSeek 官方 API 文档
- **xai-docs** xAI 官方文档 · 模型清单
- **anthropic-features** Anthropic 官方文档 · Features overview
- **openai-docs** OpenAI 开发者文档 · 指南索引
- **deepseek-pricing** DeepSeek 官方文档 · 模型与价格
- **ark-models** 火山方舟 · 模型列表
- **claude-models** Anthropic · Models overview
- **glm-chat-api** 智谱开放平台 · 对话补全 API
- **claude-deprecations** Anthropic · Model deprecations
- **openai-changelog** OpenAI · API Changelog
- **gemini-changelog** Gemini API · Release notes
- **xai-release-notes** xAI · API Release Notes
- **hf-sound-org** Hugging Face · 官方组织（声音）
  新增 470 条：0bserverx/Muse-Glimmer-30B-Heretic-Uncensored-GGUF、0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF、0xKitkat/Qwen3.8-27B-Uncensored-Aggressive、26B-Suite/Plainspeak-Dial-Gemma-4-26B-A4B-BakeVector、AEON-7/Qwen3.6-35B-A3B-heretic-NVFP4、AEON-7/Qwen3.8-27B-AEON-ULTIMATE-UNCENSORED-BF16、ARTPARK-IISc/SraVaani-1.0、AaryanK/Qwen3.5-9B-GGUF、Abiray/MiniMax-Music3-GGUF、Abiray/Qwen3.8-27B-Q4_K_M-GGUF、AesSedai/Motif-3-GGUF、AlayaLab/Evoke …
- **s-e2ab-gh** GitHub · DrewThomasson/ebook2audiobook
- **s-abogen-gh** GitHub · denizsafak/abogen
- **s-epub2tts-gh** GitHub · aedocw/epub2tts
- **s-abcreator-gh** GitHub · prakharsr/audiobook-creator
- **s-pvt-gh** GitHub · jianchang512/pyvideotrans
- **s-smartsub-gh** GitHub · buxuku/SmartSub
- **s-pipecat-gh** GitHub · pipecat-ai/pipecat
- **s-livekit-gh** GitHub · livekit/agents
- **s-hfs2s-gh** GitHub · huggingface/speech-to-speech
- **s-moshi-gh** GitHub · kyutai-labs/moshi
- **s-acestep15-gh** GitHub · ace-step/ACE-Step-1.5
- **s-acestep-gh** GitHub · ace-step/ACE-Step
- **s-yue-gh** GitHub · multimodal-art-projection/YuE
- **s-audiocraft-gh** GitHub · facebookresearch/audiocraft
- **s-gptsovits-gh** GitHub · RVC-Boss/GPT-SoVITS
- **s-rvc-gh** GitHub · RVC-Project/Retrieval-based-Voice-Conversion-WebUI
- **s-fishspeech-gh** GitHub · fishaudio/fish-speech
- **s-indextts-gh** GitHub · index-tts/index-tts
- **s-cosyvoice-gh** GitHub · QwenAudio/CosyVoice
- **s-f5tts-gh** GitHub · SWivid/F5-TTS
- **s-qwen3omni-gh** GitHub · QwenLM/Qwen3-Omni

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 无变化 |
| seed-models | S | html | 未到期（上次 2026-08-12） |
| kling-api-updates | S | spa | 变了 |
| kling-site | S | spa | 未到期（上次 2026-08-07） |
| google-video-docs | S | html | 无变化 |
| deepmind-veo | S | html | 未到期（上次 2026-08-12） |
| vertex-video-ref | S | html | 未到期（上次 2026-08-12） |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 无变化 |
| wan-hf | S | json | 变了 |
| minimax-blog | S | html | 变了 |
| minimax-hf | S | json | 变了 |
| runway-research | S | html | 未到期（上次 2026-08-12） |
| luma-site | S | html | 未到期（上次 2026-08-12） |
| vidu-changelog | S | spa | 无变化 |
| vidu-model-map | S | spa | 无变化 |
| vidu-function-list | S | spa | 无变化 |
| vidu-site | S | html | 未到期（上次 2026-08-12） |
| vidu-s1-gh | S | json | 未到期（上次 2026-08-12） |
| pika-site | S | html | 未到期（上次 2026-08-12） |
| higgsfield-site | S | html | 未到期（上次 2026-08-12） |
| decart-research | S | html | 未到期（上次 2026-08-12） |
| arxiv-video | S | atom | 抓不到（HTTP 429） |
| epoch-notable | A | csv | 变了 |
| aa-t2v | A | spa | 变了 |
| aa-i2v | A | spa | 变了 |
| hf-t2v | A | json | 未到期（上次 2026-08-18） |
| hf-i2v | A | json | 未到期（上次 2026-08-18） |
| hf-v2v | A | json | 变了 |
| fal-video | S | spa | 变了 |
| replicate-t2v | S | html | 变了 |
| aiwiki | B | spa | 未到期（上次 2026-08-12） |
| futurepedia | B | html | 未到期（上次 2026-08-12） |
| comfyui-releases | C | json | 未到期（上次 2026-08-12） |
| capcut-templates | C | html | 未到期（上次 2026-08-12） |
| picsart-effects | C | html | 未到期（上次 2026-08-12） |
| runway-changelog | S | spa | 无变化 |
| runway-models | S | spa | 无变化 |
| luma-changelog | S | spa | 未到期（上次 2026-08-07） |
| google-models | S | html | 变了 |
| seed-models-hub | S | html | 无变化 |
| apiyi-models | S | spa | 变了 |
| arxiv-worldmodel | S | atom | 抓不到（HTTP 429） |
| techcrunch-ai | B | atom | 未到期（上次 2026-08-18） |
| decart-blog | S | spa | 无变化 |
| ltx-gh | S | json | 无变化 |
| ltx-hf-org | S | json | 未到期（上次 2026-08-18） |
| decart-site | S | spa | 未到期（上次 2026-08-14） |
| picsart-video | C | html | 未到期（上次 2026-08-12） |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 未到期（上次 2026-08-12） |
| hailuo-video | S | html | 未到期（上次 2026-08-12） |
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
| comfy-docs | S | spa | 未到期（上次 2026-08-12） |
| h3-card | S | html | 未到期（上次 2026-08-12） |
| hf-lineage | S | json | 变了 |
| vacetools-gh | C | json | 无变化 |
| framepack-gh | S | json | 变了 |
| fpwrapper-gh | C | json | 变了 |
| latentsync-gh | S | json | 变了 |
| lswrapper-gh | C | json | 变了 |
| float-gh | C | json | 变了 |
| sviflf-gh | C | json | 变了 |
| flflatent-gh | C | json | 变了 |
| mm-blog | S | html | 未到期（上次 2026-08-12） |
| wanwrapper-gh | C | json | 变了 |
| comfy-org-hf | S | json | 变了 |
| ltx-comfy-gh | S | json | 变了 |
| mpt-gh | C | json | 变了 |
| manim-gh | C | json | 变了 |
| pyvideotrans-gh | C | json | 变了 |
| duix-gh | C | json | 变了 |
| fay-gh | C | json | 变了 |
| narrato-gh | C | json | 变了 |
| zho-wf-gh | C | json | 变了 |
| echomimic-gh | C | json | 变了 |
| linly-talker-gh | C | json | 变了 |
| animate-anything-gh | C | json | 无变化 |
| huobao-gh | C | json | 变了 |
| awesome-vd-gh | C | json | 变了 |
| seedream-page | S | html | 未到期（上次 2026-08-12） |
| openai-models | S | html | 变了 |
| gemini-models | S | html | 变了 |
| google-gemini-blog | S | html | 未到期（上次 2026-08-12） |
| azure-foundry-blog | B | html | 未到期（上次 2026-08-12） |
| recraft-blog | S | html | 未到期（上次 2026-08-12） |
| kolors-gh | S | html | 未到期（上次 2026-08-12） |
| krea-blog | S | html | 未到期（上次 2026-08-12） |
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
| google-nb-blog | S | html | 未到期（上次 2026-08-12） |
| ms-foundry-blog | B | html | 未到期（上次 2026-08-12） |
| hf-image-org | S | json | 变了 |
| mj-updates | S | html | 未到期（上次 2026-08-12） |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 308 个字符） |
| hf-t2i | A | json | 未到期（上次 2026-08-18） |
| hf-i2i | A | json | 未到期（上次 2026-08-18） |
| anthropic-models | S | html | 变了 |
| deepseek-docs | S | html | 变了 |
| xai-docs | S | html | 变了 |
| doubao-force-2026 | B | html | 未到期（上次 2026-08-12） |
| hf-text-org | S | json | 未到期（上次 2026-08-18） |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 未到期（上次 2026-08-12） |
| glm-api | S | html | 未到期（上次 2026-08-12） |
| minimax-platform | S | html | 未到期（上次 2026-08-12） |
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
| anthropic-features | S | html | 变了 |
| openai-docs | S | html | 变了 |
| deepseek-pricing | S | html | 变了 |
| bailian-models | S | html | 无变化 |
| kimi-pricing | S | html | 未到期（上次 2026-08-12） |
| glm-52-doc | S | html | 未到期（上次 2026-08-12） |
| kimi-websearch | S | html | 未到期（上次 2026-08-12） |
| kimi-chat-api | S | html | 未到期（上次 2026-08-12） |
| bailian-websearch | S | html | 未到期（上次 2026-08-12） |
| glm-websearch | S | html | 未到期（上次 2026-08-12） |
| bailian-coder | S | html | 未到期（上次 2026-08-12） |
| ark-models | S | spa | 变了 |
| minimax-api-overview | S | spa | 无变化 |
| claude-models | S | html | 变了 |
| openai-caching | S | html | 未到期（上次 2026-08-12） |
| openai-structured | S | html | 未到期（上次 2026-08-12） |
| deepseek-chat-api | S | html | 未到期（上次 2026-08-12） |
| gemini-audio | S | spa | 未到期（上次 2026-08-12） |
| gemini-vision | S | spa | 未到期（上次 2026-08-12） |
| minimax-anthropic-api | S | spa | 未到期（上次 2026-08-12） |
| minimax-openai-api | S | spa | 未到期（上次 2026-08-12） |
| minimax-server-tools | S | spa | 未到期（上次 2026-08-12） |
| minimax-caching | S | spa | 未到期（上次 2026-08-12） |
| minimax-openapi | S | json | 无变化 |
| gemini-computer-use | S | spa | 未到期（上次 2026-08-12） |
| ark-pricing | S | spa | 未到期（上次 2026-08-12） |
| bailian-models-zh | S | spa | 无变化 |
| glm-batch | S | html | 无变化 |
| glm-chat-api | S | html | 变了 |
| claude-deprecations | S | html | 变了 |
| openai-changelog | S | spa | 变了 |
| gemini-changelog | S | spa | 变了 |
| xai-release-notes | S | html | 变了 |
| aa-llm | B | spa | 未到期（上次 2026-08-12） |
| ideogram-api | S | html | 未到期（上次 2026-08-12） |
| elevenlabs-models | S | html | 未到期（上次 2026-08-12） |
| openai-realtime | S | html | 未到期（上次 2026-08-12） |
| gemini-tts | S | html | 未到期（上次 2026-08-12） |
| elevenlabs-tts | S | html | 未到期（上次 2026-08-12） |
| bailian-omni | S | html | 未到期（上次 2026-08-12） |
| elevenlabs-remix | S | html | 未到期（上次 2026-08-12） |
| openai-tts | S | html | 未到期（上次 2026-08-12） |
| gemini-music | S | html | 未到期（上次 2026-08-12） |
| glm-tts-doc | S | html | 未到期（上次 2026-08-12） |
| glm-tts-clone-doc | S | html | 未到期（上次 2026-08-12） |
| glm-voice-doc | S | html | 未到期（上次 2026-08-12） |
| xai-voice | S | html | 未到期（上次 2026-08-12） |
| hf-sound-org | S | json | 变了 |
| kokoro-card | S | html | 未到期（上次 2026-08-12） |
| xai-models | S | html | 未到期（上次 2026-08-12） |
| mistral-models | S | html | 未到期（上次 2026-08-12） |
| mistral-tools | S | html | 未到期（上次 2026-08-12） |
| mistral-vision | S | html | 未到期（上次 2026-08-12） |
| fish-s2pro-card | S | html | 未到期（上次 2026-08-12） |
| cosyvoice-card | S | html | 未到期（上次 2026-08-12） |
| llama-card | S | html | 未到期（上次 2026-08-12） |
| elevenlabs-voices | S | html | 未到期（上次 2026-08-12） |
| wan-t2v-card | S | html | 未到期（上次 2026-08-12） |
| minimax-release | S | spa | 无变化 |
| s-e2ab-gh | C | json | 变了 |
| s-abogen-gh | C | json | 变了 |
| s-epub2tts-gh | C | json | 变了 |
| s-abcreator-gh | C | json | 变了 |
| s-pvt-gh | C | json | 变了 |
| s-smartsub-gh | C | json | 变了 |
| s-youdub-gh | C | json | 无变化 |
| s-pipecat-gh | C | json | 变了 |
| s-livekit-gh | C | json | 变了 |
| s-hfs2s-gh | C | json | 变了 |
| s-moshi-gh | C | json | 变了 |
| s-acestep15-gh | C | json | 变了 |
| s-acestep-gh | C | json | 变了 |
| s-yue-gh | C | json | 变了 |
| s-audiocraft-gh | C | json | 变了 |
| s-gptsovits-gh | C | json | 变了 |
| s-rvc-gh | C | json | 变了 |
| s-fishspeech-gh | C | json | 变了 |
| s-indextts-gh | C | json | 变了 |
| s-cosyvoice-gh | C | json | 变了 |
| s-f5tts-gh | C | json | 变了 |
| s-qwen3omni-gh | C | json | 变了 |
| ideogram-overview | A | html | 未到期（上次 2026-08-12） |
| ideogram-v4-remix | A | html | 未到期（上次 2026-08-12） |
| ideogram-v3-inpaint | A | html | 未到期（上次 2026-08-12） |
| ideogram-v3-reframe | A | html | 未到期（上次 2026-08-12） |
| ideogram-v3-generate | A | html | 未到期（上次 2026-08-12） |
| ideogram-edit | A | html | 未到期（上次 2026-08-12） |
| ideogram-upscale | A | html | 未到期（上次 2026-08-12） |
| ideogram-hf | A | html | 未到期（上次 2026-08-12） |
| bailian-qimg3 | A | html | 未到期（上次 2026-08-12） |
| bailian-qimg | A | html | 未到期（上次 2026-08-12） |
| bailian-textgen-zh | A | html | 未到期（上次 2026-08-12） |
| bailian-thinking-zh | A | html | 未到期（上次 2026-08-12） |
| bailian-cache-zh | A | html | 未到期（上次 2026-08-12） |
| bailian-batch-zh | A | html | 未到期（上次 2026-08-12） |
| bailian-websearch-zh | A | html | 未到期（上次 2026-08-12） |
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
| recraft-endpoints | A | html | 未到期（上次 2026-08-13） |
| recraft-nl-edit | A | html | 未到期（上次 2026-08-13） |
| hunyuan-image-hf | A | json | 未到期（上次 2026-08-13） |
| bfl-flux2-overview | A | html | 未到期（上次 2026-08-13） |
| bfl-flux2-multiref | A | html | 未到期（上次 2026-08-15） |
| ark-seedream-api | A | spa | 未到期（上次 2026-08-13） |
| arxiv-fp8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-int8 | A | html | 未到期（上次 2026-08-13） |
| arxiv-qlora | A | html | 未到期（上次 2026-08-13） |
| arxiv-gptq | A | html | 未到期（上次 2026-08-13） |
| arxiv-awq | A | html | 未到期（上次 2026-08-13） |
| arxiv-lora | A | html | 未到期（上次 2026-08-13） |
| hf-gguf-doc | A | html | 未到期（上次 2026-08-13） |
| hf-diffusers-memory | A | html | 未到期（上次 2026-08-13） |
| zimage-gh | A | html | 未到期（上次 2026-08-15） |
| hunyuan-image-gh | A | html | 未到期（上次 2026-08-15） |
| skyreels-gh | A | html | 未到期（上次 2026-08-15） |
| bfl-flux3 | A | html | 未到期（上次 2026-08-14） |
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
| hf-hunyuan3d-21 | S | html | 未到期（上次 2026-08-14） |
| tripo-docs-generation | S | spa | 未到期（上次 2026-08-14） |
| meshy-docs-api | S | spa | 未到期（上次 2026-08-14） |
| meshy-site | S | spa | 未到期（上次 2026-08-14） |
| rodin-api-docs | S | html | 未到期（上次 2026-08-14） |
| gh-trellis | S | html | 未到期（上次 2026-08-14） |
| seed3d-page | S | spa | 从未抓过 |
| stability-spar3d | S | html | 未到期（上次 2026-08-14） |
| tripo-site | S | spa | 未到期（上次 2026-08-14） |
| rodin-site | S | spa | 未到期（上次 2026-08-14） |
| tripo-docs-animation | S | spa | 未到期（上次 2026-08-14） |
| gh-hunyuan3d-buffalo | S | html | 未到期（上次 2026-08-14） |
| replicate-hunyuan3d-31 | A | spa | 未到期（上次 2026-08-14） |
| replicate-3d | A | spa | 未到期（上次 2026-08-14） |
| hf-image-to-3d | A | spa | 未到期（上次 2026-08-14） |
| comfy-3d-hunyuan | S | html | 未到期（上次 2026-08-14） |
| gh-hunyuan3d-21 | S | html | 未到期（上次 2026-08-14） |
| gh-hunyuan3d-part | S | html | 未到期（上次 2026-08-14） |
| gh-spar3d | S | html | 未到期（上次 2026-08-14） |
| gh-triposg | S | html | 未到期（上次 2026-08-14） |
| gh-instantmesh | S | html | 未到期（上次 2026-08-14） |
| modelscope-orgs | S | json | 从未抓过 |
| hf-wan-vace | S | html | 未到期（上次 2026-08-14） |
| hf-ltx-25 | S | html | 未到期（上次 2026-08-14） |
| meshy-changelog | S | spa | 未到期（上次 2026-08-14） |
| hf-instantmesh | S | html | 未到期（上次 2026-08-14） |
| hf-apple-sharp | S | html | 未到期（上次 2026-08-14） |
| gh-hunyuan3d-api | S | html | 未到期（上次 2026-08-14） |
| hf-anysplat | S | html | 未到期（上次 2026-08-14） |
| arxiv-seed3d-20 | S | html | 未到期（上次 2026-08-14） |
| arxiv-seed3d-10 | S | html | 未到期（上次 2026-08-14） |
| hf-trellis2 | S | html | 未到期（上次 2026-08-14） |
| pixverse-caps | S | html | 未到期（上次 2026-08-15） |
| pixverse-v6 | S | html | 未到期（上次 2026-08-15） |
| pixverse-fusion | S | html | 未到期（上次 2026-08-15） |
| hf-cogvideox | S | html | 未到期（上次 2026-08-15） |
| hf-i2vgen | S | html | 未到期（上次 2026-08-15） |
| hf-longcat-edit | S | html | 未到期（上次 2026-08-15） |
| hf-magi | S | html | 未到期（上次 2026-08-15） |
| heygen-docs | S | spa | 未到期（上次 2026-08-15） |
| synthesia-docs | S | spa | 未到期（上次 2026-08-15） |
| hf-longcat-avatar | S | html | 未到期（上次 2026-08-15） |
| hf-hunyuan-avatar | S | html | 未到期（上次 2026-08-15） |
| hf-liveportrait | S | html | 未到期（上次 2026-08-15） |
| hf-musetalk | S | html | 未到期（上次 2026-08-15） |
| hf-hallo2 | S | html | 未到期（上次 2026-08-15） |
| replicate-lipsync | A | spa | 未到期（上次 2026-08-15） |
| comfy-s2v | S | html | 未到期（上次 2026-08-15） |
| heygen-translate | S | html | 未到期（上次 2026-08-15） |
| heygen-live | S | html | 未到期（上次 2026-08-15） |
| heygen-photo | S | html | 未到期（上次 2026-08-15） |
| heygen-training | S | html | 未到期（上次 2026-08-15） |
| heygen-changelog | S | html | 未到期（上次 2026-08-15） |
| hf-hallo-live | S | html | 未到期（上次 2026-08-15） |
| hf-longcat-avatar-10 | S | html | 未到期（上次 2026-08-15） |
| gh-video-retalking | S | html | 未到期（上次 2026-08-15） |
| elevenlabs-changelog | S | html | 未到期（上次 2026-08-15） |
| hf-glm-voice | S | html | 未到期（上次 2026-08-15） |
| hf-glm-tts | S | html | 未到期（上次 2026-08-15） |
| openai-model-tts | S | spa | 未到期（上次 2026-08-15） |
| openai-model-realtime | S | spa | 未到期（上次 2026-08-15） |
| elevenlabs-docs | S | html | 未到期（上次 2026-08-15） |
| gemini-robotics-er | S | html | 未到期（上次 2026-08-14） |
| figure-helix | A | html | 未到期（上次 2026-08-14） |
| pi-pi05-blog | A | html | 未到期（上次 2026-08-14） |
| pi-openpi-gh | A | html | 未到期（上次 2026-08-15） |
| nvidia-groot-gh | A | html | 未到期（上次 2026-08-15） |
| openvla-gh | A | html | 未到期（上次 2026-08-15） |
| openvla-repo | A | html | 未到期（上次 2026-08-15） |
| hf-robotics | B | json | 未到期（上次 2026-08-14） |
| lerobot-gh | A | json | 未到期（上次 2026-08-14） |
| groot-policy-doc | A | html | 未到期（上次 2026-08-14） |
| rynnbrain-card | A | html | 未到期（上次 2026-08-14） |
| maniskill-gh | B | json | 未到期（上次 2026-08-14） |
| cosmos3-card | S | html | 未到期（上次 2026-08-14） |
| genie3-blog | A | html | 未到期（上次 2026-08-14） |
| odyssey-site | A | html | 未到期（上次 2026-08-14） |
| worldlabs-marble | A | html | 未到期（上次 2026-08-14） |
| matrixgame-card | A | html | 未到期（上次 2026-08-14） |
| hunyuanworld-gh | A | html | 未到期（上次 2026-08-14） |
| wham-card | A | html | 未到期（上次 2026-08-14） |
| vjepa2-blog | A | html | 未到期（上次 2026-08-14） |
| vjepa2-card | B | html | 未到期（上次 2026-08-14） |
| sci-boltz-gh | A | html | 未到期（上次 2026-08-15） |
| sci-af3-blog | A | html | 未到期（上次 2026-08-15） |
| sci-esm2-card | B | html | 未到期（上次 2026-08-15） |
| sci-wn-gh | A | html | 未到期（上次 2026-08-15） |
| sci-aurora-gh | A | html | 未到期（上次 2026-08-15） |
| sci-neuralgcm-gh | A | html | 未到期（上次 2026-08-15） |
| sci-mattergen-gh | A | html | 未到期（上次 2026-08-15） |
| sci-mace-gh | A | html | 未到期（上次 2026-08-15） |
| sci-gnome-gh | A | html | 未到期（上次 2026-08-15） |
| kling-api | A | html | 未到期（上次 2026-08-15） |
| seed-25 | A | html | 未到期（上次 2026-08-15） |
| veo-doc | A | html | 未到期（上次 2026-08-15） |
| sora-eol-search | B | html | 抓不到（HTTP 403） |
| sora-api | A | html | 未到期（上次 2026-08-15） |
| sora-2 | A | html | 抓不到（HTTP 403） |
| wan-site | A | html | 未到期（上次 2026-08-15） |
| mm-hf-api | A | json | 未到期（上次 2026-08-15） |
| vidu-fl | A | html | 未到期（上次 2026-08-15） |
| vidu-up | A | html | 未到期（上次 2026-08-15） |
| vidu-mm | A | html | 未到期（上次 2026-08-15） |
| rw-changelog | A | html | 未到期（上次 2026-08-15） |
| vidu-s1-paper | A | html | 未到期（上次 2026-08-15） |
| omni-doc | A | html | 未到期（上次 2026-08-15） |
| g-video | A | html | 未到期（上次 2026-08-15） |
| ltx-hf-23 | A | html | 未到期（上次 2026-08-15） |
| aa-board | B | html | 未到期（上次 2026-08-15） |
| gemini-image-docs | A | html | 未到期（上次 2026-08-15） |
| openai-image-docs | A | html | 未到期（上次 2026-08-15） |
| recraft-docs | A | html | 未到期（上次 2026-08-15） |
| bfl-docs | A | html | 未到期（上次 2026-08-15） |
| zimage-card | A | html | 未到期（上次 2026-08-15） |
| hunyuan-image-card | A | html | 未到期（上次 2026-08-15） |
| smolvla-card | A | html | 未到期（上次 2026-08-15） |
| molmoact-card | A | html | 未到期（上次 2026-08-15） |
| hf-whisper | A | html | 未到期（上次 2026-08-15） |
| hf-sensevoice | A | html | 未到期（上次 2026-08-15） |
| hf-qwen3-asr | A | html | 未到期（上次 2026-08-15） |
| minimax-release-notes | A | html | 未到期（上次 2026-08-15） |
| seed-blog-1_5 | A | html | 未到期（上次 2026-08-15） |
| seed-blog-2_0 | A | html | 未到期（上次 2026-08-15） |
| ideogram-x | A | html | 未到期（上次 2026-08-15） |

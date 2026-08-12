# 信息源监视报告 · 2026-08-12

本次检查 284 个到期源（共 288 个）：变化 17 · 首次 0 · 无变化 263 · **抓不到 4**

> 这份报告是给人看的那 20 条待办的来源（§59.3 的负反馈：人每周要看的条目 ≤ 20）。
> 「抓不到」不是失败，是**信息本身** —— 一个长期抓不到的官方源，说明那家厂商没有可 diff 的公开更新入口，
> 而那正好解释了为什么它名下的格子质量最差。

## 抓到了但没内容（比抓不到更危险 —— 它不会喊）

（无）

## 抓不到（要处理）

- **kling-site**（S/spa）Kling AI 官网 — 还是壳：渲染后正文只有 232 个字符
  https://klingai.com/
- **luma-changelog**（S/spa）Luma · Changelog — 还是壳：渲染后正文只有 273 个字符
  https://docs.lumalabs.ai/changelog
- **ms-foundry-blog**（B/html）Microsoft Foundry 博客 — HTTP 502
  https://techcommunity.microsoft.com/category/azure-ai-foundry-blog
- **aa-t2i**（A/spa）Artificial Analysis · 文生图竞技场 — 还是壳：渲染后正文只有 308 个字符
  https://artificialanalysis.ai/text-to-image/arena

## 有变化

- **replicate-t2v** Replicate · text-to-video 集合
- **aiwiki** AI Wiki
- **capcut-templates** CapCut 模板
- **hf-lineage** Hugging Face · 模型公开目录
  新增 100 条：Abhigyan123/qwen3vl-arogyabodha-1500、Abiray/LTX-2.5-Distilled-GGUF、Alexszz12/LoraAlex123321、BRICKEDdD/Muse-Bricked-30B-LoRA、Banaxi-Tech/pico-test、BlueShark1214/koth-miner-ev4、Coffiee-new/jac-91cdcd0d、DavePiv/plover-paragraph-cv5、IDEALLab/engiopt-constrained-plvae-2d、Indexnusrefather/Super-Slop-Machina-Macro-Roleplay-Instruct-350M-0812、Indexnusrefather/Super-Slop-Machina-Micro-Roleplay-Instruct-750M-v1-0812、Indexnusrefather/Super-Slop-Machina-Roleplay-1.2b-V4-ERP-Tolerant-it …
- **mpt-gh** GitHub · harry0703/MoneyPrinterTurbo
- **manim-gh** GitHub · ManimCommunity/manim
- **duix-gh** GitHub · duixcom/Duix-Avatar
- **hf-pixelart-lora** Hugging Face · nerijs/pixel-art-xl
- **hf-image-org** Hugging Face 官方组织 · 出图模型
  新增 8 条：Abiray/LTX-2.5-Distilled-GGUF、ArliAI/GLM-4.6-Derestricted-v3、Comfy-Org/flux2-dev、DavidAU/OpenAi-GPT-oss-20b-HERETIC-uncensored-NEO-Imatrix-gguf、microsoft/VibeVoice-Realtime-0.5B、mistralai/Voxtral-4B-TTS-2603、nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16、tencent/HunyuanVideo-1.5
- **hf-text-org** Hugging Face 官方组织 · 文本模型
  新增 8 条：Abiray/LTX-2.5-Distilled-GGUF、ArliAI/GLM-4.6-Derestricted-v3、Comfy-Org/flux2-dev、DavidAU/OpenAi-GPT-oss-20b-HERETIC-uncensored-NEO-Imatrix-gguf、microsoft/VibeVoice-Realtime-0.5B、mistralai/Voxtral-4B-TTS-2603、nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16、tencent/HunyuanVideo-1.5
- **hf-sound-org** Hugging Face · 官方组织（声音）
  新增 7 条：Abiray/LTX-2.5-Distilled-GGUF、ArliAI/GLM-4.6-Derestricted-v3、Comfy-Org/flux2-dev、microsoft/VibeVoice-Realtime-0.5B、nvidia/NVIDIA-Nemotron-3-Nano-30B-A3B-BF16、tencent/HunyuanVideo-1.5、unsloth/Devstral-Small-2-24B-Instruct-2512-GGUF
- **s-hfs2s-gh** GitHub · huggingface/speech-to-speech
- **s-acestep15-gh** GitHub · ace-step/ACE-Step-1.5
- **s-audiocraft-gh** GitHub · facebookresearch/audiocraft
- **s-gptsovits-gh** GitHub · RVC-Boss/GPT-SoVITS
- **s-indextts-gh** GitHub · index-tts/index-tts
- **s-cosyvoice-gh** GitHub · QwenAudio/CosyVoice

## 全部

| 源 | 权威 | 类型 | 状态 |
|---|---|---|---|
| seed-blog | S | html | 无变化 |
| seed-models | S | html | 无变化 |
| kling-api-updates | S | spa | 无变化 |
| kling-site | S | spa | 抓不到（还是壳：渲染后正文只有 232 个字符） |
| google-video-docs | S | html | 无变化 |
| deepmind-veo | S | html | 无变化 |
| vertex-video-ref | S | html | 无变化 |
| openai-sora-eol | S | spa | 未到期（上次 2026-08-12） |
| openai-sora-2 | S | spa | 从未抓过 |
| wan-gh-releases | S | json | 无变化 |
| wan-hf | S | json | 无变化 |
| minimax-blog | S | html | 无变化 |
| minimax-hf | S | json | 无变化 |
| runway-research | S | html | 无变化 |
| luma-site | S | html | 无变化 |
| vidu-changelog | S | spa | 无变化 |
| vidu-model-map | S | spa | 无变化 |
| vidu-function-list | S | spa | 无变化 |
| vidu-site | S | html | 无变化 |
| vidu-s1-gh | S | json | 无变化 |
| pika-site | S | html | 无变化 |
| higgsfield-site | S | html | 无变化 |
| decart-research | S | html | 无变化 |
| arxiv-video | S | atom | 无变化 |
| epoch-notable | A | csv | 无变化 |
| aa-t2v | A | spa | 无变化 |
| aa-i2v | A | spa | 无变化 |
| hf-t2v | A | json | 无变化 |
| hf-i2v | A | json | 无变化 |
| hf-v2v | A | json | 无变化 |
| fal-video | S | spa | 无变化 |
| replicate-t2v | S | html | 变了 |
| aiwiki | B | spa | 变了 |
| futurepedia | B | html | 无变化 |
| comfyui-releases | C | json | 无变化 |
| capcut-templates | C | html | 变了 |
| picsart-effects | C | html | 无变化 |
| runway-changelog | S | spa | 无变化 |
| runway-models | S | spa | 无变化 |
| luma-changelog | S | spa | 抓不到（还是壳：渲染后正文只有 273 个字符） |
| google-models | S | html | 无变化 |
| seed-models-hub | S | html | 无变化 |
| apiyi-models | S | spa | 无变化 |
| arxiv-worldmodel | S | atom | 无变化 |
| techcrunch-ai | B | atom | 无变化 |
| decart-blog | S | spa | 无变化 |
| ltx-gh | S | json | 无变化 |
| ltx-hf-org | S | json | 无变化 |
| decart-site | S | spa | 无变化 |
| picsart-video | C | html | 无变化 |
| libtv | C | spa | 从未抓过 |
| dreamina | S | html | 无变化 |
| hailuo-video | S | html | 无变化 |
| volcengine-ark-price | S | spa | 无变化 |
| minimax-price | S | spa | 无变化 |
| google-ai-price | S | html | 无变化 |
| bailian-price | S | spa | 无变化 |
| runway-price | S | spa | 无变化 |
| kling-price | S | spa | 无变化 |
| vidu-price | S | spa | 无变化 |
| fal-ltx-price | S | spa | 无变化 |
| replicate-price | A | html | 无变化 |
| hf-course | S | html | 无变化 |
| comfy-docs | S | spa | 无变化 |
| h3-card | S | html | 无变化 |
| hf-lineage | S | json | 变了 |
| vacetools-gh | C | json | 无变化 |
| framepack-gh | S | json | 无变化 |
| fpwrapper-gh | C | json | 无变化 |
| latentsync-gh | S | json | 无变化 |
| lswrapper-gh | C | json | 无变化 |
| float-gh | C | json | 无变化 |
| sviflf-gh | C | json | 无变化 |
| flflatent-gh | C | json | 无变化 |
| mm-blog | S | html | 无变化 |
| wanwrapper-gh | C | json | 无变化 |
| comfy-org-hf | S | json | 无变化 |
| ltx-comfy-gh | S | json | 无变化 |
| mpt-gh | C | json | 变了 |
| manim-gh | C | json | 变了 |
| pyvideotrans-gh | C | json | 无变化 |
| duix-gh | C | json | 变了 |
| fay-gh | C | json | 无变化 |
| narrato-gh | C | json | 无变化 |
| zho-wf-gh | C | json | 无变化 |
| echomimic-gh | C | json | 无变化 |
| linly-talker-gh | C | json | 无变化 |
| animate-anything-gh | C | json | 无变化 |
| huobao-gh | C | json | 无变化 |
| awesome-vd-gh | C | json | 无变化 |
| seedream-page | S | html | 无变化 |
| openai-models | S | html | 无变化 |
| gemini-models | S | html | 无变化 |
| google-gemini-blog | S | html | 无变化 |
| azure-foundry-blog | B | html | 无变化 |
| recraft-blog | S | html | 无变化 |
| kolors-gh | S | html | 无变化 |
| krea-blog | S | html | 无变化 |
| wiki-midjourney | B | html | 无变化 |
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
| fastai-course | S | html | 无变化 |
| dreamtextures-gh | S | json | 无变化 |
| char2d-gh | S | json | 无变化 |
| hf-pixelart-lora | S | json | 变了 |
| google-nb-blog | S | html | 无变化 |
| ms-foundry-blog | B | html | 抓不到（HTTP 502） |
| hf-image-org | S | json | 变了 |
| mj-updates | S | html | 无变化 |
| aa-t2i | A | spa | 抓不到（还是壳：渲染后正文只有 308 个字符） |
| hf-t2i | A | json | 无变化 |
| hf-i2i | A | json | 无变化 |
| anthropic-models | S | html | 无变化 |
| deepseek-docs | S | html | 无变化 |
| xai-docs | S | html | 无变化 |
| doubao-force-2026 | B | html | 无变化 |
| hf-text-org | S | json | 变了 |
| wan3-qbitai | B | spa | 从未抓过 |
| kimi-api | S | html | 无变化 |
| glm-api | S | html | 无变化 |
| minimax-platform | S | html | 无变化 |
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
| anthropic-features | S | html | 无变化 |
| openai-docs | S | html | 无变化 |
| deepseek-pricing | S | html | 无变化 |
| bailian-models | S | html | 无变化 |
| kimi-pricing | S | html | 无变化 |
| glm-52-doc | S | html | 无变化 |
| kimi-websearch | S | html | 无变化 |
| kimi-chat-api | S | html | 无变化 |
| bailian-websearch | S | html | 无变化 |
| glm-websearch | S | html | 无变化 |
| bailian-coder | S | html | 无变化 |
| ark-models | S | spa | 无变化 |
| minimax-api-overview | S | spa | 无变化 |
| claude-models | S | html | 无变化 |
| openai-caching | S | html | 无变化 |
| openai-structured | S | html | 无变化 |
| deepseek-chat-api | S | html | 无变化 |
| gemini-audio | S | spa | 无变化 |
| gemini-vision | S | spa | 无变化 |
| minimax-anthropic-api | S | spa | 无变化 |
| minimax-openai-api | S | spa | 无变化 |
| minimax-server-tools | S | spa | 无变化 |
| minimax-caching | S | spa | 无变化 |
| minimax-openapi | S | json | 无变化 |
| gemini-computer-use | S | spa | 无变化 |
| ark-pricing | S | spa | 无变化 |
| bailian-models-zh | S | spa | 无变化 |
| glm-batch | S | html | 无变化 |
| glm-chat-api | S | html | 无变化 |
| claude-deprecations | S | html | 无变化 |
| openai-changelog | S | spa | 无变化 |
| gemini-changelog | S | spa | 无变化 |
| xai-release-notes | S | html | 无变化 |
| aa-llm | B | spa | 无变化 |
| ideogram-api | S | html | 无变化 |
| elevenlabs-models | S | html | 无变化 |
| openai-realtime | S | html | 无变化 |
| gemini-tts | S | html | 无变化 |
| elevenlabs-tts | S | html | 无变化 |
| bailian-omni | S | html | 无变化 |
| elevenlabs-remix | S | html | 无变化 |
| openai-tts | S | html | 无变化 |
| gemini-music | S | html | 无变化 |
| glm-tts-doc | S | html | 无变化 |
| glm-tts-clone-doc | S | html | 无变化 |
| glm-voice-doc | S | html | 无变化 |
| xai-voice | S | html | 无变化 |
| hf-sound-org | S | json | 变了 |
| kokoro-card | S | html | 无变化 |
| xai-models | S | html | 无变化 |
| mistral-models | S | html | 无变化 |
| mistral-tools | S | html | 无变化 |
| mistral-vision | S | html | 无变化 |
| fish-s2pro-card | S | html | 无变化 |
| cosyvoice-card | S | html | 无变化 |
| llama-card | S | html | 无变化 |
| elevenlabs-voices | S | html | 无变化 |
| wan-t2v-card | S | html | 无变化 |
| minimax-release | S | spa | 无变化 |
| s-e2ab-gh | C | json | 无变化 |
| s-abogen-gh | C | json | 无变化 |
| s-epub2tts-gh | C | json | 无变化 |
| s-abcreator-gh | C | json | 无变化 |
| s-pvt-gh | C | json | 无变化 |
| s-smartsub-gh | C | json | 无变化 |
| s-youdub-gh | C | json | 无变化 |
| s-pipecat-gh | C | json | 无变化 |
| s-livekit-gh | C | json | 无变化 |
| s-hfs2s-gh | C | json | 变了 |
| s-moshi-gh | C | json | 无变化 |
| s-acestep15-gh | C | json | 变了 |
| s-acestep-gh | C | json | 无变化 |
| s-yue-gh | C | json | 无变化 |
| s-audiocraft-gh | C | json | 变了 |
| s-gptsovits-gh | C | json | 变了 |
| s-rvc-gh | C | json | 无变化 |
| s-fishspeech-gh | C | json | 无变化 |
| s-indextts-gh | C | json | 变了 |
| s-cosyvoice-gh | C | json | 变了 |
| s-f5tts-gh | C | json | 无变化 |
| s-qwen3omni-gh | C | json | 无变化 |
| ideogram-overview | A | html | 无变化 |
| ideogram-v4-remix | A | html | 无变化 |
| ideogram-v3-inpaint | A | html | 无变化 |
| ideogram-v3-reframe | A | html | 无变化 |
| ideogram-v3-generate | A | html | 无变化 |
| ideogram-edit | A | html | 无变化 |
| ideogram-upscale | A | html | 无变化 |
| ideogram-hf | A | html | 无变化 |
| bailian-qimg3 | A | html | 无变化 |
| bailian-qimg | A | html | 无变化 |
| bailian-textgen-zh | A | html | 无变化 |
| bailian-thinking-zh | A | html | 无变化 |
| bailian-cache-zh | A | html | 无变化 |
| bailian-batch-zh | A | html | 无变化 |
| bailian-websearch-zh | A | html | 无变化 |
| hf-kokoro | A | json | 无变化 |
| hf-cosyvoice2 | A | json | 无变化 |
| hf-glmtts | A | json | 无变化 |
| hf-glm4voice | A | json | 无变化 |
| hf-fishspeech15 | A | json | 无变化 |
| hf-qwen3omni | A | json | 无变化 |
| hf-qwen-layered | A | json | 无变化 |
| hf-org-minimax | A | json | 无变化 |
| hf-org-xai | A | json | 无变化 |
| hf-org-elevenlabs | A | json | 无变化 |
| hf-org-openai | A | json | 无变化 |
| ideogram-layerize | A | html | 无变化 |

// Version names whose numbers are interrupted by a product tier or date suffix.
// Keep the tier in the match: the Gemini text and Flash-Lite models are different products.
export function specificProbes(m) {
  const cur = String(m.version ?? '').match(/\d+(?:\.\d+)*/)?.[0];
  if (!cur) return [];
  if (m.id === 'gemini-tts') return [{
    prefix: 'Gemini Flash TTS', cur,
    pattern: /(?<!\w)Gemini[\s_-]*(\d+(?:\.\d+)*)[\s_-]+Flash[\s_-]+TTS(?!\w)/gi,
  }];
  if (m.id === 'deepseek') {
    const patch = String(m.version).match(/Flash[\s_-]+(\d{4})(?!\d)/i)?.[1];
    return [{prefix: 'DeepSeek Flash', cur: patch ? `${cur}.${patch}` : cur,
      pattern: /(?<!\w)DeepSeek[\s_-]*V?(\d+(?:\.\d+)*[\s_-]+Flash(?:[\s_-]+\d{4})?)(?!\w)/gi,
      normalize: value => {
        const [version, date] = value.split(/[\s_-]+Flash(?:[\s_-]+)?/i);
        // Dates are a third segment even when the generation has no minor version.
        return date ? `${version.includes('.') ? version : version + '.0'}.${date}` : version;
      },
    }];
  }
  return [];
}

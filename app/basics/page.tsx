import type { Metadata } from "next";
import Link from "next/link";
import { Rich } from "@/components/Fact";
import { atlas } from "@/lib/atlas";
import BackLink from "@/components/BackLink";
import Share from "@/components/Share";
import glossary from "@/data/glossary.json";

/**
 * 基础词表。**这一页是负责人提出来的，而缺口是我造成的。**
 *
 * 2026-08-12 我给 Ideogram 那批格子写证据时，把 `ideogram-4-fp8`、`ideogram-4-nf4`
 * 这样的仓库名连同 `license_name` 一起写进了引文 —— 站上从此到处是 FP8 / NF4 / 量化
 * （数据里 11 处 + 「量化」84 处），**却没有任何一处说这些词是什么意思**。
 * 负责人原话：「我完全搞不懂哎……要不然我这第一个用户都觉得用不到。」
 *
 * ## 这一页和一份普通词表的差别，全在两处
 *
 * 1. **每条都指回站内实际出现它的地方。** 光解释「FP8 是一个字节」没用，
 *    读者是在某个模型页上撞见这个词的 —— 所以这里现算「站上哪几条数据带这个词」并给出链接。
 *    现算而不是手写：数据一变，这份对照跟着变。
 * 2. **头一条讲的不是术语，是怎么读仓库名。** 负责人问的那个 `INT8-ConvRot` 根本不是标准格式，
 *    是第三方仓库作者自己起的名，而**那个作者在自己的 README 里说这版是坏的**。
 *    不先讲这条，把十个术语背下来也照样会挑错文件。
 */
export const metadata: Metadata = {
  /**
   * ⚠️ **标题里不要写站名。** `app/layout.tsx` 有
   * `template: "%s｜${BRAND.short}"`，站名由模板补 ——
   * 这里再写一遍就出现「…｜虾米看AI｜虾米看AI」，2026-08-12 上线当天就是这样。
   * 站上另外四个跨方向页都只写正文，只有这一页手写了后缀。
   */
  title: "大模型入门：公开教程导航 + 本地部署要懂的词",
  description:
    "从「什么是大模型」到本地部署与微调，13 个公开开源教程，逐个核过星标、许可与最后更新日。附站上会撞见的术语速查（FP8 / INT8 / GGUF / LoRA），每条带论文出处。",
  openGraph: { images: [{ url: "/atlas/og/index-16x9.png", width: 1200, height: 675 }] },
};

type Term = (typeof glossary.terms)[number];

/**
 * 站上哪几条数据带这个词。**现算，不手写。**
 * 扫的是引文与备注 —— 那是读者真正会撞见术语的地方。
 */
function seenIn(t: Term) {
  const re = new RegExp(`(?<![A-Za-z0-9])(${t.aliases.map((a) => a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})(?![A-Za-z0-9])`, "i");
  const hits: { href: string; label: string }[] = [];
  for (const m of atlas.models) {
    const txt = atlas.support.filter((s) => s.m === m.id).map((s) => `${s.quote ?? ""} ${s.note ?? ""}`).join(" ");
    if (re.test(txt)) hits.push({ href: `/model/${m.id}`, label: `${m.family} ${m.version}` });
  }
  return hits.slice(0, 6);
}

export default function BasicsPage() {
  const byGroup = glossary.groups.map((g) => ({ ...g, terms: glossary.terms.filter((t) => t.group === g.id) }));

  return (
    <main className="max-w-[980px] mx-auto px-8 pt-5 pb-10 flex flex-col gap-8">
      <div className="flex items-baseline justify-between gap-3">
        <BackLink />
        <Share og="/atlas/og/index-16x9.png" title="本地跑模型前先看懂这些词" />
      </div>

      <header className="flex flex-col gap-3 border-b border-rule pb-5">
        <h1 className="text-[40px] leading-tight font-semibold">想搞懂大模型，去读哪些公开教程</h1>
        <p className="text-[17px] leading-relaxed text-muted">
          从「<b className="text-ink">什么是大模型</b>」一路到<b className="text-ink">本地部署与微调</b>，
          13 个公开开源教程。<b className="text-ink">我们不自己写教程</b> ——
          这一页只负责三件事：核实它还活着、说清它的许可、诚实标出它适合谁、不适合谁。
        </p>
        <p className="text-[15px] leading-relaxed text-muted">
          星标 / 许可 / 最后推送日都是 {glossary.generated_at} 当天走 GitHub API 取的。
          <b className="text-ink">星标只用于排序兜底，不作推荐结论</b> —— 站上有 10 万星却停更两年的，也有 5 千星每周在更的。
          页尾附一份术语速查，那部分才是我们自己写的，每条给论文出处。
        </p>
      </header>

      {/* ── 教程导航：这一页的主体 ─────────────────────────────── */}
      <section className="flex flex-col gap-4">
        <Rich text={glossary.tutorials_note} className="block text-[14px] leading-relaxed text-muted" />
        {glossary.tutorials.map((g) => (
          <div key={g.group} className="flex flex-col gap-2">
            <h2 className="text-[20px] font-semibold">{g.group}</h2>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {g.items.map((t) => (
                <a key={t.name} href={t.repo ? `https://github.com/${t.repo}` : (t as { url?: string }).url}
                  target="_blank" rel="noreferrer"
                  className="group block border border-rule bg-paper/60 px-3.5 py-3 hover:border-yes hover:bg-yes/5">
                  <p className="text-[15px] font-semibold group-hover:text-yes-ink">{t.name} ↗</p>
                  <p className="text-[12px] text-muted mt-0.5 flex flex-wrap gap-x-2.5 gap-y-0.5 tabular-nums">
                    {t.repo && <code className="text-[11.5px]">{t.repo}</code>}
                    {t.stars != null && <span>★{t.stars.toLocaleString("en-US")}</span>}
                    <span className={t.license ? "" : "text-no"}>{t.license ?? "无 LICENSE 文件"}</span>
                    {t.pushed && <span>最后更新 {t.pushed}</span>}
                    <span>{t.lang}</span>
                  </p>
                  <Rich text={t.why} className="block text-[14px] leading-relaxed mt-2" />
                  <Rich text={t.caveat} className="block text-[13px] leading-relaxed text-muted mt-1.5 border-l-2 border-no/50 pl-2.5" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── 第一课：先学会读仓库名 ─────────────────────────────── */}
      <section className="rounded-xl border border-no/40 bg-no/6 p-5 flex flex-col gap-3">
        <h2 className="text-[22px] font-semibold">第一课不是术语，是<b className="text-no">怎么读仓库名</b></h2>
        <p className="text-[15px] leading-relaxed">
          同一个模型，Hugging Face 上往往并排躺着十几个仓库，后缀五花八门。
          <b className="text-ink">先分清哪些是厂商发的、哪些是网友再压的</b> —— 这比记住任何一个术语都管用。
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-rule bg-card p-3.5">
            <p className="text-[13px] text-yes font-semibold mb-1.5">厂商官方组织发的</p>
            <p className="text-[14px] leading-relaxed text-muted">
              后缀是<b className="text-ink">标准格式名</b>（FP8 / NF4 / INT8），许可与说明写在模型卡里。
              例：<code className="text-[13px]">ideogram-ai/ideogram-4-fp8</code>、
              <code className="text-[13px]">ideogram-ai/ideogram-4-nf4</code>。
            </p>
          </div>
          <div className="rounded-lg border border-rule bg-card p-3.5">
            <p className="text-[13px] text-no font-semibold mb-1.5">第三方再压的</p>
            <p className="text-[14px] leading-relaxed text-muted">
              后缀是<b className="text-ink">作者自己起的名字</b>，不是标准。
              质量全看这个人 —— <b className="text-ink">必须读 README</b>。
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-rule bg-card p-3.5">
          <p className="text-[14px] leading-relaxed">
            <b className="text-ink">真实例子。</b>负责人问的正是
            <code className="text-[13px]"> bertbobson/Ideogram-4-INT8-ConvRot </code>
            里的「ConvRot」是什么意思 —— 答案是：<b className="text-no">它不是任何标准格式，而且那个作者自己在 README 里说这一版是坏的。</b>
          </p>
          <blockquote className="mt-2 border-l-2 border-no pl-3 text-[13.5px] leading-relaxed text-muted">
            「This model does not currently work with native ComfyUI INT8, and used a sub-optimal FP8 base,
            which makes it perform worse and ended up doing a triple quantization.」
            <br />
            「This is an avoidable triple quantization due to me being bad.」
            <br />
            <span className="text-ink">—— 该仓库 README 原文，作者随后推荐读者改用另外两个仓库</span>
          </blockquote>
          <p className="text-[13.5px] leading-relaxed text-muted mt-2">
            它当时有 ♥59、下载 0。<b className="text-ink">收藏数不代表能用</b> ——
            这一条比下面任何一个术语都值钱。
          </p>
          <p className="text-[12.5px] text-muted mt-2">
            核验于 2026-08-12 ·{" "}
            <a href="https://huggingface.co/bertbobson/Ideogram-4-INT8-ConvRot" target="_blank" rel="noreferrer"
              className="underline hover:text-ink">该仓库</a>
          </p>
        </div>
      </section>

      {/* ── 术语 ─────────────────────────────────────────────── */}
      <h2 className="text-[26px] font-semibold border-t border-rule pt-6">
        术语速查：站上会撞见的那些词
        <span className="block text-[14px] font-normal text-muted mt-1.5">
          下面这部分是我们自己写的 —— 因为它要和站内数据对得上（每条指回实际出现它的模型页）。
          能追到原始论文的给 arXiv 编号与摘要原句，只有工程惯例的照实说「没有单一权威出处」。
        </span>
      </h2>
      {byGroup.map((g) => (
        <section key={g.id} className="flex flex-col gap-3">
          <h2 className="text-[22px] font-semibold">{g.zh}</h2>
          <Rich text={g.intro} className="block text-[15px] leading-relaxed text-muted" />
          <div className="flex flex-col">
            {g.terms.map((t) => {
              const src = t.src ? (atlas.sources as Record<string, { name: string; url: string }>)[t.src] : null;
              const hits = seenIn(t);
              return (
                <div key={t.id} className="border-t border-rule py-4 flex flex-col gap-2">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <b className="text-[18px]">{t.term}</b>
                    {"bytes" in t && t.bytes ? (
                      <span className="text-[12.5px] text-muted tabular-nums rounded px-1.5 py-px bg-rule/40">
                        每个参数 {t.bytes} 字节
                      </span>
                    ) : null}
                  </div>
                  <Rich text={t.one_line} className="block text-[15px] leading-relaxed" />
                  <Rich text={t.why} className="block text-[14.5px] leading-relaxed text-muted" />
                  {"note" in t && t.note ? (
                    <Rich text={t.note} className="block text-[13.5px] leading-relaxed text-muted border-l-2 border-unknown pl-3" />
                  ) : null}
                  {t.quote ? (
                    <p data-quote className="text-[13.5px] leading-relaxed text-muted border-l-2 border-yes/50 pl-3">
                      <Rich text={t.quote} />
                    </p>
                  ) : null}
                  <p className="text-[12.5px] text-muted flex flex-wrap gap-x-3 gap-y-1 items-center">
                    {src ? (
                      <a href={src.url} target="_blank" rel="noreferrer" className="underline hover:text-ink">{src.name}</a>
                    ) : (
                      <span className="text-unknown">没有单一权威出处 —— 这是一类工程惯例的统称</span>
                    )}
                    {hits.length > 0 && (
                      <span className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                        <span>站上出现在：</span>
                        {hits.map((h) => (
                          <Link key={h.href} href={h.href} className="underline hover:text-ink">{h.label}</Link>
                        ))}
                      </span>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {/* ── 显存对照 ─────────────────────────────────────────── */}
      <section className="flex flex-col gap-3">
        <h2 className="text-[22px] font-semibold">同一个模型，不同精度大概要多少显存</h2>
        <p className="text-[15px] leading-relaxed text-muted">
          <b className="text-ink">这张表是算出来的，不是查来的</b> —— 公式就是「参数量 × 每参数字节数」。
          列出来是为了让你看清楚<b className="text-ink">数量级</b>，不是为了让你照着买卡。
        </p>
        <div className="overflow-x-auto">
          <table className="text-[14px] tabular-nums border-collapse min-w-[520px]">
            <thead>
              <tr className="text-muted text-[13px]">
                <th className="text-left font-normal border-b border-rule py-2 pr-6">参数量</th>
                {[["FP16 / BF16", 2], ["FP8 / INT8", 1], ["INT4 / NF4", 0.5]].map(([n]) => (
                  <th key={String(n)} className="text-right font-normal border-b border-rule py-2 pr-6">{n}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[2, 7, 14, 20, 80].map((b) => (
                <tr key={b}>
                  <td className="border-b border-rule py-2 pr-6">{b}B</td>
                  {[2, 1, 0.5].map((bytes) => (
                    <td key={bytes} className="border-b border-rule py-2 pr-6 text-right">{(b * bytes).toFixed(b * bytes < 10 ? 1 : 0)} GB</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[14px] leading-relaxed text-muted">
          <b className="text-no">这只是权重。</b>推理时还要放中间结果 —— 出图模型是特征图（分辨率越高越大），
          文本模型是 KV 缓存（上下文越长越大）。<b className="text-ink">「刚好装得下」的配置通常跑不起来</b>，
          留 20~30% 余量比较稳。想省下去还有分块、卸载到内存等一堆手段，
          Hugging Face 的 diffusers 有<a href="https://huggingface.co/docs/diffusers/main/en/optimization/memory" target="_blank" rel="noreferrer" className="underline hover:text-ink"> 一整页讲这个</a>。
        </p>
      </section>

      {/* ── 接下来去哪 ───────────────────────────────────────── */}
      <section className="flex flex-col gap-3 border-t border-rule pt-5">
        <h2 className="text-[22px] font-semibold">看懂了，接下来</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { href: "/skill/openweights", t: "AI 视频 · 开源自部署", d: "哪几家真的放了权重、拿什么跑、已知限制" },
            { href: "/skill/t-local", t: "AI 文本 · 本地部署", d: "文本卷这一侧的自部署清单" },
            { href: "/toolkit", t: "该去哪个站", d: "查一件事时该打开哪个网站，附我们踩过的坑" },
            { href: "/caveats", t: "能力对了，你未必用得上", d: "许可、可达性、版本对不上 —— 下手前先看这一页" },
          ].map((x) => (
            <Link key={x.href} href={x.href}
              className="rounded-lg border border-rule bg-card p-3.5 hover:border-yes transition-colors">
              <p className="text-[15px] font-semibold">{x.t} →</p>
              <p className="text-[13.5px] text-muted mt-1">{x.d}</p>
            </Link>
          ))}
        </div>
        <p className="text-[14px] leading-relaxed text-muted">
          <b className="text-ink">许可是最容易漏的一环。</b>「权重公开」不等于「随便用」——
          站上已经收到三种不许商用的：Fish Speech 是研究许可、MusicGen 的权重是 CC-BY-NC、
          Ideogram 4 的许可直接叫 <code className="text-[13px]">ideogram-4-non-commercial</code>。
          它们在 GitHub 上写的可能是 MIT，<b className="text-ink">那是代码的许可，不是权重的</b>。
        </p>
      </section>

      <footer className="border-t border-rule pt-5 text-[13px] text-muted leading-relaxed">
        数据版本 {atlas.version} · 词表核验于 {glossary.generated_at} ·
        <b className="text-unknown"> 全部为机器录入</b>
      </footer>
    </main>
  );
}

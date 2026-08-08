import { atlas } from "@/lib/atlas";
import Link from "next/link";
import { Rich } from "./Fact";

/**
 * 平台透明度评级（方案 §59.4.e · 任务 G3）。
 *
 * §5.2 里最值钱的区分是「模型原生能力 vs 平台后加的功能」——
 * 而这恰恰是公开信息里查不到的：Higgsfield 的某个功能底下是不是 Kling，他们不会说。
 * 按 §26 只能记 Unknown，于是最值钱那一列大面积空白。
 *
 * §59.4.e 的解法是**把这件事反过来用**：
 * 「这家平台公不公示底层模型」本身就是一个可见字段。
 * 我们只陈述「他们没说」，完全合规，而且**不需要精准** —— 正好匹配 §59.3。
 *
 * ## 但原方案的三色刻度装不下真实情况
 *
 * 方案写的是 🟢明确公示 / 🟡部分公示 / 🔴只字不提。三档。
 *
 * 实际跑下来，9 家里有 4 家**我们根本没读到页面**（fal 返回 429、
 * LibTV 连不上、即梦和 Picsart 超时）。给它们打 🔴「只字不提」——
 * **那是我们在编。我们不知道它说没说，我们是没看见。**
 *
 * 所以加了第四档 ⬜「我们没看到」，并且和 🔴 在视觉上必须分得开：
 * 一个是对平台的负面判断，一个是**对我们自己的**。
 *
 * 这是本项目最贵的那条教训在另一个位置的复现 ——
 * **「没有值」和「取不到值」不是一回事。**
 */
const GRADE = {
  yes: { mark: "🟢", zh: "明确公示", cls: "text-yes", ord: 0 },
  partial: { mark: "🟡", zh: "部分公示", cls: "text-unknown", ord: 1 },
  no: { mark: "🔴", zh: "只字不提", cls: "text-no", ord: 2 },
  blocked: { mark: "⬜", zh: "我们没看到", cls: "text-muted", ord: 3 },
  "n/a": { mark: "—", zh: "不适用", cls: "text-muted", ord: 4 },
} as const;

export default function Transparency() {
  // ⚠️ 同名次的并列**不能用 localeCompare 排** ——
  // 中英混排（「fal」vs「即梦 Dreamina」）在 Node 的 ICU 和 Chrome 的 ICU 下结果不一样，
  // 于是服务端渲染出来的顺序和浏览器 hydrate 出来的顺序对不上，每次打开都报一个 React 错误。
  // 换成按 id 排：ASCII、稳定、两边一定一致。**排序只要确定，不要「好看」。**
  const rows = [...atlas.platforms].sort(
    (a, b) => GRADE[a.discloses].ord - GRADE[b.discloses].ord || (a.id < b.id ? -1 : 1),
  );
  const n = (k: keyof typeof GRADE) => rows.filter((p) => p.discloses === k).length;

  return (
    <section>
      <h2 className="text-[22px] font-semibold mb-1">这家平台，说不说底下用的是谁的模型</h2>
      <p className="text-muted text-[14px] mb-4 max-w-[880px]">
        🟢 {n("yes")} 公示 · 🔴 {n("no")} 只字不提 · ⬜ {n("blocked")} 我们没读到页面
        <Link href="/method#transparency" className="underline ml-2 hover:text-ink">口径 →</Link>
      </p>

      <div className="flex flex-col gap-2 max-w-[880px]">
        {rows.map((pf) => {
          const g = GRADE[pf.discloses];
          const src = pf.discloses_src ? atlas.sources[pf.discloses_src] : null;
          return (
            <div key={pf.id} className="border border-rule rounded-lg bg-card p-3 flex flex-col gap-1.5">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-[15px]">{g.mark}</span>
                <a href={pf.url} target="_blank" rel="noreferrer" className="font-semibold underline hover:text-yes">
                  {pf.name}
                </a>
                <span className={`text-[13px] font-medium ${g.cls}`}>{g.zh}</span>
                <span className="text-muted text-[12px]">
                  {pf.kind} · {pf.region}
                </span>
              </div>
              {pf.discloses_why && <Rich text={pf.discloses_why} className="text-[13px] leading-relaxed" />}
              {pf.discloses_quote && (
                <p className="text-muted text-[12px] leading-relaxed">
                  原文：「{pf.discloses_quote}」
                  {src && (
                    <a href={src.url} target="_blank" rel="noreferrer" className="underline ml-2 hover:text-yes">
                      {src.name}
                    </a>
                  )}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

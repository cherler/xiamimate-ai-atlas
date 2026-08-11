import { atlas, cell, type State } from "@/lib/atlas";
import ReportIssue from "./ReportIssue";
import Mark from "./Mark";

/**
 * 一条事实的完整呈现：状态 + 说明 + 来源 + 官方/第三方 + 核验版本 + 录入身份。
 *
 * **从 page.tsx 抽出来共用** —— 首页、模型页、能力页三处都要它。
 * 抽出来的动机不是「代码复用」，是**口径不能有第二份**：
 * 三个地方各写一遍，早晚有一处忘了标「机器录入」。
 */
/**
 * **保留这张表只为兼容纯文本场合**（分享图脚本、复制出去的文本）。
 * 页面上一律用 `<Mark/>` 画 —— emoji 的字形由操作系统决定，
 * 一个卖「对得上」的站不该让核心符号长成什么样取决于读者用什么电脑。
 */
export const MARK: Record<State, string> = { yes: "✅", no: "❌", unknown: "⬜" };
export const TONE: Record<State, string> = { yes: "text-yes", no: "text-no", unknown: "text-unknown" };

export function Rich({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? (
          <b key={i} className="text-ink">
            {part}
          </b>
        ) : (
          part
        ),
      )}
    </span>
  );
}

export function ViaTag({ via }: { via?: string }) {
  if (via !== "separate-task") return null;
  return (
    <span
      className="ml-1.5 px-1.5 py-px rounded bg-unknown/15 text-unknown text-[11px] align-middle"
      title="平台的另一个接口：能做，但要再调一次，且通常只能作用于已生成的视频"
    >
      另一个接口
    </span>
  );
}

export function Fact({ m, c, label }: { m: string; c: string; label: string }) {
  const f = cell(m, c);
  const src = f.src ? atlas.sources[f.src] : null;
  return (
    <div className="border-t border-rule py-3 flex gap-4 text-[15px]">
      <span className={`${TONE[f.state]} font-semibold shrink-0 w-[190px] flex items-start gap-1.5`}>
        <Mark state={f.state} className="mt-[3px]" /> {label}
        <ViaTag via={f.via} />
      </span>
      <div className="min-w-0 flex-1">
        {f.note && <Rich text={f.note} className="text-ink leading-relaxed block" />}
        <p className="text-muted text-[13px] mt-1 flex flex-wrap gap-x-3 gap-y-1 items-center">
          {src ? (
            <>
              <a href={src.url} target="_blank" rel="noreferrer" className="underline hover:text-ink">
                {src.name}
              </a>
              <span
                className={`px-1.5 py-px rounded text-[11px] ${
                  src.tier === "official" ? "bg-yes/12 text-yes" : "bg-unknown/15 text-unknown"
                }`}
              >
                {src.tier === "official" ? "官方来源" : "第三方来源"}
              </span>
            </>
          ) : (
            <span className="italic">无来源 —— 这一格是「查了没找到」，不是「我们没查」</span>
          )}
          {f.verified_for && <span>核验版本 {f.verified_for}</span>}
          <span>核验于 {atlas.generated_at}</span>
          <span className="px-1.5 py-px rounded bg-unknown/15 text-unknown text-[11px]">机器录入</span>
        </p>
        {/* 报错入口就挂在每一条事实旁边 —— 放在页脚等于没有：
            人是在看到某一格不对时才想报错的，那一刻要伸手就够得着 */}
        <div className="mt-1">
          <ReportIssue m={m} c={c} />
        </div>
      </div>
    </div>
  );
}

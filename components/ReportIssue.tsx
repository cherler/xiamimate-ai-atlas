"use client";

import { useState } from "react";
import { atlas, cell, label, vendorName } from "@/lib/atlas";

/**
 * 一键报错（方案 §46 Suggest Correction）。
 *
 * **这不是加分项，是必需品。** §59.3 主动把精准度交易掉换维护成本 ——
 * 读者没有同意接受不精准，只有我们同意了。可纠错是那笔交易的另一半。
 *
 * ## 为什么不做一个提交后端
 *
 * 站是静态的（见 deploy/README）。为一个每周可能来一两条的表单起一个服务、
 * 一个数据库、一套反垃圾，**换来的是一个要长期守着的东西** ——
 * 而它解决的问题用一封预填好的邮件就够了。
 *
 * 预填是关键：把「哪一格、我们现在写的是什么、来源是哪条」都填进去，
 * 报错的人只需要补一句「实际是什么 + 你在哪看到的」。
 * **让对方少打字，比给他一个漂亮表单有用。**
 */
const MAILTO = "atlas@xiamimate.com";

export default function ReportIssue({ m, c }: { m?: string; c?: string }) {
  const [open, setOpen] = useState(false);
  const md = m ? atlas.models.find((x) => x.id === m) : null;
  const cp = c ? atlas.capabilities.find((x) => x.id === c) : null;
  const f = m && c ? cell(m, c) : null;
  const src = f?.src ? atlas.sources[f.src] : null;

  const where = md && cp ? `${label(md)} × ${cp.zh}` : md ? label(md) : cp ? cp.zh : "整站";
  const body = [
    `【报错位置】${where}`,
    md && `模型：${label(md)}（${vendorName(md)}，该版本 ${md.version_as_of}）`,
    cp && `能力：${cp.zh} / ${cp.name}`,
    f && `我们现在写的是：${{ yes: "支持", no: "不支持", unknown: "官方没说" }[f.state]}`,
    f?.note && `说明：${f.note}`,
    src && `我们引的来源：${src.name} ${src.url}`,
    `数据版本：${atlas.version}，核验于 ${atlas.generated_at}`,
    "",
    "────────  以下请填  ────────",
    "实际应该是：",
    "你在哪看到的（链接最好）：",
    "",
  ]
    .filter(Boolean)
    .join("\n");

  const href = `mailto:${MAILTO}?subject=${encodeURIComponent(`纠错：${where}`)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="text-[13px]">
      <button onClick={() => setOpen(!open)} className="text-muted underline hover:text-ink">
        这一条不对？
      </button>
      {open && (
        <div className="mt-2 border border-rule rounded-lg p-3 bg-card flex flex-col gap-2">
          <p className="text-muted leading-relaxed">
            我们主动用<b className="text-ink">「不那么精准」换了维护成本</b>（数据由 Agent 录入、未经人工核验）。
            <b className="text-ink">那笔交易的另一半就是可纠错</b> —— 报错请直接发，我们改完会记进「变了什么」。
          </p>
          <a
            href={href}
            className="self-start px-3 py-1.5 rounded border border-yes text-yes hover:bg-yes hover:text-paper"
          >
            写一封已填好上下文的邮件 →
          </a>
          <details>
            <summary className="text-muted cursor-pointer">不想发邮件？把下面这段贴到任何地方给我们</summary>
            <textarea
              readOnly
              value={body}
              onFocus={(e) => e.currentTarget.select()}
              className="mt-2 w-full h-[190px] p-2 rounded border border-rule bg-paper text-[12px] font-mono"
            />
          </details>
        </div>
      )}
    </div>
  );
}

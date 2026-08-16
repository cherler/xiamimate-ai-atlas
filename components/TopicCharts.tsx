import { forkCoverage, topicAppName, type Decision, type TopicProject } from "@/lib/atlas";

/**
 * 专项页的图表。**全部内联 SVG，颜色走令牌，深浅外观自动跟随。**
 *
 * 负责人：「我需要的是真材实料。内容详实、可视化图表代替文字描述。」
 *
 * 所以每张图背后都是一条查过的事实，不是装饰：
 * 显存瀑布来自 Wan2.2 README 的三个降显存开关与各自节省比例；
 * MoE 路由与压缩比来自 DeepWiki 架构页；
 * ACE-Step 的速度条来自它自己给的实时倍率表。
 * **画不出图的项目就不画** —— 硬凑一张示意图等于用图说废话。
 */

const PAD = { fontFamily: '"PingFang SC","Microsoft YaHei",system-ui,sans-serif' };

/** 片型 × 决定：格子越实＝对该片型越关键。整页信息密度最高的一张。 */
export function MatrixChart({
  matrix, decisions, pick, onPick,
}: {
  matrix: Record<string, Record<string, number>>;
  decisions: Decision[];
  pick: string | null;
  onPick: (id: string) => void;
}) {
  const cols = decisions.filter((d) => d.id !== "topic");
  const shade = ["opacity-0", "opacity-20", "opacity-55", "opacity-100"];
  const label = ["不适用", "次要", "重要", "命门"];
  return (
    <div className="overflow-x-auto border border-rule rounded-lg">
      <table className="w-full text-[12px] min-w-[620px]" style={PAD}>
        <thead>
          <tr className="bg-card">
            <th className="text-left px-3 py-2 font-bold text-muted text-[11px] whitespace-nowrap">片型</th>
            {cols.map((d) => (
              <th key={d.id} className="px-1 py-2 font-bold text-muted text-[10.5px] whitespace-nowrap">{d.zh}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(matrix).map(([app, row], i) => (
            <tr key={app}
              onClick={() => onPick(app)}
              className={`cursor-pointer ${i ? "border-t border-rule" : ""} ${
                pick === app ? "bg-yes/10" : "hover:bg-card"}`}>
              <td className={`px-3 py-1.5 whitespace-nowrap ${pick === app ? "font-semibold" : ""}`}>
                {topicAppName(app)}
              </td>
              {cols.map((d) => {
                const v = row[d.id] ?? 0;
                return (
                  <td key={d.id} className="px-1 py-1.5" title={`${d.zh}：${label[v]}`}>
                    <span className={`block w-full h-3 rounded-sm bg-yes ${shade[v]}`} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** 许可证三档。**分档依据是能不能拿去接商单**，不是许可证名字好不好听。 */
export function LicenseChart({ projects }: { projects: TopicProject[] }) {
  const G = [
    { k: "permissive", zh: "直接可商用", cls: "border-yes text-yes-ink", bg: "bg-yes/8" },
    { k: "copyleft", zh: "先读条款", cls: "border-chip-warm-ink text-chip-warm-ink", bg: "bg-chip-warm" },
    { k: "noncommercial", zh: "不能商用", cls: "border-no text-no", bg: "bg-no/8" },
  ] as const;
  return (
    <div className="grid sm:grid-cols-3 gap-2.5">
      {G.map((g) => {
        const ps = projects.filter((p) => p.license_class === g.k);
        return (
          <div key={g.k} className={`border rounded-xl px-4 py-3.5 ${g.cls} ${g.bg}`}>
            <b className="text-[13.5px]">{g.zh}</b>
            <span className="text-[11px] tnum ml-1.5 opacity-70">{ps.length}</span>
            <ul className="mt-2.5 space-y-1">
              {ps.map((p) => (
                <li key={p.id} className="text-[12.5px] text-ink flex items-baseline gap-2">
                  <span>{p.zh}</span>
                  <span className="text-[10.5px] text-muted ml-auto">{p.license}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

/** 硬件门槛横排。数值取自各仓库自述，取不到就画斜纹 —— 与真值表的 ⬜ 同一条纪律。 */
const HW: Record<string, { gb: number | null; note: string }> = {
  "ace-step": { gb: 8, note: "8GB" },
  controlnet: { gb: 8, note: "8GB 低显存模式" },
  "ip-adapter": { gb: 4, note: "22M 参数，附加在已有模型上" },
  "real-esrgan": { gb: 6, note: "推荐 GPU" },
  pyvideotrans: { gb: 4, note: "GPU 可选" },
  wan22: { gb: 24, note: "24GB（三开关全开）· 14B 需 80GB" },
  comfyui: { gb: null, note: "仓库未说明" },
  instantid: { gb: null, note: "仓库未说明" },
};
export function HardwareChart({ projects }: { projects: TopicProject[] }) {
  const max = 24;
  const rows = [...projects].sort((a, b) => (HW[a.id]?.gb ?? 99) - (HW[b.id]?.gb ?? 99));
  return (
    <div className="border border-rule rounded-lg divide-y divide-rule">
      {rows.map((p) => {
        const h = HW[p.id];
        return (
          <div key={p.id} className="grid grid-cols-[104px_1fr] sm:grid-cols-[124px_1fr_auto] gap-3 items-center px-3 py-2">
            <span className="text-[12.5px] truncate">{p.zh}</span>
            <span className="flex h-3 items-center">
              {h?.gb == null ? (
                <span className="hatch h-3 w-full border border-rule rounded-sm" />
              ) : (
                <span className="bg-yes h-3 rounded-sm" style={{ width: `${Math.min(100, (h.gb / max) * 100)}%` }} />
              )}
            </span>
            <span className="text-[11px] text-muted hidden sm:block whitespace-nowrap">{h?.note}</span>
          </div>
        );
      })}
      <p className="text-[11px] text-muted px-3 py-1.5">条长以 24GB 为满格 · 斜纹＝仓库未说明</p>
    </div>
  );
}

/** 决定 × 覆盖度：一屏看完九条的官方说法覆盖情况。 */
export function CoverageChart({ decisions }: { decisions: Decision[] }) {
  const withCap = decisions.filter((d) => d.cap);
  return (
    <div className="border border-rule rounded-lg divide-y divide-rule">
      {withCap.map((d) => {
        const c = forkCoverage(d.cap!);
        const w = (n: number) => `${(n / c.total) * 100}%`;
        return (
          <div key={d.id} className="grid grid-cols-[104px_1fr] sm:grid-cols-[124px_1fr_112px] gap-3 items-center px-3 py-2">
            <span className="text-[12.5px] truncate">{d.zh}</span>
            <span className="flex h-3 border border-rule rounded-sm overflow-hidden">
              <i style={{ width: w(c.yes) }} className="bg-yes" />
              <i style={{ width: w(c.no) }} className="bg-no" />
              <i style={{ width: w(c.unknown) }} className="hatch" />
            </span>
            <span className="text-[11px] text-muted tnum hidden sm:block whitespace-nowrap">
              {c.yes}/{c.total}{c.no > 0 && <> · <b className="text-no">{c.no} 拒绝</b></>}
            </span>
          </div>
        );
      })}
      <p className="text-[11px] text-muted px-3 py-1.5">实心＝官方说支持 · 红＝官方说不支持 · 斜纹＝官方没说</p>
    </div>
  );
}

/**
 * 活跃度：**增速 × 停更，两个轴一起看。**
 *
 * 负责人 2026-08-16 纠的：「star 多不等于有名 —— AI 视频是新领域，
 * 660 个星也可能跟它刚开源有关，要结合开源时间看，不然不公平。」
 *
 * 加上时间维度之后排名整个翻了：Toonflow 七个月 1.4 万星（2134/月），
 * 而 ControlNet 三万四千星却**停更 30 个月**。
 * **增速低不等于死**（kohya 164/月但一直在维护），**星数高也不等于活**。
 */
export function ActivityChart({ projects }: { projects: TopicProject[] }) {
  const rows = [...projects].filter((p) => p.stars_per_month != null)
    .sort((a, b) => (b.stars_per_month ?? 0) - (a.stars_per_month ?? 0));
  const max = Math.max(...rows.map((p) => p.stars_per_month ?? 0));
  return (
    <div className="border border-rule rounded-lg divide-y divide-rule">
      {rows.map((p) => {
        const stale = p.stale_months ?? 0;
        return (
          <div key={p.id} className="grid grid-cols-[112px_1fr_auto] gap-3 items-center px-3 py-2 text-[12px]">
            <span className="truncate">{p.zh}</span>
            <span className="flex h-3 items-center">
              <span className="bg-yes h-3 rounded-sm"
                style={{ width: `${Math.max(2, ((p.stars_per_month ?? 0) / max) * 100)}%` }} />
            </span>
            <span className="text-[11px] tnum whitespace-nowrap">
              <span className="text-muted">{p.stars_per_month} 星/月</span>
              {stale >= 12
                ? <b className="text-no ml-2">停更 {stale} 个月</b>
                : <span className="text-yes-ink ml-2">在维护</span>}
            </span>
          </div>
        );
      })}
      <p className="text-[11px] text-muted px-3 py-1.5">
        条长＝星数 ÷ 月龄（新项目才公平）· 右侧是最后一次提交距今多久 · 数据 GitHub API 实测 2026-08-16
      </p>
    </div>
  );
}

/**
 * 整包篇的主图：**同一张九格条，看它替你做掉哪几个决定**。
 * 和自建篇共用一套格子，所以「它帮你做了什么、又拿走了什么」自己就看出来了。
 */
const ENGINE = {
  stock: { zh: "检索素材库", note: "不生成画面，从素材库里找" },
  yours: { zh: "你自己的素材", note: "不生成画面，重组你已有的" },
  cloud: { zh: "云端 API", note: "生成走别人的模型，按次付费" },
  local: { zh: "本地权重", note: "画面在本机生成" },
} as const;

export function AllInOneChart({ projects, decisions }: { projects: TopicProject[]; decisions: Decision[] }) {
  return (
    <div className="border border-rule rounded-lg divide-y divide-rule">
      {projects.map((p) => (
        <div key={p.id} className="px-4 py-3">
          <div className="flex items-baseline gap-2.5 flex-wrap mb-2">
            <b className="text-[14px]">{p.zh}</b>
            <span className="text-[10.5px] border border-rule rounded-full px-2 text-muted">
              画面：{p.engine ? ENGINE[p.engine].zh : "—"}
            </span>
            <span className="text-[10.5px] text-muted tnum ml-auto">
              替你做 {p.takes_over?.length ?? 0} / 留给你 {p.leaves?.length ?? 0}
            </span>
          </div>
          <div className="flex gap-1">
            {decisions.map((d) => {
              const took = p.takes_over?.includes(d.id);
              const left = p.leaves?.includes(d.id);
              return (
                <span key={d.id} title={`${d.zh}：${took ? "它替你做" : left ? "留给你" : "不涉及"}`}
                  className={`flex-1 h-4 rounded-sm ${took ? "bg-no opacity-70" : left ? "bg-yes opacity-70" : "hatch border border-rule"}`} />
              );
            })}
          </div>
        </div>
      ))}
      <div className="px-4 py-2 flex gap-4 text-[11px] text-muted">
        <span className="flex items-center gap-1.5"><i className="w-3 h-3 bg-no opacity-70 rounded-sm inline-block" />它替你做</span>
        <span className="flex items-center gap-1.5"><i className="w-3 h-3 bg-yes opacity-70 rounded-sm inline-block" />留给你</span>
        <span className="flex items-center gap-1.5"><i className="w-3 h-3 hatch border border-rule rounded-sm inline-block" />不涉及</span>
      </div>
    </div>
  );
}

/* ══════════ 每个项目自己的图 ══════════ */

function Fig({ title, src, children }: { title: string; src: string; children: React.ReactNode }) {
  return (
    <figure className="mt-4">
      <figcaption className="text-[11px] tracking-wider text-muted font-bold mb-1.5">{title}</figcaption>
      {children}
      <p className="text-[10.5px] text-muted mt-1 border-l-2 border-rule pl-2">{src}</p>
    </figure>
  );
}

/** Wan2.2：显存瀑布 + MoE 路由 + 压缩链。三张都是这个模型能不能落到你机器上的直接依据。 */
function WanCharts() {
  return (
    <>
      <Fig title="显存瀑布" src="README：不开优化需 80GB；三开关全开后 24GB">
        <svg viewBox="0 0 620 92" className="w-full h-auto" style={PAD}>
          <g fontSize="11">
            <rect x="0" y="4" width="470" height="16" rx="3" fill="var(--color-no)" opacity=".5" />
            <text x="8" y="16" fill="var(--color-ink)">不开优化</text>
            <text x="480" y="16" fill="var(--color-ink)" fontWeight="600">80GB</text>
            <rect x="0" y="26" width="306" height="14" rx="3" fill="var(--color-chip-warm-ink)" opacity=".5" />
            <text x="314" y="37" fill="var(--color-muted)">−30~40%　--offload_model</text>
            <rect x="0" y="46" width="195" height="14" rx="3" fill="var(--color-chip-warm-ink)" opacity=".32" />
            <text x="203" y="57" fill="var(--color-muted)">−50%　--convert_model_dtype</text>
            <rect x="0" y="66" width="141" height="14" rx="3" fill="var(--color-yes)" />
            <text x="149" y="77" fill="var(--color-yes-ink)" fontWeight="600">24GB</text>
            <text x="192" y="77" fill="var(--color-muted)">−10~15GB　--t5_cpu　→ 单张 4090</text>
          </g>
        </svg>
      </Fig>
      <Fig title="混合专家 · 按信噪比路由" src="DeepWiki：两个专家各约 13.5B，总参 27B、单次激活 14B">
        <svg viewBox="0 0 620 74" className="w-full h-auto" style={PAD}>
          <g fontSize="11">
            <rect x="0" y="6" width="290" height="24" rx="4" fill="var(--color-no)" opacity=".14"
              stroke="var(--color-no)" strokeOpacity=".45" />
            <text x="10" y="22" fill="var(--color-ink)">高噪专家 13.5B</text>
            <rect x="300" y="6" width="320" height="24" rx="4" fill="var(--color-yes)" opacity=".14"
              stroke="var(--color-yes)" strokeOpacity=".45" />
            <text x="310" y="22" fill="var(--color-ink)">低噪专家 13.5B</text>
            <line x1="295" y1="2" x2="295" y2="36" stroke="var(--color-ink)" strokeWidth="1.4" />
            <text x="0" y="52" fill="var(--color-muted)">去噪步　早 ────────────────────────→ 晚</text>
            <text x="0" y="68" fill="var(--color-yes-ink)" fontWeight="600">
              开 --offload_model 时显存内只驻留一个专家
            </text>
          </g>
        </svg>
      </Fig>
      <Fig title="压缩链" src="DeepWiki：TI2V-5B 走两段压缩共 4096×">
        <svg viewBox="0 0 620 66" className="w-full h-auto" style={PAD}>
          <g fontSize="11">
            <text x="0" y="20" fill="var(--color-muted)">标准变体</text>
            <rect x="72" y="8" width="150" height="16" rx="3" fill="var(--color-card)" stroke="var(--color-rule)" />
            <text x="80" y="20" fill="var(--color-ink)">VAE 时间4× 空间8×8</text>
            <text x="232" y="20" fill="var(--color-muted)">=</text>
            <rect x="248" y="8" width="58" height="16" rx="3" fill="var(--color-rule)" />
            <text x="256" y="20" fill="var(--color-ink)" fontWeight="600">256×</text>
            <text x="0" y="50" fill="var(--color-muted)">TI2V-5B</text>
            <rect x="72" y="38" width="158" height="16" rx="3" fill="var(--color-card)" stroke="var(--color-rule)" />
            <text x="80" y="50" fill="var(--color-ink)">VAE 时间4× 空间16×16</text>
            <text x="238" y="50" fill="var(--color-muted)">×</text>
            <rect x="252" y="38" width="118" height="16" rx="3" fill="var(--color-card)" stroke="var(--color-rule)" />
            <text x="260" y="50" fill="var(--color-ink)">DiT 分块 2×2</text>
            <text x="378" y="50" fill="var(--color-muted)">=</text>
            <rect x="394" y="38" width="70" height="16" rx="3" fill="var(--color-yes)" opacity=".25" />
            <text x="402" y="50" fill="var(--color-yes-ink)" fontWeight="600">4096×</text>
            <text x="476" y="50" fill="var(--color-yes-ink)" fontWeight="600">← 落到 4090 的原因</text>
          </g>
        </svg>
      </Fig>
    </>
  );
}

/** ComfyUI：一句话生成与节点图的对照 —— 这一张说明的是「决定为什么能被拆开」。 */
function ComfyCharts() {
  return (
    <Fig title="一次性代办 vs 逐个可换" src="README：只重跑发生变化的那部分图">
      <svg viewBox="0 0 620 128" className="w-full h-auto" style={PAD}>
        <g fontSize="10.5">
          <text x="0" y="9" fill="var(--color-muted)">一句话生成</text>
          <rect x="0" y="16" width="124" height="26" rx="5" fill="var(--color-card)" stroke="var(--color-rule)" />
          <text x="10" y="33" fill="var(--color-ink)">一个输入框</text>
          <path d="M128 29 H160" stroke="var(--color-muted)" />
          <rect x="164" y="14" width="118" height="100" rx="6" fill="var(--color-no)" opacity=".08" />
          <rect x="164" y="14" width="118" height="100" rx="6" fill="none" stroke="var(--color-no)" strokeDasharray="4 3" />
          <text x="174" y="32" fill="var(--color-no)" fontWeight="600">九个决定</text>
          <text x="174" y="50" fill="var(--color-muted)">分镜 · 构图 · 角色</text>
          <text x="174" y="66" fill="var(--color-muted)">运动 · 镜头 · 时长</text>
          <text x="174" y="82" fill="var(--color-muted)">节奏 · 声音 · 种子</text>
          <text x="174" y="104" fill="var(--color-no)">一次性代办</text>

          <line x1="306" y1="8" x2="306" y2="122" stroke="var(--color-rule)" strokeDasharray="3 3" />
          <text x="330" y="9" fill="var(--color-muted)">节点图</text>
          <g>
            <rect x="330" y="16" width="96" height="20" rx="4" fill="var(--color-card)" stroke="var(--color-rule)" />
            <text x="338" y="30" fill="var(--color-ink)">提示 / 参考图</text>
            <rect x="330" y="42" width="96" height="20" rx="4" fill="var(--color-card)" stroke="var(--color-rule)" />
            <text x="338" y="56" fill="var(--color-ink)">ControlNet</text>
            <rect x="330" y="68" width="96" height="20" rx="4" fill="var(--color-card)" stroke="var(--color-rule)" />
            <text x="338" y="82" fill="var(--color-ink)">角色参考</text>
            <rect x="330" y="94" width="96" height="20" rx="4" fill="var(--color-card)" stroke="var(--color-rule)" />
            <text x="338" y="108" fill="var(--color-ink)">种子</text>
            <path d="M426 26 H462 M426 52 H462 M426 78 H462 M426 104 H462" stroke="var(--color-yes)" fill="none" />
            <rect x="462" y="42" width="76" height="46" rx="5" fill="var(--color-yes)" opacity=".14"
              stroke="var(--color-yes)" />
            <text x="472" y="60" fill="var(--color-yes-ink)" fontWeight="600">采样器</text>
            <text x="472" y="76" fill="var(--color-muted)">Wan / LTX</text>
            <path d="M538 65 H566" stroke="var(--color-yes)" />
            <rect x="570" y="52" width="50" height="26" rx="5" fill="var(--color-card)" stroke="var(--color-rule)" />
            <text x="580" y="69" fill="var(--color-ink)">成片</text>
          </g>
        </g>
      </svg>
    </Fig>
  );
}

/** ControlNet：九种结构信号。信号种类本身就是这个项目的全部价值。 */
function ControlNetCharts() {
  const S = ["Canny 边缘", "直线", "HED 边界", "涂鸦", "人体姿势", "语义分割", "深度", "法线", "线稿"];
  return (
    <Fig title="九种结构信号" src="README；线稿模型仓库标注为待风险评估、尚未发布">
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
        {S.map((s) => (
          <span key={s}
            className={`text-[11.5px] border rounded px-2 py-1.5 text-center ${
              s === "线稿" ? "border-no text-no" : "border-rule text-ink"}`}>
            {s}{s === "线稿" && " ·未发布"}
          </span>
        ))}
      </div>
    </Fig>
  );
}

/** ACE-Step：速度条。它自己给了实时倍率，这是本专项唯一有官方性能数字的项目。 */
function AceCharts() {
  return (
    <Fig title="生成 1 分钟音乐所需时间" src="README 的实时倍率表">
      <svg viewBox="0 0 620 58" className="w-full h-auto" style={PAD}>
        <g fontSize="11">
          <rect x="0" y="6" width="174" height="14" rx="3" fill="var(--color-yes)" />
          <text x="182" y="18" fill="var(--color-ink)">RTX 4090 · <tspan fontWeight="600">1.74 秒</tspan>（34.5×）</text>
          <rect x="0" y="28" width="220" height="14" rx="3" fill="var(--color-yes)" opacity=".55" />
          <text x="228" y="40" fill="var(--color-ink)">A100 · 2.20 秒（27.3×）</text>
          <text x="0" y="54" fill="var(--color-muted)">最低显存 8GB · A100 上 20 秒可出 4 分钟</text>
        </g>
      </svg>
    </Fig>
  );
}

/*
 * pyvideotrans 的手绘流水线图已删。
 *
 * 我照 README 的概述画成了「识别 → 翻译 → 合成 → 回封装」四段，
 * **而 DeepWiki 的架构页写的是九段**：prepare · recogn · diariz · trans ·
 * dubbing · align · recogn2pass · assembling · task_done。
 * README 的概述省略了说话人分离、对齐、二次识别这三段 ——
 * 而那三段恰恰是它比「装个 Whisper 自己串」值钱的地方。
 *
 * **教训：概述是给人快速理解的，不是给人照着画架构图的。**
 * 现在这一张由 mermaid 从架构页的九段生成，见 data 里的 pyvt-arch。
 */

/**
 * 架构图：把构建时渲染好的 SVG 内联进来。
 *
 * **内联而不是 `<img>`**：内联才能让 SVG 里的 `var(--color-*)` 拿到页面的令牌，
 * 深浅外观自动跟随；`<img>` 是独立文档，取不到外面的自定义属性。
 *
 * ⚠️ **SVG 内容由服务端读好后当 props 传进来，这里不碰文件系统。**
 * 这个组件树顶上是 `"use client"`，一旦在这里 `import "node:fs"`，
 * 整个模块会被打进客户端包，webpack 直接报 UnhandledSchemeError。
 *
 * 读不到就整块不渲染，**不留半张图**。
 */
function ArchDiagram({ d, svg }: { d: NonNullable<TopicProject["diagrams"]>[number]; svg?: string }) {
  if (!svg) return null;
  return (
    <figure className="mt-4">
      <figcaption className="text-[11px] tracking-wider text-muted font-bold mb-1.5">{d.title}</figcaption>
      <div className="border border-rule rounded-lg p-3 overflow-x-auto [&_svg]:max-w-full [&_svg]:h-auto"
        dangerouslySetInnerHTML={{ __html: svg }} />
      <p className="text-[10.5px] text-muted mt-1 border-l-2 border-rule pl-2">{d.src} · 核验 {d.verified_at}</p>
    </figure>
  );
}

export function ProjectDiagrams({ p, svgs }: { p: TopicProject; svgs: Record<string, string> }) {
  if (!p.diagrams?.length) return null;
  return <>{p.diagrams.map((d) => <ArchDiagram key={d.id} d={d} svg={svgs[d.id]} />)}</>;
}

export function ProjectCharts({ id }: { id: string }) {
  if (id === "wan22") return <WanCharts />;
  if (id === "comfyui") return <ComfyCharts />;
  if (id === "controlnet") return <ControlNetCharts />;
  if (id === "ace-step") return <AceCharts />;
  return null;
}

/**
 * 宣传片：**每一帧都从数据算出来，一个数字都不手写。**
 *
 * ## 手艺来自我们自己收的那个项目
 *
 * 用的是专项里收录的 `iart-ai/motion-skills`（动效这一格唯一的一个）。
 * 真正落到这支脚本上的有三条：
 *
 * 1. **每一帧的值必须是帧号的纯函数**（`chart-animation` 的第一条铁律）。
 *    不能用 CSS 过渡、不能用任何库的内部动画时钟 —— 渲染器和动画时钟不同步，
 *    出来的画面会闪、会错位。所以这里**逐帧截图**而不是录屏，
 *    页面只暴露一个 `setFrame(n)`，所有位置、透明度、数值都由它算。
 *    副产品是确定性：同一个 commit 渲两次，出一模一样的片。
 * 2. **缓动是最大的杠杆**（`animation-principles`）。
 *    进场 ease-out `cubic-bezier(0.16,1,0.3,1)`、出场 ease-in、
 *    移动 ease-in-out，`linear` 只留给无限循环的背景。
 *    **读者要读的数字绝不能线性插值** —— 线性在标题数字上显得机械，
 *    用 easeOutCubic 才读得出「稳定在一个数上」。
 * 3. **12 栏网格 + 8px 基线**（`shot-composition`）。1920 宽、外边距 100、栏距 24。
 *    一个焦点、每个 beat 只做一次镜头运动。
 *
 * ## 为什么不用 Remotion
 *
 * `chart-animation` 的示例是 Remotion 的 `useCurrentFrame()`，
 * 但它的**原理**（值是帧的纯函数）和框架无关。
 * 我们已经有 Playwright，逐帧截图同样满足那条铁律，还少一层依赖与许可问题。
 *
 * ## 数字全部来自 data/atlas.json
 *
 * 片子和站对不上是这类物料最常见的腐坏。所以这里不写死任何数 ——
 * 数据改了重跑一次，片子跟着变。
 *
 *   node scripts/film.mjs            # 出 assets/atlas-film.mp4
 *   node scripts/film.mjs --frames   # 只出帧，不合成（调试用）
 *   node scripts/film.mjs --at 420   # 只渲一帧看看（配合 motion-skills 的「渲一帧→截图→核对」）
 */
import { chromium } from "playwright";
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";

const A = JSON.parse(readFileSync("data/atlas.json", "utf8"));
const OUT = "assets/film-frames";
const FPS = 30;
const W = 1920, H = 1080;

/** 数字现算 —— **一个都不手写**。 */
const support = A.support ?? [];
const N = {
  domains: A.domains.length,
  models: A.models.length,
  caps: A.capabilities.length,
  orgs: A.orgs.length,
  cells: support.length,
  yes: support.filter((x) => x.state === "yes").length,
  no: support.filter((x) => x.state === "no").length,
  unknown: support.filter((x) => x.state === "unknown").length,
  yesSrc: support.filter((x) => x.state === "yes" && x.src).length,
  projects: A.topics.reduce((n, t) => n + (t.projects?.length ?? 0), 0),
  conflicts: A.topics.reduce((n, t) => n + (t.conflicts?.length ?? 0), 0),
  at: A.generated_at,
};

/**
 * **「说能的每一格都带官方原文」这句话必须当场验，不能想当然。**
 * 万一哪天有一格 yes 没有出处，片子就在撒谎 —— 而片子比页面更难改。
 */
if (N.yesSrc !== N.yes) {
  console.error(`❌ 说「能」的有 ${N.yes} 格，其中带出处的只有 ${N.yesSrc} 格 —— ` +
    `片子里那句「每一格都带官方原文」现在是假话，先补数据再出片。`);
  process.exit(1);
}

/** 对照取真数据里最锋利的一条，不手写。 */
const conflict = A.topics.flatMap((t) => t.conflicts ?? []).find((c) => c.project === "livetalking");
if (!conflict) { console.error("❌ 找不到 livetalking 那条对照，片子第五段没内容"); process.exit(1); }
const strip = (s) => s.replace(/\*\*/g, "");

/** 分镜在 film.html 里（那边才知道每一帧该画什么）。 */
const html = readFileSync("scripts/film.html", "utf8")
  .replace("__DATA__", JSON.stringify({ ...N, conflict: {
    project: "LiveTalking", what: strip(conflict.what),
    said: strip(conflict.said), hit: strip(conflict.hit),
  } }));

writeFileSync("/tmp/film.html", html);

const TOTAL = 840;                       // 28s @30fps
const only = process.argv.includes("--at")
  ? Number(process.argv[process.argv.indexOf("--at") + 1]) : null;

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const br = await chromium.launch();
const page = await br.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
await page.goto(`file:///tmp/film.html`, { waitUntil: "networkidle" });

const frames = only != null ? [only] : [...Array(TOTAL).keys()];
for (const f of frames) {
  await page.evaluate((n) => window.setFrame(n), f);
  await page.screenshot({ path: `${OUT}/${String(f).padStart(5, "0")}.png` });
  if (f % 60 === 0) process.stdout.write(`\r  渲染 ${f}/${TOTAL} 帧`);
}
console.log(`\r  渲染完 ${frames.length} 帧            `);
await br.close();

if (only != null) { console.log(`单帧在 ${OUT}/${String(only).padStart(5, "0")}.png`); process.exit(0); }
if (process.argv.includes("--frames")) process.exit(0);

execFileSync("ffmpeg", ["-y", "-framerate", String(FPS), "-i", `${OUT}/%05d.png`,
  "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "18", "assets/atlas-film.mp4"],
  { stdio: ["ignore", "ignore", "pipe"] });
console.log(`✅ assets/atlas-film.mp4 · ${(TOTAL / FPS).toFixed(1)} 秒 · ${W}×${H} · 数据口径 ${N.at}`);

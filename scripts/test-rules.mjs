/**
 * 校验规则的自测：**拿一条已知是错的数据喂进去，看规则响不响。**
 *
 * ## 为什么必须有这支
 *
 * 「写了校验规则」和「校验规则真的会拦住错」是两件事。
 * 这一轮已经抓到过一个活的反例：verify 里查全站导航用的是通用的 `<nav>` 标签，
 * 而详情页的面包屑**也是** `<nav>` —— 把全站导航整个拆掉，检查照样绿。
 * **那条规则存在，但它拦不住它该拦的东西。**
 *
 * 所以每加一条规则，就在这里加一个「故意写错」的样例。
 * 规则号没被报出来，就当它不存在。
 *
 *   node scripts/test-rules.mjs
 */
import { readFileSync, writeFileSync, copyFileSync, unlinkSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LIVE = join(ROOT, "data/atlas.json");
const BAK = join(ROOT, "data/.atlas.test-backup.json");

/** 每条：改坏一处 → 期望这些规则号被报出来。 */
const CASES = [
  { name: "Skill：cap 不存在 / 原生实现是假模型 / 没写限制 / 没核验日期",
    want: ["R43", "R44", "R45", "R45a"],
    mut: (a) => { a.skills = [{ id: "bad", zh: "坏", en: "bad", cap: "不存在", native: ["查无此模型"],
      opensource: [{ name: "x" }], limits: [], verified_at: "" }]; } },

  { name: "变化事件：只有 after（那是新闻不是 ChangeEvent）/ 影响对象查无此人 / 没来源",
    want: ["R46", "R47", "R48"],
    mut: (a) => { a.change_events = [{ date: "2026-01-01", entity: "kling", after: "变好了",
      affects: ["skill:查无此技能"] }]; } },

  { name: "工具箱：只有链接没有判断（那就是 hao123）",
    want: ["R49"],
    mut: (a) => { a.toolkit = [{ task: "x", site: "某站", url: "https://x", checked_at: "2026-08-09" }]; } },

  { name: "效果：没写是谁说的 / 第三方却没有回源链接",
    want: ["R50", "R51", "R51a"],
    mut: (a) => { a.effect = [{ m: "kling", kind: "third-party", value: "第一名" }]; } },

  { name: "折扣：挂到不存在的平台 / 没有原文",
    want: ["R52", "R52a"],
    mut: (a) => { a.discount = [{ p: "查无此平台", m: "kling", rule: "买多了", off: "5 折" }]; } },

  { name: "可用性：非法 access_type / 有效期已过却还标 available",
    want: ["R53", "R54"],
    mut: (a) => { a.availability[0] = { ...a.availability[0], access_type: "瞎写", valid_to: "2020-01-01", status: "available" }; } },

  { name: "能力格：说「支持」却没有来源（不许猜）",
    want: ["R4"],
    mut: (a) => { a.support[0] = { ...a.support[0], state: "yes", src: undefined }; } },

  { name: "版本谱系：parent 的日期晚于自己（时间倒流的血缘）",
    want: ["R56"],
    mut: (a) => { const c = a.versions.find((v) => v.parent); c.date = "2020-01-01"; } },

  { name: "动线：中间步没有出口（死路）/ 引用了不存在的页",
    want: ["R41", "R42"],
    mut: (a, flows) => { flows.flows[0].steps[0].exits = []; flows.flows[0].steps[1].page = "/查无此页"; } },
];

copyFileSync(LIVE, BAK);
const FLOWS = join(ROOT, "data/flows.json");
const FBAK = join(ROOT, "data/.flows.test-backup.json");
copyFileSync(FLOWS, FBAK);

let bad = 0;
for (const c of CASES) {
  const a = JSON.parse(readFileSync(BAK, "utf8"));
  const f = JSON.parse(readFileSync(FBAK, "utf8"));
  c.mut(a, f);
  writeFileSync(LIVE, JSON.stringify(a, null, 2));
  writeFileSync(FLOWS, JSON.stringify(f, null, 2));

  let out = "";
  try { out = execFileSync("node", [join(ROOT, "scripts/validate.mjs")], { encoding: "utf8" }); }
  catch (e) { out = `${e.stdout ?? ""}${e.stderr ?? ""}`; }

  const miss = c.want.filter((r) => !new RegExp(`\\b${r}\\b`).test(out));
  if (miss.length) { bad += 1; console.log(`✗ ${c.name}\n   没报出：${miss.join(" ")}`); }
  else console.log(`✓ ${c.name}`);
}

copyFileSync(BAK, LIVE); unlinkSync(BAK);
copyFileSync(FBAK, FLOWS); unlinkSync(FBAK);

console.log(bad ? `\n${bad} 条规则是摆设 —— 它存在，但拦不住它该拦的东西。` : `\n${CASES.length} 条规则全部会响。`);
process.exit(bad ? 1 : 0);

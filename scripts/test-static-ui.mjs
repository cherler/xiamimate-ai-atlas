/** Exercise the exported site with a directory-based static host like Pages. */
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { chromium } from "playwright";
import { BASE_PATH, REPOSITORY, STANDALONE, stripBasePath } from "../site.config.mjs";

const root = resolve("out");
const mime = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".txt": "text/plain", ".xml": "application/xml", ".woff2": "font/woff2" };
const server = createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  if (BASE_PATH && pathname !== BASE_PATH && pathname !== `${BASE_PATH}.txt` && !pathname.startsWith(`${BASE_PATH}/`)) {
    res.writeHead(404).end("Outside project site");
    return;
  }
  if (!STANDALONE && pathname.endsWith("/") && pathname !== `${BASE_PATH}/`) {
    res.writeHead(308, { location: pathname.slice(0, -1) }).end();
    return;
  }
  const path = pathname === `${BASE_PATH}.txt` ? "/index.txt" : stripBasePath(pathname);
  const candidates = [join(root, path), join(root, path, "index.html"), join(root, `${path.replace(/\/$/, "")}.html`)];
  const file = candidates.find(f => f.startsWith(`${root}/`) && existsSync(f) && statSync(f).isFile());
  if (!file) { res.writeHead(404).end("Not found"); return; }
  res.writeHead(200, { "content-type": mime[extname(file)] ?? "application/octet-stream" });
  res.end(readFileSync(file));
});
await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  const errors = [];
  const requests = [];
  page.on("pageerror", error => errors.push(`${page.url()}: ${error.message}`));
  page.on("console", message => { if (message.type() === "error") errors.push(`${page.url()}: ${message.text()}`); });
  page.on("request", request => requests.push(new URL(request.url()).pathname));
  page.on("response", response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  if (!STANDALONE) {
    // The existing main-site header is external to this repository.
    await page.route("**/chrome/manifest.json", route => route.fulfill({ json: {} }));
  }
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const [path, expected] of [
      ["/", "先选一个方向"], ["/video/", "AI 视频"], ["/image/", "AI 图像"],
      ["/text/", "AI 文本"], ["/sound/", "AI 声音"], ["/threed/", "AI 3D"],
      ["/avatar/", "AI 数字人"], ["/embodied/", "具身"], ["/world/", "世界"],
      ["/science/", "科学"], ["/model/wan/", "阿里巴巴"],
      ["/topic/video/comfyui/", "ComfyUI"], ["/changes/", "最近有什么变化"],
    ]) {
      const response = await page.goto(`${origin}${BASE_PATH}${path}`, { waitUntil: "networkidle" });
      assert.equal(response.status(), 200, path);
      assert((await page.locator("main").innerText()).includes(expected), `${path}: wrong page content`);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${path}: horizontal overflow at ${width}px`);
    }
    const all = await page.locator("main article").count();
    const filter = page.getByRole("group", { name: "按方向筛选变化" }).getByRole("button", { name: /^AI 视频 / });
    await filter.click();
    assert((await page.locator("main article").count()) < all, "Timeline filter did not hydrate");
    await filter.click();
    assert.equal(await page.locator("main article").count(), all);
    const dates = await page.locator("main article").evaluateAll(els => els.map(el => el.dataset.changeDate));
    assert.deepEqual(dates, [...dates].sort().reverse(), "Timeline is not newest first");

    await page.goto(`${origin}${BASE_PATH}/model/wan/`, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "分享这一页", exact: true }).click();
    const imageHref = await page.getByRole("link", { name: /存这一页的图/ }).getAttribute("href");
    assert(imageHref.startsWith(`${BASE_PATH}/og/`));
    assert.equal((await page.request.get(origin + imageHref)).status(), 200);
    await page.getByRole("button", { name: "这一条不对？", exact: true }).first().click();
    await page.getByPlaceholder("例：这一格该是「支持」，官方文档里有这个参数").first().fill("需要核对当前版本");
    if (STANDALONE) {
      const issue = new URL(await page.getByRole("link", { name: "到 GitHub 提交纠错" }).first().getAttribute("href"));
      assert.equal(issue.origin + issue.pathname, `https://github.com/${REPOSITORY}/issues/new`);
      assert(issue.searchParams.get("body").includes("需要核对当前版本"));
      assert(issue.searchParams.get("body").includes(`${BASE_PATH}/model/wan/`));
      assert.equal(await page.getByPlaceholder("邮箱或微信，不填也能提").count(), 0);
    } else {
      assert.equal(await page.getByRole("button", { name: "提交", exact: true }).count(), 1);
    }
    // A real client-side navigation followed by a direct reload must show the same page.
    await page.locator(`a[href="${BASE_PATH}/changes${STANDALONE ? "/" : ""}"]`).first().click();
    await page.waitForURL(`**${BASE_PATH}/changes${STANDALONE ? "/" : ""}`);
    await page.reload({ waitUntil: "networkidle" });
    assert((await page.locator("main").innerText()).includes("最近有什么变化"));
  }
  if (STANDALONE) assert(!requests.some(path => path.startsWith("/chrome/") || path.startsWith("/v1/")), "Standalone site called main-site services");
  assert.deepEqual(errors, [], "Browser errors");
  console.log(`Desktop/mobile routes, filters, sharing and correction passed at ${BASE_PATH}`);
} finally {
  await browser.close();
  await new Promise(resolve => server.close(resolve));
}

/** Verify exported links, assets and metadata against the selected deployment. */
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { BASE_PATH, SITE_ORIGIN, SITE_URL, stripBasePath } from "../site.config.mjs";

const html = [];
function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith(".html")) html.push(path);
  }
}
walk("out");
assert(html.length > 0, "No exported pages");
const errors = new Set();
const checked = new Set();
function checkPath(url, source) {
  const parsed = new URL(url.replaceAll("&amp;", "&"), SITE_ORIGIN);
  if (parsed.origin !== SITE_ORIGIN || checked.has(parsed.pathname)) return;
  checked.add(parsed.pathname);
  const path = decodeURIComponent(parsed.pathname);
  if (BASE_PATH && path !== BASE_PATH && !path.startsWith(`${BASE_PATH}/`)) {
    errors.add(`${source}: outside base path: ${path}`);
    return;
  }
  const file = join("out", stripBasePath(path));
  if (![file, `${file}.html`, join(file, "index.html")].some(p => existsSync(p) && statSync(p).isFile())) {
    errors.add(`${source}: missing exported target: ${path}`);
  }
}
for (const file of html) {
  const text = readFileSync(file, "utf8");
  for (const match of text.matchAll(/(?:href|src)="(\/[^"\s]*|https?:\/\/[^"\s]*)"/g)) {
    checkPath(match[1], file);
  }
  for (const match of text.matchAll(/<meta[^>]+(?:property|name)="(?:og:image|twitter:image)"[^>]+content="([^"]+)"/g)) {
    assert(match[1].startsWith(`${SITE_URL}/`), `${file}: share image points to another deployment`);
    checkPath(match[1], file);
  }
}
const feed = readFileSync("out/changes.xml", "utf8");
assert(feed.includes(`<link>${SITE_URL}/changes</link>`), "RSS channel uses the wrong site address");
for (const match of feed.matchAll(/<link>([^<]+)<\/link>/g)) checkPath(match[1], "changes.xml");
assert.equal(errors.size, 0, [...errors].join("\n"));
console.log(`Verified ${html.length} pages and ${checked.size} local targets at ${SITE_URL}`);

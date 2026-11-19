// Public build settings. Defaults keep the existing xiamimate.com deployment.
export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "/atlas").replace(/\/+$/, "");
export const SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://xiamimate.com").replace(/\/+$/, "");
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;
export const STANDALONE = process.env.NEXT_PUBLIC_STANDALONE === "true";
export const REPOSITORY = process.env.NEXT_PUBLIC_REPOSITORY ?? "cherler/xiamimate-ai-atlas";

// Next Link adds basePath itself; use this for public files and metadata only.
export function sitePath(path = "/") {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

export function stripBasePath(path) {
  return BASE_PATH && (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`))
    ? path.slice(BASE_PATH.length) || "/"
    : path;
}

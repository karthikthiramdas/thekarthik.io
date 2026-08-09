const BASE_PATH = "/thekarthik.io";

export function sitePath(path: string) {
  if (!path) return `${BASE_PATH}/`;

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (
    normalized === BASE_PATH ||
    normalized.startsWith(`${BASE_PATH}/`)
  ) {
    return normalized.endsWith("/") ? normalized : `${normalized}/`;
  }

  return `${BASE_PATH}${normalized.endsWith("/") ? normalized : `${normalized}/`}`;
}
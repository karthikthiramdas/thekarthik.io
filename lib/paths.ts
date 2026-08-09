export function sitePath(path: string) {
  if (!path) return "/thekarthik.io/";

  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("https://wa.me/")
  ) {
    return path;
  }

  if (path.startsWith("/thekarthik.io/")) {
    return path;
  }

  return `/thekarthik.io${path.startsWith("/") ? path : `/${path}`}`;
}

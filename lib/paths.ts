export function sitePath(path: string) {
  if (!path.startsWith("/")) {
    return `/thekarthik.io/${path}`;
  }

  return `/thekarthik.io${path}`;
}
import type { MetadataRoute } from "next";

const BASE_URL = "https://thekarthik.io";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/work/case-studies/tripstay-goa",
    "/work/case-studies/giri-mane-homestay",
    "/industries",
    "/studio",
    "/journal",
    "/media-kit",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/media-kit"
          ? 0.9
          : 0.7,
  }));
}
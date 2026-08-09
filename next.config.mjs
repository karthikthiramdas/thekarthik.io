/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/thekarthik.io",
  assetPrefix: "/thekarthik.io/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
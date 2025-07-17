import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", //导出静态站点
  basePath: "/w_website",
  assetPrefix: "/w_website/",
  trailingSlash: true, // 推荐开启，避免 GitHub Pages 找不到路径
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", //导出静态站点
  basePath: "/w_website", // 你的 GitHub 仓库名，必须加斜杠
  assetPrefix: "/w_website/", // 静态资源路径前缀，必须以 / 开头、/ 结尾
};

export default nextConfig;

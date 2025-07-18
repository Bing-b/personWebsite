import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  output: "export", //导出静态站点
  basePath: isProd ? "/personWebsite" : "",
  assetPrefix: isProd ? "/personWebsite/" : "",
};

export default nextConfig;

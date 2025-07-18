import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  output: "export", //导出静态站点
  trailingSlash: true,
  basePath: isProd ? "/personWebsite" : "",
  assetPrefix: isProd ? "/personWebsite/" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/personWebsite" : "",
  },
};

export default nextConfig;

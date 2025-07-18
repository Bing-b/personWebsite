import NextImage, { ImageProps } from "next/image";

// 动态路径
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function NextImg(props: ImageProps) {
  let src = props.src;
  if (typeof src === "string" && !src.startsWith("http")) {
    const cleanSrc = src.startsWith("/") ? src.slice(1) : src;
    src = `${basePath}/${cleanSrc}`;
  }

  // 传递所有 props 到 Next.js Image 组件
  return <NextImage {...props} src={src} unoptimized={true} />;
}

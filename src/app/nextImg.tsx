// components/GlobalImage.tsx
import NextImage, { ImageProps } from "next/image";

// 一次性声明基础路径
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function NextImg(props: ImageProps) {
  // 处理原始路径
  let src = props.src;

  // 如果是字符串路径，自动添加 basePath
  if (typeof src === "string" && !src.startsWith("http")) {
    // 确保路径格式正确
    const cleanSrc = src.startsWith("/") ? src.slice(1) : src;
    src = `${basePath}/${cleanSrc}`;
  }

  // 传递所有 props 到 Next.js Image 组件
  return <NextImage {...props} src={src} unoptimized={true} />;
}

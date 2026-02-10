"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import NextImg from "@/app/nextImg";

// 顶部轮播logo
const images = [
  "/images/wise.webp",
  "/images/dropbox.webp",
  "/images/cosmos.webp",
  "/images/airbnb.webp",
  "/images/loom.webp",
];

// 本站技术支持
const technicals = [
  {
    icon: "/images/nextjs.svg",
    text: "",
    link: "https://nextjs.org/",
  },
  {
    icon: "/images/tailwindcss.svg",
    text: "tailwindcss",
    link: "https://tailwindcss.com/",
  },
  {
    icon: "/images/React.svg",
    text: "React",
    link: "https://react.dev/",
  },
  {
    icon: "/images/motion.avif",
    text: "Motion",
    link: "https://motion.dev/",
  },
  {
    icon: "/images/Typescript.svg",
    text: "Typescript",
    link: "https://www.typescriptlang.org/zh/",
  },

  {
    icon: "/images/GSAP.svg",
    text: "GSAP",
    link: "https://gsap.com/",
  },
];

/** 淡入动画容器 */
export function MotionItem({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: delay ?? 0, duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      {children}
    </motion.div>
  );
}

/** Hero  */
export default function Hero() {
  const [index, setIndex] = useState(0);

  // 轮播图标
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // 获取当前索引对应的前 3 张图，循环拼接
  const getStackedImages = () => {
    const stack = [];
    for (let i = 0; i < 3; i++) {
      stack.push(images[(index + i) % images.length]);
    }
    return stack;
  };

  return (
    <div className="relative pt-[240px] pb-[160px] flex flex-col justify-center items-center overflow-hidden">
      {/* 背景效果层 - 提升层级并修正定位 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 底色 */}
        <div className="absolute inset-0 bg-[#fdfdfd]"></div>

        {/* 氛围灯 */}
        <div className="absolute top-[15%] left-[10%] w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[25%] right-[12%] w-[550px] h-[550px] bg-red-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* 单侧高达装饰 - 仅保留左侧并放大 */}
        <div className="absolute -bottom-10 -right-90 w-[800px] h-[800px] opacity-[0.12] select-none pointer-events-none rotate-[-0deg] scale-[1.5]">
          <NextImg src="/images/gundam_profile.png" width={800} height={800} alt="gundam left" className="w-full h-full object-contain" />
        </div>
        <div className="absolute -bottom-10 -left-90 w-[800px] h-[800px] opacity-[0.12] select-none pointer-events-none rotate-[-0deg] scale-[1.5] rotate-y-180">
          <NextImg src="/images/gundam_profile.png" width={800} height={800} alt="gundam left" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* 内容层 - 确保在装饰层之上 */}
      <div className="relative z-10 flex flex-col items-center">

        <MotionItem delay={0.2}>
          <div className="relative w-[90px] h-[90px] mb-12">
            {getStackedImages().map((src, i) => {
              const zIndex = 10 - i;
              const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
              const yOffset = i * 22;
              const scale = 1 - i * 0.25;
              const grayscale = i === 0 ? "0%" : i === 1 ? "40%" : "90%";
              return (
                <motion.img
                  key={`${src}-${i}-${index}`}
                  src={`${basePath}${src}`}
                  className="absolute w-full h-full object-cover rounded-[28px] shadow-2xl z-10 border border-black/5"
                  initial={{ opacity: 0, y: -yOffset - 30, scale: scale - 0.15 }}
                  animate={{ opacity: 1, y: -yOffset, scale }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  style={{ zIndex, filter: `grayscale(${grayscale})` }}
                />
              );
            })}
          </div>
        </MotionItem>

        <MotionItem delay={0.4}>
          <h1 className="text-8xl md:text-[80px] font-black text-center font-Atkinson tracking-tighter text-black leading-none mb-12">
            Stay true , be you
          </h1>
        </MotionItem>

        <MotionItem delay={0.6}>
          <div className="max-w-2xl px-6">
            <p className="text-[#888] text-xl md:text-xl font-medium text-center leading-relaxed">
              世上只有一种英雄主义，就是在认清生活真相之后依然热爱生活。
              <span className="block mt-4 text-xs font-black text-black/20 uppercase tracking-[0.4em] font-mono">Real_Heroism // Romain Rolland</span>
            </p>
          </div>
        </MotionItem>

        <MotionItem delay={0.8}>
          <div className="mt-14 flex items-center gap-6">
            <a
              href="https://bing-b.github.io/vue3/"
              target="_blank"
              className="group relative flex items-center gap-3 px-6 h-[38px] bg-black text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:pr-8 active:scale-95 shadow-[0_10px_25px_rgba(0,0,0,0.1)]"
            >
              <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
              <span className="relative z-10">花猫乐园</span>
              <div className="absolute right-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a
              href="https://bing-b.github.io/BanBing/"
              target="_blank"
              className="group flex items-center gap-3 px-6 h-[38px] border border-black/10 bg-white text-black/50 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:text-black hover:bg-black/5 transition-all active:scale-95"
            >
              Explore Banbing
              <div className="w-4 h-4 rounded-full bg-black/5 flex items-center justify-center transition-transform group-hover:translate-x-1">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </MotionItem>

        {/* 底部装饰：滚动提示 */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-20">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] font-mono">Scroll_To_Deploy</span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-black to-transparent"></div>
        </div>

      </div>
    </div>
  );
}

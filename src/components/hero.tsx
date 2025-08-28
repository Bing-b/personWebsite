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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: delay ?? 0, duration: 0.5 }}
      style={{ marginBottom: 12 }}
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
    <div className="pt-[180px] flex flex-col justify-center items-center">
      <MotionItem delay={0.2}>
        <div className="relative w-[88px] h-[88px] rounded-xl">
          {getStackedImages().map((src, i) => {
            const zIndex = 10 - i;
            const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
            const yOffset = i * 18;
            const scale = 1 - i * 0.28;
            const grayscale = i === 0 ? "0%" : i === 1 ? "30%" : "80%";
            return (
              <motion.img
                key={`${src}-${i}-${index}`}
                src={`${basePath}${src}`}
                className="absolute w-full h-full object-cover rounded-3xl shadow-lg z-10"
                initial={{ opacity: 0, y: -yOffset - 20, scale: scale - 0.1 }}
                animate={{ opacity: 1, y: -yOffset, scale }}
                transition={{ duration: 0.3 }}
                style={{ zIndex, filter: `grayscale(${grayscale})` }}
              />
            );
          })}
        </div>
      </MotionItem>

      <MotionItem delay={0.3}>
        <h1 className="text-7xl font-bold mt-10 text-center font-Atkinson">
          Stay true, be you.
        </h1>
      </MotionItem>

      <MotionItem delay={0.5}>
        <p className="text-[#707070] mt-5">
          世上只有一种英雄主义， 就是在认清生活真相之后依然热爱生活。
        </p>
      </MotionItem>

      <MotionItem delay={0.7}>
        <div className="mt-14 flex items-center gap-5">
          <a
            href="https://bing-b.github.io/vue3/"
            target="_blank"
            className="flex items-center gap-1 px-4 h-[36px] py-2 bg-[#333] hover:bg-black text-white rounded-4xl text-sm  duration-300 transition"
          >
            <NextImg src="/images/cat.svg" width={16} height={16} alt="cat" />
            花猫乐园
          </a>
          <a
            href="https://bing-b.github.io/BanBing/"
            target="_blank"
            className="relative  px-4 py-2  h-[36px] font-bold rounded-full flex  text-sm gap-2 items-center justify-center   hover:bg-[#4040400f]  hover:shadow-border-[#4040403d] cursor-pointer transition-colors ease-out border border-[#40404029]"
          >
            访问 Banbing
            <div className="w-6 h-6  rounded-full bg-[#40404014] p-1">
              <NextImg
                src="/images/right_arrow.svg"
                width={16}
                height={16}
                alt="cat"
              />
            </div>
          </a>
        </div>
      </MotionItem>

      <MotionItem delay={0.8}>
        <p className="text-[#707070] text-sm mt-[100px]">感谢本站技术支持</p>
      </MotionItem>
      <MotionItem delay={1}>
        <div className="flex items-center gap-10 mt-10">
          {technicals.map((item, index) => (
            <a
              href={item.link}
              target="_blank"
              key={index}
              className="flex gap-2 items-center transition duration-300 !grayscale hover:!grayscale-0 hover:scale-110"
            >
              <NextImg
                className={`inline-block h-[28px] !w-auto   ${
                  index === 1 ? "!h-[22px]" : ""
                }  ${index === 5 ? "!h-[24px]" : ""}`}
                src={item.icon}
                width={30}
                height={28}
                alt="logo"
              />

              <p
                className={`font-bold text-[#767676] hover:text-[#333] ${
                  item.text ? "block" : "hidden"
                } `}
              >
                {item.text}
              </p>
            </a>
          ))}
        </div>
      </MotionItem>
    </div>
  );
}

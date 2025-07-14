"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { div, img, p } from "motion/react-client";

const images = ["/images/wise.webp", "/images/dropbox.webp"];

const technicals = [
  {
    icon: "/images/nextjs.svg",
    text: "",
  },
  {
    icon: "/images/tailwindcss.svg",
    text: "tailwindcss",
  },
  {
    icon: "/images/React.svg",
    text: "React",
  },
  {
    icon: "/images/motion.avif",
    text: "Motion",
  },
  {
    icon: "/images/Typescript.svg",
    text: "Typescript",
  },

  {
    icon: "/images/eslint.svg",
    text: "",
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
        <div className="relative w-[88px] h-[88px] rounded-xl ">
          {getStackedImages().map((src, i) => {
            const zIndex = 10 - i;
            const yOffset = i * 18;
            const scale = 1 - i * 0.28;
            const grayscale = i === 0 ? "0%" : i === 1 ? "30%" : "80%";
            return (
              <motion.img
                key={`${src}-${i}-${index}`}
                src={src}
                className="absolute w-full h-full object-cover rounded-3xl shadow-lg"
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
        <h1 className="text-7xl font-bold mt-10 text-center">
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
            href=""
            className="inline-block px-4 py-2 bg-[#333] hover:bg-black text-white rounded-4xl text-sm  duration-300 transition"
          >
            进入博客
          </a>
          <a
            href=""
            className="relative  px-4 py-2 font-bold rounded-full flex  text-sm gap-2 items-center justify-center   hover:bg-[#4040400f]  hover:shadow-border-[#4040403d] cursor-pointer transition-colors ease-out border border-[#40404029]"
          >
            Get my phone
            <div className="w-6 h-6  rounded-full bg-[#40404014] p-1">
              <img className="w-4" src="/images/right_arrow.svg" alt="" />
            </div>
          </a>
        </div>
      </MotionItem>

      <p className="text-[#707070] text-sm mt-[100px]">本站技术支持</p>

      <div className="flex items-center gap-10 mt-10">
        {technicals.map((item, index) => (
          <div className="flex gap-2 items-center grayscale hover:grayscale-0">
            <img
              className={`inline-block max-h-[30px] ${
                index === 0 ? "h-[50px]" : ""
              }  ${index === 4 ? "h-[20px]" : ""}`}
              src={item.icon}
            />

            <p
              className={`font-bold text-[#767676] hover:text-[#333] ${
                item.text ? "block" : "hidden"
              } `}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

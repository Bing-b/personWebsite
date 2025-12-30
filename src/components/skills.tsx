"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NextImg from "@/app/nextImg";

gsap.registerPlugin(ScrollTrigger);

// 编程图标
const ICONS = [
  "/images/programming/js.png",
  "/images/programming/python.png",
  "/images/programming/chatgpt.png",
  "/images/programming/vite.png",
  "/images/programming/react.png",
  "/images/programming/sass.png",
  "/images/programming/wordpress.png",
  "/images/programming/typescript.png",
  "/images/programming/next.png",
  "/images/programming/php.png",
  "/images/programming/vue.png",
  "/images/programming/gasp.png",
  "/images/programming/tailwindcss.png",
  "/images/programming/github.png",
];

// 固定图标分布坐标（相对于中心）
const POSITIONS = [
  { x: -430, y: 20 },
  { x: 200, y: 380 },
  { x: 120, y: -280 },
  { x: -760, y: 100 },
  { x: 600, y: -200 },
  { x: 320, y: 0 },
  { x: 650, y: 270 },
  { x: -250, y: -180 },
  { x: -550, y: -340 },
  { x: -450, y: 300 },
  { x: 0, y: 320 },
  { x: 400, y: 220 },
  { x: 750, y: 60 },
  { x: -550, y: -180 },
];

// 中间要显示的文字行
const LINES = [
  "10+ open-source projects！",
  "50+ web development skills",
  "100+ projects contributed",
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const icons = gsap.utils.toArray<HTMLImageElement>(".icon");

    // 图标初始居中且隐藏
    gsap.set(icons, {
      x: 0,
      y: 0,
      opacity: 0,
    });

    // 图标扩散 + 漂浮动画
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
          once: true,
        },
      })
      .to(
        icons,
        {
          x: (i) => POSITIONS[i % POSITIONS.length].x,
          y: (i) => POSITIONS[i % POSITIONS.length].y,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.05,
          onComplete: () => {
            icons.forEach((el) => {
              gsap.to(el, {
                x: `+=${gsap.utils.random(-30, 40)}`,
                y: `+=${gsap.utils.random(-20, 20)}`,
                duration: gsap.utils.random(2, 3),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            });
          },
        },
        0
      );

    // 文字滚动显示动画 timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${LINES.length * 800}`, // 文字滚动显示区长度，可调整
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      linesRef.current,
      { opacity: 0, y: 300 },
      {
        opacity: 1,
        y: 0,
        stagger: {
          each: 1, // 每一行完成一个动画之后再下一个
        },
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[900px] flex items-center justify-center overflow-hidden bg-white py-[100px]"
    >
      {/* 中间文字容器（宽度800px） */}
      <div className="relative z-10 w-[800px] flex flex-col items-center justify-center text-center pointer-events-none">
        <h1 className="text-[18px] font-bold mb-10">
          my achievement, but is fake😂
        </h1>
        <div className="space-y-[16px]">
          {LINES.map((line, i) => (
            <div
              key={i}
              ref={(el) => {
                linesRef.current[i] = el;
              }}
              className="text-[36px] opacity-0 font-bold text-[#363636] font-[sans-serif]"
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* 图标层 */}
      <div className="absolute inset-0 pointer-events-none">
        {ICONS.map((src, i) => (
          <NextImg
            key={i}
            className="icon absolute  opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={src}
            width={72}
            height={72}
            alt="skill"
          />
        ))}
      </div>
    </section>
  );
}

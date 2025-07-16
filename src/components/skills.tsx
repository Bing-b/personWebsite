"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
  "前端技术？手拿把掐！",
  "后端代码？略懂略懂~",
  "领着实习生的钱，干着 CTO 的活",
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
          start: "top 70%",
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
        end: "+=800", // 文字滚动显示区长度，可调整
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      linesRef.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 2,
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
        <h1 className="text-[18px] font-bold mb-10">鄙人毕生（20-25）成就😂</h1>
        <div className="space-y-[16px]">
          {LINES.map((line, i) => (
            <div
              key={i}
              ref={(el) => (linesRef.current[i] = el)}
              className="text-[36px] opacity-0 font-bold text-[#363636]"
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* 图标层 */}
      <div className="absolute inset-0 pointer-events-none">
        {ICONS.map((src, i) => (
          <img
            key={i}
            src={src}
            className="icon absolute w-18 h-18 opacity-0"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </section>
  );
}

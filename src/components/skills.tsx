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

// 固定图标分布坐标
const POSITIONS = [
  { x: -550, y: -180 },
  { x: 350, y: 380 },
  { x: 280, y: -350 },
  { x: -750, y: 180 },
  { x: 600, y: -220 },
  { x: 480, y: 80 },
  { x: 650, y: 320 },
  { x: -350, y: -280 },
  { x: -650, y: -350 },
  { x: -520, y: 320 },
  { x: 80, y: 450 },
  { x: 500, y: -80 },
  { x: 750, y: 150 },
  { x: -250, y: 350 },
];

// 中间要显示的文字行
const LINES = [
  { zh: "10+ 深度参与的开源项目", en: "Active Open-Source Contributions" },
  { zh: "50+ 掌握的技术栈模块", en: "Modern Tech Stack Proficiency" },
  { zh: "100+ 项目落地与技术实战", en: "Successful Project Deliveries" },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const icons = gsap.utils.toArray<HTMLImageElement>(".skill-icon");

    // 图标初始居中且隐藏
    gsap.set(icons, {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0.4,
    });

    // 创建主 Timeline 控制图标扩散
    const iconTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 35%",
        once: true,
      },
    });

    iconTl.to(icons, {
      x: (i) => POSITIONS[i % POSITIONS.length].x,
      y: (i) => POSITIONS[i % POSITIONS.length].y,
      opacity: 0.9,
      scale: 1,
      duration: 2.2,
      ease: "expo.out",
      stagger: 0.05,
      onComplete: () => {
        // 浮动动画
        icons.forEach((el) => {
          gsap.to(el, {
            x: `+=${gsap.utils.random(-35, 35)}`,
            y: `+=${gsap.utils.random(-25, 25)}`,
            rotation: gsap.utils.random(-8, 8),
            duration: gsap.utils.random(5, 7),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      },
    });

    // 文字滚动 Timeline
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${LINES.length * 1200}`,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    LINES.forEach((_, i) => {
      textTl.fromTo(
        linesRef.current[i],
        { opacity: 0, y: 120, filter: "blur(30px)", scale: 0.9 },
        { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, duration: 1.8, ease: "power3.out" },
        "+=0.3"
      )
        .to(
          linesRef.current[i],
          { opacity: 0, y: -120, filter: "blur(15px)", scale: 1.1, duration: 1.2, ease: "power3.in" },
          "+=2.5"
        );
    });

  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#ffffff]"
    >
      {/* 极简背景装饰 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      {/* 中间文字容器 */}
      <div className="relative z-20 w-full max-w-6xl px-8 flex flex-col items-center justify-center text-center pointer-events-none">
        <div className="flex items-center gap-6 mb-16 opacity-30">
          <span className="w-16 h-[2px] bg-black"></span>
          <h2 className="text-[11px] font-black text-black tracking-[0.6em] uppercase">Core_Intelligence_Stack</h2>
          <span className="w-16 h-[2px] bg-black"></span>
        </div>

        <div className="relative w-full h-[300px] flex items-center justify-center">
          {LINES.map((line, i) => (
            <div
              key={i}
              ref={(el) => {
                linesRef.current[i] = el;
              }}
              className="absolute inset-0 flex flex-col items-center justify-center opacity-0"
            >
              <h3 className="text-6xl md:text-9xl font-black text-black mb-8 tracking-tighter font-Atkinson uppercase leading-[0.85] italic">
                {line.zh}
              </h3>
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-red-600"></span>
                <p className="text-2xl md:text-3xl font-black text-red-600 tracking-[0.1em] uppercase">
                  {line.en}
                </p>
                <span className="w-8 h-[1px] bg-red-600"></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 技能图标层 - 高品质分层效果 */}
      <div className="absolute inset-0 pointer-events-none z-10 w-full h-full">
        {ICONS.map((src, i) => (
          <div
            key={i}
            className="skill-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
          >
            <div className="relative p-7 bg-white/90 backdrop-blur-md border border-black/5 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)] hover:-translate-y-4 transition-all duration-700">
              <NextImg
                src={src}
                width={56}
                height={56}
                className="opacity-100 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 scale-90 group-hover:scale-110"
                alt="skill"
              />
              {/* 装饰性细节 */}
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-black/10 rounded-tr-lg"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-black/10 rounded-bl-lg"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 底部装饰 */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-[11px] font-black text-black/10 tracking-[0.5em] uppercase flex items-center gap-4">
        <span>01</span>
        <div className="w-20 h-[1px] bg-black/5"></div>
        <span>Milestone_Timeline</span>
        <div className="w-20 h-[1px] bg-black/5"></div>
        <span>03</span>
      </div>
    </section>
  );
}

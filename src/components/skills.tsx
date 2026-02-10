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
  { x: -600, y: -250 },
  { x: 500, y: 300 },
  { x: 350, y: -380 },
  { x: -700, y: 220 },
  { x: 750, y: -280 },
  { x: 480, y: -50 },
  { x: 680, y: 380 },
  { x: -450, y: -350 },
  { x: -780, y: -380 },
  { x: -580, y: 380 },
  { x: 120, y: 420 },
  { x: 550, y: -150 },
  { x: 780, y: 150 },
  { x: -300, y: 400 },
];

// 中间要显示的文字行
const LINES = [
  { zh: "覆盖全栈的底层构建能力", en: "Full-Stack Architecture Mastery" },
  { zh: "追求极致的数字美学逻辑", en: "Pursuit of Digital Aesthetic Logic" },
  { zh: "驱动创构的技术演进基因", en: "Tech Evolution & Innovation DNA" },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const icons = gsap.utils.toArray<HTMLDivElement>(".skill-icon");
    if (!sectionRef.current) return;

    // 1. 初始状态：聚在中心，缩小透明
    gsap.set(icons, {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0.1,
      rotation: () => gsap.utils.random(-180, 180)
    });

    // 2. 绽开动画
    const blossomTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
        toggleActions: "play none none reverse",
      }
    });

    blossomTl.to(icons, {
      x: (i) => POSITIONS[i % POSITIONS.length].x,
      y: (i) => POSITIONS[i % POSITIONS.length].y,
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 1.8,
      ease: "elastic.out(1, 0.75)",
      stagger: {
        each: 0.04,
        from: "center"
      },
      onComplete: () => {
        // 持续的浮动动画 - 建立微动基准
        icons.forEach((icon) => {
          gsap.to(icon, {
            x: "+=15",
            y: "+=15",
            duration: "random(4, 8)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });
      }
    });

    // 3. 鼠标交互：碰撞偏移效果
    icons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          x: "+=10",
          y: "-=10",
          scale: 1.15,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto"
        });
      });
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)",
          overwrite: "auto"
        });
      });
    });

    // 4. 文字切换 - 仅保留文字动画，移除图标滚动视差
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${LINES.length * 1000}`,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      }
    });

    LINES.forEach((_, i) => {
      masterTl
        .fromTo(linesRef.current[i],
          { opacity: 0, scale: 0.8, y: 100, filter: "blur(20px)" },
          { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 2, ease: "power4.out" }
        )
        .to(linesRef.current[i],
          { opacity: 0, scale: 1.2, y: -100, filter: "blur(20px)", duration: 1.5, ease: "power4.in" },
          "+=2"
        );
    });

  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* 技术背景网格 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* 顶部标题 - 价格/规格感 */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-[1px] w-8 bg-black/10"></span>
          <span className="text-[10px] font-mono font-black text-black/20 uppercase tracking-[0.5em]">Inventory_Valuation_Report</span>
          <span className="h-[1px] w-8 bg-black/10"></span>
        </div>
        <h2 className="text-2xl font-black text-black tracking-tighter uppercase font-OPPOSansB">
          Technical <span className="text-red-600">Assets</span>
        </h2>
        <div className="mt-4 flex items-center gap-1.5 px-3 py-1 bg-black/5 rounded-full border border-black/5">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
          <span className="text-[9px] font-mono text-black/40 font-bold uppercase tracking-widest">Market_Price: High_Potential</span>
        </div>
      </div>

      {/* 中心文字逻辑 */}
      <div className="relative z-20 w-full max-w-5xl px-8 pointer-events-none">
        <div className="relative w-full h-[200px] flex items-center justify-center">
          {LINES.map((line, i) => (
            <div
              key={i}
              ref={(el) => { linesRef.current[i] = el; }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0"
            >
              <h3 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tighter font-Atkinson uppercase italic leading-none">
                {line.zh}
              </h3>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-6 bg-red-600/30"></div>
                <p className="text-lg md:text-xl font-black text-red-600 tracking-[0.2em] uppercase font-mono">
                  {line.en}
                </p>
                <div className="h-[1px] w-6 bg-red-600/30"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 技能图标层 - 绽开视差效果 */}
      <div ref={iconContainerRef} className="absolute inset-0 pointer-events-none z-10">
        {ICONS.map((src, i) => (
          <div
            key={i}
            className="skill-icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative p-6 bg-white border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[28px] group hover:scale-110 transition-all duration-500">
              <NextImg
                src={src}
                width={48}
                height={48}
                className="grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
                alt="skill"
              />
              {/* 微小的 UI 装饰 */}
              <div className="absolute inset-1 border border-black/5 rounded-[24px]"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 scale-0 group-hover:scale-100 transition-transform rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* 底部数据流 */}
      <div className="absolute bottom-12 left-0 w-full px-12 flex justify-between items-end opacity-20 pointer-events-none font-mono text-[9px] font-bold text-black uppercase tracking-[0.2em]">
        <div className="flex flex-col gap-1">
          <span>Lat: 31.2304° N</span>
          <span>Lon: 121.4737° E</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span>Sync: 100%_SECURE</span>
          <span>Payload: FULL_CAPACITY</span>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NextImg from "@/app/nextImg";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const containerRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. 照片视差和缩放
      gsap.fromTo(
        photoRef.current,
        { scale: 1.2, clipPath: "inset(10% 10% 10% 10% rounded 40px)" },
        {
          scale: 1,
          clipPath: "inset(0% 0% 0% 0% rounded 40px)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );

      // 2. 文字交错浮现
      gsap.from(".about-text-item", {
        x: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-[60px] relative mx-auto max-w-[1600px] h-[850px] bg-[#4040400f] rounded-4xl px-[80px] py-[80px] flex items-center justify-between overflow-hidden"
    >
      {/* 背景装饰大字 - 增强空间感 */}
      <div className="absolute -left-10 top-20 text-[200px] font-black text-black/[0.02] select-none pointer-events-none">
        CREATIVE
      </div>

      {/* 左侧：个人照片区域 */}
      <div className="relative w-1/2 h-full flex items-center justify-center">
        <div
          ref={photoRef}
          className="relative w-[500px] h-[650px] overflow-hidden shadow-2xl"
        >
          <NextImg
            src="/images/people.webp" // 换成你的个人照或代表你风格的图
            className="object-cover w-full h-full"
            width={500}
            height={650}
            alt="About Me"
          />
          {/* 照片上的悬浮标签 */}
          <div className="absolute bottom-10 -right-3 bg-white p-3 rounded-2xl shadow-xl about-text-item">
            <p className="text-sm text-gray-400">Location</p>
            <p className="font-bold text-gray-800">四川 成都</p>
          </div>
        </div>
      </div>

      {/* 右侧：文案内容区域 */}
      <div ref={textRef} className="w-1/2 pl-20 z-10">
        <h4 className="about-text-item text-blue-500 font-mono mb-4">
          / ABOUT ME
        </h4>
        <h2 className="about-text-item text-6xl font-bold text-gray-800 mb-8 leading-tight">
          构建数字世界的
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-400">
            艺术家与开发者
          </span>
        </h2>

        <p className="about-text-item text-xl text-gray-500 max-w-[500px] mb-12 leading-relaxed">
          你好！我是 BING。专注于前端开发与视觉交互设计。
          我喜欢在代码中寻找美感，利用 React 和 GSAP 打造令人愉悦的用户体验。
        </p>

        {/* 个人数据/技能统计项 */}
        <div
          ref={statsRef}
          className="about-text-item grid grid-cols-2 gap-8 border-t border-black/5 pt-12"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-800">3+</h3>
            <p className="text-gray-400 text-sm mt-1">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800">20+</h3>
            <p className="text-gray-400 text-sm mt-1">Projects Completed</p>
          </div>
        </div>

        {/* 社交/联系按钮 */}
        <div className="about-text-item mt-12 flex gap-4">
          <button className="px-8 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            联系我
          </button>
        </div>
      </div>
    </div>
  );
}

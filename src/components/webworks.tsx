"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NextImg from "@/app/nextImg";

gsap.registerPlugin(ScrollTrigger);

const workList = [
  {
    icon: "/images/p3_icon.svg",
    name: "彩科生物",
    url: "https://www.lychix.com/",
    img: "/images/p3.png",
    bg: "#0d121f",
    border: "#444",
    font: "#fafafa",
    view: "#fafafa",
    btnbg: "#101625",
  },
  {
    icon: "/images/p5_icon.svg",
    name: "鸣石基金",
    url: "https://www.mingshiim.com/",
    img: "/images/p5.png",
    bg: "#1a1a2e",
    border: "#666",
    font: "#e0e0e0",
    view: "#e0e0e0",
    btnbg: "#0a0a0f",
  },
  {
    icon: "/images/p1_icon.svg",
    name: "太子家具",
    url: "https://www.taizicasa.com/",
    img: "/images/p1.png",
    bg: "#02270e",
    border: "#33ff7733",
    font: "#3aea74",
    view: "#010a04",
    btnbg: "#0ce956",
  },
  {
    icon: "/images/p2_icon.svg",
    name: "博城医疗",
    url: "https://bochengmed.com",
    img: "/images/p2.png",
    bg: "#102030",
    border: "#445566",
    font: "#f0f0f0",
    view: "#050810",
    btnbg: "#f0f0f0",
  },
  {
    icon: "/images/p4_icon.svg",
    name: "紫羚云",
    url: "https://www.gazellio.com/",
    img: "/images/p4.png",
    bg: "#250718",
    border: "#4d1a36",
    font: "#ff80cc",
    view: "#0a0a0a",
    btnbg: "#ff80cc",
  },
];

export default function WebWorks() {
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = slideRef.current;
    if (!el) return;

    gsap.fromTo(
      ".web-work-card",
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <div
      ref={slideRef}
      className="px-8 py-48 relative bg-[#f4f4f7] overflow-hidden"
    >
      {/* 背景装饰 - 柔和的亮色渐变 */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-white to-transparent opacity-100"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[800px] h-[800px] bg-red-600/[0.03] rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col items-center mb-32">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-[2px] bg-black/10"></span>
            <p className="font-black text-[10px] text-black/30 font-mono tracking-[0.5em] uppercase">
              Selected_Works
            </p>
            <span className="w-16 h-[2px] bg-black/10"></span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-black font-Atkinson tracking-tighter uppercase text-center leading-[0.9]">
            DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/20 to-black/60">ARTIFACTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {workList.map((i, index) => (
            <div
              key={index}
              className="web-work-card group relative p-[1px] rounded-[48px] overflow-hidden transition-all duration-700 hover:-translate-y-4"
            >
              {/* 边框高光效果 */}
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-200 to-transparent group-hover:from-red-600/30 transition-all duration-700"></div>

              <div
                className="relative overflow-hidden rounded-[47px] bg-white border border-zinc-200 shadow-[0_10px_50px_rgba(0,0,0,0.03)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700"
              >
                <div className="p-10 pb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center border border-zinc-100 group-hover:border-red-600/20 transition-all">
                        <NextImg src={i.icon} width={32} height={32} alt="icon" className="object-contain" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-zinc-900 text-xl tracking-tight leading-none mb-1.5">{i.name}</span>
                        <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-widest">Digital_Architecture</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-10 pb-10 relative">
                  <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
                    <NextImg src={i.img} width={600} height={400} className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-700" alt="work" />

                    {/* 悬浮覆盖层 */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-[2px]">
                      <a
                        href={i.url}
                        target="_blank"
                        className="px-8 py-3 bg-black text-white font-black font-Atkinson rounded-full text-[10px] uppercase tracking-[0.2em] hover:scale-110 transition-transform shadow-2xl"
                      >
                        Launch Preview
                      </a>
                    </div>
                  </div>
                </div>

                {/* 装饰细节 */}
                <div className="absolute top-8 right-8 text-[12px] font-mono text-zinc-100 group-hover:text-red-600/10 transition-colors font-black">
                  #{String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
      className="px-8 py-48 relative bg-[#080808] overflow-hidden"
    >
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/5 to-transparent opacity-10"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center mb-32">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-16 h-[2px] bg-white/20"></span>
            <p className="font-black text-[10px] text-white/30 font-mono tracking-[0.5em] uppercase">
              Production_Gallery
            </p>
            <span className="w-16 h-[2px] bg-white/20"></span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white font-Atkinson tracking-tighter uppercase text-center leading-[0.9]">
            DIGITAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10">ARTIFACTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {workList.map((i, index) => (
            <div
              key={index}
              className="web-work-card group relative p-[1px] rounded-[48px] overflow-hidden transition-all duration-700 hover:-translate-y-4"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent group-hover:from-red-600/30 transition-all duration-700"></div>

              <div
                className="relative overflow-hidden rounded-[47px] bg-[#121212] border border-white/5 shadow-2xl"
              >
                <div className="p-10 pb-0">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-all">
                        <NextImg src={i.icon} width={28} height={28} alt="icon" className="object-contain" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-white text-lg tracking-tight">{i.name}</span>
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Client_Project</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-10 relative">
                  <div className="relative overflow-hidden rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:-translate-y-3 group-hover:scale-[1.02]">
                    <NextImg src={i.img} width={600} height={400} className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" alt="work" />

                    {/* 悬浮覆盖层 */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center backdrop-blur-sm">
                      <a
                        href={i.url}
                        target="_blank"
                        className="px-8 py-3 bg-white text-black font-black font-Atkinson rounded-full text-xs uppercase tracking-widest hover:scale-110 transition-transform shadow-2xl"
                      >
                        Launch Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

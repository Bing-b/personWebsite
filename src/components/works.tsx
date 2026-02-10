"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NextImg from "@/app/nextImg";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cards = gsap.utils.toArray<HTMLDivElement>(".bento-card");

    gsap.fromTo(
      cards,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="relative py-40 px-4 bg-[#0a0a0f] overflow-hidden">
      {/* Background Decorative Layer */}
      <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">

        {/* 1. Identity Card (2x2) - Dark Schematic */}
        <div className="bento-card col-span-1 md:col-span-2 row-span-2 relative rounded-[40px] overflow-hidden group border border-white/5 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md shadow-2xl">
          <NextImg
            src="/images/gundam_bg.png"
            className="w-full h-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            width={600}
            height={600}
            alt="Pilot Identity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/20 to-transparent p-12 flex flex-col justify-end">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-full">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                <span className="text-[10px] text-red-500 font-black uppercase tracking-widest">Master_Grade</span>
              </div>
              <span className="text-[10px] font-mono text-white/30 tracking-[0.2em] uppercase">Status: Operational</span>
            </div>
            <h2 className="text-7xl font-black font-Atkinson tracking-tighter text-white flex items-center gap-4 mb-4">
              BING
              <span className="text-xl text-red-600 font-mono">/ 07</span>
            </h2>
            <div className="h-0.5 w-24 bg-white/20 mb-8"></div>
            <p className="text-white/50 text-base max-w-[90%] font-medium leading-relaxed">
              Based in China. Driven by logic and aesthetic. <br />
              Building digital experiences with mechanical precision and sleek interfaces.
            </p>
          </div>
        </div>

        {/* 2. Gunpla Builder (2x1) */}
        <div className="bento-card col-span-1 md:col-span-2 row-span-1 bg-[#101018] border border-white/5 rounded-[40px] p-10 flex flex-row items-center justify-between relative overflow-hidden group shadow-xl hover:bg-[#151520] transition-all">
          <div className="z-10 max-w-[70%]">
            <h3 className="text-2xl font-black text-white font-Atkinson tracking-tight mb-4 uppercase flex items-center gap-3">
              Gunpla_Expert
              <span className="text-xs bg-white/5 px-2 py-1 rounded text-white/40 tracking-widest font-mono">Ver.Ka</span>
            </h3>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              我沉迷于高达模型的精密拼装与改造。
              Mechanical structures in Gunpla inspire my software architecture.
            </p>
          </div>
          <div className="relative w-40 h-40 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-all duration-700">
            <NextImg src="/images/logo.png" width={160} height={160} alt="gunpla" className="brightness-200" />
          </div>
        </div>

        {/* 3. Quote Card (1x1) */}
        <div className="bento-card col-span-1 row-span-1 bg-red-600 rounded-[40px] p-8 flex flex-col justify-center relative overflow-hidden group shadow-2xl">
          <div className="relative z-10 text-white">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
              <span className="text-white text-3xl font-serif">"</span>
            </div>
            <p className="text-white font-black font-Atkinson text-2xl leading-tight tracking-tighter">
              I am the <br /> Gundam.
            </p>
            <p className="mt-4 text-[10px] font-mono text-white/40 uppercase tracking-[0.3em] font-black">// Setsuna F Seiei</p>
          </div>
          <div className="absolute right-[-20%] bottom-[-20%] text-white opacity-[0.05] text-[220px] font-black pointer-events-none group-hover:rotate-12 transition-transform">"</div>
        </div>

        {/* 4. Tech Armament (1x1) */}
        <div className="bento-card col-span-1 row-span-1 bg-[#05050a] rounded-[40px] p-8 border border-white/5 shadow-inner flex flex-col justify-between group">
          <div className="flex justify-between items-center">
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Payload</h4>
            <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {['React', 'GSAP', 'Next.js', 'Python'].map(tag => (
              <span key={tag} className="px-3.5 py-1.5 bg-white/5 border border-white/5 rounded-xl text-xs font-bold text-white/60 hover:bg-white/10 hover:text-white transition-all cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 5. Mobile Unit (2x1) */}
        <div className="bento-card col-span-1 md:col-span-2 row-span-1 bg-black rounded-[40px] relative overflow-hidden group shadow-2xl border border-white/5">
          <div className="absolute inset-0">
            <NextImg
              src="/images/works/link7.webp"
              alt="Lynk & Co 07"
              className="w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-110"
              width={800}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent"></div>
          </div>

          <div className="relative z-10 p-12 h-full flex flex-col justify-center">
            <NextImg
              src="/images/works/lynkco_logo.svg"
              alt="Lynk & Co"
              width={120}
              height={25}
              className="h-6 w-auto opacity-100 brightness-200 mb-6"
            />
            <h3 className="text-4xl font-black text-white font-Atkinson tracking-tighter uppercase mb-3">
              EM-P Cockpit
            </h3>
            <p className="text-white/40 text-xs font-bold max-w-[65%] leading-relaxed uppercase tracking-widest font-mono">
              Vehicle HMI Architecture <br />
              <span className="text-white/20">System_Active // 连接数字世界</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

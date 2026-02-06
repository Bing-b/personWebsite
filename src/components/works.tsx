"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NextImg from "@/app/nextImg";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative py-32 px-4 max-w-[1240px] mx-auto overflow-visible">
      {/* Background Gundam Element */}
      <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] opacity-10 pointer-events-none z-[-1] mix-blend-overlay">
        <NextImg
          src="/images/gundam_bg.png"
          width={800}
          height={800}
          alt="RX-78-2 Background"
          className="object-contain" // Changed to contain to show the mecha clearly if it's a specific figure
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">

        {/* 1. Identity Card (2x2) - Gundam Pilot Style */}
        <div className="bento-card col-span-1 md:col-span-2 row-span-2 relative rounded-xl overflow-hidden group border border-blue-900/30 bg-[#0a0a0f]">
          {/* Decorational UI lines */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-blue-500"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-blue-500"></div>

          <NextImg
            src="/images/gundam_bg.png"
            className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            width={600}
            height={600}
            alt="Pilot Identity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent p-6 flex flex-col justify-end text-white">
            <h2 className="text-5xl font-bold font-mono tracking-tighter mb-1 text-white flex items-center gap-2">
              BING <span className="text-xs border border-yellow-500 text-yellow-500 px-1 py-0.5 rounded-sm tracking-widest">RX-78-2</span>
            </h2>
            <div className="h-[1px] w-12 bg-red-600 mb-4"></div>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-blue-200">
              <span className="bg-blue-900/40 border border-blue-800 px-2 py-1 rounded-sm">INDIE_HACKER</span>
              <span className="bg-blue-900/40 border border-blue-800 px-2 py-1 rounded-sm">FULL_STACK</span>
              <span className="bg-blue-900/40 border border-blue-800 px-2 py-1 rounded-sm">SYSTEM_ARCHITECT</span>
            </div>
            <p className="mt-4 text-gray-400 text-xs font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              STATUS: OPERATIONAL [CN_CD]
            </p>
          </div>
        </div>

        {/* 2. Gunpla Builder Card (2x1) - NEW */}
        <div className="bento-card col-span-1 md:col-span-2 row-span-1 bg-[#151520] border border-gray-800 rounded-xl p-6 flex flex-row items-center justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            {/* Abstract Mecha Icon or text */}
            <h1 className="text-8xl font-black text-white">MS</h1>
          </div>
          <div className="z-10 max-w-[60%]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <h3 className="text-xl font-bold text-gray-100 font-mono tracking-tight">GUNPLA BUILDER</h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              I build and paint Gundam models (scale 1/100 & 1/144).
              The precision and mechanical aesthetics inspire my coding architecture.
            </p>
          </div>
          <div className="z-10 relative w-32 h-32 flex items-center justify-center">
            {/* If we had a specific gunpla icon, we'd use it here. For now, a stylized SVG or using the generated BG as a hint */}
            <svg viewBox="0 0 24 24" fill="none" className="w-20 h-20 text-blue-500 opacity-80" stroke="currentColor" strokeWidth="1">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>

        {/* 3. Quote Card (1x1) */}
        <div className="bento-card col-span-1 row-span-1 bg-white rounded-xl p-6 flex items-center justify-center text-center border-l-4 border-red-600 relative overflow-hidden">
          <p className="text-gray-900 font-bold font-serif italic text-lg relative z-10">
            "I am the Gundam!"
            <span className="block text-xs font-sans not-italic text-gray-400 mt-2 font-normal">- Amuro Ray (Joking)</span>
          </p>
          <div className="absolute right-[-10px] bottom-[-10px] text-gray-100 text-9xl font-black z-0 opacity-50">"</div>
        </div>

        {/* 4. Tech Stack (1x1) - Technical Readout Style */}
        <div className="bento-card col-span-1 row-span-1 bg-[#0f0f13] rounded-xl p-5 flex flex-col justify-between border border-gray-800">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest">ARMAMENT</h4>
            <span className="text-[10px] text-gray-600 font-mono">SYS.VER.2.0</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Vue.js', 'NestJS', 'Python', 'NLP', 'Web3'].map(tag => (
              <span key={tag} className="px-2 py-0.5 bg-gray-900 border border-gray-700/50 rounded-sm text-[10px] font-mono text-gray-300 hover:border-yellow-500/50 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 5. Photography (1x1) */}
        <div className="bento-card col-span-1 row-span-1 bg-black rounded-xl overflow-hidden relative group cursor-pointer border border-gray-800">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-50 group-hover:opacity-30 transition-opacity mix-blend-luminosity"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center">
            <h4 className="font-bold font-mono tracking-wide text-lg">OPTICS</h4>
            <p className="text-[10px] text-gray-400 mt-1 font-mono">SONY_A7C2 // STREET_MODE</p>
          </div>
        </div>

        {/* 6. Pets (1x1) - Mascot Unit */}
        <div className="bento-card col-span-1 row-span-1 bg-[#e0a82e] rounded-xl p-6 relative overflow-hidden group text-black border border-yellow-600">
          <div className="absolute -right-4 -bottom-4 opacity-10 transform scale-150">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2ZM12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
            </svg>
          </div>
          <h4 className="text-lg font-bold mb-1 font-mono">SUPPORT UNITS</h4>
          <p className="text-xs font-bold opacity-80 leading-tight">
            UNIT-01: Cat (Stealth)<br />
            UNIT-02: Border Collie (Speed)
          </p>
        </div>

      </div>
    </div>
  );
}


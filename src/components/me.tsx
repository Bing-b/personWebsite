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
    // GSAP Showcase Animations
    gsap.to(".gsap-showcase-orb", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(".gsap-particle", {
      rotate: "+=360",
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    gsap.to(".gsap-particle", {
      scaleY: 1.5,
      opacity: 0.6,
      duration: 1.5,
      stagger: {
        each: 0.1,
        repeat: -1,
        yoyo: true
      },
      ease: "sine.inOut"
    });
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
            <h2 className="text-6xl font-black font-OPPOSansB tracking-tighter text-white flex items-center gap-4 mb-4">
              BING
            </h2>
            <div className="h-0.5 w-24 bg-white/20 mb-8"></div>
            <p className="text-white/50 text-base max-w-[90%] font-medium leading-relaxed">
              职业 // 软件工程师 <br />
              正如操控高达一般去驱动代码，致力于在逻辑的荒原中构建数字美学。
            </p>
          </div>
        </div>

        {/* 2. Gunpla Builder (1x1) */}
        <div className="bento-card col-span-1 row-span-1 bg-[#05050a] rounded-[40px] border border-white/5 relative overflow-hidden group shadow-xl">
          <NextImg
            src="/images/hobbies/gunpla.jpg"
            alt="Gunpla"
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
            width={300}
            height={300}
          />
          <div className="relative z-10 h-full p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">CRAFT</span>
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-xl font-black text-white font-OPPOSansB leading-tight tracking-tight uppercase">
                GUNPLA <br /> BUILDER
              </h3>
              <p className="text-[9px] text-white/40 font-mono mt-2 uppercase tracking-widest leading-relaxed">
                精密组装 / 改色喷涂 <br />
                // 精益求精的匠心
              </p>
            </div>
          </div>
        </div>

        {/* 3. Photography (1x1) */}
        <div className="bento-card col-span-1 row-span-1 bg-[#05050a] rounded-[40px] border border-white/5 relative overflow-hidden group shadow-xl">
          <NextImg
            src="/images/hobbies/photography.jpg"
            alt="Photography"
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
            width={300}
            height={300}
          />
          <div className="relative z-10 h-full p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">SIGHT</span>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-xl font-black text-white font-OPPOSansB leading-tight tracking-tight uppercase">
                PHOTO <br /> GRAPH
              </h3>
              <p className="text-[9px] text-white/40 font-mono mt-2 uppercase tracking-widest leading-relaxed">
                扫街记录 / 瞬间定格 <br />
                // 记录生活美学
              </p>
            </div>
          </div>
        </div>

        {/* 4. Gaming Setup (1x1) */}
        <div className="bento-card col-span-1 row-span-1 bg-[#05050a] rounded-[40px] border border-white/5 relative overflow-hidden group shadow-xl">
          <NextImg
            src="/images/hobbies/gaming.jpg"
            alt="Gaming"
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
            width={300}
            height={300}
          />
          <div className="relative z-10 h-full p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">FUN</span>
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="text-xl font-black text-white font-OPPOSansB leading-tight tracking-tight uppercase">
                GAMING <br /> ZONE
              </h3>
              <p className="text-[9px] text-white/40 font-mono mt-2 uppercase tracking-widest leading-relaxed">
                地平线 极限竞速 / 赛车 <br />
                // 沉浸 3A 视界
              </p>
            </div>
          </div>
        </div>

        {/* 5. System Status (1x1) */}
        <div className="bento-card col-span-1 row-span-1 bg-[#05050a] rounded-[40px] p-8 border border-white/5 shadow-inner flex flex-col justify-between group">
          <div className="flex justify-between items-center">
            <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">System</h4>
            <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-[9px] font-mono text-white/20">
              <span>CORE_TEMP</span>
              <span className="text-blue-400">32°C</span>
            </div>
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-blue-500/50"></div>
            </div>
            <div className="flex justify-between text-[9px] font-mono text-white/20 mt-2">
              <span>LOAD_SYNC</span>
              <span className="text-green-400">OPTIMAL</span>
            </div>
          </div>
          <span className="text-[10px] text-white/10 font-mono tracking-widest">// PILOT_READY</span>
        </div>

        {/* 6. Combined Pet Module (2x1) */}
        <div className="bento-card col-span-1 md:col-span-2 row-span-1 bg-[#0a0a0f] rounded-[40px] border border-white/5 relative overflow-hidden group shadow-xl p-10 flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-purple-400 font-black uppercase tracking-[0.3em]">Companion_Sync</span>
              </div>
              <h3 className="text-2xl font-black text-white font-OPPOSansB tracking-tight uppercase">
                治愈小队
              </h3>
            </div>
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Active_Members: 02</span>
          </div>

          <div className="grid grid-cols-2 gap-8 flex-1">
            {/* Cat - 麦当当 */}
            <div className="group/cat relative flex items-center gap-4 bg-white/[0.02] rounded-3xl p-4 border border-white/5 transition-all hover:bg-white/[0.05]">
              <div className="relative w-20 h-20 shrink-0">
                <NextImg
                  src="/images/dangdang.png"
                  alt="麦当当"
                  className="w-full h-full object-contain grayscale opacity-40 group-hover/cat:grayscale-0 group-hover/cat:opacity-100 group-hover/cat:scale-110 transition-all duration-500"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h4 className="text-white font-bold font-OPPOSansB">麦当当</h4>
                <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest leading-none mt-1">CAT_UNIT</p>
              </div>
            </div>

            {/* Dog - 妮妮 */}
            <div className="group/dog relative flex items-center gap-4 bg-white/[0.02] rounded-3xl p-4 border border-white/5 transition-all hover:bg-white/[0.05]">
              <div className="relative w-20 h-20 shrink-0">
                <NextImg
                  src="/images/nini.png"
                  alt="妮妮"
                  className="w-full h-full object-contain grayscale opacity-40 group-hover/dog:grayscale-0 group-hover/dog:opacity-100 group-hover/dog:scale-110 transition-all duration-500"
                  width={80}
                  height={80}
                />
              </div>
              <div>
                <h4 className="text-white font-bold font-OPPOSansB">妮妮</h4>
                <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest leading-none mt-1">DOG_UNIT</p>
              </div>
            </div>
          </div>

          <div className="mt-4 opacity-20 text-[9px] font-mono uppercase tracking-[0.2em] text-center border-t border-white/5 pt-4">
            Emotional Support System // System_Operational
          </div>
        </div>

        {/* 7. Mobile Unit (2x1) */}
        <div className="bento-card col-span-1 md:col-span-2 row-span-1 bg-black rounded-[40px] relative overflow-hidden group shadow-2xl border border-white/5 transition-all duration-500">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-[-2px] border-2 border-transparent bg-gradient-to-r from-transparent via-blue-500/50 to-transparent bg-[length:200%_100%] animate-[shimmer_2s_infinite_linear] rounded-[40px] [mask-image:linear-gradient(black,black),linear-gradient(black,black)] [mask-clip:content-box,border-box] [mask-composite:exclude]"></div>
          </div>

          <div className="absolute inset-0">
            <NextImg
              src="/images/works/link7.webp"
              alt="Lynk & Co 07"
              className="w-full h-full object-cover grayscale opacity-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-80"
              width={800}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          </div>

          <div className="relative z-10 p-10 h-full flex flex-col ">
            <NextImg
              src="/images/works/lynkco_logo.svg"
              alt="Lynk & Co"
              width={100}
              height={20}
              className="h-5 w-[80px] opacity-100 brightness-200 mb-4 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="flex flex-col gap-0.5">
              <h3 className="text-2xl font-black text-white font-OPPOSansB tracking-tighter uppercase">
                MY RIDE
              </h3>
              <p className="text-[10px] font-mono text-blue-400 font-bold tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0">
                // LYNK & CO 07 EM-P
              </p>
            </div>
            <p className="mt-3 text-white/40 text-[10px] font-bold max-w-[80%] leading-relaxed uppercase tracking-widest font-mono">
              超级增程电动方案，百公里加速 4.9s <br />
              <span className="text-white/20">Intelligent Cockpit // 智慧座舱</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

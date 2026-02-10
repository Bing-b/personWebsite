"use client";

import Hero from "@/components/hero";
import Me from "@/components/me";
import WebWorks from "@/components/webworks";
import NextImg from "./nextImg";
import Gundam from "@/components/gundam";
import Skills from "@/components/skills";
import Technicals from "@/components/technicals";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fdfdfd] text-[#111]">
      <div className="relative">
        {/* 高端玻璃态导航 - 兼容深浅背景 */}
        <header className="fixed flex justify-between w-[540px] rounded-full bg-white/40 border border-white/20 backdrop-blur-3xl left-1/2 top-8 z-50 -translate-x-1/2 items-center gap-x-20 px-8 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-700 hover:w-[560px] hover:bg-white/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center -rotate-6 transition-all hover:rotate-0 hover:scale-110 shadow-md">
              <NextImg src="/images/logo_w.png" width={20} height={20} alt="logo" className="brightness-200" />
            </div>
            <p className="font-black text-[18px] font-Atkinson tracking-tighter text-black uppercase">BING</p>
          </div>

          <a href="https://github.com/Bing-b" target="_blank" className="group relative">
            <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center border border-black/5 hover:bg-black hover:text-white transition-all duration-500">
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
            <span
              className="absolute -right-2 w-32 top-16 
  z-20 origin-top scale-0 px-4 rounded-xl border 
  border-black/5 bg-white py-2 text-[10px] font-black
  shadow-2xl transition-all duration-500 ease-out 
  group-hover:scale-100 text-black uppercase tracking-widest text-center"
            >
              github
            </span>
          </a>
        </header>

        <main className="relative z-10">
          {/* 轮播 */}
          <Hero />
          {/* 介绍 */}
          <Me />
          {/* 技能 */}
          <Skills />
          {/* Gundam展示 */}
          <Gundam />
          {/* 作品 */}
          <WebWorks />
          {/* 技术支持 */}
          <Technicals />
        </main>
      </div>

      <Footer />
    </div>
  );
}

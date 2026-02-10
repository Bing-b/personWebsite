"use client";

import Hero from "@/components/hero";
import Works from "@/components/works";
import WebWorks from "@/components/webworks";
import NextImg from "./nextImg";
import AiShowcase from "@/components/ai-showcase";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fdfdfd] text-[#111]">
      <div className="relative">
        {/* 高端玻璃态导航 - 兼容深浅背景 */}
        <header className="fixed flex justify-between w-[540px] rounded-full bg-white/40 border border-white/20 backdrop-blur-3xl left-1/2 top-8 z-50 -translate-x-1/2 items-center gap-x-20 px-8 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-700 hover:w-[560px] hover:bg-white/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center -rotate-6 transition-all hover:rotate-0 hover:scale-110 shadow-md">
              <NextImg src="/images/logo.png" width={20} height={20} alt="logo" className="brightness-200" />
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
              Pilot Profile
            </span>
          </a>
        </header>

        <main className="relative z-10">
          <Hero />
          <Works />
          <AiShowcase />
          <Skills />
          <WebWorks />
        </main>
      </div>

      {/* 沉浸式深色底部 */}
      <footer
        className="relative bg-[#030303] py-40 px-10 border-t border-white/5"
      >
        <div className="max-w-[1240px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="flex flex-col items-start gap-12">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-[22px] flex items-center justify-center -rotate-3 transition-transform hover:rotate-0 shadow-inner">
                <NextImg src="/images/logo.png" width={32} height={32} alt="logo" className="brightness-200" />
              </div>
              <p className="font-black text-3xl font-Atkinson tracking-tighter text-white">BING</p>
            </div>

            <div className="space-y-2">
              <p className="text-white/40 font-black text-2xl font-Atkinson tracking-tighter uppercase italic">
                Stay true, be you.
              </p>
              <p className="text-white/20 text-sm font-medium tracking-[0.2em] uppercase">
                Constructing Aesthetic Digital Systems.
              </p>
            </div>

            <div className="flex items-center gap-8 opacity-40 hover:opacity-100 transition-all duration-700">
              <a href="https://github.com/Bing-b" target="_blank" className="hover:scale-125 transition-transform">
                <NextImg src="/images/github.svg" width={28} height={28} alt="github" className="brightness-200" />
              </a>
              <div className="hover:scale-125 transition-transform cursor-pointer">
                <NextImg src="/images/juejin.svg" width={28} height={28} alt="juejin" className="brightness-200" />
              </div>
              <div className="hover:scale-125 transition-transform cursor-pointer">
                <NextImg src="/images/csdn.svg" width={36} height={24} alt="csdn" className="brightness-200" />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between py-2">
            <div className="space-y-8 md:text-right">
              <div>
                <h3 className="font-black text-[11px] text-red-600 uppercase tracking-[0.5em] mb-4">Frequency_Link</h3>
                <p className="text-2xl font-black text-white tracking-tighter hover:text-red-500 transition-colors cursor-default">微信 // superbing</p>
              </div>
              <div>
                <h3 className="font-black text-[11px] text-white/20 uppercase tracking-[0.5em] mb-4">Transmission_Secure</h3>
                <p className="text-2xl font-black text-white tracking-tighter underline decoration-white/10 decoration-2 underline-offset-8">ageraRs@163.com</p>
              </div>
            </div>

            <div className="mt-24 md:mt-0 text-[10px] font-black text-white/10 uppercase tracking-[0.4em] flex gap-12">
              <p>© 2025 BING_SYSTEMS.</p>
              <p>REGION // CN_07</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

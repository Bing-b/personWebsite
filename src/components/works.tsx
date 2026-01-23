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
      // Staggered entrance for all bento cards
      gsap.from(".bento-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });


    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative py-32 px-4 max-w-[1240px] mx-auto overflow-visible">


      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {/* 1. Identity Card (2x2) */}
        <div className="bento-card col-span-1 md:col-span-2 row-span-2 relative rounded-3xl overflow-hidden group">
          <NextImg
            src="/images/people.webp"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            width={600}
            height={600}
            alt="Justin3go"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
            <h2 className="text-4xl font-bold font-Atkinson mb-2">Bing</h2>
            <div className="flex flex-wrap gap-2 text-sm font-mono opacity-90">
              <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded">Indie Hacker</span>
              <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded">AI Maker</span>
              <span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded">Full Stacker</span>
            </div>
            <p className="mt-4 text-gray-300 text-sm flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 block"></span>
              Chengdu, China
            </p>
          </div>
        </div>

        {/* 2. Quote Card (2x1) */}
        <div className="bento-card col-span-1 md:col-span-2 row-span-1 bg-[#171717] rounded-3xl p-8 flex items-center justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
          </div>
          <h3 className="text-2xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 text-center font-serif ">
            "less is more" - Mies van der Rohe
          </h3>
        </div>

        {/* 3. Bio Card (1x2) - T-Shaped */}
        <div className="bento-card col-span-1 md:col-span-1 row-span-2 bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
          <div>
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">T-Shaped Dev</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              More of a <strong className="text-gray-800">Computer Enthusiast</strong> than just a strictly Frontend Engineer.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              I love exploring efficiency tools, open source, and sharing knowledge.
              <br /><br />
              <span className="italic bg-yellow-100/50 px-1 rounded">"Quantity {'>'} Quality"</span> — Keeping the record alive.
            </p>
          </div>
        </div>

        {/* 4. Tech Stack (1x1) */}
        <div className="bento-card col-span-1 row-span-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 flex flex-col justify-center border border-gray-100">
          <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Tech Focus</h4>
          <div className="flex flex-wrap gap-2">
            {['Vue.js', 'NestJS', 'Python', 'NLP', 'Web3'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-700 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 5. Photography (1x1) */}
        <div className="bento-card col-span-1 row-span-1 bg-black rounded-3xl overflow-hidden relative group cursor-pointer">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            <h4 className="font-bold">Sony A7C2</h4>
            <p className="text-xs text-gray-300 mt-1">Street & Life</p>
          </div>
        </div>

        {/* 6. Pets (1x1) */}
        <div className="bento-card col-span-1 row-span-1 bg-[#ff9f43] rounded-3xl p-6 relative overflow-hidden group text-white">
          <div className="absolute -right-2 -bottom-2 opacity-20 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
            <NextImg src="/images/cat.svg" width={80} height={80} alt="cat" />
          </div>

          <h4 className="text-xl font-bold mb-2">铲屎官日常</h4>
          <p className="text-xs opacity-90 font-medium leading-relaxed">
            家里住着两位大咖：一只优雅的美短猫和一只活力四射的边牧。它们是我代码之外的灵感源泉。🐾
          </p>
        </div>

      </div>
    </div>
  );
}


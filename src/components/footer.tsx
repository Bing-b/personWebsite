"use client";

import React, { useEffect, useState } from "react";
import NextImg from "@/app/nextImg";
import { motion } from "motion/react";

export default function Footer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }));
        };
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            className={`
          sticky bottom-0 
          -mt-8
          h-[calc(420px+2rem)] pt-[140px]
          bg-[#050505] text-white px-10 overflow-hidden
          flex flex-col justify-between items-center
        `}
        >
            {/* 纹理叠加层 */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* 背景氛围 */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

            <div className="flex justify-between max-w-[1400px] mx-auto w-full relative z-10">
                <div className="flex flex-col gap-8">
                    <div className="group">
                        <NextImg
                            className="mb-6 brightness-200 group-hover:scale-105 transition-transform duration-500"
                            src="/images/logo_w.png"
                            width={60}
                            height={40}
                            alt="logo"
                        />
                        <p className="font-Atkinson text-white/40 tracking-tight text-lg italic uppercase">
                            Stay true, <span className="text-white">be you.</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-4 mt-20">
                        {[
                            { icon: "/images/github.svg", url: "https://github.com/Bing-b" },
                            { icon: "/images/juejin.svg", url: "#" },
                            { icon: "/images/csdn.svg", url: "#", size: { w: 32, h: 20 } }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center transition-all hover:bg-white hover:border-white group"
                            >
                                <NextImg
                                    src={social.icon}
                                    width={social.size?.w || 20}
                                    height={social.size?.h || 20}
                                    alt="social"
                                    className="brightness-200 group-hover:brightness-0 transition-all opacity-40 group-hover:opacity-100"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-end gap-5">
                    <div className="text-right">
                        <h3 className="font-black text-[10px] text-red-600/60 uppercase tracking-[0.4em] mb-4">Transmission_Secure</h3>
                        <p className="mt-2 text-base  text-white/80 tracking-tighter hover:text-red-500 transition-colors cursor-default font-mono underline decoration-white/5 underline-offset-8">微信：superbing</p>
                        <p className="mt-4 text-base  text-white/80 tracking-tighter hover:text-red-500 transition-colors cursor-default font-mono underline decoration-white/5 underline-offset-8">邮箱：ageraRs@163.com</p>
                    </div>

                    <div className="flex gap-8 font-mono text-[9px] font-black uppercase tracking-[0.2em] text-white/10">
                        <div className="flex gap-2 items-center">
                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                            <span>System_Time // {time}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mt-5 max-w-[1400px] py-6 flex justify-between items-center text-[10px] font-black text-white/10 uppercase tracking-[0.4em] border-t border-white/5 relative z-10">
                <p>© BING_SYSTEMS 2020–2025. ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    );
}

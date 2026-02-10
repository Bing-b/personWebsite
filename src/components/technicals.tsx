"use client";

import { motion } from "motion/react";
import NextImg from "@/app/nextImg";

const technicals = [
    {
        icon: "/images/nextjs.svg",
        text: "Next.js",
        link: "https://nextjs.org/",
    },
    {
        icon: "/images/tailwindcss.svg",
        text: "Tailwind",
        link: "https://tailwindcss.com/",
    },
    {
        icon: "/images/React.svg",
        text: "React",
        link: "https://react.dev/",
    },
    {
        icon: "/images/motion.avif",
        text: "Motion",
        link: "https://motion.dev/",
    },
    {
        icon: "/images/Typescript.svg",
        text: "TS",
        link: "https://www.typescriptlang.org/",
    },
    {
        icon: "/images/GSAP.svg",
        text: "GSAP",
        link: "https://gsap.com/",
    },
];

export default function Technicals() {
    return (
        <div className="bg-[#f4f4f7] py-32 px-10 relative overflow-hidden">
            {/* 顶部分隔线 */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-black/5"></div>

            <div className="max-w-[1000px] mx-auto relative z-10 text-center">
                <div className="flex flex-col items-center gap-12">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-4">
                            <span className="w-8 h-[2px] bg-red-600"></span>
                            <span className="text-[10px] font-black text-black/30 font-mono uppercase tracking-[0.4em]">Tech_Support_System</span>
                            <span className="w-8 h-[2px] bg-red-600"></span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-black text-black font-Atkinson tracking-tighter uppercase leading-none">
                            本站<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500">技术支持</span>
                        </h2>
                        <p className="text-zinc-500 font-medium  leading-relaxed italic text-sm font-OPPOSansB">
                            基于 Next.js 全栈框架构建，深度融合 React 并发渲染特性与 GSAP 强力交互引擎。
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
                        {technicals.map((tech, index) => (
                            <motion.a
                                key={index}
                                href={tech.link}
                                target="_blank"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-white border border-zinc-100 hover:border-red-600/20 hover:shadow-xl hover:shadow-zinc-200/50 transition-all group"
                            >
                                <div className="w-10 h-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-grayscale">
                                    <NextImg src={tech.icon} width={24} height={24} alt={tech.text} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <span className="text-[9px] font-black text-black/30 uppercase tracking-widest group-hover:text-black transition-colors">{tech.text}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

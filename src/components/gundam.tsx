"use client";

import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
    OrbitControls,
    Environment,
    Float,
    ContactShadows,
    Html,
    useProgress,
} from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** 
 * 加载进度显示组件 
 */
function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="flex flex-col items-center">
                <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className="text-[10px] font-black text-white/40 mt-3 font-mono uppercase tracking-[0.3em]">
                    Core_Syncing... {progress.toFixed(0)}%
                </p>
            </div>
        </Html>
    );
}

/** 
 * 3D 模型组件 
 */
function Model() {
    // 使用用户最近更新的模型路径
    const gltf = useLoader(GLTFLoader, "/models/sazabi_msn-04_gundam.glb");
    const modelRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (modelRef.current) {
            modelRef.current.position.y = -2.5 + Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
            modelRef.current.rotation.y += 0.002;
        }
    });

    return (
        <primitive
            ref={modelRef}
            object={gltf.scene}
            scale={1.5}
            position={[0, -2.5, 0]}
            rotation={[0, -Math.PI / 8, 0]}
        />
    );
}

/** 
 * AI 展示模块 
 */
export default function AiShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".showcase-title", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                }
            });

            gsap.from(".gundam-card", {
                x: -60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);
        const refreshTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            ctx.revert();
            clearTimeout(refreshTimer);
            ScrollTrigger.refresh();
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative py-60 bg-transparent z-10 overflow-visible"
            style={{
                marginTop: '-120px'
            }}
        >
            {/* 背景剪裁层 - 独立出来避免剪裁内容 */}
            <div
                className="absolute inset-0 bg-[#050810] z-0"
                style={{
                    clipPath: 'polygon(0 120px, 12% 120px, 16% 60px, 35% 60px, 40% 0, 65% 0, 72% 80px, 88% 80px, 94% 140px, 100% 140px, 100% 100%, 0 100%)'
                }}
            ></div>
            {/* 装饰性边缘线 - 增强机械感 (多层边缘) */}
            <div className="absolute top-0 left-0 w-full h-[140px] z-20 pointer-events-none overflow-hidden">
                {/* 主边缘线 */}
                <div
                    className="w-full h-full border-t-2 border-red-600/40"
                    style={{
                        clipPath: 'polygon(0 120px, 12% 120px, 16% 60px, 35% 60px, 40% 0, 65% 0, 72% 80px, 88% 80px, 94% 140px, 100% 140px)'
                    }}
                ></div>
                {/* 辅助装饰线 */}
                <div
                    className="absolute top-4 left-0 w-full h-full border-t border-white/5"
                    style={{
                        clipPath: 'polygon(5% 120px, 14% 120px, 18% 70px, 33% 70px, 38% 10px, 63% 10px, 70% 90px, 86% 90px, 92% 140px)'
                    }}
                ></div>
            </div>

            {/* 背景装饰层 */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                <div className="absolute top-[20%] right-[10%] w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[180px]"></div>
                <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px]"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-30">

                {/* 文字介绍层 - 移动到左侧 */}
                <div className="order-2 lg:order-1">
                    <div className="showcase-title mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-16 h-[2.5px] bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.6)]"></span>
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.5em]">AI_Augmented_Evolution</span>
                        </div>
                        <h2 className="text-7xl font-black text-white font-Atkinson tracking-tighter mb-8 leading-[0.85]">
                            AI-FIRST <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-white to-red-400 font-OPPOSansB">REVOLUTION</span>
                        </h2>
                        <p className="text-white/50 text-xl font-OPPOSansB max-w-lg leading-relaxed  italic">
                            <span className="block mt-6 text-base text-white/30 not-italic font-sans">
                                正在经历的 AI 技术变革不仅在于生产力的提升，更在于创造力的边界扩张。我利用 AI 辅助全流程开发，探索并构建更多有趣且真实的数字产品。
                            </span>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* 智能演变 */}
                        <div
                            className="gundam-card group relative p-10 bg-white/[0.03] backdrop-blur-3xl rounded-[40px] border border-white/5 shadow-2xl hover:bg-white/[0.08] transition-[transform,background-color] duration-500"
                        >
                            <div className="flex items-start gap-8">
                                <div className="w-16 h-16 bg-red-600/10 border border-red-500/20 flex items-center justify-center rounded-2xl text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all shadow-inner">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">AI-Driven Creation</h4>
                                    <p className="text-sm text-white/40 font-OPPOSansB leading-relaxed uppercase tracking-wide">
                                        变革传统开发范式，实现从逻辑架构到交互美学的 AGI 级演进<br />
                                        <span className="text-white/20 !font-Atkinson">Revolutionizing conventional workflows from logic to aesthetics.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 趣玩实验 */}
                        <div
                            className="gundam-card group relative p-10 bg-white/[0.03] backdrop-blur-3xl rounded-[40px] border border-white/5 shadow-2xl hover:bg-white/[0.08] transition-[transform,background-color] duration-500"
                        >
                            <div className="flex items-start gap-8">
                                <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 flex items-center justify-center rounded-2xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M12 3v19m9-10H3a9 9 0 019-9 9 9 0 019 9z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">Digital Experiments</h4>
                                    <p className="text-sm text-white/40 font-OPPOSansB leading-relaxed uppercase tracking-wide">
                                        借助 AI 探索更多有趣、充满想象力的数字实验与创新产品<br />
                                        <span className="text-white/20 !font-Atkinson">Beyond code: exploring imaginative and fun digital playground.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3D 模型展示器 */}
                <div className="order-1 lg:order-2 h-[800px] w-full relative group">
                    <div className="absolute top-12 left-12 z-20 pointer-events-none">
                        <div className="flex flex-col gap-2">
                            <div className="text-[10px] font-black font-mono text-red-500 uppercase tracking-[0.4em]">Target_Locked</div>
                            <div className="w-1 h-32 bg-gradient-to-b from-red-600 to-transparent"></div>
                        </div>
                    </div>

                    <div
                        className="w-full h-full p-[1px] bg-white/10 relative shadow-[0_40px_100px_rgba(0,0,0,0.5)]"
                        style={{
                            clipPath: 'polygon(60px 0, 100% 0, 100% calc(100% - 60px), calc(100% - 60px) 100%, 0 100%, 0 60px)',
                        }}
                    >
                        <div
                            className="w-full h-full cursor-move bg-gradient-to-b from-[#101625] to-[#050810] relative overflow-hidden"
                            style={{
                                clipPath: 'polygon(59px 0, 100% 0, 100% calc(100% - 59px), calc(100% - 59px) 100%, 0 100%, 0 59px)',
                            }}
                        >
                            <Canvas camera={{ position: [6, 2, 8], fov: 32 }} gl={{ alpha: true, antialias: true }}>
                                <ambientLight intensity={0.5} />
                                <directionalLight position={[10, 10, 10]} intensity={2} />
                                <pointLight position={[-10, 5, -5]} intensity={1.5} color="#ef4444" />
                                <spotLight position={[5, 15, 5]} angle={0.25} penumbra={1} intensity={2} castShadow />

                                <Suspense fallback={<Loader />}>
                                    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={1}>
                                        <Model />
                                    </Float>
                                    <Environment preset="night" />
                                    <ContactShadows
                                        position={[0, -2.5, 0]}
                                        opacity={0.4}
                                        scale={12}
                                        blur={2.5}
                                        far={5}
                                    />
                                </Suspense>

                                <OrbitControls
                                    enableZoom={true}
                                    autoRotate
                                    autoRotateSpeed={0.6}
                                    maxPolarAngle={Math.PI / 1.6}
                                    minPolarAngle={Math.PI / 3}
                                />
                            </Canvas>
                        </div>
                    </div>

                    {/* 交互提示 */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/60 backdrop-blur-xl shadow-2xl px-8 py-3 rounded-full border border-white/10 text-[10px] font-black text-white/50 flex items-center gap-4">
                        <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping"></span>
                        DRAG_TO_INSPECT_SAZABI_v3.2
                    </div>
                </div>

            </div>
        </section>
    );
}

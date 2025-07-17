"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

const workList = [
  "/images/p1.png",
  "/images/p2.png",
  "/images/p3.png",
  "/images/p4.png",
];

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".slide");
      const totalSlides = slides.length;

      gsap.to(slides, {
        xPercent: -100 * (totalSlides - 1),
        ease: "none",
        scrollTrigger: {
          start: "top 10%",
          trigger: containerRef.current,
          pin: true, // 固定整个区域
          scrub: 1, // 平滑滚动驱动动画
          snap: 1 / (totalSlides - 1), // 每一屏吸附
          end: () => `+=${containerRef.current!.offsetWidth}`, // 结束距离
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-[60px] relative mx-auto max-w-[1600px] h-[850px] bg-[#4040400f] rounded-4xl px-[80px] pt-[60px] "
    >
      <div className="w-full  bg-white py-5 px-6  overflow-hidden rounded-4xl">
        <div className="flex items-center gap-5">
          <Image
            src="/images/logo.png"
            alt="Vercel Logo"
            width={40}
            height={30}
            className="dark:invert"
            priority
          />
          <p>个人作品</p>
        </div>

        <div className="flex w-[250vw] h-auto">
          {workList.map((text, i) => (
            <div key={i} className="slide  flex items-center justify-center ">
              <img className="w-full" src={text} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

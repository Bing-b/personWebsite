/** 作品集 */
// export default function Works() {
//   return (
//     <div className="mt-[60px] mx-auto max-w-[1480px] bg-[#4040400f] rounded-4xl px-[100px] pt-[80px]">
//       <p>作品</p>
//       <img src={"/images/p1.png"} />
//     </div>
//   );
// }
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
      className="mt-[60px] relative mx-auto max-w-[1480px] h-[850px] bg-[#4040400f] rounded-4xl px-[40px] pt-[60px] "
    >
      <div className="w-full   overflow-hidden">
        <div className="flex w-[300vw] h-auto">
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

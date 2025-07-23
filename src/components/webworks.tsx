"use client";
import NextImg from "@/app/nextImg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const workList = [
  {
    icon: "/images/p1_icon.svg",
    name: "太子家具",
    url: "https://www.taizicasa.com/",
    img: "/images/p1.png",
    bg: "#02270e",
    border: "#33ff7733",
    font: "#3aea74",
    view: "#010a04",
    btnbg: "#0ce956",
  },
  {
    icon: "/images/p2_icon.svg",
    name: "博城医疗",
    url: "https://bochengmed.com",
    img: "/images/p2.png",
    bg: "#fff",
    border: "#666",
    font: "#333",
    view: "#fff",
    btnbg: "#000",
  },
  {
    icon: "/images/p3_icon.svg",
    name: "彩科生物",
    url: "https://www.lychix.com/",
    img: "/images/p3.png",
    bg: "#000",
    border: "#444",
    font: "#fafafa",
    view: "#000",
    btnbg: "#fff",
  },
  {
    icon: "/images/p4_icon.svg",
    name: "紫羚云",
    url: "https://www.gazellio.com/",
    img: "/images/p4.png",
    bg: "#fff",
    border: "#250718",
    font: "#250718",
    view: "#fff",
    btnbg: "#250718",
  },
  {
    icon: "/images/p5_icon.svg",
    name: "鸣石基金",
    url: "https://www.mingshiim.com/",
    img: "/images/p5.png",
    bg: "#dedede",
    border: "#666",
    font: "#333",
    view: "#fff",
    btnbg: "#000",
  },
];

/** web 作品 */
export default function WebWorks() {
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".slide");
      const totalSlides = slides.length;

      gsap.to(slides, {
        xPercent: -100 * (totalSlides - 1),
        ease: "none",
        scrollTrigger: {
          start: "top 10%",
          trigger: slideRef.current,
          pin: true, // 固定整个区域
          scrub: 1, // 平滑滚动驱动动画
          snap: 1 / (totalSlides - 1), // 每一屏吸附
          end: () => `+=${slideRef.current!.offsetWidth}`, // 结束距离
        },
      });
    }, slideRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={slideRef}
      className="px-[300px] py-[100px] relative bg-[#f4f5f5] "
    >
      <p className="font-bold mx-2 text-xl mb-10">Website Works</p>

      <div className="flex w-[180vw] gap-3">
        {workList.map((i, index) => (
          <div
            key={index}
            className=" flex justify-between slide w-[620px] rounded-4xl  p-2"
            style={{ backgroundColor: i.bg }}
          >
            <div className="p-2 flex flex-col justify-between ">
              <div
                className=" w-12 h-12 rounded-xl flex items-center justify-center  border-2"
                style={{ borderColor: i.border }}
              >
                <NextImg src={i.icon} width={20} height={20} alt="logo" />
              </div>
              <div>
                <h4
                  className="mx-4 mb-1 font-bold text-sm"
                  style={{ color: i.font }}
                >
                  {i.name}
                </h4>
                <p
                  className="mb-5 mx-4 "
                  style={{ color: i.font, opacity: 0.3 }}
                >
                  This website is amazing
                </p>
                <a
                  href={i.url}
                  target="_blank"
                  className=" flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-Atkinson max-w-[120px] hover:opacity-90 hover:scale-95 duration-300 transition"
                  style={{ background: i.btnbg, color: i.view }}
                >
                  <p className="text-inherit">View</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--maas ui-icon-renderer mb-1"
                    width="18px"
                    height="18px"
                    viewBox="0 0 1152 1152"
                  >
                    <path
                      fill={i.view}
                      d="M505 238c-114 0-186 0-242 25-62 28-114 81-142 144-25 56-25 123-25 240s0 186 25 242c28 62 80 114 142 142 56 25 125 25 242 25s184 0 240-25c63-28 116-80 144-142 25-56 25-125 25-242 0-29-24-53-53-53s-53 24-53 53c0 115 0 164-15 198-18 40-49 72-90 90-34 15-83 15-198 15s-164 0-198-15c-40-18-72-50-90-90-15-34-15-83-15-198s0-164 15-198c18-41 50-72 90-90 34-15 86-15 198-15 29 0 53-24 53-53s-24-53-53-53m551 196V196c0-55-45-100-100-100H718c-29 0-53 24-53 53s24 53 53 53h158L586 492c-9 9-16 22-16 37 0 29 24 53 53 53 15 0 28-7 37-16l290-290v158c0 29 24 53 53 53s53-24 53-53"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className=" h-[294px] rounded-3xl overflow-hidden">
              <NextImg
                className="h-full object-cover"
                src={i.img}
                width={294}
                height={294}
                alt="logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

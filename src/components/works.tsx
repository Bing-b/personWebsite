"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NextImg from "@/app/nextImg";

gsap.registerPlugin(ScrollTrigger);

export default function Works() {
  return (
    <div className="mt-[60px] relative mx-auto max-w-[1600px] h-[850px] bg-[#4040400f] rounded-4xl px-[80px] pt-[60px] ">
      <div className="w-full  bg-white py-5 px-6  overflow-hidden rounded-4xl">
        <div className="flex items-center gap-5 mb-5">
          <NextImg src="/images/logo.png" width={40} height={30} alt="logo" />
          BING
        </div>
        <NextImg
          className="rounded-2xl m-10"
          src="/images/banner.webp"
          width={1000}
          height={400}
          alt="banner"
        />
      </div>
    </div>
  );
}

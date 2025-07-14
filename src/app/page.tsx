import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="relative h-full">
      <header className=" flex justify-between  w-[584px] rounded-full bg-[hsla(0,0%,93%,0.72)] backdrop-blur-xl absolute left-1/2 top-6 z-10 -translate-x-1/2 items-center gap-x-24 px-7 py-3">
        <Image
          src="/images/logo.svg"
          alt="Vercel Logo"
          width={118}
          height={30}
          className="dark:invert"
          priority
        />

        <a href="">
          <Image
            src="/images/github.svg"
            alt="Vercel Logo"
            width={30}
            height={28}
            className="dark:invert"
            priority
          />
        </a>
      </header>
      <Hero />
    </div>
  );
}

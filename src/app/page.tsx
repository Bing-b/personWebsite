import Hero from "@/components/hero";
import Works from "@/components/works";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="relative h-full">
      <header className="fixed  flex justify-between  w-[584px] rounded-full bg-[hsla(0,0%,93%,0.72)] backdrop-blur-xl  left-1/2 top-6 z-10 -translate-x-1/2 items-center gap-x-24 px-7 py-4">
        <div className="flex items-center gap-1">
          <img className="w-[40px]" src="/images/logo.png" alt="" />
          <p className="font-bold text-xl">Bing</p>
        </div>

        <a href="https://github.com/Bing-b" target="_blank">
          <div className="group relative flex items-center">
            <button>
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 hover:scale-125 duration-200 hover:stroke-blue-500"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </button>
            <span
              className="absolute -right-20 top-0 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
            >
              GitHub<span></span>
            </span>
          </div>
        </a>
      </header>
      <Hero />
      <Works />
      <Skills />

      <div className="h-[500px]"></div>
    </div>
  );
}

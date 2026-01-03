import React from "react";
import Project from "./Project";
import Skills from "./Skill";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-6">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-24 top-40 h-105 w-105 rounded-full bg-[#7C6CFF]/25 blur-[120px]" />
        <div className="absolute right-24 bottom-32 h-105 w-105 rounded-full bg-[#22D3EE]/25 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">

        <div className="space-y-8">
          
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-[#9AA3B2] backdrop-blur">
            FullStack Web-Developer
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Hii I Am{" "}
            <span className="bg-linear-to-r from-[#7C6CFF] to-[#22D3EE] bg-clip-text text-transparent">
              Manav Valani
            </span>{" "}
            <br className="hidden md:block" />
            A Fullstack web Developer Creating Websites Using Nextjs/React
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-[#9AA3B2]">
            I design and build modern web applications using MERN,Next.js
            focusing on clean architecture, smooth animations, and
            scalable UI systems.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="
              rounded-xl bg-linear-to-r from-[#7C6CFF] to-[#22D3EE]
              px-7 py-3 font-medium text-black
              shadow-lg shadow-[#7C6CFF]/30
              transition-all duration-300
              hover:scale-105 hover:shadow-[#22D3EE]/40
            ">
              View Projects
            </button>

            <button className="
              rounded-xl border border-white/10
              bg-white/5 px-7 py-3 text-[#EDEFF4]
              backdrop-blur
              transition-all duration-300
              hover:border-[#22D3EE]/60 hover:text-[#22D3EE]
            ">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          
          {/* Image glow */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-linear-to-r from-[#7C6CFF]/30 to-[#22D3EE]/30 blur-3xl" />

          <div className="
            group relative overflow-hidden rounded-3xl
            border border-white/10
            bg-[#12151B]/80 backdrop-blur
            p-2
            shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]
            transition-transform duration-500
            hover:scale-[1.04]
          ">
            <img
              src="/Me2.jpg"
              alt="Manav Valani"
              className="h-105 w-[320px] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
      <div>
        <Project />
        <Skills />
      </div>
    </section>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen px-6 pt-32">
      
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-24 top-40 h-96 w-96 rounded-full bg-[#7C6CFF]/20 blur-3xl" />
        <div className="absolute right-24 bottom-32 h-96 w-96 rounded-full bg-[#22D3EE]/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">

        {/* Left: Text */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Crafting{" "}
            <span className="bg-linear-to-r from-[#7C6CFF] to-[#22D3EE] bg-clip-text text-transparent">
              beautiful
            </span>{" "}
            & performant web experiences
          </h1>

          <p className="max-w-xl text-lg text-[#9AA3B2]">
            I build modern React applications with clean architecture,
            smooth animations, and scalable design systems.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="rounded-xl bg-linear-to-r from-[#7C6CFF] to-[#22D3EE] px-6 py-3 font-medium text-black transition-transform hover:scale-105">
              View Projects
            </button>

            <button className="rounded-xl border border-[#1E2230] px-6 py-3 text-[#EDEFF4] transition-all hover:border-[#22D3EE] hover:text-[#22D3EE]">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative flex justify-center">
          
          {/* Image glow */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-linear-to-r from-[#7C6CFF]/30 to-[#22D3EE]/30 blur-2xl" />

          <div className="group relative overflow-hidden rounded-3xl border border-[#1E2230] bg-[#12151B] p-2 transition-transform duration-500 hover:scale-105">
            <img
              src="/Me2.jpg"
              alt="Hero Visual"
              className="h-105 w-[320px] rounded-2xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

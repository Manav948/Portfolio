"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Project from "./Project";
import Slider from "../component/ui/Slider"
import HeaderLink from "./Header";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  const heroRef = useRef(null);
  const textItemsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Text sequence
      tl.fromTo(
        textItemsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
        }
      );

      // Image animation
      tl.fromTo(
        imageRef.current,
        { scale: 0.95, y: 30, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 1.1,
        },
        "-=0.6"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden px-6"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-24 top-40 h-105 w-105 rounded-full bg-cyan-500/25 blur-[120px]" />
        <div className="absolute right-24 bottom-32 h-105 w-105 rounded-full bg-red-500/25 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">
        <div className="space-y-8">
          <span
            ref={(el) => (textItemsRef.current[0] = el)}
            className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-[#9AA3B2] backdrop-blur opacity-0"
          >
            FullStack Web Developer
          </span>

          <h1
            ref={(el) => (textItemsRef.current[1] = el)}
            className="text-4xl font-bold leading-tight tracking-tight md:text-5xl opacity-0"
          >
            Hi, I’m{" "}
            <span className="bg-linear-to-r from-[#7C6CFF] to-[#22D3EE] bg-clip-text text-transparent">
              Manav Valani
            </span>
            <br className="hidden md:block" />
            A Full-Stack Developer Building Modern Web Apps
          </h1>

          <p
            ref={(el) => (textItemsRef.current[2] = el)}
            className="max-w-xl text-lg leading-relaxed text-[#9AA3B2] opacity-0"
          >
            I design and build modern web applications using MERN and
            Next.js, focusing on clean architecture, smooth animations,
            and scalable UI systems.
          </p>

          <div
            ref={(el) => (textItemsRef.current[3] = el)}
            className="flex flex-wrap gap-4 pt-4 opacity-0"
          >
            <button
              className="
                rounded-xl bg-linear-to-r from-[#7C6CFF] to-[#22D3EE]
                px-7 py-3 font-medium text-black
                shadow-lg shadow-[#7C6CFF]/30
                transition-all duration-300
                hover:scale-105 hover:shadow-[#22D3EE]/40
              "
              onClick={() => navigate("/projects")}
            >
              View Projects
            </button>

            <button
              className="
                rounded-xl border border-white/10
                bg-white/5 px-7 py-3 text-[#EDEFF4]
                backdrop-blur
                transition-all duration-300
                hover:border-[#22D3EE]/60 hover:text-[#22D3EE]
              "
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-linear-to-r from-[#7C6CFF]/30 to-[#22D3EE]/30 blur-3xl" />

          <div
            ref={imageRef}
            className="
              group relative overflow-hidden rounded-3xl
              border border-white/10
              bg-[#12151B]/80 backdrop-blur
              p-2
              shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]
              opacity-0
            "
          >
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
        <Slider />
      </div>
    </section>
  );
};

export default Hero;

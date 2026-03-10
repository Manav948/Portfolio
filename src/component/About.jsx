"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocationGlobe from "./ui/LocationGlobe";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const connectItemsRef = useRef([]);
  const stackItemsRef = useRef([]);
  const favItemsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        connectItemsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current[1],
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        stackItemsRef.current,
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: cardsRef.current[2],
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        favItemsRef.current,
        { scale: 0.85, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: cardsRef.current[3],
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-28 text-[#EDEFF4] overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-20 top-40 h-105 w-105 rounded-full bg-pink-500/20 blur-[150px]" />
        <div className="absolute right-20 bottom-40 h-105 w-105 rounded-full bg-cyan-500/20 blur-[150px]" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="mb-20 text-center text-4xl font-semibold tracking-wide">
          About Me
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6
            transition-all duration-500 hover:scale-[1.02] hover:border-white/20"
          >
            <LocationGlobe />

            <p className="mt-6 text-sm text-gray-400 leading-relaxed">
              I enjoy building fast and interactive web applications using
              modern frontend and backend technologies. My focus is clean UI,
              smooth animations and scalable architecture.
            </p>
          </div>

          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6
            transition-all duration-500 hover:scale-[1.02] hover:border-emerald-400/30"
          >
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-[#9AA3B2]">Connect</p>

              <span className="flex items-center gap-2 text-xs text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Available
              </span>
            </div>

            <ul className="flex flex-col gap-6 text-sm">
              {[
                { name: "LinkedIn", icon: "/linkdin.png" },
                { name: "GitHub", icon: "/github.png" },
                { name: "Twitter", icon: "/twitter.png" },
                { name: "Instagram", icon: "/i2.jpeg" },
                { name: "LeetCode", icon: "/leetcode.svg" },
              ].map((item, i) => (
                <li
                  key={item.name}
                  ref={(el) => (connectItemsRef.current[i] = el)}
                  className="flex items-center gap-3 opacity-0 transition hover:text-emerald-300"
                >
                  <img
                    src={item.icon}
                    className="h-10 w-10 rounded-md bg-white p-0.5"
                  />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6
            transition-all duration-500 hover:scale-[1.02] hover:border-blue-400/40"
          >
            <p className="mb-6 text-sm text-white">Tech I Use</p>

            <div className="grid grid-cols-4 gap-5 justify-items-center">

              {[
                "/react.svg",
                "/notion.svg",
                "/node.svg",
                "/MongoDB.svg",
                "/tailwind.svg",
                "/framer-motion.svg",
                "/typescript.svg",
                "/js.svg",
              ].map((icon, i) => (
                <div
                  key={icon}
                  ref={(el) => (stackItemsRef.current[i] = el)}
                  className="relative group flex items-center justify-center opacity-0"
                >
          
                  <div className="absolute h-10 w-10 rounded-full bg-blue-500/50 blur-xl opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-150" />

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 group-hover:border-blue-400/40 group-hover:scale-110">
                    <img
                      src={icon}
                      className="h-7 w-7 object-contain opacity-90 transition-all duration-300 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-gray-400 text-center">
              React · Next.js · Node · MongoDB · TypeScript
            </p>
          </div>

          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6
            transition-all duration-500 hover:scale-[1.02] hover:border-amber-300/30"
          >
            <p className="mb-6 text-sm text-[#9AA3B2]">
              Favourite Languages
            </p>

            <div className="flex justify-center gap-10">
              {["/notion.svg", "/react.svg", "/js.svg"].map((icon, i) => (
                <img
                  key={icon}
                  ref={(el) => (favItemsRef.current[i] = el)}
                  src={icon}
                  className="h-14 w-14 rounded-md bg-white p-1 transition hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                />
              ))}
            </div>

            <div className="mt-6 flex justify-between text-xs text-gray-400">
              <span>10+ Projects</span>
              <span>100+ LeetCode</span>
              <span>2+ Years Learning</span>
            </div>
          </div>

        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => navigate("/about")}
            className="relative overflow-hidden rounded-xl border border-white/10 px-8 py-3 text-md
            transition-all duration-300 hover:border-white/40 hover:bg-white/5"
          >
            Know more about me
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
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
  const navigate = useNavigate()
  const connectItemsRef = useRef([]);
  const stackItemsRef = useRef([]);
  const favItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Cards */
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

      /* Connect */
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

      /* Stack */
      gsap.fromTo(
        stackItemsRef.current,
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current[2],
            start: "top 80%",
          },
        }
      );

      /* Favourite */
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
      className="relative bg-black py-25 text-[#EDEFF4] cursor-pointer"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-24 top-40 h-105 w-105 rounded-full bg-pink-500/25 blur-[160px]" />
        <div className="absolute right-24 bottom-32 h-105 w-105 rounded-full bg-cyan-500/25 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-20 text-center text-4xl font-semibold">
          About Me
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div ref={(el) => (cardsRef.current[0] = el)}>
            <LocationGlobe />
          </div>

          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="rounded-2xl border border-white/10 p-6 shadow-emerald-300
                       shadow"
          >
            <p className="mb-8 text-sm text-[#9AA3B2]">Connect</p>

            <ul className="flex flex-col gap-6 text-sm">
              {[
                { name: "LinkedIn", icon: "/linkdin.png" },
                { name: "GitHub", icon: "/github.png" },
                { name: "Twitter", icon: "/twitter.png" },
                { name: "Instagram", icon: "/i2.jpeg" },
              ].map((item, i) => (
                <li
                  key={item.name}
                  ref={(el) => (connectItemsRef.current[i] = el)}
                  className="flex items-center gap-3 opacity-0"
                >
                  <img src={item.icon} className="h-6 w-6 bg-white" />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="rounded-2xl border border-white/10 p-6 shadow-blue-400
                       shadow"
          >
            <p className="mb-4 text-sm text-white">Stack</p>

            <div className="flex flex-wrap gap-3 text-sm">
              {[
                "React",
                "Next.js",
                "MongoDB",
                "Node.js",
                "Tailwind",
                "Framer Motion",
                "TypeScript",
              ].map((tech, i) => (
                <span
                  key={tech}
                  ref={(el) => (stackItemsRef.current[i] = el)}
                  className="opacity-0 rounded-md bg-white/10 px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Favourite */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="rounded-2xl border border-white/10 p-6
                       shadow-amber-100 shadow"
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
                  className="h-14 w-14  bg-white rounded-md"
                />
              ))}
            </div>

            <p className="mt-6 text-center text-sm opacity-70">
              Next.js · React · JavaScript
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
           className="rounded-xl border border-white/10  px-6 py-3 text-md transition hover:border-white/30"
           onClick={() => navigate("/about")}
          >
            Know more about me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

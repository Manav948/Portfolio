"use client";

import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

const items = [
  { src: "/react.svg", alt: "React" },
  { src: "/notion.svg", alt: "Next.js" },
  { src: "/node.svg", alt: "Node.js" },
  { src: "/MongoDB.svg", alt: "MongoDB" },
  { src: "/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/framer-motion.svg", alt: "Framer Motion" },
  { src: "/typescript.svg", alt: "TypeScript" },
  { src: "/github.png", alt: "GitHub" },
  { src: "/linkdin.png", alt: "LinkedIn" },
];

const Slider = () => {
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const lenis = new Lenis();

    let lastScroll = 0;

    lenis.on("scroll", (e) => {
      if (e.scroll > lastScroll) {
        setDirection(1);
      } else {
        setDirection(-1);
      }
      lastScroll = e.scroll;
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const repeated = [...items, ...items, ...items];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[160px]" />
        <div className="absolute left-1/3 top-0 h-125 w-125 rounded-full bg-pink-500/10 blur-[120px]" />
        <div className="absolute right-1/3 bottom-0 h-125 w-125 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 space-y-12">
        <motion.div
          animate={{ x: direction === 1 ? "-50%" : "0%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 w-max"
        >
          {repeated.map((item, i) => (
            <div
              key={i}
              className="relative group flex h-16 w-16 items-center justify-center"
            >
              <div className="
                absolute h-12 w-12 rounded-full bg-red-500 blur-xl opacity-0 transition-all duration-500
                group-hover:opacity-100 group-hover:scale-150"
              />
              <div
                className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-white/10
                bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:border-red-400/40
              group-hover:bg-white/10"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-9 w-9 object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* ROW 2 */}
        <motion.div
          animate={{ x: direction === 1 ? "0%" : "-50%" }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 w-max"
        >
          {repeated.map((item, i) => (
            <div
              key={i}
              className="relative group flex h-16 w-16 items-center justify-center"
            >
              <div className="absolute h-12 w-12 rounded-full bg-blue-500/40 blur-xl opacity-0
                transition-all duration-500 group-hover:opacity-100 group-hover:scale-150
              " />

              <div
                className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-white/10
                bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:border-blue-400/40
                group-hover:bg-white/10"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-9 w-9 object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Slider;
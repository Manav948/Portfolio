"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tech = [
  { icon: "/react.svg", radius: 70, speed: 14, direction: 1 },
  { icon: "/notion2.png", radius: 100, speed: 18, direction: -1 },
  { icon: "/typescript.svg", radius: 130, speed: 22, direction: 1 },
  { icon: "/node.svg", radius: 160, speed: 26, direction: -1 },
  { icon: "/MongoDB.svg", radius: 190, speed: 30, direction: 1 },
];

const TechGalaxy = () => {
  const sectionRef = useRef(null);
  const orbitRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      orbitRefs.current.forEach((orbit, i) => {
        const { speed, direction } = tech[i];

        gsap.to(orbit, {
          rotate: direction * 360,
          duration: speed,
          repeat: -1,
          ease: "linear",
          delay: i * 0.6, // different start time
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play pause resume pause",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center py-50 overflow-hidden"
    >

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />
      </div>
      <div className="relative flex items-center justify-center">

        <div className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-yellow-400 to-orange-500 shadow-[0_0_35px_rgba(100,200,255,0.7)]">
          <span className="text-md font-semibold text-black">
            Tech
          </span>
        </div>

        {tech.map((item, i) => (
          <div
            key={i}
            ref={(el) => (orbitRefs.current[i] = el)}
            className="absolute flex items-start justify-center"
            style={{
              width: item.radius * 2,
              height: item.radius * 2,
            }}
          >
            <div
              className="absolute rounded-full border border-white/10"
              style={{
                width: item.radius * 2,
                height: item.radius * 2,
              }}
            />

            <div className="group absolute -top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white backdrop-blur transition-all duration-300 hover:scale-125">

              <div className="absolute h-8 w-8 rounded-full bg-cyan-400/60 blur-xl opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150" />

              <img
                src={item.icon}
                className="relative h-6 w-6 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechGalaxy;
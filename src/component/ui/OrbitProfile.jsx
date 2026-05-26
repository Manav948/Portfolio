"use client";

import React, { useState } from "react";

const rings = [
  {
    radius: 80,
    speed: 20,
    direction: 1, // clockwise
    icons: [
      { src: "/react.svg", name: "React", glow: "rgba(34, 211, 238, 0.5)" },
      { src: "/tailwind.svg", name: "Tailwind CSS", glow: "rgba(56, 189, 248, 0.5)" },
    ],
  },
  {
    radius: 130,
    speed: 30,
    direction: -1, // counter-clockwise
    icons: [
      { src: "/typescript.svg", name: "TypeScript", glow: "rgba(59, 130, 246, 0.5)" },
      { src: "/js.svg", name: "JavaScript", glow: "rgba(234, 179, 8, 0.5)" },
      { src: "/node.svg", name: "Node.js", glow: "rgba(34, 197, 94, 0.5)" },
    ],
  },
  {
    radius: 180,
    speed: 40,
    direction: 1, // clockwise
    icons: [
      { src: "/MongoDB.svg", name: "MongoDB", glow: "rgba(16, 185, 129, 0.5)" },
      { src: "/framer-motion.svg", name: "Framer Motion", glow: "rgba(236, 72, 153, 0.5)" },
      { src: "/gsap.svg", name: "GSAP", glow: "rgba(132, 204, 22, 0.5)" },
    ],
  },
];

const OrbitProfile = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative flex items-center justify-center scale-75 xs:scale-80 sm:scale-90 md:scale-95 lg:scale-100 transition-transform duration-500 origin-center select-none w-[420px] h-[420px] ${
        isHovered ? "orbit-paused" : ""
      }`}
    >
      {/* Dynamic glow behind the entire widget */}
      <div className="absolute -z-10 h-72 w-72 rounded-full bg-linear-to-tr from-[#7C6CFF]/15 to-[#22D3EE]/15 blur-3xl" />

      {/* Center Profile Image Container */}
      <div className="group/avatar relative z-25 flex h-36 w-36 items-center justify-center cursor-pointer">
        {/* Pulsating back glow */}
        <div className="absolute -inset-1 -z-10 rounded-full bg-linear-to-r from-[#7C6CFF] to-[#22D3EE] opacity-50 blur-md transition duration-500 group-hover/avatar:opacity-85 group-hover/avatar:blur-lg" />

        {/* Conic gradient rotating border */}
        <div className="absolute inset-0 rounded-full p-[2.5px] bg-linear-to-tr from-[#7C6CFF] via-[#22D3EE] to-[#7C6CFF] animate-[spin-slow_12s_linear_infinite]" />

        {/* Black backdrop & Profile Photo */}
        <div className="w-full h-full rounded-full overflow-hidden bg-[#0B0D10] p-1 relative z-10">
          <img
            src="/Me2.jpg"
            alt="Manav Valani"
            className="h-full w-full rounded-full object-cover grayscale contrast-110 transition-all duration-700 ease-out group-hover/avatar:grayscale-0 group-hover/avatar:scale-110"
          />
        </div>

        {/* Available for work green badge */}
        <div className="absolute bottom-1 right-1 z-20 flex h-5 w-5 items-center justify-center rounded-full bg-[#0B0D10] border border-white/20 shadow-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping-slow" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
        </div>

        {/* Avatar Greeting Tooltip */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 scale-0 opacity-0 group-hover/avatar:scale-100 group-hover/avatar:opacity-100 transition-all duration-300 ease-out bg-linear-to-r from-[#7C6CFF] to-[#22D3EE] text-black px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-lg shadow-[#22D3EE]/30 whitespace-nowrap pointer-events-none z-30">
          Hi, I'm Manav! 👋
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#22D3EE]" />
        </div>
      </div>

      {/* Orbit Rings and Badges */}
      {rings.map((ring, rIdx) => {
        const iconCount = ring.icons.length;
        return (
          <React.Fragment key={rIdx}>
            {/* The circular orbit path lane */}
            <div
              className="absolute rounded-full border border-dashed border-white/10 pointer-events-none z-0"
              style={{
                width: `${ring.radius * 2}px`,
                height: `${ring.radius * 2}px`,
              }}
            />

            {/* Orbiting Badges */}
            {ring.icons.map((icon, idx) => {
              const startAngle = (360 / iconCount) * idx;
              return (
                <div
                  key={idx}
                  className="absolute left-1/2 top-1/2 origin-center orbit-animate z-10"
                  style={{
                    width: `${ring.radius * 2}px`,
                    height: `${ring.radius * 2}px`,
                    "--start-angle": `${startAngle}deg`,
                    animation: `${
                      ring.direction === 1 ? "orbit-clockwise" : "orbit-counter"
                    } ${ring.speed}s linear infinite`,
                  }}
                >
                  {/* Badge position on the top edge of the circular ring */}
                  <div className="absolute top-0 left-1/2 group/badge z-20 h-10 w-10">
                    <div
                      className="absolute inset-0 flex items-center justify-center rounded-xl border border-white/10 bg-black/60 backdrop-blur-md transition-all duration-300 hover:scale-125 hover:border-[#22D3EE]/50 hover:bg-[#12151B]/95 hover:shadow-[0_0_15px_var(--badge-glow)] cursor-pointer orbit-animate"
                      style={{
                        "--badge-glow": icon.glow,
                        animation: `${
                          ring.direction === 1
                            ? "counter-spin-clockwise"
                            : "counter-spin-counter"
                        } ${ring.speed}s linear infinite`,
                      }}
                    >
                      <img
                        src={icon.src}
                        alt={icon.name}
                        className="h-6 w-6 object-contain select-none transition-transform duration-300"
                      />

                      {/* Tooltip for the badge */}
                      <div className="absolute bottom-full left-1/2 mb-2.5 -translate-x-1/2 scale-0 rounded-lg bg-black/95 border border-white/15 px-2.5 py-1 text-xs font-semibold text-white shadow-xl transition-all duration-200 group-hover/badge:scale-100 whitespace-nowrap pointer-events-none">
                        {icon.name}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-black/95" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default OrbitProfile;

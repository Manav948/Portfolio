"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LocationGlobe = () => {
  const globeRef = useRef(null);

  useEffect(() => {
    // Fade + enter
    gsap.fromTo(
      globeRef.current,
      { opacity: 0, rotateY: -20 },
      {
        opacity: 1,
        rotateY: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: globeRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <div className="relative rounded-2xl border border-white/10 p-6 backdrop-blur shadow shadow-emerald-200">
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl blur-2xl opacity-40" />

      {/* Globe */}
      <div className="flex justify-center">
        <img
          ref={globeRef}
          src="/Earth.png"
          alt="Earth"
          className="h-48 w-48"
        />
      </div>

      {/* Location */}
      <p className="mt-6 text-sm text-[#9AA3B2]">
        📍 Dhoraji, Gujrat, India 
      </p>
    </div>
  );
};

export default LocationGlobe;

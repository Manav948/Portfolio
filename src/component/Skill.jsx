"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const icons = [
  "/react.png",
  "/next.png",
  "/mongo.png",
  "/node.png",
  "/express.png",
  "/tailwind.png",
  "/framer.png",
  "/github.png"
];

const Skills = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: true,
      },
    });

    /* TEXT COMES FIRST */
    tl.fromTo(
      textRef.current,
      { y: 200, opacity: 0, rotateX: 25 },
      { y: 0, opacity: 1, rotateX: 0, duration: 1 }
    );

    /* ICONS COME AFTER SOME SPACE */
    tl.fromTo(
      iconsRef.current,
      {
        y: 200,
        opacity: 0,
        scale: 0.6,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 1.5,
      },
      "+=1.4"
    );

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[220vh] bg-black text-[#EDEFF4]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-40 h-105 w-105 rounded-full bg-purple-500/20 blur-[160px]" />
        <div className="absolute right-1/3 bottom-40 h-105 w-105 rounded-full bg-cyan-500/20 blur-[160px]" />
      </div>

      <div className="sticky top-1/2 -translate-y-1/2">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div
            ref={textRef}
            style={{ perspective: "1000px" }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold">Tech Stack</h2>
            <p className="mx-auto mt-4 max-w-xl text-[#9AA3B2]">
              Tools and technologies I use to build modern, scalable,
              and performance-driven web applications.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 ">
            {icons.map((icon, i) => (
              <img
                key={i}
                ref={(el) => (iconsRef.current[i] = el)}
                src={icon}
                alt="Skill"
                className="h-16 w-16 opacity-0 bg-white"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

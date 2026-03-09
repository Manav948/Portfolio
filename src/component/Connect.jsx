"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const floatingSkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "MongoDB",
];

const Connect = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef([]);
  const contentRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* main content animation */
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        }
      );

      /* floating skill drift */
      skillsRef.current.forEach((el, i) => {
        gsap.to(el, {
          y: 10,
          duration: 2 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black py-28 md:py-40 text-white overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-10 md:p-16 text-center shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] overflow-hidden">

          {/* Glow background */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-pink-500/25 blur-[140px]" />
            <div className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-purple-500/25 blur-[140px]" />
          </div>

          {/* Floating skills */}
          {floatingSkills.map((skill, i) => (
            <span
              key={skill}
              ref={(el) => (skillsRef.current[i] = el)}
              className={`
                absolute hidden md:block
                rounded-full bg-black/70 px-4 py-1 text-xs text-[#9AA3B2]
                border border-white/10
                ${i === 0 && "left-6 top-6"}
                ${i === 1 && "right-6 top-10"}
                ${i === 2 && "left-10 bottom-8"}
                ${i === 3 && "right-12 bottom-6"}
                ${i === 4 && "left-1/2 top-3 -translate-x-1/2"}
              `}
            >
              {skill}
            </span>
          ))}

          {/* Badge */}
          <div
            ref={(el) => (contentRef.current[0] = el)}
            className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1 text-sm text-red-400"
          >
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            Manav Valani
          </div>

          {/* Heading */}
          <h2
            ref={(el) => (contentRef.current[1] = el)}
            className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight"
          >
            Let’s build something
            <br />
            <span className="text-red-400">great together</span>
          </h2>

          {/* Description */}
          <p
            ref={(el) => (contentRef.current[2] = el)}
            className="relative z-10 mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#9AA3B2]"
          >
            I'm always interested in new opportunities, exciting products,
            and creative collaborations. Whether you have a project in mind,
            want to discuss an idea, or just want to connect — feel free to
            reach out.
          </p>

          {/* CTA Buttons */}
          <div
            ref={(el) => (contentRef.current[3] = el)}
            className="relative z-10 mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="mailto:valanimanav61@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-red-500 px-7 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-105"
            >
              Send Email
            </a>

            <a
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3 text-sm font-medium text-white transition hover:border-white/30"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div
            ref={(el) => (contentRef.current[4] = el)}
            className="relative z-10 mt-10 flex justify-center gap-6 text-sm text-[#9AA3B2]"
          >
            <a href="#" className="hover:text-white transition">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Connect;
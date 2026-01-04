import React from "react";

const floatingSkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "MongoDB",
];

const Connect = () => {
  return (
    <section className="relative bg-black py-24 md:py-40 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative mx-auto max-w-3xl rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 sm:p-10 md:p-16 text-center shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Glow background */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-pink-500/25 blur-[140px]" />
            <div className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-purple-500/25 blur-[140px]" />
          </div>

          {/* Floating skills (desktop only) */}
          {floatingSkills.map((skill, i) => (
            <span
              key={skill}
              className={`
                absolute hidden md:block
                rounded-full bg-black/70 px-3 py-1 text-xs text-[#9AA3B2]
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
          <div className="relative z-10 mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1 text-xs sm:text-sm text-red-400">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            Manav Valani
          </div>

          {/* Heading */}
          <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            Opportunities to collaborate?
          </h2>

          {/* Description */}
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-[#9AA3B2]">
            Feel free to reach out to me. I’m always open to discussing new
            projects, creative ideas, or collaboration opportunities.
          </p>

          {/* CTA */}
          <div className="relative z-10 mt-8">
            <a
              href="mailto:valanimanav61@gmail.com"
              className="
                inline-flex items-center justify-center
                rounded-full bg-red-500 px-6 py-3
                text-sm font-medium text-white
                transition-transform duration-300
                hover:scale-105
              "
            >
              valanimanav61@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;

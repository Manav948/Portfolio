import React from "react";

const items = [
  { src: "/react.svg", alt: "React" },
  { src: "/notion.svg", alt: "Next.js" },
  { src: "/node.svg", alt: "Node.js" },
  { src: "/MongoDB.svg", alt: "MongoDB" },
  { src: "/tailwind.svg", alt: "Tailwind CSS" },
  { src: "/framer-motion.svg", alt: "Framer Motion" },
  { src: "/typescript.svg", alt: "TypeScript" },
  { src: "/github.png", alt: "Linkdin" },
  { src: "/linkdin.png", alt: "GitHub" },
];

const Slider = () => {
  return (
    <div className="relative overflow-hidden py-16">

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-24 top-40 h-105 w-105 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-24 bottom-32 h-105 w-105 rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      {/* Line 1 */}
      <div className="relative z-10 mb-8 flex w-max animate-marquee gap-14">
        {[...items, ...items].map((item, i) => (
          <div
            key={`line1-${i}`}
            className="flex h-16 w-16 items-center justify-center
                       rounded-xl border border-white/10
                       bg-white/5 backdrop-blur"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-9 w-9 object-contain opacity-80"
            />
          </div>
        ))}
      </div>

      {/* Line 2 (reverse) */}
      <div className="relative z-10 flex w-max animate-marquee-reverse gap-14">
        {[...items, ...items].map((item, i) => (
          <div
            key={`line2-${i}`}
            className="flex h-16 w-16 items-center justify-center
                       rounded-xl border border-white/10
                       bg-white/5 backdrop-blur"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="h-9 w-9 object-contain opacity-80"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

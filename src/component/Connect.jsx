import React from "react";
import { motion } from "framer-motion";

const floatingSkills = [
  { label: "React.js", x: -120, y: -80 },
  { label: "Next.js", x: 140, y: -60 },
  { label: "TypeScript", x: -160, y: 90 },
  { label: "JavaScript", x: 160, y: 110 },
  { label: "Tailwind", x: 0, y: -130 },
  { label: "MongoDB", x: 0, y: 150 },
];

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    x: [0, 6, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Connect = () => {
  return (
    <section className="relative bg-black py-40 text-white overflow-hidden">
      
      {/* Ambient moving glow */}
      <motion.div
        className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-purple-500/20 blur-[160px]"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-5xl px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto max-w-3xl rounded-3xl
          border border-white/10 bg-white/5 backdrop-blur-xl
          p-12 text-center
          shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]"
        >

          {/* Floating skill pills */}
          {floatingSkills.map((skill, i) => (
            <motion.span
              key={skill.label}
              className="absolute hidden md:block
              rounded-full bg-black/70 px-3 py-1 text-xs
              text-[#9AA3B2] border border-white/10"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(${skill.x}px, ${skill.y}px)`,
              }}
              {...floatAnimation}
            >
              {skill.label}
            </motion.span>
          ))}

          {/* Identity badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 inline-flex items-center gap-2
            rounded-full bg-red-500/10 px-4 py-1
            text-sm text-red-400"
          >
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            Manav Valani
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl font-semibold tracking-tight">
            Opportunities to collaborate?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#9AA3B2]">
            Feel free to reach out to me. I’m always open to discussing new
            projects, creative ideas, or collaboration opportunities.
          </p>

          {/* CTA */}
          <motion.a
            href="mailto:valanimanav61@gmail.com"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center justify-center
            rounded-full bg-red-500 px-6 py-3
            text-sm font-medium text-white"
          >
            valanimanav61@gmail.com
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;

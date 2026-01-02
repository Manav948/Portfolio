import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    img: "/imegino.png",
    title: "Imagino",
    description:
      "Imagino is an AI image & logo generator that allows users to create visuals using text prompts.",
    tech: ["React", "Tailwind", "Framer Motion", "MongoDB", "Express", "Node"],
    link: "https://imagino-dun.vercel.app",
  },
  {
    img: "/rejouice.png",
    title: "Rejouice",
    description:
      "A front-end clone of the Rejouice website focusing on creative layouts and smooth animations.",
    tech: ["React", "Framer Motion", "GSAP", "Locomotive", "Lenis"],
    link: "https://rejouice-clone-six.vercel.app",
  },
  {
    img: "/sundown-studio.png",
    title: "SunDown Studio",
    description:
      "A motion-focused front-end clone showcasing smooth scrolling and elegant interactions.",
    tech: ["React", "Tailwind", "Framer Motion", "Lenis"],
    link: "https://sun-down-studio-omega.vercel.app",
  },
  {
    img: "/draftly.png",
    title: "Draftly",
    description:
      "A modern workspace for tasks, mind maps, and productivity-focused workflows.",
    tech: ["Next.js", "Tailwind", "Shadcn UI", "Framer Motion", "TipTap"],
  },
];

const Project = () => {
  return (
    <section className="relative py-32">
      {/* Ambient lights */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-20 h-105 w-105 rounded-full bg-purple-500/20 blur-[160px]" />
        <div className="absolute right-1/4 bottom-20 h-105 w-105 rounded-full bg-cyan-500/20 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl font-bold">Selected Projects</h2>
          <p className="mt-3 text-[#9AA3B2]">
            A curated selection of projects focused on UI, motion, and frontend engineering.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0F1117]/80 backdrop-blur"
            >
              {/* Image */}
              <div
                onClick={() => project.link && window.open(project.link, "_blank")}
                className="relative h-60 cursor-pointer overflow-hidden"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-3 text-sm text-[#9AA3B2] leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#9AA3B2]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="mt-6 inline-block text-sm font-medium text-[#22D3EE] transition-colors hover:text-[#7C6CFF]"
                  >
                    View Project →
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

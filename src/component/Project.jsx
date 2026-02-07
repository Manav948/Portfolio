import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    img: "/draftly.png",
    title: "Draftly",
    description:
      "A modern workspace for tasks, mind maps, and productivity-focused workflows.",
    tech: ["Next.js", "Tailwind", "Shadcn UI", "Framer Motion", "TipTap"],
    link: "https://draftly-three.vercel.app/en"
  },
  {
    img: "/FeedBackly2.png",
    title: "FeedBackly",
    description:
      "A Next.js-based application allowing users to receive anonymous feedback via shareable links.",
    tech: ["Next.js", "Tailwind", "React", "Lenis", "MongoDB"],
    link: "https://feedbackly-seven.vercel.app/"
  },
  {
    img: "/imegino.png",
    title: "Imagino",
    description:
      "Imagino is an AI image & logo generator that allows users to create visuals using text prompts.",
    tech: ["React", "Tailwind", "Framer Motion", "MongoDB", "Express", "Node"],
    link: "https://imagino-dun.vercel.app",
  },
  {
    img: "/Assitant.png",
    title: "AI Assistant",
    description:
      "A full-stack AI-powered voice assistant built with modern backend and AI APIs.",
    tech: ["MongoDB", "Tailwind", "React", "Node", "Express", "Gemini API"],
    link: "https://ai-assistant-neon-one.vercel.app/"
  },

];

const Project = () => {
  return (
    <section className="relative md:py-32 py-20">

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/4 top-20 h-105 w-105 rounded-full bg-purple-500/20 blur-[160px]" />
        <div className="absolute right-1/4 bottom-20 h-105 w-105 rounded-full bg-cyan-500/20 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl font-bold">Selected Projects</h2>
          <p className="mt-3 text-[#9AA3B2]">
            A curated selection of projects focused on UI, motion, and frontend engineering.
          </p>
        </div>


        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0F1117]/30 backdrop-blur p-5 transition-all duration-300 hover:border-white/20
              shadow"
            >

              <div
                onClick={() => project.link && window.open(project.link, "_blank")}
                className="relative cursor-pointer overflow-hidden rounded-2xl"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="md:p-8 p-5">
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

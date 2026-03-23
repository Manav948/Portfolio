"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiNextdotjs, SiTailwindcss, SiPrisma, SiSupabase, SiPostgresql, SiMongodb, SiReactquery, SiFramer, SiExpress, SiNodedotjs, } from "react-icons/si";

const techIcons = {
  "Next.js": {
    icon: <SiNextdotjs />,
    gradient: "from-white to-gray-400",
  },
  Tailwind: {
    icon: <SiTailwindcss />,
    gradient: "from-cyan-400 to-blue-500",
  },
  Prisma: {
    icon: <SiPrisma />,
    gradient: "from-indigo-400 to-purple-500",
  },
  Supabase: {
    icon: <SiSupabase />,
    gradient: "from-green-400 to-emerald-600",
  },
  PostGress: {
    icon: <SiPostgresql />,
    gradient: "from-blue-400 to-indigo-500",
  },
  MongoDB: {
    icon: <SiMongodb />,
    gradient: "from-green-500 to-lime-400",
  },
  "React-tanstack-query": {
    icon: <SiReactquery />,
    gradient: "from-orange-400 to-red-500",
  },
  "Framer Motion": {
    icon: <SiFramer />,
    gradient: "from-pink-500 to-purple-500",
  },
  Express: {
    icon: <SiExpress />,
    gradient: "from-gray-300 to-gray-500",
  },
  Node: {
    icon: <SiNodedotjs />,
    gradient: "from-green-400 to-green-600",
  },
};

const projects = [
  {
    img: "/draftly.png",
    title: "Draftly",
    description:
      "A modern workspace for tasks, mind maps, and productivity-focused workflows.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://draftly.manavvalani.in/en",
  },
  {
    img: "/codeVerse.png",
    title: "CodeVerse",
    description:
      "A developer platform to publish posts, manage coding tasks, store reusable snippets and document a learning journey.",
    tech: [
      "Next.js",
      "Tailwind",
      "PostGress",
      "Supabase",
      "Prisma",
      "React-tanstack-query",
      "Framer Motion",
    ],
    link: "https://codeverse.manavvalani.in/",
  },
  {
    img: "/FeedBackly3.png",
    title: "FeedBackly",
    description:
      "Application that allows users to receive anonymous feedback using shareable links.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    link: "https://feedbackly-seven.vercel.app/",
  },
  {
    img: "/imegino.png",
    title: "Imagino",
    description:
      "AI image and logo generator that converts prompts into visuals.",
    tech: ["Tailwind", "MongoDB", "Express", "Node"],
    link: "https://imagino-dun.vercel.app",
  },
];

const Project = () => {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-10 h-96 w-96 rounded-full bg-purple-500/20 blur-[150px]" />
        <div className="absolute right-1/4 bottom-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Selected Projects
          </h2>

          <p className="mt-4 text-[#9AA3B2] text-sm leading-relaxed">
            A curated selection of projects focused on product engineering,
            UI/UX systems and modern frontend architecture.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 backdrop-blur-xl shadow-lg transition hover:border-white/20"
            >

              <div
                onClick={() => window.open(project.link, "_blank")}
                className="relative aspect-video overflow-hidden cursor-pointer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />
              </div>
              <div className="p-6 md:p-8">

                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-[#9AA3B2] leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-4">

                  {project.tech.map((tech, i) => {
                    const item = techIcons[tech];

                    return (
                      <div key={i} className="relative group/tech">
                        <div
                          className={`
                          absolute inset-0 rounded-full bg-linear-to-r ${item.gradient} opacity-0 blur-md
                          transition duration-300 group-hover/tech:opacity-70`}
                        />

                        <div
                          className="relative flex items-center justify-center w-10 h-10 rounded-full
                          bg-[#0F1117] border border-white/10 text-lg text-white transition
                          duration-300 group-hover/tech:scale-110"
                        >
                          {item.icon}
                        </div>

                        <div
                          className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white
                          text-[10px] px-2 py-1 rounded opacity-0 transition duration-200 group-hover/tech:opacity-100
                          whitespace-nowrap"
                        >
                          {tech}
                        </div>

                      </div>
                    );
                  })}

                </div>
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="mt-6 text-sm font-medium text-cyan-400 transition hover:text-purple-400"
                >
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Project;
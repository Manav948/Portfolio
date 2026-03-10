"use client";

import React from "react";
import ScrollView from "../component/ui/ScrollView";
import Footer from "../component/Footer";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiSupabase,
  SiPostgresql,
  SiMongodb,
  SiReactquery,
  SiFramer,
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiShadcnui,
} from "react-icons/si";

const techIcons = {
  "Next.js": { icon: <SiNextdotjs />, gradient: "from-white to-gray-400" },
  Tailwind: { icon: <SiTailwindcss />, gradient: "from-cyan-400 to-blue-500" },
  Prisma: { icon: <SiPrisma />, gradient: "from-indigo-400 to-purple-500" },
  Supabase: { icon: <SiSupabase />, gradient: "from-green-400 to-emerald-600" },
  PostGress: { icon: <SiPostgresql />, gradient: "from-blue-400 to-indigo-500" },
  MongoDB: { icon: <SiMongodb />, gradient: "from-green-500 to-lime-400" },
  "React-tanstack-query": {
    icon: <SiReactquery />,
    gradient: "from-orange-400 to-red-500",
  },
  "Framer Motion": {
    icon: <SiFramer />,
    gradient: "from-pink-500 to-purple-500",
  },
  Express: { icon: <SiExpress />, gradient: "from-gray-300 to-gray-500" },
  Node: { icon: <SiNodedotjs />, gradient: "from-green-400 to-green-600" },
  React: { icon: <SiReact />, gradient: "from-cyan-400 to-blue-500" },
  "Shadcn UI": { icon: <SiShadcnui />, gradient: "from-gray-400 to-gray-600" },
};

const projects = [
  {
    img: "/draftly.png",
    title: "Draftly",
    description:
      "A modern workspace for tasks, mind maps, and productivity-focused workflows.",
    tech: [
      "Next.js",
      "Tailwind",
      "Shadcn UI",
      "Framer Motion",
      "Supabase",
      "Prisma",
      "React-tanstack-query",
    ],
    link: "https://draftly.manavvalani.in/en",
  },
  {
    img: "/codeVerse.png",
    title: "CodeVerse",
    description:
      "CodeVerse is a developer-focused platform to publish posts, manage coding tasks, store reusable code snippets, and build a public learning journey in one unified ecosystem.",
    tech: [
      "Next.js",
      "Tailwind",
      "Shadcn UI",
      "Framer Motion",
      "PostGress",
      "Supabase",
      "Prisma",
      "React-tanstack-query",
    ],
    link: "https://codeverse.manavvalani.in/",
  },
  {
    img: "/FeedBackly2.png",
    title: "FeedBackly",
    description:
      "A Next.js-based application allowing users to receive anonymous feedback via shareable links.",
    tech: ["Next.js", "Tailwind", "React", "Lenis", "MongoDB"],
    link: "https://feedbackly-seven.vercel.app/",
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
    title: "AI-Assitant",
    description:
      "A full-stack AI-powered voice assistant built with React, Node.js, Express, and MongoDB. Features real-time speech recognition, wake word detection, and natural language responses using the Google Gemini API.",
    tech: ["React", "Tailwind", "Framer Motion", "MongoDB", "Express", "Node", ],
    link: "https://ai-assistant-neon-one.vercel.app/",
  },
  {
    img: "/rejouice.png",
    title: "Rejouice",
    description:
      "A front-end clone of the Rejouice website, built with React. for animation i used gsap , locomotive js and framermotion The project focuses on smooth animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://rejouice-clone-six.vercel.app/",
  },
  {
    img: "/sundown-studio.png",
    title: "SunDown Studio",
    description:
      "A front-end clone of Sundown Studio is a creative digital space where design meets motion. Built with React, Tailwind, and Framer Motion, it showcases smooth animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://sun-down-studio-omega.vercel.app/",
  },
  {
    img: "/ThinkBoard.png",
    title: "Imagino",
    description:
      "ThinkBoard is a FullStack Application there use can create a Task and update and delete and maintain daily records",
    tech: ["React", "Tailwind", "MongoDB", "Express", "Node"],
    link: "https://think-board-lsdj.vercel.app/",
  },
  {
    img: "/MovieHub.png",
    title: "Imagino",
    description:
      "A Front-end MovieHub built using React and Vite. It allows users to browse, search, and view details about various movies.",
    tech: ["React", "Tailwind"],
    link: "https://movie-hub-lac-psi.vercel.app/",
  },
];

const AllProject = () => {
  return (
    <ScrollView>
      <section className="relative min-h-screen bg-black py-32 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">

          <div
            className="absolute inset-0 opacity-[0.50]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff20 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff20 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(circle at center, black 40%, transparent 50%)",
            }}
          />

          <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[180px]" />
          <div className="absolute left-0 top-32 h-100 w-100 rounded-full bg-cyan-500/20 blur-[160px]" />
          <div className="absolute right-0 bottom-32 h-100 w-100 rounded-full bg-pink-500/20 blur-[160px]" />
          <div className="absolute right-20 top-20 h-75 w-75 rounded-full bg-indigo-500/20 blur-[150px]" />

        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight">
              All Projects
            </h1>

            <p className="mt-4 text-lg text-[#9AA3B2]">
              A complete collection of projects I’ve built — from creative UI
              experiments to full-stack applications.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 mt-24">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10
                bg-white/2 backdrop-blur-xl p-6 transition-all duration-300
                hover:border-white/20 hover:shadow-[0_0_50px_rgba(0,255,255,0.12)]"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                  <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
                </div>

                <div className="mb-5 overflow-hidden rounded-xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>

                <p className="mt-2 text-md leading-relaxed text-[#9AA3B2]">
                  {project.description}
                </p>
                
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => {
                    const item = techIcons[tech];
                    if (item) {
                      return (
                        <div key={i} className="relative group/tech">
                          <div
                            className={`absolute inset-0 rounded-full bg-linear-to-r ${item.gradient}
                            opacity-0 blur-md transition duration-300 group-hover/tech:opacity-70`}
                          />

                          <div
                            className="relative flex items-center justify-center w-10 h-10 rounded-full
                            bg-[#0F1117] border border-white/10 text-lg text-white transition
                            duration-300 group-hover/tech:scale-110"
                          >
                            {item.icon}
                          </div>

                          <div
                            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px]
                            px-2 py-1 rounded opacity-0 transition group-hover/tech:opacity-100 whitespace-nowrap"
                          >
                            {tech}
                          </div>

                        </div>
                      );
                    }

                    return (
                      <span
                        key={i}
                        className="rounded-md bg-white/10 px-2 py-1 text-sm text-[#C7CBD6]"
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-sm font-medium text-cyan-400 transition hover:text-purple-400"
                  >
                    View Project →
                  </a>
                )}

              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </ScrollView>
  );
};

export default AllProject;
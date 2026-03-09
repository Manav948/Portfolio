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
  SiShadcnui
} from "react-icons/si";

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
  React: {
    icon: <SiReact />,
    gradient: "from-cyan-400 to-blue-500",
  },
  "Shadcn UI": {
    icon: <SiShadcnui />,
    gradient: "from-gray-400 to-gray-600",
  },
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
      "TipTap",
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
      "Lenis",
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
];

const AllProject = () => {
  return (
    <ScrollView>
      <section className="relative min-h-screen bg-black py-32 text-white overflow-hidden">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-40 h-96 w-96 rounded-full bg-purple-500/20 blur-[160px]" />
          <div className="absolute right-1/4 bottom-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight">
              All Projects
            </h1>

            <p className="mt-4 text-lg text-[#9AA3B2]">
              A complete collection of projects I’ve built — ranging from
              creative front-end experiments to full-stack applications.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 mt-24">

            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur p-6 transition-all duration-300 hover:border-white/20 shadow"
              >

                <div className="mb-5 overflow-hidden rounded-xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>

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
                            bg-[#0F1117] border border-white/10 text-lg text-white transition duration-300
                            group-hover/tech:scale-110"
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
                        className="
                        rounded-md bg-white/10
                        px-2 py-1 text-sm text-[#C7CBD6]
                        "
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
import React from "react";
import ScrollView from "../component/ui/ScrollView";
import Footer from "../component/Footer";

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
  {
    img: "/feedbackly.png",
    title: "FeedBackly",
    description:
      "A Next.js-based application allowing users to receive anonymous feedback via shareable links.",
    tech: ["Next.js", "Tailwind", "React", "Lenis", "MongoDB"],
  },
  {
    img: "/Ai-assistant.png",
    title: "AI Assistant",
    description:
      "A full-stack AI-powered voice assistant built with modern backend and AI APIs.",
    tech: ["MongoDB", "Tailwind", "React", "Node", "Express", "Gemini API"],
  },
  {
    img: "/todo.png",
    title: "Think Board",
    description:
      "A full-stack task manager where users can create, track, and manage daily tasks.",
    tech: ["MongoDB", "Tailwind", "React", "Node", "Express"],
    link: "https://think-board-lsdj.vercel.app/",
  },
];

const AllProject = () => {
  return (
    <ScrollView>  
      <section className="relative min-h-screen bg-black py-32 text-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/4 top-40 h-96 w-96 rounded-full bg-purple-500/20 blur-[160px]" />
          <div className="absolute right-1/4 bottom-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight">
              All Projects
            </h1>
            <p className="mt-4 text-lg text-[#9AA3B2]">
              A complete collection of projects I’ve built — ranging from
              creative front-end experiments to full-stack applications.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                group relative overflow-hidden
                rounded-2xl border border-white/10
                backdrop-blur p-6
                transition-all duration-300
                hover:border-white/20
                shadow

              "
              >
                {/* Image */}
                <div className="mb-5 overflow-hidden rounded-xl">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="
                    w-full object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                  />
                </div>

                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="mt-2 text-md leading-relaxed text-[#9AA3B2]">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                      rounded-md bg-white/10
                      px-2 py-1 text-sm text-[#C7CBD6]
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    mt-6 inline-block text-sm font-medium
                    text-cyan-400
                    transition-colors hover:text-purple-400
                  "
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

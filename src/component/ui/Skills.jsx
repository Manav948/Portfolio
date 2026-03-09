import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPrisma,
  SiSupabase,
} from "react-icons/si";

const skills = [
  { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
  { icon: <SiReact />, name: "React", color: "#61DBFB" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#38BDF8" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiPrisma />, name: "Prisma", color: "#ffffff" },
  { icon: <SiSupabase />, name: "Supabase", color: "#3ECF8E" },
];

export default function Skills() {
  return (
    <section className="py-28 relative bg-[#0F1117] rounded-3xl mx-4 my-10">
      <h2 className="text-3xl font-semibold text-center mb-14 text-[#EDEFF4]">
        Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-10">

        {skills.map((skill, i) => (
          <div key={i} className="group relative">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 to-cyan-500 opacity-0 blur-xl transition duration-500 group-hover:opacity-60" />
            <div
              className="
              relative
              flex items-center justify-center
              w-16 h-16
              rounded-full
              bg-[#0F1117]
              border border-white/10
              text-2xl
              transition
              duration-300
              group-hover:scale-110
              "
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>

            <div
              className="absolute -top-9 left-1/2 -translate-x-1/2 bg-black text-white
              text-xs px-3 py-1 rounded opacity-0 transition duration-300 group-hover:opacity-100"
            >
              {skill.name}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
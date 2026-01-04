const Footer = () => {
  return (
    <footer className="relative bg-[#030406] border-t border-white/10 overflow-hidden">

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-24 top-40 h-105 w-105 rounded-full bg-blue-500/25 blur-[160px]" />
        <div className="absolute right-24 -bottom-40 h-105 w-105 rounded-full bg-cyan-500/25 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="text-sm tracking-wide text-[#EDEFF4]">
            Manav 💖 Valani
          </span>

          {/* Short description */}
          <p className="max-w-md text-sm leading-relaxed text-[#9AA3B2]">
            Full-stack developer focused on building modern, performant,
            and visually refined web experiences.
          </p>

          {/* Social links */}
          <div className="flex gap-8 pt-2">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-sm text-[#9AA3B2] transition-colors hover:text-[#EDEFF4]"
            >
              <img
                src="/github.png"
                className="h-8 w-8 opacity-70 transition-opacity group-hover:opacity-100 bg-white"
              />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-sm text-[#9AA3B2] transition-colors hover:text-[#EDEFF4]"
            >
              <img
                src="/linkdin.png"
                className="h-8 w-8 opacity-70 transition-opacity group-hover:opacity-100"
              />
              LinkedIn
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 text-sm text-[#9AA3B2] transition-colors hover:text-[#EDEFF4]"
            >
              <img
                src="/twitter.png"
                className="h-8 w-8 opacity-70 transition-opacity group-hover:opacity-100 bg-white"
              />
              Twitter
            </a>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px w-32 bg-linear-to-r from-transparent via-white/15 to-transparent" />

          {/* Copyright */}
          <span className="text-xs text-[#6B7280]">
            © {new Date().getFullYear()} Manav Valani. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

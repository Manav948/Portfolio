const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#06080a]">
      
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-40 w-40 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute right-1/3 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        
        <div className="flex flex-col items-center gap-6 text-center">
          
          {/* Name / Brand */}
          <span className="text-sm font-medium tracking-wide text-[#EDEFF4]">
           Made with 💖 Manav Valani
          </span>

          {/* Short description */}
          <p className="max-w-md text-sm text-[#9AA3B2]">
            Fullstack Developer focused on building modern, performant,
            and visually refined web experiences.
          </p>

          {/* Social links */}
          <div className="flex gap-6 text-sm">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="text-[#9AA3B2] transition-colors hover:text-[#22D3EE]"
            >
              <img src="/github.png" className="h-8 w-8 bg-white rounded-md ml-1.5 mb-2 " />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="text-[#9AA3B2] transition-colors hover:text-[#7C6CFF]"
            >
              <img src="/linkdin.png" className="h-8 w-8 rounded-md bg-white ml-2 mb-2" />
              LinkedIn
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-[#9AA3B2] transition-colors hover:text-white"
            >
              <img src="/twitter.png" className="w-8 h-8 rounded-md bg-white ml-1 mb-2" />
              Twitter
            </a>
          </div>

          {/* Divider */}
          <div className="h-px w-24 bg-linear-to-r from-transparent via-white/20 to-transparent" />

          {/* Copyright */}
          <span className="text-xs text-[#6B7280]">
            © {new Date().getFullYear()} Manav Valani. Built with React & Tailwind.
          </span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

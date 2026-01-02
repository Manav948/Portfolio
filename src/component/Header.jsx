import React from "react";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full pt-4">
      <div className="mx-auto max-w-7xl px-6 py-4">

        <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-background/60 backdrop-blur-xl px-6 py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]
        ">

          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r
        from-purple-500/20 via-transparent to-cyan-500/20
        opacity-60
      " />

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative z-10 flex items-center gap-3 group"
          >
            <div className="
              h-10 w-10 rounded-full
              bg-linear-to-tr from-primary to-purple-500
              p-0.5
              transition-transform duration-300
              group-hover:scale-110
            ">
              <img
                src="/Me.jpg"
                alt="Me"
                className="h-full w-full rounded-full object-cover bg-background"
              />
            </div>

            <span className="text-sm font-semibold tracking-wide text-foreground">
              Manav Valani
            </span>
          </button>

          {/* Navigation */}
          <nav className="relative z-10 flex items-center gap-6">

            <NavLink label="Projects" />
            <NavLink label="About" />

          </nav>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ label }) => {
  return (
    <a
      href="#"
      className="
        relative text-sm font-medium text-muted-foreground
        transition-colors duration-300
        hover:text-foreground
        after:absolute after:-bottom-1 after:left-0
        after:h-0.5 after:w-0
        after:bg-linear-to-r after:from-primary after:to-purple-500
        after:transition-all after:duration-300
        hover:after:w-full
      "
    >
      {label}
    </a>
  );
};

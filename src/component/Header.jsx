import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full pt-4">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            relative flex items-center justify-between
            rounded-2xl border border-white/10
            bg-[#0B0D10]/70 backdrop-blur-xl
            px-6 py-3
          "
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
            <div
              className="
                absolute left-0 top-1/2
                h-20 w-20 -translate-y-1/2
                rounded-full
                bg-purple-500/30
                blur-[50px]
              "
            />

            <div
              className="
                absolute right-0 top-1/2
                h-20 w-20 -translate-y-1/2
                rounded-full
                bg-cyan-500/30
                blur-[50px]
              "
            />
          </div>

          <NavLink
            to="/"
            className="relative z-10 flex items-center gap-3 group"
          >
            <div
              className="
                h-10 w-10 rounded-full
                bg-linear-to-tr from-purple-500 to-cyan-500
                p-0.5
                transition-transform duration-300
                group-hover:scale-110
              "
            >
              <img
                src="/Me.jpg"
                alt="Manav Valani"
                className="h-full w-full rounded-full object-cover bg-[#0B0D10]"
              />
            </div>

            <span className="text-sm font-semibold tracking-wide text-white">
              Manav Valani
            </span>
          </NavLink>

          <nav className="relative z-10 flex items-center gap-6">
            <HeaderLink to="/projects" label="Projects" />
            <HeaderLink to="/about" label="About" />
          </nav>
        </div>
      </div>
    </header>
  );
};

const HeaderLink = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
          relative text-sm font-medium
          transition-colors duration-300
          ${isActive ? "text-white" : "text-[#9AA3B2]"}
          after:absolute after:-bottom-1 after:left-0
          after:h-0.5 after:w-0
          after:bg-linear-to-r after:from-purple-500 after:to-cyan-500
          after:transition-all after:duration-300
          hover:after:w-full
        `
      }
    >
      {label}
    </NavLink>
  );
};
export default HeaderLink
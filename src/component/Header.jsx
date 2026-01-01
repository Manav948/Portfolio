import React from "react";

export const Header = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-background/70 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border bg-background px-6 py-3 shadow-sm">
          
          {/* Logo */}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex items-center gap-3 transition-transform hover:scale-105"
          >
            <span className="text-xl font-semibold uppercase text-primary h-10 w-10 text-center">
              <img src="/Me.jpg" className="object-cover rounded-full" />
            </span>
          </button>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <a
              href="/sign-in"
              className="border-b border-transparent text-sm font-medium transition-colors hover:border-primary"
            >
              Projects
            </a>

            <a
              href="/sign-up"
            >
              About
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import SocialTooltip from "../component/ui/SocialTooltip";

const Footer = () => {
  return (
    <footer className="relative bg-[#030406] border-t border-white/10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-105 w-105 rounded-full bg-blue-500/20 blur-[180px]" />
        <div className="absolute right-1/4 bottom-0 h-105 w-105 rounded-full bg-cyan-500/20 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-lg font-semibold tracking-wide text-white">
              Manav Valani
            </h2>

            <p className="text-sm leading-relaxed text-[#9AA3B2] max-w-sm">
              Full-stack developer focused on crafting modern web applications,
              scalable backend systems, and refined user experiences.
            </p>

            <div className="pt-4">
              <SocialTooltip />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-white tracking-wide">
              Navigation
            </h3>

            <div className="flex flex-col gap-2 text-sm text-[#9AA3B2]">
              <a href="/" className="hover:text-white transition">
                Home
              </a>
              <a href="/projects" className="hover:text-white transition">
                Projects
              </a>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-sm font-semibold text-white tracking-wide">
              About This Site
            </h3>

            <p className="text-sm text-[#9AA3B2] leading-relaxed max-w-sm">
              Built with modern technologies including React, Next.js,
              TailwindCSS and Framer Motion. Designed with a focus on
              performance, accessibility and developer experience.
            </p>

            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="mt-3 text-sm text-cyan-400 hover:text-purple-400 transition"
            >
              Back to top ↑
            </button>
          </motion.div>

        </div>

        <div className="mt-16 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <span>
            © {new Date().getFullYear()} Manav Valani. All rights reserved.
          </span>
          <span>
            Built with ❤️ by Manav Valani
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
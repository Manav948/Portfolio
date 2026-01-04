import React from "react";
import About from "../component/About";
import ScrollView from "../component/ui/ScrollView";
import Footer from "../component/Footer";
import Connect from "../component/Connect";

const AboutMe = () => {
  return (
    <ScrollView>
      <section className="relative min-h-screen bg-black text-white py-62 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute left-1/4 top-32 h-96 w-96 rounded-full bg-purple-500/20 blur-[160px]" />
          <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6">

          {/* Page Header */}
          <div className="mb-24 max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight">
              About Me
            </h1>
            <p className="mt-15 text-2xl text-semibold">
              Hii , I am Manav Valani
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[#9AA3B2]">
              I’m a full-stack web developer who enjoys building modern,
              performant, and visually refined web applications. I primarily
              work with React, Next.js, and the MERN stack, focusing on clean
              architecture, smooth interactions, and scalable UI systems.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-[#9AA3B2]">
              I enjoy turning complex ideas into simple, intuitive experiences
              and pay close attention to details—from motion and layout to
              performance and accessibility. I’m constantly learning and
              experimenting to improve both my technical skills and design
              sensibility.
            </p>
          </div>
          <About />
          <Connect />
        </div>
      </section>
      <Footer />
    </ScrollView>
  );
};

export default AboutMe;

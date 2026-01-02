import React from "react";
import { Header } from "../component/Header";
import Hero from "../component/Hero";
import Footer from "../component/Footer";
import MouseFollowCard from "../component/ui/MouseHower";
import Project from "../component/Project";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-[#EDEFF4]">
      <Header />
      <main className="pt-32">
        <section className="mx-auto max-w-6xl">
          <div className="justify-center">
            <MouseFollowCard />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;


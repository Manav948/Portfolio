import React from "react";
import { Header } from "../component/Header";
import Footer from "../component/Footer";
import MouseFollowCard from "../component/ui/MouseHower";
import ScrollView from "../component/ui/ScrollView";

const Home = () => {
  return (
    <ScrollView>
      <div className="min-h-screen bg-black text-[#EDEFF4] overflow-hidden">
        <Header />
        <main className="pt-32">
          <div className="mx-auto max-w-6xl px-6 py-32">
            <MouseFollowCard />
          </div>
        </main>
        <Footer />
      </div>
    </ScrollView>
  );
};

export default Home;

import React, { useState } from "react";
import { Header } from "../component/Header";
import Footer from "../component/Footer";
import MouseFollowCard from "../component/ui/MouseHower";
import ScrollView from "../component/ui/ScrollView";
import PageLoader from "../component/ui/PageLoader";

const Home = () => {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <ScrollView>
      <div className="min-h-screen bg-black text-[#EDEFF4] overflow-hidden">
        {showLoader && <PageLoader onComplete={() => setShowLoader(false)} />}
        <Header />
        <main>
          <div className="mx-auto max-w-7xl py-32">
            <MouseFollowCard />
          </div>
        </main>
        <Footer />
      </div>
    </ScrollView>
  );
};

export default Home;

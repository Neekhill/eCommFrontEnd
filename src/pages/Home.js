import React from "react";
import Announcement from "../components/Announcement";
import HeroSlider from "../components/HeroSlider";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <HeroSlider />
    </div>
  );
}

export default Home;

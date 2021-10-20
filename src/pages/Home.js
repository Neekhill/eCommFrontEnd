import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import HeroSlider from "../components/HeroSlider";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <HeroSlider />
      <Categories />
    </div>
  );
}

export default Home;

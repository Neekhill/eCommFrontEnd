import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import HeroSlider from "../components/HeroSlider";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <HeroSlider />
      <Categories />
      <Products />
      <NewsLetter />
    </div>
  );
}

export default Home;

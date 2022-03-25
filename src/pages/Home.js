import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import SkeletonSingleProduct from "../components/SkeletonSingleProduct";

function Home() {
  return (
    <div>
      <SkeletonSingleProduct />
      <Announcement />
      <Navbar />
      <HeroSlider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;

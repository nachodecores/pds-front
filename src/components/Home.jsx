import React from "react";
import HomeHeader from "./partials/HomeHeader";
import Hero from "./partials/Hero";
import Poster from "./partials/Poster";
import Partners from "./partials/Partners";
import Footer from "./partials/Footer";

import "./styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <HomeHeader />
      <Hero />
      <Poster />
      <Partners />
      <Footer />
    </div>
  );
}

import React from "react";
import HomeHeader from "./partials/HomeHeader";
import Hero from "./partials/Hero";
import Poster from "./partials/Poster";
import Auctioneers from "./partials/Auctioneers";
import Footer from "./partials/Footer";
import Welcome from "./partials/Welcome";

import "./styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <Welcome />
      <HomeHeader />
      <Hero />
      <Poster />
      <Auctioneers />
      <Footer />
    </div>
  );
}

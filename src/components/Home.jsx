import React from "react";
import HomeHeader from "./partials/HomeHeader";
import Hero from "./partials/Hero";
import Poster from "./partials/Poster";
import Footer from "./partials/Footer";
// import Partners from "./partials";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Hero />
      <Poster />
      {/* <Partners /> */}
      <Footer />
    </>
  );
}

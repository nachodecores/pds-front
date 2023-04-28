import React from "react";
import Header from "../partials/HomeHeader";
import Hero from "../partials/Hero";
import Poster from "../partials/Poster";
import Footer from "../partials/Footer";
// import Partners from "./partials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Poster />
      {/* <Partners /> */}
      <Footer />
    </>
  );
}

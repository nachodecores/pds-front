import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./partials/HomeHeader";
import HerdCard from "./partials/HerdCard";
import "./styles/Catalogue.css";

export default function Catalogue() {
  const [herds, setHerds] = useState([]);

  useEffect(() => {
    const getHerds = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/catalogue`,
      });
      setHerds(response.data);
    };
    getHerds();
  }, []);

  return (
    <>
      <Header />
      <h1>Catálogo del Remate #14</h1>
      <main>
        <section className="cards">
          {herds.map((herd) => (
            <div className="card" key={herd.id}>
              <HerdCard herd={herd} />
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

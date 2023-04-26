import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import HerdCard from "./partials/HerdCard";

export default function Catalogue() {
  const [herds, setHerds] = useState([]);

  useEffect(() => {
    const getHerds = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/lotes`,
      });
      setHerds(response.data);
    };
    getHerds();
  }, []);
  // console.log(herds);

  return (
    <>
      <h1>Catálogo</h1>
      {herds.map((herd) => (
        <HerdCard herd={herd} key={herd.id} />
      ))}
    </>
  );
}

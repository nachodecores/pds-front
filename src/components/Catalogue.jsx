import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Catalogue() {
  const [herds, setHerds] = useState([]);

  console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {
    const getHerds = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/lotes`,
      });
      setHerds(response.data);
      console.log(herds);
    };
    getHerds();
  }, []);

  return (
    <>
      <h1>Catálogo</h1>
      <div>{herds}</div>
    </>
  );
}

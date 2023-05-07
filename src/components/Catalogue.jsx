import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import HerdCard from "./partials/HerdCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

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
      <Container>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, md: 2, lg: 3 }}>
          {herds.map((herd) => (
            <Grid key={herd.id} item sm={12} md={6} lg={4}>
              <HerdCard herd={herd} key={herd.id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

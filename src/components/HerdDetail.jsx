import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./partials/Header";
import { Button } from "react-bootstrap";
import CropSquareRoundedIcon from "@mui/icons-material/CropSquareRounded";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import Rating from "@mui/material/Rating";
import "./styles/HerdDetail.css";
import { styled } from "@mui/material/styles";

function handlePreBid() {
  alert("Lógica de las preofertas");
}

export default function HerdDetail() {
  const [herd, setHerd] = useState({});
  const [auctioneer, setAuctioneer] = useState([]);
  const { id } = useParams();

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#0e4056",
    },
    "& .MuiRating-iconHover": {
      color: "#bfc8c9",
    },
  });

  useEffect(() => {
    const getHerd = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/catalogue/${id}`,
      });
      setHerd(response.data);
    };
    getHerd();

    //Llamada para traer únicamente el auctioneer del herd seleccionado. Innecesario traerlos a todos. La llamada tiene que encontrar al escritorio por la FK de auctioneer del herd.

    const getAuctioneer = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/auctioneers/3`,
      });
      console.log(response.data);
      setAuctioneer(response.data);
    };

    getAuctioneer();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="herd-detail-card">
          <div className="herd-detail-card-header">
            <div className="left-side">
              <img
                src={`../img/${auctioneer.logo}`}
                alt=""
                className="logo-auctioneer"
              />
              <div>
                <h1>vacas de invernada {herd.breed}</h1>
              </div>
            </div>
            <button className="icon-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                display="block"
                id="Heart"
              >
                <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
              </svg>
            </button>
          </div>
          <div className="card-media"></div>
          <div>
            <h4>{herd.description}</h4>
          </div>
        </div>

        <div className="seller">
          <h3>Vendedor: Ignacio de Cores</h3>
          <h3>Ubicación: Villa Rodríguez, San José</h3>
        </div>

        <div className="details">
          <div className="values card">
            <h4>Cantidad: {herd.quantity}</h4>
            <h4>Peso estimado: 160 kg</h4>
            <h4>Precio: 2.15 U$S/kg</h4>
          </div>
          <div className="ratings card">
            <div className="class-type d-flex">
              <h4>CLASE</h4>
              <StyledRating
                name="customized-color"
                defaultValue={0}
                precision={1}
                icon={<SquareRoundedIcon fontSize="inherit" />}
                emptyIcon={<CropSquareRoundedIcon fontSize="inherit" />}
              />
            </div>
            <div className="status d-flex">
              <h4>ESTADO</h4>
              <StyledRating
                name="customized-color"
                defaultValue={0}
                precision={1}
                icon={<SquareRoundedIcon fontSize="inherit" />}
                emptyIcon={<CropSquareRoundedIcon fontSize="inherit" />}
              />
            </div>
          </div>
        </div>
        <div className="prebid">
          <h3>Precio preofertado: 2,18 U$S/kg</h3>
          <Button onClick={() => handlePreBid()}>Preofertar</Button>
        </div>
      </div>
    </>
  );
}

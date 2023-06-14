import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

export default function Partners() {
  const [auctioneers, setAuctioneers] = useState([]);

  useEffect(() => {
    const getAuctioneers = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/auctioneers`,
      });
      setAuctioneers(response.data);
    };
    getAuctioneers();
  }, []);

  return (
    <>
      <h2>Escritorios Participantes</h2>
      <div className="container" style={{ display: "flex" }}>
        {auctioneers.map((auctioneer) => {
          return (
            <div
              className="card"
              style={{ width: "18rem", color: "#0e4056", margin: "10px" }}
              key={auctioneer.id}
            >
              <Card.Body>
                <img
                  src={`./img/${auctioneer.logo}`}
                  alt={`logo de ${auctioneer.name}`}
                  style={{ height: "10vh", width: "10vw" }}
                />
                <h4>{auctioneer.name}</h4>
                <h3>{auctioneer.phone}</h3>
                <p>{auctioneer.address}</p>
              </Card.Body>
            </div>
          );
        })}
      </div>
    </>
  );
}

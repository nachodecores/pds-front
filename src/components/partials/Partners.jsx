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
  console.log(auctioneers);

  return (
    <>
      <h2>Escritorios</h2>
      <div style={{ display: "flex" }}>
        {auctioneers.map((auctioneer) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <img src={`./img/${auctioneer.logo}`} alt="" />
                <Card.Title>
                  {" "}
                  <strong> {auctioneer.name}</strong>
                </Card.Title>
                <Card.Title>{auctioneer.phone}</Card.Title>
                <Card.Text>{auctioneer.address}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

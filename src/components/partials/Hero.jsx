import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100"
              src="./img/vaca-lechera.jpg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100"
              src="./img/vaca-carne.jpg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100"
              src="./img/ovinos.jpg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
      <h1>La mayor feria virtual del país</h1>
    </div>
  );
}

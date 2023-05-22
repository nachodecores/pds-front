import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <Carousel controls={true} indicators={false}>
        <Carousel.Item>
          <div
            className="image-container"
            style={{ backgroundImage: "url(./img/vaca-lechera.jpg)" }}
          ></div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className="image-container"
            style={{ backgroundImage: "url(./img/vaca-carne.jpg)" }}
          ></div>
        </Carousel.Item>

        <Carousel.Item>
          <div
            className="image-container"
            style={{ backgroundImage: "url(./img/ovinos.jpg)" }}
          ></div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

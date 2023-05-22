import React from "react";
import "../styles/Hero.css";
import Carousel from "react-bootstrap/Carousel";

export default function Hero() {
  return (
    <div className="hero">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/vaca-lechera.jpg"
            alt="Vaca lechera"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/vaca-carne.jpg"
            alt="Vaca carne"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./img/ovinos.jpg" alt="Ovinos" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1>La mayor feria virtual del país</h1>
    </div>
  );
}

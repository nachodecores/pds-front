import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/HerdCard.css";

export default function HerdCard({ herd }) {
  return (
    <>
      <article>
        <figure className="card-image">
          {/* <img src="img/vacaslecheras.jpeg" alt="Video del lote" /> */}
        </figure>
        <div className="card-header">
          {herd.quantity} {herd.category} vacas {herd.breed}
        </div>
        <div className="card-meta">
          <p> Villa Rodríguez, San José</p>
        </div>
        <div className="card-footer">
          <Link to={`/catalogo/${herd.id}`}>
            <Button variant="primary">Más Información</Button>
          </Link>
          <button className="icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              display="block"
              id="Heart"
            >
              <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
            </svg>
          </button>
        </div>
      </article>
    </>
  );
}

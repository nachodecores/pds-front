import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/Poster.css";

export default function Poster() {
  return (
    <div className="poster">
      <Link to="/remate">Remate en vivo</Link>
      <div className="card container m-5">
        <h3>Próximo Remate</h3>
        <div>
          <h2>MARTES 28 DE AGOSTO</h2>
          <p>Local de feria de Juan Soler</p>
          <Link to="/catalogo">
            <Button>Ver Catálogo</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

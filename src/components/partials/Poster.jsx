import React from "react";
import { Link } from "react-router-dom";
import "../styles/Poster.css";

export default function Poster() {
  return (
    <div className="poster">
      <Link to="/remate">Remate en vivo</Link>
      <div className="poster-card container">
        <h3>Próximo Remate</h3>
        <div>
          <h2>MARTES 28 DE AGOSTO</h2>
          <p>Local de feria de Juan Soler</p>
          <Link to="/catalogo">
            <button>Ver Catálogo</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

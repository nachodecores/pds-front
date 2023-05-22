import React from "react";
import { Link } from "react-router-dom";
import "../styles/Poster.css";

export default function Poster() {
  return (
    <div className="poster">
      <Link to="/catalogo">Ver Catálogo</Link>
      <Link to="/remate">Remate en vivo</Link>
    </div>
  );
}

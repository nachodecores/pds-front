import React from "react";
import { Link } from "react-router-dom";

export default function Poster() {
  return (
    <>
      <Link to="/catalogo">Catálogo</Link>
      <Link to="/remate">Remate en vivo</Link>
    </>
  );
}

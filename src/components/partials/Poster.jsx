import React from "react";
import { Link } from "react-router-dom";
import "../styles/Poster.css";
import { Button, Card } from "react-bootstrap";

export default function Poster() {
  return (
    <div className="poster">
      <Link to="/remate">Remate en vivo</Link>

      <div className="card container m-5">
        <h3>Próximo Remate</h3>
        <Card.Body>
          <h2>MARTES 28 DE AGOSTO</h2>
          <Card.Text>Local de feria de Juan Soler</Card.Text>
          <Link to="/catalogo">
            <Button>Ver Catálogo</Button>
          </Link>
        </Card.Body>
      </div>
    </div>
  );
}

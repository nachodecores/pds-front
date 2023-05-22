import React from "react";
import { Link } from "react-router-dom";
import "../styles/Poster.css";
import { Button, Card } from "react-bootstrap";

export default function Poster() {
  return (
    <div className="poster">
      <Link to="/remate">Remate en vivo</Link>

      <Card className="container m-5">
        <Card.Header>Próximo Remate</Card.Header>
        <Card.Body>
          <Card.Title>MARTES 28 DE AGOSTO</Card.Title>
          <Card.Text>Local de feria de Juan Soler</Card.Text>
          <Link to="/catalogo">
            <Button variant="primary">Ver Catálogo</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

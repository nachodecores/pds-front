import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, FloatingLabel, Col, Row } from "react-bootstrap";
import "./styles/Login.css";
// import axios from "axios";

export default function Signup() {
  return (
    <>
      <Link to="/">Home</Link>
      <h1>Sign Up</h1>
      <Form className="container">
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Nombre"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Nombre" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Apellido"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Apellido" />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Dirección"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Dirección" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Paraje"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Paraje" />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Departamento"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Departamento" />
            </FloatingLabel>
          </Col>
        </Row>

        <FloatingLabel
          controlId="floatingInput"
          label="Teléfono"
          className="mb-3"
        >
          <Form.Control type="number" placeholder="Teléfono" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Correo electrónico"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="Correo electrónico" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Cédula de identidad"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Cédula de identidad" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="DICOSE"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="DICOSE" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPassword"
          label="Contraseña"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Contraseña" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPassword"
          label="Repetir Contraseña"
          className="mb-3"
        >
          <Form.Control type="input" placeholder="Repetir Contraseña" />
        </FloatingLabel>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Acepto los ***términos y condiciones***"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import "./styles/Login.css";
// import axios from "axios";

export default function Login() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <h1>Login</h1>
      <Form className="container">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

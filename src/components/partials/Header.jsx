import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Home from "../Home";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          id="logo-header"
          src="../img/logo-pds-chico.svg"
          type=""
          alt="logo Pantalla del Sur"
        ></img>
      </Link>
      <Link className="ms-auto" to="/login">
        LogIn
      </Link>
    </div>
  );
}

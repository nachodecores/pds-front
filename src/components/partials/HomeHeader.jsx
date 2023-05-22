import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header d-flex">
      <img
        id="logo-header"
        src="img/logo-pds-entero.svg"
        type=""
        alt="logo Pantall del Sur"
      ></img>
      <Link className="ms-auto" to="/login">
        LogIn
      </Link>
    </div>
  );
}

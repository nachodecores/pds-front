import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeHeader.css";

export default function HomeHeader() {
  return (
    <div className="header">
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

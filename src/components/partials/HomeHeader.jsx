import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  return (
    <div className="header d-flex align-items-center">
      <img
        id="logo-header"
        src="img/logo-pantalladelsur-claro.jpg"
        type=""
        alt="logo Pantall del Sur"
      ></img>
      <Link className="" to="/login">
        LogIn
      </Link>
    </div>
  );
}

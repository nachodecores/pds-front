import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer d-flex align-items-center">
      <img
        id="logo-footer"
        src="img/logo-pantalladelsur-claro.jpg"
        type=""
        alt="logo Pantall del Sur"
      ></img>
      <Link className="" to="/login">
        Admin
      </Link>
    </div>
  );
}

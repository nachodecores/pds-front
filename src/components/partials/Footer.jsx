import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer d-flex align-items-center">
      <img
        id="logo-footer"
        src="img/logo-pantalladelsur-claro.jpg"
        type=""
        alt="logo Pantall del Sur"
      ></img>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <FaTwitterSquare className="icon" />
        </li>
        <li>
          <FaInstagramSquare className="icon" />
        </li>
        <li>
          <FaFacebookSquare className="icon" />
        </li>
        <li>
          <FaLinkedin className="icon" />
        </li>
      </ul>
      <Link className="" to="/login">
        Admin
      </Link>
      <Link className="" to="/terms">
        Reglamento
      </Link>
    </div>
  );
}

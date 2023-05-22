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
        src="img/logo-pds-letras.svg"
        type=""
        alt="logo Pantall del Sur"
      ></img>

      <div>
        <a href="https://twitter.com/home" target="_blank">
          <FaTwitterSquare className="icon" />
        </a>

        <a href="https://www.instagram.com/" target="_blank">
          <FaInstagramSquare className="icon" />
        </a>

        <a href="https://www.facebook.com/pantalladelsur" target="_blank">
          <FaFacebookSquare className="icon" />
        </a>

        <a href="https://www.linkedin.com/feed/" target="_blank">
          <FaLinkedin className="icon" />
        </a>
      </div>

      <Link className="" to="/terms">
        Reglamento
      </Link>
    </div>
  );
}

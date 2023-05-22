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
          <a href="https://twitter.com/home">
            <FaTwitterSquare className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <FaInstagramSquare className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/pantalladelsur">
            <FaFacebookSquare className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/feed/">
            <FaLinkedin className="icon" />
          </a>
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

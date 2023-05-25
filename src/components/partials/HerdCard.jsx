import React from "react";
import { Link } from "react-router-dom";
import "../styles/HerdCard.css";

export default function HerdCard({ herd }) {
  return (
    <>
      <Link to={`/catalogo/${herd.id}`}>
        <div class="card-list">
          <article class="card">
            <figure class="card-image">
              <img src="img/vacaslecheras.jpeg" alt="Video del lote" />
            </figure>
            <div class="card-header">
              {herd.quantity} {herd.category} vacas {herd.breed}
              <button class="icon-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  display="block"
                  id="Heart"
                >
                  <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
                </svg>
              </button>
            </div>
            <div class="card-footer">
              <div class="card-meta card-meta--views">{herd.location}</div>
              <div class="card-meta card-meta--date">Jul 26, 2019</div>
            </div>
          </article>
        </div>
      </Link>
    </>
  );
}

import React from "react";
import "./Card-Style.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <a href="google.com">
        <div className="card-container-description">
          <div className="card-container-description-title">{props.genero}</div>
          <div className="card-container-description-company">
            {props.title}
          </div>
        </div>
        <img
          height="100%"
          src={props.portada}
          className="card-container-image"
          alt="tf"
        />
      </a>
    </div>
  );
}

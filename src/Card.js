import React from "react";
import "./Card-Style.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <a href="google.com">
        <div className="card-container-description">
          <div className="card-container-description-title">{props.title}</div>
          <div className="card-container-description-company">
            {props.company}
          </div>
        </div>
        <img
          className="card-container-image"
          alt=""
          src="./Images/test.jpg"
        ></img>
      </a>
    </div>
  );
}

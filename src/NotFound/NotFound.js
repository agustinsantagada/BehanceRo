import { useLocation } from "react-router-dom";
import React from "react";

export default function NotFound() {
  const location = useLocation();
  return (
    <div className="NotFound">
      <h1> ESTA RUTA {location.pathname} NO EXISTE </h1>;
    </div>
  );
}

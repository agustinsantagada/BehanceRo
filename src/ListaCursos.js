import React from "react";

import ux from "./ux.svg";
import frontend from "./frontend.svg";
import backend from "./backend.svg";
import datascience from "./datascience.svg";
import { Link } from "react-router-dom";

export const cursos = [
  {
    id: "1",
    name: "UX/UI",
    className: "uxui",
    imagen: ux
  },
  {
    id: "2",
    name: "Data Science",
    className: "datascience",
    imagen: datascience
  },
  {
    id: "3",
    name: "Desarrollo Back-end",
    className: "backend",
    imagen: backend
  },
  {
    id: "4",
    name: "Desarrollo Front-end",
    className: "frontend",
    imagen: frontend
  },
  {
    id: "5",
    name: "Dev Ops",
    className: "devops",
    imagen: backend
  }
];
const ListaCursos = () => {
  return (
    <div>
      <ul className="curso">
        {cursos.map((curso) => (
          <Link to={`cursos/${curso.className}`}>
            <li key={curso.id}>{curso.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ListaCursos;

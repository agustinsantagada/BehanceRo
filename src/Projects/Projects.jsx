import React, { useState } from "react";
import { filterArray } from "../Utils/util";
import Album from "../Card/Card";
import "./Projects-Style.css";

const Schedule = () => {
  const [type, setType] = useState("todos");
  const [naming, setNaming] = useState("todos");

  let filteredAlbums = filterArray(type, naming);

  return (
    <>
      <div className="projects">
        {filteredAlbums.map((album) => {
          return (
            <Album
              key={album.id}
              artista={album.naming}
              titulo={album.titulo}
              fecha={album.lanzamiento}
              portada={album.portada}
              title={album.title}
              agrupacion={album.agrupacion}
            />
          );
        })}
      </div>
    </>
  );
};

export default Schedule;

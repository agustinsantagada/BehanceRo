import React, { useState } from "react";
import { filterArray } from "./util";
import Album from "./Album";
import "./styles.css";
import "./hotel-card.css";
// import Card from "./Card/Card";

// export default function Schedule() {

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

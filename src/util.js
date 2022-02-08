import { albumes } from "./albumes";

export const filterArray = (genero, agrupacion) => {
  const filteredArray = albumes
    .filter((album) => {
      if (genero !== "todos") {
        return album.genero === genero;
      }
      return album;
    })
    .filter((album) => {
      if (agrupacion !== "todos") {
        return album.agrupacion === agrupacion;
      }
      return album;
    });

  return filteredArray;
};

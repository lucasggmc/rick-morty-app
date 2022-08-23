import { Server } from "miragejs";
import { Character } from "../templates/Home";

const characters: Character[] = [
  {
    id: "1",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Billy Nelson",
    status: "Alive",
  },
  {
    id: "2",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Rickzao",
    status: "Dead",
  },
];

export const makeServer = ({ environment = "development" } = {}) => {
  return new Server({
    environment,
    routes() {
      this.namespace = "api";
      this.get("characters", () => ({
        characters,
      }));
    },
  });
};

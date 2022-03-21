import { useQuery } from "@apollo/client";
import React, { createContext, useContext } from "react";
import { GET_EPISODES } from "../../graphql/queries/main";

interface CharactersContextProps {
  characters: any;
  isLoading: boolean;
}

export const CharactersContext = createContext<CharactersContextProps>(
  {} as any
);

export const CharactersProvider: React.FC = ({ children }) => {
  const { data, loading } = useQuery(GET_EPISODES);

  return (
    <CharactersContext.Provider
      value={{ characters: data?.characters, isLoading: loading }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => {
  const { characters, isLoading } = useContext(CharactersContext);

  return {
    characters,
    isLoading,
  };
};

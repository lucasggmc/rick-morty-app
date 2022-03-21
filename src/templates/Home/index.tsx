import { useEffect, useState } from "react";
import { CharacterCard } from "../../components/CharacterCard";
import { Loader } from "../../components/Loader";
import { useCharacters } from "../../utils/contexts/CharactersContext";
import * as S from "./styles";

type Character = {
  id: string;
  image: string;
  name: string;
  status: string;
};

const HomeTemplate = () => {
  const { characters, isLoading } = useCharacters();
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>();

  const handleSearch = (event: any) => {
    const searchedValue = String(event.target.value).toLowerCase();
    const filteredCharacters = characters?.results?.filter(
      (item: Character) =>
        item.name.toLowerCase().indexOf(searchedValue) > -1 ||
        item.status.toLowerCase().indexOf(searchedValue) > -1
    );
    setFilteredCharacters(filteredCharacters);
  };

  useEffect(() => {
    setFilteredCharacters(characters?.results);
  }, [characters]);

  return (
    <S.Wrapper>
      <S.Header>
        <h1>Rick and Morty</h1>
      </S.Header>
      <S.Main>
        <S.Input
          type="text"
          placeholder="Search a character name or a life status"
          onChange={handleSearch}
        ></S.Input>
        {isLoading && <Loader />}
        {!isLoading && (
          <S.CharactersList>
            {filteredCharacters?.map((item: Character) => (
              <CharacterCard character={item} key={item.id} />
            ))}
          </S.CharactersList>
        )}
      </S.Main>
    </S.Wrapper>
  );
};

export default HomeTemplate;

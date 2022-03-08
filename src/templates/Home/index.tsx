import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { CharacterCard } from "../../components/CharacterCard";
import { Loader } from "../../components/Loader";
import { GET_EPISODES } from "../../graphql/queries/main";
import * as S from "./styles";

type Character = {
  id: string;
  image: string;
  name: string;
  status: string;
};

const HomeTemplate = () => {
  const { data, loading } = useQuery(GET_EPISODES);
  const [characters, setCharacters] = useState<Character[]>();
  console.log("data", data);

  const handleSearch = (event: any) => {
    const searchedValue = String(event.target.value).toLowerCase();
    const filteredCharacters = data?.characters?.results?.filter(
      (item: Character) =>
        item.name.toLowerCase().indexOf(searchedValue) > -1 ||
        item.status.toLowerCase().indexOf(searchedValue) > -1
    );
    setCharacters(filteredCharacters);
  };

  useEffect(() => {
    setCharacters(data?.characters?.results);
  }, [data]);

  return (
    <S.Wrapper>
      <S.Header>
        <h1>Rick and Morty</h1>
      </S.Header>
      <S.Main>
        <S.Input
          type="text"
          placeholder="Search a character or a life status"
          onChange={handleSearch}
        ></S.Input>
        {loading && <Loader />}
        {!loading && (
          <S.CharactersList>
            {characters?.map((item: Character) => (
              <CharacterCard character={item} key={item.id} />
            ))}
          </S.CharactersList>
        )}
      </S.Main>
    </S.Wrapper>
  );
};

export default HomeTemplate;

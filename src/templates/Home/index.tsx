import { useEffect, useState } from "react";
import { EpisodeCard } from "../../components/EpisodeCard";
import * as S from "./styles";

const HomeTemplate = () => {
  const [characters, setCharacters] = useState<[]>();
  console.log("cc", characters);
  const query = `{
    characters {
        results {
          id
          image
          status
          episode {
            name
            episode
            air_date
            created
          }
        } 
      }
    }
    `;

  useEffect(() => {
    //const getEpisodes = async () => {
    fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query: query }),
    })
      .then((r) => r.json())
      .then((result) => {
        console.log("data returned:", result);
        console.log("test", result?.data.characters);
        if (result?.data?.characters)
          setCharacters(result?.data?.characters?.results);
      });
    //console.log("r", result);
    //};
    //getEpisodes();
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <h1>Rick and Morty</h1>
      </S.Header>
      <S.Main>
        <S.EpisodesList>
          {characters?.map((item) => (
            <EpisodeCard character={item} />
          ))}
        </S.EpisodesList>
      </S.Main>
    </S.Wrapper>
  );
};

export default HomeTemplate;

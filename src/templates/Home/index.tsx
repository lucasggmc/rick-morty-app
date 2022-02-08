import * as S from "./styles";

const HomeTemplate = () => {
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

  const getEpisodes = async () => {
    const result = await fetch("https://rickandmortyapi.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query: query }),
    })
      .then((r) => r.json())
      .then((data) => console.log("data returned:", data));
  };
  getEpisodes();

  return (
    <>
      <S.Header>
        <h1>Rick and Morty</h1>
      </S.Header>
      <S.Main>
        <p>teste 2</p>
      </S.Main>
    </>
  );
};

export default HomeTemplate;

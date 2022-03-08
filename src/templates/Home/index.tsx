import { useQuery } from "@apollo/client";
import { EpisodeCard } from "../../components/EpisodeCard";
import { GET_EPISODES } from "../../graphql/queries/main";
import * as S from "./styles";

const HomeTemplate = () => {
  const { data, loading } = useQuery(GET_EPISODES);
  console.log("data", data);

  return (
    <S.Wrapper>
      <S.Header>
        <h1>Rick and Morty</h1>
      </S.Header>
      <S.Main>
        <S.Input
          type="text"
          placeholder="Search a character or a life status"
        ></S.Input>
        <S.EpisodesList>
          {data?.characters?.results.map((item: any) => (
            <EpisodeCard character={item} />
          ))}
        </S.EpisodesList>
      </S.Main>
    </S.Wrapper>
  );
};

export default HomeTemplate;

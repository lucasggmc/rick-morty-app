import * as S from "./styles";

interface EpisodeProps {
  character: any;
}

const EpisodeCard = ({ character }: EpisodeProps) => {
  return (
    <S.Container image={character.image}>
      <p>{character.episode[0].name}</p>
    </S.Container>
  );
};

export { EpisodeCard };

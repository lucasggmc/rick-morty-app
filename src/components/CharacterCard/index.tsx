import { GiChewedSkull, GiCentaurHeart, GiRocket } from "react-icons/gi";
import * as S from "./styles";

interface CharacterProps {
  character: any;
}

const CharacterCard = ({ character }: CharacterProps) => {
  return (
    <S.Container image={character.image}>
      <S.Title>{character.name}</S.Title>
      <S.Footer>
        {character.status == "Dead" && <GiChewedSkull size={24} />}
        {character.status == "Alive" && <GiCentaurHeart size={24} />}
        {character.status == "unknown" && <GiRocket size={24} />}
        <p>{character.status}</p>
      </S.Footer>
    </S.Container>
  );
};

export { CharacterCard };

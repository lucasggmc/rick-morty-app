import Link from "next/link";
import { GiChewedSkull, GiCentaurHeart, GiRocket } from "react-icons/gi";
import * as S from "./styles";

interface CharacterProps {
  character: any;
}

const CharacterCard = ({ character }: CharacterProps) => {
  return (
    <Link href="/episodes-by-characters/1">
      <a style={{ textDecoration: "none", fontSize: "1rem" }}>
        <S.Container image={character.image}>
          <S.Title>{character.name}</S.Title>
          <S.Footer>
            {character.status == "Dead" && <GiChewedSkull size={24} />}
            {character.status == "Alive" && <GiCentaurHeart size={24} />}
            {character.status == "unknown" && <GiRocket size={24} />}
            <p>{character.status}</p>
          </S.Footer>
        </S.Container>
      </a>
    </Link>
  );
};

export { CharacterCard };

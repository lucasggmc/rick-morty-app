import Link from 'next/link';
import { GiChewedSkull, GiCentaurHeart, GiRocket } from 'react-icons/gi';
import { Character } from '../../templates/Home';
import * as S from './styles';

interface CharacterProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterProps) => {
  return (
    <Link href="/episodes-by-characters/1">
      <a
        style={{ textDecoration: 'none', fontSize: '1rem' }}
        data-testid="character-card"
      >
        <S.Container image={character.image}>
          <S.Title>{character.name}</S.Title>
          <S.Footer>
            {character.status == 'Dead' && <GiChewedSkull size={24} />}
            {character.status == 'Alive' && <GiCentaurHeart size={24} />}
            {character.status == 'unknown' && <GiRocket size={24} />}
            <p>{character.status}</p>
          </S.Footer>
        </S.Container>
      </a>
    </Link>
  );
};

export { CharacterCard };

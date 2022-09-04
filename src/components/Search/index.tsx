import * as S from './styles';

interface SearchProps {
  handleSearch: (event: any) => void;
}

const Search = ({ handleSearch }: SearchProps) => {
  return (
    <S.Input
      type="text"
      placeholder="Search a character name or a life status"
      onChange={handleSearch}
      data-testid="input-search"
    ></S.Input>
  );
};

export { Search };

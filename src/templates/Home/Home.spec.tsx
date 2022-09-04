import { render, screen } from '@testing-library/react';
import HomeTemplate from '.';
import { CharacterCard } from '../../components/CharacterCard';
import { mockedCharacters } from '../../fixtures/mockedCharacters';

describe('HomePage template', () => {
  it('should renders correctly', () => {
    render(<HomeTemplate />);

    expect(screen.getByText('Rick and Morty'));
  });

  it('should render the CharacterCard component 2 times', () => {
    mockedCharacters.forEach(character => {
      render(<CharacterCard character={character} />);
    });

    expect(screen.getAllByTestId('character-card')).toHaveLength(2);
  }); // I think is better add this test as an integration test
});

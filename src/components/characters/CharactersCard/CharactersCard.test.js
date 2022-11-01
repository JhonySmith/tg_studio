import { CharactersCard } from './CharactersCard.jsx';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockCharacter = {
  name: 'Some name',
  mass: '123',
  height: '134',
  gender: 'male',
};

describe('Test character card', () => {
  test('Snap test', () => {
    render(<CharactersCard character={mockCharacter} />);

    const tree = screen.getByRole('card');
    expect(tree).toMatchSnapshot();
  });

  test('Element in DOM', () => {
    render(<CharactersCard character={mockCharacter} />);
    const tree = screen.getByRole('card');
    expect(tree).toBeInTheDocument();
  });

  test('Right data test', () => {
    render(<CharactersCard character={mockCharacter} />);

    const name = screen.getByText('Some name');
    const mass = screen.getByText('123');
    const height = screen.getByText('134');
    const gender = screen.getByText('male');

    expect(name).toBeInTheDocument();
    expect(mass).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(gender).toBeInTheDocument();
  });

  test('Click card test', () => {
    render(<CharactersCard character={mockCharacter} />);

    const card = screen.getByRole('card');
    fireEvent.click(card);

    const details = screen.getByRole('details');
    expect(details).toBeInTheDocument();
  });
});

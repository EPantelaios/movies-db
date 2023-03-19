import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FavoritesContext from '../../src/store/favorites/FavoritesContext';
import ToggleFavoriteButton from '../../src/components/UI/ToggleFavoriteButton';

describe('ToggleFavoriteButton', () => {
  const mockAddFavorite = jest.fn();
  const mockRemoveFavorite = jest.fn();
  const mockFavorites = [{ imdbID: 'tt123456', Title: 'Mock Movie' }];

  beforeEach(() => {
    mockAddFavorite.mockClear();
    mockRemoveFavorite.mockClear();
  });

  test('renders correctly when not a favorite', () => {
    const { getByLabelText, getByTitle } = render(
      <FavoritesContext.Provider
        value={{
          favorites: [],
          handleAddFavorite: mockAddFavorite,
          handleRemoveFavorite: mockRemoveFavorite,
        }}
      >
        <ToggleFavoriteButton
          movie={{ imdbID: 'tt123456', Title: 'Mock Movie' }}
        />
      </FavoritesContext.Provider>
    );
    const toggleButton = getByLabelText('Add to favorites');
    const toggleTitle = getByTitle('Add to favorites');
    expect(toggleButton).toBeInTheDocument();
    expect(toggleTitle).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(mockAddFavorite).toHaveBeenCalledTimes(1);
    expect(mockAddFavorite).toHaveBeenCalledWith({
      imdbID: 'tt123456',
      Title: 'Mock Movie',
    });
  });

  test('renders correctly when already a favorite', () => {
    const { getByLabelText, getByTitle } = render(
      <FavoritesContext.Provider
        value={{
          favorites: mockFavorites,
          handleAddFavorite: mockAddFavorite,
          handleRemoveFavorite: mockRemoveFavorite,
        }}
      >
        <ToggleFavoriteButton
          movie={{ imdbID: 'tt123456', Title: 'Mock Movie' }}
        />
      </FavoritesContext.Provider>
    );
    const toggleButton = getByLabelText('Remove from favorites');
    const toggleTitle = getByTitle('Remove from favorites');
    expect(toggleButton).toBeInTheDocument();
    expect(toggleTitle).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(mockRemoveFavorite).toHaveBeenCalledTimes(1);
    expect(mockRemoveFavorite).toHaveBeenCalledWith('tt123456');
  });

  test('checks that the addition to favorites works properly', () => {
    const mockRemoveFavorite = jest.fn();
    const { getByLabelText } = render(
      <FavoritesContext.Provider
        value={{
          favorites: mockFavorites,
          handleAddFavorite: mockAddFavorite,
          handleRemoveFavorite: mockRemoveFavorite,
        }}
      >
        <ToggleFavoriteButton movie={{ imdbID: null, Title: 'Mock Movie' }} />
      </FavoritesContext.Provider>
    );
    const toggleButton = getByLabelText('Add to favorites');

    fireEvent.click(toggleButton);
    expect(mockAddFavorite).toHaveBeenCalledTimes(1);
    expect(mockRemoveFavorite).toHaveBeenCalledTimes(0);
  });

  test('checks that the removal from favorites works properly', () => {
    const mockAddFavorite = jest.fn();
    const { getByLabelText } = render(
      <FavoritesContext.Provider
        value={{
          favorites: mockFavorites,
          handleAddFavorite: mockAddFavorite,
          handleRemoveFavorite: mockRemoveFavorite,
        }}
      >
        <ToggleFavoriteButton
          movie={{ imdbID: 'tt123456', Title: 'Mock Movie' }}
        />
      </FavoritesContext.Provider>
    );
    const toggleButton = getByLabelText('Remove from favorites');

    fireEvent.click(toggleButton);
    expect(mockAddFavorite).toHaveBeenCalledTimes(0);
    expect(mockRemoveFavorite).toHaveBeenCalledTimes(1);
  });
});

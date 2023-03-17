import { createContext } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  setFavorites: () => {},
  handleAddFavorite: () => {},
  handleRemoveFavorite: () => {},
});

export default FavoritesContext;

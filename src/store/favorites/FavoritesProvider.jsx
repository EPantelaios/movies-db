import React, { useState, useEffect } from 'react';
import FavoritesContext from './FavoritesContext';

const FavoritesProvider = ({ children }) => {
  const setAndRetriveLocalStorage = () => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites == null) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem('favorites'));
  };

  const [favorites, setFavorites] = useState(() => setAndRetriveLocalStorage());

  // Add a movie to the favorites list
  const handleAddFavorite = (movie) => {
    console.log('movieContext', movie);
    setFavorites((prev) => {
      const updated = [...prev];
      updated.unshift(movie);
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  // Remove a movie from the favorites list
  const handleRemoveFavorite = (imdbID) => {
    setFavorites((prev) => {
      const updated = prev.filter((movie) => movie.imdbID !== imdbID);
      //update the local storage by removing the deleted item
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  const contextValues = {
    favorites,
    setFavorites,
    handleAddFavorite,
    handleRemoveFavorite,
  };

  return (
    <FavoritesContext.Provider value={contextValues}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;

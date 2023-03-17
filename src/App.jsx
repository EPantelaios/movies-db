import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import MovieDetails from './components/MovieDetails';
import FavoritesPage from './components/FavoritesPage';

function App() {
  const [favorites, setFavorites] = useState([]);

  // Read from local storage on mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Write to local storage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add a movie to the favorites list
  const handleAddFavorite = (movie) => {
    setFavorites([...favorites, movie]);
  };

  // Remove a movie from the favorites list
  const handleRemoveFavorite = (imdbID) => {
    setFavorites(favorites.filter((movie) => movie.imdbID !== imdbID));
  };

  return (
    <Router>
      {/* <Header /> */}
      <Box margin="0 auto">
        <Switch>
          <Route exact path="/">
            <SearchPage
              handleAddFavorite={handleAddFavorite}
              favorites={favorites}
            />
          </Route>
          <Route path="/movie/:id">
            <MovieDetails
              handleAddFavorite={handleAddFavorite}
              handleRemoveFavorite={handleRemoveFavorite}
              favorites={favorites}
            />
          </Route>
          <Route path="/favorites">
            <FavoritesPage
              favorites={favorites}
              handleRemoveFavorite={handleRemoveFavorite}
            />
          </Route>
        </Switch>
      </Box>
    </Router>
  );
}

export default App;

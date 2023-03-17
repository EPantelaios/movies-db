import React, { useState, useEffect, useContext } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import FavoritesPage from './components/Favorites/FavoritesPage';
import SearchPage from './components/HomePage/SearchPage';
import MovieDetails from './components/MovieDetails/MovieDetails';
import FavoritesContext from './store/favorites/FavoritesContext';

function App() {
  console.log('App rendered');

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SearchPage />
        </Route>
        <Route path="/movie/:imdbID">
          <MovieDetails />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        {/* <Route path="*">
          <NotFoundPage />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;

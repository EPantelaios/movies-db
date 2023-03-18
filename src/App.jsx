import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import FavoritesPage from './components/Favorites/FavoritesPage';
import SearchPage from './components/HomePage/SearchPage';
import Layout from './components/Layout/Layout';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { ScrollButton } from './hooks/scroll-button';
import NotFound from './pages/NotFoundPage/NotFound';

function App() {
  return (
    <Router>
      <ScrollButton id="header" />
      <Layout>
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

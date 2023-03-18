import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { ScrollButton } from './hooks/scroll-button';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import HomePage from './pages/HomePage/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <Router>
      <ScrollButton id="header" />
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/movie/:imdbID">
            <MovieDetailsPage />
          </Route>
          <Route exact path="/favorites">
            <FavoritesPage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

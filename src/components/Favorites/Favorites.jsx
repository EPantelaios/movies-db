import { useContext } from 'react';

import { Heading, Flex, Stack } from '@chakra-ui/react';

import FavoritesContext from '../../store/favorites/FavoritesContext';
import MovieCard from '../HomePage/MovieCard';

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="10"
      p="10"
    >
      <Heading as="h1">List of Favorite Movies</Heading>
      <Stack spacing={10}>
        {favorites &&
          favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
      </Stack>
    </Flex>
  );
}

export default Favorites;

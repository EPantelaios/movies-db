import { useContext } from 'react';

import { Stack, Heading, Flex } from '@chakra-ui/react';

import MovieCard from './MovieCard';
import HomepageContext from '../../store/homepage/HomepageContext';
import LoadingSpinner from '../UI/LoadingSpinner';
import MainButton from '../UI/MainButton';

function MovieList({ onLoadMore }) {
  const { searchResults, hasMore, error, isLoading } =
    useContext(HomepageContext);

  console.log('searchResults__:', searchResults);
  return (
    <Stack spacing={10}>
      {searchResults &&
        searchResults.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      {error && (
        <Heading size="md" color="red">
          {error}
        </Heading>
      )}
      {isLoading ? (
        <LoadingSpinner />
      ) : hasMore && searchResults.length ? (
        <Flex alignItems="center" justifyContent="center">
          <MainButton
            type="button"
            onClick={onLoadMore}
            _disabled={isLoading}
            w={{ base: 'full' }}
            maxW="400px"
          >
            Load More
          </MainButton>
        </Flex>
      ) : null}
    </Stack>
  );
}

export default MovieList;

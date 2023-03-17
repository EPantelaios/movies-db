import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Image, Link, Text, Button, useToast } from '@chakra-ui/react';

function MovieList({ movies, handleAddFavorite, handleRemoveFavorite }) {
  const toast = useToast();

  const handleFavorite = (movie) => {
    if (movies.some((m) => m.imdbID === movie.imdbID)) {
      handleRemoveFavorite(movie.imdbID);
      toast({
        title: `${movie.Title} removed from favorites`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } else {
      handleAddFavorite(movie);
      toast({
        title: `${movie.Title} added to favorites`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      {movies.map((movie) => (
        <Flex key={movie.imdbID} alignItems='center' mb='4'>
          <Image src={movie.Poster} alt={movie.Title} mr='4' w='150px' />
          <Box flex='1'>
            <Link as={RouterLink} to={`/movie/${movie.imdbID}`}>
              <Text fontSize='lg' fontWeight='bold' mb='1'>
                {movie.Title}
              </Text>
              <Text>{movie.Year}</Text>
            </Link>
          </Box>
          <Button
            size='sm'
            colorScheme={movies.some((m) => m.imdbID === movie.imdbID) ? 'red' : 'gray'}
            onClick={() => handleFavorite(movie)}
            mr='2'
          >
            {movies.some((m) => m.imdbID === movie.imdbID)
              ? 'Remove'
              : 'Add to Favorites'}
          </Button>
        </Flex>
      ))}
    </Box>
  );
}

export default MovieList;

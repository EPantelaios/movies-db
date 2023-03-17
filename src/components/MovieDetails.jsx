import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Flex, Image, Text, useToast } from '@chakra-ui/react';
import { getMovieDetails } from '../lib/api';

function MovieDetails({ favorites, handleAddFavorite, handleRemoveFavorite }) {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(imdbID);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  const handleFavorite = () => {
    if (favorites.some((m) => m.imdbID === imdbID)) {
      handleRemoveFavorite(imdbID);
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

  if (!movie) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box>
      <Flex alignItems="center" mb="4">
        <Image src={movie.Poster} alt={movie.Title} mr="4" w="200px" />
        <Box flex="1">
          <Text fontSize="3xl" fontWeight="bold" mb="1">
            {movie.Title || 'N/A'}
          </Text>
          <Text>{movie.Year}</Text>
          <Text>{movie.Genre}</Text>
          <Text>{movie.Runtime}</Text>
          <Text>{movie.Plot}</Text>
          <Text>Director: {movie.Director}</Text>
          <Text>Writer: {movie.Writer}</Text>
          <Text>Actors: {movie.Actors}</Text>
          <Text>IMDb Rating: {movie.imdbRating}</Text>
        </Box>
        <Box>
          <Box>
            <Text fontWeight="bold" mb="2">
              {favorites.some((m) => m.imdbID === imdbID)
                ? 'Remove from Favorites'
                : 'Add to Favorites'}
            </Text>
            <Box onClick={handleFavorite}>
              <Box
                p="2"
                cursor="pointer"
                border="2px solid gray"
                borderRadius="5px"
                color="gray"
                _hover={{
                  color: 'white',
                  borderColor: 'green',
                  backgroundColor: 'green',
                }}
              >
                {favorites.some((m) => m.imdbID === imdbID) ? 'Remove' : 'Add'}
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default MovieDetails;

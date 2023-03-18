import { Image, Flex, Text, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Card from '../UI/Card';
import ToggleFavoriteButton from '../UI/ToggleFavoriteButton';

function MovieCard({ movie }) {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Card>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          p="10"
        >
          <Link to={`/movie/${movie.imdbID}`}>
            {movie.Poster && movie.Poster != 'N/A' && (
              <Image
                src={movie.Poster}
                alt={movie.Title}
                w="full"
                h="auto"
                mb="6"
                borderRadius="5px"
                border="1px solid #566d6d"
              />
            )}
            <Text fontWeight="bold" textAlign="center" mb="2">
              {movie.Title}
            </Text>
            <Text fontSize="sm" textAlign="center">
              {movie.Year}
            </Text>
          </Link>
          <Box mt="6">
            <ToggleFavoriteButton movie={movie} />
          </Box>
        </Flex>
      </Card>
    </Flex>
  );
}

export default MovieCard;

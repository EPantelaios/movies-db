import { Link } from 'react-router-dom';
import { Box, Image, Flex, Text } from '@chakra-ui/react';

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.imdbID}`}>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Box
          w="clamp(330px, 100%, 450px)"
          p={3}
          bg="lightgray"
          borderRadius="16px"
          border="2px solid black"
          transition="all 0.2s"
          _hover={{ boxShadow: 'lg', transform: 'translateY(-5px)' }}
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            p={10}
          >
            {movie.Poster && movie.Poster != 'N/A' && (
              <Image
                src={movie.Poster}
                alt={movie.Title}
                borderRadius="5px"
                mb={10}
                w="full"
                h="auto"
                border="1px solid black"
              />
            )}
            <Text fontWeight="bold" textAlign="center">
              {movie.Title}
            </Text>
            <Text fontSize="sm" textAlign="center">
              {movie.Year}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Link>
  );
}

export default MovieCard;

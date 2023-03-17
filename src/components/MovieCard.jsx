import { Link } from 'react-router-dom';
import { Box, Image, Flex, Text } from '@chakra-ui/react';

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.imdbID}`}>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        p={20}
      >
        <Box
          p={4}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          transition="all 0.2s"
          _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}
        >
          <Image
            src={movie.Poster}
            alt={movie.Title}
            borderRadius="md"
            mb={10}
            w="full"
            h="auto"
          />
          <Flex
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            ml="auto"
          >
            <Text fontWeight="bold">{movie.Title}</Text>
            <Text fontSize="sm">{movie.Year}</Text>
          </Flex>
        </Box>
      </Flex>
    </Link>
  );
}

export default MovieCard;

import React from 'react';

import { Flex, Image, Text, Box } from '@chakra-ui/react';

import MovieDetailsItem from './MovieDetailsItem';
import Card from '../UI/Card';
import ToggleFavoriteButton from '../UI/ToggleFavoriteButton';

function MovieDetailsContent({ movie, children }) {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center" p="20">
      <Card
        _hover={{}}
        overflowX="hidden"
        overflowY="auto"
        w="clamp(330px, 100%, 460px)"
        height="80vh"
        css={{
          '&::-webkit-scrollbar': { display: 'none' },
          '&::-webkit-scrollbar-track': { display: 'none' },
        }}
      >
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          p="12"
          textAlign="center"
          gap="2"
        >
          <Text fontSize="3xl" fontWeight="bold" mb="1">
            {`${movie.Title} (${movie.Year})`}
          </Text>
          <Image
            src={movie.Poster}
            alt={movie.Title}
            w="full"
            h="auto"
            mb="6"
            borderRadius="5px"
            border="1px solid #566d6d"
          />
          <MovieDetailsItem label="Genre" value={movie.Genre} />
          <MovieDetailsItem label="Duration" value={movie.Runtime} />
          <MovieDetailsItem label="Plot" value={movie.Plot} />
          <MovieDetailsItem label="Director" value={movie.Director} />
          <MovieDetailsItem label="Writer" value={movie.Writer} />
          <MovieDetailsItem label="Actors" value={movie.Actors} />
          <MovieDetailsItem label="IMDb Rating" value={movie.imdbRating} />
          <Box mt="6">
            <ToggleFavoriteButton movie={movie} />
          </Box>

          {children}
        </Flex>
      </Card>
    </Flex>
  );
}

export default MovieDetailsContent;

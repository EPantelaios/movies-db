import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Flex, Heading, Input, Stack } from '@chakra-ui/react';
import { getMoviesByTitle } from '../lib/api';
import MovieCard from './MovieCard';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSearch = async (event) => {
    event.preventDefault();
    history.push(`/?search=${searchTerm}`);
    try {
      const data = await getMoviesByTitle(searchTerm);
      console.log(data);
      setSearchResults(data.Search);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(`${err}`);
      setSearchResults(null);
    }
  };

  return (
    <Flex direction="column" alignItems="center" justifyContent="center" p={20}>
      <Heading as="h1" size="xl" mb={8}>
        Search for Movies
      </Heading>

      <Input
        placeholder="Enter a movie title..."
        fontSize="1.1rem"
        maxW="500px"
        htmlSize={25}
        width="auto"
        borderRadius="4px"
        p={4}
        mb={20}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch(e);
          }
        }}
      />
      <Stack spacing={10} maxW="800px">
        {searchResults ? (
          searchResults.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : error ? (
          <Heading size="md" color="red">
            {error}
          </Heading>
        ) : null}
      </Stack>
    </Flex>
  );
}

export default SearchPage;

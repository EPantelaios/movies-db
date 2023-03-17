import { useState, useEffect } from 'react';
import { Flex, Heading, Input, Stack, Button } from '@chakra-ui/react';
import { getMoviesByTitle } from '../lib/api';
import MovieCard from './MovieCard';
import LoadingSpinner from './UI/LoadingSpinner';
import MainButton from './UI/MainButton';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalMovies, setTotalMovies] = useState(0);

  const handleSearch = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setSearchResults([]);
    setPage(1);
    setHasMore(false);
    setError(null);
    setTotalMovies(0);

    try {
      const data = await getMoviesByTitle(searchTerm, 1);
      console.log('data1', data);
      setSearchResults(data.Search || []);
      setTotalMovies(data.totalResults);
      setPage((page) => page + 1);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(`${err}`);
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const data = await getMoviesByTitle(searchTerm, page);
      console.log('data2', data);
      setSearchResults((prevResults) => [...prevResults, ...data.Search]);
      setPage((page) => page + 1);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(`${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setHasMore(searchResults.length < totalMovies);
  }, [searchResults]);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="10"
      p="20"
    >
      <Heading as="h1">Search for Movies</Heading>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="center"
        gap={{ base: '2', md: '4', xl: '8' }}
        // mb={20}
      >
        <Input
          placeholder="Enter a movie title..."
          fontSize={{ base: '1rem', md: '1.1rem', xl: '1.2rem' }}
          maxW="500px"
          width="auto"
          borderRadius="8px"
          border="1px solid grey"
          pt="1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch(e);
            }
          }}
        />
        <MainButton
          onClick={(e) => handleSearch(e)}
          isDisabled={isLoading}
          mt={{ base: '4', md: '0' }}
          w={{ base: 'full', md: 'auto' }}
        >
          Search
        </MainButton>
      </Flex>
      <Stack spacing={10}>
        {searchResults.map((movie) => (
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
          <MainButton
            type="button"
            onClick={(e) => handleLoadMore(e)}
            _disabled={isLoading}
          >
            Load More
          </MainButton>
        ) : null}
      </Stack>
    </Flex>
  );
}

export default SearchPage;

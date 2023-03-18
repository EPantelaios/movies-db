import { useEffect, useContext } from 'react';

import { Flex, Heading, Box } from '@chakra-ui/react';

import MovieList from './MovieList';
import SearchForm from './SearchForm';
import { getMoviesByTitle } from '../../lib/api';
import HomepageContext from '../../store/homepage/HomepageContext';
import { sortItems } from '../../utils/sortItems';
import SortMenu from '../UI/SortMenu';

function SearchPage() {
  const {
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
    page,
    setPage,
    hasMore,
    setHasMore,
    totalMovies,
    setTotalMovies,
    error,
    setError,
    isLoading,
    setIsLoading,
  } = useContext(HomepageContext);

  const handleSearch = async (searchTerm) => {
    setIsLoading(true);
    setSearchTerm(searchTerm);
    setSearchResults([]);
    setPage(1);
    setHasMore(false);
    setError(null);
    setTotalMovies(0);

    try {
      const data = await getMoviesByTitle(searchTerm, 1);
      setSearchResults(data.Search);
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

  const handleLoadMore = async () => {
    setIsLoading(true);

    try {
      const data = await getMoviesByTitle(searchTerm, page);
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
  }, [searchResults, totalMovies]);

  const selectHandler = (selectedOption) => {
    const sortResults = sortItems(searchResults, selectedOption);
    console.log('sortResults:', sortResults);
    setSearchResults([...sortResults]);
  };

  return (
    <Box margin="0 auto">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap="10"
        p="10"
      >
        <Heading as="h1">Search for Movies</Heading>
        <SearchForm
          inputValue={searchTerm}
          onSearch={handleSearch}
          isLoading={isLoading}
        />
        <SortMenu
          options={['Title', 'Year']}
          onSelect={selectHandler}
          _disabled={searchResults}
        />
        <MovieList onLoadMore={handleLoadMore} />
      </Flex>
    </Box>
  );
}

export default SearchPage;

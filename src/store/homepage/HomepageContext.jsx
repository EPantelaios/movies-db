import { createContext } from 'react';

const HomepageContext = createContext({
  searchTerm: '',
  searchResults: [],
  page: 1,
  hasMore: false,
  totalMovies: 0,
  error: null,
  isLoading: false,
  setSearchTerm: () => {},
  setSearchResults: () => {},
  setPage: () => {},
  setHasMore: () => {},
  setTotalMovies: () => {},
  setError: () => {},
  setIsLoading: () => {},
});

export default HomepageContext;

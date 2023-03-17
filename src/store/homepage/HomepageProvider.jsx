import { useState } from 'react';

import HomepageContext from './HomepageContext';

function HomepageProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [totalMovies, setTotalMovies] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const contextValues = {
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
  };

  return (
    <HomepageContext.Provider value={contextValues}>
      {children}
    </HomepageContext.Provider>
  );
}

export default HomepageProvider;

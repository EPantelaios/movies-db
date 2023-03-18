import { useState } from 'react';

import { Flex } from '@chakra-ui/react';

import MainButton from '../UI/MainButton';
import SearchInput from '../UI/SearchInput';

function SearchForm({ inputValue, onSearch, isLoading }) {
  const [searchTerm, setSearchTerm] = useState(inputValue || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Flex
      as="form"
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
      gap={{ base: '2', md: '3', xl: '4' }}
    >
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit(e);
          }
        }}
      />
      <MainButton
        onClick={(e) => handleSubmit(e)}
        isDisabled={isLoading}
        mt={{ base: '4', md: '0' }}
        w={{ base: 'full', md: 'auto' }}
      >
        Search
      </MainButton>
    </Flex>
  );
}

export default SearchForm;

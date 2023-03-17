import { Input } from '@chakra-ui/react';

function SearchInput(props) {
  return (
    <Input
      placeholder="Enter a movie title..."
      fontSize={{ base: '1rem', md: '1.1rem', xl: '1.2rem' }}
      maxW="500px"
      width="auto"
      borderRadius="8px"
      border="1px solid grey"
      pt="1"
      {...props}
    />
  );
}

export default SearchInput;

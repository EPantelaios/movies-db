import { Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import MainButton from '../UI/MainButton';

const NotFound = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
    >
      <Heading as="h1" size="xl" mb="6">
        No match for this page...
      </Heading>
      <Link to="/">
        <MainButton colorScheme="teal" fontWeight="bold">
          Return to homepage
        </MainButton>
      </Link>
    </Flex>
  );
};

export default NotFound;

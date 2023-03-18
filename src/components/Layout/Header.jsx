import { Box, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Flex
      as="header"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      bg="#008080"
      color="white"
      px="15%"
      py="4"
    >
      <Box>
        <Link to="/">
          <Text fontSize="3xl" fontWeight="bold">
            Movies DB
          </Text>
        </Link>
      </Box>
      <Box>
        <nav>
          <Flex as="ul" listStyleType="none" m="0" p="0">
            <Box
              as="li"
              fontSize="xl"
              color="#88dfdf"
              _hover={{ color: '#e6fcfc' }}
              _active={{ color: '#e6fcfc' }}
            >
              <Link to="/favorites">Favorites</Link>
            </Box>
          </Flex>
        </nav>
      </Box>
    </Flex>
  );
};

export default Header;

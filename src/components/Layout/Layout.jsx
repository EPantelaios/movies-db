import { Box } from '@chakra-ui/react';

import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box m="0 auto">{children}</Box>
    </>
  );
};

export default Layout;

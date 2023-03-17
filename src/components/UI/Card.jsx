import { Box } from '@chakra-ui/react';

function Card({ children, ...restProps }) {
  return (
    <Box
      w="clamp(330px, 80%, 440px)"
      bg="#c2e7f0"
      borderRadius="16px"
      border="2px solid #566d6d"
      transition="all 0.2s"
      _hover={{ boxShadow: 'lg', transform: 'translateY(-5px)' }}
      {...restProps}
    >
      {children}
    </Box>
  );
}

export default Card;

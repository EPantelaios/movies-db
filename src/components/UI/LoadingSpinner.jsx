import { Box, Flex, keyframes } from '@chakra-ui/react';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

function LoadingSpinner() {
  return (
    <Flex
      margin="3rem auto"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
    >
      <Box
        data-testid="loading-spinner"
        display="inline-block"
        width="80px"
        height="80px"
        _after={{
          content: '""',
          display: 'block',
          width: '64px',
          height: '64px',
          margin: '8px',
          borderRadius: '50%',
          border: '6px solid teal',
          borderColor: 'teal transparent teal transparent',
          animation: `${spin} 1.2s linear infinite`,
        }}
      />
    </Flex>
  );
}

export default LoadingSpinner;

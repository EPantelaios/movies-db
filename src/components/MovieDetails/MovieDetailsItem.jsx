import { Text } from '@chakra-ui/react';

function MovieDetailsItem({ label, value }) {
  return (
    <>
      <Text fontSize="lg" fontWeight="bold">
        {label}:
      </Text>
      <Text color="#566D6D">{value}</Text>
    </>
  );
}

export default MovieDetailsItem;

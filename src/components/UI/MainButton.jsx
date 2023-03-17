import { Button } from '@chakra-ui/react';

function MainButton({
  children,
  type = 'submit',
  onClick,
  isDisabled = false,
  ...restProps
}) {
  return (
    <Button
      type={type}
      onClick={onClick}
      isDisabled={isDisabled}
      textDecoration="none"
      backgroundColor="teal"
      color="white"
      borderRadius="8px"
      padding="0.3rem 1rem"
      border="1px solid teal"
      fontSize="1.1rem"
      cursor="pointer"
      _hover={{
        backgroundColor: '#11acac',
        borderColor: '#11acac',
      }}
      _active={{
        backgroundColor: '#11acac',
        borderColor: '#11acac',
      }}
      {...restProps}
    >
      {children}
    </Button>
  );
}

export default MainButton;

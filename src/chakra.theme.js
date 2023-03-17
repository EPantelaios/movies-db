import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
  },

  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'teal.500',
        borderColor: 'teal.500',
      },
    },
  },

  styles: {
    global: {
      body: {
        background: '#e7f8f8',
      },
      '::selection': {
        backgroundColor: 'teal.400',
        color: 'white',
      },
    },
  },
});

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
      'body::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
        WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
        MozBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
        borderRadius: '10px',
        backgroundColor: '#F5F5F5',
      },
      'body::-webkit-scrollbar': {
        width: '10px',
      },
      'body::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        boxShadow: 'inset 0 0 6px rgba(0, 0, 0, .3)',
        WebkitBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, .3)',
        MozBoxShadow: 'inset 0 0 6px rgba(0, 0, 0, .3)',
        backgroundColor: '#555',
      },
      '::selection': {
        backgroundColor: 'teal.400',
        color: 'white',
      },
    },
  },
});

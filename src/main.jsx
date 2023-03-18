import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { theme } from './chakra.theme.js';
import { ErrorBoundary } from './components/error-boundary/error-boundary';
import HomepageProvider from './store/homepage/HomepageProvider';
import './index.css';
import FavoritesProvider from './store/favorites/FavoritesProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ChakraProvider theme={theme} backGroundColor="#193131">
        <HomepageProvider>
          <FavoritesProvider>
            <App />
          </FavoritesProvider>
        </HomepageProvider>
      </ChakraProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { theme } from './chakra.theme.js';
import { ErrorBoundary } from './components/error-boundary/error-boundary';
import FavoritesProvider from './store/favorites/FavoritesProvider';
import HomepageProvider from './store/homepage/HomepageProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ChakraProvider theme={theme} backGroundColor="#193131">
        <HomepageProvider>
          <FavoritesProvider>
            <Router>
              <App />
            </Router>
          </FavoritesProvider>
        </HomepageProvider>
      </ChakraProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

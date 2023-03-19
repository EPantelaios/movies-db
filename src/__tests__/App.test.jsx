import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('renders the home page on the root path', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Search for Movies')).toBeInTheDocument();
  });

  it('renders the movie details page on the correct path', () => {
    render(
      <MemoryRouter initialEntries={['/movie/tt1431045']}>
        <App />
      </MemoryRouter>
    );
    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  it('renders the favorites page on the correct path', () => {
    render(
      <MemoryRouter initialEntries={['/favorites']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/List of/i)).toBeInTheDocument();
  });

  it('renders the not found page on an unknown path', () => {
    render(
      <MemoryRouter initialEntries={['/unknown']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/No match/i)).toBeInTheDocument();
  });
});

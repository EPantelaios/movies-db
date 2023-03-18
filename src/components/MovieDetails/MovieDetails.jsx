import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import MovieDetailsContent from './MovieDetailsContent';
import { getMovieDetails } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

function MovieDetails() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    console.log('imdbID: ', imdbID);
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(imdbID);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (!movie) {
    return <LoadingSpinner />;
  }

  return <MovieDetailsContent movie={movie} />;
}

export default MovieDetails;

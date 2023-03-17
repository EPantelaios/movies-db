import { OMDB_API_KEY } from '../config/request-config';

const responseHandler = (response, data) => {
  if (response.ok) {
    if (data.Response === 'True') {
      console.info(data);
      return data;
    } else {
      throw new Error(data.Error || 'Could not get movies. Try again');
    }
  } else {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
};

export async function getMoviesByTitle(title, page) {
  const encodedTitle = encodeURIComponent(title);
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodedTitle}&page=${page}`
  );
  const data = await response.json();
  return responseHandler(response, data);
}

export async function getMovieDetails(id) {
  const encodedId = encodeURIComponent(id);
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${encodedId}`
  );
  const data = await response.json();
  return responseHandler(response, data);
}

const OMDB_API_KEY = 'e5f8eee0';

const responseHandler = (response, data) => {
  if (response.ok) {
    if (data.Response === 'True') {
      return data;
    } else {
      throw new Error(data.Error || 'Could not get movies. Try again');
    }
  } else {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
};

export async function getMoviesByTitle(title) {
  const encodedTitle = encodeURIComponent(title);
  //add parameter &page=1-10
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodedTitle}`
  );
  const data = await response.json();
  return responseHandler(response, data);
}

export async function getMovieDetails(title) {
  const encodedTitle = encodeURIComponent(title);
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${encodedTitle}`
  );
  const data = await response.json();
  return responseHandler(response, data);
}

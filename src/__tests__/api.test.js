import { OMDB_API_KEY } from '../config/request-config';
import { getMoviesByTitle, getMovieDetails } from '../lib/api';

jest.mock('../config/request-config', () => ({
  OMDB_API_KEY: 'test-api-key',
}));

describe('API', () => {
  describe('getMoviesByTitle', () => {
    const mockResponse = (status, data) =>
      Promise.resolve({
        ok: status,
        json: () => Promise.resolve(data),
        statusText: status ? 'OK' : 'Not Found',
        status,
      });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should return movies for a valid title and page', async () => {
      const mockData = {
        Response: 'True',
        Search: [{ imdbID: 'tt123456', Title: 'Mock Movie' }],
        totalResults: '1',
      };
      global.fetch = jest
        .fn()
        .mockImplementation(() => mockResponse(true, mockData));
      const result = await getMoviesByTitle('Mock Title', 1);
      expect(result).toEqual(mockData);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=Mock%20Title&page=1`
      );
    });

    it('should throw an error for an invalid title', async () => {
      const mockData = {
        Response: 'False',
        Error: 'Movie not found!',
      };
      global.fetch = jest
        .fn()
        .mockImplementation(() => mockResponse(true, mockData));
      await expect(getMoviesByTitle('Invalid Title', 1)).rejects.toThrow(
        'Movie not found!'
      );
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=Invalid%20Title&page=1`
      );
    });

    it('should throw an error for an HTTP error', async () => {
      global.fetch = jest.fn().mockImplementation(() => mockResponse(false));
      await expect(getMoviesByTitle('Mock Title', 1)).rejects.toThrow(
        'HTTP error! Status: false'
      );
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=Mock%20Title&page=1`
      );
    });
  });

  describe('getMovieDetails', () => {
    const mockResponse = (status, data) =>
      Promise.resolve({
        ok: status,
        json: () => Promise.resolve(data),
        statusText: status ? 'OK' : 'Not Found',
        status,
      });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should return movie details for a valid ID', async () => {
      const mockData = {
        Response: 'True',
        imdbID: 'tt123456',
        Title: 'Mock Movie',
      };
      global.fetch = jest
        .fn()
        .mockImplementation(() => mockResponse(true, mockData));
      const result = await getMovieDetails('tt123456');
      expect(result).toEqual(mockData);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=tt123456`
      );
    });

    it('should throw an error for an invalid ID', async () => {
      const mockData = {
        Response: 'False',
        Error: 'Invalid ID',
      };
      global.fetch = jest
        .fn()
        .mockImplementation(() => mockResponse(true, mockData));
      await expect(getMovieDetails('invalid_id')).rejects.toThrow('Invalid ID');
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=invalid_id`
      );
    });

    it('should throw an error for an HTTP error', async () => {
      global.fetch = jest.fn().mockImplementation(() => mockResponse(false));
      await expect(getMovieDetails('tt123456')).rejects.toThrow(
        'HTTP error! Status: false'
      );
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=tt123456`
      );
    });
  });
});

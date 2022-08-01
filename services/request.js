/* eslint-disable */

import axios from 'axios';

const apiURL = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=778306490922af732ee8ce5aeb1ef02e';

export const getPopularMovies = async () => {
  const response = await axios.get(`${apiURL}/movie/popular?${apiKey}`);
  return response.data.results;
};

export const getUpcomingMovies = async () => {
  const response = await axios.get(`${apiURL}/movie/upcoming?${apiKey}`);
  return response.data.results;
};

export const getMovieDetail = async (id) => {
  const response = await axios.get(`${apiURL}/movie/${id}?${apiKey}`);
  return response.data;
};

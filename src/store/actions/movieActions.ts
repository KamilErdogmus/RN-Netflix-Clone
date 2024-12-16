import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {
  CATEGORIES_URL,
  NOW_PLAYING_URL,
  POPULAR_URL,
  TOP_RATED_MOVIE_URL,
  UPCOMING_URL,
} from '../../service/url';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async (params: object) => {
    const response = await getRequest(TOP_RATED_MOVIE_URL, params);
    return response.data.results;
  },
);
const getCategories = createAsyncThunk(
  'movies/getCategories',
  async (params: object) => {
    const response = await getRequest(CATEGORIES_URL, params);
    return response.data.genres;
  },
);
const getUpcoming = createAsyncThunk(
  'movies/getUpcoming',
  async (params: object) => {
    const response = await getRequest(UPCOMING_URL, params);
    return response.data.results;
  },
);
const getPopular = createAsyncThunk(
  'movies/getPopular',
  async (params: object) => {
    const response = await getRequest(POPULAR_URL, params);
    return response.data.results;
  },
);
const getNowPlaying = createAsyncThunk(
  'movies/getNowPlaying',
  async (params: object) => {
    const response = await getRequest(NOW_PLAYING_URL, params);
    return response.data.results;
  },
);

export {
  getTopRatedMovies,
  getCategories,
  getUpcoming,
  getPopular,
  getNowPlaying,
};

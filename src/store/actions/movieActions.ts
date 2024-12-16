import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL, TOP_RATED_MOVIE_URL} from '../../service/url';

export const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async (params: object) => {
    const response = await getRequest(TOP_RATED_MOVIE_URL, params);
    return response.data.results;
  },
);

export const getCategories = createAsyncThunk(
  'movies/getCategories',
  async (params: object) => {
    const response = await getRequest(CATEGORIES_URL, params);
    return response.data.genres;
  },
);

import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {TOP_RATED_MOVIE_URL} from '../../service/url';

export const getTopRatedMovies = createAsyncThunk(
  'users/getTopRatedMovies',
  async (params: object) => {
    const response = await getRequest(TOP_RATED_MOVIE_URL, params);
    return response.data.data;
  },
);

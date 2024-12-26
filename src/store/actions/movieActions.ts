import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {
  CATEGORIES_URL,
  getArtistDetailURL,
  getMovieDetailURL,
  getRecommendationsURL,
  NOW_PLAYING_URL,
  POPULAR_URL,
  TOP_RATED_MOVIE_URL,
  UPCOMING_URL,
  getSearchQueryURL,
} from '../../service/url';
import {MovieDetail} from '../../utils/types';

const getMovieDetail = createAsyncThunk<
  MovieDetail,
  string,
  {rejectValue: string}
>('movies/getMovieDetail', async (movieID, {rejectWithValue}) => {
  try {
    const response = await getRequest(getMovieDetailURL(movieID));
    return response.data as MovieDetail;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || 'Something went wrong');
  }
});

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

const getArtistDetail = createAsyncThunk(
  'movies/getArtistDetail',
  async (artistID: string, {rejectWithValue}) => {
    try {
      const response = await getRequest(getArtistDetailURL(artistID));
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const getRecommendations = createAsyncThunk(
  'movies/getRecommendations',
  async (movieID: string, {rejectWithValue}) => {
    try {
      const response = await getRequest(getRecommendationsURL(movieID));
      return response.data.results;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

const getSearchQuery = createAsyncThunk(
  'search/getSearchQuery',
  async (query: string, {rejectWithValue}) => {
    try {
      const response = await getRequest(getSearchQueryURL(query));
      return response.data.results;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  },
);

export {
  getTopRatedMovies,
  getCategories,
  getUpcoming,
  getMovieDetail,
  getArtistDetail,
  getPopular,
  getNowPlaying,
  getRecommendations,
  getSearchQuery,
};

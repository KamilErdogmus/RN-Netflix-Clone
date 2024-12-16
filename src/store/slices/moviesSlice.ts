import {createSlice} from '@reduxjs/toolkit';
import {
  getCategories,
  getNowPlaying,
  getPopular,
  getTopRatedMovies,
  getUpcoming,
} from '../actions/movieActions';

interface MoviesState {
  topRatedMovies: any;
  error: string;
  categories: any;
  upcoming: any;
  loading: boolean;
  nowPlaying: any;
  popular: any;
}
const initialState: MoviesState = {
  topRatedMovies: [],
  categories: [],
  error: '',
  loading: false,
  upcoming: [],
  nowPlaying: [],
  popular: [],
};

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTopRatedMovies.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.error = action.error.message || 'Something went wrong';
        state.loading = false;
      })
      .addCase(getCategories.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.error.message || 'Something went wrong';
        state.loading = false;
      })
      .addCase(getUpcoming.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getUpcoming.fulfilled, (state, action) => {
        state.upcoming = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(getUpcoming.rejected, (state, action) => {
        state.error = action.error.message || 'Something went wrong';
        state.loading = false;
      })
      .addCase(getPopular.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getPopular.fulfilled, (state, action) => {
        state.popular = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(getPopular.rejected, (state, action) => {
        state.error = action.error.message || 'Something went wrong';
        state.loading = false;
      })
      .addCase(getNowPlaying.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getNowPlaying.fulfilled, (state, action) => {
        state.nowPlaying = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(getNowPlaying.rejected, (state, action) => {
        state.error = action.error.message || 'Something went wrong';
        state.loading = false;
      });
  },
});

export default moviesSlice.reducer;

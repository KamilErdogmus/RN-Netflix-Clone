import {createSlice} from '@reduxjs/toolkit';
import {getTopRatedMovies} from '../actions/movieActions';

interface MoviesState {
  topRatedMovies: any;
  error: string;
  loading: boolean;
}
const initialState: MoviesState = {
  topRatedMovies: [],
  error: '',
  loading: false,
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
      });
  },
});

export default moviesSlice.reducer;

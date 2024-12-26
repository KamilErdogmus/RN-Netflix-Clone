import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MovieDetail} from '../../utils/types';
import {getMovieDetail} from '../actions/movieActions';

interface MovieDetailState {
  movieDetail: MovieDetail | null;
  loading: boolean;
  error: string | null;
}

const initialState: MovieDetailState = {
  movieDetail: null,
  loading: false,
  error: null,
};

const movieDetailSlice = createSlice({
  name: 'movieDetail',
  initialState,
  reducers: {
    clearMovieDetail: state => {
      state.movieDetail = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getMovieDetail.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getMovieDetail.fulfilled,
        (state, action: PayloadAction<MovieDetail>) => {
          state.loading = false;
          state.movieDetail = action.payload;
          state.error = null;
        },
      )
      .addCase(
        getMovieDetail.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Bir hata oluştu';
          state.movieDetail = null;
        },
      );
  },
});

export const {clearMovieDetail} = movieDetailSlice.actions;
export default movieDetailSlice.reducer;

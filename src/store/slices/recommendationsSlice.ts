import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MovieDetail} from '../../utils/types';
import {getRecommendations} from '../actions/movieActions';

interface MovieDetailState {
  recommendations: MovieDetail | null;
}

const initialState: MovieDetailState = {
  recommendations: null,
};

const recommendationsMoviesSlice = createSlice({
  name: 'getRecommendations',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getRecommendations.fulfilled,
      (state, action: PayloadAction<MovieDetail>) => {
        state.recommendations = action.payload;
      },
    );
  },
});

export default recommendationsMoviesSlice.reducer;

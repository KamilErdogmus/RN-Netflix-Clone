import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ArtistDetail} from '../../utils/types';
import {getArtistDetail} from '../actions/movieActions';

interface ArtistDetailState {
  artistDetail: ArtistDetail | null;
  loading: boolean;
  error: string | null;
}

const initialState: ArtistDetailState = {
  artistDetail: null,
  loading: false,
  error: null,
};

const artistDetailSlice = createSlice({
  name: 'artistDetail',
  initialState,
  reducers: {
    clearAristDetail: state => {
      state.artistDetail = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getArtistDetail.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getArtistDetail.fulfilled,
        (state, action: PayloadAction<ArtistDetail>) => {
          state.loading = false;
          state.artistDetail = action.payload;
          state.error = null;
        },
      )
      .addCase(
        getArtistDetail.rejected,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.error = action.payload;
          state.artistDetail = null;
        },
      );
  },
});

export const {clearAristDetail} = artistDetailSlice.actions;

export default artistDetailSlice.reducer;

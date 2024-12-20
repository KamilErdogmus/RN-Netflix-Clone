// searchSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {getSearchQuery} from '../actions/movieActions';

interface SearchState {
  results: any[];
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  results: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSearchQuery.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSearchQuery.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(getSearchQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default searchSlice.reducer;

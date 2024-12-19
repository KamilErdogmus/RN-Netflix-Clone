import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CurrentUserState, User} from '../../utils/types';

const initialState: CurrentUserState = {
  user: null,
  detailedMovieName: '',
  detailedArtistName: '',
};

const currentSlice = createSlice({
  name: 'currentSlice',
  initialState,
  reducers: {
    currentUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    detailedMovieName: (state, action: PayloadAction<string>) => {
      state.detailedMovieName = action.payload;
    },
    detailedArtistName: (state, action: PayloadAction<string>) => {
      state.detailedArtistName = action.payload;
    },
  },
});

export const {currentUser, detailedMovieName, detailedArtistName} =
  currentSlice.actions;
export default currentSlice.reducer;

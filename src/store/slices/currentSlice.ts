import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CurrentUserState, User} from '../../utils/types';

const initialState: CurrentUserState = {
  user: null,
};

const currentSlice = createSlice({
  name: 'currentSlice',
  initialState,
  reducers: {
    currentUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const {currentUser} = currentSlice.actions;
export default currentSlice.reducer;

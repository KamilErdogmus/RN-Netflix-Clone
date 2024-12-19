import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CurrentUserState, User} from '../../utils/types';

const initialState: CurrentUserState = {
  user: null,
  detailedMovieName: '',
  detailedArtistName: '',
  myList: [],
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
    addList: (state, action: PayloadAction<string>) => {
      state.myList.push(action.payload);
    },
    removeList: (state, action: PayloadAction<string>) => {
      state.myList = state.myList.filter(item => item !== action.payload);
    },
    clearList: state => {
      state.myList = [];
    },
  },
});

export const {
  currentUser,
  detailedMovieName,
  detailedArtistName,
  addList,
  removeList,
  clearList,
} = currentSlice.actions;
export default currentSlice.reducer;

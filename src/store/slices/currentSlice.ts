import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CurrentUserState, ListItem, User} from '../../utils/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState: CurrentUserState = {
  user: null,
  detailedMovieName: '',
  detailedArtistName: '',
  myList: [],
};

const saveListToStorage = async (list: ListItem[]) => {
  try {
    await AsyncStorage.setItem('myList', JSON.stringify(list));
  } catch (error) {
    console.error('Error saving list:', error);
  }
};

const currentSlice = createSlice({
  name: 'currentUser',
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
    addList: (state, action: PayloadAction<ListItem>) => {
      state.myList = [...state.myList, action.payload];

      saveListToStorage(state.myList);
    },
    removeList: (state, action: PayloadAction<number>) => {
      state.myList = state.myList.filter(
        item => item.movieID !== action.payload,
      );

      saveListToStorage(state.myList);
    },
    clearList: state => {
      state.myList = [];

      AsyncStorage.removeItem('myList');
    },

    setList: (state, action: PayloadAction<ListItem[]>) => {
      state.myList = action.payload;
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
  setList,
} = currentSlice.actions;

export default currentSlice.reducer;

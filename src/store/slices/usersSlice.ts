import {createSlice} from '@reduxjs/toolkit';

const initialState = {userList: []};

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    addList: (state, action) => {
      state.userList = [...state.userList, action.payload];
    },
  },
});

export default usersSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';
import {UsersState} from '../../utils/types';

const initialState: UsersState = {
  userList: [
    {
      id: 1,
      title: 'Kamil',
      image: require('../../assets/userListImages/blue.png'),
    },
    {
      id: 2,
      title: 'John',
      image: require('../../assets/userListImages/yellow.png'),
    },
  ],
};

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    addList: (state, action) => {
      state.userList = [...state.userList, action.payload];
    },
  },
});

export const {addList} = usersSlice.actions;
export default usersSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';
import {UsersState} from '../../utils/types';

const initialState: UsersState = {
  userList: [
    {
      id: 1,
      title: 'John',
      image: require('../../assets/userListImages/yellow.png'),
    },
    {
      id: 2,
      title: 'James',
      image: require('../../assets/userListImages/sea.png'),
    },
    {
      id: 3,
      title: 'Tracy',
      image: require('../../assets/userListImages/green.png'),
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

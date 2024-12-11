import {createSlice} from '@reduxjs/toolkit';
import {ImageSourcePropType} from 'react-native';

export interface User {
  id: number;
  title: string;
  image: ImageSourcePropType;
}

interface UsersState {
  userList: User[];
}

const initialState: UsersState = {
  userList: [
    {
      id: 1,
      title: 'Drashti',
      image: require('../../assets/userListImages/sea.png'),
    },
    {
      id: 2,
      title: 'Bhavesh',
      image: require('../../assets/userListImages/yellow.png'),
    },
    {
      id: 3,
      title: 'Aditi',
      image: require('../../assets/userListImages/green.png'),
    },
    {
      id: 4,
      title: 'Prit',
      image: require('../../assets/userListImages/red.png'),
    },
    {
      id: 5,
      title: 'Kavya',
      image: require('../../assets/userListImages/blue.png'),
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

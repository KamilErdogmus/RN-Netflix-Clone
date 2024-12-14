import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import currentUserReducer from './slices/currentSlice';
import movieListReducer from './slices/moviesSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    currentUser: currentUserReducer,
    movies: movieListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

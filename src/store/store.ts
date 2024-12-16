import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import currentUserReducer from './slices/currentSlice';
import movieListReducer from './slices/moviesSlice';
import combinedSectionReducer from './slices/sectionsSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    currentUser: currentUserReducer,
    movies: movieListReducer,
    combinedSectionsSlice: combinedSectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

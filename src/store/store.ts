import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import currentUserReducer from './slices/currentSlice';
import movieListReducer from './slices/moviesSlice';
import combinedSectionReducer from './slices/sectionsSlice';
import movieDetailReducer from './slices/movieDetailSlice';
import artistDetailReducer from './slices/artistDetailSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    currentUser: currentUserReducer,
    movies: movieListReducer,
    combinedSections: combinedSectionReducer,
    movieDetail: movieDetailReducer,
    artistDetail: artistDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

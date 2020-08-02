import { combineReducers } from '@reduxjs/toolkit';
import { moviesReducer } from '../features/movies/slice';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;

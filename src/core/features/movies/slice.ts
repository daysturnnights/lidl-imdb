import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Axios from 'axios';
import { AppThunk } from '@core/common/store';

export type Movie = {
  id: number;
  title: string;
};

export type MoviesState = {
  movies: Array<Movie>;
};

const initialState: MoviesState = {
  movies: [],
};

const slice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    loaded: (state: MoviesState, { payload }: PayloadAction<Array<Movie>>) => {
      state.movies.length = 0;
      state.movies.push(...payload);
    },
  },
});

export const { reducer: moviesReducer } = slice;

export const { loaded } = slice.actions;

export const fetchMovies = (): AppThunk => async (dispatch) => {
  const { data } = await Axios.get('http://localhost:3000/api/movies');

  dispatch(loaded(data));
};

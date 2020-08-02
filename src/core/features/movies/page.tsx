import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '@core/common/rootReducer';
import { useAppDispatch } from '@core/common/store';
import MoviesList from './MoviesList';
import { fetchMovies } from './slice';

const MoviesPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const movies = useSelector((state: AppState) => state.movies.movies);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default MoviesPage;

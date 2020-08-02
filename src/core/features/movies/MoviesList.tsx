import React from 'react';
import { Movie } from './slice';

type Props = {
  movies: Array<Movie>;
};

const MoviesList = ({ movies }: Props) => (
  <ul>{movies && movies.map((movie) => <li key={movie.id}>{movie.title}</li>)}</ul>
);

export default MoviesList;

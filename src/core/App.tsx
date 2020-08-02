import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Link, Route, Switch } from 'react-router-dom';
import HomePage from './features/home/page';
import MoviesPage from './features/movies/page';

const App = () => (
  <React.Fragment>
    <Link to="/">Home</Link>
    <Link to="/movies">Movies</Link>
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
      </Switch>
    </div>
  </React.Fragment>
);

export default hot(App);

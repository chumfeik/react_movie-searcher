import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from './State';

const Details = () => {
  const state = React.useContext(Context);
  const {movie} = state;
  const image = `http://image.tmdb.org/t/p/w154${movie.poster_path}`;

  return state.movieID ? (
    <div>
      <Link to="/">&larr; go back</Link>
      <h3>Details about {movie.title}</h3>
      <h6>{movie.tagline}</h6>
      <img src={image} alt="" />
      <p>{movie.overview}</p>
    </div>
  ) : <p>Oops...</p>
};

export default Details;

import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from './State';

const Details = () => {
  const state = React.useContext(Context);
  const { movie } = state;
  const imagePath = movie.poster_path || movie.profile_path;
  const image = `http://image.tmdb.org/t/p/w154${imagePath}`;

  return (
    <div>
      <Link to="/">&larr; go back</Link>
      <h3>Details about {movie.title || movie.name}</h3>
      <h6>{movie.tagline || 'Known for: ' + movie.known_for_department}</h6>
      <img src={imagePath && image} alt="" />
      <p>{movie.overview || movie.biography}</p>
    </div>
  );
};

export default Details;

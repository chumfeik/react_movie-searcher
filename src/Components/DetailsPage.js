import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from './State';

const Details = () => {
  const state = React.useContext(Context);
  const { details } = state;
  const imagePath = details.poster_path || details.profile_path;
  const image = `http://image.tmdb.org/t/p/w154${imagePath}`;

  return (
    <div>
      <Link to="/">&larr; go back</Link>
      <h3>Details about {details.title || details.name}</h3>
      <h6>{details.tagline || 'Known for: ' + details.known_for_department}</h6>
      <img src={imagePath && image} alt="" />
      <p>{details.overview || details.biography}</p>
    </div>
  );
};

export default Details;

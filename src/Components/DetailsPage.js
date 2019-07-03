import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from './State';

const Details = () => {
  const state = React.useContext(Context);
  const { details } = state;
  const imagePath = details.poster_path || details.profile_path;
  const image = `http://image.tmdb.org/t/p/w154${imagePath}`;

  const formatDate = (date) => (new Date(date)).toLocaleDateString();

  return (
    <div>
      <Link to="/">&larr; go back</Link>
      <h1>{details.title || details.name}</h1>
      <p>{details.tagline || 'Known for ' + (details.known_for_department)}</p>
      <img src={imagePath && image} alt="" />
      <span>Release date  {formatDate(details.release_date)}</span>
      <p>{details.overview || details.biography}</p>
    </div>
  );
};

export default Details;

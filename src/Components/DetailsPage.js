import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from './State';
import Genres from './Genres';

const Details = () => {
  const state = React.useContext(Context);
  const { details, detailsInfo } = state;
  const imagePath = details.poster_path || details.profile_path;
  const image = `http://image.tmdb.org/t/p/w154${imagePath}`;

  const formatDate = date => new Date(date).toLocaleDateString();

  const FormatRuntime = time => `${Math.floor(time / 60)}h ${time % 60}min`;

  return (
    <div>
      <Link to="/">&larr; go back</Link>
      <h1>{details.title || details.name}</h1>
      <p>{details.tagline || 'Known for ' + details.known_for_department}</p>
      <img src={imagePath && image} alt="" />
      <a
        href={`https://www.imdb.com/title/${details.imdb_id}/`}
        target={'_blank'}
      >
        IMDb
      </a>
      <p>{formatDate(details.release_date || details.first_air_date)}</p>
      {detailsInfo ? <Genres ids={detailsInfo.genres} /> : null}
      {/* {TODO: add number of seasons and episodes for TV shows} */}
      <p>{FormatRuntime(details.runtime)}</p>
      <p>{details.overview || details.biography}</p>
    </div>
  );
};

export default Details;

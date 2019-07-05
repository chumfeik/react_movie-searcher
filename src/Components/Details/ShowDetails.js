import React from 'react';
import { Context } from '../State';
import Image from './Image';
import Genres from '../Genres';

const ShowDetails = () => {
  const state = React.useContext(Context);
  const { details, detailsInfo } = state;

  const formatDate = date => new Date(date).toLocaleDateString();

  const FormatRuntime = time =>
    time > 60 ? `${Math.floor(time / 60)}h ${time % 60}min` : time + 'min';

  return (
    <div>
      <h1>{details.title || details.name}</h1>
      <p>{details.tagline}</p>
      <Image path={details.poster_path} alt={details.title || details.name} />
      {details.imdb_id && (
        <a
          href={`https://www.imdb.com/title/${details.imdb_id}/`}
          target={'_blank'}
        >
          IMDb
        </a>
      )}
      <p>{formatDate(details.release_date || details.first_air_date)}</p>
      {detailsInfo ? <Genres ids={detailsInfo.genres} /> : null}
      <span>Seasons: {details.number_of_seasons}</span>
      <span>Episodes: {details.number_of_episodes}</span>
      <p>
        {FormatRuntime(details.runtime || details.episode_run_time)}
        {details.episode_run_time && ' per episode'}
      </p>
      <p>{details.overview}</p>
    </div>
  );
};

export default ShowDetails;

import React from 'react';
import { Context } from '../State';
import Image from '../Image';
import Genres from '../Genres';
import IMDbLink from './IMDbLink';

const ShowDetails = () => {
  const state = React.useContext(Context);
  const { details, detailsInfo } = state;

  const formatDate = date => new Date(date).toLocaleDateString();

  const FormatRuntime = time =>
    time > 60 ? `${Math.floor(time / 60)}h ${time % 60}min` : time + 'min';

  const DateInfo = () =>
    details.release_date ? (
      <p>Release: {formatDate(details.release_date)}</p>
    ) : (
      <p>First air: {formatDate(details.first_air_date)}</p>
    );

  const EpisodesInfo = () => (
    <p className="episodes_info">
      {details.number_of_seasons && (
        <span>Seasons: {details.number_of_seasons}</span>
      )}
      {details.number_of_episodes && (
        <span>Episodes: {details.number_of_episodes}</span>
      )}
    </p>
  );

  const Runtime = () => (
    <p>
      {FormatRuntime(details.runtime || details.episode_run_time)}
      {details.episode_run_time && ' per episode'}
    </p>
  );

  return (
    <div>
      <h1>{details.title || details.name}</h1>
      <p className="tagline">{details.tagline}</p>
      <Image path={details.poster_path} alt={details.title || details.name} />
      <IMDbLink type={'title'} id={details.imdb_id} />
      <DateInfo />
      <EpisodesInfo />
      <Runtime />
      {detailsInfo ? <Genres ids={detailsInfo.genres} /> : null}
      <p>{details.overview}</p>
    </div>
  );
};

export default ShowDetails;

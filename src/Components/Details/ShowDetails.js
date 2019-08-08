import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../Image';
import Genres from '../Genres';
import IMDbLink from './IMDbLink';
import { Tagline, Episodes, Details } from '../styles/DetailsPageStyles';

const ShowDetails = () => {
  const { contentInfo, details } = useSelector(state => state);

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
    <Episodes>
      {details.number_of_seasons && (
        <span>Seasons: {details.number_of_seasons}</span>
      )}
      {details.number_of_episodes && (
        <span>Episodes: {details.number_of_episodes}</span>
      )}
    </Episodes>
  );

  const Runtime = () => (
    <p>
      {FormatRuntime(details.runtime || details.episode_run_time)}
      {details.episode_run_time && ' per episode'}
    </p>
  );

  return (
    <>
      <h1>{details.name || details.title || details.original_name}</h1>
      <Tagline>{details.tagline}</Tagline>
      <Image path={details.poster_path} alt={details.title || details.name} />
      <IMDbLink type={'title'} id={details.imdb_id} />
      <DateInfo />
      <EpisodesInfo />
      <Runtime />
      {contentInfo ? <Genres ids={contentInfo.genres} /> : null}
      <Details>{details.overview}</Details>
    </>
  );
};

export default ShowDetails;

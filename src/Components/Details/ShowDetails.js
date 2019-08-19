import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../Image';
import Genres from '../Genres';
import IMDbLink from './IMDbLink';
import { Tagline, Episodes, Details } from '../styles/DetailsPageStyles';

const ShowDetails = () => {
  const { contentInfo, details } = useSelector(state => state);
  const {
    name,
    title,
    original_name,
    tagline,
    poster_path,
    imdb_id,
    release_date,
    first_air_date,
    number_of_seasons,
    number_of_episodes,
    runtime,
    episode_run_time,
    overview
  } = details;

  const formatDate = date => new Date(date).toLocaleDateString();

  const FormatRuntime = time =>
    time > 60 ? `${Math.floor(time / 60)}h ${time % 60}min` : time + 'min';

  const DateInfo = () =>
    release_date ? (
      <p>Release: {formatDate(release_date)}</p>
    ) : (
      <p>First air: {formatDate(first_air_date)}</p>
    );

  const EpisodesInfo = () => (
    <Episodes>
      {number_of_seasons && <span>Seasons: {number_of_seasons}</span>}
      {number_of_episodes && <span>Episodes: {number_of_episodes}</span>}
    </Episodes>
  );

  const Runtime = () => (
    <p>
      {FormatRuntime(runtime || episode_run_time)}
      {episode_run_time && ' per episode'}
    </p>
  );

  return (
    <>
      <h1>{name || title || original_name}</h1>
      <Tagline>{tagline}</Tagline>
      <Image path={poster_path} alt={title || name} />
      <IMDbLink type={'title'} id={imdb_id} />
      <DateInfo />
      <EpisodesInfo />
      <Runtime />
      {contentInfo ? <Genres ids={contentInfo.genres} /> : null}
      <Details>{overview}</Details>
    </>
  );
};

export default ShowDetails;

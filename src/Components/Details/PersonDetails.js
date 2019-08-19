import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../Image';
import IMDbLink from './IMDbLink';

const PersonDetails = () => {
  const details = useSelector(state => state.details);
  const {
    name,
    known_for_department,
    profile_path,
    imdb_id,
    biography
  } = details;

  return (
    <>
      <h1>{name}</h1>
      <p>{`Known for ${known_for_department}`}</p>
      <Image path={profile_path} alt={name} />
      {imdb_id && <IMDbLink type={'name'} id={imdb_id} />}
      <p>{biography}</p>
    </>
  );
};

export default PersonDetails;

import React from 'react';
import { Context } from '../State';
import Image from '../Image';

const PersonDetails = () => {
  const state = React.useContext(Context);
  const { details } = state;

  return (
    <div>
      <h1>{details.name}</h1>
      <p>{`Known for ${details.known_for_department}`}</p>
      <Image path={details.profile_path} alt={details.name} />
      {details.imdb_id && (
        <a
          href={`https://www.imdb.com/name/${details.imdb_id}/`}
          target={'_blank'}
        >
          IMDb
        </a>
      )}
      <p>{details.biography}</p>
    </div>
  );
};

export default PersonDetails;

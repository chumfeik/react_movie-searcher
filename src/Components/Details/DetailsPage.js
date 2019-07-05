import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../State';
import PersonDetails from './PersonDetails';
import ShowDetails from './ShowDetails';

const Details = () => {
  const state = React.useContext(Context);

  return (
    <div>
      <Link to="/">&larr; go back</Link>
      {state.detailsInfo.media_type === 'person' ? (
        <PersonDetails />
      ) : (
        <ShowDetails />
      )}
    </div>
  );
};

export default Details;

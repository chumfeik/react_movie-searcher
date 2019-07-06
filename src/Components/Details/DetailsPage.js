import React from 'react';
import { Context } from '../State';
import { StyledDetails } from '../styles/DetailsPageStyles';
import PersonDetails from './PersonDetails';
import ShowDetails from './ShowDetails';
import BackButton from './BackButton';

const Details = () => {
  const state = React.useContext(Context);

  return (
    <StyledDetails>
      <BackButton />
      {state.detailsInfo.media_type === 'person' ? (
        <PersonDetails />
      ) : (
        <ShowDetails />
      )}
    </StyledDetails>
  );
};

export default Details;

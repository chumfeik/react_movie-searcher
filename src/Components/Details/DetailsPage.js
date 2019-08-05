import React from 'react';
import { useSelector } from 'react-redux';
import { StyledDetails } from '../styles/DetailsPageStyles';
import PersonDetails from './PersonDetails';
import ShowDetails from './ShowDetails';
import BackButton from './BackButton';

const Details = () => {
  const contentInfo = useSelector(state => state.contentInfo);

  return (
    <StyledDetails>
      <BackButton />
      {contentInfo.media_type === 'person' ? (
        <PersonDetails />
      ) : (
        <ShowDetails />
      )}
    </StyledDetails>
  );
};

export default Details;

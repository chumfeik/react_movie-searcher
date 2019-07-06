import React from 'react';
import icon from '../../IMDb-icon.png';
import { StyledIMDBLink } from '../styles/DetailsPageStyles';

const IMDbLink = ({ type, id }) =>
  id ? (
    <StyledIMDBLink
      href={`https://www.imdb.com/${type}/${id}/`}
      target={'_blank'}
    >
      <img src={icon} alt="IMDb" />
      IMDb
    </StyledIMDBLink>
  ) : null;

export default IMDbLink;

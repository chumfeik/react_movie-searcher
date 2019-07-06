import React from 'react';
import icon from '../../IMDb-icon.png';

const IMDbLink = ({ type, id }) =>
  id ? (
    <a
      className="imdb"
      href={`https://www.imdb.com/${type}/${id}/`}
      target={'_blank'}
    >
      <img src={icon} alt="IMDb" />
      IMDb
    </a>
  ) : null;

export default IMDbLink;

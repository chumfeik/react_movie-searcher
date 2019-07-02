import React from 'react';
import StyledPoster from './styles/PosterStyles';

const Poster = props => {
  const data = props.data;
  const size = props.small ? 'w92' : 'w154';
  const image = `http://image.tmdb.org/t/p/${size}${data.poster_path || data.profile_path}`;
  return (
    <StyledPoster isSmall={props.small}>
      <img
        src={image}
        alt={`${data.title || data.name}`}
      />
      <figcaption>{data.title || data.name}</figcaption>
    </StyledPoster>
  );
};

export default Poster;

import React from 'react';
import StyledPoster from './styles/PosterStyles';

const Poster = props => {
  const data = props.data;
  const size = props.small ? 'w92' : 'w154';
  return (
    <StyledPoster small={props.small}>
      <img
        src={`http://image.tmdb.org/t/p/${size}${data.poster_path ||
          data.profile_path}`}
        alt={`${data.title || data.name}`}
      />
      <figcaption>{data.title || data.name}</figcaption>
    </StyledPoster>
  );
};

export default Poster;

import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from './State';
import StyledPoster from './styles/PosterStyles';

const Poster = props => {
  const data = props.data;
  const state = React.useContext(Context);
  const size = props.small ? 'w92' : 'w154';
  const image = `http://image.tmdb.org/t/p/${size}${data.poster_path ||
    data.profile_path}`;

  const handleClick = () =>
    state.setDetailsInfo({ id: data.id, media_type: data.media_type });

  return (
    <StyledPoster isSmall={props.small}>
      <Link onClick={handleClick} to={`/details/`}>
        <img src={image} alt={`${data.title || data.name}`} />
        <figcaption>{data.title || data.name}</figcaption>
      </Link>
    </StyledPoster>
  );
};

export default Poster;

import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../State';
import Image from '../Image';
import StyledPoster from '../styles/PosterStyles';

const Poster = props => {
  const data = props.data;
  const state = React.useContext(Context);

  const handleClick = () => {
    state.setDetailsInfo({
      id: data.id,
      media_type: data.media_type,
      genres: data.genre_ids
    });
    window.scrollTo(0, 0);
  };

  return (
    <StyledPoster isSmall={props.small}>
      <Link onClick={handleClick} to={`/details/`}>
        <Image path={data.poster_path || data.profile_path} {...props} />
        <figcaption>{data.title || data.name}</figcaption>
      </Link>
    </StyledPoster>
  );
};

export default Poster;

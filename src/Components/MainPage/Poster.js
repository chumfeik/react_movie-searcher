import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Image from '../Image';
import StyledPoster from '../styles/PosterStyles';

const Poster = props => {
  const data = props.data;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: 'SET_CONTENT_INFO',
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

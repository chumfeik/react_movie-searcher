import React from 'react';

const Image = ({ path, ...props }) =>
  path ? (
    <img
      src={`http://image.tmdb.org/t/p/${props.small ? 'w92' : 'w154'}${path}`}
      alt={props.alt}
    />
  ) : null;
export default Image;

import React from 'react';

const Poster = props => {
  const data = props.data;
  return (
    <figure>
      <img
        src={`http://image.tmdb.org/t/p/w154/${data.poster_path}`}
        alt={`${data.title || data.name}`}
      />
      <figcaption>{data.title || data.name}</figcaption>
    </figure>
  );
};

export default Poster;

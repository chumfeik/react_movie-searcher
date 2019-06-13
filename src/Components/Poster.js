import React from 'react';

const Poster = props => {
  const data = props.data;
  const size = props.small ? 'w92' : 'w154';
  return (
    <figure>
      <img
        src={`http://image.tmdb.org/t/p/${size}/${data.poster_path ||
          data.profile_path}`}
        alt={`${data.title || data.name}`}
      />
      <figcaption>{data.title || data.name}</figcaption>
    </figure>
  );
};

export default Poster;

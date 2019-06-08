import React from 'react';

const Person = props => {
  const data = props.data;
  return (
    <figure>
      <img
        src={`http://image.tmdb.org/t/p/w154/${data.profile_path}`}
        alt={`${data.name}`}
      />
      <figcaption>{data.name}</figcaption>
    </figure>
  );
};

export default Person;

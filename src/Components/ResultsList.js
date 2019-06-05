import React from 'react';

const ResultsList = props => {
  const data = props.data;
  // console.log(data)
  return data
    ? Object.keys(data).map(key =>
        data[key].poster_path || data[key].profile_path ? (
          <figure key={data[key].id}>
            <img
              src={`http://image.tmdb.org/t/p/w154/${data[key].poster_path ||
                data[key].profile_path}`}
              alt={`${data[key].title || data[key].name}`}
            />
            <figcaption>{data[key].title || data[key].name}</figcaption>
          </figure>
        ) : null
      )
    : null;
};

export default ResultsList;

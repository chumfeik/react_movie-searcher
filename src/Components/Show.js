import React from 'react';

const Show = props => {
  const data = props.data;

  return (
    <div className="card">
      <figure>
        <img
          src={`http://image.tmdb.org/t/p/w154/${data.poster_path}`}
          alt={`${data.title || data.name}`}
        />
        <figcaption>{data.title || data.name}</figcaption>
      </figure>
      <div className="description">
        <span>{data.media_type}</span>
        <p>{data.overview}</p>
      </div>
      <span className="date">{data.release_date || data.first_air_date}</span>
      <div className="additional_info">
        <div className="genres">
          Genres:
          <span>first</span>
          <span>second</span>
          <span>third</span>
        </div>
        <span>Rating: {data.vote_average}</span>
      </div>
    </div>
  );
};

export default Show;

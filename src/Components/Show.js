import React from 'react';
import Poster from './Poster';

const Show = props => {
  const data = props.data;
  return (
    <div className="card">
      <Poster data={data} />
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

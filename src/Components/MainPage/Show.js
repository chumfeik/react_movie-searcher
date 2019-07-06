import React from 'react';
import Poster from './Poster';
import Genres from '../Genres';

const Show = props => {
  const data = props.data;

  const getYear = date => String(date).match(/\d{4}/);

  return (
    <div className="card">
      <Poster data={data} />
      <div className="description">
        <span>{data.media_type}</span>
        <p>{data.overview}</p>
      </div>
      <span className="date">
        {getYear(data.release_date) || getYear(data.first_air_date)}
      </span>
      <div className="additional_info">
        <Genres ids={data.genre_ids} />
        <span>Rating: {data.vote_average}</span>
      </div>
    </div>
  );
};

export default Show;

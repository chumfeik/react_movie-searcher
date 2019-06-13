import React from 'react';
import Poster from './Poster';
import genres from '../genres';

const Show = props => {
  const data = props.data;
  // console.log(data.genre_ids);
  // console.log(genres[28])
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
          <span> Genres:</span>
          {data.genre_ids.map(id => (
            <li key={id}>{genres[id]} </li>
          ))}
        </div>
        <span>Rating: {data.vote_average}</span>
      </div>
    </div>
  );
};

export default Show;

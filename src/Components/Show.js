import React from 'react';
import Poster from './Poster';
import genres from '../genres';

import { Context } from './App';

const Show = props => {
  const data = props.data;

  const Genres = () => (
    <div className="genres">
      <span>Genres:</span>
      {data.genre_ids.map(id => (
        <li key={id}>{genres[id]}</li>
      ))}
    </div>
  );

  const value = React.useContext(Context);

  return (
    <div className="card">
      <Poster data={data} />
      <div className="description">
        <span>{data.media_type}</span>
        <p>{data.overview}</p>
        <span>{value}</span>
      </div>
      <span className="date">{data.release_date || data.first_air_date}</span>
      <div className="additional_info">
        <Genres />
        <span>Rating: {data.vote_average}</span>
      </div>
    </div>
  );
};

export default Show;

import React from 'react';
import Poster from './Poster';
import Genres from '../Genres';
import { Card, Description, AdditionalInfo } from '../styles/ResultsListStyles';

const Show = props => {
  const data = props.data;

  const getYear = date => String(date).match(/\d{4}/);

  return (
    <Card>
      <Poster data={data} />
      <Description>
        <span>{data.media_type}</span>
        <p>{data.overview}</p>
      </Description>
      <span id="date">
        {getYear(data.release_date) || getYear(data.first_air_date)}
        {/* FIXME: date styles align */}
      </span>
      <AdditionalInfo>
        <Genres ids={data.genre_ids} />
        <span>Rating: {data.vote_average}</span>
      </AdditionalInfo>
    </Card>
  );
};

export default Show;

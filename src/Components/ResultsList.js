import React from 'react';
import { ResultsContainer } from './styles/ResultsListStyles';
import Show from './Show';
import Person from './Person';

const showCard = data => {
  return data.media_type === 'person' ? (
    <Person data={data} key={data.id} />
  ) : (
    <Show data={data} key={data.id} />
  );
};

const ResultsList = props => {
  const data = props.data;
  const hasPicture = d => d.poster_path || d.profile_path;

  return data.length ? (
    Object.keys(data).map(key => hasPicture(data[key]) && showCard(data[key]))
  ) : (
    <p>Oops there's nothing here</p>
  );
};

export { ResultsContainer, ResultsList };

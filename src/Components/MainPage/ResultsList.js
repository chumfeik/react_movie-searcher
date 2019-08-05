import React from 'react';
import { useSelector } from 'react-redux';
import { ResultsContainer } from '../styles/ResultsListStyles';
import Show from './Show';
import Person from './Person';

const showCard = data => {
  return data.media_type === 'person' ? (
    <Person data={data} key={data.id} />
  ) : (
    <Show data={data} key={data.id} />
  );
};

const ResultsList = () => {
  const searchResult = useSelector(state => state.searchResult.results);

  const resultsExist = searchResult && searchResult.length;

  const hasPicture = r => r.poster_path || r.profile_path;
  // # TODO: don't check picture existence
  return resultsExist ? (
    Object.keys(searchResult).map(
      key => hasPicture(searchResult[key]) && showCard(searchResult[key])
    )
  ) : (
    <span>Oops there's nothing here...</span>
  );
};

export { ResultsContainer, ResultsList };

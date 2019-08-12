import React from 'react';
import { useSelector } from 'react-redux';
import { ResultsContainer } from '../styles/ResultsListStyles';
import Show from './Show';
import Person from './Person';

const showCard = data =>
  data.media_type === 'person' ? (
    <Person data={data} key={data.id} />
  ) : (
    <Show data={data} key={data.id} />
  );

const ResultsList = () => {
  const searchResult = useSelector(state => state.searchResult.results);

  const resultsExist = searchResult && searchResult.length;

  return resultsExist ? (
    Object.keys(searchResult).map(key => showCard(searchResult[key]))
  ) : (
    <span>Oops there's nothing here...</span>
  );
};

export { ResultsContainer, ResultsList };

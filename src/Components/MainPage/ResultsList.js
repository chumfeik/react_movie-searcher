import React from 'react';
import {Context} from '../State';
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
  const state = React.useContext(Context);
  const {results} = state.results;
  
  const resultsExist = results && results.length;

  const hasPicture = r => r.poster_path || r.profile_path;
  // # TODO: don't check picture existence
  return resultsExist ? (
    Object.keys(results).map(key => hasPicture(results[key]) && showCard(results[key]))
  ) : (
    <span>Oops there's nothing here...</span>
  );
};

export { ResultsContainer, ResultsList };

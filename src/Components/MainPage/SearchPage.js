import React from 'react';
import Search from './Search';
import Navigation from './Navigation';
import { ResultsList, ResultsContainer } from './ResultsList';

const SearchPage = ({ className }) => (
  <div className={className}>
    <Search />
    {/* #TODO: remove top navigation */}
    <Navigation />
    <ResultsContainer>
      <ResultsList />
    </ResultsContainer>
    {/* <Navigation /> */}
  </div>
);

export default SearchPage;

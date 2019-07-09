import React from 'react';
import Search from './Search';
import Navigation from './Navigation';
import { ResultsList, ResultsContainer } from './ResultsList';

const SearchPage = () => (
  <>
    <Search />
    {/* #TODO: remove top navigation */}
    <Navigation />
    <ResultsContainer>
      <ResultsList />
    </ResultsContainer>
    {/* <Navigation /> */}
  </>
);

export default SearchPage;

import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import Search from './Search';
import Navigation from './Navigation';
import { ResultsList, ResultsContainer } from './ResultsList';

const SearchPage = ({ className }) => (
  <div className={className}>
    <GlobalStyle />
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

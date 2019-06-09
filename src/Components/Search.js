import React from 'react';
import { SearchContainer, SearchField } from './styles/SearchStyles';

const Search = ({ handleChange }) => (
  <SearchContainer>
    <SearchField
      autoFocus
      onChange={handleChange}
      type="text"
      placeholder="Search for movie, tv or person..."
    />
  </SearchContainer>
);

export default Search;

import React from 'react';
import { Context } from './State';
import { SearchContainer, SearchField } from './styles/SearchStyles';

const Search = () => {
  const state = React.useContext(Context);

  const handleChange = e => {
    state.setQuery(e.target.value);
  };

  return (
    <SearchContainer>
    <SearchField
      autoFocus
      onChange={handleChange}
      type="text"
      value={state.query}
      placeholder="Search for movie, tv or person..."
    />
  </SearchContainer>
  )
};

export default Search;

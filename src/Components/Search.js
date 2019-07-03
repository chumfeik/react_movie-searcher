import React from 'react';
import { Context } from './State';
import { SearchContainer, SearchField } from './styles/SearchStyles';

const Search = () => {
  const state = React.useContext(Context);
  const { setPage, query, setQuery } = state;

  const handleChange = e => {
    setQuery(e.target.value);
    setPage(1);
  };

  return (
    <SearchContainer>
      <SearchField
        autoFocus
        onChange={handleChange}
        type="text"
        value={query}
        placeholder="Search for movie, tv or person..."
      />
    </SearchContainer>
  );
};

export default Search;

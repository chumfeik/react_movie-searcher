import React from 'react';
import styled from 'styled-components';

const SearchField = styled.input`
  width: calc(100% - 4rem);
  margin: 1rem;
  padding: 0.5rem;
  border: 0.1rem solid #222;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  outline: none;
  :focus {
    border: 0.1rem solid #aaa;
  }
`;

const SearchContainer = styled.div`
  background-color: #222;
`;

const Search = ({ handleChange }) => (
  <SearchContainer>
    <SearchField
      onChange={handleChange}
      type="text"
      placeholder="Search for movie, tv or person..."
    />
  </SearchContainer>
);

export default Search;

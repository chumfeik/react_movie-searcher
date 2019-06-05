import React from 'react';

const Search = ({ handleChange }) => (
  <input
    onChange={handleChange}
    type="text"
    placeholder="Search for movie, tv or person..."
  />
);

export default Search;

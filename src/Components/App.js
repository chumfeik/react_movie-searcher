import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import Search from './Search';
import { ResultsList, ResultsContainer } from './ResultsList';

const App = ({ className }) => {
  const [data, setData] = useState({});
  const [query, setQuery] = useState('Marvel');
  const api_key = '1589b24269473d89b7da6c747d52692a';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${
        query.length ? query : ' '
      }&page=1&api_key=${api_key}`
    )
      .then(response => response.json())
      .then(json => {
        setData(json.results);
      });
  }, [query]);

  const handleChange = e => setQuery(e.target.value);

  return (
    <div className={className}>
      <GlobalStyle />
      <Search handleChange={handleChange} />
      <ResultsContainer>
        <ResultsList data={data} />
      </ResultsContainer>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import Search from './Search';
import Navigation from './Navigation';
import { ResultsList, ResultsContainer } from './ResultsList';

const App = ({ className, query }) => {
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const api_key = '1589b24269473d89b7da6c747d52692a';

  useEffect(() => {
    let mounted = true;
    const sendRequest = () => {
      fetch(
        `https://api.themoviedb.org/3/search/multi?query=${
          query.length ? query : ' '
        }&page=${page}&api_key=${api_key}`
      )
        .then(response => response.json())
        .then(json => {
          mounted && setData(json);
        });
    };
    sendRequest();
    return () => mounted = false;
  }, [page, query]);

  return (
    <div className={className}>
      <GlobalStyle />
        <Search />
        {/* #TODO: remove top navigation */}
        <Navigation data={data} page={page} setPage={setPage} />
        <ResultsContainer>
          <ResultsList data={data.results} />
        </ResultsContainer>
        {/* <Navigation /> */}
    </div>
  );
};

export default App;

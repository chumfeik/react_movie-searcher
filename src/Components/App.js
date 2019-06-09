import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import Search from './Search';
import Navigation from './Navigation';
import { ResultsList, ResultsContainer } from './ResultsList';

const App = ({ className }) => {
  const [data, setData] = useState({});
  const [query, setQuery] = useState('Marvel');
  const [page, setPage] = useState(1);
  const api_key = '1589b24269473d89b7da6c747d52692a';

  useEffect(() => {
    const sendRequest = () => {
      fetch(
        `https://api.themoviedb.org/3/search/multi?query=${
          query.length ? query : ' '
        }&page=${page}&api_key=${api_key}`
      )
        .then(response => response.json())
        .then(json => {
          setData(json);
        });
    };
    sendRequest();
  }, [page, query]);

  const handleChange = e => {
    setQuery(e.target.value);
    setPage(1);
    console.log(data.results);
  };

  const changePage = change => {
    setPage(page + change);
    window.scrollTo(0, 0);
  };

  return (
    <div className={className}>
      <GlobalStyle />
      <Search handleChange={handleChange} />
      {/* #TODO: remove top navigation */}
      <Navigation data={data} page={page} changePage={changePage} />
      <ResultsContainer>
        <ResultsList data={data.results} />
      </ResultsContainer>
      {/* <Navigation /> */}
    </div>
  );
};

export default App;

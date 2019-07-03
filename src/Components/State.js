import React, { useState, useEffect } from 'react';
import Router from './Router';

export const Context = React.createContext();

const State = () => {
  const [results, setResults] = useState({});
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('captain');
  const [detailsInfo, setDetailsInfo] = useState();
  const [details, setDetails] = useState({});
  const api_key = '1589b24269473d89b7da6c747d52692a';
  const state = {
    results,
    setResults,
    page,
    setPage,
    query,
    setQuery,
    detailsInfo,
    setDetailsInfo,
    details,
    setDetails,
    api_key
  };

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
          mounted && setResults(json);
        });
    };
    sendRequest();
    return () => (mounted = false);
  }, [page, query]);

  useEffect(() => {
    detailsInfo &&
      fetch(
        `https://api.themoviedb.org/3/${detailsInfo.media_type}/${
          detailsInfo.id
        }?api_key=1589b24269473d89b7da6c747d52692a`
      )
        .then(response => response.json())
        .then(json => setDetails(json));
  }, [detailsInfo]);

  return (
    <Context.Provider value={state}>
      <Router />
    </Context.Provider>
  );
};

export default State;

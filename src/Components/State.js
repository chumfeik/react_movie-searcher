import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from './Router';

export const Context = React.createContext();

const State = () => {
  const [results, setResults] = useState({});
  const [genres, setGenres] = useState({});
  const page = useSelector(state => state.page);
  const query = useSelector(state => state.query);
  const contentInfo = useSelector(state => state.contentInfo);
  const [details, setDetails] = useState({});
  const api_key = '1589b24269473d89b7da6c747d52692a';
  const state = {
    results,
    genres,
    details,
    setDetails
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
    contentInfo.media_type &&
      fetch(
        `https://api.themoviedb.org/3/${contentInfo.media_type}/${
          contentInfo.id
        }?api_key=${api_key}`
      )
        .then(response => response.json())
        .then(json => setDetails(json));
  }, [contentInfo]);

  useEffect(() => {
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
      ).then(response => response.json()),
      fetch(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key}`
      ).then(response => response.json())
    ]).then(res => {
      setGenres(mapValues(res[0].genres, res[1].genres));
    });
  }, []);

  const mapValues = (a, b) =>
    [...a, ...b].reduce((obj, item) => ((obj[item.id] = item.name, obj)), {});

  return (
    <Context.Provider value={state}>
      <Router />
    </Context.Provider>
  );
};

export default State;

import React, { useState, useEffect } from 'react';
import Router from './Router'

export const Context = React.createContext();

const State = () => {
    const [data, setData] = useState({});
    const [movieID, setMovieID] = useState();
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('tarantino');
    // const [movie, setMovie] = useState({});
    const api_key = '1589b24269473d89b7da6c747d52692a';
    const state = {
      data, setData,
      movieID, setMovieID,
      query, setQuery,
      page, setPage,
      // movie, setMovie,
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
              mounted && setData(json);
            });
        };
        sendRequest();
        return () => mounted = false;
      }, [page, query]);

      return (
        <Context.Provider value={state}>
            <Router />
        </Context.Provider>
      )
}

export default State;
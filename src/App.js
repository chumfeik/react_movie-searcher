import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Router from './Components/Router';

const App = () => {
  const { page, query, contentInfo } = useSelector(state => state);
  const dispatch = useDispatch();
  const api_key = '1589b24269473d89b7da6c747d52692a';

  useEffect(() => {
    let mounted = true;

    const fetchResults = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${
          query.length ? query : ' '
        }&page=${page}&api_key=${api_key}`
      );
      const json = await result.json();
      mounted && (await dispatch({ type: 'SET_RESULT', result: json }));
    };
    fetchResults();

    return () => (mounted = false);
  }, [page, query, dispatch]);

  useEffect(() => {
    let mounted = true;

    const fetchDetails = async () => {
      const details = await fetch(
        `https://api.themoviedb.org/3/${contentInfo.media_type}/${
          contentInfo.id
        }?api_key=${api_key}`
      );
      const json = await details.json();
      mounted && (await dispatch({ type: 'SET_DETAILS', details: json }));
    };
    contentInfo.media_type && fetchDetails();

    return () => (mounted = false);
  }, [contentInfo, dispatch]);

  useEffect(() => {
    const showTypes = ['movie', 'tv'];

    const fetchGenres = async () => {
      const genresRequests = showTypes.map(async type => {
        const genres = await fetch(
          `https://api.themoviedb.org/3/genre/${type}/list?api_key=${api_key}`
        );
        return genres.json();
      });

      const mapValues = (a, b) =>
        [...a, ...b].reduce(
          (obj, item) => ((obj[item.id] = item.name, obj)),
          {}
        );
        
      const responses = await Promise.all(genresRequests);

      await dispatch({
        type: 'SET_GENRES',
        genres: mapValues(responses[0].genres, responses[1].genres)
      });
    };
    fetchGenres();
  }, [dispatch]);

  return <Router />;
};

export default App;

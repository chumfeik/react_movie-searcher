import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Router from './Components/Router';
import { setResult, setDetails, setGenres } from './actions';

const App = () => {
  const { page, query, contentInfo } = useSelector(state => state);
  const dispatch = useDispatch();
  const api_key = '1589b24269473d89b7da6c747d52692a';

  useEffect(() => {
    let mounted = true;

    const fetchResults = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${
          query.length ? query : ' '
        }&page=${page}&api_key=${api_key}`
      );
      const json = await response.json();
      mounted && await dispatch(setResult(json));
    };
    fetchResults();

    return () => (mounted = false);
  }, [page, query, dispatch]);

  useEffect(() => {
    let mounted = true;

    const fetchDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${contentInfo.media_type}/${
          contentInfo.id
        }?api_key=${api_key}`
      );
      const json = await response.json();
      mounted && await dispatch(setDetails(json));
    };
    contentInfo.media_type && fetchDetails();

    return () => (mounted = false);
  }, [contentInfo, dispatch]);

  useEffect(() => {
    const showTypes = ['movie', 'tv'];

    const fetchGenres = async () => {
      const genresRequests = showTypes.map(async type => {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/${type}/list?api_key=${api_key}`
        );
        return response.json();
      });

      const mapValues = (a, b) =>
        [...a, ...b].reduce(
          (obj, item) => ((obj[item.id] = item.name, obj)),
          {}
        );

      const responses = await Promise.all(genresRequests);

      const mapedValues = mapValues(responses[0].genres, responses[1].genres);

      await dispatch(setGenres(mapedValues));
    };
    fetchGenres();
  }, [dispatch]);

  return <Router />;
};

export default App;

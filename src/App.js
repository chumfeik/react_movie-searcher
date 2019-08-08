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
    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${
        query.length ? query : ' '
      }&page=${page}&api_key=${api_key}`
    )
      .then(response => response.json())
      .then(json => {
        mounted && dispatch({ type: 'SET_RESULT', result: json });
      });

    console.log(1);
    return () => (mounted = false);
  }, [page, query, dispatch]);

  useEffect(() => {
    contentInfo.media_type &&
      fetch(
        `https://api.themoviedb.org/3/${contentInfo.media_type}/${
          contentInfo.id
        }?api_key=${api_key}`
      )
        .then(response => response.json())
        .then(json => dispatch({ type: 'SET_DETAILS', details: json }))
        .then(console.log(2));
  }, [contentInfo, dispatch]);

  useEffect(() => {
    const showTypes = ['movie', 'tv'];

    const genresRequests = showTypes.map(type =>
      fetch(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${api_key}`
      ).then(res => res.json())
    );

    const mapValues = (a, b) =>
    [...a, ...b].reduce((obj, item) => ((obj[item.id] = item.name, obj)), {});

    Promise.all(genresRequests).then(res => {
      dispatch({
        type: 'SET_GENRES',
        genres: mapValues(res[0].genres, res[1].genres)
      });
    });
    console.log(3);
  }, [dispatch]);

  return <Router />;
};

export default App;

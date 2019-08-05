import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Router from './Router';

const State = () => {
  const { page, query, contentInfo } = useSelector(state => state);
  const dispatch = useDispatch();
  
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
          mounted && dispatch({ type: 'SET_RESULT', result: json });
        });
    };
    sendRequest();
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
        .then(json => dispatch({ type: 'SET_DETAILS', details: json }));
  }, [contentInfo, dispatch]);

  useEffect(() => {
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
      ).then(response => response.json()),
      fetch(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key}`
      ).then(response => response.json())
    ]).then(res => {
      dispatch({
        type: 'SET_GENRES',
        genres: mapValues(res[0].genres, res[1].genres)
      });
    });
  }, [dispatch]);

  const mapValues = (a, b) =>
    [...a, ...b].reduce((obj, item) => ((obj[item.id] = item.name, obj)), {});

  return <Router />;
};

export default State;

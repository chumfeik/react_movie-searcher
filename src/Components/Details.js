import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Details = ({ movieID }) => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieID}?api_key=1589b24269473d89b7da6c747d52692a`
    )
      .then(response => response.json())
      .then(json => {
        // console.log(json.title);
        setMovie(json);
      });
  }, [movieID]);

  return (
    <div>
      <Link to="/">&larr; go back</Link>
      <h3>Details about {movie.title}</h3>
      <h6>{movie.tagline}</h6>
      <img src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt="" />
      <p>{movie.overview}</p>
    </div>
  );
};

export default Details;

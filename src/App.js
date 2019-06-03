import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({});

  const [query, setQuery] = useState('Marvel');

  const api_key = '1589b24269473d89b7da6c747d52692a';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${
        query.length ? query : ' '
      }&sort_by=vote_average.desc&api_key=${api_key}`
    )
      .then(response => response.json())
      .then(json => {
        setData(json.results);
      });
  }, [query]);

  const MovieList = () => {
    return data
      ? Object.keys(data).map(key => (
          <li key={data[key].id}>
            {data[key].title}
            <img
              src={`http://image.tmdb.org/t/p/w92/${data[key].poster_path}`}
              alt={`Poster for '${data[key].title}'`}
            />
          </li>
        ))
      : null;
  };

  return (
    <div className="App">
      <input
        style={{
          width: '92vw',
          height: '2rem',
          border: '2px solid grey',
          margin: '2vw',
          padding: '0.25rem',
          fontSize: '1.5rem'
        }}
        onChange={e => setQuery(e.target.value)}
        type="text"
      />
      <input type="button" value="log" onClick={() => console.log(data)} />
      <ul>
        <MovieList />
      </ul>
    </div>
  );
}

export default App;

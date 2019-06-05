import React, { useState, useEffect } from 'react';
import './App.css';

const Search = ({ handleChange }) => (
  <input
    onChange={handleChange}
    type="text"
    placeholder="Search for movie, tv or person..."
  />
);

const ResultsList = props => {
  const data = props.data;
  // console.log(data)
  return data
    ? Object.keys(data).map(key =>
        data[key].poster_path || data[key].profile_path ? (
          <figure key={data[key].id}>
            <img
              src={`http://image.tmdb.org/t/p/w154/${data[key].poster_path ||
                data[key].profile_path}`}
              alt={`${data[key].title || data[key].name}`}
            />
            <figcaption>{data[key].title || data[key].name}</figcaption>
          </figure>
        ) : null
      )
    : null;
};

function App() {
  const [data, setData] = useState({});

  const [query, setQuery] = useState('Marvel');

  const api_key = '1589b24269473d89b7da6c747d52692a';

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${
        query.length ? query : ' '
      }&page=1&api_key=${api_key}`
    )
      .then(response => response.json())
      .then(json => {
        setData(json.results);
      });
  }, [query]);

  const handleChange = e => setQuery(e.target.value);

  return (
    <div className="App">
      <Search handleChange={handleChange} />
      <div id="ResultsContainer">
        <ResultsList data={data} />
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import Search from './Search';
import Navigation from './Navigation';
import { ResultsList, ResultsContainer } from './ResultsList';

export const Context = React.createContext();

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

const AppRouter = () => {
  const [movieID, setMovieID] = useState();

  return (
    <Router>
      <Context.Provider value={{ movieID, setMovieID }}>
        {/* <Link to="/">&larr; go back</Link> */}
        {/* <Link to={`/details/`}>details of movie</Link> */}
        {/* <input type="text" onChange={e => setMovieID(e.target.value)} value={movieID}></input> */}
        {/* #TODO: change to component={Component}  */}
        <Route
          path="/"
          exact
          component={() => {
            return <App movieID={movieID} setMovieID={setMovieID} />;
          }}
        />
        <Route
          path={`/details/`}
          component={() => {
            return <Details movieID={movieID} setMovieID={setMovieID} />;
          }}
        />
      </Context.Provider>
    </Router>
  );
};

const App = ({ className }) => {
  const [data, setData] = useState({});
  const [query, setQuery] = useState('tarantino');
  const [page, setPage] = useState(1);
  const api_key = '1589b24269473d89b7da6c747d52692a';

  useEffect(() => {
    const sendRequest = () => {
      fetch(
        `https://api.themoviedb.org/3/search/multi?query=${
          query.length ? query : ' '
        }&page=${page}&api_key=${api_key}`
      )
        .then(response => response.json())
        .then(json => {
          setData(json);
        });
    };
    sendRequest();
  }, [page, query]);

  const handleChange = e => {
    setQuery(e.target.value);
    setPage(1);
    // console.log(data.results);
  };

  const changePage = change => {
    setPage(page + change);
    window.scrollTo(0, 0);
  };

  return (
    <div className={className}>
      <GlobalStyle />
        <Search handleChange={handleChange} />
        {/* #TODO: remove top navigation */}
        <Navigation data={data} page={page} changePage={changePage} />
        <ResultsContainer>
          <ResultsList data={data.results} />
        </ResultsContainer>
        {/* <Navigation /> */}
    </div>
  );
};

export default AppRouter;
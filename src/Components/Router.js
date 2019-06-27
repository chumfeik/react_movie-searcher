import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Details from './Details';

export const Context = React.createContext();

const AppRouter = () => {
  const [movieID, setMovieID] = useState();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('tarantino');
  const state = { movieID, setMovieID, query, setQuery, page, setPage }

  return (
    <Router>
      <Context.Provider value={state}>
        {/* #TODO: change to component={Component}  */}
        <Route
          path="/"
          exact
          component={() => {
            return <App query={query} page={page} />;
          }}
        />
        <Route
          path={`/details/`}
          component={() => {
            return <Details movieID={movieID} />;
          }}
        />
      </Context.Provider>
    </Router>
  );
};

export default AppRouter;

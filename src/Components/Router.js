import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Details from './Details';

export const Context = React.createContext();

const AppRouter = () => {
  const [movieID, setMovieID] = useState();

  const [query, setQuery] = useState('tarantino');

  return (
    <Router>
      <Context.Provider value={{ movieID, setMovieID, query, setQuery }}>
        {/* #TODO: change to component={Component}  */}
        <Route
          path="/"
          exact
          component={() => {
            return <App query={query} />;
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

export default AppRouter;

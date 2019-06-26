import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Details from './Details';

export const Context = React.createContext();

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

export default AppRouter;

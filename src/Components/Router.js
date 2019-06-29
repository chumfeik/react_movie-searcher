import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Context} from './State';
import SearchPage from './SearchPage';
import DetailsPage from './DetailsPage';

const AppRouter = () => {
  const state = React.useContext(Context);

  return (
    <Router>
      <Context.Provider value={state}>
        {/* #TODO: change to component={Component}  */}
        <Route
          path="/"
          exact
          component={() => {
            return <SearchPage query={state.query} page={state.page} />;
          }}
        />
        <Route
          path={`/details/`}
          component={() => {
            return <DetailsPage movieID={state.movieID} />;
          }}
        />
      </Context.Provider>
    </Router>
  );
};

export default AppRouter;

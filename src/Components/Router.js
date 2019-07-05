import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import DetailsPage from './Details/DetailsPage';

const AppRouter = () => (
  <Router>
    <Route path="/" exact component={SearchPage} />
    <Route path="/details/" component={DetailsPage} />
  </Router>
);

export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import SearchPage from './MainPage/SearchPage';
import DetailsPage from './Details/DetailsPage';

const AppRouter = () => (
  <Router>
    <GlobalStyle />
    <Route path="/" exact component={SearchPage} />
    <Route path="/details/" component={DetailsPage} />
  </Router>
);

export default AppRouter;

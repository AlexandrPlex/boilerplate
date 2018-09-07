// @flow

import 'babel-polyfill';
import React from 'react';
import {
  Router, Route, browserHistory,
} from 'react-router';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const Routers = () => (
  <React.Fragment>
    <Router history={browserHistory}>
      <Route path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Router>
  </React.Fragment>
);

export default Routers;

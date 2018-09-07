// @flow

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routers from './Routers';

const decumentGetElementById = document.getElementById('root');
if (decumentGetElementById) {
  ReactDOM.render(
    <Fragment>
      <Routers />
    </Fragment>, decumentGetElementById
  );
}

import React from 'react';
import ReactDOM from 'react-dom';
import { log } from '@casino/core';

import './global.scss';

import { App } from 'containers';

log();

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

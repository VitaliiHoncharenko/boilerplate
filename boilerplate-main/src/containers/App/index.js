import React from 'react';
import { hot } from 'react-hot-loader';
import { AuthContainer } from '@casino/core';

import { Header } from 'components';

import { general } from './app.scss';

const AppComponent = () => (
  <>
    <Header title="Hello from boilerplate template" />
    <div className={general}>
      hello from body
      <AuthContainer />
    </div>
  </>
);

export const App = hot(module)(AppComponent);

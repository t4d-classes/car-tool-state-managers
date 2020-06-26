import React from 'react';
import ReactDOM from 'react-dom';

import { CarStoreProvider } from './stores/carStore';
import { CarToolContainer } from './containers/CarToolContainer';

ReactDOM.render(
  <CarStoreProvider>
    <CarToolContainer />
  </CarStoreProvider>,
  document.querySelector('#root'),
);

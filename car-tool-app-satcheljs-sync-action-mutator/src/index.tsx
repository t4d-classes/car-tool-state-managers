import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';

import { CarToolContainer } from './containers/CarToolContainer';
import { getCarToolStore } from './stores/CarToolStore';
import { CarToolStoreContext } from './contexts';
import './mutators/cars';

import 'mobx-react-lite/batchingForReactDom';

configure({ enforceActions: 'always' });


ReactDOM.render(
  <CarToolStoreContext.Provider value={getCarToolStore()}>
    <CarToolContainer />
  </CarToolStoreContext.Provider>,
  document.querySelector('#root'),    
);


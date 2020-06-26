import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { carReducer } from '../reducers/carReducer';
import { carsSaga } from '../sagas/cars';

const sagaMiddleware = createSagaMiddleware();

export const carStore = createStore(
  carReducer,
  // action pipeline middleware
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(carsSaga);
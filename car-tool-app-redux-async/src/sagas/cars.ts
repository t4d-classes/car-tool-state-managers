import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';

import {
  REFRESH_CARS_REQUEST_ACTION,
  APPEND_CAR_REQUEST_ACTION,
  createRefreshCarsRequestAction,
  createRefreshCarsDoneAction,
  CarAction, CarIdAction, DELETE_CAR_REQUEST_ACTION, REPLACE_CAR_REQUEST_ACTION
} from '../actions/carActions';

export function* refreshCars() {

  const response = yield call(fetch, 'http://localhost:3060/cars');
  const cars = yield call(response.json.bind(response));
  yield put(createRefreshCarsDoneAction(cars));
}

export function* appendCar(action: CarAction) {

  yield call(
    fetch,
    'http://localhost:3060/cars',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload.car),
    },
  );

  yield put(createRefreshCarsRequestAction());
}

export function* replaceCar(action: CarAction) {

  yield call(
    fetch,
    'http://localhost:3060/cars/' + action.payload.car.id,
    {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload.car),
    },
  );

  yield put(createRefreshCarsRequestAction());
}

export function* deleteCar(action: CarIdAction) {

  yield call(
    fetch,
    'http://localhost:3060/cars/' + action.payload.carId,
    {
      method: 'DELETE',
    },
  );

  yield put(createRefreshCarsRequestAction());
}

export function* carsSaga() {

  yield takeLatest(REFRESH_CARS_REQUEST_ACTION, refreshCars);
  yield takeEvery(APPEND_CAR_REQUEST_ACTION, appendCar);
  yield takeEvery(REPLACE_CAR_REQUEST_ACTION, replaceCar);
  yield takeEvery(DELETE_CAR_REQUEST_ACTION, deleteCar);

}
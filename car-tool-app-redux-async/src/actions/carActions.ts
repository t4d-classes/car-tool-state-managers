import { Action } from 'redux';

import { Car } from '../models/Car';

export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';
export const APPEND_CAR_REQUEST_ACTION = 'APPEND_CAR_REQUEST';
export const REPLACE_CAR_REQUEST_ACTION = 'REPLACE_CAR_REQUEST';
export const DELETE_CAR_REQUEST_ACTION = 'DELETE_CAR_REQUEST';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';

export interface CarsAction extends Action {
  payload: {
    cars: Car[],
  },
}

export interface CarAction extends Action {
  payload: {
    car: Car,
  },
}

export interface CarIdAction extends Action {
  payload: {
    carId: number,
  },
}

type ActionCreator = () => Action;

type CarsActionCreator = (cars: Car[]) => CarsAction;

type CarActionCreator = (car: Car) => CarAction;

type CarIdActionCreator = (carId: number) => CarIdAction;

export const createRefreshCarsRequestAction: ActionCreator = () => ({
  type: REFRESH_CARS_REQUEST_ACTION,
});

export const createRefreshCarsDoneAction: CarsActionCreator = cars => ({
  type: REFRESH_CARS_DONE_ACTION, payload: { cars },
});

export const createAppendCarRequestAction: CarActionCreator = car => ({
   type: APPEND_CAR_REQUEST_ACTION, payload: { car },
});

export const createReplaceCarRequestAction: CarActionCreator = car => ({
  type: REPLACE_CAR_REQUEST_ACTION, payload: { car },
});

export const createDeleteCarRequestAction: CarIdActionCreator = carId => ({
  type: DELETE_CAR_REQUEST_ACTION, payload: { carId },
});

export const createEditCarAction: CarIdActionCreator = carId => ({
  type: EDIT_CAR_ACTION, payload: { carId },
});

export const createCancelCarAction: ActionCreator = () => ({
  type: CANCEL_CAR_ACTION,
});

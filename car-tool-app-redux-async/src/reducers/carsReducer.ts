import { Reducer } from 'redux';

import { Car } from '../models/Car';
import {
  CarsAction,
  REFRESH_CARS_DONE_ACTION
} from '../actions/carActions';

export type CarsReducerAction = CarsAction;

type CarsReducer = Reducer<Car[], CarsReducerAction>;

export const carsReducer: CarsReducer = (cars = [], action) => {

  switch (action.type) {
    case REFRESH_CARS_DONE_ACTION:
      return action.payload.cars;
    default:
      return cars;
  }

};
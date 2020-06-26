import { Reducer } from 'redux';

import {
  CarIdAction, REFRESH_CARS_DONE_ACTION, EDIT_CAR_ACTION, CANCEL_CAR_ACTION,
} from '../actions/carActions';

export type EditCarIdReducerAction = CarIdAction;

type CarsReducer = Reducer<number, EditCarIdReducerAction>;

export const editCarIdReducer: CarsReducer = (editCarId = -1, action) => {

  if ([
    REFRESH_CARS_DONE_ACTION, CANCEL_CAR_ACTION,
  ].includes(action.type)) {
    return -1;
  }

  if (EDIT_CAR_ACTION === action.type) {
    return action.payload.carId;
  }

  return editCarId;
};
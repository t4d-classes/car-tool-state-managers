import { combineReducers } from 'redux';

import { Car } from '../models/Car';

import { carsReducer } from './carsReducer';
import { editCarIdReducer } from './editCarIdReducer';

export interface CarState {
  cars: Car[],
  editCarId: number;
}

export const carReducer = combineReducers<CarState>({
  cars: carsReducer,
  editCarId: editCarIdReducer,
});
import { action } from 'satcheljs';

import { Car } from '../models/Car';

export const REFRESH_CARS_REQUEST = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE = 'REFRESH_CARS_DONE';
export const APPEND_CAR_REQUEST = 'APPEND_CAR_REQUEST';
export const REPLACE_CAR_REQUEST = 'REPLACE_CAR_REQUEST';
export const REMOVE_CAR_REQUEST = 'REMOVE_CAR_REQUEST';
export const EDIT_CAR = 'EDIT_CAR';
export const CANCEL_CAR = 'CANCEL_CAR';

export const refreshCarsRequest = action(REFRESH_CARS_REQUEST, () => ({}));
export const refreshCarsDone = action(REFRESH_CARS_DONE, (cars: Car[]) => ({ cars }));
export const appendCarRequest = action(APPEND_CAR_REQUEST, (car: Car) => ({ car }));
export const replaceCarRequest = action(REPLACE_CAR_REQUEST, (car: Car) => ({ car }));
export const removeCarRequest = action(REMOVE_CAR_REQUEST, (carId: number) => ({ carId })); 
export const editCar = action(EDIT_CAR, (carId: number) => ({ carId })); 
export const cancelCar = action(CANCEL_CAR, () => ({})); 

import { action } from 'satcheljs';

import { Car } from '../models/Car';

export const APPEND_CAR = 'APPEND_CAR';
export const REPLACE_CAR = 'REPLACE_CAR';
export const REMOVE_CAR = 'REMOVE_CAR';
export const EDIT_CAR = 'EDIT_CAR';
export const CANCEL_CAR = 'CANCEL_CAR';

export const appendCar = action(APPEND_CAR, (car: Car) => ({ car }));
export const replaceCar = action(REPLACE_CAR, (car: Car) => ({ car }));
export const removeCar = action(REMOVE_CAR, (carId: number) => ({ carId })); 
export const editCar = action(EDIT_CAR, (carId: number) => ({ carId })); 
export const cancelCar = action(CANCEL_CAR, () => ({})); 

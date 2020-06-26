import { mutatorAction } from 'satcheljs';

import { Car } from '../models/Car';
import { getCarToolStore } from '../stores/CarToolStore';

export type AddCar = (car: Car) => void;
export type SaveCar = (car: Car) => void;
export type DeleteCar = (carId: number) => void;
export type EditCar = (carId: number) => void;
export type CancelCar = () => void;

const store = getCarToolStore();

export const appendCar: AddCar = mutatorAction(
  'APPEND_CAR',
  function appendCar(car: Car) {
    store.cars.push({
      ...car,
      id: Math.max(...store.cars.map(c => c.id) as [], 0) + 1,
    });
    store.editCarId = -1;
  },
);

export const replaceCar: SaveCar = mutatorAction(
  'REPLACE_CAR',
  function replaceCar(car: Car) {
    const carIndex = store.cars.findIndex(c => c.id === car.id);
    store.cars[carIndex] = car;
    store.editCarId = -1;
  },
);

export const removeCar: DeleteCar = mutatorAction(
  'REMOVE_CAR',
  function removeCar(carId: number) {
    const carIndex = store.cars.findIndex(c => c.id === carId);
    store.cars.splice(carIndex, 1);
    store.editCarId = -1;
  },
);

export const editCar: EditCar = mutatorAction(
  'EDIT_CAR',
  function editCar(carId: number) {
    store.editCarId = carId;
  },
);

export const cancelCar: CancelCar = mutatorAction(
  'CANCEL_CAR',
  function cancelCar() {
    store.editCarId = -1;
  },
);

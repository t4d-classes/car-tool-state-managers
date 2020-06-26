import { mutator } from 'satcheljs';
import { getCarToolStore } from '../stores/CarToolStore';

import { Car } from '../models/Car';
import { refreshCarsDone, editCar, cancelCar } from '../actions/cars';

// this pulls a global store
const store = getCarToolStore();

mutator(refreshCarsDone, function appendCar({ cars }: { cars: Car[] }) {
  store.cars = cars;
  store.editCarId = -1;
});

mutator(editCar, function editCar({ carId }) {
  store.editCarId = carId;
});

mutator(cancelCar, function cancelCar() {
  store.editCarId = -1;
});
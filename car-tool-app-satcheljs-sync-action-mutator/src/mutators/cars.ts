import { mutator } from 'satcheljs';
import { getCarToolStore } from '../stores/CarToolStore';

import { appendCar, replaceCar, removeCar, editCar, cancelCar } from '../actions/cars';

// this pulls a global store
const store = getCarToolStore();

mutator(appendCar, function appendCar({ car }) {
  store.cars.push({
    ...car,
    id: Math.max(...store.cars.map(c => c.id) as [], 0) + 1,
  });
  store.editCarId = -1;
});

mutator(replaceCar, function replaceCar({ car }) {
  const carIndex = store.cars.findIndex(c => c.id === car.id);
  store.cars[carIndex] = car;
  store.editCarId = -1;
});

mutator(removeCar, function removeCar({ carId }) {
  const carIndex = store.cars.findIndex(c => c.id === carId);
  store.cars.splice(carIndex, 1);
  store.editCarId = -1;
});

mutator(editCar, function editCar({ carId }) {
  store.editCarId = carId;
});

mutator(cancelCar, function cancelCar() {
  store.editCarId = -1;
});
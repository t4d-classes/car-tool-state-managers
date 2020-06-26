import { orchestrator } from 'satcheljs';

import { CarsService } from '../services/CarsService';

import {
  refreshCarsRequest, appendCarRequest,
  replaceCarRequest, removeCarRequest,
  refreshCarsDone,
} from '../actions/cars';


const carsSvc = new CarsService('http://localhost:3060');

orchestrator(refreshCarsRequest, async () => {
    const cars = await carsSvc.allCars();
    refreshCarsDone(cars);
});

orchestrator(appendCarRequest, async ({ car }) => {
  await carsSvc.appendCar(car);
  refreshCarsRequest();
});

orchestrator(replaceCarRequest, async ({ car }) => {
  await carsSvc.replaceCar(car);
  refreshCarsRequest();
});

orchestrator(removeCarRequest, async ({ carId }) => {
  await carsSvc.removeCar(carId);
  refreshCarsRequest();
});

import { createStore } from 'satcheljs';

import { Car } from '../models/Car';

export type CarToolStore = {
  cars: Car[],
  editCarId: number,
};

export const getCarToolStore = createStore<CarToolStore>(
    'carToolStore',
    {
      cars: [
        { id: 1, make: 'Ford', model: 'Fusion', year: 2020, color: 'blue', price: 45000 },
        { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 135000 },
      ],
      editCarId: -1,
    },
);
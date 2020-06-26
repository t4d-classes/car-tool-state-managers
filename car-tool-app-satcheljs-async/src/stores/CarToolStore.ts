import { createStore } from 'satcheljs';

import { Car } from '../models/Car';

export type CarToolStore = {
  cars: Car[],
  editCarId: number,
};

export const getCarToolStore = createStore<CarToolStore>(
    'carToolStore',
    {
      cars: [],
      editCarId: -1,
    },
);
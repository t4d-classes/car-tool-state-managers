import { call, put } from 'redux-saga/effects';

import { Car } from '../models/Car';

import {
  refreshCars,
  appendCar,
  replaceCar,
  deleteCar,
} from './cars';

import {
  createRefreshCarsRequestAction,
  createRefreshCarsDoneAction,
  createAppendCarRequestAction,
  createReplaceCarRequestAction,
  createDeleteCarRequestAction,
} from '../actions/carActions';

describe('Car Saga', () => {

  test('Refresh Cars', () => {
    const iterator = refreshCars();

    expect(iterator.next().value).toEqual(
      call(fetch, 'http://localhost:3060/cars'),
    );

    const cars: Car[] = [
      {
        id: 1,
        make: 'Ford',
        model: 'Fusion Hybrid',
        year: 2019,
        color: 'red',
        price: 100,
      },
    ];

    iterator.next({ json: () => Promise.resolve(cars) });

    expect(iterator.next(cars).value).toEqual(
      put(createRefreshCarsDoneAction(cars)),
    );

  });

  test('Append Car', () => {

    const car: Car = {
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2019,
      color: 'red',
      price: 100,
    };

    const iterator = appendCar(createAppendCarRequestAction(car));

    expect(iterator.next().value).toEqual(
      call(
        fetch,
        'http://localhost:3060/cars',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(car),
        },
      ),
    );

    car.id = 1;

    expect(iterator.next({ data: car }).value).toEqual(
      put(createRefreshCarsRequestAction()),
    );
  });

  test('Replace Car', () => {

    const car: Car = {
      id: 1,
      make: 'Ford',
      model: 'Fusion Hybrid',
      year: 2019,
      color: 'red',
      price: 100,
    };

    const iterator = replaceCar(createReplaceCarRequestAction(car));

    expect(iterator.next().value).toEqual(
      call(
        fetch,
        'http://localhost:3060/cars/' + encodeURIComponent(car.id as number),
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(car),
        },
      ),
    );

    expect(iterator.next({ data: car }).value).toEqual(
      put(createRefreshCarsRequestAction()),
    );
  });

  test('Delete Car', () => {

    const carId = 1;

    const iterator = deleteCar(createDeleteCarRequestAction(carId));

    expect(iterator.next().value).toEqual(
      call(
        fetch,
        'http://localhost:3060/cars/' + encodeURIComponent(carId),
        {
          method: 'DELETE',
        },
      ),
    );

    expect(iterator.next().value).toEqual(
      put(createRefreshCarsRequestAction()),
    );
  });

});

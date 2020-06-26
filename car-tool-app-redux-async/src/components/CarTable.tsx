import React, { FC } from 'react';

import { Car } from '../models/Car';

import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

export interface CarTableProps { 
  cars: Car[];
  editCarId: number;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
}

export const CarTable: FC<CarTableProps> = (props) => {

  return (
    <form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th><label htmlFor="edit-make-input">Make</label></th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.cars.map(car => car.id === props.editCarId
            ? <CarEditRow key={car.id} car={car} onSaveCar={props.onSaveCar} onCancelCar={props.onCancelCar} />
            : <CarViewRow key={car.id} car={car} onEditCar={props.onEditCar} onDeleteCar={props.onDeleteCar} />)}
        </tbody>
      </table>
    </form>
  );

}
import React, { FC } from 'react';

import { validCarId } from '../utils';
import { Car } from '../models/Car';

export interface CarViewRowProps { 
  car: Car;
  onEditCar: (carId: number) => void;
  onDeleteCar: (carId: number) => void;
}

export const CarViewRow: FC<CarViewRowProps> = ({ car, onEditCar, onDeleteCar }) => {

  const deleteCar = () => {

    if (typeof car.id !== "undefined") {
      onDeleteCar(car.id);
    }
  };

  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        <button type="button" onClick={() => car.id && onEditCar(car.id)}>Edit</button>
        {validCarId(car.id) && <button type="button" onClick={deleteCar}>
          Delete
        </button>}
      </td>
    </tr>
  );

}
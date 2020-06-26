import React from 'react';

import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

export const CarTable = ({
  cars, editCarId,
  onEditCar: editCar, onDeleteCar: deleteCar,
  onSaveCar: saveCar, onCancelCar: cancelCar,
}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(c =>
          c.id === editCarId
            ? <CarEditRow key={c.id} car={c}
                onSaveCar={saveCar} onCancelCar={cancelCar} />
            : <CarViewRow key={c.id} car={c}
                onEditCar={editCar} onDeleteCar={deleteCar} />)}
      </tbody>
    </table>
  );
};
import React, { FC } from 'react';

import { Car } from '../models/Car';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export interface CarToolProps {
  cars: Car[];
  editCarId: number;
  onRefreshCars: () => void;
  onAppendCar: (car: Car) => void;
  onReplaceCar: (car: Car) => void;
  onDeleteCar: (carId: number) => void;
  onEditCar: (carId: number) => void;
  onCancelCar: () => void;
}

export const CarTool: FC<CarToolProps> = (props) => {

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={props.cars} editCarId={props.editCarId}
        onEditCar={props.onEditCar} onDeleteCar={props.onDeleteCar}
        onCancelCar={props.onCancelCar} onSaveCar={props.onReplaceCar} />
      <CarForm buttonText="Add Car" onSubmitCar={props.onAppendCar} />
    </>
  );
};
import React, { FC, useState, ChangeEvent } from 'react';

import { Car } from '../models/Car';
import { blankToNaN, nanToBlank } from '../utils';
import { useForm } from '../hooks/useForm';

interface CarEditRowProps {
  car: Car;
  onSaveCar: (car: Car) => void;
  onCancelCar: () => void;
}

interface CarEditRowState {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  [ x: string ]: number | string;
}

const getInitialCarEditRowState: (car: Car) => CarEditRowState = (car: Car) => ({
  make: car.make,
  model: car.model,
  year: car.year,
  color: car.color,
  price: car.price,
})


export const CarEditRow: FC<CarEditRowProps> = (props) =>  {

  const [ carForm, change ] = useForm(getInitialCarEditRowState(props.car));

  const saveCar = () => {
    props.onSaveCar({
      ...carForm,
      id: props.car.id,
    });
  }

  return <tr>
    <td>{props.car.id}</td>
    <td><input type="text" id="edit-make-input" value={carForm.make} name="make" onChange={change} /></td>
    <td><input type="text" value={carForm.model} name="model" onChange={change} /></td>
    <td><input type="number" value={nanToBlank(carForm.year)} name="year" onChange={change} /></td>
    <td><input type="text" value={carForm.color} name="color" onChange={change} /></td>
    <td><input type="number" value={nanToBlank(carForm.price)} name="price" onChange={change} /></td>
    <td>
      <button type="button" onClick={saveCar}>Save</button>
      <button type="button" onClick={props.onCancelCar}>Cancel</button>
    </td>
  </tr>;

};

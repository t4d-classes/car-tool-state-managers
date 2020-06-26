import React, { ChangeEvent } from 'react';

import { Car } from '../models/Car';
import { blankToNaN, nanToBlank } from '../utils';

type HTMLFormControls = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

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


export class CarEditRow extends React.Component<CarEditRowProps, CarEditRowState>  {

  constructor(props: CarEditRowProps) {
    super(props);

    this.state = getInitialCarEditRowState(props.car);

    // this.change = this.change.bind(this);
    // this.saveCar = this.saveCar.bind(this);
  }

  change = (e: ChangeEvent<HTMLFormControls>) => {
    this.setState({
      [ e.target.name ]: e.target.type === 'number'
        ? blankToNaN(e.target.value)
        : e.target.value,
    });
  };

  saveCar = () => {
    this.props.onSaveCar({
      ...this.state,
      id: this.props.car.id,
    });
  }

  render() {

    return <tr>
      <td>{this.props.car.id}</td>
      <td><input type="text" id="edit-make-input" value={this.state.make} name="make" onChange={this.change} /></td>
      <td><input type="text" value={this.state.model} name="model" onChange={this.change} /></td>
      <td><input type="number" value={nanToBlank(this.state.year)} name="year" onChange={this.change} /></td>
      <td><input type="text" value={this.state.color} name="color" onChange={this.change} /></td>
      <td><input type="number" value={nanToBlank(this.state.price)} name="price" onChange={this.change} /></td>
      <td>
        <button type="button" onClick={this.saveCar}>Save</button>
        <button type="button" onClick={this.props.onCancelCar}>Cancel</button>
      </td>
    </tr>;
  }

};

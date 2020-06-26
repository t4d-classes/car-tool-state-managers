import React from 'react';

export class CarEditRow extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = { ...props.car };

    // this.change = this.change.bind(this);
    // this.saveCar = this.saveCar.bind(this);

    console.dir(this);
  }

  change = (e) => {
    this.setState({
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value) : e.target.value,
    });
  }
  
  saveCar = () => {
    this.props.onSaveCar({ ...this.state, id: this.props.car.id });
  }

  render() {
    return (
      <tr>
        <td>{this.props.car.id}</td>
        <td><input type="text" name="make" value={this.state.make} onChange={this.change} /></td>
        <td><input type="text" name="model" value={this.state.model} onChange={this.change} /></td>
        <td><input type="number" name="year" value={this.state.year} onChange={this.change} /></td>
        <td><input type="text" name="color" value={this.state.color} onChange={this.change} /></td>
        <td><input type="number" name="price" value={this.state.price} onChange={this.change} /></td>
        <td>
          <button type="button" onClick={this.saveCar}>Save</button>
          <button type="button" onClick={this.props.onCancelCar}>Cancel</button>
        </td>
      </tr>
    );
  }


};
import React, { useEffect } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({
  cars, editCarId, errorMessage,
  onAddCar, onSaveCar,
  onDeleteCar, onEditCar,
  onCancelCar, onRefreshCars,
}) => {

  useEffect(() => {

    onRefreshCars();

  }, [ onRefreshCars ]);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      {errorMessage && <div>{errorMessage}</div>}
      <button type="button" onClick={onRefreshCars}>Refresh</button>
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={onEditCar} onDeleteCar={onDeleteCar}
        onSaveCar={onSaveCar} onCancelCar={onCancelCar} />
      <CarForm onSubmitCar={onAddCar} buttonText="Add Car" />
    </>
  );

};

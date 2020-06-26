import React, { useContext, useEffect } from 'react';
import { useObserver  } from 'mobx-react-lite';

import { Car } from '../models/Car';
import { CarToolStoreContext } from '../contexts';
import { refreshCarsRequest, appendCarRequest, replaceCarRequest, removeCarRequest, editCar, cancelCar } from '../actions/cars';

type AddCar = (car: Car) => void;
type SaveCar = (car: Car) => void;
type DeleteCar = (carId: number) => void;
type EditCar = (carId: number) => void;
type CancelCar = () => void;

export interface PresentationalComponentProps {
  cars: Car[];
  editCarId: number;
  onAddCar: AddCar;
  onSaveCar: SaveCar;
  onDeleteCar: DeleteCar;
  onEditCar: EditCar;
  onCancelCar: CancelCar;  
}

export const useCarToolStore = (
  PresentationalComponent: React.ComponentType<PresentationalComponentProps>
) => {

  const store = useContext(CarToolStoreContext);

  useEffect(() => {
    refreshCarsRequest();
  }, [])

  return useObserver(() => {

    const carToolProps = {
      cars: store.cars.slice(),
      editCarId: store.editCarId,
      onAddCar: appendCarRequest,
      onSaveCar: replaceCarRequest,
      onDeleteCar: removeCarRequest,
      onEditCar: editCar,
      onCancelCar: cancelCar,
    };
  
    return <PresentationalComponent {...carToolProps} />;

  });

};
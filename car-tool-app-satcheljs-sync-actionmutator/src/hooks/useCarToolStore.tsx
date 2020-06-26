import React, {  useContext } from 'react';
import { useObserver  } from 'mobx-react-lite';

import { Car } from '../models/Car';
import { CarToolStoreContext } from '../contexts';

import {
  appendCar, replaceCar, removeCar, editCar, cancelCar,
  AddCar, SaveCar, DeleteCar, EditCar, CancelCar,
} from '../mutatorActions/cars';

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

  return useObserver(() => {

    const carToolProps = {
      cars: store.cars.slice(),
      editCarId: store.editCarId,
      onAddCar: appendCar,
      onSaveCar: replaceCar,
      onDeleteCar: removeCar,
      onEditCar: editCar,
      onCancelCar: cancelCar,
    };
  
    return <PresentationalComponent {...carToolProps} />;

  });

};
import React, { createContext, useState, useContext, useCallback } from 'react';

import { Cars } from '../services/cars';

const carsSvc = new Cars('http://localhost:3060/cars');

const CarStoreContext = createContext({
  cars: [],
  editCarId: -1,
});

export const CarStoreProvider = ({ children }) => {

  const [ cars, setCars ] = useState([] /* carsSvc.all() */);
  const [ editCarId, setEditCarId ] = useState(-1);
  const [ errorMessage, setErrorMessage ] = useState('');

  const refreshCars = useCallback(async () => {
    const cars = await carsSvc.all()
    setCars(cars);
  }, []);

  const carStoreContextValue = {
    cars,
    editCarId,
    errorMessage,
    onRefreshCars: useCallback(async () => {
      try {
        await refreshCars();
      } catch (err) {
        setErrorMessage(err.message);
      }
    }, [ refreshCars ]),
    // async onAddCar(car) {
    //   await carsSvc.append(car);
    //   const cars = await carsSvc.all()
    //   setCars(cars);
    //   setEditCarId(-1);
    // },
    onAddCar: useCallback((car) => {
      return carsSvc
        .append(car)
        .then(() => refreshCars())
        .then(() => {
          setEditCarId(-1);
        });
    }, [ refreshCars ]),
    onSaveCar: useCallback(async (car) => {
      await carsSvc.replace(car);
      await refreshCars();
      setEditCarId(-1);
    }, [ refreshCars ]),
    onDeleteCar: useCallback(async (carId) => {
      await carsSvc.remove(carId);
      await refreshCars();
      setEditCarId(-1);
    }, [ refreshCars ]),
    onEditCar: useCallback((carId) => {
      setEditCarId(carId);
    }, [ ]),
    onCancelCar: useCallback(() => {
      setEditCarId(-1);
    }, [ ]),
  };

  return (
    <CarStoreContext.Provider value={carStoreContextValue}>
      {children}
    </CarStoreContext.Provider>
  );

};

export const createCarToolContainer = (PresentationalComponent) => {

  return <CarStoreContext.Consumer>
    {value => <PresentationalComponent {...value} />}
  </CarStoreContext.Consumer>;

};


export const useCarStore = () => {
  return useContext(CarStoreContext);
};
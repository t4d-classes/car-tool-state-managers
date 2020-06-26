import React, { FC, useMemo, useEffect} from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { Car } from '../models/Car';
import { CarState } from '../reducers/carReducer';
import { CarTool } from '../components/CarTool';
import {
  createRefreshCarsRequestAction, createAppendCarRequestAction,
  createReplaceCarRequestAction, createDeleteCarRequestAction,
  createEditCarAction, createCancelCarAction,
} from '../actions/carActions';

const useMapStateToProps = () => {
  return {
    cars: useSelector<CarState, Car[]>(state => state.cars),
    editCarId: useSelector<CarState, number>(state => state.editCarId),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({
    onRefreshCars: createRefreshCarsRequestAction,
    onAppendCar: createAppendCarRequestAction,
    onReplaceCar: createReplaceCarRequestAction,
    onDeleteCar: createDeleteCarRequestAction,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
  }, dispatch);
};

export const CarToolContainer: FC<{}> = (props) => {

  const dispatch = useDispatch();
  const dispatchProps = useMemo(() => mapDispatchToProps(dispatch), [ dispatch ])
  const { onRefreshCars } = dispatchProps;

  useEffect(() => {
    onRefreshCars();
  }, [ onRefreshCars ])

  return <CarTool {...props} {...useMapStateToProps()}
    {...dispatchProps} />;
};
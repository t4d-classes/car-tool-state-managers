import React from 'react';

import { useCarStore,
  // createCarToolContainer
} from '../stores/carStore';

import { CarTool } from '../components/CarTool';

export const CarToolContainer = () => {
  const carStoreProps = useCarStore();
  return <CarTool {...carStoreProps} />;
};

// export const CarToolContainer = createCarToolContainer(CarTool);
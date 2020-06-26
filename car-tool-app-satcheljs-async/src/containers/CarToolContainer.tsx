import { FC } from 'react';

import { useCarToolStore } from '../hooks/useCarToolStore';
import { CarTool } from '../components/CarTool';

export const CarToolContainer: FC = () => {
  return useCarToolStore(CarTool);
};
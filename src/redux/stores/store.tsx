import { configureStore } from '@reduxjs/toolkit';
import reducer, {CounterState} from '../reducers/counter';

export type RootState = {
  value: number;
};

export const store = configureStore({
  reducer: reducer
});

export default store;

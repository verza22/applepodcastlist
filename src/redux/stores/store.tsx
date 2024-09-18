import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers/app';

export type RootState = {
  podcastList: Podcast[]
  search: string
};

export const store = configureStore({
  reducer: reducer
});

export default store;

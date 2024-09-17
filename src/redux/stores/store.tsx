import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers/app';

export type RootState = {
  podcastList: Podcast[];
};

export const store = configureStore({
  reducer: reducer
});

export default store;

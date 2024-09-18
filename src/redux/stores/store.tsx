import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers/app';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

export type RootState = {
  podcastList: Podcast[]
  dateRequest: Date
  search: string
  loading: boolean
};

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };

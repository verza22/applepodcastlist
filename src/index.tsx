import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor  } from './redux/stores/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './app';
import Loading from './components/loading';

const rootElement = document.getElementById('root') as HTMLElement;

function Index() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Loading />
      </PersistGate>
    </Provider>
  );
}

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Index />);
} else {
  console.error('El elemento con id "root" no fue encontrado.');
}
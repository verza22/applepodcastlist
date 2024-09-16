import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app';
import { store } from './redux/stores/store';

const rootElement = document.getElementById('root') as HTMLElement;

function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Index />);
} else {
  console.error('El elemento con id "root" no fue encontrado.');
}
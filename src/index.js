import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './utils/store';
import { Provider } from 'react-redux';

// Création de la racine de rendu avec la nouvelle API
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
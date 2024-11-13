import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GlobalStyle } from './tokens/styles.globals.tsx';
import { AppConfigStoreProvider } from './store/AppConfigStore.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppConfigStoreProvider>
      <App />
    </AppConfigStoreProvider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GlobalStyle } from './tokens/styles.globals.tsx';
import { AppConfigStoreProvider } from './store/AppConfigStore.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './tokens/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* TODO: Agregar los estilos al theme */}
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppConfigStoreProvider>
        <App />
      </AppConfigStoreProvider>
    </ThemeProvider>
  </React.StrictMode>
);

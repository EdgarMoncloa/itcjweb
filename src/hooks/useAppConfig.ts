// src/hooks/useAppConfig.ts

import { useContext } from 'react';
import { AppConfigStore } from '../store/AppConfigStore';

// Hook personalizado para acceder al contexto
export const useAppConfig = () => {
  const context = useContext(AppConfigStore);

  if (!context) {
    throw new Error(
      'useAppConfig must be used within an AppConfigStoreProvider'
    );
  }

  return context;
};

// src/store/AppConfigStore.tsx

import { createContext, useState, ReactNode } from 'react';

// Define la forma de los datos que el contexto va a proporcionar
type transitionType = {
  'very-fast': 100;
  fast: 200;
  normal: 400;
  slow: 600;
  'very-slow': 1000;
};
interface AppConfigStoreType {
  /**
   * Type of transitions
   * - 'very-fast': 100ms
   * - 'fast': 200ms
   * - 'normal': 400ms
   * - 'slow': 600ms
   * - 'very-slow': 1000ms
   */
  transition: transitionType;
  setTransition: (transition: transitionType) => void;
}

// Crea el contexto con un valor inicial vacío
export const AppConfigStore = createContext<AppConfigStoreType | undefined>(
  undefined
);

interface AppConfigStoreProviderProps {
  children: ReactNode;
}

// Crea el proveedor que manejará el estado global
export const AppConfigStoreProvider = ({
  children,
}: AppConfigStoreProviderProps) => {
  // These transition values must be the same as the ones in globalStyle.tsx
  const [transition, setTransition] = useState<transitionType>({
    'very-fast': 100,
    fast: 200,
    normal: 400,
    slow: 600,
    'very-slow': 1000,
  });

  return (
    <AppConfigStore.Provider value={{ transition, setTransition }}>
      {children}
    </AppConfigStore.Provider>
  );
};

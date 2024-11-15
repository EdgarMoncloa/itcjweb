import { createContext, useState, ReactNode } from 'react';

type TransitionType = {
  'very-fast': 100;
  fast: 200;
  normal: 400;
  slow: 600;
  'very-slow': 1000;
};
type IconSizeType = {
  '--size-icon-xs': 4;
  '--size-icon-small': 8;
  '--size-icon-medium': 16;
  '--size-icon-large': 24;
  '--size-icon-xl': 32;
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
  transition: TransitionType;
  setTransition: (transition: TransitionType) => void;
  /**
   * Configuration for icon sizes.
   * - '--size-icon-xs': 4px
   * - '--size-icon-small': 8px
   * - '--size-icon-medium': 16px
   * - '--size-icon-large': 24px
   * - '--size-icon-xl': 32px
   */
  iconSize: IconSizeType;
  setIconSize: (iconSize: IconSizeType) => void;
}

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
  const defaultTransition: TransitionType = {
    'very-fast': 100,
    fast: 200,
    normal: 400,
    slow: 600,
    'very-slow': 1000,
  };
  const defaultIconSize: IconSizeType = {
    '--size-icon-xs': 4,
    '--size-icon-small': 8,
    '--size-icon-medium': 16,
    '--size-icon-large': 24,
    '--size-icon-xl': 32,
  };
  const [transition, setTransition] =
    useState<TransitionType>(defaultTransition);
  const [iconSize, setIconSize] = useState<IconSizeType>(defaultIconSize);

  return (
    <AppConfigStore.Provider
      value={{ transition, setTransition, iconSize, setIconSize }}
    >
      {children}
    </AppConfigStore.Provider>
  );
};

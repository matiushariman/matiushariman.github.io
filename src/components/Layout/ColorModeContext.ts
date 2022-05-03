import { createContext } from 'react';

export type ColorModeContextProps = {
  toggleColorMode?: () => void;
};

export const ColorModeContext = createContext<ColorModeContextProps>({ toggleColorMode: () => {} });

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, Palette } from '@mui/material/styles';
import * as React from 'react';

import { ColorModeContext } from './ColorModeContext';
import { Header } from './Header';

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const [mode, setMode] = React.useState<Palette['mode']>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        typography: {
          fontFamily: [
            'Ubuntu',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              elevation1: ({ theme }) => ({
                boxShadow: 'none',
                borderBottom: `1px solid ${theme.palette.divider}`,
              }),
            },
          },
        },
      }),
    [mode],
  );

  return (
    <Box sx={{ pt: 8 }}>
      <CssBaseline />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Header />
          <Box>{children}</Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Box>
  );
};

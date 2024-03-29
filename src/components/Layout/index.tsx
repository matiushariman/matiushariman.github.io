import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, Palette, lighten } from '@mui/material/styles';
import * as React from 'react';

import { ColorModeContext } from './ColorModeContext';
import Footer from './Footer';
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
          ...(mode === 'dark'
            ? {
                background: {
                  paper: '#0a192f',
                },
                divider: lighten('#0a192f', 0.2),
              }
            : {}),
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
          MuiAppBar: {
            styleOverrides: {
              colorDefault: ({ theme }) => ({
                ...(mode === 'light'
                  ? {
                      backgroundColor: '#fff',
                    }
                  : {}),
                borderBottom: `1px solid ${theme.palette.divider}`,
              }),
            },
          },
          MuiChip: {
            styleOverrides: {
              avatarColorPrimary: {
                backgroundColor: 'transparent',
              },
            },
          },
          MuiContainer: {
            styleOverrides: {
              root: ({ theme }) => ({
                [theme.breakpoints.up('md')]: {
                  padding: 96,
                  paddingTop: 32,
                },
                [theme.breakpoints.down('md')]: {
                  paddingTop: 32,
                  paddingBottom: 56,
                },
              }),
            },
          },
          MuiPaper: {
            styleOverrides: {
              elevation1: ({ theme }) => ({
                boxShadow: 'none',
                borderBottom: `1px solid ${theme.palette.divider}`,
              }),
            },
          },
          MuiTypography: {
            styleOverrides: {
              h1: ({ theme }) => ({
                [theme.breakpoints.up('md')]: {
                  fontSize: '4rem',
                },
                [theme.breakpoints.down('md')]: {
                  fontSize: '2.5rem',
                },
              }),
              h2: ({ theme }) => ({
                fontWeight: 'bold',
                [theme.breakpoints.up('md')]: {
                  fontSize: '1.75rem',
                },
                [theme.breakpoints.down('md')]: {
                  fontSize: '1.2rem',
                },
              }),
            },
          },
        },
      }),
    [mode],
  );

  return (
    <Box
      sx={(theme) => ({
        [theme.breakpoints.up('md')]: {
          pt: 8,
        },
        [theme.breakpoints.down('md')]: {
          pt: 7,
        },
      })}
    >
      <CssBaseline />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Header />
          <Box>{children}</Box>
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Box>
  );
};

import CssBaseline from '@mui/material/CssBaseline';
import * as React from 'react';

import { Header } from './Header';

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <CssBaseline />
    <Header />
    <main>{children}</main>
  </>
);

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export const Header = () => (
  <AppBar color="transparent" position="static" elevation={0}>
    <Toolbar>
      <Typography variant="h6" fontWeight="bold">
        matiushariman.github.io
      </Typography>
    </Toolbar>
  </AppBar>
);

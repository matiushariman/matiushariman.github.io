import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AppBar from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';

import { ColorModeContext } from './ColorModeContext';
import SocialMediaList from './SocialMediaList';

export const Header = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleToggleColorMode = (e: React.MouseEvent<HTMLElement>, newColorMode: string | null) => {
    if (newColorMode !== null && newColorMode !== theme.palette.mode) {
      if (colorMode.toggleColorMode) {
        colorMode.toggleColorMode();
      }
    }
  };

  return (
    <AppBar color="default" position="fixed" elevation={0}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} variant="h6" fontWeight="bold">
          matiushariman.github.io
        </Typography>
        {isDesktop ? <SocialMediaList /> : null}

        <ToggleButtonGroup
          sx={(theme) => ({
            [theme.breakpoints.up('md')]: {
              marginLeft: 3,
            },
          })}
          value={theme.palette.mode}
          exclusive
          aria-label="theme mode"
          onChange={handleToggleColorMode}
          color="primary"
          size="small"
        >
          <ToggleButton value="light">
            <LightModeIcon />
          </ToggleButton>
          <ToggleButton value="dark">
            <DarkModeIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

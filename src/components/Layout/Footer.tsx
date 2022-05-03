import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';

import SocialMediaList from './SocialMediaList';

const Footer = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Stack
      direction="column"
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
      })}
    >
      {isMobile ? (
        <Box display="flex" sx={{ justifyContent: 'space-around' }}>
          <SocialMediaList />
        </Box>
      ) : null}
      <Toolbar sx={{ justifyContent: 'space-around' }}>
        <Typography variant="body2">Developed by Matius Hariman N</Typography>
      </Toolbar>
    </Stack>
  );
};

export default Footer;

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const Hello = () => (
  <Box
    sx={(theme) => ({
      [theme.breakpoints.up('md')]: {
        maxWidth: '60%',
      },
    })}
  >
    <Grid spacing={2} container>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography color="primary" fontWeight="bold">
              Hello, my name is
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" fontWeight="bold">
              Matius Hariman N.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid spacing={1} container>
          <Grid item xs={12}>
            <Typography>
              I&apos;m a seasoned front-end engineer with years of experience building state of the
              art web applications, I am passionate about delivering modern user experience in the
              most efficient way possible.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Right now, I&apos;m busy creating next-gen financial products at{' '}
              <Link href="https://www.bambu.co/" target="_blank" fontSize="inherit">
                BAMBU
              </Link>
              .
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

export default Hello;

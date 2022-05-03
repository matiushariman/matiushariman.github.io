import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import ListOfExperience from './ListOfExperience';

const MyExperience = () => (
  <Grid spacing={3} container>
    <Grid item xs={12}>
      <Typography variant="h2" color="primary">
        My Experience & Achievements
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <ListOfExperience />
    </Grid>
  </Grid>
);

export default MyExperience;

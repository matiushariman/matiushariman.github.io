import Grid from '@mui/material/Grid';
import * as React from 'react';

import { EXPERIENCE } from './constants';
import ExperienceContent from './ExperienceContent';
import ListOfExperienceNav from './ListOfExperienceNav';

const ListOfExperience = () => {
  const [currentView, setCurrentView] = React.useState<number>(0);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <ListOfExperienceNav currentView={currentView} setCurrentView={setCurrentView} />
      </Grid>
      <Grid item xs={12} md={7}>
        {EXPERIENCE.map((experience, i) => (
          <ExperienceContent
            key={experience.companyName}
            index={i}
            value={currentView}
            roles={experience.roles}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default ListOfExperience;

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import ListOfSkills from './ListOfSkills';
import MyPic from '../../../images/matiushariman-face.png';

const CONTENT = [
  'Hi there! My name is Matius. ' +
    'Since I was a kid I have always been obsessed with computer graphics and anything that I find aesthetically pleasing. ' +
    'That obsession grew over time and led me to take interests in fields such as game development, until I finally landed me my first job in web development as a front-end engineer back in early 2017.',
  'My desire is to always present the best experience for the end-users, cause no words can describe the feeling I feel everytime I know they enjoy using the applications that I help create!.',
];

const AboutMe = () => (
  <Grid spacing={3} container>
    <Grid item xs={12} md={6}>
      <Typography variant="h2" color="primary">
        About Me
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Grid alignItems="center" spacing={2} container>
        <Grid item xs={12} md={5}>
          <Box display="flex" justifyContent="space-around">
            <Avatar src={MyPic} alt="my picture" sx={{ height: 224, width: 224 }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            {CONTENT.map((content, i) => (
              <Grid key={`about-me-content-${i + 1}`} item xs={12}>
                <Typography>{content}</Typography>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Grid spacing={2} container>
                <Grid item xs={12}>
                  <Typography>Some of the technologies that I am currently using:</Typography>
                </Grid>
                <Grid item xs={12}>
                  <ListOfSkills />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default AboutMe;

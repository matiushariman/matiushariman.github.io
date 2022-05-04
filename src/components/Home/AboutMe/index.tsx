import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import ListOfSkills from './ListOfSkills';
import MyPic from '../../../images/matiushariman-face.png';

const CONTENT = [
  'My name is Matius. I’m an Indonesian-born Singapore permanent resident and a Senior Front-end Engineer at Bambu, a fintech startup specializing in robo-advisory based in Singapore',
  'I have always been passionate about software programming since I was a kid, starting from the day I used to play around with Visual Basic back in secondary school. There is something about computer programming, specifically front-end engineering that always excites me. Seeing how lines of code work in harmony on the screen, knowing what I help create can be enjoyed by hundreds of thousands or million users, and that it can help change the world for the better, those are things that always give me a sense of achievement and most importantly happiness',
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

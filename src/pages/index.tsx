import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import { Layout } from '../components/Layout';
import MyPic from '../images/matiushariman.jpeg';

// markup
const IndexPage = () => (
  <Layout>
    <title>matiushariman.github.io</title>
    <Container>
      <Box sx={{ p: 4 }}>
        <Grid alignItems="center" spacing={4} container>
          <Grid item xs={12} md={5}>
            <Box display="flex" justifyContent="space-around">
              <Avatar alt="My Picture" src={MyPic} sx={{ width: 224, height: 224 }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid spacing={1} container>
              <Grid item xs={12}>
                <Typography color="primary" variant="h4">
                  Hi, I&apos;m Matius!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>This page is currently still under construction.</Typography>
                <Typography>Please stay tune for more updates!</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </Layout>
);

export default IndexPage;

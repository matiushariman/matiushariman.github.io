import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import { Layout } from '../components/Layout';
import MyPic from '../images/matiushariman-face.png';

const IndexPage = () => (
  <Layout>
    <title>matiushariman.github.io</title>
    <Paper square elevation={1}>
      <Container
        sx={(theme) => ({
          [theme.breakpoints.up('md')]: {
            p: 6,
          },
          pb: 4,
        })}
      >
        <Grid alignItems="center" spacing={2} container>
          <Grid item xs={12} md={5}>
            <Box display="flex" justifyContent="space-around">
              <Avatar alt="My Picture" src={MyPic} sx={{ height: 224, width: 224 }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid spacing={1} container>
              <Grid item xs={12}>
                <Typography
                  color="primary"
                  variant="h4"
                  sx={(theme) => ({
                    [theme.breakpoints.down('sm')]: {
                      textAlign: 'center',
                    },
                  })}
                >
                  Hi, I&apos;m Matius!
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={(theme) => ({
                    [theme.breakpoints.down('sm')]: {
                      textAlign: 'center',
                    },
                  })}
                >
                  A seasoned front-end engineer with years of experience building state of the art
                  web applications, I am passionate about delivering modern user experience in the
                  most efficient way possible
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  </Layout>
);

export default IndexPage;

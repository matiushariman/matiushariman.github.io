import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import * as React from 'react';

import AboutMe from '../components/Home/AboutMe';
import Hello from '../components/Home/Hello';
import { Layout } from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <title>matiushariman.github.io</title>
    <Paper square elevation={1}>
      <Container
        sx={(theme) => ({
          [theme.breakpoints.up('md')]: {
            pt: 12,
          },
        })}
      >
        <Hello />
      </Container>
    </Paper>
    <Paper>
      <Container>
        <AboutMe />
      </Container>
    </Paper>
  </Layout>
);

export default IndexPage;

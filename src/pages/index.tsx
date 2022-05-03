import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import * as React from 'react';

import Hello from '../components/Home/Hello';
import { Layout } from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <title>matiushariman.github.io</title>
    <Paper square elevation={1}>
      <Container
        sx={(theme) => ({
          [theme.breakpoints.up('md')]: {
            p: 12,
          },
          [theme.breakpoints.down('md')]: {
            pt: 4,
            pb: 7,
          },
        })}
      >
        <Hello />
      </Container>
    </Paper>
  </Layout>
);

export default IndexPage;

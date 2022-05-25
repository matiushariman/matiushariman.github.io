import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled, lighten, darken } from '@mui/material/styles';
import * as React from 'react';

import AboutMe from '../components/Home/AboutMe';
import FeaturedPortfolios from '../components/Home/FeaturedPortfolios';
import Hello from '../components/Home/Hello';
import MyExperience from '../components/Home/MyExperience';
import { Layout } from '../components/Layout';

const Section = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  '&:not(:last-of-type)': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  '&:nth-of-type(even)': {
    ...(theme.palette.mode === 'light'
      ? {
          backgroundColor: lighten(theme.palette.primary.main, 0.9),
        }
      : {
          backgroundColor: darken(theme.palette.background.paper, 0.1),
        }),
  },
}));

const IndexPage = () => (
  <Layout>
    <title>matiushariman.github.io</title>
    <Section>
      <Container
        sx={(theme) => ({
          [theme.breakpoints.up('md')]: {
            pt: 12,
          },
        })}
      >
        <Hello />
      </Container>
    </Section>
    <Section>
      <Container>
        <AboutMe />
      </Container>
    </Section>
    <Section>
      <Container>
        <MyExperience />
      </Container>
    </Section>
    <Section>
      <Container>
        <FeaturedPortfolios />
      </Container>
    </Section>
  </Layout>
);

export default IndexPage;

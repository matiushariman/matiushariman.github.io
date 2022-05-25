import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import SpotifyPortfolio from './assets/spotify-clone-portfolio.png';
import { FeaturedPortfolioCard } from './FeaturedPortfolioCard';

const PORTFOLIOS = [
  {
    key: 'spotifyClone',
    img: {
      src: SpotifyPortfolio,
      alt: 'Spotify Clone',
    },
    urls: {
      github: 'https://github.com/matiushariman/react-spotify-clone-webapp',
    },
    title: 'Spotify Clone',
    description:
      'Web application built with ReactJS (Typescript) for viewing personalized Spotify data (powered by Spotify Web API). Users can view their top artists, top tracks, and more features are coming soon',
  },
];

const FeaturedPortfolios = () => (
  <Grid spacing={3} container>
    <Grid item xs={12}>
      <Typography variant="h2" color="primary">
        Featured Portfolios
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Grid spacing={2} container>
        {PORTFOLIOS.map((portfolio) => (
          <Grid key={portfolio.key} item xs={12} md={4}>
            <FeaturedPortfolioCard
              img={portfolio.img}
              urls={portfolio.urls}
              title={portfolio.title}
              description={portfolio.description}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);

export default FeaturedPortfolios;

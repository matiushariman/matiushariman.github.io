import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `matiushariman`,
    siteUrl: `https://matiushariman.github.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`ubuntu`],
        display: 'swap',
      },
    },
  ],
};

export default config;

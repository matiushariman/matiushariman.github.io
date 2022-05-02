import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `matiushariman`,
    siteUrl: `https://www.yourdomain.tld`,
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
  pathPrefix: '/matiushariman.github.io',
};

export default config;

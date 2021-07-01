module.exports = {
  siteMetadata: {
    title: `Freelance Concept`,
    description: `Strony www, marketing, branding, SEO`,
    author: `Damian Markiewicz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `b9401013e6071968420881330465db`,
        environment: `main`,
        previewMode: false,
        disableLiveReload: false,
        localeFallbacks: {
          it: ['en'],
        },
      },
    },
    //{
    //  resolve: `gatsby-plugin-manifest`,
    //  options: {
    //    name: `gatsby-starter-default`,
    //    short_name: `starter`,
    //    start_url: `/`,
    //    background_color: `#663399`,
    //    theme_color: `#663399`,
    //    display: `minimal-ui`,
    //    icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //  },
    //},
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

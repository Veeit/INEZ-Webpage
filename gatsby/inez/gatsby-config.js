module.exports = {
  siteMetadata: {
    title: `INEZ`,
    description: `The new way to budget your money. The secure ans easy way to budget. Build your own personal budget plan.`,
    author: `Veit Progl`,
    siteUrl: `https://www.inez.tech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `INEZ`,
        short_name: `INEZ`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://inez.tech',
        sitemap: 'https://www.inez.tech/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}


module.exports = {
  siteMetadata: {
    title: `ConceptX`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ConceptX`,
        short_name: `ConceptX`,
        description: `We make technologies more simpler.`,
        start_url: `/`,
        icon: 'src/data/images/favicon.png'
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
  ],
}
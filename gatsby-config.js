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
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
  ],
}
const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  }
}

module.exports = {
  siteMetadata: {
    title: `ConceptX`,
  },
  plugins: [
    netlifyCmsPaths,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-170209427-1",
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          netlifyCmsPaths,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWdith: 930,
              backgroundColor: 'transparent',
            },
          },
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
  ],
}
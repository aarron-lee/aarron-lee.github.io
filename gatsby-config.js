module.exports = {
  siteMetadata: {
    title: "Aarron Lee",
    siteUrl: "https://www.aarronlee.com",
    description: "Some random thoughts, ideas, and musings",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}

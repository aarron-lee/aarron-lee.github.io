module.exports = {
  siteMetadata: {
    title: "Aarron Lee",
    siteUrl: "https://www.aarronlee.com",
    description: "Some random thoughts, ideas, and musings",
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-prismjs`],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}

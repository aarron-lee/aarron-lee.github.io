module.exports = {
  siteMetadata: {
    title: "AL's Blog",
    siteUrl: "https://www.aarronlee.com",
    description: "Some random thoughts, ideas, and musings",
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}

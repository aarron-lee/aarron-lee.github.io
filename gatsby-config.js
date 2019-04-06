module.exports = {
  siteMetaData: {
    title: "AL's Blog",
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

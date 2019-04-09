const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blogPost.js")

  return graphql(`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 10
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: edge.node.frontmatter.path,
        component: blogPostTemplate,
        context: { pathSlug: edge.node.frontmatter.path },
      })
    })
  })
}

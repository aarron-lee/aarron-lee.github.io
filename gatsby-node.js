const path = require("path")

const createAboutPage = ({ createPage }) => {
  const aboutPage = path.resolve("src/about/index.js")
  createPage({
    path: "/about",
    component: aboutPage,
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blogPost.js")

  createAboutPage({ createPage })

  return graphql(`
    query {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 10
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              title
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

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge, idx) => {
      createPage({
        path: edge.node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          pathSlug: edge.node.frontmatter.path,
          next: idx === posts.length - 1 ? null : posts[idx + 1].node,
          previous: idx === 0 ? null : posts[idx - 1].node,
        },
      })
    })
  })
}

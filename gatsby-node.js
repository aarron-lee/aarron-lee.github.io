const path = require("path")
const _ = require("lodash")

const createAboutPage = ({ createPage }) => {
  const aboutPage = path.resolve("src/about/index.js")
  createPage({
    path: "/about",
    component: aboutPage,
  })
}

const createTagPages = ({ createPage, posts }) => {
  const allTagsIndexTemplate = path.resolve("src/templates/allTagsIndex.js")
  const singleTagIndexTemplate = path.resolve("src/templates/singleTagIndex.js")

  const postsByTag = {}

  posts.forEach(post => {
    const tags = _.get(post, ["node", "frontmatter", "tags"])
    if (tags) {
      tags.forEach(tag => {
        if (!postsByTag[tag]) postsByTag[tag] = []
        postsByTag[tag].push(post)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  createPage({
    path: "/tags",
    component: allTagsIndexTemplate,
    context: {
      tags: tags.sort(),
    },
  })

  tags.forEach(tagName => {
    const posts = postsByTag[tagName]

    createPage({
      path: `/tags/${tagName}`,
      component: singleTagIndexTemplate,
      context: {
        posts,
        tagName,
      },
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blogPost.js")

  createAboutPage({ createPage })

  return graphql(`
    query {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              path
              title
              tags
              date(formatString: "MM/DD/YYYY")
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

    createTagPages({ createPage, posts })

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

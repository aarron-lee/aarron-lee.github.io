import React from "react"
import { graphql, Link } from "gatsby"

import "../styles/prism-atom-dark.css"

import Page from "../templates/page"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`

const Layout = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node)
  return (
    <Page>
      <div style={{ marginTop: "55px" }}>
        {posts.map((post, idx) => (
          <Link to={post.frontmatter.path} key={idx}>
            {post.frontmatter.title}
          </Link>
        ))}
      </div>
    </Page>
  )
}

export default Layout

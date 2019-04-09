import React from "react"
import { graphql, Link } from "gatsby"

import "../styles/prism-atom-dark.css"

import Page from "../templates/page"
import Card from "../components/presentation/card/card"

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
      {posts.map((post, idx) => (
        <Card>
          <Link to={post.frontmatter.path} key={idx}>
            {post.frontmatter.title}
          </Link>
        </Card>
      ))}
    </Page>
  )
}

export default Layout

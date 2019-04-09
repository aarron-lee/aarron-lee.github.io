import React from "react"
import { graphql, Link } from "gatsby"

import "../styles/prism-atom-dark.css"

import styles from "./indexStyles.module.scss"

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
            date(formatString: "MMMM DD, YYYY")
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
      {posts.map((post, idx) => {
        const { timeToRead } = post
        const { title, path, date, excerpt } = post.frontmatter

        return (
          <Card key={idx} className={styles.cardStyles}>
            <Link to={path}>
              <h2 style={{ margin: "14px 0px" }}>{title}</h2>
            </Link>
            <h6 style={{ margin: "0" }}>
              {date} - Time to Read: {timeToRead} min
            </h6>
            <p>{excerpt}</p>
          </Card>
        )
      })}
    </Page>
  )
}

export default Layout

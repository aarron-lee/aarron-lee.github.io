import React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/shared/header/header"
import ThemeProvider from "../components/util/theme/themeProvider"
import ThemeConsumer from "../components/util/theme/themeConsumer"
import withIsMobile from "../components/util/withIsMobile"

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

const Layout = ({ data, isMobile }) => {
  const posts = data.allMarkdownRemark.edges.map(edge => edge.node)
  console.log(posts)

  return (
    <ThemeProvider>
      <ThemeConsumer>
        {({ themeStyles }) => (
          <div>
            <Header headerColor={themeStyles.headerColor} isMobile={isMobile} />
            <div
              style={{
                marginTop: "55px",
                width: "100%",
                height: "100vh",
                display: "flex",
              }}
              className={themeStyles.backgroundColor}
            >
              {posts.map((post, idx) => (
                <Link to={post.frontmatter.path} key={idx}>
                  {post.frontmatter.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </ThemeConsumer>
    </ThemeProvider>
  )
}

export default withIsMobile(Layout)

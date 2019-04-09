import React from "react"

import Page from "./page"

import { graphql, Link } from "gatsby"
import Card from "../components/presentation/card/card"

export default function Template({ data, ...otherProps }) {
  const {
    pageContext: { next, previous },
  } = otherProps
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Page>
      <Card>
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          {next && (
            <>
              <Link to={next.frontmatter.path}>
                {"<"}
                {next.frontmatter.title}
              </Link>
            </>
          )}
          {previous && (
            <>
              <Link to={previous.frontmatter.path}>
                {previous.frontmatter.title}
                {">"}
              </Link>
            </>
          )}
        </div>
      </Card>
    </Page>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

import React, { Fragment } from "react"

import Page from "./page"

import { graphql, Link } from "gatsby"
import Card from "../components/presentation/card/card"
import TagButton from "../components/presentation/buttons/tagButton/tagButton"

const TagsList = ({ tags = [] }) =>
  tags.map((tag, idx) => {
    return (
      <Fragment key={idx}>
        <TagButton tag={tag} />{" "}
      </Fragment>
    )
  })

const navLinkStyle = {
  color: "inherit",
}

export default function Template({ data, ...otherProps }) {
  const {
    pageContext: { next, previous },
  } = otherProps
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Page>
      <Card>
        <div className="blog-post-container" style={{ width: "100%" }}>
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h5>
              {frontmatter.date} - Time To Read: {markdownRemark.timeToRead}{" "}
              mins
            </h5>
            {frontmatter.tags && frontmatter.tags.length && (
              <div style={{ fontSize: "13px" }}>
                <strong>tags:</strong> <TagsList tags={frontmatter.tags} />
              </div>
            )}
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              margin: "25px 0px",
            }}
          >
            {next ? (
              <Link to={next.frontmatter.path} style={navLinkStyle}>
                ←{next.frontmatter.title}
              </Link>
            ) : (
              <div style={{ opacity: "0.3" }}>← No More Posts</div>
            )}
            {previous ? (
              <Link to={previous.frontmatter.path} style={navLinkStyle}>
                {previous.frontmatter.title} →
              </Link>
            ) : (
              <div style={{ opacity: "0.3" }}>No More Posts →</div>
            )}
          </div>
        </div>
      </Card>
    </Page>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`

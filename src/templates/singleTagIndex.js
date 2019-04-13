import React from "react"
import { graphql, Link } from "gatsby"
import Page from "./page"
import Card from "../components/presentation/card/card"

const SingleTagIndex = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <Page>
      <Card>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>Posts related to {tagName}</h2>
          <ul>
            {posts.map((post, idx) => (
              <li key={idx}>
                <Link to={post.node.frontmatter.path}>
                  {post.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Page>
  )
}

export default SingleTagIndex

import React from "react"
import { graphql, Link } from "gatsby"
import Page from "./page"
import Card from "../components/presentation/card/card"

const SingleTagIndex = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  console.log(posts)
  return (
    <Page>
      <Card>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>Posts related to {tagName}</h2>
          <div style={{ backgroundColor: "white", paddingRight: "25px" }}>
            <ul style={{ listStyle: "none", margin: "10px", padding: "0" }}>
              {posts.map((post, idx) => (
                <li key={idx}>
                  <Link to={post.node.frontmatter.path}>
                    {post.node.frontmatter.title} ({post.node.frontmatter.date})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </Page>
  )
}

export default SingleTagIndex

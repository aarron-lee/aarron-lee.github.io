import React from "react"
import { graphql, Link } from "gatsby"
import Page from "./page"
import Card from "../components/presentation/card/card"

const SingleTagIndex = ({ data, pageContext }) => {
  return (
    <Page>
      <Card>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>{pageContext.tagName}</h2>
          {pageContext.posts.map((post, idx) => (
            <pre key={idx}>{JSON.stringify(post)}</pre>
          ))}
        </div>
      </Card>
    </Page>
  )
}

export default SingleTagIndex

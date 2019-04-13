import React from "react"
import { graphql, Link } from "gatsby"
import Page from "./page"
import Card from "../components/presentation/card/card"

const AllTagsTemplate = ({ data, pageContext }) => {
  const { tags } = pageContext
  return (
    <Page>
      <Card>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>All Tags</h2>
          <ul>
            {tags.map((tag, idx) => (
              <li key={idx}>
                <Link to={`tags/${tag}`}>{tag}</Link>{" "}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Page>
  )
}
export default AllTagsTemplate
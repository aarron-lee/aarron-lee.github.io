import React from "react"
import { Link } from "gatsby"
import Page from "./page"
import Card from "../components/presentation/card/card"

const AllTagsTemplate = ({ pageContext }) => {
  const { tags } = pageContext
  return (
    <Page>
      <Card>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>All Tags</h2>
          <div style={{ backgroundColor: "white", paddingRight: "25px" }}>
            <ul style={{ listStyle: "none", margin: "10px", padding: "0" }}>
              {tags.map((tag, idx) => (
                <li key={idx}>
                  <Link to={`tags/${tag}`}>{tag}</Link>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </Page>
  )
}
export default AllTagsTemplate

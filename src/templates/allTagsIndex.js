import React from "react"
import { graphql, Link } from "gatsby"
import Page from "./page"
import Card from "../components/presentation/card/card"

const AllTagsTemplate = ({ data, pageContext }) => {
  return (
    <Page>
      <Card>
        {pageContext.tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </Card>
    </Page>
  )
}
export default AllTagsTemplate

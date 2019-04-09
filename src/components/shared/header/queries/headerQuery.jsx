import React from "react"
import { StaticQuery, graphql } from "gatsby"
import _ from "lodash"

const HeaderQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const HeaderQueryContainer = ({ children = null }) => (
  <StaticQuery query={HeaderQuery}>
    {data => {
      const title = _.get(
        data,
        ["site", "siteMetadata", "title"],
        "default title"
      )
      const description = _.get(
        data,
        ["site", "siteMetadata", "description"],
        "default description"
      )

      return children({ title, description })
    }}
  </StaticQuery>
)

export default HeaderQueryContainer

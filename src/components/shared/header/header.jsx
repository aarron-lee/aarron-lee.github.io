import React from "react"
import HeaderQuery from "./queries/headerQuery"

const Header = () => (
  <HeaderQuery>
    {({ title, description }) => (
      <div>
        {title} - {description}
      </div>
    )}
  </HeaderQuery>
)

export default Header

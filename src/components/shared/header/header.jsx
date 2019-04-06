import React from "react"
import HeaderQuery from "./queries/headerQuery"

import styles from "./headerStyles.module.scss"

const Header = () => (
  <HeaderQuery>
    {({ title, description }) => (
      <div className={styles.header}>
        {title} - {description}
      </div>
    )}
  </HeaderQuery>
)

export default Header

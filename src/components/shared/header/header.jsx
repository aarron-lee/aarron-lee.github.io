import React from "react"
import HeaderQuery from "./queries/headerQuery"

import styles from "./headerStyles.module.scss"
import withIsMobile from "../../util/withIsMobile"

const Header = ({ isMobile }) => (
  <HeaderQuery>
    {({ title }) => (
      <header className={styles.headerContainer}>
        <a className={styles.title} href="#">
          {title}
        </a>
        <nav className={styles.nav}>
          <ul className={styles.navLink}>
            <li className={styles.navLink}>Posts</li>
            <li className={styles.navLink}>About</li>
          </ul>
        </nav>
      </header>
    )}
  </HeaderQuery>
)

export default withIsMobile(Header)

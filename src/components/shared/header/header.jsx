import React from "react"
import HeaderQuery from "./queries/headerQuery"

import styles from "./headerStyles.module.scss"
import withIsMobile from "../../util/withIsMobile"
import HamburgerMenu from "./hamburgerMenu"

const Header = ({ isMobile }) => (
  <HeaderQuery>
    {({ title }) => (
      <HamburgerMenu>
        <header className={styles.headerContainer}>
          {isMobile && <HamburgerMenu.Button />}
          <a className={styles.title} href="#">
            {title}
          </a>
          {!isMobile && (
            <nav className={styles.nav}>
              <ul className={styles.navLink}>
                <li className={styles.navLink}>Posts</li>
                <li className={styles.navLink}>About</li>
              </ul>
            </nav>
          )}
        </header>

        <HamburgerMenu.Content>
          <HamburgerMenu.Item>Posts</HamburgerMenu.Item>
          <HamburgerMenu.Item>About</HamburgerMenu.Item>
        </HamburgerMenu.Content>
      </HamburgerMenu>
    )}
  </HeaderQuery>
)

export default withIsMobile(Header)

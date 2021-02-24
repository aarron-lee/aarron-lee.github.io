import React from "react"
import HeaderQuery from "./queries/headerQuery"

import styles from "./headerStyles.module.scss"
import Modal, { MODAL_TYPES } from "../../presentation/modal/modal"
import HamburgerMenuButton from "../../presentation/buttons/hamburgerMenuButton/HamburgerMenuButton"
import ThemeSwitch from "../../util/theme/themeSwitch"
import { Link } from "gatsby"

const MOBILE_SWITCH_COLOR = "#282d33"

const Header = ({ headerColor, isMobile }) => {
  if (isMobile) {
    return (
      <HeaderQuery>
        {({ title }) => (
          <Modal type={MODAL_TYPES.SLIDE_IN}>
            <Modal.Content className={styles.mobileMenuContainer}>
              <Modal.CancelButton color={"white"} />
              <ul className={styles.mobileMenuItems}>
                <li className={styles.mobileNavLink}>
                  <Link to="/" className={styles.mobileNavLink}>
                    Blog
                  </Link>
                </li>
                <li className={styles.mobileNavLink}>
                  <Link to="/about/" className={styles.mobileNavLink}>
                    About
                  </Link>
                </li>
                <li className={styles.mobileNavLink}>
                  <ThemeSwitch
                    onColor={MOBILE_SWITCH_COLOR}
                    offColor={MOBILE_SWITCH_COLOR}
                  />
                </li>
              </ul>
            </Modal.Content>
            <header className={`${styles.headerContainer} ${headerColor}`}>
              <Modal.OpenButton>
                {({ openModal }) => (
                  <HamburgerMenuButton
                    onClick={openModal}
                    className={`${styles.title} ${styles.mobileMenuButton}`}
                  />
                )}
              </Modal.OpenButton>
              <a className={styles.title} href="/">
                {title}
              </a>
            </header>
          </Modal>
        )}
      </HeaderQuery>
    )
  }

  return (
    <HeaderQuery>
      {({ title }) => (
        <header
          className={`${styles.headerContainer} ${
            styles.headerContainerNonMobile
          } ${headerColor}`}
        >
          <div className={styles.buttonsContainer}>
            <Link to={"/"} className={styles.title}>
              {title}
            </Link>
            <nav className={styles.nav}>
              <ul className={styles.navLink}>
                <li className={styles.navLink}>
                  <Link to="/" className={styles.navLink}>
                    Blog
                  </Link>
                </li>
                <li className={styles.navLink}>
                  <Link to="/about/" className={styles.navLink}>
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <ThemeSwitch className={styles.themeSwitch} />
        </header>
      )}
    </HeaderQuery>
  )
}

export default Header

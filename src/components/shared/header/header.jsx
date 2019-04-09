import React from "react"
import HeaderQuery from "./queries/headerQuery"

import styles from "./headerStyles.module.scss"
import Modal, { MODAL_TYPES } from "../../presentation/modal/modal"
import HamburgerMenuButton from "../../presentation/buttons/hamburgerMenuButton/HamburgerMenuButton"
import ThemeSwitch from "../../util/theme/themeSwitch"

const Header = ({ headerColor, isMobile }) => {
  if (isMobile) {
    return (
      <HeaderQuery>
        {({ title }) => (
          <Modal type={MODAL_TYPES.SLIDE_IN}>
            <Modal.Content className={styles.mobileMenuContainer}>
              <Modal.CancelButton color={"white"} />
              <ul className={styles.mobileMenuItems}>
                <li className={styles.mobileNavLink}>Posts</li>
                <li className={styles.mobileNavLink}>About</li>
                <li className={styles.mobileNavLink}>
                  <ThemeSwitch />
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
            <a className={styles.title} href="/">
              {title}
            </a>
            <nav className={styles.nav}>
              <ul className={styles.navLink}>
                <li className={styles.navLink}>Posts</li>
                <li className={styles.navLink}>About</li>
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

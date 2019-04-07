import React from "react"
import HeaderQuery from "./queries/headerQuery"

import styles from "./headerStyles.module.scss"
import withIsMobile from "../../util/withIsMobile"
import Modal, { MODAL_TYPES } from "../../presentation/Modal/modal"

const Header = ({ isMobile }) => {
  if (isMobile) {
    return (
      <HeaderQuery>
        {({ title }) => (
          <Modal type={MODAL_TYPES.SLIDE_IN}>
            <Modal.Content>
              <Modal.CancelButton />
              <ul>
                <li>Posts</li>
                <li>About</li>
              </ul>
            </Modal.Content>
            <header className={styles.headerContainer}>
              <Modal.OpenButton>Open</Modal.OpenButton>
              <a className={styles.title} href="#">
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
}

export default withIsMobile(Header)

import React from "react"
import HeaderQuery from "./queries/headerQuery"

import styles from "./headerStyles.module.scss"
import withIsMobile from "../../util/withIsMobile"
import Modal, { MODAL_TYPES } from "../../presentation/Modal/modal"

const Header = ({ isMobile }) => (
  <HeaderQuery>
    {({ title }) => (
      <Modal type={MODAL_TYPES.SLIDE_IN}>
        <Modal.Content>
          content<Modal.CloseButton>close modal</Modal.CloseButton>
        </Modal.Content>
        <header className={styles.headerContainer}>
          {isMobile && <Modal.OpenButton>Open</Modal.OpenButton>}
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
      </Modal>
    )}
  </HeaderQuery>
)

export default withIsMobile(Header)

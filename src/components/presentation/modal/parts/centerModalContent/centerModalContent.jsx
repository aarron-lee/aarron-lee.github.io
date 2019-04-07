import React from "react"
import { Portal } from "react-portal"

import styles from "./centerContentStyles.module.scss"

export const MODAL_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
}

const CenterModalContent = ({ isOpen, closeModal, contentSize, children }) => {
  return (
    <Portal>
      <div
        className={`${styles.modalBackdrop} ${
          isOpen ? styles.backdropVisible : ""
        }`}
        onClick={closeModal}
      >
        <div
          className={`${styles.modalContent} ${styles[contentSize]}`}
          onClick={e => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default CenterModalContent

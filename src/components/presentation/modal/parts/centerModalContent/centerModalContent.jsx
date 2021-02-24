import React from "react"
import { Portal } from "react-portal"
import noop from "lodash/noop"

import styles from "./centerContentStyles.module.scss"

export const MODAL_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
}

const CenterModalContent = ({
  isOpen,
  closeModal,
  contentSize,
  children,
  className,
}) => {
  return (
    <Portal>
      <div
        className={`${styles.modalBackdrop} ${
          isOpen ? styles.backdropVisible : ""
        } ${className}`}
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

CenterModalContent.defaultProps = {
  className: "",
  children: null,
  contentSize: MODAL_SIZES.MEDIUM,
  closeModal: noop,
  isOpen: false,
}

export default CenterModalContent

import React from "react"
import { Portal } from "react-portal"

import slideOutStyles from "./slideOutContentStyles.module.scss"

export const SLIDE_DIRECTIONS = {
  LEFT: Symbol("left"),
  RIGHT: Symbol("right"),
}

const SlideOutModalContent = ({ direction, isOpen, closeModal, children }) => {
  const slideInDirectionStyle =
    direction === SLIDE_DIRECTIONS.LEFT
      ? slideOutStyles.modalLeft
      : slideOutStyles.modalRight

  const modalContentStyle = `${slideInDirectionStyle} ${
    slideOutStyles.ModalContent
  } ${isOpen ? slideOutStyles.ModalContentOpen : ""}`

  return (
    <Portal>
      <div
        className={`${slideOutStyles.ModalContainer} ${
          isOpen ? slideOutStyles.ModalOpen : ""
        }`}
      >
        <div className={slideOutStyles.ModalCloseArea} onClick={closeModal}>
          <div className={modalContentStyle} onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default SlideOutModalContent

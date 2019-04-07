import React from "react"
import SlideOutModalContent from "./slideOutModalContent"

import { ModalContext, MODAL_TYPES } from "../modal.jsx"

const ModalContent = ({ children }) => {
  return (
    <ModalContext.Consumer>
      {({ isOpen, closeModal, type, direction }) => {
        switch (type) {
          case MODAL_TYPES.SLIDE_IN:
            return (
              <SlideOutModalContent
                direction={direction}
                isOpen={isOpen}
                closeModal={closeModal}
              >
                {children}
              </SlideOutModalContent>
            )
          default:
            return <div />
        }
      }}
    </ModalContext.Consumer>
  )
}

export default ModalContent

import React from "react"

import CenterModalContent from "./centerModalContent/centerModalContent"
import SlideOutModalContent from "./slideOutModalContent/slideOutModalContent"

import { ModalContext, MODAL_TYPES } from "../modal.jsx"

const ModalContent = ({ children }) => {
  return (
    <ModalContext.Consumer>
      {({ isOpen, closeModal, type, direction, contentSize }) => {
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
          case MODAL_TYPES.CENTER:
            return (
              <CenterModalContent
                isOpen={isOpen}
                closeModal={closeModal}
                contentSize={contentSize}
              >
                {children}
              </CenterModalContent>
            )
          default:
            return <div />
        }
      }}
    </ModalContext.Consumer>
  )
}

export default ModalContent

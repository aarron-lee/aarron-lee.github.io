import React from "react"

import CenterModalContent from "./centerModalContent/centerModalContent"
import SlideOutModalContent from "./slideOutModalContent/slideOutModalContent"

import { ModalContext, MODAL_TYPES } from "../modal.jsx"

const ModalContent = ({ children, className }) => {
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
                className={className}
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
                className={className}
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

ModalContent.defaultProps = {
  children: null,
  className: "",
}

export default ModalContent

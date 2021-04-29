import React, { Component } from "react"

import ModalContent from "./parts/modalContent"
import CloseModalButton from "./parts/closeModalButton/closeModalButton"
import OpenModalButton from "./parts/openModalButton/openModalButton"
import CancelModalButton from "./parts/cancelButton/cancelModalButton"

import { MODAL_SIZES } from "./parts/centerModalContent/centerModalContent"
import { SLIDE_DIRECTIONS } from "./parts/slideOutModalContent/slideOutModalContent"

export const ModalContext = React.createContext()

export { SLIDE_DIRECTIONS, MODAL_SIZES }

export const MODAL_TYPES = {
  CENTER: Symbol("center"),
  SLIDE_IN: Symbol("slideIn"),
}

class Modal extends Component {
  static CloseButton = CloseModalButton
  static OpenButton = OpenModalButton
  static Content = ModalContent
  static CancelButton = CancelModalButton

  state = {
    isOpen: false,
  }

  setStatus = newStatus => () =>
    window.requestAnimationFrame(() => this.setState({ isOpen: newStatus }))

  render() {
    const { type, children, direction, contentSize } = this.props
    return (
      <ModalContext.Provider
        value={{
          isOpen: this.state.isOpen,
          openModal: this.setStatus(true),
          closeModal: this.setStatus(false),
          type: type,
          direction: direction,
          contentSize: contentSize,
        }}
      >
        {children}
      </ModalContext.Provider>
    )
  }
}

Modal.defaultProps = {
  children: null,
  type: MODAL_TYPES.CENTER,
  direction: SLIDE_DIRECTIONS.LEFT,
  contentSize: MODAL_SIZES.MEDIUM,
}

export default Modal

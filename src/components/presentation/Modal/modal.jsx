import React, { Component } from "react"

import ModalContent from "./parts/modalContent"

import { MODAL_SIZES } from "./parts/centerModalContent/centerModalContent"
import { SLIDE_DIRECTIONS } from "./parts/slideOutModalContent/slideOutModalContent"

export const ModalContext = React.createContext()

export const MODAL_TYPES = {
  CENTER: Symbol("center"),
  SLIDE_IN: Symbol("slideIn"),
}

export { SLIDE_DIRECTIONS, MODAL_SIZES }

const OpenButton = ({ children, ...otherProps }) => (
  <ModalContext.Consumer>
    {({ openModal }) => {
      if (typeof children === "function") return children({ openModal })

      return (
        <button {...otherProps} onClick={openModal}>
          {children}
        </button>
      )
    }}
  </ModalContext.Consumer>
)

class Modal extends Component {
  state = {
    isOpen: false,
  }

  static OpenButton = OpenButton

  static Content = ModalContent

  setStatus = newStatus => () => this.setState({ isOpen: newStatus })

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

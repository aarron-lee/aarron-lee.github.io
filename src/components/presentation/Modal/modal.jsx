import React, { Component } from "react"

export const ModalContext = React.createContext()

export const MODAL_TYPES = {
  CENTER: "center",
  SLIDE_IN: "slideIn",
}

class Modal extends Component {
  state = {
    isOpen: false,
  }

  setStatus = newStatus => () => this.setState({ isOpen: newStatus })

  render() {
    const { type, children } = this.props
    return (
      <ModalContext.Provider
        value={{
          isOpen: this.state.isOpen,
          openModal: setStatus(true),
          closeModal: setStatus(false),
          type: type || MODAL_TYPES.CENTER,
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
}

export default Modal

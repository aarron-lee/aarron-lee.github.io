import React from "react"

import { ModalContext } from "../../modal.jsx"

const OpenModalButton = ({ children, ...otherProps }) => (
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

export default OpenModalButton

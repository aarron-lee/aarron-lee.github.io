import React from "react"

import { ModalContext } from "../../modal.jsx"

const CloseModalButton = ({ children, ...otherProps }) => (
  <ModalContext.Consumer>
    {({ closeModal }) => {
      if (typeof children === "function") return children({ closeModal })

      return (
        <button {...otherProps} onClick={closeModal}>
          {children}
        </button>
      )
    }}
  </ModalContext.Consumer>
)

export default CloseModalButton

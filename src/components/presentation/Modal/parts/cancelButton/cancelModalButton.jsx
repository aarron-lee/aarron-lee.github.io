import React from "react"
import CloseModalButton from "../closeModalButton/closeModalButton"

import styles from "./cancelModalButtonStyles.module.scss"

const XmarkSVG = ({ size }) => (
  <svg width={`${size}px`} height={`${size}px`} viewBox="-7 -1 10 10">
    <g transform="translate(0, 1.000000)">
      <path
        d="M2.30111111,0.523333333 L1.47666667,-0.301111111 L-2,3.17555556 L-5.47666667,-0.301111111 L-6.30111111,0.523333333 L-2.82444444,4 L-6.30111111,7.47666667 L-5.47666667,8.30111111 L-2,4.82444444 L1.47666667,8.30111111 L2.30111111,7.47666667 L-1.17555556,4 L2.30111111,0.523333333 Z"
        id="Shape"
      />
    </g>
  </svg>
)

const CancelModalButton = ({ size, className, ...otherProps }) => (
  <CloseModalButton>
    {({ closeModal }) => (
      <div
        className={`${styles.cancelButton} ${className}`}
        onClick={closeModal}
        {...otherProps}
      >
        <XmarkSVG size={size} />
      </div>
    )}
  </CloseModalButton>
)

CancelModalButton.defaultProps = {
  size: 20,
  className: "",
}

export default CancelModalButton

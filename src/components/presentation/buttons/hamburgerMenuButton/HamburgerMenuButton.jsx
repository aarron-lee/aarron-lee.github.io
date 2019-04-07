import React from "react"

const HamburgerMenuButton = ({
  height = 30,
  width = 30,
  fill = "white",
  ...otherProps
}) => (
  <div {...otherProps}>
    <svg
      fill={fill}
      height={`${height}px`}
      width={`${width}px`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
    >
      <g>
        <path class="line line-1" d="M5 13h90v14H5z" />
        <path class="line line-2" d="M5 43h90v14H5z" />
        <path class="line line-3" d="M5 73h90v14H5z" />
      </g>
    </svg>
  </div>
)

export default HamburgerMenuButton

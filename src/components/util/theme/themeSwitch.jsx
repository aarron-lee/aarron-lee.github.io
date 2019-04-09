import React from "react"
import Switch from "react-switch"

import styles from "./switchStyles.module.scss"

import { ThemeContext, THEMES } from "./themeProvider"

const ThemeSwitch = ({ className, ...props }) => (
  <ThemeContext.Consumer>
    {({ currentColor, toggleTheme }) => (
      <Switch
        onChange={toggleTheme}
        checked={currentColor === THEMES.LIGHT}
        className={className}
        uncheckedIcon={<div className={styles.iconStyle}>D</div>}
        checkedIcon={<div className={styles.iconStyle}>L</div>}
        onColor={"#000"}
        offColor={"#000"}
        {...props}
      />
    )}
  </ThemeContext.Consumer>
)

export default ThemeSwitch

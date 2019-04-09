import React from "react"
import Switch from "react-switch"

import { ThemeContext, THEMES } from "./themeProvider"

const ThemeSwitch = ({ className, ...props }) => (
  <ThemeContext.Consumer>
    {({ currentColor, toggleTheme }) => (
      <Switch
        onChange={toggleTheme}
        checked={currentColor === THEMES.LIGHT}
        className={className}
        {...props}
      />
    )}
  </ThemeContext.Consumer>
)

export default ThemeSwitch

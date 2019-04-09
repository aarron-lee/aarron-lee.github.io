import React from "react"

import { ThemeContext } from "./themeProvider"

const ThemeConsumer = ({ children }) => (
  <ThemeContext.Consumer>
    {({ themeStyles, toggleTheme }) => children({ themeStyles, toggleTheme })}
  </ThemeContext.Consumer>
)

ThemeConsumer.defaultProps = {
  children: null,
}

export default ThemeConsumer

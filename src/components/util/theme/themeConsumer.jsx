import React from "react"

import { ThemeContext } from "./themeProvider"

const ThemeConsumer = ({ children }) => (
  <ThemeContext.Consumer>
    {({ currentColor, themeStyles, toggleTheme }) =>
      children({ themeStyles, toggleTheme, currentColor })
    }
  </ThemeContext.Consumer>
)

ThemeConsumer.defaultProps = {
  children: null,
}

export default ThemeConsumer

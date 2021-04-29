import React from "react"

import { ThemeContext } from "./themeProvider"

const ThemeConsumer = ({ children }) => (
  <ThemeContext.Consumer>
    {({ currentColor, themeStyles, toggleTheme, isMobile }) =>
      children({ themeStyles, toggleTheme, currentColor, isMobile })
    }
  </ThemeContext.Consumer>
)

ThemeConsumer.defaultProps = {
  children: null,
}

export default ThemeConsumer

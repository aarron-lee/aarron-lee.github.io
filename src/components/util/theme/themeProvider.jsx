import React, { Component } from "react"

import darkThemeStyles from "./darkThemeStyles.module.scss"
import lightThemeStyles from "./lightThemeStyles.module.scss"

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
}

export const ThemeContext = React.createContext({ theme: THEMES.LIGHT })

class ThemeProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentColor: this.props.color,
    }
  }

  toggleTheme = () => {
    this.setState(prevState => {
      switch (prevState.currentColor) {
        case THEMES.LIGHT:
          return { currentColor: THEMES.DARK }
        case THEMES.DARK:
          return { currentColor: THEMES.LIGHT }
        default:
          return
      }
    })
  }

  render() {
    const { children } = this.props
    const { currentColor } = this.state
    let themeStyles =
      currentColor === THEMES.LIGHT ? lightThemeStyles : darkThemeStyles
    return (
      <ThemeContext.Provider
        value={{
          currentColor,
          themeStyles,
          toggleTheme: this.toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

ThemeProvider.defaultProps = {
  children: null,
  color: THEMES.LIGHT,
}

export default ThemeProvider

import React, { Component } from "react"

import darkThemeStyles from "./darkThemeStyles.module.scss"
import lightThemeStyles from "./lightThemeStyles.module.scss"

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
}

const LOCALSTORAGE_KEY = "currentThemeColor"

export const ThemeContext = React.createContext({ theme: THEMES.LIGHT })

class ThemeProvider extends Component {
  constructor(props) {
    super(props)
    if (window.localStorage) {
      var initialColor = localStorage.getItem(LOCALSTORAGE_KEY)
    }
    this.state = {
      currentColor: initialColor || THEMES.LIGHT,
    }
  }

  toggleTheme = () => {
    this.setState(prevState => {
      switch (prevState.currentColor) {
        case THEMES.LIGHT:
          if (window.localStorage)
            localStorage.setItem(LOCALSTORAGE_KEY, THEMES.DARK)
          return { currentColor: THEMES.DARK }
        case THEMES.DARK:
          if (window.localStorage)
            localStorage.setItem(LOCALSTORAGE_KEY, THEMES.LIGHT)
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
}

export default ThemeProvider

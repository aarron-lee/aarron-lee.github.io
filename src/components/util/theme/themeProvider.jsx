import React, { Component } from "react"

import darkThemeStyles from "./darkThemeStyles.module.scss"
import lightThemeStyles from "./lightThemeStyles.module.scss"

import withIsMobile from "../withIsMobile"

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
}

const LOCALSTORAGE_KEY = "currentThemeColor"

export const ThemeContext = React.createContext({ theme: THEMES.LIGHT })

class ThemeProvider extends Component {
  constructor(props) {
    super(props)
    if (typeof window !== "undefined" && window.localStorage) {
      var initialColor = window.localStorage.getItem(LOCALSTORAGE_KEY)
    }
    this.state = {
      currentColor: initialColor || THEMES.LIGHT,
    }
  }

  toggleTheme = () => {
    window.requestAnimationFrame(() =>
      this.setState(prevState => {
        switch (prevState.currentColor) {
          case THEMES.LIGHT:
            if (window && window.localStorage)
              localStorage.setItem(LOCALSTORAGE_KEY, THEMES.DARK)
            return { currentColor: THEMES.DARK }
          case THEMES.DARK:
            if (window && window.localStorage)
              localStorage.setItem(LOCALSTORAGE_KEY, THEMES.LIGHT)
            return { currentColor: THEMES.LIGHT }
          default:
            return
        }
      })
    )
  }

  render() {
    const { children, isMobile } = this.props
    const { currentColor } = this.state
    let themeStyles =
      currentColor === THEMES.LIGHT ? lightThemeStyles : darkThemeStyles
    return (
      <ThemeContext.Provider
        value={{
          currentColor,
          themeStyles,
          toggleTheme: this.toggleTheme,
          isMobile,
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

export default withIsMobile(ThemeProvider)

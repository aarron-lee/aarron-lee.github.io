import React, { Component } from "react"

import darkThemeStyles from "./darkThemeStyles.module.scss"
import lightThemeStyles from "./lightThemeStyles.module.scss"

import withIsMobile from "../withIsMobile"

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
}

const LOCALSTORAGE_KEY = "currentThemeColor"

export const ThemeContext = React.createContext({ theme: THEMES.DARK })

class ThemeProvider extends Component {
  constructor(props) {
    super(props)
    // initialize to dark theme
    this.state = {
      currentColor: THEMES.DARK,
    }
  }

  toggleTheme = () => {
    window.requestAnimationFrame(() =>
      this.setState(prevState => {
        switch (prevState.currentColor) {
          case THEMES.LIGHT:
            if (window && window.localStorage)
              localStorage.setItem(LOCALSTORAGE_KEY, THEMES.DARK)
            window.__initialColor = THEMES.DARK
            return { currentColor: THEMES.DARK }
          case THEMES.DARK:
            if (window && window.localStorage)
              localStorage.setItem(LOCALSTORAGE_KEY, THEMES.LIGHT)
            window.__initialColor = THEMES.LIGHT
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
        <div style={{ display: this.state.currentColor ? "block" : "none" }}>
          {children}
        </div>
      </ThemeContext.Provider>
    )
  }
}

ThemeProvider.defaultProps = {
  children: null,
}

export default withIsMobile(ThemeProvider)

import React from "react"
import Header from "../components/shared/header/header"
import ThemeProvider, { THEMES } from "../components/util/theme/themeProvider"
import ThemeConsumer from "../components/util/theme/themeConsumer"

const Layout = () => (
  <ThemeProvider color={THEMES.LIGHT}>
    <ThemeConsumer>
      {({ themeStyles, toggleTheme }) => (
        <>
          <Header themeStyles={themeStyles} /> <p>hello</p>
          <button onClick={toggleTheme} style={{ marginTop: "170px;" }}>
            test
          </button>
        </>
      )}
    </ThemeConsumer>
  </ThemeProvider>
)

export default Layout

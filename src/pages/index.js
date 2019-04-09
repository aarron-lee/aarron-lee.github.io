import React from "react"
import Header from "../components/shared/header/header"
import ThemeProvider, { THEMES } from "../components/util/theme/themeProvider"
import ThemeConsumer from "../components/util/theme/themeConsumer"

const Layout = () => (
  <ThemeProvider color={THEMES.LIGHT}>
    <ThemeConsumer>
      {({ themeStyles }) => (
        <>
          <Header themeStyles={themeStyles} />
        </>
      )}
    </ThemeConsumer>
  </ThemeProvider>
)

export default Layout

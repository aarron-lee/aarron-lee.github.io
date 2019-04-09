import React from "react"
import Header from "../components/shared/header/header"
import ThemeProvider from "../components/util/theme/themeProvider"
import ThemeConsumer from "../components/util/theme/themeConsumer"

const Layout = () => (
  <ThemeProvider>
    <ThemeConsumer>
      {({ themeStyles }) => (
        <>
          <Header headerColor={themeStyles.headerColor} />
        </>
      )}
    </ThemeConsumer>
  </ThemeProvider>
)

export default Layout

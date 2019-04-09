import React from "react"
import Header from "../components/shared/header/header"
import ThemeProvider from "../components/util/theme/themeProvider"
import ThemeConsumer from "../components/util/theme/themeConsumer"

const Layout = () => (
  <ThemeProvider>
    <ThemeConsumer>
      {({ themeStyles }) => (
        <div>
          <Header headerColor={themeStyles.headerColor} />
          <div
            style={{ marginTop: "55px", width: "100%", height: "100vh" }}
            className={themeStyles.backgroundColor}
          >
            content goes here
          </div>
        </div>
      )}
    </ThemeConsumer>
  </ThemeProvider>
)

export default Layout

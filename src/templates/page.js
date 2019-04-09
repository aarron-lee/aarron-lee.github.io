import React from "react"
import { graphql, Link } from "gatsby"

import Header from "../components/shared/header/header"
import ThemeProvider from "../components/util/theme/themeProvider"
import ThemeConsumer from "../components/util/theme/themeConsumer"
import withIsMobile from "../components/util/withIsMobile"

const Page = ({ isMobile, children }) => (
  <ThemeProvider>
    <ThemeConsumer>
      {({ themeStyles }) => (
        <div>
          <Header headerColor={themeStyles.headerColor} isMobile={isMobile} />
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
            }}
            className={themeStyles.backgroundColor}
          >
            <main style={{ marginTop: "55px" }}>{children}</main>
          </div>
        </div>
      )}
    </ThemeConsumer>
  </ThemeProvider>
)

export default withIsMobile(Page)
